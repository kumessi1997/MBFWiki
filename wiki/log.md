# Wiki Log

Append-only. Newest entries at the bottom.
Parse with: `grep "^## \[" wiki/log.md | tail -5`

---

## [2026-04-12] edit | Wiki initialized

- Created CLAUDE.md schema
- Created wiki/ directory structure (entities/, concepts/, sources/, analyses/)
- Created wiki/index.md (empty catalog)
- Created wiki/log.md (this file)
- Created wiki/overview.md (stub)
- Sources directory: sources/ with assets/ subfolder

Open: awaiting first source ingest.

---

## [2026-04-12] ingest | AI 2027 (Kokotajlo, Lifland et al., April 2025)

Source file: `raw/AI 2027.md`

Pages created:
- `wiki/sources/2025-04-03_ai-2027.md` — source summary
- `wiki/entities/Daniel Kokotajlo.md`
- `wiki/entities/OpenBrain.md`
- `wiki/entities/DeepCent.md`
- `wiki/concepts/AI R&D Progress Multiplier.md`
- `wiki/concepts/Intelligence Explosion.md`
- `wiki/concepts/AI Alignment.md`
- `wiki/concepts/AI Arms Race (US-China).md`
- `wiki/concepts/Model Weight Security.md`
- `wiki/concepts/Mechanistic Interpretability.md`
- `wiki/concepts/Sandbagging.md`
- `wiki/concepts/Compute Scaling.md`

Pages updated:
- `wiki/index.md` — added all 14 new pages
- `wiki/overview.md` — initial thesis, themes, open questions, reading list
- `wiki/log.md` — this entry

Entity stubs created but not yet fleshed out (need more sources):
- [[Eli Lifland]] (entry in index only)
- [[Scott Alexander]] (entry in index only)
- [[Thomas Larsen]] (entry in index only)

Open follow-ups:
- AI 2027 "slowdown" ending not fully read — worth ingesting separately
- Need alternative timeline forecasts to triangulate AI 2027's predictions
- Neuralese and Iterated Distillation and Amplification are wikilinked but lack their own pages

---

## [2026-04-12] ingest | Danh Mục Sản Phẩm MBF 2025 (FPT Product Catalog)

Source file: `raw/Danh muc san pham MBF.pdf` (126 pages, 34MB — required poppler install to extract)

Pages created:
- `wiki/sources/2025-04-10_fpt-mbf-product-catalog.md` — source summary
- `wiki/entities/FPT Corporation.md`
- `wiki/entities/akaBot.md`
- `wiki/entities/FPT Semiconductor.md`
- `wiki/concepts/RPA and Hyperautomation.md`
- `wiki/concepts/Digital Transformation (Vietnam).md`
- `wiki/concepts/e-Government (Vietnam).md`

Pages updated:
- `wiki/index.md` — added 2 sources, 3 entities, 3 concepts
- `wiki/log.md` — this entry

Cross-wiki connections made:
- RPA and Hyperautomation links to AI 2027 (agentic automation as a precursor to AI agents)

Open follow-ups:
- FPT Semiconductor page is sparse — no specific chip products listed in catalog; needs a dedicated source
- akaMES, UTOP, VertZéro, FPT.EagleEye all warrant their own entity pages if more sources are added
- Catalog is sales-oriented; does not include pricing, market share data, or competitive positioning details

---

## [2026-04-12] ingest | akaBot folder (Brochures, Pricing, Sales Training)

Source files ingested (skipped: brand assets, fonts, images, PPTX files):
- `raw/akabot/2. Brochure/EN-Akabot Automation Ecosystem introduction-06.2025.pdf`
- `raw/akabot/2. Brochure/EN-Akabot for Banking-06.2025.pdf`
- `raw/akabot/2. Brochure/EN-Akabot for Manufacturing-06.2025.pdf`
- `raw/akabot/2. Brochure/EN-Akabot for Retail-06.2025.pdf`
- `raw/akabot/3. Saleskit/Bang gia License akaBot.pdf`
- `raw/akabot/3. Saleskit/akaBot Leaflet.pdf`
- `raw/akabot/4. Sales training/akaBot Training for AM.pdf`

Pages created:
- `wiki/sources/2025-06-01_akabot-ecosystem-brochure.md`
- `wiki/sources/2025-06-01_akabot-pricing.md`
- `wiki/sources/2025-06-01_akabot-industry-brochures.md`
- `wiki/entities/TPBank.md`
- `wiki/entities/Central Retail Vietnam.md`
- `wiki/concepts/Agentic Process Automation.md`
- `wiki/concepts/Center of Excellence (RPA).md`
- `wiki/concepts/Intelligent Document Processing.md`

Pages updated:
- `wiki/entities/akaBot.md` — fully rebuilt with pricing, full platform, case studies, competitive positioning (source_count: 1 → 4)
- `wiki/index.md` — added 3 sources, 2 entities, 3 concepts
- `wiki/log.md` — this entry

Key cross-wiki connections made:
- Agentic Process Automation links to AI 2027 — commercial APA mirrors early AI agent trajectory in scenario
- akaBot pricing confirms cost-competitive positioning cited in case studies

Open follow-ups:
- Brand guideline PDF not read (design-only content, low value for wiki)
- PPTX investment deck (Akabot APA_Investment) not ingested — may contain financial/market data worth reading
- VI-language brochures not ingested (duplicate content in Vietnamese)
- akaBot competitive analysis vs. UiPath/Automation Anywhere would strengthen positioning pages

---

## [2026-04-13] ingest | FPT IS Product Portfolio (Aug 2025)

Source file: `raw/Product Portfolio/(EN) Product_Portfolio_1808.pdf` (24 slides)

Pages created:
- `wiki/sources/2025-08-18_fpt-is-product-portfolio.md` — source summary
- `wiki/entities/FPT IS.md` — FPT IS company profile with full product structure table
- `wiki/analyses/2026-04-13_fpt-is-full-product-list.md` — complete product catalog (70 products in tables)

Pages updated:
- `wiki/index.md` — added source, entity, analysis; stats now 5 sources · 6 entities · 6 concepts · 1 analysis

Open follow-ups:
- No dedicated concept/entity pages created for product families (Volar, Votum, Velox, akaMES, Utop, AZINSU) — create if deeper dives needed
- Healthcare vertical (FPT.eHospital, Azladin, etc.) has no prior wiki coverage — worth expanding
- Insurance vertical (AZINSU) entirely new — no prior coverage
- FPT Culture Tech (DigitalizeX, ArchiveNex, ExperienceX & TourismX) is a distinctive heritage-digitization sub-portfolio worth its own concept page
- No pricing data in this document — pricing only known for akaBot (from prior source)

---

## [2026-04-13] edit | Removed all AI 2027 content

User requested removal of all information related to the AI 2027 article.

Pages deleted:
- `wiki/sources/2025-04-03_ai-2027.md`
- `wiki/entities/Daniel Kokotajlo.md`
- `wiki/entities/OpenBrain.md`
- `wiki/entities/DeepCent.md`
- `wiki/entities/Eli Lifland.md`
- `wiki/entities/Scott Alexander.md`
- `wiki/entities/Thomas Larsen.md`
- `wiki/concepts/AI R&D Progress Multiplier.md`
- `wiki/concepts/Intelligence Explosion.md`
- `wiki/concepts/AI Alignment.md`
- `wiki/concepts/AI Arms Race (US-China).md`
- `wiki/concepts/Model Weight Security.md`
- `wiki/concepts/Mechanistic Interpretability.md`
- `wiki/concepts/Sandbagging.md`
- `wiki/concepts/Compute Scaling.md`

Pages updated:
- `wiki/concepts/RPA and Hyperautomation.md` — removed [[AI 2027]] cross-reference from "Relevance to AI" section
- `wiki/concepts/Agentic Process Automation.md` — removed "Relation to AI 2027" section and related links
- `wiki/overview.md` — fully rewritten to reflect FPT/akaBot content only
- `wiki/index.md` — removed AI 2027 source, 6 entities, 8 concepts; stats updated to 4 sources · 5 entities · 6 concepts

---

## [2026-04-13] ingest | Utop folder (Brochures, Saleskit, Sales Training)

Source files ingested (skipped: all PPTX, XLSX, MP4 files):
- `raw/raw/Utop/2. Brochure/Utop-Brochure-2024.pdf`
- `raw/raw/Utop/3. Saleskit/CXSuiteShort.pdf`
- `raw/raw/Utop/3. Saleskit/Utop_MakeinVN Day_FPTCX Pitching_20251123.pdf`
- `raw/raw/Utop/3. Saleskit/3. Utop-atWork_v1.0.pdf`
- `raw/raw/Utop/4. Sales training/Loyalty OS/Documents/2. Utop-LoyaltyOS_Detail_v1.0.pdf`

Pages created:
- `wiki/sources/2024-01-01_utop-brochure-2024.md`
- `wiki/sources/2025-01-01_utop-cx-suite-short.md`
- `wiki/sources/2025-11-23_utop-fpt-cx-pitching.md`
- `wiki/sources/2025-01-01_utop-atwork.md`
- `wiki/sources/2023-01-01_utop-loyaltyos-detail.md`
- `wiki/entities/Utop.md` — Utop entity page with full FPT CX Suite product table, case studies, competitive positioning
- `wiki/concepts/Loyalty Marketing Platform.md`
- `wiki/concepts/Customer Data Platform.md`

Pages updated:
- `wiki/entities/FPT IS.md` — added [[Utop]] to Related section
- `wiki/index.md` — added 5 sources, 1 entity, 2 concepts; stats now 10 sources · 7 entities · 8 concepts · 1 analysis
- `wiki/log.md` — this entry

Key findings:
- Utop is backed by FPT + SBI Holdings; FPT CX Suite is the umbrella brand for all Utop products
- FPT CX Suite = LoyaltyOS + UEngage (CDP) + UReach (LAM-based AI CRM Agent) + UAgent + Promotion Engine + Commerce OS
- LoyaltyOS ranked top 6 of 10 in global benchmark (vs. AIMIA, Comarch, Fusionex, Oracle, Pure Software)
- TPBank confirmed as flagship for both akaBot (500+ bots) and Utop (6M loyalty members, 1M tx/day)
- UReach uses Large Action Model (LAM) — agentic AI CRM, distinct from standard LLM chatbots

