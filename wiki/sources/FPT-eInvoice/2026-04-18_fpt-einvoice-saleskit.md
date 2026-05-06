---
title: FPT.eInvoice Saleskit, VI Proposal & 2025 Review / 2026 Strategy
type: source
tags: [fpt-einvoice, einvoice, tvan, gdt, rpa, ocr, ap, ar, saas, fpt-is, process-transformation, vietnam, malaysia]
created: 2026-04-18
updated: 2026-04-18
source_file: raw/1. PMO MKT Documents/1. MBF_Product Kit Collection/FPT.eInvoice/3. Saleskit/CuongNH8_brief_FPT.eInvoice.Introduction.EN.June2025.pdf + FPT eInvoice/3. Saleskit/Present_FPT.eInvoice_VN.pdf + FPT eInvoice/3. Saleskit/VN-FPTeInvoice_2025Report_2026Strategy_VN_2.2.pdf
---

## Summary

Three FPT.eInvoice documents: an EN product introduction (48 pages, June 2025), a VI sales proposal deck (31 pages, 2024), and an internal 2025 Review & 2026 Strategy document (Vietnamese, ~21 pages). Together they constitute a complete commercial, technical, and strategic picture of FPT.eInvoice — from product positioning and architecture through pricing, client roster, competitive context, and 2026 growth plans.

FPT.eInvoice is Vietnam's leading e-invoicing SaaS platform, developed and operated by FPT IS. It serves as both an AR (invoice issuance) and AP (incoming invoice processing) solution, operating within Vietnam's mandatory TVAN network infrastructure since the TT78/2021/TT-BTC law made e-invoicing compulsory from 01/07/2022. FPT IS has a 25-year partnership with Vietnam's General Department of Taxation (GDT/TCT), including operating the centralized e-invoice verification system since 2015 and the national centralized e-invoice system since 2021 (via Teca-FIS joint venture).

The 2025 strategy document reveals a high-growth trajectory: revenue surged +74.2% YoY to 84.5B VND in 2025, with a 2026 target of 95B VND recognized / 115B VND signed. Product strategy is consolidating to a single "FPT.eInvoice" brand with 6 product lines and introducing new tiers (SaaS Eco at 1M VND, SaaS Dedicate at 10M VND, SaaS Secure at 50M VND, OnPrem at 500M VND/year).

Globally, FPT.eInvoice is certified in Vietnam and Malaysia, with partner-enabled presence in Indonesia, Taiwan, and Thailand, and PEPPOL 3.0 capability for Singapore and Australia.

## Key facts

**Scale & market:**
- **70,000+ customers** (FPT Cloud), 100M+ invoices/year, 1B+ total invoices issued to date
- **6,683 active customers** as of Oct 2025: 6,503 Cloud 1 + 2 Cloud 2 + 12 Cloud 3 + 31 OnPrem + 70 FDA + 65 TVAN
- New customers 2025: 1,056; Churned: 1,135 (467 ceased operations + 666 switched competitors)
- 24/7/365 operation; 40+ Vietnamese M&L enterprise clients; 40+ FDI clients

**Revenue:**
- 2024: 48.5B VND (−12% YoY)
- 2025: 84.5B VND (+74.2% YoY); signed contracts 90+B VND
- 2026 target: 115B VND signed / 95B VND recognized (+26.7% YoY)
- 52 staff; revenue target ~2B VND/person/year; offices: Hanoi + HCM

**7 Solution components:**
1. FPT.eInvoice — core e-invoice issuance (AR) + incoming processing (AP)
2. FPT Digital Accounting — accounting automation layer
3. FPT.TVAN — trusted value-added network intermediary to GDT
4. FPT.ePIT — personal income tax declaration
5. FPT.PetroInvoice — petroleum/fuel sector specialized invoicing
6. FPT-CA — digital certificate authority
7. FPT.eTax — tax declaration automation

**2026 product lines (6):** AR Invoice · AP Invoice · TVAN · eServices · eHUB (invoice aggregation + supply chain finance) · eDOC (document storage)

**Deployment models:**
- **SaaS Cloud (shared):** for SMEs; no IT investment; 2–5 days deploy
- **SaaS Dedicated Cloud (private):** high volume enterprises; private K8S cluster
- **OnPrem / Customer Infrastructure:** for highest security requirements; 2–3 months deploy
- All models: 10-year invoice lookup retention; 2-year processing storage (Eco: 1 year)

**2026 Pricing:**
| Tier | Annual License | Notes |
|---|---|---|
| SaaS Eco | 1,000,000 VND (incl. 5,000 invoices) | Economy; 1yr processing; 10yr lookup |
| SaaS Dedicate | 10,000,000 VND | >1M invoices; 2yr processing; 10yr lookup |
| SaaS Secure | 50,000,000 VND | Encryption & security focus; 2yr processing; 10yr lookup |
| OnPrem | 500,000,000 VND | Custom; on-premise |
- All tiers support up to 300M invoices capacity

**Integration channels (5):** PEPPOL · Standard APIs · Custom APIs · sFTP · In-the-middle Database
- Input formats supported: JSON · CSV · XML · IDOC
- Pipeline: Transform → Cleansing → Enrich → GDT validation → response
- ERP integration (SAP, Oracle) — standard field mapping documented

**AP processing benefits:**
- 30-second auto-validation; 80% processing time decrease; 70% cost savings
- AP architecture: Data Collection → Invoice Validation/Risk Detection → Invoice Matching → Routing & Approval → Post-Validation
- Core AP engines: OCR, RPA, XML, Email, Reporting, ML & AI

