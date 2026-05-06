---
title: FPT.QRYPTO Secure QR Code Whitepaper
type: source
tags: [fpt-is, qrypto, secure-qr, document-security]
created: 2026-04-13
updated: 2026-04-13
source_file: raw/raw/esign/4. Sales training/FPT-Secure-QR.pdf
---

## Summary

Whitepaper 24 slide về FPT.QRYPTO (còn gọi là Secure QR / mã QR an toàn) — giải pháp bảo mật tài liệu bằng mã QR được ký số. Whitepaper so sánh 3 phương pháp bảo mật tài liệu (chữ ký số, blockchain, mã QR an toàn) và kết luận Secure QR là giải pháp tối ưu nhất về chi phí và hiệu quả. Tài liệu viết bằng tiếng Anh, định hướng cho thị trường quốc tế hoặc khách hàng enterprise đa quốc gia.

Kiến trúc hệ thống gồm 2 thành phần: QRYPTO Generator (tạo mã QR có nhúng chữ ký số) và Validation Server. Xác minh hỗ trợ 3 kênh: web, mobile app, và RESTful API cho integration. Điểm quan trọng: QR code chứa toàn bộ thông tin cần thiết — không cần kết nối đến server để xác minh (khác với QR thông thường dùng URL). Sản phẩm hoạt động trên cả tài liệu vật lý lẫn điện tử.

## Key facts

- Tên sản phẩm: FPT.QRYPTO hoặc Secure QR; xác minh qua qrypto-verifier.fis.com.vn
- Kiến trúc: QRYPTO Generator + Validation Server
- 3 kênh xác minh: Web validation (không cần app) · Mobile app · RESTful API
- Không dùng URL link → tránh tấn công phishing; không cần duy trì DB riêng biệt
- Hoạt động offline (thông tin nhúng trong QR, không cần kết nối server)
- 6 ngành ứng dụng chính: Y tế điện tử, Nhân sự, Ngân hàng, Giáo dục, Chính quyền, Bảo hiểm
- Ví dụ 1: Secure QR trên bằng cấp/chứng chỉ — xác minh bằng app FPT Scan QR
- Ví dụ 2: Secure QR trên sao kê ngân hàng — không cần kết nối server khi quét
- Ví dụ 3: Secure QR trên hợp đồng bảo hiểm phương tiện
- Kết luận whitepaper: Secure QR = "the most efficient and cost-effective solution for document security"

## Key entities

[[FPT IS]], [[FPT.QRYPTO]]

## Key concepts

[[Digital Signature (Vietnam)]]

## Connections

- FPT.QRYPTO là sản phẩm trong hệ sinh thái [[FPT.eSign]]
- Sử dụng [[FPT.CA]] để tạo chữ ký số nhúng trong mã QR
- Khách hàng ngân hàng (sao kê) trùng với target của [[FPT.eSign]] và [[DIGICORE]]
- Khách hàng y tế (bệnh án, đơn thuốc điện tử) trùng mạng lưới [[Azladin]] và [[AZINSU]]

## My notes

Whitepaper này viết bằng tiếng Anh — phù hợp cho demo với khách hàng enterprise hoặc international. Không có pricing riêng cho QRYPTO. Là tài liệu kỹ thuật/whitepaper, không phải saleskit.
