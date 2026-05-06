---
title: FPT eID
type: entity
tags: [fpt-eid, ekyc, ekyb, faceid, idcheck, biometric, identity-verification, fpt-is, banking, fintech, nfc, vietnam]
created: 2026-04-13
updated: 2026-04-13
source_count: 2
po_email: ToanPT15@fpt.com
---

## Overview

**FPT eID** is [[FPT IS]]'s biometric identity verification platform (fpteid.com), providing four solutions for digital onboarding and identity authentication: **eKYC** (individual), **FPT.IDCheck** (chip CCCD + government database), **eKYB** (business), and **FaceID** (biometric recognition). It is designed for banks, financial institutions, and enterprises that must comply with Vietnamese regulations mandating biometric authentication.

FPT eID holds cooperation agreements with the Ministry of Public Security (MoPS) for direct access to the C06 national citizen database, and is one of the few Vietnamese companies certified at ISO 30107-3 Level 1 (BixeLab) and Level 2 (iBeta) for anti-spoofing / Presentation Attack Detection.

## Scale

| Metric | Value |
|---|---|
| Chip CCCD authentications (with MoPS) | 20M+ |
| FaceID transactions | 300M+ |
| eKYC customers | 200+ |

## Products

### eKYC — Individual identity verification

AI-powered identity verification using the Vietnamese chip CCCD (national ID card):

- **Accuracy**: 98% (OCR + face match)
- **Anti-spoofing**: ISO 30107-3 Level 1 & 2 certified; >99% PAD rate; 100% for chip CCCD
- **Anti-deepfake**: Applied to all verification flows
- **Inputs**: Both sides of CCCD → NFC scan → selfie
- **Processing**: OCR (~2s); chip NFC (2–3s); face comparison
- **Integration**: API + SDK (iOS ≥13, Android ≥8, Web)
- **VNeID support**: Level 2 (3 services: 9-field citizen data sharing, face verification, liveness detection)

### FPT.IDCheck — Chip CCCD authentication

NFC-based authentication of the Vietnamese chip CCCD against the MoPS C06 national database:

- **Accuracy**: 100% (government-sourced data)
- **NFC chip read**: 2–3 seconds
- **C06 database response**: 1 second
- **Standard**: ICAO for chip/NFC reading
- **Data integrity**: Decodes and verifies citizen data signed by RAR (Cục Cảnh sát QLHC về TTXH)
- **MoPS cooperation**: Permanent agreement cert 3103/2023/RAR-FIS (issued March 2023)
- **Deployment**: SaaS and On-Premise; both connect to C06/BCA via VPN Site-to-Site

### eKYB — Business identity verification

Automated onboarding and KYC for corporate customers:

- **OCR**: 5 types of Vietnamese business registration documents; ~5s extraction
- **Extracts**: Tax ID, company name (Vietnamese + English), charter capital, legal representative
- **Cross-checks**: National Business Information Portal + General Department of Taxation
- **Integration**: FPT.CA for business digital signing; eKYC for verification of individual representatives
- **Flow**: OCR registration doc → cross-check tax/business portal → eKYC on legal representative → FPT.CA digital sign

### FaceID — Biometric face recognition

Face recognition engine for check-in/out, access control, blacklist screening, and transaction verification:

- **Feature extraction**: 512 facial features in 0.1s
- **1:1 matching** (face vs stored photo): <0.1s
- **1:N blacklist search** (up to 10M faces): <1s
- **Attributes detected**: liveness, glasses, mask, age estimation, gender
- **Image handling**: blur, backlit, low-light conditions
- **Use cases**: Employee check-in/out, access control, fraud screening, KYC face match

## System architecture

```
End-user App (iOS/Android/Web)
  → Client eKYC Backend (bank/enterprise)
    → FPT Platform
        ├─ eKYC engine
        ├─ IDCheck (NFC validation)
        ├─ FPT CA (digital certificate)
        └─ Cross-check (business portal / tax)
          → C06 / BCA (Ministry of Public Security) — VPN S2S
```

## Deployment

| Model | Description |
|---|---|
| **SaaS** | FPT-hosted; client integrates via API/SDK; FPT manages infrastructure |
| **On-Premise** | Deployed on client infrastructure; same C06/BCA VPN connectivity |

**Typical implementation timeline:**
- Service registration: ~11 weeks
- API integration: ~7 weeks
- Go-live: ~2 weeks
- **Total: ~20 weeks**

## Certifications & awards

| Certification / Award | Issuer | Notes |
|---|---|---|
| ISO 19795-2 | ISO | Biometric data interchange |
| ISO 30107-3 Level 1 (PAD) | BixeLab | Anti-spoofing certification |
| ISO 30107-3 Level 2 (PAD) | iBeta | Anti-spoofing certification — higher standard |
| D06 certification | Ministry of Public Security | FPT eID meets Decision 06 requirements |
| Vietnam Digital Transformation Award 2023 | Government | National digital transformation recognition |
| FPT.IDCheck cooperation | MoPS / RAR | Cert 3103/2023/RAR-FIS; permanent validity |

## Regulatory context

FPT eID is the compliance answer to a cluster of Vietnamese regulations mandating biometric verification for financial services:

- **Decision 06/QĐ-TTg** — national e-Government / digital ID framework
- **Circular 50/2024/TT-NHNN** — banking IT security standards
- **Circular 17/2024/TT-NHNN** — biometric authentication required for banking transactions above threshold
- **Circular 16/2024/TT-NHNN** — related banking digital requirements
- **Decision 2345/QĐ-NHNN** — biometric verification for fund transfers
- **Decree 69** amendments — broader digital identity requirements

## Named clients

**eKYC (personal — KHCN):**
UOB · Standard Chartered · HSBC · Bangkok Bank · KBank · VPBank Securities · SHB · NCB · PBSV · DNSE · HD Saison · KB Securities · JACCS · VietCredit · Mirae Asset Finance · Bamboo Capital · VietjetAir · VNExpress · Vietnam Post · PG Insurance · PJICO

**eKYB (business — KHDN):**
VietinBank · VPBank · Techcombank · Standard Chartered · Deutsche Bank · SMBC · E.Sun Bank · DBS · BNP Paribas · Cathay United Bank · OCBC

**FPT.IDCheck:**
SHB · VPBank · Sacombank · VietCredit · VIB · OCB · Bangkok Bank · CTBC Bank · ACB · Rootopia · RapidDong · LaoViet Bank · WooriBank · Chailease · KBank · SCB · KEB Hana Bank · JACCS · Viet Capital Securities

## Case studies

**Goertek Vina (manufacturing):**
- FaceID deployed for employee check-in/out
- 30,000 worker movements automated per year
- Result: HR process acceleration, eliminated manual attendance tracking

**VPBank (banking):**
- FPT.IDCheck + eKYC deployed for full Circular 17 / Decision 2345 compliance
- 2M+ chip CCCD verifications completed within 2 months of deployment
- Result: Full regulatory compliance at speed; one of the largest FPT eID deployments documented

## Companion products

- **FPT.CA** — Digital certificate authority for business signing (integrated in eKYB)
- **FPT.eSign** — Cloud OTP-based remote signing service
- Both are [[FPT IS]] products within the same portfolio

## Sources

[[2025-11-01_fpt-eid-saleskit]], [[2026-04-13_fpt-eid-website]]

## Related

[[FPT IS]], [[FPT Corporation]], [[AZINSU]], [[Azladin]], [[ArchiveNex]], [[Digital Transformation (Vietnam)]], [[e-Government (Vietnam)]]
