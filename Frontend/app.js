const vaultRoot = '../';

// Auto-detect backend URL based on where the page is served from:
//   - http.server on :8000 (bash Frontend/start.sh)         → talk to :5001 cross-origin
//   - Flask serving everything on :5001  (demo / ngrok / VPS) → same-origin
const BACKEND_URL = (window.location.port === '8000')
    ? 'http://localhost:5001'
    : '';

// State
let indexData = {};
let currentPath = '';
let fullWikiContext = '';

// Auto-link dictionary: lowercase name → index entry (built after loadIndex())
// Used by autoLinkifyConcepts() to turn plain-text mentions into clickable links.
let conceptIndex = {};
let conceptPattern = null;

// Names shorter than this are skipped to avoid spammy matches ("AI", "IS", "CX", "FPT"...)
const AUTO_LINK_MIN_LENGTH = 4;

// DOM Elements
const navMenu = document.getElementById('nav-menu');
const searchInput = document.getElementById('search-input');
const contentBody = document.getElementById('content-body');
const breadcrumbs = document.getElementById('breadcrumbs');
const pageActions = document.getElementById('page-actions');
const welcomeHTML = contentBody.innerHTML;
let riveInstance = null;

// Utility to parse YAML Frontmatter and main content
function parseMarkdownFile(fileText) {
    let frontmatter = {};
    let content = fileText;

    // Support standard YAML frontmatter with ---
    const fmRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = fileText.match(fmRegex);

    if (match) {
        const yamlString = match[1];
        content = match[2];

        yamlString.split('\n').forEach(line => {
            const splitIndex = line.indexOf(':');
            if (splitIndex > -1) {
                const key = line.slice(0, splitIndex).trim();
                let val = line.slice(splitIndex + 1).trim();
                if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
                frontmatter[key] = val;
            }
        });
    }
    return { frontmatter, content };
}

// Custom Renderer for Marked to handle [[WikiLinks]] and Callouts
const renderer = new marked.Renderer();

// Parse callouts from blockquotes
renderer.blockquote = function ({ text }) {
    let content = text;

    if (content.includes('[!NOTE]')) {
        content = content.replace('[!NOTE]', '<strong class="callout-title"><i class="fa-solid fa-circle-info"></i> Note</strong><br>');
        return `<blockquote class="callout-note">${content}</blockquote>`;
    } else if (content.includes('[!WARNING]')) {
        content = content.replace('[!WARNING]', '<strong class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Warning</strong><br>');
        return `<blockquote class="callout-warning">${content}</blockquote>`;
    }
    return `<blockquote>${content}</blockquote>`;
};

// File extensions that should trigger a download link instead of wiki navigation
const DOWNLOADABLE_EXTS = /\.(pdf|pptx?|ppsx?|docx?|xlsx?|xls|csv|zip|rar|7z|svg|png|jpe?g|gif|webp|mp4|mp3|wav|mov)$/i;

// We intercept text parsing to substitute [[Links]]
//   [[Page Name]]                 → wiki-link span (loads page in viewer)
//   [[file:path/to/file.pdf]]     → download-link anchor (force downloads)
//   [[path/to/file.pdf]]          → same as above (auto-detected by extension)
//   [[Page|Alias]] / [[file:...|Alias]]  → custom label after "|"
function preprocessWikiLinks(text) {
    return text.replace(/\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]/g, (match, linkTarget, alias) => {
        const target = linkTarget.trim();

        // Decide whether this is a downloadable file reference
        let filePath = null;
        if (/^file:/i.test(target)) {
            // Explicit: [[file:raw/foo.pdf]]
            filePath = target.replace(/^file:\s*/i, '').replace(/^\/+/, '');
        } else if (DOWNLOADABLE_EXTS.test(target) && target.includes('/')) {
            // Implicit: [[raw/foo.pdf]] — recognised by binary extension + path separator
            filePath = target.replace(/^\/+/, '');
        }

        if (filePath) {
            const fileName = filePath.split('/').pop();
            const label = alias || fileName;
            const safeUrl = filePath.split('/').map(encodeURIComponent).join('/');
            const href = `${BACKEND_URL}/api/file/${safeUrl}`;
            return `<a class="download-link" href="${href}" title="Download ${filePath}"><i class="fa-solid fa-download"></i> ${label}</a>`;
        }

        // Regular wiki link
        const display = alias || target;
        return `<span class="wiki-link" data-target="${target}">${display}</span>`;
    });
}

