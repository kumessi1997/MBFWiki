---
title: FPT.eInvoice
type: product
tags: [fpt-einvoice, einvoice, tvan, gdt, e-invoicing, saas, rpa, ocr, ap, ar, fpt-is, process-transformation, vietnam, malaysia]
created: 2026-04-18
updated: 2026-04-18
source_count: 3
po_email: CuongNH8@fpt.com
---

## Overview

**FPT.eInvoice** (formerly marketed as FPT eInvoice) is a comprehensive **e-invoicing SaaS platform** developed and operated by **FPT IS**. It covers both the **AR side** (invoice issuance to buyers + GDT submission) and the **AP side** (incoming invoice validation and processing), serving as a full-lifecycle electronic invoice management system.

Vietnam made e-invoicing **mandatory from 01/07/2022** per Circular TT78/2021/TT-BTC. FPT IS is one of Vietnam's licensed **TVAN (Trusted Value Added Network)** providers — the regulated intermediary channel between enterprises and the General Department of Taxation (GDT/TCT). FPT has been a TVAN partner since 2011 and has operated the centralized e-invoice verification infrastructure since 2015.

- **70,000+ customers** · **100M+ invoices/year** · **1B+ total invoices issued**
- **6,683 active customers** (Oct 2025): enterprise + SME + FDI
- 24/7/365 operation · **25-year FPT–GDT partnership**
- Global: Vietnam ★ + Malaysia ★ certified; Indonesia/Taiwan/Thailand via partners; Singapore/Australia via PEPPOL 3.0

## Ecosystem (7 Solution Components)

| Product | Function |
|---|---|
| **FPT.eInvoice** | Core AR e-invoice issuance + AP incoming processing |
| **[[FPT.DigitalAccounting]]** | AP invoice automation SaaS (separate product; 450+ enterprise clients; Sao Khue 2021) |
| **FPT.TVAN** | Trusted Value-Added Network intermediary to GDT |
| **[[FPT.ePIT]]** | Electronic PIT withholding certificate (Sao Khue 2019; mandatory from 01/07/2022; iHRP integration) |
| **[[FPT.PetroInvoice]]** | Petroleum/fuel sector e-invoice (AI camera or display replacement; from 2M VND/station + 50đ/invoice; Saigon Petro client since 2022) |
| **FPT-CA** | Digital certificate authority (shared with [[FPT.eSign]]) |
| **FPT.eTax** | Tax declaration automation |

**2026 product lines (6):** AR Invoice · AP Invoice · TVAN · eServices · eHUB · eDOC

- **eHUB** — invoice aggregation + supply chain finance (integrates with [[Kyta Platform]] + zéro)
- **eDOC** — long-term document storage package

## AR Architecture (Invoice Issuance)

```
Invoice data → Draft Invoice → Phát hành hóa đơn → FPT.TVAN → GDT/TCT
                                                              ↓
                                               Response → Email notification
```

Core AR services: Supplier Management · Customer Management · Workflow · Org Management · Reporting · Indexing · Invoice Generation

## AP Architecture (Incoming Invoice Processing)

```
Supplier Invoice → Data Collection → Invoice Validation / Risk Detection
                                              ↓
                                     Invoice Matching → Routing & Approval
                                                                ↓
                                                        Post-Validation
```

AP core engines: OCR · RPA · XML · Email · Reporting · ML & AI

**AP benefits:** 30-second auto-validation · 80% processing time decrease · 70% cost savings

## Deployment Models

| Model | Best for | Deploy time | Storage |
|---|---|---|---|
| **SaaS Cloud** (shared) | SMEs; no IT investment | 2–5 days | FPT Cloud; 10yr lookup |
| **SaaS Dedicated Cloud** | High-volume enterprises; private K8S | Days–weeks | FPT private cluster; 10yr lookup |
| **OnPrem / Customer Infrastructure** | Highest security requirements | 2–3 months | On-premise; 10yr lookup |

All models: up to 300M invoice capacity.

## Pricing (2026)

| Tier | Annual License | Notes |
|---|---|---|
| **SaaS Eco** | 1,000,000 VND (incl. 5,000 invoices) | Economy; 1yr processing storage; 10yr lookup |
| **SaaS Dedicate** | 10,000,000 VND | >1M invoices/year; 2yr processing; 10yr lookup |
| **SaaS Secure** | 50,000,000 VND | Encryption & security focus; 2yr processing; 10yr lookup |
| **OnPrem** | 500,000,000 VND | Full custom deployment |

> [!NOTE]
> Pricing above is 2026 planning-stage tiers from the internal strategy document. Prior models (OnCloud subscription by invoice volume) are replaced by this simplified 4-tier structure under the brand unification plan.

## Integration

**5 integration channels:**
1. PEPPOL (international standard)
2. Standard APIs (REST)
3. Custom APIs
4. sFTP (XML/CSV)
5. In-the-middle Database (CSDL)

**Input formats:** JSON · CSV · XML · IDOC

**Pipeline:** Source System → Integration Channel → Transform/Cleanse/Enrich → FPT.eInvoice → GDT → Response back to source

**ERP integration (SAP standard):** Supplier, Buyer, eInvoice version/type/number/date, currency, amounts (excl. tax, incl. tax, tax amount), line items (classification, description, unit price, quantity, UOM, discount, tax rate)

## E-Invoice Types in Vietnam

