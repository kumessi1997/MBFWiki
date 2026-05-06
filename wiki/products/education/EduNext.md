---
title: EduNext
type: product
tags: [edunext, lms, e-learning, social-constructivism, fpt-software, education, saas, aws]
created: 2026-04-20
updated: 2026-04-20
source_count: 1
po_email: VietCV@fpt.com
---

## Overview

**EduNext** (branded "dnext") is [[FPT Software]]'s B2B Learning Management System built on **Social Constructivism** methodology — peer-driven, collaborative learning rather than passive consumption. It is deployed as on-premise license or cloud SaaS, targeting educational organizations and enterprises.

Tagline: *"Learn Together according to the method of Social Constructivism"*

Scale: **2M learning users · 90% good rating**

> [!NOTE]
> EduNext is a **FPT Software, Inc.** product — not FPT IS. The education wiki covers both companies' products; sales territory and internal ownership differ.

## Key differentiator

EduNext is the **underlying platform that powers [[CodeLearn]]** — FPT IS's B2C coding education product with 1.28M users. This B2B/B2C architectural split means EduNext has proven large-scale production deployment, not just pilot traction.

## 6 feature modules

| Module | Description |
|--------|-------------|
| **Learning** | Instructor tracking + learner content access |
| **Content Management** | 9 activity types: Reading, Video, Assignment, Quiz, SCORM, Attachment, Feedback, Poll, Code |
| **User Management** | Role-based access; multi-organization support |
| **Assessment** | Quiz engine, contests, certificates (auto-issued at 80% completion) |
| **Notification & Communication** | Email/Push/SMS; Friends & Chat with ChatGPT integration |
| **Reporting & Data** | Learning progress tracking and analytics dashboards |

## Additional capabilities

- **Gamification:** XP points, badges, leaderboard
- **Class/Group Management:** Cohort and group learning structures
- **ChatGPT integration:** Embedded chat assistant for learners
- **SCORM support:** Compatible with industry-standard e-learning content packages

## System architecture

**LMS layer:** Resource Management · Class Management · Course Management · Assessment · Contest · Certificate

**System Core:** User/Permissions · Reporting · Chat · Payment · Subscriptions

**Notifications:** Email · Push · SMS

**External integrations:** Identity Provider · Payment Gateway · HRM · ChatGPT

**Tech stack:**
- **Frontend:** React 18.2, Next.js 14.x, TypeScript, Turbo, Mantine
- **Backend:** .NET Core 8, Java 21, PostgreSQL 12, Redis 7.2.1, MongoDB 4.4.6, WebSockets, Identity Server 4.0
- **Infrastructure:** Kubernetes, AWS (EKS, RDS, DynamoDB, ElastiCache, S3, SNS, CloudFront, WAF, Route 53)
- **DevOps:** Jenkins, Argo CD, Elasticsearch/Logstash/Kibana

## Pricing

### On-Premise License

| Option | Price |
|--------|-------|
| Annual license | $20,000/year |
| Perpetual (no source code) | $150,000 |
| Perpetual (with source code) | $500,000 |
| Customization | $1,500/man-month |

### Cloud SaaS

| Tier | Learners | Concurrent Users | Monthly |
|------|----------|-----------------|---------|
| Starter | 1,000 | 50 ccu | $3,000 |
| Growth | 10,000 | 300 ccu | $5,000 |
| Scale | 20,000 | 500 ccu | $10,000 |

## User types

Educational Organization · Enterprise · Learner · Content Creator · Mentor/Expert

## Case studies

### CodeLearn (FPT IS)
- 1M learners · 150K MAU · 50+ IT courses
- EduNext is the platform that powers CodeLearn's coding education product
- Confirms large-scale, production-grade deployment capability

### Kella English Center
- 100K learners · 5K MAU · IELTS preparation
- White-label deployment for a language center

## Positioning vs. other FPT education products

| Product | Vendor | Target | Model | Scale |
|---------|--------|--------|-------|-------|
| **EduNext** | FPT Software | Orgs/Enterprises (B2B LMS) | License + SaaS | 2M users (incl. CodeLearn) |
| [[CodeLearn]] | FPT IS | Developers/students (B2C) | Subscription | 1.28M users |
| [[VioEdu]] | FPT IS | K-12 students (B2C) | AI adaptive | 20M users |
| [[Meduverse]] | FPT IS | Primary school G1–6 | Game-first | Early pilot |

## Contact

- Sales: vietcv@fpt.com / +84 984 333 989
- Support: support@edunext.vn / +84 812 786 332
