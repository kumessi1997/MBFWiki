---
title: UBot
type: product
tags: [ubot, rpa, rpaas, automation, sme, finance-accounting, akabot, fpt, process-transformation]
created: 2026-04-17
updated: 2026-04-17
source_count: 3
po_email: GiapBD@fpt.com
---

## Overview

**UBot** (Hệ Sinh Thái Tự Động Hóa Nghiệp Vụ Toàn Diện Cho Doanh Nghiệp) is a comprehensive **RPAaaS (RPA as a Service)** ecosystem developed by **akaBot – FPT**. It is positioned as Vietnam's first all-in-one business process automation ecosystem, targeting SMEs and mid-market enterprises, delivered as a packaged cloud service requiring no IT infrastructure investment and taking only **15 minutes to set up**.

Primary focus: full automation of the **Finance & Accounting department** — covering the full purchase cycle (invoice intake → 3-way matching → payment → bank reconciliation) and the full sales cycle. UBot also covers Front-office, Operations, and Management automation via its broader ecosystem.

- **3,000+ customers** · **20+ countries** · **14 industries** · **3.5 million invoices processed**
- Operates 24/7/365 with dedicated customer support

## Core Products

### Purchase Process Automation (4 bots)

**UBot Invoice** — Tự Động Hoá 90% Quy Trình Xử Lý Hoá Đơn
- Auto-collects invoices from: Email (auto-forward), Vietnam GDT website (Tổng cục thuế / TCT), API upload
- Auto-validates invoice legitimacy against **7 criteria**: seller active status, seller's tax code valid, invoice not duplicate, buyer company name match, buyer tax code valid, buyer address valid, digital signature serial number valid
- Auto-extracts invoice data to Excel template (PMKT format) for import into accounting software
- Cloud storage of invoices + supporting documents for entire subscription period
- Handles paper invoices via **OCR** scanning
- Result: **80% time reduction** (3 min/invoice → 30 seconds), **90% staff efficiency gain**, **100% accuracy**

**UBot Matching** — Tự Động Đối Chiếu Chứng Từ Mua Hàng
- Automated 3-way matching: Purchase Order (PO) + Goods Receipt Note (GRN/phiếu nhập kho) + Invoice
- Auto-collects PO and GRN via website, email, OCR/AI from paper docs
- Matching result delivered in **2 seconds**
- 100% accuracy; 2-click operation; centralized online document storage

**UBot ePayment** — Quản Lý Quy Trình Thanh Toán
- Auto-generates payment requests (đề nghị thanh toán) in 2 seconds with 100% accuracy
- Multi-level online approval workflow (replaces paper-based multi-approver chain)
- Document management: fast search, reconciliation, fraud/error prevention
- Real-time cost tracking by department and branch

**UBot Statement Checking** — Quản Lý Thanh Toán Công Nợ Tối Ưu
- Auto-downloads bank statements (TPBank, Vietcombank, VietinBank…)
- Auto-matches bank transactions against AP/AR documents
- Auto-generates cash flow reports (in/out) in real time
- Exports PMKT-format Excel for batch debt reconciliation in accounting software
- **80% time savings** on bank statement checking

### Sales Process Automation (5 bots)
- **UBot Matching** (AR side)
- **UBot Sales Order**
- **UBot Sales Invoice**
- **UBot Collection**
- **UBot Payment Reminder**

### Other Solutions
**UBot Meeting** — Giải Pháp Họp Đại Hội Cổ Đông Trực Tuyến (Online Shareholder Meeting)
- Automates 90% of AGM process
- Auto-sends invitations & reminders (minimum 15 days in advance)
- Shareholder identity verification via **FPT.AI eKYC** (facial recognition + CCCD, result in 2s)
- 100% online voting; automated vote counting & real-time update
- Saves **70% of AGM organization costs**

> [!NOTE]
> UBot Meeting = [[UVote]]. Same product, same akaBot+FPT branding, same mascot, same contact (+84 948 34 3456), same address. UVote is the standalone brand; "UBot Meeting" is how it is referenced within the UBot ecosystem. Full pricing, case studies, and competitive detail are on the [[UVote]] page.

## Full Ecosystem Scope

```
          Front-office        Finance           Operation          Management
          ─────────────       ────────────      ──────────────     ──────────
          Chatbot             Invoice           Logistics          HR
          Support Desk        Payment           Retailer           Insurance
          Recruitment         Tax               Store
          Insurance                             Meeting
```

## Architecture & Technology

