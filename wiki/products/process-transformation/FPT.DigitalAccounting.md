---
title: FPT.DigitalAccounting
type: product
tags: [fda, fpt-digital-accounting, ap, invoice, ocr, rpa, matching, payment-request, saas, fpt-is, process-transformation]
created: 2026-04-18
updated: 2026-04-18
source_count: 1
po_email: CuongNH8@fpt.com
---

## Overview

**FPT Digital Accounting** (FDA) is a **SaaS AP invoice automation platform** developed by **FPT IS**, targeting enterprise purchasing accountants. Its full positioning: *"Automated Data Entry and Management of Accounting Voucher Solution — Empower purchasing accountants with digital tool."*

FDA handles the complete incoming invoice lifecycle: **collect → extract → validate → match → approve → post to ERP**. It is the **AP-side complement** to [[FPT.eInvoice]] (which handles AR invoice issuance). FDA runs on FPT Cloud SaaS with 1-minute deployment, 30-second registration, and 30-second per-invoice processing.

- **450+ enterprise clients** · **25,000+ invoices processed** (cumulative)
- Award: **Sao Khue 2021**
- Website: fda.fpt.com.vn

## Problem It Solves

70% of a purchasing accountant's time is spent on manual data entry and invoice processing:
- Invoices arrive via multiple heterogeneous channels
- Manual extraction; legality checking labor-intensive and often skipped
- Risk of fake/invalid invoices even for e-invoices
- 3-way matching (PO/GRN/Invoice) requires cross-referencing multiple systems
- Payment request (ĐNTT) approval is paper-based and slow

## 5 Functional Modules

### 1. Invoice Management (Quản lý hóa đơn)
- Auto-collect via Email (FDA inbox or corporate auto-forward; handles captcha/link-only emails)
- Auto-collect from GDT website (hoadondientu.gdt.gov.vn) — configure once with account credentials
- Direct XML/PDF/ZIP upload
- OCR + NLP extraction in **3 seconds**
- Auto-validate against GDT in **3 seconds** (RPA)
- Cloud storage 10 years; labeling, searchable, deduplication reporting

### 2. Supplier Risk Alert (Cảnh báo NCC rủi ro)
- Instant alert when a risky supplier's invoice enters the system
- Daily background scan of all suppliers who have issued invoices
- Bulk TIN lookup via Excel or direct input
- 3 validation checks: (1) Invoice existence on TCT · (2) Digital signature + certificate validity · (3) Supplier active operational status

### 3. Payment Request Management (Quản lý Đề nghị thanh toán)
- Create ĐNTT (payment requests) quickly using enterprise templates
- Centralized document storage: invoices + all supporting attachments
- Configurable multi-level approval workflow; flexible delegation
- Real-time status tracking + cost summary
- ERP integration: auto-post accounting entries, reduce manual data entry

### 4. Auto Matching (3-way)
- Auto-sync PO (Purchase Order) and GRN (Goods Receipt Note) from ERP/procurement systems via API
- Auto-match at **2 levels:**
  - Summary level: Supplier, total amount
  - Line-item level: Per line on Invoice vs PO vs GRN
- Only unmatched or exception cases require human review
- Full matching flowchart: Collect → Extract → Validate → Approve → [PO+GRN sync] → Match → Post accounting

### 5. Reports & Statistics (Báo cáo thống kê)
- Business reports, management reports, reconciliation reports
- VAT declaration reports + purchase VAT declarations in GDT-prescribed XML format
- Exportable to CSV/Excel/API for accounting/ERP import

## Architecture

```
Users: Tổng công ty / Công ty-Chi nhánh / Phòng ban
Access: Web browser + Mobile device
         ↓
[QUẢN LÝ HÓA ĐƠN] [CẢNH BÁO NCC RỦI RO] [ĐỀ NGHỊ THANH TOÁN] [AUTO MATCHING] [BÁO CÁO]
         ↓
Core services: OCR · RPA · XML Recognition · Email Services · Certificate Services · Webservices
         ↓
Integrations: Email Server ↔ GDT HĐDT ↔ SAP ERP ↔ Ordering System ↔ Accounting Software
```

