---
title: UVote
type: product
tags: [uvote, e-voting, agm, shareholder-meeting, ekyc, akabot, fpt-is, process-transformation, rpa]
created: 2026-04-17
updated: 2026-04-18
source_count: 3
po_email: GiapBD@fpt.com
---

## Overview

**UVote** (Giải Pháp Tổ Chức Đại Hội & Biểu Quyết Thế Hệ Mới) is an online AGM and e-voting platform developed by **akaBot – FPT**, designed to fully digitize the lifecycle of shareholder general meetings (ĐHĐCĐ) for Vietnamese listed companies and enterprises. Its vision is to become the **#1 Voting & Election Platform in Asia-Pacific**.

UVote automates the entire AGM process — from shareholder invitation and identity verification through live voting to automated report generation — reducing end-to-end meeting setup to **48 hours** and software configuration to **5 minutes**. Online participation is legally equivalent to in-person attendance under Article 140.2(c), Enterprise Law 2014.

> [!NOTE]
> UVote = UBot Meeting. Within the [[UBot]] ecosystem, this product is referred to as "UBot Meeting." Both names refer to the same product with the same branding (akaBot+FPT), same mascot, same contact number (+84 948 34 3456), and same address. See [[UBot]] for the UBot Meeting entry.

- **1,000,000+ shareholders** served
- VN30 enterprise clients; 18+ named companies
- Recognized by Gartner Peer Insights, G2, HFS Research

## Market Context

- Vietnam: **2,114 listed companies** — HOSE 417 · HNX 342 · Upcom 855 · OTC ~500
- Companies must hold AGM annually within 4 months of fiscal year-end (by Apr 30, extendable to Jun 30)
- Global e-voting market: **USD $1.33B (2021) → $3.47B (2028)**, CAGR 12.7%

## System Architecture

3-node platform:
```
Portal (UVote Operators) ←→ Admin (Issuing Organization) ←→ AGM (Participants / Shareholders)
```

**Technology stack:** Streaming Service · Online Payment · E-sign · Gamification · Chatbot · Blockchain

**Identity verification options:** eKYC (FPT.AI facial recognition + ID document) · OTP SMS · QR Code

Accepted ID types for login: CMND · CCCD · MSDN · Hộ chiếu · Số đăng ký sở hữu

## Core Capabilities

### Pre-Meeting
- Shareholder list finalization (chốt danh sách cổ đông)
- Personalized invitation print & auto-send via email (1-click)
- Online proxy declaration — shareholders can delegate to multiple proxies; each proxy gets own account
- Document upload (agenda items, tờ trình)

### During Meeting
- eKYC check-in for identity verification (result in 2s)
- Livestream + live chat with meeting committee
- Real-time attendance rate display
- Per-item or batch voting — configurable by organizer
- Early voting allowed; vote changes permitted before deadline
- Only meeting chair sees running vote totals during live voting (can delegate access)
- Cumulative voting (bầu dồn phiếu) and ballot splitting supported

### Post-Meeting
- Auto-export reports in **2 seconds**: shareholder verification report · vote count results · meeting minutes & resolutions
- Full audit trail

### Resilience
- Votes recorded real-time; disconnection only affects uncast votes
- One shareholder can attend multiple AGMs simultaneously on one device

## 5 Key Advantages

1. **Minh Bạch** — Transparency via automated computation; data encrypted
2. **Chính xác** — 100% accurate vote counting
3. **An toàn tuyệt đối** — Absolute security; encrypted data
4. **Nâng tầm trải nghiệm** — Remote shareholder connection via livestream & livechat
5. **Tối ưu quỹ thời gian** — Setup in 48h; can achieve >51% quorum in first attempt

## Pricing (2023)

### Software License

| Tier | Price | Capacity | Included |
|---|---|---|---|
| Trial | Free | Up to 5 shareholders | Basic |
| Pro | From 50,000,000 VND | Up to 100,000 shareholders | eKYC + OTP SMS |
| Enterprise | Contact | 100,000+ shareholders | RPA + Chatbot + Voicebot |

### Full Solution Bundle (50,000+ shareholders, VND)

| Component | Price |
|---|---|
| Software & on-site staff | 390,000,000 |
| Shareholder infrastructure | 130,000,000 |
| Video / livestream production | 90,000,000 |
| Studio | 20,000,000 |
| Network infrastructure | 200,000,000 |

**Contact:** +84 948 34 3456 · www.ubot.vn/uvote · FPT Tower, 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội

## Case Studies

| Client | Event | Format | Scale |
|---|---|---|---|
| **HDBank** | AGM Apr 2022 | Hybrid (in-person + online) | 30,000 e-voters + 500 in-person |
| **Vinamilk** | AGM Apr 2022 | Online | 50,000 e-voters + 10,000 E-Webinar |
| **GBA** (German Business Association) | AGM Jan 2023 | Hybrid | 80+ e-voters |
| **FPT Corporation** | AGM Apr 2023 | Online | 45,000 shareholders |

## VN30 & Named Clients

VietjetAir · Vinamilk · Mộc Châu Milk · Ocean Group · HSC · SonHa · **HDBank** · Vingroup · Vinhomes · Vincom Retail · GTNfoods · Vilco · **VietinBank** · VietinBank Securities · Digiworld · GELEX · **FPT** · Petrolimex

**Strategic Partners:** Ministry of Industry & Trade · IDEA · VietinBank Securities

## Competitive Landscape

| Competitor | Vendor |
|---|---|
| BVote | ByteSoft |
| Voting.vn | NEO |
| BS Vote | BlueSoft |
| Ez GSM | FPT Securities (internal) |
| Vina Aspire | Vina Aspire |
| Ato.vn | Ato |

## Awards

- IT World Awards 2021 — Information Technology Innovation & Cyber Security
- Gold 2020 Stevie Winner (Asia Pacific)
- Make in Vietnam 2021
- Bronze 2020 Stevie (International Business)
- The Asian Banker Vietnam Awards 2021 — Best Implementation of Process Automation
- Nhân tài Đất Việt 2022
- Recognized by: Gartner Peer Insights · G2 · HFS Research

## Connections

- [[akaBot]] — parent technology platform; UVote is powered by akaBot
- [[FPT IS]] — product owner / distributor
- [[UBot]] — UBot Meeting = UVote; same product referenced under the UBot ecosystem umbrella
- [[FPT eID]] — UVote uses FPT.AI eKYC for shareholder identity verification
- [[FPT.eSign]] — meeting resolutions and minutes can integrate with FPT.eSign for legally binding digital signatures
- [[HDBank]] — flagship UVote AGM case study (30,000 e-voters, Apr 2022)
