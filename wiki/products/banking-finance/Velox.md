---
title: Velox
type: product
tags: [velox, digital-banking, omni-channel, teller, hrm, ecm, insurance, cash-management, fpt-is, banking]
created: 2026-04-17
updated: 2026-04-17
source_count: 1
po_email: AnhNQ5@fpt.com
---

## Overview

**Velox** (Latin: "swift") is FPT IS's **Business Applications suite** — the front-office and operational layer covering digital banking, teller operations, insurance claims, cash transport management, enterprise content management, fixed assets, HR management, and sales management. It is part of FPT IS's three-suite Banking & Finance portfolio alongside [[Volar]] and [[Votum]].

The suite bundles 10 standalone modules. It has the broadest scope of the three suites, extending beyond core banking into HR, compliance documentation, and insurance operations — making it applicable to banks, finance companies, and insurers alike.

## Modules

### OMNI — Comprehensive Digital Banking Platform
The flagship Velox module. Three integrated sub-components:

1. **Digital Banking** — Internet Banking + Mobile Banking for retail and corporate customers: account inquiry, fund transfer, bill payment, loan services, investment products, card management, notifications
2. **Teller App** — Web-based in-branch transaction system for bank tellers (overlaps with FOS below — OMNI is the platform; FOS is the standalone teller brochure)
3. **CDP (Customer Data Platform)** — 360° unified customer profile aggregating transaction history, product holdings, behavioral data for personalization and cross-sell

**Reference clients:** Kasikornbank (Thailand), Eximbank, HDBank

---

### DFORM — Digital Form Management
Paperless form creation, routing, and approval: drag-and-drop form builder, e-signature integration, conditional logic, multi-step approval workflows, audit trail, and archiving. Eliminates paper-based forms in branch and back-office operations.

**Reference clients:** (none listed)

---

### IC — Centralized Credit Information System
Internal credit information hub: aggregates customer credit data from all loan systems, bureau integrations, and risk engines into a single centralized repository for underwriting, monitoring, and reporting.

**Reference clients:** (none listed)

---

### BANCA — Online Insurance Claims Management
Dual-portal insurance claims platform for banks acting as bancassurance agents:
- **Customer portal**: submit claim, upload documents, track status
- **Insurance staff portal**: receive claim, OCR-assisted data extraction, review, approve/reject, process payment
- Supports 15 insurance types
- OCR reduces manual data entry

**Reference clients:** (none listed)

---

### ECAR — Cash & Vehicle Transport Management
Treasury cash management and armored vehicle logistics for banks and CIT (cash-in-transit) companies:
- 6 modules: ATM replenishment planning, vehicle tracking (GPS), journey management, route optimization, delivery confirmation, reporting
- Real-time vehicle monitoring
- Cash forecast and replenishment scheduling

**Reference clients:** (none listed)

---

### ECM — Enterprise Content Management
Document management system for banks and financial institutions:
- 7 modules: Document management · Warehouse management · Asset management · Procurement management · Gift management · Reporting
- Central repository with version control, metadata tagging, search
- Multi-level approval workflows with digital signature integration
- Document retention policies and archiving

**Reference clients:** (none listed)

---

### EFAM — Fixed Asset Management
Full lifecycle tracking of fixed assets, tools, and instruments:
- BPM platform + microservices architecture
- Asset registry, depreciation calculation, transfer/disposal workflows
- Tool and instrument tracking for precision management
- Integration with accounting/ERP systems
- Tagline: "Empower Assets, Elevate Success"

**Reference clients:** (generic reference to domestic banks)

---

### FOS — In-Branch Transaction System (Front Office System)
Web-based teller platform for branch operations. 10 modules:
ADMIN · CIF (Customer Information File) · CASA (Current & Savings Accounts) · TD (Term Deposits) · BATCH · CASH · GL (General Ledger) · TF (Trade Finance) · ACAP · PIV

- Target: ≤5 minutes per transaction
- Handles all standard over-the-counter transactions

**Reference clients:** BVBank, Eximbank

> [!NOTE]
> FOS and the Teller App sub-component of OMNI describe the same product at different levels of detail. OMNI is the full digital banking platform (internet + mobile + teller); FOS is the standalone teller brochure. They are the same core product.

---

### HRM — Human Resources Management System
End-to-end HR platform for financial institutions: covers the full employee lifecycle from recruitment to resignation.

**11 functional modules:**
Organizational Management · Recruitment Management · Training Management · Employee Profile · Labor Contract · Timekeeping · Leave Management · Payroll · Insurance · KPI Assessment · Benefits & Allowances

**Reference clients:** Mirae Asset Finance Company (Vietnam)

---

### SMATE — Sales Management for Bank Sales Channels
CRM-lite and sales pipeline management for bank branch and direct sales teams:
- 360° customer view (product holdings, transaction history, contact log)
- Lead management for credit products, insurance products, and deposit mobilization
- Sales performance tracking and commission management
- SalesMate App (mobile) + Web interface

**Reference clients:** (none listed)

---

## Deployment model

- Modular — each module deployable independently
- On-premise, cloud, or hybrid
- API integration with any core banking platform (does not require Volar)
- Mobile-first modules (SMATE App, Teller App) support iOS and Android

## FPT IS Banking credentials

- 30 years in BFSI
- 100+ banks and financial institutions served
- 1,500+ BFSI experts across Hanoi, Da Nang, HCMC development centers

## Connections

- [[FPT IS]] — product owner
- [[Volar]] — companion suite: core banking backend that Velox front-office layers sit on top of
- [[Votum]] — companion suite: risk management & compliance
- [[LendVero]] — SMATE (sales management) and Velox IC (credit info) are natural pre-integration points for LendVero LOS
- [[AZINSU]] — BANCA (insurance claims) and [[AZINSU]] address different sides of the bancassurance chain; BANCA is the claims channel; AZINSU is the TPA/processing backend
- [[akaFortune]] — SMATE and akaFortune's sales automation module overlap for securities/investment products
- [[Kyta Platform]] — DFORM and ECM workflows integrate with Kyta ALM for document lifecycle and e-signature