- Delivery model: **RPAaaS** — cloud SaaS, no infrastructure investment required
- Core tech: **RPA** (Robotic Process Automation), **OCR/AI** for document reading, **API** integration
- Works on desktop browsers; **no mobile app**
- Requires: Internet connection + registered account
- Integrates with: Oracle, SAP, Misa, Fast, PMKT (accounting systems); TPBank, Vietcombank, VietinBank (banks); Vietnam GDT (Tổng cục thuế)
- Unlimited concurrent users per account; unlimited businesses/MST per account
- Data retained on cloud for full subscription period; exportable (PDF, XML, image) on termination

## Purchase Process Flow

```
Supplier → [Invoice] → UBot Invoice → UBot Matching → UBot ePayment → UBot Statement Checking
                        (read & verify)  (3-way match)   (payment req)    (bank reconciliation)
```

## Pricing (2023)

**Unit: VND**

| Volume (transactions/year) | UBot Invoice (per tx) | UBot Matching (per tx) | UBot ePayment |
|---|---|---|---|
| Setup fee (one-time) | 5,000,000 | 5,000,000 | 5,000,000 |
| 0 – 1,999 | 1,500 | 1,000 | 50,000/user/month |
| 2,000 – 4,999 | 1,000 | 950 | 50,000/user/month |
| 5,000 – 9,999 | 950 | 900 | 50,000/user/month |
| 10,000 – 49,999 | 900 | 800 | 50,000/user/month |
| 50,000 – 99,999 | 850 | 700 | 30,000/user/month |
| 100,000 – 399,999 | 800 | 600 | 30,000/user/month |
| 200,000 – 399,999 | 700 | 500 | 30,000/user/month |
| 400,000 – 499,999 | 600 | 400 | 30,000/user/month |
| 500,000+ | 500 | 300 | 30,000/user/month |

- Warranty: at customer's site, for the entire duration of UBot usage
- Customization (features outside standard scope) requires separate analysis and quotation

**Sales process:** 5 steps — Thống nhất yêu cầu → Chọn gói → Ký hợp đồng → Thanh toán → Bàn giao sử dụng

**Contact:** www.ubot.vn · 0948 34 3456 · FPT Tower, 10 Pham Van Bach, Cau Giay, Hanoi

## Case Studies

| Client | Industry | Use case | Result |
|---|---|---|---|
| **Daikin** | Manufacturing | Invoice processing across branches | 40,000 invoices/year; saves **130 working days** |
| **Rạng Đông** | Manufacturing | 2,500 invoices/month manual processing eliminated | Saves **15–25% costs** |
| **Expertis** | Audit & Consulting | Tax & accounting dept invoice volume | Saves **70% invoice processing time** |

## Named Clients (3,000+)

- **Banking/Insurance**: HDBank, TPBank, VietinBank, PTI (Bảo hiểm Bưu điện), BIC, Bảo hiểm Bảo Minh
- **Manufacturing**: Vinamilk, Daikin, Rạng Đông, SonHa, JinYang
- **Services**: URBOX, Expertis, ISOFTCare, bePro.vn
- **Commerce**: Vingroup, Vincom Retail, Vinhomes, Itochu, KidsPlaza, Tata
- **Others**: Hong Duc Land, VietjetAir, VLA (Logistics Vietnam), Gang Viet
- **Manufacturing/Retail**: Toto, Kids Plaza, Pizza 4P's

## Awards

- IT World Awards 2021 — Information Technology Innovation & Cyber Security
- Gold 2021 Stevie Winner (Asia Pacific)
- Make in Vietnam 2021
- Bronze 2020 Stevie (International Business)
- The Asian Banker Vietnam Awards 2021 — Best Implementation of Process Automation
- Nhân tài Đất Việt 2022

## Positioning vs akaBot

| Dimension | UBot | [[akaBot]] |
|---|---|---|
| Target segment | SME / mid-market | Large enterprise / global |
| Geographic focus | Vietnam-first | 4,000+ customers, 21 countries |
| Delivery model | RPAaaS (cloud service) | Enterprise platform (Studio/Center) |
| Setup time | 15 minutes | Weeks/months (CoE setup) |
| Price point | ~500–1,500 VND/transaction | Enterprise license |
| Automation scope | Finance & accounting ops focus | Full enterprise, APA, AI agents |

## Connections

- [[akaBot]] — parent technology platform; UBot is powered by akaBot
- [[FPT IS]] — product owner / distributor
- [[TPBank]] — listed as UBot banking client
- [[Kyta Platform]] — UBot automation complements Kyta's agreement lifecycle workflows
- [[FPT.SPro]] — adjacent: SPro handles process/workflow digitization; UBot handles task-level automation
- [[FPT eID]] — UBot Meeting uses FPT.AI eKYC for shareholder verification
