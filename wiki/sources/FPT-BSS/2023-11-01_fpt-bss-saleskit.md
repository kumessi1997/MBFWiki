---
title: FPT BSS System — Saleskit EN + Brochure EN
type: source
tags: [fpt-bss, bss, telecom, mvno, mno, billing, fpt-is]
created: 2026-04-17
updated: 2026-04-17
source_file: raw/FPT BSS/3. Saleskit/MVNO-BSS-02112023_EN_Introdution72.pdf
---

## Summary

FPT.BSS is FPT IS's **Business Support System (BSS) for Telecommunications** — a comprehensive platform serving Mobile Network Operators (MNO) and Mobile Virtual Network Operators (MVNO). The saleskit (72 slides, November 2023) and English brochure together cover the full product story: 25 years of telecom BSS history in Southeast Asia, complete system architecture, 7 core modules, competitive advantages, and a named client roster spanning Vietnam, Laos, Cambodia, and Singapore.

The system operates on two branded sub-products: **FPT.BCCS** (Billing and Customer Care System) as the core, and **FPT.ePOS** (Sales & Marketing). Together they form a full telecom BSS stack compliant with TMForum's ODA reference and TAM 17.5.1 framework. The architecture is Docker-based MicroServices with Oracle RAC, Java Spring Boot, React frontend, Netflix ZUUL API gateway, and Redis cache — described as "cloud ready."

## Key facts

- FPT IS product; 25 years of telecom BSS experience (first deployment 1998 for VMS/Vinaphone)
- Targets MNO and MVNO; deployment time **3–6 months**
- Compliant with TMForum ODA and TAM 17.5.1 standards
- Proven at scale: **tens of millions of subscribers**, Zero Unplanned Downtime
- Modular — features can be deployed independently
- Affordable OPEX vs. international vendors (key competitive differentiator)

## 7 core BSS modules

1. **Product & Service Catalog** — product/price/campaign structure; supports base + companion product items, connection fees, handset, packing fees
2. **Customer Management** — subscriber profile (individual/family/corporate hierarchy), order management, contract & document management, loyalty & reward, trouble ticket (11-step CSR workflow)
3. **Billing & Payment** — CDR rating/charging → fee data → monthly debt summary → invoicing → payment; integrated with CRM for promotions
4. **Interconnect System** — CDR mediation from CP/VAS/core network; partner management, revenue sharing, routing, fee declaration; connects domestic/international networks and CPs
5. **Roaming System** — TAP/TADIG/HUR management; CDR collection → rating → TAP file export to clearing house; traffic/revenue/invoice reporting
6. **Commission for Dealers (FPT.eCommission)** — data collection + calculation + approval + payment; integrates with CRM/ERP/MIS/DWH via open architecture
7. **API Gateway (FPT Integration Layer)** — upstream/downstream message processing; integration adapters; alarm & log management; service catalogue

## System architecture

- **Docker-based MicroServices** — HA & scalable; each module runs as independent containers
- Tech stack: PrimeFaces (JSF) + Java Core + Java Spring Boot + React; Netflix ZUUL API gateway; Oracle RAC on Linux; Redis Cache
- **Multi-layer security**: centralized authorization & authentication, DB-level data encryption, OS-level and network-level security
- **Cloud ready** — supports mobile, tablet, laptop, server, and cloud computing endpoints

## Outstanding advantages

| Advantage | Detail |
|-----------|--------|
| Complete functionalities | Regularly upgraded at requests of Vietnam's leading carriers |
| Optimized architecture | Oracle DB / MySQL / MicroService / Cloud ready |
| Fully integrated | Well integrated with telecom core solutions |
| Excellent performance | Proven with tens of millions of subscribers; Zero Unplanned Downtime |
| Affordability | Reasonable OPEX costs vs. international firms |

## Reference clients

**Vietnam (domestic):**
- **Mobifone** — full BSS suite: Billing, Customer Mgmt, Sales, Interconnect & Roaming, Loyalty, DWH, Decision Support, Revenue Assurance, Payment Gateway, MCA, Parental Control, Voice Broadcast — **26,875,508 prepaid + 3,249,110 postpaid subscribers**
- **Viettel** — Billing (Fixed/ADSL/Leased-line/2G/3G), Customer Mgmt, Sales Mgmt
- **Vinaphone** — Sales Mgmt, Customer Mgmt, E-load System, Loyalty Mgmt
- **Gmobile** — Billing & Customer Mgmt, Sales Mgmt, Interconnect & Roaming, Payment GW
- **Vietnamobile** — Customer Care, Sales Mgmt, E-Topup, mPOS, Payment GW
- **Itel Telecom** — Mobile App Self Care
- **ASIM** — Customer Mgmt, Sales & Commission Management

**Regional (international):**
- **LTC (Lao Telecom)** — NOC, Billing (Fixed/ADSL/GSM), Customer Mgmt, Provisioning GW, Mediation, Rating, Interconnect, Payment GW — **666,372 prepaid + 90,465 postpaid**
- **Tigo Millicom Laos** — Billing (GSM, WiMAX), Customer Mgmt
- **Unitel Laos** — Billing (GSM/ADSL/Fixed), Customer Mgmt, Sales Mgmt & Planning
- **ETL Laos** — Payment Gateway
- **Metfone Cambodia** — Billing (Fixed/ADSL/GSM 2G/3G), Customer Mgmt, Sales Mgmt
- **Hello Axiata Cambodia** — Interconnect & Roaming, Sales Mgmt
- **Beeline Cambodia (Sotelco)** — Sales Management
- **Telecom Cambodia** — Billing (Fixed/Internet), Customer Mgmt
- **SingTel** — Process Automation Management for Customer Service Support

## Key entities
[[FPT BSS]], [[FPT IS]], [[Mobifone]]

## Key concepts
[[Business Support System (BSS)]], [[MVNO]], [[Telecom Billing]]

## Connections
- Core FPT IS product for telecom vertical — extends [[FPT IS]] beyond enterprise software into carrier-grade telecom systems
- MobiFone is the flagship domestic reference (all modules, 30M subscribers)
- SingTel is the only international Tier-1 carrier reference
- No pricing disclosed in available materials

## My notes
Saleskit is dated November 2023 — the most recent version available. The 72-slide deck covers slides 1–36 in detail (seen); slides 37–72 likely cover implementation process and additional case studies. Brochure (4 pages) confirms 5 USPs and lists 16 customer logos. The combination of Vietnam's Big 3 carriers (Viettel, MobiFone, Vinaphone) as clients is a very strong social proof anchor for MVNO/MNO sales in SEA.
