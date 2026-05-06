---
title: FPT Digital Accounting Brochure & Saleskit 2024
type: source
tags: [fda, fpt-digital-accounting, ap, invoice, ocr, rpa, matching, saas, fpt-is, process-transformation]
created: 2026-04-18
updated: 2026-04-18
source_file: raw/raw/FPT.DigitalAccounting/2. Brochure/FDA - Brochure ENG - 4.5.2024 view.pdf + raw/raw/FPT.DigitalAccounting/3. Saleskit/FDA_Presentation_2024.pdf
---

## Summary

Two FPT Digital Accounting documents: an EN product brochure (4 pages, May 2024) and a VI sales presentation (20 slides, 2024). Together they fully describe FDA — a standalone AP invoice automation SaaS from FPT IS targeting enterprise purchasing accountants.

FPT Digital Accounting (FDA) is positioned as the **AP invoice processing layer** within the FPT IS finance automation stack. It automates the full incoming invoice lifecycle: collect (email + GDT portal) → extract (OCR/NLP) → validate (GDT + XML + supplier status) → match (3-way PO/GRN/Invoice) → approve (ĐNTT workflow) → post to ERP. The product runs on FPT Cloud SaaS, deploys in 1 minute, registers in 30 seconds, and processes one invoice in 30 seconds end-to-end.

FDA is distinct from FPT.eInvoice (AR issuance). FDA = AP side; FPT.eInvoice = AR side. FDA has its own brand identity, website (fda.fpt.com.vn), email (DigitalAccounting@fpt.com), and client base (450+ enterprises).

## Key facts

**Scale:**
- **25,000+** purchase invoices processed from FDA system (brochure stat)
- **450+ enterprises** using FDA
- 70 FDA customers included in FPT.eInvoice's 6,683 active customer count (per strategy doc — FDA tracked separately)

**Performance:**
- 30 seconds: entire invoice process end-to-end
- OCR + NLP extraction: 3 seconds
- Validity check: 3 seconds (via RPA)
- Supplier/goods identification: 8 seconds (Smart Text Search)
- **80% time reduction · 70% cost reduction · 98% accuracy · 100% free data storage**

**Setup:**
- Register: 30 seconds
- Deployment: 1 minute
- Consultancy: 5 minutes
- Support: 24/7

**5 functional modules:**
1. **Quản lý hóa đơn** (Invoice Management) — collect, extract, GDT validate, store
2. **Cảnh báo NCC rủi ro** (Supplier Risk Alert) — auto-alert on invoice entry + daily background check
3. **Quản lý Đề nghị thanh toán** (Payment Request Management) — ĐNTT creation, configurable multi-level approval, ERP sync
4. **Auto Matching** — 3-way PO + GRN + Invoice; 2 match levels: summary (supplier, total) + line-item detail
5. **Báo cáo thống kê** (Reports & Statistics)

**Invoice collection — 2 channels:**
- **Email:** FDA-provided inbox + auto-forward from corporate email; handles captcha/link-only emails automatically
- **TCT website (hoadondientu.gdt.gov.vn):** auto-download; business configures account credentials; deduplication report

**Legal validation (3 checks):**
1. Invoice existence on GDT/TCT
2. Digital signature + certificate validity (XML)
3. Supplier active status (risk alert — auto on entry + daily scan)

**Invoice Matching flow:**
```
Collect invoice (Email / Web upload) → Extract (OCR/NLP 3s) → Legal check (RPA 3s)
→ Auto/manual approval → [PO + GRN sync from ERP via API]
→ Match 2-way (summary: NCC, total) + 3-way (line-item: Invoice vs PO vs GRN)
→ Match result → Approve (auto or manual) → Post to accounting/ERP
```

**Core technical services:** OCR · RPA · XML Recognition · Email Services · Certificate Services · Webservices

**Integration:** SAP · BRAVO · Oracle ERP; CSV / XLSX / API; Email Server; GDT HĐDT system; Ordering system; Accounting software

**Deployment model:** SaaS (FPT Cloud); Web browser + Mobile; Hierarchical org support (HQ / Company-Branch / Department)

**Awards:** Sao Khue 2021

## Case studies

| Client | Context | Use case | Result |
|---|---|---|---|
| **Petrolimex** | HQ + 40+ subsidiaries + 2,600 petrol stations; 600,000 invoices/year; fully manual | Centralized AP mgmt + SAP ERP integration; full payment workflow digitization | 80% time reduction, 50% cost reduction in payment processing |
| **AEON Vietnam** | 6 hypermarkets + 30+ specialty stores; >1,000,000 invoices/year | Phase 1 (12/2020–4/2021): non-trade invoices; Phase 2 (12/2021–5/2022): trading invoices; integrated eDoc + Profit; 3-way auto matching | 80% time reduction |
| **Greenfeed** | Agriculture/Feed-Farm-Food conglomerate; complex multi-entity invoice structure | Phase 1 (11/2022–3/2023): non-trade invoices; Phase 2: trading invoices; SAP + Solomon ERP integration; Payment Request module | 80% time reduction |

## Named clients

Sun Group · AEON · Greenfeed · Petrolimex · FPT Shop · NAPAS · VietjetAir · Nhà thuốc Long Châu (FPT Retail) · Nestlé · MSB · SABECO · Phân bón Cà Mau · Kim Tin · PINACO · Ariston · Huu Tri · A&M · THtax · Prudential · FPT Retail

## Contact

- Email: DigitalAccounting@fpt.com
- Website: fda.fpt.com.vn
- Hotline: 1900 636 191 · 0914 206 850
- Head Office: 10 Pham Van Bach, Dich Vong, Cau Giay, Hanoi
- Hanoi Office: 22F Keangnam Landmark72, E6 Pham Hung, Me Tri, Nam Tu Liem
- HCM Branch: Lot B3, Sang Tao St, E-Office Zone, Tan Thuan EPZ, District 7

## Key entities

[[FPT.DigitalAccounting]], [[FPT.eInvoice]], [[FPT IS]]

## Key concepts

[[E-Invoicing (Vietnam)]], [[Intelligent Document Processing]], [[RPA and Hyperautomation]]

## Connections

- Creates full product page [[FPT.DigitalAccounting]]
- FDA is distinct from [[FPT.eInvoice]]: FDA = AP (incoming invoice processing); FPT.eInvoice = AR (invoice issuance) + TVAN
- FDA uses FPT.TVAN for invoice validity checking against GDT — shares infrastructure with [[FPT.eInvoice]]
- FDA's AP matching (3-way PO/GRN/Invoice) is functionally similar to [[UBot]] Matching module — UBot targets SMEs (standalone, no ERP), FDA targets enterprises (SAP/Oracle ERP integration, multi-subsidiary hierarchy)
- Petrolimex is a named client of both FDA (AP invoice) and FPT.eInvoice (AR side) — multi-product customer
- The FPT.eInvoice strategy doc (2025 Review) lists 70 FDA customers as a separate category within 6,683 total — confirming FDA tracked as distinct product line

## My notes
