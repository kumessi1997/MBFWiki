---
title: FPT BSS
type: product
tags: [fpt-bss, bss, telecom, mvno, mno, billing, fpt-is]
created: 2026-04-17
updated: 2026-04-17
source_count: 1
po_email: LienDH@fpt.com
---

## Overview

**FPT.BSS** is FPT IS's **Business Support System (BSS) for Telecommunications** — the next-generation platform for managing all business operations of Mobile Network Operators (MNO) and Mobile Virtual Network Operators (MVNO). With 25 years of deployment history starting from Vietnam's earliest carriers, FPT BSS has scaled from 100,000 to tens of millions of subscribers and is deployed across Vietnam, Laos, Cambodia, and Singapore.

The system runs on two branded sub-products at its core: **FPT.BCCS** (Billing and Customer Care System) and **FPT.ePOS** (Sales & Marketing System), together covering the full telecom BSS stack per TMForum ODA and TAM 17.5.1 standards.

## History

| Period | Milestone | Scale |
|--------|-----------|-------|
| 1998–2002 | Initial deployment — VMS, Vinaphone (Oracle Form) | 100K subscribers |
| 2003–2006 | Feature expansion — Viettel project (Java Applet) | 1M subscribers |
| 2007–2011 | International expansion — VNM, GTEL | 10M subscribers |
| 2012 | Multi-service mgmt — 15 carriers | 50M subscribers |
| 2013–2023 | Continuous improvement & development | Hundreds of millions |

## System architecture

**Three-layer structure:**

**1. Integration Layer**
DMS app · Sales portal · Merchant app · SelfCare · Portal · Kiosks · SMS · IVR · USSD App · SCR CTI · Notification Center · API HUB/ESB

**2. Core System (6 domains)**
- **Customer Management**: Account management, Central order management, CRM & CC portal, Document management, Trouble Ticketing, Loyalty & Rewards
- **Sales Management**: Sales channels, Product catalog, E-balance, Inventory & Logistics, Campaign management, Commission management, mSale
- **Billing/Revenue Management**: Billing account, Billing cycle & invoicing, Payment & credit management, Rating/Products & services charges, Adjustments & discounts, Collection & AR
- **Resource Management**: SIM inventory, Scratch inventory, Number inventory, Device inventory
- **Service Management**: Service order management, VAS Provisioning, Central order management, Network Integration & Provisioning GW
- **Partner Settlement**: Interconnect, Roaming
- Plus: Payment Gateway · ERP · Analytics (DWH/BI/Datalake, Revenue Assurance, Fraud Detection) · MNP · Integrated VAS

**3. Network Adapter**
SMS/SMPP gateway · SMSC · MNP workflow · MNP Policy · VMS/MCA

**Tech stack:**
- Docker-based MicroServices (HA & scalable)
- PrimeFaces (JSF) + Java Core + Java Spring Boot + React
- Netflix ZUUL API Gateway
- Oracle RAC on Linux + Redis Cache
- Multi-layer security: centralized auth/authorization, DB-level encryption
- Cloud ready

## 7 core modules

### 1. Product & Service Catalog
Manages product structure (Base + Companion items → Billing/Accounting instances), pricing (Price Area, Discounts, Tax), and campaign linking (Product–Price–Campaign).

### 2. Customer Management
- Customer hierarchy: Individual / Family / Corporate (with sub-accounts)
- Order management: new subscription, change (number/SIM/service/type/ownership/split-merge), lookup
- Subscriber profile, contract & document management, loyalty & reward, trouble ticket (11-step CSR workflow)

### 3. Billing & Payment
CDR Rating/Charging → Fee data → Monthly debt summary (integrated with CRM for promotions) → Invoicing → Debt and payment → Other systems

### 4. Interconnect System
Centralizes CDR mediation from Content Providers, VAS services, and core network (SGSN/GGSN/MSC). Functions: data collection/processing/classification, partner management, revenue sharing, routing, fee declaration, reporting, system authorization.

### 5. Roaming System
Full TAP/TADIG/HUR management. CDR collection → classification → rating → TAP file export to clearing house. Produces: CDR processing reports, traffic reports, revenue reports, TAP processing reports, invoices, RAP file processing.

