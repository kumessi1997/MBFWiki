---
title: AZINSU
type: entity
tags: [azinsu, insurance, health-insurance, tpa, ai-claim, ai-fraud, rpa, ai, graph-analytics, fpt-is]
created: 2026-04-13
updated: 2026-04-13
source_count: 2
po_email: AnhNQ5@fpt.com
---

## Overview

**AZINSU TPA** is FPT IS's digital platform for health insurance claims adjudication and payment, operated under FPT IS's **Digital Insurance Center** (Trung tâm bảo hiểm số). It automates the full health insurance claims lifecycle — from hospitalization guarantee through claims settlement — by connecting medical facilities, TPA/insurance companies, and insured persons on a single platform.

Contact: cskh@azinsu.com · azinsu.com · Tel: 0812 002 266
Mobile app available for insured persons (App Store + Google Play)

## What AZINSU does

AZINSU sits at the center of a 4-party workflow:

**Parties connected:**
- **Người được bảo hiểm** — Insured person
- **Cơ sở Y tế (CSYT)** — Healthcare facility / hospital
- **AZINSU** — Platform (TPA layer)
- **Công ty bảo hiểm** — Insurance company

**End-to-end claim flow:**
1. Insured person visits healthcare facility
2. Facility sends guarantee request → AZINSU auto-checks benefits & limits → insurer approves guarantee plan → AZINSU responds to facility
3. After treatment: facility exports XML data → AZINSU collects & reconciles
4. Insured person submits claims file → AZINSU auto-adjudicates → insurer decides compensation → settlement & payment → all parties receive results

## 7 services

1. Inpatient and outpatient hospitalization guarantee
2. Health insurance claims settlement and payment
3. Multi-channel customer consultation and interaction
4. Claims data management and analysis
5. Insurance product/benefit improvement consulting
6. Suspicious fraud claims investigation
7. Health checkup package arrangement

## Technology stack

| Technology | Application |
|---|---|
| **RPA** | Auto-collect medical data from healthcare facilities; auto-adjudicate claims |
| **AI/OCR** | Read invoices, cost statements, examination forms; detect fake/unsigned documents |
| **Big Data** | Analyze treatment and claims data; recommend product/benefit improvements |
| **Cloud** | Full cloud deployment; separate portals for insured persons, corporate buyers, hospitals, insurers |

## Competitive differentiation

The key differentiator vs. the market is **data collection automation**:

| Dimension | Market | AZINSU |
|---|---|---|
| Data collection | Hospital manually inputs into insurer portal; TPA re-enters into software | Direct API connection to healthcare facilities; AI/OCR reads paper claims |
| Adjudication | Manual benefit/cost/limit checks; manual compensation plan | Automated cross-check; fraud auto-detection; AI-proposed compensation |

## Performance metrics

| Metric | Value |
|---|---|
| Average claims processing time | 5 days/case |
| On-time resolution rate | 95% |
| Hospitalization guarantee response (to hospital) | 15 minutes |
| Insured person claims response | 24 hours |

## AI CLAIM sub-product

**AI CLAIM** is a standalone AI module that plugs into any insurer's existing core claims system via API — it is independently sellable and does not require the full AZINSU TPA platform. It automates the full claims adjudication workflow across 5 stages: reception → data entry → adjudication → approval → payment.

**4-module architecture:**
- Module 1: Request classification (email/NLP/routing)
- Module 2: Document processing (OCR, KIE, data mapping)
- Module 3: Verification & validation (invoice check, drug verification, fraud scoring)
- Module 4: Cost allocation (benefit mapping, exclusion check, payment calculation)

**Quantified system KPIs:**
- Processing time: <60 seconds (90% of cases)
- Document accuracy: >95%
- Classification accuracy: >98%
- False positive rate: <2%
- Cost reduction: 60%

**Case study results (unnamed insurer):**
- 5,460 outpatient files; 33% (2,600) processed via AI CLAIM
- Processing time: 10–15 min (from 24 min; 40–60% saving)
- Productivity: +60%; files per person/day: 30 → 50
- Data entry staff: 2 → 0.5 persons; processing time reduction: 65–70%

**Drug database:** 65,000+ drugs from Vietnam Drug Management Authority

## AI FRAUD sub-product

**AI FRAUD** automates insurance fraud detection at system scale using graph analytics and anomaly detection. Shifts insurers from reactive post-payment review to proactive prevention.

**Core technology stack:**
- **Data Foundation**: Apache Spark (billions of records); Rule Engine (millisecond latency)
- **Graph Analytics**: Neo4j Enterprise; PyTorch Geometric (GNN for organized fraud networks)
- **Cognitive AI**: GraphRAG (knowledge graph + LLM); Flexible LLM Core (orchestration)
- **Advanced Anomaly**: MHGSL GNN (structure learning); Isolation Forest (anomaly detection)

**Operating model:** Medical data + claims data → ML engine (risk scoring) + Rule engine (behavior patterns) + Graph engine (Medical Knowledge Graph, cluster detection) → AI reasoning (Risk Score + Graph Context) → real-time alerts + in-depth reports

**Continuous learning:** Investigators provide feedback → Expert intelligence (rules, blacklists) + AI/ML (behavior discovery) → backtesting → deploy updates (rulebook, model retraining, knowledge graph expansion)

**Performance:** Detection rate 2–3× vs. manual; AI covers >80% of files; 100% ICD/CSYT-structured data; audit-compliant

## Deployment timeline

5 phases from contract to live operations:
- Phase 0 (Discovery): 2–4 weeks
- Phase 1 (Configuration): 4–6 weeks
- Phase 2 (Integration): 8–10 weeks
- Phase 3 (Testing/Pilot): 8–12 weeks
- Phase 4 (Operations): 6–12 months parallel

**Total to go-live: ~22–32 weeks**

## FPT IS healthcare and insurance context

- 20 years healthcare IT solutions
- 300+ healthcare facilities using FPT IS solutions
- 500+ healthcare IT specialists
- 1,500+ financial sector specialists (banking, insurance, securities, finance)
- Technology partners for insurance: Sinosoft Co.,Ltd · DXC Technology · Oracle

> [!NOTE]
> Case study client is unnamed. No named client deployments confirmed in available sources.

## Sources

[[2025-05-13_azinsu-brochure]], [[2026-01-01_azinsu-ai-claim-saleskit]]

## Related

[[FPT IS]], [[FPT Corporation]], [[akaBot]], [[Intelligent Document Processing]], [[RPA and Hyperautomation]], [[Digital Transformation (Vietnam)]]
