---
title: AZINSU AI Claim & AI Fraud Saleskit (2026)
type: source
tags: [azinsu, ai-claim, ai-fraud, insurance, health-insurance, fpt-is, ai, ocr, graph-analytics]
created: 2026-04-13
updated: 2026-04-13
source_file: raw/raw/azinsu/3. Saleskit/AZINSU-AI-Claim.pdf
---

## Summary

This is AZINSU's 40-page sales deck (© 2026 FPT), presenting two distinct AI sub-products: **AI CLAIM** (claims processing automation) and **AI FRAUD** (insurance fraud detection). Both operate as standalone modules that plug into an insurer's existing core claims system via API — they are not dependent on the AZINSU TPA platform itself, making them separately sellable to any insurer.

The deck also provides rich context on Vietnam's insurance IT landscape and FPT IS credentials for the financial/insurance sector, plus a detailed 5-phase deployment roadmap and a real (unnamed) case study with quantified outcomes.

## Key facts

### FPT IS credentials for insurance

- 4 fields of deep expertise: banking, insurance, securities, finance
- 1,500+ financial sector specialists
- 100+ system deployment projects for global partners
- Technology partners: Sinosoft Co., Ltd · DXC Technology · Oracle
- FPT IS: 2,900+ enterprise clients, 150+ VNR500, 100+ international, 3,700+ employees

### Vietnam health insurance IT market context

Key insight: *"The Vietnamese insurance industry doesn't lack IT systems, it lacks an 'intelligent layer' on top."*

Current state:
- Core systems record data; digital channels handle customer/agent interaction
- But: middle & core system claims decisions are still manual — IT plays a support role, not a decision engine
- RPA used more than AI (copy data, validate forms, trigger workflows) because it's easier to deploy, faster ROI
- AI so far: mainly basic OCR and customer service chatbots
- RPA cannot solve business decisions — it's only "wrapping"

**Primary pain points:**
1. Fragmented, unstandardized claims data → cannot systematically control medical costs
2. Manual operations cannot scale → SLA degrades as volume grows
3. Inconsistent adjudication quality → wrong payments, complaints
4. Passive fraud control (detected after payment) → cost leakage without evidence
5. No data platform for governance and long-term strategy

### AI CLAIM solution

**Definition:** AI CLAIM automates – standardizes – improves efficiency for the entire health insurance claims processing workflow. It operates as an independent module connecting to the insurer's core claims system via API. Submitted claims files (via web, app, email, scan) flow through AI CLAIM, which returns structured data, alerts, and a suggested payment plan back to the insurer's system.

**4-module architecture:**

| Module | Function |
|---|---|
| **Module 1** — Request classification | Email analysis, NLP, category classification, routing logic |
| **Module 2** — Document processing | OCR Engine, document classification, KIE (Key Info Extraction), auto data mapping |
| **Module 3** — Verification & validation | Electronic invoice integration, drug verification, fraud detection, risk scoring |
| **Module 4** — Cost allocation | Cost aggregation, benefit mapping, business rule execution, payment calculation |

**6 core technologies:**
1. **DIP (Document Intelligence Processing)** — understands document structure & semantics; supports PDF, PNG, JPEG, TIF, HIEC, DOCX
2. **Medical & Insurance AI Reasoning** — AI understands adjudication domain, not just data extraction
3. **Rulebase Engine (Explainable AI)** — decisions can be audited, traced, explained
4. **Feedback Loop & Learning System** — self-improving from feedback results
5. **Process Automation & Integration Layer** — BPM/workflow engine; event & time tracking per step; integration with core insurance/TPA systems
6. **Gen AI + NLP** — for general business operations

**Quantified KPIs (system architecture specifications):**
- Processing time: **<60 seconds** (90% of cases)
- Document accuracy: **>95%**
- Classification accuracy: **>98%**
- False positive rate: **<2%**
- Cost reduction: **60%**
- Processing volume increase: **30%**

**Benefits by pain point:**

| Pain Point | AI CLAIM Mechanism | KPI |
|---|---|---|
| Unstandardized data | DIP + Medical NLP; standardize ICD, drugs, CLS, costs | ↓90–95% data entry; 90–95% structured data |
| Manual ops/cannot scale | STP & Workflow Automation; HITL Optimization; AI/Human flow | ↓60–80% processing time; ↑150% adjudicator productivity; 30→15 min/case |
| Inconsistent adjudication | Medical & Benefit Intelligence; guideline + rulebase adjudication | 100% consistent adjudication |
| No data platform | AI Claim + AI Fraud data platform; learning loop | 100% data digitization |