| Type | Vietnamese | Who uses it |
|---|---|---|
| **Có mã** | Hóa đơn điện tử có mã của CQT | All SMEs; required for most sectors |
| **Không có mã** | Hóa đơn điện tử không có mã | 15 eligible large-volume industries (electricity, fuel, banking, insurance, healthcare, aviation, e-commerce, supermarkets, etc.) |
| **POS** | Hóa đơn bán hàng qua máy tính tiền | Retail/F&B point of sale |

## 5 Special Features

1. Incoming invoice management (XML format)
2. Digital signature verification (multi-CA support)
3. E-document signing (PDF and XML)
4. Multi-system integration (SAP, ERP)
5. Hierarchical organization management (HQ + branches + subsidiaries)

## Security & Compliance

- **ISO 9001:2008** (Quality Management) + **ISO/IEC 27001:2018** (Information Security)
- **AES-256** encryption for storage and transmission
- **SHA-256** hashing for sensitive database fields
- Annual third-party vulnerability assessments + penetration tests; internal pentest per release
- Daily backup: primary DC + DRC disaster recovery
- **GDPR** compliant + **Vietnam Decree 13/2023/ND-CP** (Personal Data Protection)

## Legal Context

| Regulation | Effect |
|---|---|
| NĐ51/2010 · TT32/2011 | First e-invoice pilots |
| NĐ119/2018 · TT68/2019 | Phased rollout to large enterprises |
| NĐ123/2020 · TT78/2021 | Mandatory for all businesses from 01/07/2022 |

**TVAN model:** GDT central system ↔ TVAN providers (FPT.TVAN, others) ↔ Enterprise ERP systems

## SLA

| Priority | Response | Resolution |
|---|---|---|
| High (★) | 2 hours | 2–4 hours |
| Medium (★★) | 2 hours | 5 hours – 1 day |
| Low (★★★) | 2 hours | 2 days |

## Global Footprint

| Country | Status |
|---|---|
| Vietnam | ★ Certified (GDT-connected TVAN, 70,000+ customers) |
| Malaysia | ★ Certified (IRBM-connected; LGEML Finance flagship; MYR/MYKad/SST) |
| Indonesia / Taiwan / Thailand | ★ Partner-enabled |
| Singapore / Australia | ★★ PEPPOL 3.0 standard |

## Revenue & Scale

| Year | Revenue (VND) | Change |
|---|---|---|
| 2024 | 48.5B | −12% YoY |
| 2025 | 84.5B | +74.2% YoY |
| 2026 target | 95B recognized / 115B signed | +26.7% YoY |

- Oct 2025: 6,683 active customers (Cloud + OnPrem + FDA + TVAN)
- New 2025: 1,056 | Churn 2025: 1,135 (467 ceased + 666 switched to competitors)
- 52 staff; 2B VND revenue target per person per year
- 2026 team structure: PO → Lead Triển khai / Lead Dự án / Lead Sản phẩm → Squad

## Named Clients

**Vietnam — Banking/Finance:** VietinBank · Vietcombank · Sacombank · MB Bank · VPBank · Techcombank · Agribank · HDBank · VIB · Mizuho · SMBC · CB Bank · Viet Capital Bank · SCB

**Vietnam — Enterprise:** VinCommerce · HABECO · Petrolimex · VietjetAir · FAHASA · Sun Group · One Mount · Rang Dong · SAVICO · Ton Dong A · CEN Group · VETC · EY · Deloitte · Ford · Cisco · Boeing

**Vietnam — Consumer/Retail:** 7-Eleven · HC Home Center · KimBoi · Nippon Paint · Tupperware · Everpia JSC · Upjohn

**FDI / Foreign (Vietnam operations):** Ericsson · J&J · Intel · GE · JPMorgan · Toyota · Samsung SDS · AEON · B.Braun · Maersk · DENSO · Nippon Steel · Home Credit · Red Bull · Tetra Pak · Google · Apple · IBM · Microsoft · Philips · Pfizer · GSK · AstraZeneca · Novartis · Sony · HSBC · Panasonic · Sanofi · LG CNS · Jotun · Nidec · Yusen Logistics

**Malaysia:** LGEML Finance (Novo Nordisk supply chain)

## Contact

- Hotline 24/7: **1900 636 191**
- Email: contact@fis.com.vn · Website: www.fpt-is.com
- Hanoi: Tầng 22 Keangnam Landmark 72, E6 Phạm Hùng, Mễ Trì, Nam Từ Liêm, HN
- HCM: Tầng M FPT Tân Thuận 3, Lô B3 Sáng Tạo, KCX Tân Thuận

## Connections

- [[FPT IS]] — product owner and operator
- [[FPT.TVAN]] — FPT IS's own TVAN node; licensed by GDT; core infrastructure
- [[FPT-CA]] / [[FPT.eSign]] — digital certificates used for e-invoice signing; shared CA infrastructure
- [[UBot]] — UBot Invoice + UBot Matching complement FPT.eInvoice for SMEs: UBot handles the AP workflow (collect → validate → match → pay); FPT.eInvoice handles AR issuance and TVAN connectivity
- [[Kyta Platform]] — eHUB (2026 roadmap) integrates with Kyta for supply chain finance and agreement workflows
- [[FPT eID]] — Digital Onboarding roadmap (2026) will use FPT.AI eKYC for customer onboarding
- [[akaBot]] — RPA automation layer powering FPT.eInvoice AP processing engines
- [[FPT.DigitalAccounting]] — dedicated AP automation product (standalone brand, own website fda.fpt.com.vn); FDA handles enterprise AP (SAP/Oracle ERP integrated); FPT.eInvoice handles AR issuance + TVAN
