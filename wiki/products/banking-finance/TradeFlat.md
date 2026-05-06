---
title: TradeFlat
type: product
tags: [trade-finance, supply-chain-finance, digital-financial-ecosystem, fpt-is, banking, corporate-banking, import-export]
created: 2026-04-17
updated: 2026-04-17
source_count: 1
po_email: AnhNQ5@fpt.com
---

## Overview

**TradeFlat** is a **Digital Financial Ecosystem** developed by [[FPT IS]], applying cutting-edge digital transformation technologies to connect Banks and Enterprises in Vietnam. It aims to digitize the full lifecycle of corporate financial transactions — from business onboarding to trade finance, supply chain lending, customs declaration, and financial health monitoring.

The platform acts as a neutral intermediary hub: it integrates with bank core banking systems on one side and corporate ERP/distribution systems (Anchor enterprises) on the other, while also connecting to Vietnam state systems (VNACCS customs, Tax Authority).

## Core Products

### 3.1 Trade Finance
Financial products supporting enterprises in import–export transactions and trade activities.

- **Letter of Credit (L/C)**: Domestic and international; full lifecycle (issuance, amendment, shipping doc check, negotiation, financing/UPAS, payment, cancellation)
- **eGuarantee**: Domestic and international; application, confirmation, draft issuance, termination, claiming obligations
- **Collection**: Outgoing and incoming; shipping document checking, acceptance/refusal, status maintenance
- **Import Shipment Financing (Trade Loans)**: Finance request, disbursement, repayment, inventory status, collateral lien release

Each module has a dual front-end (corporate customer) and back-office (bank user) layer, all integrated via an **Integration HUB** connecting to Corebanking, Bank ECM, Bank Digital Signature, and Other Bank Systems.

### 3.2 Supply Chain Finance
Financial products serving the entire supply chain — from input procurement, production, to distribution.

- **Supplier Finance**: Financial support for suppliers, based on accounts payable from Anchor enterprises
- **Distributor Finance**: Financial support for distributors, based on accounts receivable from Anchor enterprises
- **Factoring** (domestic & international import/export)
- **Reverse Factoring**
- **Pre-shipment financing**

TradeFlat integrates and transmits information between Anchors & Banks, supporting banks in verifying borrowing enterprises and their fund usage purposes (identity info, AR/AP info). Provides E2E digital platform for enterprises to onboard, choose banks, and select financial products.

**Case Study — Synnex FPT**: Leading ICT distributor (~$2B sales 2024, 3,800 agents, 8,000 stores nationwide). TradeFlat enabled working capital solutions for Synnex FPT's dealer network via partnerships with VPBank, MSB, TPBank, and Techcombank.

> "The TradeFlat system is easy to use and supports customers promptly in accessing capital for purchasing goods from Synnex FPT, resolving cash flow bottlenecks for distributors like us."
> — Ms. Nguyen Anh Thu, Finance & Accounting Department, Hoang Ha Mobile (Leading Distributor of Synnex FPT)

### 3.3 Business Financial Health Analytics & Monitor
A visual dashboard for managing and alerting on key corporate financial metrics.

- **Business Financial Health Dashboard**: 6-dimensional spider chart (Financial Index, Performance Efficiency, Cashflow Index, Liquidity, Profitability, Growth Capability); corporate vs. industry benchmarking; up to 5-year trend
- **Business Financial Health Monitor & Alert**: Credit scorecard configuration; threshold-based alerts (Rất xấu / Xấu / Trung bình / Tốt / Rất tốt); configurable monitoring rules per bank requirements

### 3.4 Customs Clearance
Portal for enterprises to submit customs declarations with Vietnam Customs.

- Import & Export Customs Clearance
- Business flow: Initial Declaration → Official Declaration → Inspection (Green/Yellow/Red Lane) → Pay Taxes via Payment Portal → Receive Clearance Result → Handle Goods
- Integrated with **Vietnam Customs Payment Portal** and **VNACCS** (Vietnam Customs authority system)

**Journey of Exporters**: Enterprise onboards TradeFlat → registers on VNACCS + Doc Hub → receives LC opening notice → manages shipping documents → declares export customs → requests LC discounting/collection → processes cleared shipments → monitors payment confirmation.

**Journey of Importers**: Onboard → VNACCS account → open L/C on TradeFlat → manage documents via Doc Hub/ERP Hub → approve/pay documents → request import financing → customs declaration → handle inbound logistics. (Timeline: within 30 days from goods arrival at port.)

### 3.5 eKYB (Electronic Know Your Business)
Digital identity verification for businesses and their authorized representatives.

