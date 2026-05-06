---
title: CodeLearn Introduction Saleskit v3.1
type: source
tags: [codelearn, edtech, coding, elearning, fpt-software, online-learning, vietnam]
created: 2026-04-13
updated: 2026-04-13
source_file: raw/raw/codelearn/3. Saleskit/EN_CodeLearn_Introduction_v3.1.pdf
---

## Summary

This is the CodeLearn English introduction saleskit (29 slides, v3.1, ~late 2024), presenting CodeLearn as FPT Software's online coding learning and contest platform at codelearn.io. The deck covers pain points, platform architecture, feature walkthroughs (learning, training, fights, challenges, discussion, sharing), content library, user statistics, university partnerships, events, and an upcoming plan for expansion.

CodeLearn serves two market segments simultaneously: individual developers who want structured coding practice, and organizations seeking to reduce IT training costs and run internal skill assessments. It is a full-stack LMS with a proprietary automatic code evaluation engine supporting 8 programming languages, built entirely on AWS.

As of the analytics data shown (Nov 2023 – Nov 2024), CodeLearn had 1.28M active users, 96% from Vietnam. Japan, US, Singapore, and South Korea are small but growing international segments — with Japan explicitly named as a target for upcoming contests.

## Key facts

**Product definition:**
- Platform: codelearn.io
- Presenter: Cao Van Viet (contact: vietcv@fsoft.com.vn — FPT Software)
- Address: 17 Duy Tan street, Cau Giay District, Hanoi City
- Phone: +84 984 333 989
- Target: Individual developers + Organizations

**Pain points addressed:**

| Segment | Pain points |
|---|---|
| **Individual** | Less practice, more theory; weak on algorithms and testing; no IT community support; no contest venue |
| **Organization** | Lack of IT human resources; high training costs; siloed skill assessment; no internal IT contests |

**5-pillar solution:**
1. **System** — Online platform + automatic scoring engine
2. **Content** — Courses, exercises, tests
3. **Contributors** — Community-built and reviewed content
4. **Events** — IT learning & sharing community (CodeWar, contests)
5. **Rewards** — Incentivize contributors and participants

**Technical architecture:**
- App server: C#, ASP.NET MVC, Orchard CMS on EC2 Windows Server (8 vCPUs, 2.2 GHz, 32 GiB; 1 instance, 300ccu performance)
- Code compiler: Spring Boot + Tomcat on EC2 Ubuntu (auto-scale; Docker containers per language; 15ccu/instance)
- SQL compiler: Spring Boot + Tomcat on EC2 Ubuntu (auto-scale; 100ccu/instance)
- Notify service: Spring Boot + Tomcat on EC2 Ubuntu
- Database: RDS MySQL + PostgreSQL 12.5
- Tech stack: Microsoft .NET · Orchard · jQuery · Bootstrap · AWS · Cloudflare · Docker · Facebook/Google auth · reCAPTCHA
- Additional features: Multi-language (EN/VI), auto-scale, static code analysis, skill evaluation

**Supported programming languages (code judge):**
C# · Java · JavaScript · C++ · Python2 · Python3 · Go · C

**9 content activity types:**
Reading · Video · Assignment · Quiz · SCORM · Attachment · Feedback · Poll · Code

**Content library:**
- **Courses**: 20+ (C++, C#, Java, JS, Python, Algorithm, Database, Software/Hardware/Testing basics; upcoming: HTML/CSS, Golang)
- **Training tasks**: 1,000+ (700 algorithm · 200 programming language · 100 database; 700 easy + 300 medium)
- **Challenges**: 17 hard (algorithm + performance optimization; 1 new every month or 2 weeks)

**Learning features:**
- Learning statistics + recommendation engine
- Certificates: issued at 80% course completion; verifiable online; signed by Chief Delivery Officer (Do Van Khac)
- Training: open coding challenges; 341,587 submissions; 14,994 active users (at slide date)
- Fights: timed programming contests (public/private); leaderboard with score/working time/execution time
- Challenge: algorithm optimization battles; ranked by score + execution time + submission count
- Discussion forum: community Q&A
- Sharing: blog posts (role-based; admin assigns author role)
- Chat & Chat GPT: direct messaging between users + GPT assistant integration

**Admin/org features:**
- User management: add, remove, change role; view all learning progress
- Class management: per-student progress by chapter (% complete + total score); export assignments
- Statistics dashboard: users online, submissions, certifications count, training task completion trends

**User statistics (Nov 6, 2023 – Nov 6, 2024):**

| Metric | Value |
|---|---|
| Total active users | 1,285,255 |
| New users | 989,434 |
| Interactive sessions | 2,921,954 |
| Interaction rate | 64.95% |

**Top countries by active users:**

| Rank | Country | Active users |
|---|---|---|
| 1 | Vietnam | 1,233,701 |
| 2 | Japan | 9,453 |
| 3 | United States | 8,758 |
| 4 | Singapore | 5,524 |
| 5 | South Korea | 3,265 |

**University co-operations (2019–2020):**
- Funix University (7/2019)
- ITIM — Institute of Technology International Manpower (11/2019)
- FPT Polytechnic (12/2019)
- Thai Nguyen University (1/2020)
- Hung Yen University of Technology and Education (1/2020)
- BachKhoa Aptech (2/2020)

**Events:**
- Nation-wide CodeWar (prize money visible: 170,000,000 VND)
- Technology Arena
- CodeWar in 3 regions
- CodeWar Junior (for school-age students)

**4 strengths:**
1. System: Visualize · Accurate · Strong · Optimal
2. Contents: Diverse · Rich · Detailed
3. Events: Interesting · Fascinating · Spreading
4. Team: Enthusiastic · High quality

**Values:**
- For individuals: Learn and practice programming skills easily and quickly
- For organizations: Reduce costs and increase quality of internal training
- For society: Solve the problem of lack of IT human resources

**Upcoming plan:**
- System: Improve interface & performance; student management; personalization
- Content: Upgrade current courses; build new courses
- Delivery: Deploy to schools and companies; pilot entrance/exit exam
- Events: Weekly online events; nationwide contests; contests for students in Japan

## Key entities

[[CodeLearn]], [[FPT Corporation]]

## Key concepts

[[Digital Transformation (Vietnam)]]

## Connections

- CodeLearn is an FPT Software product (vietcv@fsoft.com.vn) — distinct from FPT IS but part of the broader FPT Corporation ecosystem; FPT Polytechnic is listed as a university co-operation partner
- 1.28M active users makes CodeLearn one of the largest FPT consumer-facing digital platforms documented in this wiki
- Japan ranked #2 country (9,453 users) and explicitly targeted for future contests — potential Japan market entry signal for FPT Software
- B2B angle (reduce training costs, internal assessments) positions CodeLearn as an enterprise HR/training tool alongside FPT IS products like akaMES (which also targets enterprise training use cases via VR — see [[akaVerse]])
- FPT Polytechnic partnership confirms FPT internal ecosystem alignment

## My notes

(Empty until filled in during ingest discussion)