function resolveFilePath(targetName) {
    if (targetName.toLowerCase() === 'overview') return `wiki/overview.md`;

    for (const [section, items] of Object.entries(indexData)) {
        const item = items.find(i => i.link === targetName);
        if (item && item.path) {
            return item.path;
        }
    }

    return `wiki/concepts/${targetName}.md`; // Fallback
}

async function loadIndex() {
    try {
        const res = await fetch(`${vaultRoot}wiki/index.md`);
        if (!res.ok) throw new Error('Cannot load index.md. Are you running a local web server (e.g. "python -m http.server")?');
        const text = await res.text();

        const lines = text.split('\n');
        let currentSection = '';
        let currentFolder = '';
        let currentGroup = '';
        indexData = {};

        lines.forEach(line => {
            if (line.startsWith('## ')) {
                currentSection = line.replace('## ', '').trim();
                indexData[currentSection] = [];
                currentFolder = currentSection.toLowerCase();
                currentGroup = '';
            } else if (line.startsWith('#### ')) {
                currentGroup = line.replace('#### ', '').trim();
            } else if (line.startsWith('### ')) {
                currentGroup = '';
            } else if (line.trim().startsWith('`wiki/')) {
                const match = line.match(/`wiki\/(.*)\/`/);
                if (match) {
                    currentFolder = match[1];
                }
            } else if (line.startsWith('- [[') && currentSection) {
                const match = line.match(/- \[\[(.*?)\]\](?: — (.*))?/);
                if (match) {
                    indexData[currentSection].push({
                        link: match[1],
                        desc: match[2] || '',
                        path: `wiki/${currentFolder}/${match[1]}.md`,
                        group: currentGroup
                    });
                }
            }
        });

        renderSidebar();
        rebuildConceptIndex();
        preloadAllWikiFiles();
    } catch (err) {
        contentBody.innerHTML = `<div style="color:#ef4444; padding: 2rem; background: rgba(0,0,0,0.5); border-radius: 8px;">
            <h2><i class="fa-solid fa-triangle-exclamation"></i> System Error</h2>
            <p style="margin-top: 1rem; color: #fff;">${err.message}</p>
            <p style="margin-top: 1rem; color: #fff;">Because of browser security policies (CORS), you must run a local server to access local folders.</p>
            <p style="margin-top: 1rem; color: #fff;">Try running <code>python3 -m http.server</code> in the terminal, then visit <code>http://localhost:8000</code></p>
        </div>`;
    }
}

const SOURCE_BRAND_FIXES = {
    'akabot': 'akaBot', 'akaverse': 'akaVerse', 'akames': 'akaMES',
    'akafortune': 'akaFortune', 'fpt': 'FPT', 'is': 'IS', 'cx': 'CX',
    'ai': 'AI', 'geobase': 'GeoBase', 'lendvero': 'LendVero',
    'vertzero': 'VertZéro', 'vioedu': 'VioEdu', 'codelearn': 'CodeLearn',
    'azinsu': 'AZINSU', 'azladin': 'Azladin', 'utop': 'Utop',
    'procuva': 'Procuva', 'kyta': 'Kyta', 'archivenex': 'ArchiveNex',
    'bss': 'BSS', 'ems': 'EMS', 'esign': 'eSign', 'eid': 'eID',
    'spro': 'SPro', 'vi': 'VI', 'en': 'EN', 'los': 'LOS', 'crm': 'CRM',
    'mbf': 'MBF', 'mvno': 'MVNO', 'mno': 'MNO', 'bfsi': 'BFSI',
    'hrm': 'HRM', 'erp': 'ERP', 'debtcollection': 'Debt Collection',
    'cx': 'CX', 'saas': 'SaaS', 'api': 'API', 'erp': 'ERP',
};

