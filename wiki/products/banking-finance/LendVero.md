---
title: LendVero
type: entity
tags: [lendvero, fpt-is, fintech, lending, los, debt-collection, vietnam]
created: 2026-04-14
updated: 2026-04-14
source_count: 4
po_email: ToanPT15@fpt.com
---

## Overview

**LendVero** is [[FPT IS]]'s end-to-end digital lending platform, targeting consumer finance companies (CTTCs) and banks in Vietnam. It covers the full lending lifecycle: loan origination through debt collection. The platform is designed to replace fragmented legacy systems at mid-size and smaller finance companies with a single, BPM-orchestrated, mobile-first solution.

LendVero sits within FPT IS's Banking & Finance vertical alongside Volar (core banking), Votum (risk/compliance), Velox (business apps), akaFortune, and TradeFlat.

## Modules

### LOS — Loan Origination System

Codename: **jLOS**. Manages the full loan request lifecycle from digital application through approval/rejection.

**8-step business process:**
1. Customer Info Capture
2. eKYC (OCR ID card, NFC, Liveness, MPS verification)
3. Product Selection
4. Credit Scoring (CIC + PCB bureau integrations)
5. Appraisal
6. Contract Signing (FPT.eContract)
7. Disbursement
8. Loan Account Management

**Tech stack:** jBPM/Camunda (BPM engine), ReactJS (web), Java Spring Boot (backend), ReactNative (mobile), Azure AD/SAML (auth), AWS S3 / KBTG S3 Glacier (storage), Apigee SAAS (API gateway), MySQL cluster

**Applications:** Customer App, Sales App (agent-facing), Web App (back-office)

**Infrastructure:** 4 DC-WEB + 2 DC-APP servers, WAF, load balancer, FMon monitoring; 3-tier: SIT → UAT → Production

**Deployment timeline:** 1–3 months

### Debt Collection System

Manages full debt recovery lifecycle from pre-due automated reminders through field collection, legal action, and debt sale.

**DPD (Days Past Due) classification:**
| Stage | DPD Range | Channel |
|---|---|---|
| Group 0 | −6 to 0 | BOT (SMS/Email/AutoCall) |
| Group 1.1/1.2 | 1–30 | Tele Collector + BOT |
| Group 2 | 31–90 | Tele Collector |
| Field | 61–180 | Field Agent (mobile app) |
| Legal | 181–240 | Legal proceedings |
| Recovery | 240+ | Debt sale / write-off |

**Core components:** Analysis/Predict AI, Workflow Engine, Early/Field/Legal Collection modules, Debt Reminder, Commission Management, Caching/Searching (ElasticSearch/Redis)

**BOT automation:** VNPay SMS, AWS SES Email, AutoCall (telephony) — automated outreach before human escalation

**Tech stack:** Java Spring Boot + Python (backend/ML), jQuery/React (web), Swift + Java + Firebase (mobile), MySQL, ElasticSearch, Redis, NGINX, Docker, Kubernetes

**Integration:** Corebank (CBS) ↔ LendVero ↔ CMS, Corp Gateway, Data HUB, Law Firm, BOT

**Implementation:** 5-phase methodology (Requirement Analysis → System Design → Development → UAT → Go-Live)

## Target market

- **Primary:** Consumer Finance Companies (CTTC) — 16 licensed in Vietnam
- **Secondary:** Banks and financial institutions
- **Market context:** Vietnam consumer credit/GDP = 27.17% — underpenetrated vs. regional peers; growth opportunity thesis

## Case studies

- **[[JACCS]] (JIVF)** — Japan Consumer Credit Group's Vietnam arm; flagship customer
  - 70% reduction in loan processing time
  - 100% eKYC verification accuracy
- 20+ Digital Onboarding clients (LOS)
- 19 IDcheck clients (eKYC layer via [[FPT eID]])

## Competitive positioning

- Customizable BPM workflows — advantage over large rigid vendors (Temenos, FIS)
- Mobile-first for sales agents and field collectors
- Affordable for mid/small-size finance companies
- Integrated eKYC leverages FPT IS's existing [[FPT eID]] platform

## Integrations

- [[FPT eID]] — IDcheck eKYC layer
- FPT.eContract / [[FPT.eSign]] — electronic contract signing at disbursement
- CIC (Credit Information Center) — Vietnam credit bureau
- PCB — Public Credit Bureau
- Apigee SAAS — API gateway
- KBTG AWS S3 Glacier — document archiving

## Sources

[[2026-04-14_lendvero-brochure]], [[2026-04-14_lendvero-los-saleskit]], [[2026-04-14_lendvero-debtcollection-saleskit]], [[2026-04-14_lendvero-sales-training]]

## Related

[[FPT IS]], [[JACCS]], [[FPT eID]], [[FPT.eSign]], [[Loan Origination System]], [[Debt Collection (Fintech)]], [[Digital Transformation (Vietnam)]]
