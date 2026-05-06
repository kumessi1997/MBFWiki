---
title: Personal Income Tax (Vietnam)
type: concept
tags: [pit, tncn, tax, e-certificate, gdt, vietnam, compliance]
created: 2026-04-18
updated: 2026-04-18
source_count: 1
---

## Overview

**Personal Income Tax (PIT)** — *Thuế Thu nhập Cá nhân (TNCN)* — is Vietnam's individual income tax framework. Employers who withhold PIT must issue a **PIT Withholding Certificate** (*Chứng từ Khấu trừ Thuế TNCN*) to employees/payees. From **01/07/2022**, this certificate must be issued electronically under NĐ123/2020 + TT78/2021.

**FPT IS** provides [[FPT.ePIT]] as the platform for e-certificate issuance, integrated into the [[FPT.eInvoice]] ecosystem via [[FPT.TVAN]] for GDT reporting.

## Legal Timeline

| Regulation | Effect |
|---|---|
| Luật TNCN 2007 | Established Vietnam PIT framework |
| TT37/2010 → sửa đổi 2012 → TT111/2013 | Successive implementation updates |
| **NĐ123/2020** Art. 59 §1 | Mandates electronic PIT withholding certificates from 01/07/2022 |
| **NĐ123/2020** Art. 33 §2&3 + **TT78/2021** Art. 12 §5 | Technical format standards for e-certificates |
| **CV 2455/TCT-DNNCN** (12/07/2022) | GDT guidance on implementation |

## 8 PIT Income Types

1. Salary and wages (tiền lương, tiền công)
2. Non-resident income
3. Other income
4. Royalties / franchise fees
5. Securities transfer
6. Capital contribution transfer (non-resident)
7. Lottery / prize / inheritance / gifts
8. Insurance agent / MLM commission

## Certificate Rules

| Scenario | Certificate Requirement |
|---|---|
| No contract or < 3 months | Issued per payment event |
| Contract ≥ 3 months | One per tax period per employer |
| Employee delegates finalization | NOT issued |

## Certificate Form

**CTT56** · Serial AA or AB · Version 2022E · Bilingual (VN + EN)

Fields: income-paying organization; taxpayer (name, TIN, nationality, resident status, CMND/CCCD); PIT data (income type, period, taxable income, tax withheld amount)

## Process Flow (from 01/07/2022)

```
Payroll System (iHRP)
        ↓
FPT.ePIT System → Digital Signature → Email to Employee
        ↓
FPT.TVAN → GDT periodic reporting
```

## Connections

- [[FPT.ePIT]] — FPT IS's e-certificate SaaS platform
- [[FPT.eInvoice]] — parent ecosystem; ePIT uses same API infrastructure
- [[FPT.TVAN]] — transmits e-certificate data to GDT, same channel as e-invoices
- [[E-Invoicing (Vietnam)]] — parallel mandatory digitization under NĐ123/2020; same legal instrument governs both e-invoices and e-PIT certificates
