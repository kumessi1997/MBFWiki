---
title: FPT.InsuranceX
type: product
tags: [insurancex, insurance, life-insurance, mega-app, sfa, agent-portal, fpt-is]
created: 2026-04-20
updated: 2026-04-20
source_count: 1
po_email: AnhNQ5@fpt.com
---

## Overview

**FPT.InsuranceX** is [[FPT IS]]'s mega app ecosystem (web + mobile) for life insurance companies. It covers the full business operation cycle — agent recruitment, e-contract, online training, online sales, agent portal, and customer portal — integrated via OpenAPI with Core and non-Core insurance systems.

The product is positioned as a **Sales Force Automation (SFA)** platform that connects every stakeholder in a life insurance company on one unified platform: potential agents → financial consultants (FCs) → agency management → business units → end customers.

## Key metrics

- **24/7** availability
- **40%** effort/resource reduction
- **90%** processing time reduction

**Hanwha Life deployment (before → after):**
- FCs: 20,000 → 37,000 (+85%)
- Application processing time: 24h → 2h
- New SFA platform revenue: +10%

## Modules

| Module | Key capabilities |
|--------|----------------|
| **Agent Recruitment & e-Contract & Training** | Potential agent registration; recruitment management; LMS/LCMS for FCs; e-contract signing |
| **Online Sales System** | Financial Needs Analysis (FNA); illustration table; insurance application submission → auto-push to core |
| **Agent Portal** | Customer & contract management; KPI tracking; salary/bonus; personal services |
| **Customer Portal** | Contract lookup; cash value advance; claims submission; info updates; online payment |
| **OpenAPI Integration** | Core/non-Core system connectivity; payment gateways; CRM; AD/LDAP; eKYC |

## Architecture

**5 user roles:** Agency · Business User · IT Admin · Application Admin · Customer

**4 functional blocks:**
1. **Agency Portal** — account info, admin/BU management, collaboration tools; agent functions (contract mgmt, income, recognition, sales presentation); BU functions (agent data, movement, termination, KPI, remuneration, K2)
2. **E-Submission for Sale** — self-service (login, customer mgmt, quotation, e-application, payment, data sync); Policy Admin (product config, sales channel mgmt, document mgmt, reports, system admin)
3. **E-Recruitment** — category management (job descriptions, competency groups, user permissions); recruitment management (potential agent mgmt, reward config, recruitment process, onboarding); reporting & analytics
4. **CPO (Customer Portal)** — contract mgmt, personal services, ePolicy Kit, eLetter, eInvoice, online payment, news/products, customer care, document mgmt, notification, FC/claim approval, account mgmt, ChatGPT bot

**Common services:** Email/SMS · Payment · Notification · Collaboration · File Management

**Tech stack:** React + React Native, HTML5/CSS/Bootstrap, FPT.AI, Redis, Elasticsearch, iOS/Android

**External integrations:** DMS · Asia Life Core · Payment Online Gateway · CRM · AD/LDAP · eKYC

## Reference clients

- **Hanwha Life Vietnam** — est. 2008; charter capital 4,891 tỷ VND; 1M+ customers, 37,000 FCs; flagship deployment
- **Shinhan Life Vietnam** — est. 2022; charter capital 2,320 tỷ VND; life/health insurance + financial investment

## Market context

Vietnamese life insurance companies face three core pain points:
1. No unified sales tool for FCs (FNA + illustration + application + core data transfer)
2. Core insurance systems on internal networks → no customer self-service
3. Fragmented systems across departments → poor UX, no cross-department data sharing

InsuranceX solves all three with a single multi-platform ecosystem compliant with Vietnamese life insurance regulations.

## Relationship to other FPT IS products

- **[[AZINSU]]** — complementary: AZINSU covers health insurance TPA/AI claims; InsuranceX covers life insurance sales & agent ops
- **[[Kyta Platform]]** — InsuranceX's e-contract module leverages e-signature infrastructure (Kyta Gate/Signature)
- **[[FPT eID]]** — eKYC integration for agent and customer identity verification at onboarding