| Feature | Detail | Technology |
|---|---|---|
| Digital Identity Verification | Verifies ID documents & matches facial features with selfies | OCR, Facial Recognition, AI |
| Remote Onboarding | Complete KYC from anywhere, anytime | Web Portals |
| Real-Time Verification | Instantly checks ID validity against databases | API Integration, Government Databases, Tax Authority |
| Fraud Detection | Detects fake documents and suspicious behavior patterns | AI |

**eKYB customer journey**: Account Registration → Email verification → Submit Business/Representative Info (upload business license, IDs of legal rep & chief accountant) → Complete Profile (departments, roles, bank accounts) → Service Selection (SCF, L/C, Guarantee…).

## Platform Architecture

```
FINANCIAL INTEGRATION HUB          BUILT-IN SERVICES
  Corebank | ECM | e-Signature        OCR | CA Signature | Spreadsheet

GENERAL MODULES      TRADEHUB MODULE      TRADE FINANCE      SUPPLY CHAIN FINANCE
Bank/Branch setup    Partner Mgmt         L/C                Distributor financing
Customer/User        PO management        Collection         Supplier financing
Workflow/Templates   Invoice mgmt         eGuarantee         Factoring / Reverse
Job/Notification     Contract mgmt        Import shipment    Pre-shipment
Fee/Accounting       AR/AP tracking       financing
Limit                Customs Declaration

CORP INTEGRATION HUB                    3RD PARTY VERIFICATION
  Anchor ERP | Partner Trade Portal       State Authority | Tax
  3rd party trade service platforms
```

## Unique Value Propositions

- **Onboarding/eKYB**: Enterprise authentication via FPT.TVAN & FPT CA; OCR of business registrations and ID documents
- **E-signing**: Built-in digital signature (USB Token & personal CA)
- **Integration**: Validates tax invoices with Vietnam General Department of Taxation; leading SAP/Oracle ERP integration provider; experience with FSOFT Distribution Management System
- **Flexible BPM**: Configurable business process management adapting to each bank's workflow requirements
- **Financial Health**: Monitor sales & debt relationships; configurable monitoring & alert system per bank requirements

## Partners & Clients

**Local Banks**: [[BIDV]], [[VPBank]], [[MSB]], [[Techcombank]], [[TPBank]], Vietcombank, Sacombank

**Local Enterprises (Anchor)**:
- [[Synnex FPT]] — ICT Distributor
- Thanh Long — Durable Goods Manufacturer & Distributor
- Ba Huan — Consumer Goods Manufacturer & Distributor

**International Platform Partners**:
- **TradeWaltz** — Japan market
- **TradeWindow** — Australia & New Zealand market
- **E&P International (亿通国际)** — China market

## Case Studies

### BIDV — Trade Finance Ecosystem
Strategic Alliance with The Joint Stock Commercial Bank for Investment & Development of Vietnam (BIDV), Vietnam's largest state-owned bank (est. 1957). TradeFlat serves as the Digital Global Trade & Trade Finance Ecosystem covering: Business Connection, Customs Declaration (FPT eCustom), Trade Finance, Logistics (containers booking/tracking, ports & warehouses), Insurance, Documents Presentation.

> "The TradeFlat platform creates a closed technology ecosystem that allows for fast, seamless, and real-time interactions, minimizing overlaps and replacing outdated paper-based procedures, creating the best experience for customers."
> — Ms. Le Ngoc Lam, Chief Executive Officer of BIDV

### Synnex FPT — Supply Chain Finance
See section 3.2 above.

## International Positioning

- **PAA.net membership**: FPT IS is a member of PAA.net (Digital Trade Alliance) since November 2023 — a global network promoting secure, trusted, reliable IT infrastructure for seamless trade
- **TradeFlat–TradeWaltz Integration Project**: Subsidized by Japan Ministry of Economy, Trade & Industry (METI). Successful PoC in January 2024. Participants: Mizuho Bank (Japan), Vietcombank (Vietnam), Mitsubishi Corporation, Sojitz Corporation, Mitsubishi Corporation Vietnam, Sojitz Vietnam Co., Ltd.
- **MOU with TradeWindow (NZ)**: Signed April 2025 — promoting cross-border trade between Vietnam and New Zealand/Australia
- **ASEAN-Japan Co-creation Forum**: MOU exchanges witnessed by Prime Minister of Vietnam at the 50th Anniversary Vietnam–Japan relationship event (December 2023, Tokyo)

## Contact

**Product Director**: Ms. Nguyen Hong Oanh
**Phone**: (+84) 913 598 787
**Email**: oanhnh@fpt.com
