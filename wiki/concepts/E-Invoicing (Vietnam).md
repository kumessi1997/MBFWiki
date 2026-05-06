---
title: E-Invoicing (Vietnam)
type: concept
tags: [einvoice, tvan, gdt, tct, tt78, mandatory, vietnam, tax, compliance]
created: 2026-04-18
updated: 2026-04-18
source_count: 1
---

## Overview

**Electronic invoicing (hóa đơn điện tử / HĐDT)** became mandatory for all Vietnamese enterprises from **01/07/2022** under Circular TT78/2021/TT-BTC. Before this, e-invoicing was optional under various pilot regulations dating back to 2010. The mandate eliminated paper invoices for virtually all business transactions and created a regulated intermediary infrastructure (TVAN) between enterprise systems and the General Department of Taxation.

## Legal Timeline

| Regulation | Year | Effect |
|---|---|---|
| Nghị định 51/2010/NĐ-CP | 2010 | First e-invoice framework |
| Thông tư 32/2011/TT-BTC | 2011 | Implementation guidance |
| Nghị định 119/2018/NĐ-CP | 2018 | Phased mandatory rollout |
| Thông tư 68/2019/TT-BTC | 2019 | Large enterprise rollout |
| Nghị định 123/2020/NĐ-CP | 2020 | Consolidation |
| **Thông tư 78/2021/TT-BTC** | **2021** | **Mandatory for all from 01/07/2022** |

## Invoice Types

| Type | Vietnamese | Description |
|---|---|---|
| **Có mã** | Hóa đơn điện tử có mã của CQT | GDT approves and assigns a code before buyer receives; required for most businesses |
| **Không có mã** | Hóa đơn điện tử không có mã | Issued directly without GDT pre-approval code; for 15 eligible large-volume industries |
| **POS** | Hóa đơn bán hàng qua máy tính tiền | Point-of-sale invoice from cash registers |

**15 industries eligible for không có mã:** electricity, petroleum/fuel, postal, water, finance/credit, insurance, healthcare, e-commerce, supermarkets, trade, transport, aviation, road transport, rail, maritime/waterway transport

## TVAN Network Architecture

```
Enterprise ERP ↔ TVAN Provider (e.g., FPT.TVAN) ↔ GDT/TCT Central System
                  (Transform / Validate / Route)
```

**TVAN (Trusted Value Added Network):** licensed intermediary providers that relay, validate, and archive e-invoice data between enterprises and the GDT. Multiple licensed TVAN providers compete in the market (FPT.TVAN, VNPT, MISA, etc.). Enterprises must connect via a licensed TVAN.

## Key Players

- **GDT/TCT** (Tổng cục Thuế / General Department of Taxation) — regulatory authority; operates the central e-invoice registry
- **FPT IS** — TVAN licensee since 2011; operated GDT's centralized invoice verification system since 2015; operates national centralized e-invoice system since 2021 (Teca-FIS JV)
- **[[FPT.eInvoice]]** — FPT IS's enterprise e-invoice SaaS platform (70,000+ customers, Vietnam + Malaysia)

## Market Context

- All ~900,000+ Vietnamese enterprises must issue e-invoices
- 2,114+ listed companies (HOSE 417 + HNX 342 + Upcom 855 + OTC ~500) plus millions of smaller businesses
- Invoice volumes: FPT alone processes 100M+ invoices/year; total Vietnamese market is in the billions
- AP automation opportunity: most enterprises still manually process incoming invoices; FPT.eInvoice AP module targets 80% time reduction and 70% cost savings

## AR vs. AP

| Dimension | AR (Accounts Receivable) | AP (Accounts Payable) |
|---|---|---|
| Direction | Issuing invoices to buyers | Receiving invoices from suppliers |
| GDT flow | Enterprise → TVAN → GDT | Validate supplier invoice against GDT |
| Key challenge | ERP integration, volume, compliance | Validation, matching (PO/GRN), approval workflow |
| FPT solutions | FPT.eInvoice AR / FPT.TVAN | FPT.eInvoice AP / [[UBot]] Invoice + Matching |

## Connections

- [[FPT.eInvoice]] — FPT IS's implementation; Vietnam's leading e-invoice SaaS
- [[UBot]] — UBot Invoice + UBot Matching handle AP automation on top of e-invoice feeds
- [[FPT.eSign]] / [[FPT-CA]] — digital certificates required for e-invoice signing
- [[Kyta Platform]] — agreement lifecycle management; upstream of invoice workflows