function formatSourceLink(slug) {
    const match = slug.match(/^(\d{4})-(\d{2})-\d{2}_(.+)$/);
    if (!match) return slug;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = `${months[parseInt(match[2]) - 1]} ${match[1]}`;
    const name = match[3]
        .split('-')
        .map(w => SOURCE_BRAND_FIXES[w.toLowerCase()] || w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    return `${name}  ·  ${date}`;
}

function renderNavItem(item, container) {
    const a = document.createElement('a');
    a.className = 'nav-item';
    a.textContent = /^\d{4}-\d{2}-\d{2}_/.test(item.link)
        ? formatSourceLink(item.link)
        : item.link;
    a.title = item.desc;
    a.onclick = (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        a.classList.add('active');
        const filePath = resolveFilePath(item.link);
        loadPage(filePath, item.link);
    };
    container.appendChild(a);
}

function renderSidebar(filter = '') {
    navMenu.innerHTML = '';
    const lf = filter.toLowerCase();

    for (const [section, items] of Object.entries(indexData)) {
        const filteredItems = items.filter(i =>
            i.link.toLowerCase().includes(lf) ||
            i.desc.toLowerCase().includes(lf) ||
            (i.group && i.group.toLowerCase().includes(lf))
        );

        if (filteredItems.length === 0) continue;

        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'nav-section';

        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'nav-section-title';
        sectionTitle.innerHTML = `<span>${section}</span> <i class="fa-solid fa-chevron-down toggle-icon"></i>`;

        const sectionContent = document.createElement('div');
        sectionContent.className = 'nav-section-content';

        sectionTitle.onclick = () => sectionDiv.classList.toggle('collapsed');
        sectionDiv.appendChild(sectionTitle);

        const hasGroups = filteredItems.some(i => i.group);

        if (hasGroups) {
            // Collect groups
            const groupMap = {};
            filteredItems.forEach(item => {
                const g = item.group || '';
                if (!groupMap[g]) groupMap[g] = [];
                groupMap[g].push(item);
            });

            // Sort group names A-Z (case-insensitive)
            const sortedGroups = Object.keys(groupMap).sort((a, b) =>
                a.localeCompare(b, undefined, { sensitivity: 'base' })
            );

            sortedGroups.forEach(groupName => {
                if (!groupName) {
                    groupMap[groupName].forEach(item => renderNavItem(item, sectionContent));
                    return;
                }

                const groupDiv = document.createElement('div');
                groupDiv.className = 'nav-group';
                // Auto-expand when filtering
                if (filter) groupDiv.classList.add('open');

                const groupTitle = document.createElement('div');
                groupTitle.className = 'nav-group-title';
                groupTitle.innerHTML =
                    `<i class="fa-solid fa-chevron-right nav-group-icon"></i>` +
                    `<span>${groupName}</span>` +
                    `<span class="nav-group-count">${groupMap[groupName].length}</span>`;

                const groupContent = document.createElement('div');
                groupContent.className = 'nav-group-content';

                groupTitle.onclick = () => groupDiv.classList.toggle('open');

                groupMap[groupName].forEach(item => renderNavItem(item, groupContent));

                groupDiv.appendChild(groupTitle);
                groupDiv.appendChild(groupContent);
                sectionContent.appendChild(groupDiv);
            });
        } else {
            filteredItems.forEach(item => renderNavItem(item, sectionContent));
        }

        sectionDiv.appendChild(sectionContent);
        navMenu.appendChild(sectionDiv);
    }
}

async function preloadAllWikiFiles() {
    console.log("Starting background preload of entire Wiki...");
    let allText = `# WIKI CONTEXT DIRECTORY\n\n`;
    const fetchPromises = [];

    // Attempt to load overview
    fetchPromises.push(
        fetch(`${vaultRoot}wiki/overview.md`).then(r => r.ok ? r.text() : '').then(t => { if (t) allText += `\n--- [Overview] ---\n${t}\n`; }).catch(() => { })
    );

    for (const [, items] of Object.entries(indexData)) {
        for (const item of items) {
            const path = resolveFilePath(item.link);
            fetchPromises.push(
                fetch(`${vaultRoot}${path}`).then(r => r.ok ? r.text() : '').then(t => { if (t) allText += `\n--- [${item.link}] ---\n${t}\n`; }).catch(() => { })
            );
        }
    }

    await Promise.allSettled(fetchPromises);
    fullWikiContext = allText;
    console.log(`Preloaded wiki into memory: ${Math.round(fullWikiContext.length / 1024)} KB of text.`);
}

async function loadPage(filePath, pageName) {
    try {
        if (currentPath === filePath) return;
        currentPath = filePath;

        if (riveInstance) {
            riveInstance.cleanup();
            riveInstance = null;
        }
        contentBody.innerHTML = `<div style="padding: 2rem; color: var(--text-muted); text-align: center; margin-top: 2rem;">
            <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
            <p style="margin-top: 1rem;">Loading document...</p>
        </div>`;
        const res = await fetch(`${vaultRoot}${filePath}`);
        if (!res.ok) throw new Error(`Document not found (${res.status})`);

        const rawText = await res.text();
        const { frontmatter, content } = parseMarkdownFile(rawText);

        const breadcrumbSpan = breadcrumbs.querySelector('span');
        if (breadcrumbSpan) breadcrumbSpan.innerHTML = `Wiki / <span>${pageName}</span>`;

        pageActions.innerHTML = '';
        if (frontmatter.source_file) {
            const btn = document.createElement('a');
            btn.href = `${vaultRoot}${frontmatter.source_file}`;
            btn.target = "_blank";
            btn.className = "source-btn";
            btn.innerHTML = `<i class="fa-solid fa-download"></i> Access Source Document`;
            pageActions.appendChild(btn);
        }

        const processedContent = preprocessWikiLinks(content);

        const lowerPageName = pageName.toLowerCase();
        const riveConfigs = {
            'overview': { src: 'Asset/mbf.riv', artboard: 'Main', stateMachine: 'State Machine 1', anchor: '70+ sản phẩm.', aspectRatio: '19/6' },
            'akabot': { src: 'Asset/akabot_mascot.riv', artboard: 'Main', stateMachine: 'State Machine 1', aspectRatio: '1/1', style: 'max-width: 400px; margin-left: auto; margin-right: auto; margin-top: -2rem; border-radius: 20px;' },
            'vioedu': { src: 'Asset/vioedu_mascot.riv', artboard: 'Main', stateMachine: 'State Machine 1', aspectRatio: '1/1', style: 'max-width: 400px; margin-left: auto; margin-right: auto; margin-top: -2rem; border-radius: 20px;' },
            'vertzero': { src: 'Asset/vertzero.riv', artboard: 'Main', stateMachine: 'State Machine 1' },
            'vertzéro': { src: 'Asset/vertzero.riv', artboard: 'Main', stateMachine: 'State Machine 1' },
            'azladin': { src: 'Asset/brochure_azladin.riv', artboard: 'Main', stateMachine: 'State Machine 1' },
            'azinsu': { src: 'Asset/azinsu_claim.riv', artboard: 'Main', stateMachine: 'State Machine 1', anchor: '## AI CLAIM sub-product' }
        };

        const pageRive = riveConfigs[lowerPageName];
        if (pageRive) {
            let parts = [];
            let hasDivider = false;

            if (pageRive.anchor) {
                // Split after the specific anchor (e.g., a sub-heading)
                const anchorIndex = processedContent.indexOf(pageRive.anchor);
                if (anchorIndex !== -1) {
                    const splitPoint = anchorIndex + pageRive.anchor.length;
                    parts = [
                        processedContent.slice(0, splitPoint),
                        processedContent.slice(splitPoint)
                    ];
                }
            } else {
                // Default: Try splitting by the first divider or the next section header after Overview
                parts = processedContent.split(/\n---\n/);
                hasDivider = parts.length > 1;

                if (!hasDivider) {
                    const lines = processedContent.split('\n');
                    let splitIndex = -1;
                    let foundOverview = false;

                    for (let i = 0; i < lines.length; i++) {
                        if (lines[i].includes('## Overview')) {
                            foundOverview = true;
                            continue;
                        }
                        if (foundOverview && lines[i].startsWith('## ')) {
                            splitIndex = i;
                            break;
                        }
                    }

                    if (splitIndex !== -1) {
                        parts = [
                            lines.slice(0, splitIndex).join('\n'),
                            lines.slice(splitIndex).join('\n')
                        ];
                    }
                }
            }

            if (parts.length > 1) {
                const headHtml = marked.parse(parts[0], { renderer });
                const restHtml = marked.parse(parts.slice(1).join(hasDivider ? '\n---\n' : '\n'), { renderer });
                contentBody.innerHTML = `
                    ${headHtml}
                    <div class="rive-container" style="margin-top: 2rem; margin-bottom: 2rem; border-radius: 12px; ${pageRive.aspectRatio ? `aspect-ratio: ${pageRive.aspectRatio};` : ''} ${pageRive.style || ''}">
                        <canvas id="rive-canvas"></canvas>
                        <button class="rive-fullscreen-btn" title="Full Screen">
                            <i class="fa-solid fa-expand"></i>
                        </button>
                    </div>
                    ${hasDivider ? '<hr>' : ''}
                    ${restHtml}
                `;
            } else {
                // Fallback: prepend if no logical split point found
                contentBody.innerHTML = `
                    <div class="rive-container" style="margin-top: -3rem; margin-bottom: 2rem; ${pageRive.aspectRatio ? `aspect-ratio: ${pageRive.aspectRatio};` : ''} ${pageRive.style || ''}">
                        <canvas id="rive-canvas"></canvas>
                        <button class="rive-fullscreen-btn" title="Full Screen">
                            <i class="fa-solid fa-expand"></i>
                        </button>
                    </div>
                    ${marked.parse(processedContent, { renderer })}
                `;
            }
            initRive(pageRive.src, pageRive.artboard, pageRive.stateMachine);
        } else {
            contentBody.innerHTML = marked.parse(processedContent, { renderer });
        }

        document.querySelectorAll('.wiki-link').forEach(link => {
            link.addEventListener('click', () => {
                const target = link.getAttribute('data-target');
                const targetPath = resolveFilePath(target);
                loadPage(targetPath, target);
            });
        });

    } catch (err) {
        contentBody.innerHTML = `<div style="color:#ef4444; padding: 2rem; background: rgba(0,0,0,0.5); border-radius: 8px;">
            <h3><i class="fa-solid fa-circle-xmark"></i> Error Loading Document</h3>
            <p style="margin-top: 1rem; color: #fff;">${err.message}</p>
            <p style="margin-top: 0.5rem; color: #94a3b8;">Path attempted: <code>${filePath}</code></p>
        </div>`;
    }
}

document.getElementById('refresh-index').addEventListener('click', loadIndex);
const clearSearch = document.getElementById('clear-search');

searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    clearSearch.style.display = val ? 'block' : 'none';
    renderSidebar(val);
});

clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.style.display = 'none';
    renderSidebar('');
    searchInput.focus();
});

marked.setOptions({
    breaks: true,
    gfm: true
});

loadIndex();

// ====== Chatbot Logic (V2 — Cowork style) ======
// Talks to local backend at BACKEND_URL (declared at top of file).
// Streams tokens via SSE, supports tool use (Claude) or context injection (Gemini).

const chatHistory = document.getElementById('chat-history');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const apiKeyBtn = document.getElementById('api-key-btn');

// Provider + session state
let activeProvider = localStorage.getItem('active_provider') || 'claude';
let sessionId = localStorage.getItem('chat_session_id') || null;
chatInput.placeholder = `Ask ${activeProvider === 'gemini' ? 'Gemini' : 'Claude'}...`;

// On startup, ask backend which providers are actually configured.
// If the saved active provider isn't available, silently fall back to the
// one that is — so a user with only a Gemini key doesn't hit a 401 on first chat.
(async function syncActiveProvider() {
    try {
        const r = await fetch(`${BACKEND_URL}/api/providers`);
        if (!r.ok) return;
        const p = await r.json();
        const claudeOK = !!p.claude, geminiOK = !!p.gemini;

        if (activeProvider === 'claude' && !claudeOK && geminiOK) {
            activeProvider = 'gemini';
            localStorage.setItem('active_provider', 'gemini');
            chatInput.placeholder = 'Ask Gemini...';
        } else if (activeProvider === 'gemini' && !geminiOK && claudeOK) {
            activeProvider = 'claude';
            localStorage.setItem('active_provider', 'claude');
            chatInput.placeholder = 'Ask Claude...';
        }
    } catch (e) {
        // Backend not reachable — leave activeProvider alone, will error later
    }
})();

