---
title: FPT.ePIT Saleskit — Chứng từ Thuế TNCN Điện tử (VI)
type: source
tags: [fpt-epit, pit, tax, e-certificate, tncn, tvan, gdt, fpt-is, process-transformation, hrm]
created: 2026-04-18
updated: 2026-04-18
source_file: raw/raw/FPT ePIT/3. Saleskit/Present-FPT.ePIT-CT-Thue-TNCN_v1.2.pdf
---

## Summary

A 17-slide VI saleskit for **FPT.ePIT** (also referred to as FPT.TNCN in system references), FPT IS's solution for electronic Personal Income Tax (PIT) Withholding Certificate management. The product addresses the mandatory shift from paper to electronic PIT withholding certificates under NĐ123/2020 + TT78/2021, effective from 01/07/2022.

The saleskit covers the legal mandate and certificate types, a before/after comparison of the issuance process, the full system architecture (iHRP → FPT.TNCN → FPT.TVAN → GDT), admin and employee-facing feature modules, API library, 5 key advantages, a sample certificate form (CTT56), named reference clients, and technical infrastructure certifications.

FPT.ePIT is positioned as part of the [[FPT.eInvoice]] ecosystem — it uses the FPT.eInvoice API/APP for certificate issuance and shares the TVAN infrastructure. FPT has been a GDT tax technology partner since 1994 (30+ years). The product won the **Sao Khue 2019** award.

## Key facts

**Legal driver:**
- NĐ123/2020 Art. 59 §1: enterprises must issue electronic PIT withholding certificates from 01/07/2022
- NĐ123/2020 Art. 33 §2&3 + TT78/2021 Art. 12 §5: technical standards for e-certificates
- CV 2455/TCT-DNNCN (12/07/2022): GDT guidance on implementation
- Prior paper process: issuer prints/signs/stamps, mails to employee → slow, costly, error-prone

**8 PIT income types covered:**
1. Salary and wages (tiền lương, tiền công)
2. Non-resident income
3. Other income
4. Royalties / franchise fees
5. Securities transfer
6. Capital contribution transfer (non-resident)
7. Lottery winnings / prize promotions / inheritance / gifts
8. Insurance agent / MLM commission

**Certificate issuance rules:**
- No contract or contract < 3 months: issued per payment
- Contract ≥ 3 months: one certificate per tax period per employer
- NOT issued if employee has delegated tax finalization to employer

**New e-certificate process (from 01/07/2022):**
1. Register on GDT thuedientu portal (optional)
2. Notify GDT of intent to issue (optional)
3. Issue e-certificate + apply digital signature
4. Periodic tax reporting to GDT via FPT.TVAN

**System architecture:**
- iHRP (HR/Payroll) → FPT.TNCN system → FPT.TVAN → GDT
- Admin portal: org structure, user management, certificate template, workflow, digital signature, mail server integration
- Employee portal: web + mobile lookup; search by certificate number or TIN; QR code verification

**Admin modules:**
- Org structure management (HQ + branches + subsidiaries)
- User creation and permission management
- Certificate template configuration
- Create / Cancel / Replace / Adjust certificates
- Workflow management
- Employee list management
- Digital signature integration
- Mail server integration (auto-send to employees)

**API library (HTTPS to FPT.eInvoice API/APP):**
- Create certificate · Update · Replace · Adjust · Cancel · Lookup

**Certificate form:** CTT56 / Serial AA or AB / 2022E; bilingual VN+EN
- Fields: income-paying organization details; taxpayer (name, TIN, nationality, resident status, CMND/CCCD); PIT data (income type, period, taxable income, tax withheld amount)

**5 key advantages:**
1. Time saving — auto-issuance replaces manual paper process
2. Flexible processing — create/cancel/replace/adjust any time
3. Legal compliance — fully compliant with NĐ123/2020 + TT78/2021
4. Convenient management — web + mobile; searchable; QR verification
5. Diverse integration — API + iHRP + FPT.eInvoice ecosystem

**Named reference clients:** Samsung SDS · Vinacomin · Mitsubishi Heavy Industries · Song Da 505 · Boston Pharma · Sài Gòn Ford · CSVC · Sinco Mechanical · Technip · EY · DKSH · Traphaco

**Awards / partnerships:**
- Sao Khue 2019
- FPT–GDT tax technology partner since 1994 (30+ years)

**Infrastructure:**
- ISO 27001:2013 (Information Security) + ISO 22301:2012 (Business Continuity)
- Data stored in Vietnam's only dual-certified data center (both standards)

## Key entities

[[FPT.ePIT]], [[FPT.eInvoice]], [[FPT IS]], [[FPT.TVAN]]

## Key concepts

[[Personal Income Tax (Vietnam)]], [[E-Invoicing (Vietnam)]]

## Connections

- Creates product page [[FPT.ePIT]]
- Confirms [[FPT.eInvoice]] ecosystem: ePIT uses FPT.eInvoice API/APP and TVAN infrastructure — it is a tax-certificate specialization, not a standalone platform
- [[FPT.TVAN]] — same TVAN channel used for e-invoice submission also handles e-PIT certificate reporting to GDT
- Samsung SDS is a named client here AND in [[FPT.eInvoice]] as an FDI client — cross-sector relationship

## My notes
