---
title: Digital Signature (Vietnam)
type: concept
tags: [digital-signature, esign, ca, legal, fintech, vietnam]
created: 2026-04-13
updated: 2026-04-13
source_count: 1
---

## Định nghĩa

**Chữ ký số (Digital Signature)** là giải pháp xác thực điện tử dựa trên cơ sở hạ tầng khóa công khai (PKI), cung cấp 4 đặc tính pháp lý thiết yếu:
- **Tính xác định nguồn gốc** — Đảm bảo danh tính người ký
- **Tính toàn vẹn** — Nội dung văn bản không thể bị chỉnh sửa sau khi ký
- **Tính không thể phủ nhận** — Người ký không thể từ chối hành vi ký
- **Tính pháp lý** — Tài liệu điện tử có ký số có giá trị pháp lý tương đương văn bản giấy ký tay

## Hành lang pháp lý Việt Nam

| Năm | Văn bản |
|---|---|
| 2001 | Luật mẫu về Chữ ký điện tử |
| 2005 | Luật giao dịch điện tử 51/2005/QH11 |
| 2007 | NĐ 26/2007/NĐ-CP quy định chi tiết về chữ ký số |
| 2018 | NĐ 130/2018/NĐ-CP — chứng thư số và dịch vụ chứng thực chữ ký số |
| 2019 | Thông tư 16/2019/TT-BTTTT — ký số trên thiết bị di động và ký số từ xa |
| 2024 | **Luật giao dịch điện tử 20/2023/QH15** (hiệu lực 01/07/2024) |
| 2025 | NĐ 23/2025/NĐ-CP |

Mục tiêu quốc gia: Mỗi người dân Việt Nam có 1 chữ ký số từ xa vào 2030.

## Phân loại: USB Token vs Remote Signing

| Tiêu chí | USB Token | Remote Signing (ký số từ xa) |
|---|---|---|
| Lưu trữ | Thiết bị vật lý | HSM trên cloud (FPT.CA) |
| Tiện dụng | Phải mang theo token | Chỉ cần OTP/Passcode qua internet |
| Ứng dụng | Windows máy tính | Đa thiết bị, đa ứng dụng |

## Nhà cung cấp Remote Signing tại Việt Nam (10 được cấp phép)

BkavCA, CA2, EasyCA, **FPT CA**, IntrustCA, MISA, TrustCA (SAVIS), Viettel-CA, VNPAY CA, VNPT CA

## Ứng dụng theo ngành

- **Tài chính – Ngân hàng**: Mở tài khoản, hợp đồng vay, thay đổi điều khoản dịch vụ
- **Bảo hiểm**: Ký hợp đồng bảo hiểm, đóng phí, giải quyết bồi thường
- **Y tế**: Bệnh án điện tử, đơn thuốc điện tử
- **Hành chính**: Chứng thực điện tử, hộ khẩu, cư trú điện tử
- **Doanh nghiệp**: Hợp đồng lao động, văn bản nội bộ, hợp đồng thương mại

## Sản phẩm liên quan trong vault

- [[FPT.eSign]] — Hệ sinh thái ký số từ xa của FPT IS (FPT.CA + FPT.eSign + FPT.QRYPTO + FPT.TSA)
- [[Kyta Platform]] — Kyta Signature module; TSA + LTV + FPT.CeCA; certified by Ministry of Industry & Trade; targets ALM/agreement use cases across industries; Korea PIPA-compliant