## Performance KPIs

| Metric | Value |
|---|---|
| Processing time/invoice | **30 seconds** (end-to-end) |
| OCR + NLP extraction | 3 seconds |
| Validity check | 3 seconds |
| Supplier/goods ID | 8 seconds |
| Time reduction | **80%** |
| Cost reduction | **70%** |
| Accuracy | **98%** |
| Data storage cost | **100% free** (FPT Cloud) |

## Setup & Onboarding

| Step | Time |
|---|---|
| Register | 30 seconds |
| Deploy | 1 minute |
| Consultancy | 5 minutes |
| Support | 24/7 |

## Integration

- **ERP:** SAP · BRAVO · Oracle ERP
- **Accounting software:** FAST, and others via CSV/XLSX/API
- **File formats:** CSV · XML · XLS · PDF · ZIP
- **Architecture:** Open API; flexible connection to ERP, ordering systems, accounting software
- **GDT connectivity:** via FPT.TVAN for invoice validation

## Case Studies

| Client | Scale | Use case | Result |
|---|---|---|---|
| **Petrolimex** | HQ + 40+ subsidiaries + 2,600 petrol stations; 600,000 invoices/year | Centralized AP management across all entities; full payment workflow; SAP ERP integration | 80% time reduction, 50% cost reduction |
| **AEON Vietnam** | 6 hypermarkets + 30+ stores; >1M invoices/year | Phase 1 (12/2020–4/2021): non-trade invoices; Phase 2 (12/2021–5/2022): trading invoices; eDoc + Profit integration; 3-way auto matching | 80% time reduction |
| **Greenfeed** | Feed-Farm-Food conglomerate; multi-subsidiary | Phase 1 (11/2022–3/2023): non-trade; Phase 2: trading; SAP + Solomon ERP; Payment Request module | 80% time reduction |

## Named Clients (20+)

Sun Group · AEON · Greenfeed · Petrolimex · FPT Shop · NAPAS · VietjetAir · Nhà thuốc Long Châu · Nestlé · MSB · SABECO · Phân bón Cà Mau · Kim Tin · PINACO · Ariston · Huu Tri · A&M · THtax · Prudential · FPT Retail

## Award

- **Sao Khue 2021** — FPT IS

## Contact

- Email: DigitalAccounting@fpt.com
- Website: fda.fpt.com.vn
- Hotline: 1900 636 191 · 0914 206 850
- Hanoi: 22F Keangnam Landmark72, E6 Pham Hung, Nam Tu Liem
- HCM: Lot B3, Sang Tao, Tan Thuan EPZ, District 7

## Positioning vs Related Products

| Dimension | FDA | [[FPT.eInvoice]] | [[UBot]] Invoice+Matching |
|---|---|---|---|
| Direction | AP (incoming invoices) | AR (outgoing invoices) + TVAN | AP (incoming invoices) |
| Target | Enterprise (SAP/Oracle ERP) | Enterprise + SME (70K+ customers) | SME (RPAaaS, no ERP needed) |
| Deployment | SaaS (1 min deploy) | SaaS / Dedicated / OnPrem | SaaS RPAaaS (15 min setup) |
| Matching | 3-way PO/GRN/Invoice (full ERP sync) | AP module; 3-way matching | 3-way matching (2-second result) |
| ERP integration | Deep (SAP, BRAVO, Oracle) | API/sFTP/PEPPOL | Standalone, no ERP required |
| Client size | Medium-large enterprise | SME to enterprise | SME |

## Connections

- [[FPT IS]] — product owner and developer
- [[FPT.eInvoice]] — AR complement; FDA handles AP, FPT.eInvoice handles AR + TVAN submission; share FPT.TVAN validation infrastructure
- [[FPT.TVAN]] — underlying validation channel to GDT used by FDA for invoice legality checks
- [[UBot]] — UBot Invoice + Matching targets SMEs without ERP; FDA targets enterprises with SAP/Oracle integration and multi-subsidiary hierarchy
- [[akaBot]] — FDA's OCR/RPA core services are powered by akaBot-family automation technology
