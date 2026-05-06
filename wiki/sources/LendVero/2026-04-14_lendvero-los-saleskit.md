---
title: LendVero LOS Saleskit v1.0 (EN)
type: source
tags: [lendvero, los, loan-origination, fintech, fpt-is, architecture, saleskit]
created: 2026-04-14
updated: 2026-04-14
source_file: raw/LendVero/3. Saleskit/LendVero.LOS.v1.0_EN.pdf
---

## Summary

Full 31-page saleskit for LendVero's Loan Origination System (LOS), codename **jLOS**. The deck covers market painpoints, solution overview, overall architecture, technical architecture, 8-step business process flow, functional application maps, and case studies.

The core painpoint addressed: loan processing at CTTCs takes 40–45 minutes on average due to fragmented systems, manual steps, and repeated customer data entry. LendVero LOS automates the entire journey — from digital onboarding through credit scoring, appraisal, contract signing, disbursement, and loan account management — on a single BPM-orchestrated platform.

Architecture is organized into three layers: **jLOS modules** (eKYC, Loan Document, Appraisal, Loan Contract, Disbursement), **BPM layer** (jBPM/Camunda workflow engine), and **Admin/Reporting layer**. Technical infrastructure uses 4 DC-WEB + 2 DC-APP servers, MySQL cluster, WAF, and load balancers, with FMon for monitoring.

## Key facts

- Codename: **jLOS**
- Tech stack: jBPM/Camunda (BPM), ReactJS (web), Java Spring Boot (API/backend), ReactNative (mobile)
- Authentication: Azure AD with SAML
- File storage: AWS S3 (operational) + AWS S3 Glacier via KBTG (archiving)
- API gateway: Apigee SAAS
- Infrastructure: 4 DC-WEB + 2 DC-APP servers, MySQL cluster, WAF, load balancer, FMon monitoring
- Deployment target: 1–3 months
- 8-step business process: Customer Info Capture → eKYC → Product Selection → Credit Scoring → Appraisal → Contract Signing (FPT.eContract) → Disbursement → Loan Account Management
- Three application types: Customer App, Sales App (agent-facing), Web App (back-office)
- Credit bureau integrations: CIC (Credit Information Center) and PCB
- Case study: JACCS/JIVF — 70% processing time reduction, 100% eKYC accuracy
- Reference base: 20+ Digital Onboarding clients; 19 IDcheck clients

## Key entities

[[LendVero]], [[FPT IS]], [[JACCS]], [[FPT eID]]

## Key concepts

[[Loan Origination System]], [[Intelligent Document Processing]]

## Connections

- LOS uses [[FPT eID]] IDcheck for identity verification (19 IDcheck clients in reference base)
- Contract signing step integrates FPT.eContract → connects to [[FPT.eSign]] ecosystem
- jBPM/Camunda BPM engine mirrors the workflow automation philosophy of [[akaBot]]
- CIC + PCB credit bureau integrations are standard for any Vietnamese lending system

## My notes

Saleskit includes a full FPT IS company profile at the end (standard appendix). Architecture diagrams show a well-structured three-tier deployment (SIT/UAT/Production mentioned in related Debt Collection deck).
