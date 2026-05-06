---
title: FPT eID Saleskit November 2025 (CxO & IT)
type: source
tags: [fpt-eid, ekyc, ekyb, faceid, idcheck, biometric, identity-verification, fpt-is, banking, fintech, vietnam]
created: 2026-04-13
updated: 2026-04-13
source_file: raw/raw/eid/3. Saleskit/eID_Saleskit_11.2025_VIE (CxO & non-IT) v2.0.pdf · raw/raw/eid/4. Sales training/eID_Saleskit_11.2025_VIE (IT) v2.0.pdf
---

## Summary

Two-deck November 2025 saleskit for **FPT eID**, FPT IS's biometric identity verification platform (fpteid.com). The CxO/non-IT deck (~25 pages) covers the business case, legal mandate, certifications, scale, and named client roster for a C-suite audience. The IT deck (~31 pages) covers the same ground with additional technical depth: OCR specs, system architecture (SaaS + On-Premise), a 35-step eKYB integration sequence diagram, SDK requirements, VNeID deployment workflow, and deployment timeline.

FPT eID consists of four products — eKYC, FPT.IDCheck, eKYB, and FaceID — built around Vietnamese national identity infrastructure (chip CCCD / NFC) and connected to the Ministry of Public Security's C06 data center via VPN. The platform is positioned as the compliance answer to a wave of Vietnamese banking regulations (Circular 50/2024, Circular 17/2024, Decision 2345) that mandate biometric authentication for financial transactions.

The platform has processed 20M+ chip CCCD authentications with the Ministry of Public Security and 300M+ FaceID transactions, with 200+ eKYC customers. It holds PAD (Presentation Attack Detection) certifications from both iBeta (ISO 30107-3 Level 2) and BixeLab (ISO 30107-3 Level 1) — described as one of very few Vietnamese companies to hold both.

## Key facts

**Scale:**
- 20M+ chip CCCD authentications (with Ministry of Public Security / C06)
- 300M+ FaceID transactions
- 200+ eKYC customers
- Awards: Ministry of Public Security D06 certification; Vietnam Digital Transformation Award 2023

**Legal / regulatory basis:**
- Decision 06/QĐ-TTg — e-Government / digital ID framework
- Circular 50/2024/TT-NHNN — banking IT security requirements
- Circular 17/2024/TT-NHNN — mandates biometric authentication for banking transactions ≥ certain thresholds
- Decree 69 amendments
- Decision 2345/QĐ-NHNN — biometric authentication for transfers
- Circular 16/2024/TT-NHNN

**Certifications:**
- ISO 19795-2 (biometric data interchange)
- ISO 30107-3 Level 1 — BixeLab (anti-spoofing / PAD)
- ISO 30107-3 Level 2 — iBeta (anti-spoofing / PAD)
- FPT.IDCheck cooperation agreement with Ministry of Public Security: cert no. 3103/2023/RAR-FIS, issued March 2023, permanent validity

**Four products:**

| Product | Core function | Key metric |
|---|---|---|
| **eKYC** | AI-powered personal identity verification via CCCD + selfie | 98% accuracy; API/SDK for Web/iOS/Android |
| **FPT.IDCheck** | NFC chip CCCD read + C06 (MoPS) database cross-check | 100% accuracy; 2–3s chip read; 1s C06 response |
| **eKYB** | Business customer onboarding (OCR business registration + tax cross-check) | 5 license types; FPT.CA digital signing integration |
| **FaceID** | Face recognition, liveness detection, blacklist search | 512 features in 0.1s; 1:1 match <0.1s; 1:N search <1s (10M faces) |

**eKYC technical specs:**
- Anti-spoofing (PAD): ISO 30107-3 Level 1 & Level 2 certified; >99% anti-spoofing rate; 100% for chip CCCD
- Supports VNeID Level 2 (3 services: 9-field citizen data sharing, face verification, optional liveness detection)
- CCCD/CMND OCR: ~2s; extracts full citizen data
- Anti-deepfake technology applied