**Supported document types (80% deployed):**
Claims request form · Medical examination record · Drug/test/treatment invoices · Prescriptions · Medical cost statements · Discharge notes · Test results/imaging diagnosis · Surgery authorization forms · Medical reports/patient summaries

Planned: ID documents (GPLX, CCCD) · Incident reports · Surgery certificates

**Drug database:** 65,000+ drugs from Vietnam's Drug Management Authority (Cục quản lý dược)

**5-stage claims workflow with AI features:**
- *Reception*: classify email/files, DIP, sort & merge documents
- *Data entry*: check document completeness, map to system catalog, create file
- *Adjudication*: check prescriptions/invoices/tests, allocate costs to insurance benefits, check exclusions, propose compensation
- *Approval + Payment*: pass structured data and recommendation to insurer system via API

### AI FRAUD solution

**Definition:** AI FRAUD automates detection, warning, and control of abuse risk at system scale — shifting insurers from reactive post-review to proactive prevention.

**3 technology pillars:**
1. **Data Foundation** — Apache Spark (billions of insurance records); Rule Engine (thousands of rules, millisecond latency)
2. **Graph Analytics** — Neo4j Enterprise (multi-dimensional queries); PyTorch Geometric (GNN deep learning for organized fraud networks)
3. **Cognitive AI + Advanced Anomaly** — GraphRAG (knowledge graph + LLM for holistic case analysis); Flexible LLM Core (orchestration); MHGSL GNN (structure learning); Isolation Forest (anomaly detection)

**Operating model (4 layers):**
1. Input: medical data + claims data → preprocessing (Smote/Adasyn balancing)
2. AI processing: ML engine (supervised, risk scoring) + Rule engine (behavioral patterns) + Graph engine (Medical Knowledge Graph; cluster/collective fraud detection)
3. AI reasoning: context aggregation (Risk Score + Graph Context) → Generative AI explains cases
4. Outputs: real-time alerts, in-depth reports, risk analysis, fraud scenario detection

**Continuous learning system:**
- Expert intelligence layer: configure adjudication rules + maintain blacklists (phone/ID/IP/devices)
- AI/ML layer: behavior discovery, cluster analysis
- Verification: backtesting on historical data before live deployment
- Deployment: update rulebook, retrain AI, expand knowledge graph

**AI FRAUD benefits:**
- Detection rate: **2–3× vs. manual** fraud control
- AI fraud analysis coverage: **>80%** of files
- Cost analysis by ICD/CSYT: **100%** structured data
- Audit & explainability: meets legal requirements

### Case study (unnamed insurer)

> [!NOTE]
> Client is not named in the source.

- Scope: 5,460 outpatient claims files
- 33% (2,600 files) processed through AI CLAIM flow
- Medical cost allocation accuracy: **90%**
- Processing time: **10–15 minutes** (from 24 minutes; saving 40–60%)
- Productivity: **+60%**
- Files per person per day: **30 → 50**
- Data entry headcount: **2 → 0.5 persons**
- Processing time reduction: **65–70%**
- Eliminated all printing costs during processing

### Deployment roadmap

**5-phase deployment plan:**
- **Phase 0** (Discovery & Assessment): Survey As-is process, analyze data quality, identify AI scope
- **Phase 1** (Business customization): Configure benefit allocation, document rules, drug & CLS rules, exclusion rules
- **Phase 2** (System integration): Integrate with core claims system + document management; deploy DIP/OCR pipeline + AI inference
- **Phase 3** (Testing): Pilot, Reviewer UI, feedback & labeling workflow, adjudicator training, KPI measurement
- **Phase 4** (Operations & Support): Expand CSYT coverage, optimize rulebase/confidence thresholds, reduce HITL

**Deployment timeline:**
Phase 0: 2–4 weeks · Phase 1: 4–6 weeks · Phase 2: 8–10 weeks · Phase 3: 8–12 weeks · Phase 4: 6–12 months

**Total to go-live: approximately 22–32 weeks**

## Key entities

[[AZINSU]], [[FPT IS]]

## Key concepts

[[Intelligent Document Processing]], [[RPA and Hyperautomation]]

## Connections

- AI CLAIM and AI FRAUD are distinct sellable modules — can be deployed independently of AZINSU TPA platform; targets any insurer with an existing core claims system
- Drug database (65,000+ drugs from government source) is a proprietary data asset providing competitive depth
- Graph analytics stack (Neo4j + PyTorch Geometric + GraphRAG) in AI FRAUD is significantly more sophisticated than typical RPA-based fraud detection — represents FPT IS's most advanced AI product to date across this wiki
- DXC Technology and Oracle are named tech partners — aligns with global insurance IT ecosystem
- Continuous learning system means AI FRAUD improves with each investigation — network effect moat

## My notes

(Empty until filled in during ingest discussion)
