---
title: LendVero Debt Collection Saleskit v1.0 (EN)
type: source
tags: [lendvero, debt-collection, fintech, fpt-is, architecture, saleskit, dpd]
created: 2026-04-14
updated: 2026-04-14
source_file: raw/LendVero/3. Saleskit/LendVero.DebtCollection v1.0_EN.pdf
---

## Summary

Full 30-page saleskit for LendVero's Debt Collection module. Covers the shift from traditional collection (manual, phone-heavy, no analytics) to tech-enabled collection (omnichannel, AI-driven prioritization, mobile field staff), product architecture, tech stack, 6-stage business process, DPD-based staff routing, and a 5-phase implementation methodology.

The system manages the full debt recovery lifecycle from early automated reminders (Group 0, pre-due) through field agent visits, legal action, and debt sale — all orchestrated by a workflow engine with AI/ML-based debtor prioritization. A BOT layer handles automated outreach (SMS via VNPay, Email via AWS SES, AutoCall) before human agents are engaged, reducing operational costs.

The 3-tier deployment model (SIT → UAT → Production) and detailed data migration + training plan indicate enterprise-grade implementation discipline.

## Key facts

- Tech stack: Java Spring Boot (backend), Python (ML/AI), jQuery/React (web frontend), Swift + Java + Firebase (mobile), MySQL, ElasticSearch, Redis, NGINX, Docker, Kubernetes
- Authentication: Azure AD (SAML)
- File archiving: KBTG AWS S3 Glacier
- Automated outreach: VNPay SMS, AWS SES Email, AutoCall (telephony integration)
- 6 collection stages: Early Collection → Early Field → Field Collection → Legal Collection → Recovery → Debt Sale
- DPD (Days Past Due) classification:
  - Group 0: −6 to 0 DPD (pre-due reminders)
  - Group 1.1/1.2: 1–30 DPD (early collection)
  - Group 2: 31–90 DPD (mid-stage)
  - Field: 61–180 DPD (field agent visits)
  - Legal: 181–240 DPD (legal proceedings)
  - Recovery: 240+ DPD (debt sale / write-off)
- Core components: Analysis/Predict AI, Workflow Engine, Early/Field/Legal Collection modules, Debt Reminder, Security, Commission Management, Caching/Searching (ElasticSearch/Redis)
- Integration architecture: Core Bank (CBS) ↔ LendVero ↔ CMS, Corp Gateway, Data HUB, Law Firm, BOT
- 5-phase implementation: Requirement Analysis → System Design → Development → UAT → Go-Live
- Mobile app for field collectors with GPS, visit logging, and payment capture
- Admin flow: config categories → debt groups → processes → scenarios → campaigns

## Key entities

[[LendVero]], [[FPT IS]], [[JACCS]]

## Key concepts

[[Debt Collection (Fintech)]]

## Connections

- Debt Collection integrates with LOS (LendVero platform) via Corebank/CBS handoff
- BOT automation layer parallels [[akaBot]]'s automation philosophy — routine outreach handled by software before human escalation
- KBTG AWS S3 Glacier archiving is the same infrastructure used in LOS module
- 5-phase implementation methodology matches standard FPT IS project delivery (compare: [[akaMES]], [[AZINSU]])

## My notes

No named case study specific to Debt Collection module — JACCS reference covers the full LendVero platform. The AI/ML prioritization ("Analysis/Predict AI" component) is described architecturally but not detailed with accuracy metrics.
