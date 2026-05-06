---
title: FPT.eSign Internal Sales Training (For-Internal)
type: source
tags: [fpt-is, esign, digital-signature, ca, tsa, qrypto]
created: 2026-04-13
updated: 2026-04-13
source_file: raw/raw/esign/4. Sales training/FPT.eSign_For-Internal.pdf
---

## Summary

Tài liệu đào tạo nội bộ 75 slide về toàn bộ hệ sinh thái ký số từ xa của FPT IS, bao gồm 4 sản phẩm: FPT.CA (Certificate Authority), FPT.eSign (ký số từ xa), FPT.QRYPTO (mã QR an toàn), và FPT.TSA (Timestamp Authority). Deck được kết cấu thành 7 phần: tổng quan thị trường, chi tiết từng sản phẩm, case study, phân khúc khách hàng, dịch vụ triển khai, chính sách giá, và chính sách sales.

Thị trường ký số từ xa Việt Nam có 10 nhà cung cấp được cấp phép. Nền tảng pháp lý là Luật 20/2023/QH15 (hiệu lực 01/07/2024) và NĐ 23/2025/NĐ-CP. Case study nổi bật là FE Credit: tích hợp FPT.eSign giảm thời gian ký hợp đồng từ 2–3 ngày xuống còn 10 phút, tỷ lệ thành công từ ~20% lên 99%, phủ 13.000 đại lý. Khách hàng FPT.TSA bao gồm Viettel-CA, CMC CA, VNPAY CA, CeCA, MISA, mobiCA.

Pricing là thông tin đặc biệt có giá trị: mô hình tính theo số lượng chữ ký/tháng (lũy kế bậc thang từ 850–2.350 VNĐ/chữ ký cho nội bộ; 9.000–22.000 VNĐ/chữ ký cho đối tác cá nhân bên ngoài) hoặc gói trọn năm. Thời gian triển khai tiêu chuẩn: 2–4 tuần; yêu cầu KYC trước khi onboard.

## Key facts

- Hệ sinh thái gồm 4 sản phẩm: FPT.CA · FPT.eSign · FPT.QRYPTO · FPT.TSA
- Thị trường: 10 nhà cung cấp ký số từ xa được cấp phép tại Việt Nam
- Pháp lý: Luật 20/2023/QH15, NĐ 23/2025/NĐ-CP
- FPT.CA: FIPS 140-2 Level 4 HSM, cấp phép từ 2010, 100,000+ khách hàng
- FPT.TSA: cấp phép 07/06/2023; chuẩn IETF RFC 3161, RFC 5816; lưu trữ 10/20/50 năm hoặc vĩnh viễn
- Case study FE Credit: 13.000 đại lý; ký từ 2–3 ngày → 10 phút; thành công 20% → 99%
- Khách hàng eSign: FE Credit, HDBank, TPBank, VIB, MoMo, KBank và 15+ tổ chức tài chính
- Khách hàng TSA: Viettel-CA, CMC CA, VNPAY CA, EFY-CA, BkavCA, CeCA, MISA, mobiCA
- Pricing nội bộ: 850–2.350 VNĐ/chữ ký (tháng); hoặc gói năm 750–850 VNĐ/chữ ký
- Pricing bên ngoài (cá nhân): 9.000–22.000 VNĐ/chữ ký
- Deployment: 2–4 tuần; 6 bước tiếp cận khách hàng
- Mục tiêu đến 2030: mỗi người dân Việt Nam có 1 chữ ký số từ xa

## Key entities

[[FPT IS]], [[FPT.eSign]], [[FPT.CA]], [[FPT.QRYPTO]], [[FPT.TSA]]

## Key concepts

[[Digital Signature (Vietnam)]]

## Connections

- Là tài liệu training nội bộ toàn diện nhất cho hệ sinh thái [[FPT.eSign]]
- FPT.CA là CA layer cấp chứng thư số cho [[FPT.eSign]]
- [[FPT.QRYPTO]] (mã QR an toàn) là sản phẩm bổ sung cho tài liệu vật lý + điện tử
- [[FPT.TSA]] bổ sung dấu thời gian để kéo dài hiệu lực pháp lý của chữ ký số
- [[DIGICORE]] là nền tảng tổng hợp CA-agnostic đứng phía trên layer này

## My notes

Deck đầy đủ và rất chi tiết — đây là nguồn chính yếu nhất về hệ sinh thái eSign. Có đầy đủ pricing (rất hiếm trong tài liệu FPT). Không có thông tin giá cho FPT.TSA và FPT.QRYPTO riêng lẻ — chỉ có pricing cho FPT.eSign. Sales policy EP CA = x% EBC (10% new, 5% existing) theo MBF 2024 general policy.