// Settings: provider switch + new chat + health check
apiKeyBtn.addEventListener('click', () => {
    const choice = prompt(
        `Current provider: ${activeProvider.toUpperCase()}\n\n` +
        `Type '1' to switch to CLAUDE\n` +
        `Type '2' to switch to GEMINI\n` +
        `Type '3' to start a NEW chat (clear memory)\n` +
        `Type '4' to check backend health`,
        "1"
    );

    if (choice === "1") {
        activeProvider = 'claude';
        localStorage.setItem('active_provider', 'claude');
        chatInput.placeholder = 'Ask Claude...';
        resetSession();
        alert('Switched to CLAUDE. New chat started.');
    } else if (choice === "2") {
        activeProvider = 'gemini';
        localStorage.setItem('active_provider', 'gemini');
        chatInput.placeholder = 'Ask Gemini...';
        resetSession();
        alert('Switched to GEMINI. New chat started.');
    } else if (choice === "3") {
        resetSession();
        chatHistory.innerHTML = `<div class="chat-bubble bot">
            Hi, I'm AMI – your Made by FPT Ambassador! How can I help?
        </div>`;
    } else if (choice === "4") {
        fetch(`${BACKEND_URL}/api/health`)
            .then(r => r.json())
            .then(info => {
                alert(
                    `Backend Health\n──────────────\n` +
                    `Vault:           ${info.vault}\n` +
                    `CLAUDE.md:       ${info.claude_md ? 'loaded' : 'MISSING'}\n` +
                    `Claude ready:    ${info.claude_ready}${info.claude_error ? ' (' + info.claude_error + ')' : ''}\n` +
                    `Gemini ready:    ${info.gemini_ready}${info.gemini_error ? ' (' + info.gemini_error + ')' : ''}\n` +
                    `Wiki loaded:     ${info.wiki_kb} KB\n` +
                    `Active sessions: ${info.sessions}`
                );
            })
            .catch(err => alert(`⚠️ Backend not reachable at ${BACKEND_URL}\n\n${err.message}\n\nMake sure backend_app.py is running.`));
    }
});

