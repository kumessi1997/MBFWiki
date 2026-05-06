---
title: FPT.ePIT
type: product
tags: [fpt-epit, pit, tax, e-certificate, tncn, tvan, gdt, fpt-is, process-transformation, hrm, saas]
created: 2026-04-18
updated: 2026-04-18
source_count: 1
po_email: CuongNH8@fpt.com
---

## Overview

**FPT.ePIT** (internally also referenced as **FPT.TNCN**) is an **electronic Personal Income Tax (PIT) Withholding Certificate management SaaS** developed and operated by **FPT IS**. It digitizes the issuance, management, and GDT reporting of PIT withholding certificates (*Chứng từ Khấu trừ Thuế Thu nhập Cá nhân điện tử*) required by Vietnamese employers under NĐ123/2020 + TT78/2021.

- Mandatory from **01/07/2022** per NĐ123/2020 Art. 59 §1
- **Sao Khue 2019** award winner
- FPT–GDT tax technology partnership since **1994** (30+ years)
- Part of the [[FPT.eInvoice]] ecosystem — uses FPT.eInvoice API/APP for certificate issuance and [[FPT.TVAN]] for GDT transmission

## Legal Context

| Regulation | Effect |
|---|---|
| Luật TNCN 2007 | Established personal income tax framework |
| TT37/2010 → sửa đổi 2012 → TT111/2013 | Successive updates to PIT rules |
| **NĐ123/2020** Art. 59 §1 | Mandates electronic PIT withholding certificates from 01/07/2022 |
| **NĐ123/2020** Art. 33 §2&3 + **TT78/2021** Art. 12 §5 | Technical standards for e-certificate format |
| **CV 2455/TCT-DNNCN** (12/07/2022) | GDT implementation guidance |

## 8 PIT Income Types

1. Salary and wages (tiền lương, tiền công)
2. Non-resident income
3. Other income
4. Royalties / franchise fees
5. Securities transfer
6. Capital contribution transfer (non-resident)
7. Lottery / prize / inheritance / gifts
8. Insurance agent / MLM commission

## Certificate Issuance Rules

| Contract Type | Certificate Issuance |
|---|---|
| No contract or < 3 months | Issued per payment event |
| ≥ 3 months | One certificate per tax period per employer |
| Employee delegates finalization | Certificate NOT issued |

**New process (from 01/07/2022):**
1. Register on GDT thuedientu portal (optional)
2. Notify GDT of intent to issue (optional)
3. Issue e-certificate + apply digital signature
4. Periodic reporting to GDT via FPT.TVAN

## System Architecture

```
iHRP / Payroll System
        ↓
FPT.TNCN System (Admin Portal)
   ├── Org Structure Mgmt
   ├── Certificate Template
   ├── Create / Adjust / Cancel Certificates
   ├── Workflow & Approval
   ├── Digital Signature
   └── Mail Server Integration
        ↓
FPT.TVAN → GDT/TCT
        ↓
Employee Portal (Web + Mobile)
   └── Lookup / Verify by Cert No. or TIN / QR Code
```

**Integration:** HTTPS API to FPT.eInvoice API/APP

## Admin Modules

- Org structure management (HQ + branches + subsidiaries)
- User creation and permission management
- Certificate template configuration
- Create / Cancel / Replace / Adjust certificates
- Workflow management
- Employee list management
- Digital signature integration
- Mail server integration (auto-send e-certificate to employees)

## API Library

Operations supported via HTTPS to FPT.eInvoice API/APP:
- Create certificate · Update · Replace · Adjust · Cancel · Lookup

## Certificate Form

**Form:** CTT56 · **Serial:** AA or AB · **Version:** 2022E · **Bilingual** (VN + EN)

Fields: income-paying organization; taxpayer (name, TIN, nationality, resident status, CMND/CCCD); PIT data (income type, period, taxable income, tax withheld amount)

## 5 Key Advantages

1. **Time saving** — auto-issuance replaces manual paper printing/signing/mailing
2. **Flexible processing** — create, cancel, replace, or adjust certificates at any time
3. **Legal compliance** — fully compliant with NĐ123/2020 + TT78/2021
4. **Convenient management** — web + mobile access; searchable by cert no. or TIN; QR code verification
5. **Diverse integration** — REST API + iHRP + FPT.eInvoice ecosystem

## Security & Infrastructure

- **ISO 27001:2013** (Information Security) + **ISO 22301:2012** (Business Continuity)
- Data stored in Vietnam's only dual-certified (both standards) data center

## Named Clients

Samsung SDS · Vinacomin · Mitsubishi Heavy Industries · Song Da 505 · Boston Pharma · Sài Gòn Ford · CSVC · Sinco Mechanical · Technip · EY · DKSH · Traphaco

## Connections

- [[FPT IS]] — product owner and operator
- [[FPT.eInvoice]] — parent ecosystem; ePIT uses FPT.eInvoice API/APP for certificate issuance; same TVAN infrastructure; not a fully standalone platform
- [[FPT.TVAN]] — transmits e-PIT certificate data to GDT, same channel as for e-invoices
- [[FPT-CA]] / [[FPT.eSign]] — digital certificate infrastructure used for signing e-PIT certificates
