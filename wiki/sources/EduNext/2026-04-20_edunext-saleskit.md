---
title: EduNext — Social Constructivism LMS Saleskit (EN v1.17)
type: source
tags: [edunext, lms, e-learning, social-constructivism, fpt-software, education, saas]
created: 2026-04-20
updated: 2026-04-20
source_file: raw/EduNext/3. Saleskit/EduNext-v1.17.pdf
---

## Summary

EduNext (branded "dnext") is a Learning Management System built by **FPT Software, Inc.** on a **Social Constructivism** methodology — emphasizing collaborative, peer-driven learning rather than passive content delivery. The platform targets both educational organizations (schools, language centers) and enterprises seeking internal training solutions.

The saleskit (EN, 28 slides, v1.17) presents the product overview, 6 feature modules, full tech stack, AWS cloud architecture, business/pricing model, and two case studies — CodeLearn and Kella English Center. It positions EduNext as a scalable, white-label-capable LMS that can be deployed on-premise or as cloud SaaS.

A critical architectural insight: **EduNext is the B2B platform that powers [[CodeLearn]]** as its B2C consumer product. This relationship is disclosed in the case studies section and confirms the two products share an underlying platform.

## Key facts

- **Vendor:** FPT Software, Inc. (not FPT IS)
- **Scale:** 2M learning users; 90% good rating
- **Tagline:** "Learn Together according to the method of Social Constructivism"
- **Platform:** Web + Mobile (Kubernetes/AWS)
- **Contact:** vietcv@fpt.com / +84 984333989; support@edunext.vn / +84 812 786 332

## 6 main features

1. **Learning** — Instructor-side class tracking; learner-side content access
2. **Content Management** — 9 activity types: Reading, Video, Assignment, Quiz, SCORM, Attachment, Feedback, Poll, Code
3. **User Management** — Role-based access; multi-organization support
4. **Assessment** — Quiz engine, contests, certificates (80% completion threshold)
5. **Notification & Communication** — Email/Push/SMS; Friends & Chat with ChatGPT integration
6. **Reporting & Data** — Learning progress tracking, analytics dashboards

## Additional capabilities

- **Gamification:** XP points, badges, leaderboard
- **Class/Group Management:** Cohort and group learning structures
- **Certificates:** Auto-issued at 80% course completion
- **ChatGPT integration:** Embedded in Friends & Chat module

## System architecture

**LMS layer:** Resource Management, Class Management, Course Management, Assessment, Contest, Certificate

**System Core:** User/Permissions, Reporting, Chat, Payment, Subscriptions, Notifications (Email/Push/SMS)

**External integrations:** Identity Provider, Payment Gateway, HRM, ChatGPT

**Tech stack:**
- Frontend: React 18.2, Next.js 14.x, TypeScript, Turbo, Mantine
- Backend: .NET Core 8, Java 21, PostgreSQL 12, Redis 7.2.1, MongoDB 4.4.6, WebSockets, Identity Server 4.0
- Infrastructure: Kubernetes, AWS (EKS, RDS, DynamoDB, ElastiCache, S3, SNS, CloudFront, WAF, Route 53), Jenkins, Argo, Elasticsearch/Logstash/Kibana

## Pricing model

**On-Premise License:**
| Option | Price |
|--------|-------|
| Annual license | $20,000/year |
| Perpetual (no source) | $150,000 |
| Perpetual (with source) | $500,000 |
| Customization | $1,500/man-month |

**Cloud SaaS:**
| Tier | Learners | CCU | Price |
|------|----------|-----|-------|
| Starter | 1,000 | 50 | $3,000/month |
| Growth | 10,000 | 300 | $5,000/month |
| Scale | 20,000 | 500 | $10,000/month |

## Case studies

**[[CodeLearn]]** — 1M learners, 150K MAU, 50+ IT courses
- EduNext is the underlying platform powering CodeLearn's B2C offering

**Kella English Center** — 100K learners, 5K MAU, IELTS preparation
- White-label deployment for a language center use case

## User types

Educational Organization · Enterprise · Learner · Content Creator · Mentor/Expert

## Key entities

[[FPT Software]], [[CodeLearn]], [[FPT IS]]

## Key concepts

[[Social Constructivism]], [[Learning Management System (LMS)]], [[Game-Based Learning]], [[Adaptive Learning]]

## Connections

- **Powers [[CodeLearn]]** — CodeLearn (B2C, 1.28M users) runs on EduNext as its underlying LMS platform
- Complements [[Meduverse]] — Meduverse is game-first for primary school (G1–6); EduNext is a full LMS for secondary/adult/enterprise learners
- Separate from [[VioEdu]] — VioEdu is FPT IS's K-12 adaptive learning; EduNext is FPT Software's LMS sold B2B to organizations
- Vendor distinction: EduNext is **FPT Software**, not FPT IS — important for sales territory and internal positioning

> [!NOTE]
> EduNext is a FPT Software product, not FPT IS. The wiki covers both companies' products, but this distinction matters for sales ownership and internal structure.

## My notes