function resetSession() {
    if (sessionId) {
        fetch(`${BACKEND_URL}/api/reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ session_id: sessionId }),
        }).catch(() => { });
    }
    sessionId = null;
    localStorage.removeItem('chat_session_id');
}

function addChatMessage(message, sender, isHtml = false) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    if (isHtml) {
        bubble.innerHTML = message;
    } else {
        bubble.textContent = message;
    }
    chatHistory.appendChild(bubble);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    return bubble;
}

function addToolIndicator(toolInfo) {
    const div = document.createElement('div');
    div.className = 'chat-tool-indicator';
    const args = JSON.stringify(toolInfo.input).slice(0, 140);
    div.innerHTML = `<i class="fa-solid fa-screwdriver-wrench"></i> <code>${toolInfo.name}(${args})</code>`;
    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Turn wiki-link spans inside a container into clickable elements
// that load the target page in the main content viewer.
function attachWikiLinkHandlers(container) {
    container.querySelectorAll('.wiki-link').forEach(link => {
        link.style.cursor = 'pointer';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            if (!target) return;
            const targetPath = resolveFilePath(target);
            loadPage(targetPath, target);
        });
    });
}

// Build a lookup table of every wiki page title (from indexData) so we can
// auto-link plain-text mentions of concepts/products/sources that the AI
// forgot to wrap in [[...]].  Called once after loadIndex().
function rebuildConceptIndex() {
    conceptIndex = {};
    const keys = [];
    for (const section of Object.values(indexData)) {
        if (!Array.isArray(section)) continue;
        for (const item of section) {
            const name = (item.link || '').trim();
            if (name.length < AUTO_LINK_MIN_LENGTH) continue;
            const key = name.toLowerCase();
            if (conceptIndex[key]) continue; // first wins
            conceptIndex[key] = item;
            keys.push(name);
        }
    }

    if (keys.length === 0) {
        conceptPattern = null;
        return;
    }

    // Longer names first so "FPT BSS" matches before "BSS"
    keys.sort((a, b) => b.length - a.length);
    const escaped = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    // Word-boundary-ish: match if surrounded by non-letter / non-digit (works for mixed-case brands)
    conceptPattern = new RegExp(`(?<![\\w.-])(${escaped.join('|')})(?![\\w.-])`, 'gi');
}

// Walk text nodes inside `container` and wrap every plain-text mention of a
// known wiki concept in a <span class="wiki-link"> so the user can click it.
// Already-linked text (inside <a>, .wiki-link, .download-link, <code>, <pre>)
// is skipped to avoid double-wrapping.
function autoLinkifyConcepts(container) {
    if (!conceptPattern || Object.keys(conceptIndex).length === 0) return;

    const SKIP_TAGS = new Set(['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'H1', 'H2', 'H3']);
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            let p = node.parentElement;
            while (p && p !== container) {
                if (SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                if (p.classList && (
                    p.classList.contains('wiki-link') ||
                    p.classList.contains('download-link')
                )) return NodeFilter.FILTER_REJECT;
                p = p.parentElement;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    for (const node of textNodes) {
        const text = node.nodeValue;
        conceptPattern.lastIndex = 0;
        if (!conceptPattern.test(text)) continue;
        conceptPattern.lastIndex = 0;

        const frag = document.createDocumentFragment();
        let last = 0;
        let m;
        while ((m = conceptPattern.exec(text)) !== null) {
            const matchStart = m.index;
            const matchText = m[0];
            if (matchStart > last) {
                frag.appendChild(document.createTextNode(text.slice(last, matchStart)));
            }
            const entry = conceptIndex[matchText.toLowerCase()];
            if (entry) {
                const span = document.createElement('span');
                span.className = 'wiki-link';
                span.setAttribute('data-target', entry.link);
                span.textContent = matchText; // preserve original casing
                frag.appendChild(span);
            } else {
                frag.appendChild(document.createTextNode(matchText));
            }
            last = matchStart + matchText.length;
        }
        if (last < text.length) {
            frag.appendChild(document.createTextNode(text.slice(last)));
        }
        node.parentNode.replaceChild(frag, node);
    }
}

function findFirstWikiLink(text) {
    // 1. Check for manual WikiLinks [[Target]]
    const manualMatch = text.match(/\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]/);
    if (manualMatch) return manualMatch[1].trim();

    // 2. Check for auto-link concepts using the pre-built pattern
    if (conceptPattern) {
        conceptPattern.lastIndex = 0;
        const autoMatch = conceptPattern.exec(text);
        if (autoMatch) return autoMatch[1] || autoMatch[0];
    }
    return null;
}

// Render assistant markdown + wiki links in one pass.
function renderAssistantMarkdown(container, rawText) {
    const processed = preprocessWikiLinks(rawText);
    container.innerHTML = marked.parse(processed, { renderer });
    autoLinkifyConcepts(container); // turn plain-text concept mentions into links
    attachWikiLinkHandlers(container);
}

// ---- Streaming SSE call to local backend ----
async function callBackend(userText) {
    // Create bot bubble up-front so we can stream into it
    const botBubble = addChatMessage('', 'bot');
    botBubble.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;

    let fullText = '';
    let hasStartedText = false;

    try {
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question: userText,
                session_id: sessionId,
                provider: activeProvider,
            }),
        });

        if (!response.ok) {
            const errBody = await response.text().catch(() => '');
            throw new Error(`Backend HTTP ${response.status}: ${errBody || response.statusText}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });

            let idx;
            while ((idx = buffer.indexOf('\n\n')) >= 0) {
                const raw = buffer.slice(0, idx);
                buffer = buffer.slice(idx + 2);

                const ev = {};
                raw.split('\n').forEach(line => {
                    const m = line.match(/^(\w+): (.*)$/);
                    if (m) ev[m[1]] = m[2];
                });

                if (ev.event === 'session') {
                    sessionId = ev.data;
                    localStorage.setItem('chat_session_id', sessionId);
                } else if (ev.event === 'token') {
                    const piece = JSON.parse(ev.data);
                    if (!hasStartedText) {
                        botBubble.innerHTML = '';
                        hasStartedText = true;
                    }
                    fullText += piece;
                    // Render markdown + wiki links incrementally so they're live
                    renderAssistantMarkdown(botBubble, fullText);
                    chatHistory.scrollTop = chatHistory.scrollHeight;
                } else if (ev.event === 'tool') {
                    const toolInfo = JSON.parse(ev.data);
                    addToolIndicator(toolInfo);
                } else if (ev.event === 'error') {
                    const errMsg = JSON.parse(ev.data);
                    botBubble.innerHTML = `⚠️ ${errMsg}`;
                    return;
                } else if (ev.event === 'done') {
                    if (fullText) {
                        renderAssistantMarkdown(botBubble, fullText);
                        
                        // Auto-navigate to the first product/source mentioned if we're not already there
                        const target = findFirstWikiLink(fullText);
                        if (target) {
                            const targetPath = resolveFilePath(target);
                            if (targetPath && targetPath !== currentPath) {
                                loadPage(targetPath, target);
                            }
                        }
                    }
                    return;
                }
            }
        }
    } catch (err) {
        botBubble.innerHTML = `⚠️ ${err.message}<br><small>Kiểm tra backend đang chạy tại ${BACKEND_URL} chưa?</small>`;
    }
}

