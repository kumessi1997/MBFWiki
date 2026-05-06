---
title: FPT.InsuranceX — Saleskit
type: source
tags: [insurancex, insurance, life-insurance, mega-app, fpt-is, agent-management, sfa]
created: 2026-04-20
updated: 2026-04-20
source_file: raw/InsuranceX/3. Saleskit/Salekit_InsuranceX.pdf
---

## Summary

FPT.InsuranceX is a **mega app** (web + mobile) ecosystem built by [[FPT IS]] for life insurance companies. It digitalizes the full insurance business operation cycle: recruiting and onboarding agents, online training, e-contract signing, online sales (FNA + illustration + submission), agent portal, and customer self-service portal — all integrated via OpenAPI with the insurer's Core and non-Core systems.

The saleskit (VI, 6 substantive slides) presents the product overview, architecture, two reference clients (Hanwha Life and Shinhan Life Vietnam), market pain points, and quantified results from the Hanwha Life deployment. The product positions as a Sales Force Automation (SFA) platform that connects every role in a life insurance company — potential agents, FCs, agency management, business units, and end customers — on a single integrated platform.

## Key facts

- **Type:** Mega App — Web App + Mobile App (iOS + Android)
- **Service model:** Build & deploy (custom implementation)
- **Key metrics claimed:**
  - 27/7 availability (document states "27/7" — likely meant 24/7)
  - 40% effort/resource reduction
  - 90% processing time reduction

**Hanwha Life case study (before → after):**
- Financial Consultants: 20,000 → 37,000 (+85%)
- Processing time per application: 24h → 2h (-92%)
- New platform (SFA) revenue contribution: +10%

## 5 core modules

1. **Agent Recruitment & e-Contract & Online Training**
   - Potential agent registration portal
   - Agent channel recruitment management
   - Online training LMS/LCMS for FCs and potential FCs
   - e-Contract signing with financial consultants

2. **Online Sales System (for FCs)**
   - Financial Needs Analysis (FNA) table
   - Illustration table + online insurance application submission → auto-transfers data to core

3. **Agent Portal**
   - Customer, contract, KPI, salary/bonus management
   - Personal services for agents

4. **Customer Portal**
   - Contract information lookup
   - Cash value advance requests
   - Claims submission
   - Personal information updates, online payment

5. **OpenAPI Integration**
   - Connects to Core insurance systems, non-Core systems, payment gateways, CRM, AD/LDAP, eKYC

## Technology stack

React (web) + React Native (mobile), HTML5/CSS/Bootstrap, FPT.AI, Redis, Elasticsearch, Android, iOS

**Architecture:** 5 user roles (Agency / Business User / IT Admin / App Admin / Customer) → 4 main modules (Agency Portal / E-Submission for Sale / E-Recruitment / CPO) → Common Services (Email/SMS, Payment, Notification, Collaboration, File Mgmt) → API Gateway → Database

**External integrations:** DMS, Asia Life Core, Payment Online Gateway, CRM, AD/LDAP, eKYC

**CPO (Customer Portal) sub-features:** Contract mgmt, personal services, ePolicy Kit, eLetter, eInvoice, Online Payment, News & Products, Customer care, Document mgmt, Notification, FC approval, Claims approval, Account management, ChatGPT bot

## Reference clients

**Hanwha Life Việt Nam**
- Life insurance (bảo hiểm nhân thọ): An Khang Phúc Lộc, An Khang Tài Lộc, An Khang Toàn Gia
- Est. 12/6/2008; charter capital 4,891 tỷ VND
- 1M+ customers; 500 staff; 37,000 FCs (2023)

**Shinhan Life Việt Nam**
- Life insurance, health insurance, financial investment
- Est. 1/2022; charter capital 2,320 tỷ VND

## Market pain points addressed

- FCs lacked a unified sales system for FNA, illustration, application, and auto-transfer to core
- Insurance core systems run on internal networks → satellite apps needed for customer self-service (payment, claims, info changes)
- Fragmented systems unable to share data across departments
- Poor UX; need multi-platform web+mobile to connect all roles: potential FCs, FCs, agents, BU staff, customers

## Key entities

[[FPT IS]], [[Hanwha Life Vietnam]], [[Shinhan Life Vietnam]]

## Key concepts

[[Insurance SFA (Sales Force Automation)]], [[Digital Transformation (Vietnam)]]

## Connections

- Relates to [[AZINSU]] — both serve insurance sector; AZINSU handles health insurance TPA/claims automation; InsuranceX handles life insurance agent recruitment + sales + customer service
- Complements [[Kyta Platform]] — InsuranceX uses e-contract signing; Kyta Gate/Signature provides the underlying e-signature infrastructure
- Extends [[FPT eID]] — eKYC integration for agent/customer identity verification

## My notes
