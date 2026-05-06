---
title: Debt Collection (Fintech)
type: concept
tags: [debt-collection, fintech, dpd, consumer-finance, automation, vietnam]
created: 2026-04-14
updated: 2026-04-14
source_count: 2
---

## Definition

**Debt Collection** in the fintech context refers to the software-enabled process of recovering overdue loan payments — from early automated reminders through field agent visits, legal proceedings, and debt sale/write-off. Modern debt collection systems use AI/ML prioritization, omnichannel outreach (SMS, email, auto-call), and mobile apps for field agents to maximize recovery rates while reducing operational costs.

This is distinct from traditional collection (manual call lists, paper-based tracking, siloed team workflows) which characterizes legacy CTTCs in Vietnam.

## DPD (Days Past Due) — the core classification metric

**DPD (Days Past Due)** measures how many days a borrower is overdue. All modern debt collection systems segment borrowers by DPD to route them to the appropriate collection strategy:

| Stage | DPD Range | Typical Channel |
|---|---|---|
| Pre-due (Group 0) | −6 to 0 DPD | BOT: automated SMS/Email/AutoCall |
| Early (Group 1.1/1.2) | 1–30 DPD | Tele Collector + BOT |
| Mid-stage (Group 2) | 31–90 DPD | Tele Collector (escalated) |
| Field | 61–180 DPD | Field Agent with mobile app |
| Legal | 181–240 DPD | Legal team / law firm |
| Recovery | 240+ DPD | Debt sale or write-off |

## Standard 6-stage collection lifecycle

1. **Early Collection** — pre-due and <30 DPD automated reminders; BOT handles high volume
2. **Early Field** — transition from tele to field agents
3. **Field Collection** — in-person visits; GPS-tracked mobile app for agents
4. **Legal Collection** — formal demand letters, legal proceedings, integration with law firms
5. **Recovery** — debt sale negotiations, write-off processing
6. **Debt Sale** — portfolio offloading to debt buyers at a discount

## Key technology components

- **Workflow Engine** — orchestrates case routing by DPD stage and collection scenario
- **Analysis/Predict AI** — ML-based debtor prioritization (who to call first, when)
- **BOT Layer** — automated SMS (VNPay), Email (AWS SES), AutoCall (telephony) for high-volume low-DPD cases
- **Mobile App** — for field agents: GPS, visit logging, payment capture, document upload (Swift/Java/Firebase)
- **Commission Management** — tracks and calculates collector incentives
- **Caching/Search Layer** — ElasticSearch + Redis for high-performance debtor lookup
- **Integration Hub** — connects to Corebank (CBS), Law Firm systems, Corp Gateway, Data HUB

## Vietnam market context

- Vietnam consumer credit/GDP = **27.17%** — underpenetrated; growing market means growing debt collection demand
- 16 licensed CTTCs; most using legacy manual collection or basic tele-only systems
- Regulatory framework requires DPD-based provisioning per State Bank of Vietnam rules

## FPT IS implementation: LendVero Debt Collection

[[LendVero]]'s Debt Collection module is [[FPT IS]]'s product in this space. See [[LendVero]] for full technical specs.

Key differentiators:
- Full omnichannel: BOT (SMS/Email/AutoCall) + Tele + Field + Legal in one platform
- AI/ML prioritization reduces idle call time for collectors
- Mobile-first field app with GPS tracking
- 5-phase implementation; 3-tier deployment (SIT/UAT/Production)
- Integrates natively with LendVero LOS for seamless LOS → collection handoff

**Note:** No standalone Debt Collection case study disclosed; [[JACCS]] covers full LendVero platform.

## Related

[[Loan Origination System]], [[LendVero]], [[FPT IS]], [[JACCS]], [[AZINSU]], [[Digital Transformation (Vietnam)]]