async function processChat() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    addChatMessage(msg, 'user');
    chatInput.value = '';
    sendBtn.disabled = true;

    try {
        await callBackend(msg);
    } finally {
        sendBtn.disabled = false;
        chatInput.focus();
    }
}

sendBtn.addEventListener('click', processChat);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processChat();
});


// ====== Rive Animation ======
function initRive(src = 'Asset/test.riv', artboard = 'Main', stateMachine = 'State Machine 1') {
    const canvas = document.getElementById('rive-canvas');
    if (!canvas) return;

    if (riveInstance) riveInstance.cleanup();

    riveInstance = new rive.Rive({
        src: src,
        canvas: canvas,
        artboard: artboard,
        stateMachines: stateMachine,
        autoplay: true,
        autoBind: true,
        onLoad: () => {
            riveInstance.resizeDrawingSurfaceToCanvas();
        },
    });

    // Handle Fullscreen
    const container = canvas.closest('.rive-container');
    const fsBtn = container?.querySelector('.rive-fullscreen-btn');
    if (fsBtn && container) {
        fsBtn.onclick = () => {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            }
        };
    }
}

function showWelcomeScreen() {
    contentBody.innerHTML = welcomeHTML;
    const breadcrumbSpan = breadcrumbs.querySelector('span');
    if (breadcrumbSpan) breadcrumbSpan.textContent = 'Home';
    pageActions.innerHTML = '';
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    initRive();
}