**FPT.IDCheck technical specs:**
- NFC chip CCCD authentication per ICAO standard
- Chip read: 2–3 seconds
- C06 database response: 1 second
- Accuracy: 100% (government-verified)
- MoPS cooperation: permanent agreement cert 3103/2023/RAR-FIS

**eKYB technical specs:**
- OCR: business registration documents; 5 license types; ~5s extraction
- Extracts: tax ID, company name (Vietnamese + English), charter capital, legal representative
- Cross-checks with: National Business Information Portal + General Department of Taxation
- Integrates with FPT.CA for business digital signing

**FaceID technical specs:**
- Feature extraction: 512 facial features in 0.1s
- 1:1 comparison: <0.1s
- 1:N blacklist search: <1s (up to 10M faces)
- Handles: blurry images, backlit conditions, low light, glasses, masks, age estimation, gender detection
- Liveness detection integrated

**System architecture:**
```
End-user App
  → Bank/Organization eKYC Backend
    → FPT Site (eKYC engine + IDCheck + FPT CA + Cross-check)
      → C06 / BCA (MoPS) via VPN Site-to-Site
```

**Deployment models:**
- **SaaS** — hosted on FPT infrastructure; connects to C06/BCA via VPN S2S
- **On-Premise** — deployed on customer's infrastructure; same C06/BCA VPN connection

**SDK integration:**
- iOS: ≥ iOS 13
- Android: ≥ Android 8
- Also available as API (Web)

**Deployment timeline (typical):**
- Service registration phase: ~11 weeks
- API integration phase: ~7 weeks
- Go-live phase: ~2 weeks
- **Total: ~20 weeks**

**Remote signing (FPT.eSign):**
- Cloud-based OTP remote signing flow
- Companion product FPT.CA for digital certificates

**Named clients:**

*eKYC (personal KHCN):*
UOB, Standard Chartered, HSBC, Bangkok Bank, KBank, VPBank Securities, SHB, NCB, PBSV, DNSE, HD Saison, KB Securities, JACCS, VietCredit, Mirae Asset Finance, Bamboo Capital, VietjetAir, VNExpress, Vietnam Post, PG Insurance, PJICO (+ more)

*eKYB (business KHDN):*
VietinBank, VPBank, Techcombank, Standard Chartered, Deutsche Bank, SMBC, E.Sun Bank, DBS, BNP Paribas, Cathay United Bank, OCBC

*FPT.IDCheck:*
SHB, VPBank, Sacombank, VietCredit, VIB, OCB, Bangkok Bank, CTBC Bank, ACB, Rootopia, RapidDong, LaoViet Bank, WooriBank, Chailease, KBank, SCB, KEB Hana Bank, JACCS, Viet Capital Securities

**Case studies:**
1. **Goertek Vina** (manufacturing): FaceID check-in/out for 30,000 workers per year; HR process acceleration
2. **VPBank** (banking): 2M+ chip CCCD verifications completed within 2 months of deployment; full regulatory compliance for Circular 17 + Decision 2345

## Key entities

[[FPT eID]], [[FPT IS]], [[FPT Corporation]]

## Key concepts

[[Digital Transformation (Vietnam)]], [[e-Government (Vietnam)]]

## Connections

- FPT eID is an [[FPT IS]] product; sits in the same portfolio as [[ArchiveNex]], [[AZINSU]], [[Azladin]], [[akaMES]]
- FPT.IDCheck uses the same C06/Ministry of Public Security infrastructure referenced in the [[e-Government (Vietnam)]] digital ID rollout
- eKYB integrates with FPT.CA (FPT's digital certificate authority) and cross-checks with the National Business Information Portal
- The banking client roster overlaps heavily with [[AZINSU]] (health insurance) and [[Utop]] (CX/loyalty) — suggests FPT IS has deep penetration in Vietnamese banking
- VNeID integration positions FPT eID within the national VNeID Level 2 ecosystem (government digital ID)
- Regulatory mandates (Circular 17/2024, Decision 2345) create a forced-compliance market; FPT eID's certifications and MoPS cooperation make it one of very few qualified vendors

## My notes

(Empty until filled in during ingest discussion)