---

## [2026-04-13] ingest | akaFortune folder (Brochure)

Source files ingested (skipped: brand guidelines, VIE brochure duplicate, all PPTX sales training/saleskit files):
- `raw/raw/akafortune/2. BROCHURE/EN_Brochure_akaFortune.pdf`

Pages created:
- `wiki/sources/2025-01-01_akafortune-brochure.md` — source summary with full module/engine/data architecture table
- `wiki/entities/akaFortune.md` — entity page; full platform architecture, 8 modules, 8 engines, competitive positioning

Pages updated:
- `wiki/index.md` — added source + entity; stats now 11 sources · 8 entities · 8 concepts · 1 analysis
- `wiki/log.md` — this entry

Key findings:
- akaFortune = front-office investment advisory platform (distinct from FPT IS's Volar/Votum/Velox back-office banking families)
- Unique features vs. standard banking software: Copy Trading module, Investment Community Platform (social layer), MPT-based Portfolio Optimization, Backtesting engine
- Risk analytics: VaR model, Max Drawdown, Sharpe Ratio — quantitative finance tooling
- Deployment: hybrid (on-prem or cloud); competitive cost positioning

Open follow-ups:
- No client case studies or reference clients in brochure — unknown actual deployments
- No pricing data
- Saleskit PPTX (EN + VIE) and Sales Training PPTX not ingested — may contain case studies or competitive comparison

---

## [2026-04-13] ingest | akaMES folder (Brochure, Saleskit)

Source files ingested (skipped: all VIE-language duplicates, Leaflet_Eng.pdf — 1-page duplicate of intro content):
- `raw/raw/akames/2. Brochure/akaMES SalesTraining 2023_v0.1_EN.pdf` (28 pages)
- `raw/raw/akames/2. Brochure/akaMES_2024_Intro_Eng (1).pdf` (24 pages)
- `raw/raw/akames/3. Saleskit/AKM_Portfolio_2024-Eng (2).pdf` (6 pages)

Pages created:
- `wiki/sources/2023-01-01_akames-sales-training.md` — pricing data, SWOT, competitor table, target audience stages
- `wiki/sources/2024-01-01_akames-intro-2024.md` — Intelligent MOM framing, GenAI features, IBM/Yokogawa partnerships, 3 case studies
- `wiki/sources/2024-01-01_akames-portfolio-2024.md` — full 6-product ecosystem (akaPLM, STMA, TOMI, Ext-WH, DW), 14 industries
- `wiki/entities/akaMES.md` — full entity page: architecture, vertical solutions, pricing tables, client list, competitive positioning
- `wiki/concepts/Manufacturing Execution System.md` — MES/MOM concept; market data; Vietnam context; competitive landscape

Pages updated:
- `wiki/index.md` — added 3 sources, 1 entity, 1 concept; stats now 14 sources · 9 entities · 9 concepts · 1 analysis
- `wiki/log.md` — this entry

Key findings:
- akaMES pricing now known: annual license $5K–$20K/module; one-time deployment $20K–$125K/module (Standard/Enterprise tiers)
- IBM and Yokogawa are strategic partners — international validation beyond Vietnam
- akaMES ecosystem includes 5 companion products not previously detailed: akaPLM, STMA, TOMI, Ext-WH, DW
- Generative AI features (Advanced Scheduling, Chatbot Dashboard, Early Warning, Anomaly Detection) added in 2024 deck
- CMMI Maturity Level 5 confirmed — consistent with parent FPT IS

Open follow-ups:
- STMA (predictive maintenance) is listed both as an akaMES ecosystem product AND as a standalone product in FPT IS portfolio — may warrant its own entity page
- akaPLM, TOMI, Ext-WH, DW have no dedicated wiki pages — create if deeper sources emerge
- Beer Brewing Factory case study (multi-brewery, Asia + Western Europe) client not named — likely SABECO based on client roster

Open follow-ups:
- Utop atWork source (v1.0, 2 pages) is thin; would benefit from a case study or deployment reference
- Skipped PPTX investment deck — may contain market share or financial data
- No pricing data for FPT CX Suite / LoyaltyOS (contrast: akaBot pricing is known from prior source)
- Cathay Financial Holdings (Taiwan) deployment warrants its own entity page if Taiwan/international angle is developed
- UReach LAM architecture would benefit from a dedicated concept page if more technical sources emerge

---

## [2026-04-13] ingest | akaVerse folder (Sales Training)

Source files ingested (skipped: all PPTX saleskit files — format unreadable):
- `raw/raw/akaverse/4. Sales training/AKV Sale Training.pdf` (35 pages, Aug 2023)

Pages created:
- `wiki/sources/2023-08-01_akaverse-sales-training.md` — full solution portfolio, 5 case studies, Volumetric Capture, Metaverse, competitive comparison vs Matterport
- `wiki/entities/akaVerse.md` — entity page: 9 primary solutions + 5 additional tech platforms, business unit structure (GS/ES), client roster

Pages updated:
- `wiki/index.md` — added 1 source, 1 entity; stats now 15 sources · 10 entities · 9 concepts · 1 analysis

Key findings:
- TPBank confirmed as akaVerse flagship client ("Metabank" virtual bank) — TPBank is now the deepest FPT IS ecosystem client: akaBot (500+ bots) + Utop CX Suite (6M loyalty members) + akaVerse (Virtual Bank)
- Volumetric Capture studio (60–120 DSLR cameras) is significant proprietary physical infrastructure not visible from FPT IS portfolio deck
- QR-Web AR solution supports Apple VisionOS (Vision Pro) — forward-looking competitive position
- Metaverse component (Virtual Music Tour, Concert Hall, Entertainment Center) positions akaVerse beyond enterprise B2B into consumer entertainment
- Personalized Video supports 50+ languages — potential international/export angle
- Virtual Tour competitive moat vs. Matterport: flexible movement points, post-processing, on-prem hosting, custom domain

Open follow-ups:
- Saleskit PPTX files (4 files including Oct 2024 revised version) not ingested — may contain pricing, case study depth, or updated product info
- No pricing data for any akaVerse solution
- "Company A" (car showroom) and "Company C" (VR manufacturing training) clients not named
- GS (Government Sector) services (3D design, drone/360) appear distinct from ES solutions — may warrant separate page

---

## [2026-04-13] ingest | ArchiveNex folder (Brochure)

Source files ingested (skipped: brand guidelines, VIE brochure duplicates, all PPTX saleskit files):
- `raw/raw/ArchiveNex/2. Brochure/Brochure ArchiveNex_EN - Preview.pdf` (2 pages)

Pages created:
- `wiki/sources/2025-01-01_archivenex-brochure.md` — OAIS architecture, 6 features, 6 product values, ecosystem matrix, Ministry of Home Affairs success story
- `wiki/entities/ArchiveNex.md` — entity page: full archiving scope (Current + Historical), 3 services, certifications, flagship client, ecosystem position

Pages updated:
- `wiki/index.md` — added 1 source, 1 entity; stats now 16 sources · 11 entities · 9 concepts · 1 analysis

Key findings:
- ArchiveNex is FPT IS's OAIS ISO 14721:2012-compliant permanent archiving product — highest-standard archiving in the FPT IS product line
- Flagship client is Ministry of Home Affairs (Cục Văn Thư và Lưu Trữ Nhà Nước): 20.3M pages, 300 sources, 5 centers — nationwide deployment
- FPT IS document ecosystem revealed: D-Office → iSOMA → ArchiveNex SIP → ArchiveNex → akaVerse (exhibition) / GeoBase / eLearning — new products D-Office, iSOMA, GeoBase not yet wiki-paged
- akaVerse appears in ArchiveNex's own ecosystem matrix as the virtual exhibition layer for cultural heritage sector — cross-product integration confirmed
- CMMI Level 3 for ArchiveNex vs. CMMI Level 5 for parent FPT IS — unit-level certification discrepancy noted

Open follow-ups:
- Saleskit PPTX files (4 files) not ingested — may contain pricing, competitive comparison, case study details
- D-Office, iSOMA, GeoBase, eLearning are FPT IS products mentioned in ecosystem matrix but have no wiki pages — create if sources emerge
- ArchiveNex SIP (the submission-layer product) is listed separately from ArchiveNex in the matrix — may be a distinct product worth its own page

---

## [2026-04-13] ingest | azinsu folder (Brochure + Infographic)

Source files ingested (skipped: all PPTX saleskit files — format unreadable):
- `raw/raw/azinsu/2. Brochure/Revised-Azinsu_Brochure_13-May.pdf` (2 pages)
- `raw/raw/azinsu/2. Brochure/Azinsu-Infographic.pdf` (1 page — same content as brochure; ingested together as single source)

Pages created:
- `wiki/sources/2025-05-13_azinsu-brochure.md` — 7 services, 4-tech stack, competitive comparison table, 4-party claim workflow, performance SLAs
- `wiki/entities/AZINSU.md` — entity page: product definition, workflow, technology, differentiators, performance metrics

Pages updated:
- `wiki/index.md` — added 1 source, 1 entity; stats now 17 sources · 12 entities · 9 concepts · 1 analysis

Key findings:
- AZINSU TPA is FPT IS's play in the insurance vertical — connects hospitals, insurers, and insured persons on one platform
- Core differentiator: direct API data collection from healthcare facilities vs. market standard of manual re-entry — eliminates the data bottleneck
- AI/OCR fraud detection (fake/unsigned documents) is a distinct feature not seen in other FPT IS products
- Performance SLAs are concrete and strong: 5-day processing, 95% on-time, 15-min guarantee response, 24-hr claim response
- FPT IS's 300+ healthcare facility network is the underlying infrastructure that makes AZINSU's auto-collection advantage work
- Technology stack (RPA + AI/OCR + Big Data + Cloud) overlaps with [[akaBot]] and [[Intelligent Document Processing]] — potential cross-sell synergy

Open follow-ups:
- No named client case studies in any available document — deployment scale entirely unknown
- No pricing data
- Saleskit PPTX files (AZINSU AI Claim and AZINSU TPA_Saleskit) not ingested — may contain pricing, case studies, or AI Claim feature details
- "AI Claim" saleskit name suggests a distinct AI claims automation product or feature set worth investigating

---

## [2026-04-13] ingest | AZINSU AI Claim & AI Fraud Saleskit (2026)

Source file ingested:
- `raw/raw/azinsu/3. Saleskit/AZINSU-AI-Claim.pdf` (40 pages, © 2026 FPT)

Pages created:
- `wiki/sources/2026-01-01_azinsu-ai-claim-saleskit.md` — AI CLAIM architecture (4 modules, 6 technologies, system KPIs), AI FRAUD architecture (graph stack), case study, deployment roadmap, Vietnam insurance market context

Pages updated:
- `wiki/entities/AZINSU.md` — rebuilt with AI CLAIM and AI FRAUD sub-products, case study data, deployment timeline, insurance-specific FPT IS credentials; source_count: 1→2
- `wiki/index.md` — added 1 source; stats now 18 sources · 12 entities · 9 concepts · 1 analysis

Key findings:
- AI CLAIM and AI FRAUD are standalone modules sellable to any insurer independently of AZINSU TPA — broader TAM than previously understood
- AI FRAUD technology stack is the most sophisticated AI product in this wiki: Neo4j Enterprise + PyTorch Geometric (GNN) + GraphRAG + Flexible LLM Core + Isolation Forest — enterprise-grade graph analytics applied to insurance fraud
- Concrete case study: 5,460 outpatient files; 65–70% processing time reduction; 30→50 files/person/day; 2→0.5 data entry staff
- System KPIs are exceptionally strong: <60s processing (90% of cases), >95% document accuracy, >98% classification accuracy, <2% false positives
- Drug database of 65,000+ drugs from Vietnam government source is a proprietary data moat
- Vietnam insurance industry insight: lacks "intelligent layer" on top of existing systems — RPA used more than AI because it's faster to deploy, but cannot make business decisions (only "wrapping")
- Deployment timeline to go-live: ~22–32 weeks (5 phases)
- DXC Technology and Oracle named as FPT insurance technology partners — global ecosystem validation

Open follow-ups:
- Case study client is unnamed — scale and identity unknown
- No pricing data for AI CLAIM or AI FRAUD
- AI FRAUD continuous learning system (with investigator feedback loop) is a significant architectural moat — worth a dedicated concept page if more sources emerge
- AZINSU TPA Saleskit PPTX still not ingested — may contain pricing or named client references

---

## [2026-04-13] ingest | azladin folder (Brochure)

Source files ingested (skipped: 2 saleskit PPTX files — EN + VIE, format unreadable):
- `raw/raw/azladin/2. Brochure/EN Brochure_Azladin_Preview.pdf` (7 pages, 2024)

Pages created:
- `wiki/sources/2024-01-01_azladin-brochure.md` — platform definition, 6 functional domains, customer base table, deployment governance, international standards, AZINSU connection
- `wiki/entities/Azladin.md` — full entity page: architecture, 4 pillars, 4 value props, customer base, HL7 FHIR/SMART-on-FHIR/Snomed-CT compliance, relationship to AZINSU

Pages updated:
- `wiki/index.md` — added 1 source, 1 entity; stats now 19 sources · 13 entities · 9 concepts · 1 analysis
- `wiki/log.md` — this entry

Key findings:
- Azladin = Digital Healthcare Platform (Cloud SaaS); tagline "Connected services · Better insights · Better care"
- 6 functional domains spanning Clinical Data Sharing, Registries (eMPI), Terminology, Services, Integration, and Repositories
- Full international standards stack: HL7 FHIR, SMART-on-FHIR, SMART Health Link, International Patient Summary, Snomed-CT, LOINC, ICD10
- Customer base: 152+ hospitals + 140+ clinics + 2 healthcare corporations = ~300+ facilities; ~52,100 beds
- Confirms and explains the "300+ healthcare facilities" figure from the AZINSU brochure — Azladin is the product that built and maintains this network
- Azladin/AZINSU ecosystem link: Azladin's clinical data infrastructure is what enables AZINSU AI CLAIM's auto-data-collection advantage

Open follow-ups:
- Saleskit PPTX (EN + VIE, 2024) not ingested — may contain pricing, competitive comparison, or case study details
- No pricing data available in any Azladin source
- No named client case studies; hospital counts by type are known but no facility names are given
- Regional breakdown (North/Central/South Vietnam) inferred from map — province-level detail not available

---

## [2026-04-13] ingest | codelearn folder (Saleskit v3.1)

Source files ingested (skipped: PPTX version of same file):
- `raw/raw/codelearn/3. Saleskit/EN_CodeLearn_Introduction_v3.1.pdf` (29 slides, ~late 2024)

Pages created:
- `wiki/sources/2024-11-01_codelearn-saleskit.md` — full platform overview, tech architecture, content library, user stats, university partnerships, events, upcoming plan
- `wiki/entities/CodeLearn.md` — entity page: 5 pillars, tech stack, feature set, user scale (1.28M), partnerships, events, B2B positioning

Pages updated:
- `wiki/index.md` — added 1 source, 1 entity; stats now 20 sources · 14 entities · 9 concepts · 1 analysis
- `wiki/log.md` — this entry

Key findings:
- CodeLearn is an FPT Software product (vietcv@fsoft.com.vn) — part of FPT ecosystem but separate from FPT IS
- Scale: 1,285,255 active users (Nov 2023 – Nov 2024); 96% Vietnam; Japan is #2 country with 9,453 users
- Full automatic code evaluation engine: 8 languages (C#, Java, JS, C++, Python2/3, Go, C); Docker-containerized per language on AWS EC2
- Content library: 20+ courses, 1,000+ training tasks, 17 hard challenges
- B2B angle explicit: organizations buy for reduced training costs + internal skill assessment + internal contests
- CodeWar national championship with prize money (170,000,000 VND) — significant brand event
- 6 university partnerships signed 2019–2020 (including FPT Polytechnic)
- Japan expansion is an explicit upcoming plan target — contests for students in Japan
- Chat GPT integration already in production (direct messaging + GPT assistant on platform)

Open follow-ups:
- No pricing data for individual or enterprise subscriptions
- FPT Software entity has no wiki page — CodeLearn is the first FPT Software product documented here
- Japan user base (9,453) may tie to FPT Software's existing Japan business — worth a connection note if Japan-specific sources emerge
- Contributor model (community content creation) is architecturally unusual vs. other FPT IS products — no detail on how contributors are compensated or quality-controlled

---

## [2026-04-13] edit | Thêm quy tắc MBF Product Assistant cho AM/PO

- Cập nhật `CLAUDE.md`: bổ sung section "MBF Product Assistant — Quy tắc vận hành cho AM/PO"
- Quy tắc mới: chỉ trả lời từ tài liệu có trong vault, không suy diễn, câu trả lời ngắn gọn, luôn trích dẫn nguồn, trả lời "Không có dữ liệu" nếu không tìm thấy
- Bổ sung bảng danh sách 10 nguồn tài liệu MBF hiện có
- Bổ sung luồng xử lý câu hỏi về thông tin sản phẩm và câu hỏi về file tài liệu

---

## [2026-04-13] ingest | FPT eID

Sources read:
- `raw/raw/eid/3. Saleskit/eID_Saleskit_11.2025_VIE (CxO & non-IT) v2.0.pdf` (~25 pages, Nov 2025)
- `raw/raw/eid/4. Sales training/eID_Saleskit_11.2025_VIE (IT) v2.0.pdf` (~31 pages, Nov 2025)
- `raw/Clippings/FPT eid website.md` (website product page clipping)

Pages created:
- `wiki/sources/2025-11-01_fpt-eid-saleskit.md` — combined CxO + IT saleskit source page; full product specs, named clients, case studies, certs, architecture
- `wiki/sources/2026-04-13_fpt-eid-website.md` — website clipping source page; public-facing product narrative
- `wiki/entities/FPT eID.md` — full entity page; 4 solutions (eKYC/IDCheck/eKYB/FaceID), scale metrics, certifications, named clients, case studies, deployment models

Pages updated:
- `wiki/index.md` — added 2 sources + 1 entity; stats → 22 sources · 15 entities

Key facts captured:
- 20M+ chip CCCD authentications with MoPS; 300M+ FaceID transactions; 200+ customers
- ISO 30107-3 Level 1 (BixeLab) + Level 2 (iBeta) PAD certs — one of very few Vietnamese companies with both
- FPT.IDCheck: permanent MoPS cooperation agreement (cert 3103/2023/RAR-FIS); 100% accuracy; 2–3s NFC + 1s C06 response
- VPBank case study: 2M+ chip CCCDs verified in 2 months
- Goertek Vina case study: 30K worker FaceID check-in/out per year
- Typical deployment: ~20 weeks (11 registration + 7 API integration + 2 go-live)
- Regulatory drivers: Circular 17/2024, Decision 2345, Circular 50/2024

Open follow-ups:
- No pricing data in saleskit (CxO/IT decks focus on compliance and capability, not price)
- FPT.CA and FPT.eSign are companion products referenced but not yet ingested as standalone sources
- Client list for eKYC personal is marked "(+ more)" — full list not visible in saleskit
- FPT eID website clipping is Vietnamese; a full English product page may exist at fpteid.com/en/

---

## [2026-04-13] ingest | FPT.EMS Overview Saleskit (v1.0)

Source file: `raw/raw/FPT.EMS/3. Saleskit/FPT.EMS_Overview_short_v1.0_anhnq5 (1).pdf` (17 slides)

Note: Only 1 readable PDF in the FPT.EMS folder. Brand guideline, Brochure, and Sales training subfolders appear empty.

Pages created:
- `wiki/sources/2026-04-13_fpt-ems-saleskit.md` — source summary
- `wiki/entities/FPT.EMS.md` — full entity page: 6 phân hệ, kiến trúc, hiệu quả, triển khai/bảo hành, 12 reference clients
- `wiki/concepts/Enterprise Resource Planning.md` — ERP concept page; FPT IS positioning

Pages updated:
- `wiki/index.md` — added 1 source, 1 entity, 1 concept; stats → 23 sources · 16 entities · 10 concepts · 1 analysis
- `wiki/log.md` — this entry

Key findings:
- FPT.EMS là giải pháp ERP nội địa duy nhất trong wiki — bổ sung góc nhìn về phân khúc enterprise software thay thế SAP/Oracle
- Kiến trúc 3 lớp (Web + PDA + WEB API) với mobile support cho inventory
- 12 reference clients trải 5 ngành: ngân hàng, thép, dầu khí, y tế, vàng bạc
- Khách hàng y tế (Vinmec, Chợ Rẫy) và dầu khí (PTSC) trùng phân khúc với akaMES và Azladin — cross-sell nội bộ có thực tế
- Thời gian triển khai 20 tuần, bảo hành 12 tháng — tương đương FPT eID

Open follow-ups:
- Không có pricing data hay case study định lượng trong deck này
- Cần kiểm tra Brochure và Sales training subfolder — có thể chứa nội dung bổ sung
- FPT.EMS có cạnh tranh trực tiếp với SAP B1, Oracle NetSuite không? Cần tài liệu so sánh

---

---

## [2026-04-13] ingest | FPT.eSign Internal Sales Training

Source file: `raw/raw/Esign/4. Sales training/FPT.eSign_For-Internal.pdf`

Pages created:
- `wiki/sources/2026-04-13_fpt-esign-training.md` — source summary (đã tồn tại từ session trước, nay được index đúng)
- `wiki/entities/FPT.eSign.md` — entity page: 4 sản phẩm (CA/eSign/QRYPTO/TSA), pricing, khách hàng, case study FE Credit
- `wiki/concepts/Digital Signature (Vietnam).md` — concept page: pháp lý VN, 10 nhà cung cấp, USB Token vs Remote Signing

Pages updated:
- `wiki/index.md` — added source, 2 entities, 1 concept

Key findings:
- FPT.CA là CA duy nhất tại VN đạt FIPS 140-2 Level 4 — lợi thế khác biệt rõ ràng
- Pricing FPT.eSign: 850–2,350 VNĐ/chữ ký (nội bộ), 9,000–22,000 VNĐ (cá nhân bên ngoài)
- Case study FE Credit: 13,000 đại lý, ký 2-3 ngày → 10 phút, tỉ lệ thành công 20% → 99%
- B2B2C model — phụ thuộc vào tốc độ tích hợp của doanh nghiệp đối tác B2
- Mục tiêu 2030: mỗi người dân VN có 1 chữ ký số từ xa

Open follow-ups:
- Chưa có pricing cho FPT.QRYPTO và FPT.TSA riêng lẻ
- Cần đọc thêm các slide 41–75 (case study, pricing details, sales policy) nếu cần thêm data

---

## [2026-04-13] ingest | FPT.SPro Sales Pitch Aug 2025 v1.5

Source file: `raw/raw/FPT Spro/3. Saleskit/Spro_SalesPitch_Aug2025_Final_v.1.5 (1).pdf`
Supporting source: `raw/raw/FPT Spro/2. Brochure/New FPTSPro_Main solutions in 2025.pdf`

Pages created:
- `wiki/sources/2026-04-13_fpt-spro-saleskit.md` — source summary
- `wiki/entities/FPT.SPro.md` — entity page: 2 phân hệ, pricing, KPI, khách hàng, cạnh tranh, roadmap AI
- `wiki/concepts/Digital Office Platform.md` — concept page: định nghĩa, bối cảnh VN, liên kết sản phẩm

Pages updated:
- `wiki/index.md` — added 1 source, 2 entities, 2 concepts; stats → 25 sources · 18 entities · 12 concepts · 1 analysis
- `wiki/log.md` — this entry

Key findings:
- Pricing rất rõ ràng: SaaS 10M/năm bản quyền + 5M/1,000 ticket; On-Prem 300M; pay-as-you-go không giới hạn user
- FPT nội bộ dùng SPro: tiết kiệm 308 tỷ/năm, giảm 5.3M giờ — reference nội bộ mạnh nhất
- Smart Start deployment chỉ 2–3 tuần (giải quyết điểm yếu "triển khai dài" trước đây)
- Cạnh tranh với BASE WORK+: SPro nhắm enterprise/phức tạp, BASE nhắm SME/đơn giản
- Hoa hồng 10% EBC (Sales FISX), 50/50 revenue share với EP — khuyến khích cross-sell nội bộ FPT
- Roadmap: AI Agent, AI nhận diện quy trình, AI nội dung tài liệu — chưa có timeline cụ thể

Open follow-ups:
- Chưa đọc folder Case Studies (6 docx files: FPT, FDI, Vinasoy, Vinaseed, Sapporo, FirstReal) — có thể bổ sung data định lượng
- Chưa đọc SFlash_Brochure.pdf và FPTSDoc Quan ly van ban tai lieu 2.2.pptx
- Cần pricing policy cập nhật nhất (có thể thay đổi mỗi quý)

---

## [2026-04-13] query | AI CLAIM

- Thống kê và cung cấp thông tin về giải pháp AI CLAIM cho người dùng.
- Tham khảo từ các trang `wiki/sources/2026-01-01_azinsu-ai-claim-saleskit.md` và `wiki/entities/AZINSU.md`.
- Đã hỏi người dùng có muốn lưu thành một trang phân tích (analysis page) không.

---

## [2026-04-14] ingest | LendVero

Source folder: `raw/raw/LendVero/` (4 documents ingested)

Pages created:
- `wiki/sources/2026-04-14_lendvero-brochure.md` — LendVero EN brochure (5 pages); platform overview, JACCS case study
- `wiki/sources/2026-04-14_lendvero-los-saleskit.md` — LendVero LOS saleskit v1.0 EN (31 pages); jLOS architecture, 8-step process, tech stack, case studies
- `wiki/sources/2026-04-14_lendvero-debtcollection-saleskit.md` — LendVero Debt Collection saleskit v1.0 EN (30 pages); DPD classification, 6-stage lifecycle, BOT automation, 5-phase implementation
- `wiki/sources/2026-04-14_lendvero-sales-training.md` — LendVero Sales Training v2.0 VI (Vietnamese); CTTC market context, painpoints, internal sales guidance
- `wiki/entities/LendVero.md` — full entity page; both modules, DPD table, tech stacks, case studies, integrations
- `wiki/entities/JACCS.md` — Japan Consumer Credit / JIVF Vietnam; flagship LendVero case study

Pages updated:
- `wiki/entities/FPT IS.md` — added LendVero sources, updated source_count to 2, added LendVero to Related
- `wiki/concepts/Loan Origination System.md` — new concept page; 8-step process, Vietnam market context, FPT IS jLOS entry
- `wiki/concepts/Debt Collection (Fintech).md` — new concept page; DPD framework, 6-stage lifecycle, BOT automation, Vietnam context
- `wiki/index.md` — added 4 sources, 2 entities, 2 concepts; stats → 29 sources · 20 entities · 14 concepts · 1 analysis
- `wiki/overview.md` — added fintech vertical observation (LendVero), platform synergies theme, updated What to Read Next

Key findings:
- LendVero = FPT IS's answer to fragmented CTTC legacy IT; LOS (jBPM/Camunda/ReactJS/Java) + Debt Collection (Java/Python/MySQL/ElasticSearch) on one platform
- Flagship case: JACCS/JIVF — 70% processing time reduction, 100% eKYC accuracy; only named case study across all 4 documents
- DPD-based collection strategy (Group 0 to Recovery/240+ DPD) is the core logic of the Debt Collection module
- BOT automation (VNPay SMS / AWS SES Email / AutoCall) handles pre-due and early DPD before human escalation
- eKYC layer integrates FPT eID IDcheck (19 IDcheck clients); contract signing uses FPT.eContract
- Vietnam market context: 16 licensed CTTCs, consumer credit/GDP = 27.17% (low vs. regional peers = growth thesis)
- Source files are at `raw/raw/LendVero/` (not in vault's `sources/` directory)

Open follow-ups:
- LendVero pricing not disclosed in any source — key gap for AM/PO use
- No standalone Debt Collection case study — JACCS covers full platform only
- Competitive landscape for LOS/Debt Collection in Vietnam not detailed (Backbase, Temenos, local competitors?)
- LendVero appears in FPT IS product portfolio (Banking & Finance vertical) but no detailed roadmap source ingested

---

## [2026-04-14] ingest | Kyta Platform

Source folder: `raw/raw/Kyta Platform/` (4 documents ingested)

Pages created:
- `wiki/sources/2026-04-14_kyta-brochure.md` — EN brochure (5 pages); 3-product overview; 4,500+ clients; legal stack
- `wiki/sources/2026-04-14_kyta-saleskit.md` — EN saleskit (21 slides); 8 capabilities; Kyta Intelligent AI; security certs; dairy company case study
- `wiki/sources/2026-04-14_kyta-gate-sales-training.md` — VI sales training (Kyta Gate focus); 12 submodules; F83 + OCB case studies; 80% cost / 90% time reduction
- `wiki/sources/2026-04-14_kyta-productday-2026.md` — VI Product Day 2026; competitive table; deal pipeline 70B/300B VND; revenue target 600B→1000B; 2026 roadmap
- `wiki/entities/Kyta Platform.md` — full entity; 3 products, 12 Gate submodules, AI layer, tech/security, case studies, roadmap, competitive positioning
- `wiki/concepts/Agreement Lifecycle Management.md` — new concept page; ALM/CLM definition, lifecycle stages, Vietnam market context, Kyta implementation

Pages updated:
- `wiki/entities/FPT IS.md` — added 4 Kyta sources, Kyta Platform to Related
- `wiki/concepts/Digital Signature (Vietnam).md` — added Kyta Signature as related product
- `wiki/index.md` — added 5 sources, 1 entity, 1 concept; stats → 34 sources · 21 entities · 15 concepts · 1 analysis
- `wiki/overview.md` — added Kyta as 5th key observation; updated open questions with Kyta pricing gap + product boundary gaps

Key findings:
- Kyta Platform evolved from FPT.eContract — it's the "next generation" of FPT IS's e-contract product, not a separate brand
- 3 products: Kyta ALM (workflow/lifecycle), Kyta Signature (certified e-sign with TSA+LTV+CeCA), Kyta Gate (identity + agreement for regulated industries)
- Kyta Gate has 12 submodules including eLMS (loan management) — potential overlap with LendVero LOS
- 4,800+ enterprise customers; contracts signed 70B VND; pipeline 300B VND; target 1,000B VND by 2030
- Competitive table explicitly names Camunda/SAP/Microsoft as international competitors; Base/1Office/Lark as domestic
- Kyta's eKYC advantage vs. international platforms: built-in MPS cross-check vs. 3rd-party API
- Korea compliance (PIPA + Electronic Signature Act) indicates active international market push
- SABECO, Bộ Tư Pháp are named "Ông lớn" references for sales pitch
- Revenue split target: Government 40%, Large enterprise 40%, Mass 10%, Global 10%
- 2026 roadmap: Q2 App Builder → Q3 AI Agent → Q4 AI OS (multi-agent)

Open follow-ups:
- Kyta Platform pricing not disclosed — cross-sale policy announced separately
- Boundary between Kyta Gate (eLMS) and LendVero LOS unclear
- Boundary between Kyta Signature and FPT.eSign ecosystem unclear
- Product Day deck mentions "Kyta-productday-2026-v1" — v1 implies more versions may exist

## [2026-04-14] edit | Wiki Restructure — entities/ → products/

**Operation:** Reorganized `wiki/entities/` folder into `wiki/products/` with MBF product category subfolders.

**Motivation:** Align wiki folder structure with FPT MBF (Market Business Function) product classification for easier navigation and consistent taxonomy.

**Pages moved:**

- `entities/akaBot.md` → `products/process-transformation/`
- `entities/Kyta Platform.md` → `products/process-transformation/`
- `entities/FPT.SPro.md` → `products/process-transformation/`
- `entities/FPT eID.md` → `products/technology-platform/`
- `entities/FPT.eSign.md` → `products/technology-platform/`
- `entities/akaVerse.md` → `products/technology-platform/`
- `entities/FPT.EMS.md` → `products/technology-platform/`
- `entities/Utop.md` → `products/crm-cx/`
- `entities/LendVero.md` → `products/banking-finance/`
- `entities/akaFortune.md` → `products/banking-finance/`
- `entities/Azladin.md` → `products/healthcare/`
- `entities/AZINSU.md` → `products/healthcare/`
- `entities/akaMES.md` → `products/manufacturing/`
- `entities/CodeLearn.md` → `products/education/`
- `entities/ArchiveNex.md` → `products/government/`
- `entities/FPT Corporation.md` → `products/organizations/`
- `entities/FPT IS.md` → `products/organizations/`
- `entities/FPT Semiconductor.md` → `products/organizations/`
- `entities/TPBank.md` → `products/organizations/clients/`
- `entities/JACCS.md` → `products/organizations/clients/`
- `entities/Central Retail Vietnam.md` → `products/organizations/clients/`

**Files updated:**

- `wiki/index.md` — Entities section replaced by Products section with MBF subgroups
- `CLAUDE.md` — Directory layout, page type, and ingest rules updated

**Notes:**
- Obsidian WikiLinks resolve by filename regardless of path — all `[[links]]` remain valid
- `entities/` folder removed after migration (was empty)
- CLAUDE.md path also corrected from `/Volumes/T7/raw/` → `/Users/macbook/Downloads/raw/`

## [2026-04-16] edit | Overview rewrite — full MBF product catalog

**What was done:**
- Read `raw/Danh muc san pham MBF.pdf` (126 pages) — official FPT IS product catalog 2025
- Rewrote `wiki/overview.md` from scratch to reflect the complete, authoritative product structure

**Pages updated:**
- `wiki/overview.md` — complete rewrite with 9 functional categories + 9 vertical industries

**Key changes from previous overview:**
- Previous version covered only ~5 products (akaBot, LendVero, Kyta, FPT eID, Utop)
- New version documents all 9 functional groups and 9 vertical industries
- Corrects category structure to match official catalog (e.g., "Spend Management" replaces "Service Management" for Procuva/eBizTrip)
- Adds 25+ new products not previously documented: UBot, UVote, FPT.eContract, FPT.CeCA, FPT.EagleEye, FPT.Fortuna, FPT.dPlat, BizNext, FPT Digital Accounting, FPT TVAN, FPT.eInvoice, FPT.ePIT, FPT.PetroInvoice, FPT.iHRP, FPT.eLearning, FPT PeopleX Hiring, Procuva, FPT.eBizTrip, VertZéro, aKa247, FPT ATM Guard, FPT.eSales, Volar/Velox/Votum suites, TradeFlat, FPT.BSS, FPT.iHotel
- Identifies Banking vertical as deepest (25+ products across 3 suites + 4 platforms)
- Identifies Government as second key vertical (10+ products)

**Open follow-ups:**
- Most products above still lack individual wiki pages and source ingests
- Priority ingest order noted in overview: Volar/Velox/Votum → Healthcare → eInvoice → VertZéro → iHRP

## [2026-04-16] ingest | VertZéro — Carbon Accounting Software

**What was done:**
- Read source files: `raw/VertZero/3. Saleskit/VertZéro - Leaflet (EN).pdf` (2 pages) and `raw/VertZero/3. Saleskit/VertZéro - Introduction (EN).pdf` (20 of 29 slides)
- Note: Brochure (EN).pdf exceeded 20MB read limit; Introduction (EN) provided equivalent comprehensive content
- Created source summary page, product page, and new `sustainability/` product subfolder
- Updated index.md, overview.md (removed NOTE callout, added full product data)

**Pages created:**
- `wiki/sources/2026-04-16_vertzero-introduction.md` — source summary
- `wiki/products/sustainability/VertZéro.md` — product page (new subfolder)

**Pages updated:**
- `wiki/index.md` — added Sustainability Management source section + product section; added Carbon Accounting concept; updated stats (35 sources · 18 products · 16 concepts)
- `wiki/overview.md` — replaced NOTE callout with full VertZéro data row; removed VertZéro from gap list; updated ingest priority list

**Key product facts captured:**
- ISO 14064-1:2011 compliant; Scope 1/2/3 GHG inventory
- 60,000+ emission factors (IPCC, US EPA, DEFRA, Ecoinvent)
- CBAM/CSRD/ISSB/SBTi/CDP/GRI/SASB compliant reporting
- MACC tool + 120+ decarbonization project templates
- Partners: TÜV Rheinland (verification), Carbon EX Japan (credits/RECs), FPT Digital
- Target: Vietnamese manufacturers exporting to EU (CBAM), large corporates with ESG obligations
- Market driver: Vietnam = 3rd largest GHG emitter in SEA; CBAM Phase 2 from 2026

**Open follow-ups:**
- VertZéro Vietnamese Introduction deck not yet read — may contain pricing or additional case studies
- No customer case studies captured from available slides — likely in pages 21–29 of Introduction (EN) not yet read

## [2026-04-16] ingest | VioEdu — K-12 Online Education Platform

**What was done:**
- Read source files: `raw/VioEdu/3. Saleskit/VIOEDU.pdf` (VI, 14 slides) and `raw/VioEdu/3. Saleskit/Giới-thiệu-VioEdu-2024.pdf` (EN, 11 slides)
- Note: `4. Sales training/Slide đào tạo.pdf` not yet read — may contain sales channel details and pricing breakdown
- Created source summary page, product page in existing `education/` subfolder
- Updated index.md, overview.md (replaced gap placeholder with product data)

**Pages created:**
- `wiki/sources/2026-04-16_vioedu-saleskit.md` — source summary
- `wiki/products/education/VioEdu.md` — product page

**Pages updated:**
- `wiki/index.md` — added VioEdu source + product entries under Education; added Adaptive Learning concept; stats → 36 sources · 19 products · 17 concepts
- `wiki/overview.md` — replaced Education gap line with VioEdu product data; clarified Violympic standalone vs integrated; updated gap list

**Key product facts captured:**
- FPT IS K-12 platform; launched 2019; R&D from 2016
- 20M users (2019-2024); 2M WAU; 8M app downloads; 60/63 provinces
- Revenue: $274K (2020) → $5M (2024e); growth 25-46% YoY; user growth 153%/year
- AI accuracy 95%; saves 30-50% learning time; 49 min avg session
- 92.5% students improve after 3 months
- Competitions: Violympic (6.5M/yr, 35 countries); VioEdu Arena (3.5M users, ~200K CCU)
- Awards: Gold Stevie 2023, ASOCIO 2023, APICTA 2019, ADA 2024 Silver
- Target: 80% Vietnamese students; $13M by 2028; ASEAN expansion
- Pricing: $24/6M or $38/12M subscription (B2C); B2B via schools/Sở GD&ĐT
- Tech: CMMI Dev 2.0 L3; ISO 9001:2015; ISO 27001:2013

**Open follow-ups:**
- Sales training deck (`4. Sales training/Slide đào tạo.pdf`) not yet read
- Pricing details for B2B (school/provincial) contracts not captured
- No competitor benchmark depth (saw positioning map but no detail on Hocmai/manabie pricing)

---

## [2026-04-17] ingest | Procuva — Procurement & Bidding Management System

Source file: `raw/raw/Procuva/3. Saleskit/PROCUVA - Saleskit (EN).pdf` (25 slides)
Note: EN Brochure exceeded 20MB read limit; VI Brochure exceeded 100MB limit. Saleskit provided equivalent comprehensive content. Screenshots of all 25 slides provided directly by user.

**Pages created:**
- `wiki/sources/2026-04-17_procuva-saleskit.md` — source summary; 4 modules; 8 tech advantages; 5 case studies; integration ecosystem
- `wiki/products/spend-management/Procuva.md` — product page (new `spend-management/` subfolder created)
- `wiki/concepts/Procure-to-Pay (P2P).md` — new concept page; 10-step process; Vietnam Bidding Law; industry benchmarks

**Pages updated:**
- `wiki/index.md` — added Spend Management source section + product section; added P2P concept; stats → 37 sources · 20 products · 18 concepts
- `wiki/log.md` — this entry

**Key findings:**
- Procuva is FPT IS's answer to manual procurement in Vietnamese enterprises — categorized under "Spend Management" in the official FPT IS product catalog (distinct from Process Transformation)
- 2-portal architecture (Internal + Supplier) covers full P2P: budget → planning → requesting → sourcing → negotiation → selection → contract → ordering → payment → analytics
- 5 real case studies with concrete metrics: joint-stock bank (18B VND/yr savings, 10x speed); leading brewery (10–15B VND, 50% time reduction, >5,000 online bidders); F&B (>10,000 active suppliers, 80% faster selection); retail (>200 automated stores, 10B VND savings)
- "Joint Stock Commercial Bank" case is the most detailed: 5,000–7,000 employees, HQ Hanoi, one of first JSCBs in Vietnam — identity unconfirmed but a strong reference for banking vertical pitches
- FPT ecosystem integration is exceptionally deep: akaBot (automation) + Kyta Platform (e-sign/lifecycle) + FPT.eSign/eContract + FPT.eInvoice + FPT Digital Accounting — Procuva positions itself as the procurement hub of the FPT stack
- AI and Big Data features (supplier recommendations, cost forecasting) explicitly claimed — no architecture detail in this deck
- Philosophy "Ceaseless Improvement" + consulting-led approach differentiates from pure-software vendors

**Open follow-ups:**
- No pricing data in this saleskit — "Flexible Pricing Policy" mentioned but no figures
- Client names all undisclosed — "Leading Brewery" is the strongest lead (>5,000 suppliers → large corp)
- VI Brochure and VI Saleskit not ingested (file size issues) — may contain pricing or additional case studies
- No competitive benchmark table in this deck (contrast: Kyta had explicit Camunda/SAP/Microsoft comparison)
- AI/Big Data feature depth unknown — likely in a separate technical deck not yet available

## [2026-04-17] ingest | GeoBase Cloud — GIS Platform

**Sources ingested:**
- `raw/GeoBase/3. Saleskit/GeoBase Cloud - Saleskit EN v1.0.pdf` (31 slides, 2024)
- `raw/GeoBase/3. Saleskit/Geospatial Data Viewer Saleskit v0.1.pdf` (11 slides, 2026-04-16)

**Pages created:**
- `wiki/sources/2026-04-17_geobase-cloud-saleskit.md` — source summary with full pricing tables
- `wiki/products/technology-platform/GeoBase Cloud.md` — product page

**Pages updated:**
- `wiki/index.md` — added GeoBase source (Business Technology Platform section), product entry, GIS concept; stats → 38 sources · 21 products · 19 concepts

**Key findings:**
- GeoBase Cloud is FPT IS's GIS Platform targeting government (Natural Resources, Construction, Transport depts) and construction/agriculture enterprises
- Two-tier product structure: GeoBase Cloud (full platform) + Geospatial Data Viewer (3D/point cloud sub-module)
- Unusually transparent pricing: free Lite tier → 999K VND/yr Pro → 99.9M VND/yr Enterprise SaaS; on-premise from 500M VND/yr
- Free Lite tier = land-and-expand B2G/B2B motion
- OGC-standard open platform enables custom app development on top (Water resources, Minerals, Smart city, Agriculture, Construction verticals shown)
- EUDR compliance use case for agricultural export enterprises — differentiator in agri sector
- Geospatial Data Viewer quantifies: 60% field survey time savings, 40% productivity gain, 50% hardware cost reduction
- SLA: 30-day deployment commitment; L1 critical response ≤1hr

**Open questions:**
- Vietnamese brochures (XDVDT = Xây dựng và Đô thị) and Sales Training PPTX not ingested — may have additional case studies or customer names
- No named reference clients in current materials

## [2026-04-17] ingest | FPT BSS — Telecom Business Support System

**Sources ingested:**
- `raw/FPT BSS/3. Saleskit/MVNO-BSS-02112023_EN_Introdution72.pdf` (72 slides, Nov 2023; slides 1–36 reviewed)
- `raw/FPT BSS/2. Brochure/FPT-BSS-Brochure-ENG-Final.pdf` (4 pages)

**Pages created:**
- `wiki/sources/2023-11-01_fpt-bss-saleskit.md` — full source summary with client table and module details
- `wiki/products/telecom/FPT BSS.md` — product page (new telecom/ category created)

**Pages updated:**
- `wiki/index.md` — added Telecom vertical section (sources + products), 2 new concepts (BSS, MVNO); stats → 39 sources · 22 products · 21 concepts
- `CLAUDE.md` — added FPT BSS to MBF source table; telecom/ added as new product directory

**Key findings:**
- FPT BSS = Vietnam's leading homegrown telecom BSS; 25-year history from VMS/Vinaphone (1998) to SingTel
- Full TMForum ODA + TAM 17.5.1 compliance; MicroService + Docker + Oracle RAC + Netflix ZUUL + Cloud ready
- Vietnam Big 3 all as clients: Viettel + MobiFone + Vinaphone — very strong social proof for SEA MVNO pitches
- MobiFone is the flagship: all 7 modules deployed at 30M subscriber scale
- 8 regional clients: Laos (4), Cambodia (4), Singapore (1: SingTel)
- Key sales angle: **3–6 month MVNO deployment** + **affordable OPEX vs. international vendors** + Zero Unplanned Downtime
- No pricing data disclosed in available materials

**Open questions:**
- Sales Training PDF and remaining saleskit slides 37–72 not ingested — likely contain implementation process details and pricing/commercial terms
- No MVNO-specific case study with metrics (unlike MobiFone's subscriber scale data)

---

## [2026-04-17] edit | Created UBot, UVote, fixed FPT.SPro

**Pages created:**
- `wiki/products/process-transformation/UBot.md` — SME automation platform; 3,000+ customers; <1M VND/yr; Daikin/Vingroup/VietjetAir clients; finance & accounting focus
- `wiki/products/process-transformation/UVote.md` — e-voting for AGMs & enterprise decisions; 3 sub-products (AGM/Hub/Contest); 1M+ users; eKYC via FPT.AI

**Pages updated:**
- `wiki/products/process-transformation/FPT.SPro.md` — fixed `type: entity` → `type: product`
- `wiki/index.md` — added UBot and UVote entries; stats → 40 sources · 27 products

**Note:** UBot and UVote pages are stubs derived from FPT IS Product Portfolio (Aug 2025) and MBF Product Catalog (2025). No dedicated source has been ingested for either product. Pricing, detailed feature lists, and client case studies are unavailable until dedicated brochures/salekits are ingested.

---

## [2026-04-17] ingest | Bank Suite — Volar, Votum, Velox (Banking & Finance)

**Source folder:** `raw/raw/Bank Suit/`

**Files ingested:**
- `(EN) FPT IS_Banking & Finance Total Offerings_19.02.2016.pdf` (46 pages — full portfolio overview)
- `Volar/2. Brochure/Volar IBROKER_Preview.pdf` — brokerage platform brochure
- `Velox/2. Brochure/Velox BANCA.Peview.pdf` — insurance claims brochure
- `Velox/2. Brochure/Velox ECAR.Preview.pdf` — cash & vehicle transport brochure
- `Velox/2. Brochure/Velox ECM.preview.pdf` — enterprise content management brochure
- `Velox/2. Brochure/Velox EFAM.Preview.pdf` — fixed asset management brochure
- `Velox/2. Brochure/Velox FOS.Preview.pdf` — in-branch teller system brochure
- `Velox/2. Brochure/Velox HRM.Preview.pdf` — HR management system brochure
- `Velox/2. Brochure/Velox SMATE_Preview.pdf` — sales management brochure
- `Velox/2. Brochure/Velox-OMNI.Preview.pdf` — digital banking platform brochure

**Pages created:**
- `wiki/sources/2026-04-17_bank-suite-overview.md` — source summary (overview deck + all module brochures)
- `wiki/products/banking-finance/Volar.md` — Core Banking & Finance suite (6 modules)
- `wiki/products/banking-finance/Votum.md` — Risk Management & Compliance suite (5 modules)
- `wiki/products/banking-finance/Velox.md` — Business Applications suite (10 modules)

**Pages updated:**
- `wiki/index.md` — added Bank Suite source section, 3 product entries; stats → 40 sources · 25 products
- `wiki/log.md` — this entry
- `CLAUDE.md` — added Bank Suite entry to MBF source table

**Key findings:**
- FPT IS Banking total: 3 suites × 17 modules = broadest product surface in the entire FPT IS portfolio
- Votum SBRS has 15 named international bank clients (HSBC, JPMorgan, DBS, ANZ, Standard Chartered) — strongest international client concentration in the wiki
- JACCS appears as SBRS client (Votum) AND as LendVero flagship — confirms JACCS as multi-product FPT IS customer
- Volar IBROKER and akaFortune appear to share near-identical feature sets; IBROKER targets bank brokerage arms, akaFortune targets securities firms
- Velox OMNI and Velox FOS describe the same Teller App at different abstraction levels — OMNI is the parent platform
- Key success stories: HOSE (3–5M transactions/day, 100-day deploy 2021), Vietcombank Core Banking live Jan 2020, BIDV Open API Nov 2023 (with IBM)

**Open follow-ups:**
- No pricing data for any module across all three suites
- Volar brochures for COBA, IPC, WALLET, TRE, FINEX not individually read (overview deck covers these; individual brochures may have more detail)
- Votum brochures for XSCOR, AFC, CARS, SBRS, IFRS9 not individually read
- Velox Votum Saleskit PPTX files not ingested — may contain detailed competitive comparison or pricing
- OFSAA (Oracle FSAA) partnership referenced in overview deck but no dedicated source ingested

---

## [2026-04-17] ingest | TradeFlat Digital Financial Ecosystem Saleskit (Jul 2025)

Source file: `raw/TradeFlat/3. Saleskit/07.2025_TradeFlat-Platform-Introduction (3).pdf` (46 slides)

Pages created:
- `wiki/sources/2026-04-17_tradeflat-platform-saleskit.md` — source summary
- `wiki/products/banking-finance/TradeFlat.md` — product page (full 5 modules, architecture, case studies, international positioning)

Pages updated:
- `wiki/index.md` — added source entry under Banking & Finance › TradeFlat; added product entry; updated stats to 41 sources / 28 products

Open follow-ups:
- No pricing data available in this saleskit — pricing deck may exist separately
- Brochure folder (`raw/TradeFlat/2. Brochure/`) and Sales Training folder (`raw/TradeFlat/4. Sales training/`) not yet ingested — may have additional detail
- Customs Clearance module details (container list checking, surveillance area) not deeply covered — worth a dedicated ingest if available
- International expansion plans (TradeWindow ANZ, E&P China) mentioned but no deal details

---

## [2026-04-17] ingest | UBot Solution Brochures + Pricing + Q&A

Source files:
- `raw/UBot/2. Brochure/UBOT INTRODUCTION.pdf` (20 slides, VI)
- `raw/UBot/2. Brochure/UBot Brochure 2023.pdf` (12 pages, VI)
- `raw/UBot/4. Sales training/[UBOT] BÁO GIÁ.pdf` (1-page pricing sheet, 2023)
- `raw/UBot/4. Sales training/Bộ câu hỏi Ubot.pdf` (50 Q&A, 2 pages)

Pages created:
- `wiki/sources/2026-04-17_ubot-brochures.md` — combined source summary for both brochures
- `wiki/sources/2026-04-17_ubot-pricing-qa.md` — source summary for pricing + Q&A

Pages updated:
- `wiki/products/process-transformation/UBot.md` — massive expansion from stub to full product page (4 purchase bots, 5 sales bots, UBot Meeting, full pricing table, 3 case studies, 15+ named clients, awards, positioning table)
- `wiki/index.md` — added 2 source entries; updated UBot product entry; updated stats to 43 sources

Open follow-ups:
- UBot Meeting vs UVote (FPT IS e-voting) — both cover shareholder meeting AGM; unclear if same product under different names or distinct products; needs clarification
- Pricing is 2023 — may be outdated; no updated price list found in this folder
- Statement Checking and Sales process bots not covered in pricing sheet — pricing may exist elsewhere

---

## [2026-04-18] ingest | UVote Saleskit, Training for AM & Q&A (2023)

Source files:
- `raw/UVote/3. Saleskit/[EN 23.3.1] UVote leaflet.pdf` (4 pages, EN)
- `raw/UVote/3. Saleskit/[VI 23.3.1] UVote leaflet.pdf` (4 pages, VI — identical content)
- `raw/UVote/4. Sales training/UVote Training for AM.pdf` (20 slides)
- `raw/UVote/4. Sales training/UVote Q&A.docx.pdf` (20 questions, VI)

Pages created:
- `wiki/sources/2026-04-17_uvote-saleskit-training.md` — combined source summary for all 4 UVote docs

Pages updated:
- `wiki/products/process-transformation/UVote.md` — full expansion from catalog stub to complete product page (architecture, capabilities, 4-client case study table, full pricing table + bundle pricing, VN30 client roster, competitive landscape, legal context)
- `wiki/products/process-transformation/UBot.md` — added NOTE callout clarifying UBot Meeting = UVote with cross-reference
- `wiki/index.md` — added UVote source section; updated UVote product entry; stats → 44 sources

**Resolved open question from UBot ingest:**
UBot Meeting = UVote — confirmed. Same product, same akaBot+FPT branding, same mascot, same phone (+84 948 34 3456), same address (FPT Tower). "UBot Meeting" is the name used within the UBot product ecosystem; "UVote" is the standalone brand.

**Key new findings:**
- Full pricing now available: Trial (Free) · Pro (50M VND, up to 100K shareholders) · Enterprise (contact); full solution bundle for 50K+ shareholders = ~830M VND
- Legal basis confirmed: Enterprise Law 2014 Article 140.2(c) — online AGM legally equivalent to in-person
- 20-question Q&A covers all edge cases: proxy delegation, cumulative voting, early voting, ballot splitting, disconnect handling, multi-AGM simultaneous attendance
- Competitor map: BVote (ByteSoft), Voting.vn (NEO), BS Vote (BlueSoft), Ez GSM (FPT Securities), Vina Aspire, Ato.vn
- FPT AGM Apr 2023 (45,000 shareholders) — FPT is its own reference client

Open follow-ups:
- `raw/UVote/4. Sales training/Bảng giá DHCD_NEW.xlsx` not read — may contain updated/detailed pricing breakdown
- UVote Hub and UVote Contest sub-products mentioned in FPT IS portfolio are not covered in any UVote source — these may be separate products or discontinued branding
- No pricing for Enterprise tier — requires direct contact

---

## [2026-04-18] ingest | FPT.eInvoice folder (EN Intro + VI Proposal + 2025 Strategy)

Source files:
- `1. PMO MKT Documents/1. MBF_Product Kit Collection/FPT.eInvoice/3. Saleskit/CuongNH8_brief_FPT.eInvoice.Introduction.EN.June2025.pdf` (48 pages, EN, June 2025)
- `FPT eInvoice/3. Saleskit/Present_FPT.eInvoice_VN.pdf` (31 pages, VI, 2024)
- `FPT eInvoice/3. Saleskit/VN-FPTeInvoice_2025Report_2026Strategy_VN_2.2.pdf` (~21 pages, VI, internal strategy)

**Pages created:**
- `wiki/sources/2026-04-18_fpt-einvoice-saleskit.md` — combined source summary (3 files)
- `wiki/products/process-transformation/FPT.eInvoice.md` — full product page
- `wiki/concepts/E-Invoicing (Vietnam).md` — new concept page (TVAN, legal timeline, invoice types, AR/AP distinction)

**Pages updated:**
- `wiki/index.md` — added FPT.eInvoice source section, product entry, E-Invoicing concept; stats → 45 sources · 29 products · 22 concepts
- `wiki/log.md` — this entry

**Key findings:**
- FPT IS is Vietnam's #1 e-invoice SaaS: 70K+ customers, 100M+ invoices/year, TVAN licensee since 2011, runs GDT's centralized system since 2015
- Revenue surge: 48.5B VND (2024) → 84.5B VND (2025, +74.2%); 2026 target 95B VND recognized / 115B VND signed
- 6,683 active customers (Oct 2025); churn 1,135 in 2025 — competitive pressure real
- 2026 brand simplification: single "FPT.eInvoice" brand, 4 pricing tiers (SaaS Eco 1M → OnPrem 500M VND/yr)
- Certified in Vietnam + Malaysia; PEPPOL 3.0 for Singapore/Australia — genuine global SaaS
- AP processing: 80% time decrease, 70% cost savings, 30-second auto-validation
- Security: ISO 27001:2018, AES-256, SHA-256, GDPR + Decree 13/2023
- 2026 roadmap: V3 One Invoice, eHUB (supply chain finance), eDOC (document storage), AI Agent, Digital Onboarding
- Integration via 5 channels (PEPPOL/Standard API/Custom API/sFTP/In-middle DB); JSON/CSV/XML/IDOC inputs

**Open follow-ups:**
- Sales training documents (`4. Sales training/` folder) not ingested — user manuals/HDSD, likely operational rather than commercial
- No pricing for current (pre-2026) OnCloud tier by invoice volume — strategy doc shows transition to new 4-tier model
- Global market (Malaysia live; Indonesia/Taiwan/Thailand via partners) — no case studies for non-VN deployments
- eHUB and eDOC 2026 new products not yet documented — roadmap only
- `raw/raw/FPT eInvoice/` subfolder may exist in the raw vault path; not cross-checked with this source folder

---

## [2026-04-18] ingest | FPT Digital Accounting (FDA) Brochure & Saleskit 2024

Source files:
- `raw/raw/FPT.DigitalAccounting/2. Brochure/FDA - Brochure ENG - 4.5.2024 view.pdf` (4 pages, EN)
- `raw/raw/FPT.DigitalAccounting/3. Saleskit/FDA_Presentation_2024.pdf` (20 slides, VI)

**Pages created:**
- `wiki/sources/2026-04-18_fpt-digital-accounting-saleskit.md` — combined source summary
- `wiki/products/process-transformation/FPT.DigitalAccounting.md` — new product page

**Pages updated:**
- `wiki/products/process-transformation/FPT.eInvoice.md` — corrected FDA entry in ecosystem table (was "accounting automation layer"; now clearly a distinct standalone product with own brand/URL/clients); added FDA to Connections
- `wiki/index.md` — added FDA source section + product entry; stats → 46 sources · 30 products
- `wiki/log.md` — this entry

**Key finding — corrects prior ingest:**
FDA (FPT Digital Accounting) is **NOT** a sub-component of FPT.eInvoice. It is a **standalone product** with its own brand, website (fda.fpt.com.vn), email (DigitalAccounting@fpt.com), separate client base (450+ enterprise), and separate Sao Khue 2021 award. The prior FPT.eInvoice ingest incorrectly listed FDA as one of the 7 ecosystem components. The correct relationship: FPT.eInvoice = AR/TVAN; FDA = AP invoice processing. They share FPT.TVAN validation infrastructure but are sold and operated separately.

**Key product data:**
- 450+ enterprise clients; 25,000+ invoices processed
- 30s end-to-end per invoice; OCR+NLP 3s; RPA validity check 3s; Smart Text Search 8s
- 5 modules: Invoice Mgmt · Supplier Risk Alert · Payment Request · Auto Matching (3-way) · Reports
- 80% time / 70% cost / 98% accuracy / 100% free storage
- 3 flagship case studies: Petrolimex (600K/yr, 80% time / 50% cost), AEON (1M+/yr, 80% time), Greenfeed (80% time)
- ERP integration: SAP, BRAVO, Oracle; open API; CSV/XLSX/API output

**Open follow-ups:**
- No pricing data in either source — pricing not disclosed publicly (contact-based)
- VI brochure (FDA - Brochure VIE - 4.5.2024 view.pdf) not read — likely duplicate content in Vietnamese
- Sales training folder (`4. Sales training/`) exists but appears empty
- FDA customer count (450+) vs FPT.eInvoice strategy doc listing "70 FDA" as subset — possible that 450 is cumulative all-time while 70 is currently active SaaS-tracked subset

---

## [2026-04-18] ingest | FPT.PetroInvoice Brochure (VI)

Source file: `raw/raw/FPT.PetroInvoice/2. Brochure/Brochure FPT Petro Invoice - view.pdf` (2 pages, VI)
Skipped: `Brochure PetroInvoice - bản in.pdf` (print-layout duplicate); `FPT-eInvoice_Tailieu_HDSD_Hoadonxangdau_1.0.pdf` (operational user manual)

**Pages created:**
- `wiki/sources/2026-04-18_fpt-petroinvoice-brochure.md` — source summary
- `wiki/products/process-transformation/FPT.PetroInvoice.md` — product page

**Pages updated:**
- `wiki/products/process-transformation/FPT.eInvoice.md` — updated PetroInvoice entry in ecosystem table with link + key details
- `wiki/index.md` — added source + product entries; stats → 47 sources · 31 products
- `wiki/log.md` — this entry

**Key findings:**
- FPT.PetroInvoice = petroleum-sector vertical of FPT.eInvoice (same email + website)
- Two solutions: (1) AI Camera — reads pump display, works with all pump types, 1-day deploy; (2) Electronic Display Replacement — for legacy pumps, 1–2 days
- Pricing highly competitive: 2M VND/station setup (vs 400M–1B standard), 50đ/invoice (vs 500đ)
- Legal driver: Directive 1284/CĐ-TTg made per-transaction e-invoicing at petrol stations mandatory from 12/2023
- Saigon Petro = flagship client (with Nam Duong Technical partner, since 2022); also live in Nam Dinh + Hai Duong provinces
- QR code payment integration (TPBank, NAPAS, VNPAY)

**Open follow-ups:**
- No pricing for Solution 2 (display replacement) — only Solution 1 AI pricing stated
- No total customer count or station count beyond named provinces
- Petro-einvoice.pdf exceeded 20MB read limit — may contain more detailed technical/pricing info

---

## [2026-04-18] ingest | FPT.ePIT Saleskit — Chứng từ Thuế TNCN Điện tử (VI)

Source file: `raw/raw/FPT ePIT/3. Saleskit/Present-FPT.ePIT-CT-Thue-TNCN_v1.2.pdf` (17 slides, VI)
Skipped: `Print - Brochure FPT ePIT 21 Nov 2022.pdf` (exceeded 20MB read limit); pricing files in `4. Sales training/` not read

**Pages created:**
- `wiki/sources/2026-04-18_fpt-epit-saleskit.md` — source summary (17 slides; legal mandate, 8 income types, CTT56 cert form, admin modules, API library, 12 named clients, awards)
- `wiki/products/process-transformation/FPT.ePIT.md` — product page
- `wiki/concepts/Personal Income Tax (Vietnam).md` — new concept page (legal timeline, 8 income types, certificate rules, process flow)

**Pages updated:**
- `wiki/products/process-transformation/FPT.eInvoice.md` — updated ePIT row in ecosystem table with WikiLink + Sao Khue 2019 detail
- `wiki/index.md` — added FPT.ePIT source section + product entry + PIT concept; stats → 48 sources · 32 products · 23 concepts
- `wiki/log.md` — this entry

**Key findings:**
- FPT.ePIT = electronic PIT withholding certificate SaaS under FPT.eInvoice ecosystem; uses FPT.eInvoice API/APP + FPT.TVAN for GDT reporting — NOT a standalone platform
- Mandatory from 01/07/2022 per NĐ123/2020 Art. 59 §1 — same regulation cycle as e-invoices
- Certificate form CTT56, bilingual VN+EN; covers 8 PIT income types including salary, royalties, securities transfer, lottery
- FPT–GDT partnership since 1994 (30+ years); Sao Khue 2019 award
- 12 named clients including Samsung SDS, EY, Vinacomin, Mitsubishi Heavy Industries, Traphaco — mix of FDI + domestic enterprise
- Infrastructure: ISO 27001:2013 + ISO 22301:2012; Vietnam's only dual-certified data center

**Open follow-ups:**
- `Bang bao gia FPT.ePIT.pdf` (pricing file in 4. Sales training/) not read — pricing unknown
- `Print - Brochure FPT ePIT 21 Nov 2022.pdf` exceeded 20MB — may contain additional client names or product updates
- ePIT customer count not disclosed in saleskit (no total number equivalent to 6,683 for eInvoice)
- Integration depth with iHRP vs. other HR/payroll systems (SAP HCM, MISA AMIS, etc.) not detailed in this source

## [2026-04-20] edit | Django backend setup guide

Created `wiki/analyses/2026-04-20_django-backend-setup.md` — hướng dẫn chi tiết setup Django CMS (Django 5.x + PostgreSQL + DRF) để quản lý wiki thay cho edit markdown trực tiếp.

**Pages created:**
- `wiki/analyses/2026-04-20_django-backend-setup.md` — setup guide đầy đủ (models, admin, API, import command)

**Nội dung guide:**
- Cài PostgreSQL, tạo database `mbf_wiki`
- Khởi tạo Django project + virtualenv
- Models map với schema vault: Tag, Organization (is_client flag), Product (9 MBF categories), Concept, Source, LogEntry
- Django Admin config cho CMS interface
- REST API endpoints (`/api/sources/`, `/api/products/`)
- Management command `import_wiki` đọc frontmatter từ markdown hiện có và import vào DB

**Open follow-ups:**
- Chưa scaffold actual Django project — guide only, user tự chạy commands
- Export ngược markdown (2-way sync với Obsidian) chưa có
- Full-text search tiếng Việt chưa thiết kế (đề xuất dùng Meilisearch/PostgreSQL SearchVector ở next steps)


---

## [2026-04-20] ingest | iSOMA — Document Digitization Saleskit (FPT IS IDA, Aug 2024)

Source files: `raw/ISOMA/2. Brochure/Brochure Isoma.pdf` + `raw/ISOMA/3.Salekit/FIS IDA iSOMA_Cuc Van Thu Luu tru 020824.pdf`

**Pages created:**
- `wiki/sources/2026-04-20_isoma-saleskit.md` — source summary (brochure EN + saleskit VI 37 slides)
- `wiki/products/government/iSOMA.md` — product page

**Pages updated:**
- `wiki/index.md` — added iSOMA to Sources (Government) and Products (Government); updated stats to 49 sources / 33 products

**Key takeaways:**
- iSOMA is a service+software hybrid: FPT provides people, equipment, and technology end-to-end
- Primary integration: iSOMA (digitize) → ArchiveNex (archive/retrieve) — completes FPT IS government document lifecycle
- Notable international footprint: 800+ staff processing HD map data for Japan (Google Maps / autonomous vehicle use) since 2015
- Research projects show expansion into Han Nom OCR, AR museum experiences, and 3D photogrammetry — not yet productized

**Open follow-ups:**
- Pricing not disclosed in either document — confirm with IDA team
- No competitor names mentioned — market positioning implicit only

---

## [2026-04-20] ingest | FPT.InsuranceX — Saleskit

Source file: `raw/InsuranceX/3. Saleskit/Salekit_InsuranceX.pdf`

**Pages created:**
- `wiki/sources/2026-04-20_insurancex-saleskit.md` — source summary (VI saleskit, 6 substantive slides)
- `wiki/products/healthcare/FPT.InsuranceX.md` — product page

**Pages updated:**
- `wiki/index.md` — added InsuranceX to Sources (Healthcare) and Products (Healthcare); updated stats to 50 sources / 34 products

**Key takeaways:**
- InsuranceX is a **SFA (Sales Force Automation)** mega app — distinct from AZINSU (health TPA/claims) and from general CRM; it automates the full life insurance agent channel from recruitment to customer self-service
- Flagship client Hanwha Life: FCs grew from 20K → 37K post-deployment; file processing 24h → 2h
- Architecture diagram reveals ChatGPT bot integration in the Customer Portal (CPO) — notable AI feature not highlighted in the headline copy
- No pricing disclosed

**Open follow-ups:**
- Pricing model not in document — custom build & deploy engagement; confirm with sales team
- Shinhan Life case study details missing — only client profile provided, no results data

---

## [2026-04-20] ingest | Meduverse — Game-Based Educational Solution Overview (EN Saleskit)

Source file: `raw/Meduverse/3. Saleskit/Meduverse_Overview-EN.pdf`

**Pages created:**
- `wiki/sources/2026-04-20_meduverse-overview-saleskit.md` — source summary (EN, 21 slides)
- `wiki/products/education/Meduverse.md` — product page

**Pages updated:**
- `wiki/index.md` — added Meduverse to Sources (Education) and Products (Education); updated stats to 51 sources / 35 products

**Key takeaways:**
- Oxford University Press content partnership is the primary differentiator — unique in the FPT education portfolio
- Currently in early pilot stage at FPT Schools only; E-Sport Season 1 (Feb–Apr 2025) is the largest deployment: 3,500 contestants, 6 schools, 50,000+ sessions
- Student/teacher approval is very high (95% / 91%) but parent purchase intent is only 27% — commercial model not yet proven
- Math and Life Skills modules are still "coming soon" — English only currently live

**Open follow-ups:**
- No pricing model disclosed — B2C membership vs. B2B school licensing unclear
- Subjects roadmap (Math, Life Skills) launch timing not specified

---

## [2026-04-20] ingest | EduNext — Social Constructivism LMS Saleskit (EN v1.17)

Source file: `raw/EduNext/3. Saleskit/EduNext-v1.17.pdf` (28 slides, EN)

**Pages created:**
- `wiki/sources/2026-04-20_edunext-saleskit.md` — source summary (full tech stack, pricing, case studies, architecture)
- `wiki/products/education/EduNext.md` — product page

**Pages updated:**
- `wiki/index.md` — added EduNext to Sources (Education) and Products (Education); updated stats to 52 sources / 36 products

**Key takeaways:**
- EduNext is a **FPT Software** product (not FPT IS) — first FPT Software product in wiki after CodeLearn; important for sales territory awareness
- Critical architectural insight: **EduNext is the B2B platform that powers CodeLearn** (B2C) — disclosed in EduNext's own case study section; relationship not visible from CodeLearn's saleskit alone
- Only product in the wiki with fully disclosed pricing tiers: on-premise $20K/yr, $150K forever (no source), $500K forever (with source); cloud SaaS $3–10K/month by learner tier
- Social Constructivism methodology differentiates from VioEdu (AI-adaptive) and Meduverse (game-first) — peer/collaborative learning framing
- AWS-native (EKS, RDS, DynamoDB, ElastiCache, S3, SNS, CloudFront, WAF) + Kubernetes — most mature cloud architecture of any education product in wiki
- ChatGPT integration already in production (Friends & Chat module)

**Open follow-ups:**
- Pricing is in USD — confirm if VND pricing exists for Vietnam deployments
- No other case studies beyond CodeLearn and Kella English Center — wider client base unknown
- FPT Software entity page not yet created — CodeLearn and EduNext both need a parent company page