document.getElementById('home-btn').addEventListener('click', showWelcomeScreen);

document.addEventListener('fullscreenchange', () => {
    if (riveInstance) {
        setTimeout(() => riveInstance.resizeDrawingSurfaceToCanvas(), 100);
    }
});

window.addEventListener('resize', () => {
    if (riveInstance) riveInstance.resizeDrawingSurfaceToCanvas();
});

// Initial load
initRive();
initResizers();
initChatToggle();

// ====== Chat Sidebar Toggle ======
function initChatToggle() {
    const chatToggle = document.getElementById('chat-toggle');
    const app = document.getElementById('app');

    // Check persisted state
    if (localStorage.getItem('chat_hidden') === 'true') {
        app.classList.add('chat-hidden');
    } else {
        chatToggle.classList.add('active');
    }

    chatToggle.addEventListener('click', () => {
        const isHidden = app.classList.toggle('chat-hidden');
        chatToggle.classList.toggle('active');
        localStorage.setItem('chat_hidden', isHidden);

        // Resize Rive if visible
        if (riveInstance) {
            setTimeout(() => riveInstance.resizeDrawingSurfaceToCanvas(), 100);
        }
    });
}

// ====== Sidebar Resizing ======
function initResizers() {
    const leftResizer = document.getElementById('left-resizer');
    const rightResizer = document.getElementById('right-resizer');
    const sidebar = document.getElementById('sidebar');
    const chatSidebar = document.getElementById('chat-sidebar');

    const minWidth = 260;
    const baseWidth = 320;

    function startResizing(e, direction) {
        document.body.style.cursor = 'col-resize';
        const startX = e.clientX;
        const startWidth = direction === 'left' ? sidebar.offsetWidth : chatSidebar.offsetWidth;
        const resizer = direction === 'left' ? leftResizer : rightResizer;
        const appWidth = document.getElementById('app').offsetWidth;

        // Calculate dynamic constraints
        const currentMaxWidth = direction === 'left'
            ? baseWidth * 1.2
            : appWidth * 0.5; // Chat sidebar can reach 50% of workspace

        resizer.classList.add('dragging');

        // Prevent text selection while resizing
        document.body.style.userSelect = 'none';

        function onMouseMove(e) {
            let newWidth;
            if (direction === 'left') {
                newWidth = startWidth + (e.clientX - startX);
            } else {
                newWidth = startWidth - (e.clientX - startX);
            }

            if (newWidth >= minWidth && newWidth <= currentMaxWidth) {
                if (direction === 'left') {
                    sidebar.style.width = `${newWidth}px`;
                } else {
                    chatSidebar.style.width = `${newWidth}px`;
                }
            }
        }

        function onMouseUp() {
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
            resizer.classList.remove('dragging');
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }

    if (leftResizer) leftResizer.addEventListener('mousedown', (e) => startResizing(e, 'left'));
    if (rightResizer) rightResizer.addEventListener('mousedown', (e) => startResizing(e, 'right'));
}
