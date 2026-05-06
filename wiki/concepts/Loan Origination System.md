---
title: Loan Origination System
type: concept
tags: [los, lending, fintech, bpm, ekyc, consumer-finance]
created: 2026-04-14
updated: 2026-04-14
source_count: 3
---

## Definition

A **Loan Origination System (LOS)** is software that automates and manages the end-to-end process of creating a new loan — from initial application through credit evaluation, approval/rejection, contract signing, and disbursement. It replaces fragmented manual workflows (spreadsheets, paper forms, email handoffs) with a single BPM-orchestrated platform.

In Vietnam's consumer finance context, LOS is the primary digitization target for Consumer Finance Companies (CTTCs) seeking to reduce processing time and scale loan volumes without proportionally increasing headcount.

## Standard process flow

A modern LOS typically covers 6–8 steps:

1. **Customer Info Capture** — digital onboarding via mobile or web
2. **eKYC / Identity Verification** — OCR ID card, NFC chip, Liveness detection, government database checks
3. **Product Selection** — loan type, tenor, amount configuration
4. **Credit Scoring** — bureau checks (CIC, PCB in Vietnam) + internal scoring models
5. **Appraisal** — collateral assessment, income verification, risk review
6. **Contract Signing** — electronic signature (e.g., FPT.eContract)
7. **Disbursement** — fund transfer to customer
8. **Loan Account Management** — post-disbursement tracking, statements, early repayment

## Key technology components

- **BPM Engine** — orchestrates the multi-step approval workflow; common choices: jBPM, Camunda, Pega
- **eKYC Layer** — biometric identity verification; in Vietnam context, integrates with Ministry of Public Security (MPS)
- **Credit Bureau API** — CIC (Credit Information Center) and PCB are the two bureaus in Vietnam
- **Mobile App** — for sales agents doing field onboarding
- **API Gateway** — connects LOS to corebank, credit bureaus, e-signature, and payment systems

## Vietnam market context

- Traditional CTTC loan processing time: **40–45 minutes** per application (fragmented manual steps)
- Modern LOS target: sub-10 minutes with automation
- 16 licensed consumer finance companies (CTTCs) in Vietnam as of 2025
- Consumer credit/GDP in Vietnam: **27.17%** — low vs. regional peers (Thailand, Malaysia) → growth opportunity
- Total consumer debt in Vietnam: ~2.58 trillion VND (~22% of the credit system)

## FPT IS implementation: LendVero LOS

[[LendVero]] is [[FPT IS]]'s LOS product (codename: jLOS). See [[LendVero]] for full technical specs.

Key differentiators vs. large global vendors:
- Customizable BPM workflows (not rigid pre-built flows)
- Affordable deployment for mid/small CTTCs
- Mobile-first for sales agents
- 1–3 month deployment timeline
- Deep integration with [[FPT eID]] for eKYC

**Reference base:** [[JACCS]]/JIVF (flagship; 70% time reduction, 100% eKYC accuracy); 20+ digital onboarding clients; 19 IDcheck clients

## Related

[[Debt Collection (Fintech)]], [[LendVero]], [[FPT IS]], [[FPT eID]], [[FPT.eSign]], [[JACCS]], [[Digital Transformation (Vietnam)]]