### 6. Commission for Dealers (FPT.eCommission)
- Configuration: define commission, beneficiary management, campaign management, reporting
- Execution: data collection + calculation
- Management: query transactions, commission approval, payment
- Open integration: CRM, ERP, MIS/DWH via SQL Server, MySQL, flat file, CSV, ODBC

### 7. API Gateway (FPT Integration Layer)
Connects upstream channels (SelfCare, CRM, Sales) to downstream systems (Order Management, Billing & Charging). Includes integration adapters, message transformation/queues/processing, alarm & log management.

## Outstanding advantages

| Advantage | Detail |
|-----------|--------|
| **Complete functionalities** | Regularly upgraded at requests of Vietnam's leading carriers (Viettel, MobiFone) |
| **Optimized architecture** | Oracle DB / MySQL / MicroService / Cloud ready; upgraded many times for performance & reliability |
| **Fully integrated** | Well integrated with telecom core solutions (network, VAS, payment) |
| **Excellent performance** | Proven with tens of millions of subscribers; **Zero Unplanned Downtime** |
| **Affordability** | Reasonable OPEX costs vs. international vendors — key price advantage in SEA |

**5 USPs (brochure):**
1. All essential MVNO/MNO operations in one platform
2. Compatible with all carriers
3. Rapid deployment: **3–6 months** for MVNO/MNO
4. Flexible PBX integration
5. Modular — features deployable independently

## Reference clients

**Vietnam:**
| Carrier | Modules | Scale |
|---------|---------|-------|
| **Mobifone** | Full suite: Billing, Customer Mgmt, Sales, Interconnect & Roaming, Loyalty, DWH, Decision Support, Revenue Assurance, Payment GW, MCA, Parental Control, Voice Broadcast | 26.9M prepaid + 3.2M postpaid |
| **Viettel** | Billing (Fixed/ADSL/Leased-line/2G/3G), Customer Mgmt, Sales Mgmt | Vietnam's largest carrier |
| **Vinaphone** | Sales Mgmt, Customer Mgmt, E-load System, Loyalty Mgmt | — |
| **Gmobile** | Billing & Customer Mgmt, Sales Mgmt, Interconnect & Roaming, Payment GW | — |
| **Vietnamobile** | Customer Care, Sales Mgmt, E-Topup, mPOS, Payment GW | — |
| **Itel Telecom** | Mobile App Self Care | — |
| **ASIM** | Customer Mgmt, Sales & Commission Management | — |

**Regional:**
| Carrier | Country | Modules | Scale |
|---------|---------|---------|-------|
| **LTC (Lao Telecom)** | Laos | NOC, Billing (Fixed/ADSL/GSM), Customer Mgmt, Provisioning GW, Mediation, Rating, Interconnect, Payment GW | 666K prepaid + 90K postpaid |
| **Tigo Millicom** | Laos | Billing (GSM, WiMAX), Customer Mgmt | — |
| **Unitel** | Laos | Billing (GSM/ADSL/Fixed), Customer Mgmt, Sales Mgmt & Planning | — |
| **ETL** | Laos | Payment Gateway | — |
| **Metfone** | Cambodia | Billing (Fixed/ADSL/GSM), Customer Mgmt, Sales Mgmt | — |
| **Hello Axiata** | Cambodia | Interconnect & Roaming, Sales Mgmt | — |
| **Beeline (Sotelco)** | Cambodia | Sales Management | — |
| **Telecom Cambodia** | Cambodia | Billing (Fixed/Internet), Customer Mgmt | — |
| **SingTel** | Singapore | Process Automation Management for Customer Service | Tier-1 carrier |

> [!NOTE]
> No pricing data available in current materials. Saleskit slides 37–72 (implementation process, additional case studies) not yet ingested.

## Connections

- [[FPT IS]] — product owner
- [[Mobifone]] — flagship domestic reference (full suite, 30M+ subscribers)
- [[Business Support System (BSS)]] — core concept
- [[MVNO]] — primary target market
- [[akaBot]] — potential automation layer on top of BSS workflows (FPT ecosystem)
