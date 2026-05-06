---
title: CodeLearn
type: entity
tags: [codelearn, edtech, coding, elearning, fpt-software, online-learning, vietnam]
created: 2026-04-13
updated: 2026-04-13
source_count: 1
po_email: VietCV@fpt.com
---

## Overview

**CodeLearn** is FPT Software's online coding learning and competition platform at **codelearn.io**. It provides structured programming education (courses, exercises, contests) for both individual developers and organizations seeking to upskill or assess their IT workforce.

Contact: vietcv@fsoft.com.vn · codelearn.io · +84 984 333 989
Address: 17 Duy Tan street, Cau Giay District, Hanoi City

CodeLearn sits in the FPT ecosystem alongside [[FPT IS]] products but is operated by FPT Software. It is a B2C/B2B hybrid: consumer-facing for individual learners, enterprise-facing for internal training programs.

## Target users

- **Individual developers** — students and working developers who want structured coding practice, community, and contest participation
- **Organizations** — companies needing cost-efficient IT training, skill assessment tools, and internal coding competitions

## Platform architecture — 5 pillars

| Pillar | Description |
|---|---|
| **System** | Online platform + automatic code scoring engine |
| **Content** | Courses, exercises, tests, coding tasks |
| **Contributors** | Community members who build and review content |
| **Events** | IT learning & sharing community; coding contests |
| **Rewards** | Incentives for contributors and contest participants |

## Technical stack

- **App server**: C#, ASP.NET MVC, Orchard CMS on AWS EC2 Windows Server (8 vCPUs, 32 GiB RAM; 300ccu)
- **Code compiler**: Spring Boot + Tomcat + Docker containers per language on EC2 Ubuntu (auto-scale; 15ccu/instance)
- **SQL compiler**: Spring Boot + Tomcat on EC2 Ubuntu (auto-scale; 100ccu/instance)
- **Database**: AWS RDS (MySQL + PostgreSQL 12.5)
- **Frontend/infra**: jQuery · Bootstrap · Cloudflare · Facebook/Google auth · reCAPTCHA
- **Additional**: Multi-language (EN/VI) · Auto-scale · Static code analysis · Skill evaluation

**Supported languages (code judge):** C# · Java · JavaScript · C++ · Python2 · Python3 · Go · C

## Features

### Learning
- 9 activity types: Reading · Video · Assignment · Quiz · SCORM · Attachment · Feedback · Poll · Code
- Learning statistics + AI-recommended courses
- Certificates of completion (issued at 80% task completion; verifiable online; signed by Chief Delivery Officer)
- Chat & Chat GPT: direct messaging between users + embedded GPT assistant

### Training
- 1,000+ coding tasks with automatic evaluation
- Task types: Easy and Medium difficulty
- Server-side code evaluation with test cases; learners select programming language

### Fights (Contests)
- Timed programming competitions (public and private)
- Leaderboard: score · working time · execution time
- Admin creates contests; "Sasuke Codewar" is the flagship weekly series

### Challenges
- Algorithm optimization battles
- Ranked by score + execution time + number of submissions
- 17 hard challenges available; 1 new challenge every month or 2 weeks

### Community
- **Discussion forum**: Q&A threads with upvoting
- **Sharing**: Blog post creation (role-based; admin-assigned author role)

### Admin/B2B tools
- User management: add, remove, change role; view all individual learning progress
- Class management: per-student chapter completion % and scores; assignment export
- Statistics dashboard: users online, submissions, certification counts, training task distribution

## Content library

| Category | Count | Details |
|---|---|---|
| Courses | 20+ | C++, C#, Java, JS, Python, Algorithm, Database, Software/Hardware/Testing basics |
| Training tasks | 1,000+ | 700 algorithm · 200 programming language · 100 database; 700 easy + 300 medium |
| Challenges | 17 | Algorithm + performance optimization; 1 new per month or 2 weeks |

Upcoming: HTML/CSS, Golang courses

## User scale (Nov 2023 – Nov 2024)

| Metric | Value |
|---|---|
| Total active users | 1,285,255 |
| New users | 989,434 |
| Interactive sessions | 2,921,954 |
| Interaction rate | 64.95% |

**Top countries:**

| Rank | Country | Active users |
|---|---|---|
| 1 | Vietnam | 1,233,701 (96%) |
| 2 | Japan | 9,453 |
| 3 | United States | 8,758 |
| 4 | Singapore | 5,524 |
| 5 | South Korea | 3,265 |

## University partnerships

| Institution | Date |
|---|---|
| Funix University | 7/2019 |
| ITIM — Institute of Technology International Manpower | 11/2019 |
| FPT Polytechnic | 12/2019 |
| Thai Nguyen University | 1/2020 |
| Hung Yen University of Technology and Education | 1/2020 |
| BachKhoa Aptech | 2/2020 |

## Events

- **Nation-wide CodeWar** — flagship annual national coding championship (prize: 170,000,000 VND)
- **CodeWar in 3 regions** — regional competitions across Vietnam
- **CodeWar Junior** — competition for school-age students
- **Technology Arena** — tech event

## Values & positioning

| Segment | Value delivered |
|---|---|
| Individuals | Learn and practice programming skills easily and quickly |
| Organizations | Reduce training costs; increase quality of internal training |
| Society | Address Vietnam's shortage of IT human resources |

## Upcoming plan

- **System**: Improve interface & performance; student management; personalization
- **Content**: Upgrade and expand course library; new courses (HTML/CSS, Golang)
- **Delivery**: Deploy to schools and companies; pilot entrance/exit exams
- **Events**: Weekly online events; nationwide contests; contests for students in Japan (international expansion signal)

## Sources

[[2024-11-01_codelearn-saleskit]]

## Related

[[FPT Corporation]], [[FPT IS]], [[Digital Transformation (Vietnam)]]