**AR architecture core services:** Supplier/Customer/Workflow/Org/Reporting/Indexing/Invoice Generation

**5 special features (VI source):**
1. Incoming invoice management (XML)
2. Digital signature verification (multi-CA)
3. E-document signing (PDF/XML)
4. Multi-system integration (SAP/ERP)
5. Hierarchical org management (HQ + branches)

**Legal & compliance:**
- Mandatory since 01/07/2022 per TT78/2021/TT-BTC (Thông tư 78/2021)
- Legal timeline: NĐ51/2010 → TT32/2011 → NĐ119/2018 → TT68/2019 → NĐ123/2020 → TT78/2021
- 3 invoice types: Có mã (with GDT code) / Không có mã (without code) / POS
- 15 eligible industries for "không có mã": electricity, fuel, postal, water, finance-credit, insurance, healthcare, e-commerce, supermarket, trade, transport, aviation, road/rail/maritime/waterway
- TVAN network model: TCT central system ↔ TVAN-X/Y ↔ enterprise
- FPT TVAN partner since 2011; 70,000 businesses using FPT tax/customs digital services
- Annual AGM filing + mandatory e-invoice for all Vietnamese enterprises since 2022

**Security:**
- ISO 9001:2008 + ISO/IEC 27001:2018 certified (only VN data center with both, per VI source)
- AES-256 encryption (storage + transmission); SHA-256 hashing for sensitive fields
- Annual vulnerability assessments + penetration tests; internal pentest per product update
- Daily backup: primary DC + DRC disaster recovery center
- GDPR compliant + Vietnam Decree 13/2023/ND-CP on Personal Data Protection

**Global footprint:**
- Vietnam ★ (certified) · Malaysia ★ (certified, LGEML Finance, MYR, IRBM/MyKad/SST)
- Indonesia ★ · Taiwan ★ · Thailand ★ (partner-enabled)
- Singapore ★★ · Australia ★★ (PEPPOL 3.0 standard)

**FPT.eInvoice history with GDT:**
- 1995: tax code system; 2001: VAT management; 2005: printing; 2007: tax debt; 2010: risk analysis
- 2015: Invoice Verification system → centralized e-invoice (2021, Teca-FIS JV)
- Official TVAN partner since 2011

**SLA (Vietnam):**
- High (★): 2h response, 2–4h resolution
- Medium (★★): 2h response, 5h–1 day resolution
- Low (★★★): 2h response, 2-day resolution

**2026 team structure:** PO → Lead Triển khai / Lead Dự án / Lead Sản phẩm → Squad Nhân sự; 52 staff; HN + HCM offices; 1 Lead max 30 people; PO-Lead-Squad accountability model

**2025 achieved:** Dedicated Cloud launched, K8S migration, S3/OpenSearch, standardized SLAs, 80B+ revenue, conversion to VN M&L large + FDI segments
**2025 not achieved:** Global market missed, only 5 new partners, no High-End bundle, 16/80 FDA new customers, Digital Onboarding incomplete, OneInvoice not completed

**Contact:** 1900 636 191 · contact@fis.com.vn · www.fpt-is.com
Hanoi: Tầng 22 Keangnam Landmark 72, E6 Phạm Hùng, Mễ Trì, Nam Từ Liêm
HCM: Tầng M FPT Tân Thuận 3, Lô B3 Sáng Tạo, KCX Tân Thuận

## Named clients (sample)

**Vietnam — Banking/Finance:** VietinBank, Vietcombank, Sacombank, MB Bank, VPBank, Techcombank, Agribank, HDBank, VIB, Mizuho, Toshiba, SMBC, CB Bank, Viet Capital Bank, SCB

**Vietnam — Enterprise:** VinCommerce, HABECO, Petrolimex, VietjetAir, FAHASA, Sun Group, One Mount, Rang Dong, SAVICO, Ton Dong A, CEN Group, VETC, EY, Deloitte, Ford, Cisco, Boeing

**Vietnam — Consumer/Retail:** 7-Eleven, HC Home Center, KimBoi, Nippon Paint, Tupperware, Everpia JSC, Upjohn

**FDI / Foreign:** Ericsson, J&J, Intel, GE, JPMorgan, Toyota, Samsung SDS, AEON, B.Braun, Maersk, DENSO, Nippon Steel, Home Credit, Red Bull, Tetra Pak, Google, Apple, IBM, Microsoft, Philips, Pfizer, GSK, AstraZeneca, Novartis, Sony, HSBC, Panasonic, Sanofi, LG CNS, Jotun, Nidec, Yusen Logistics

**Malaysia:** LGEML Finance (Novo Nordisk sample invoice shown); Yick Ming Watch Radio Dealers

## Key entities

[[FPT.eInvoice]], [[FPT IS]], [[akaBot]], [[UBot]], [[Kyta Platform]]

## Key concepts

[[E-Invoicing (Vietnam)]], [[RPA and Hyperautomation]], [[Intelligent Document Processing]]

## Connections

- Creates full product page [[FPT.eInvoice]]
- Confirms FPT.Digital Accounting, FPT.TVAN, FPT.ePIT, FPT.PetroInvoice, FPT-CA, FPT.eTax as companion products in the ecosystem
- AP processing integrates with [[UBot]] (invoice automation) and [[Kyta Platform]] (supply chain finance via eHUB)
- FPT-CA is the same digital certificate authority referenced in [[FPT.eSign]] — shared infrastructure
- [[FPT eID]] eKYC used in onboarding flows (Digital Onboarding roadmap item)
- Strategy document is internal — contains revenue figures, churn data, and 2026 roadmap not available in public saleskit

## My notes
