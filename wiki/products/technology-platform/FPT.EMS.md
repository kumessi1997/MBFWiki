---
title: FPT.EMS
type: entity
tags: [fpt-is, erp, enterprise-software, vietnam]
created: 2026-04-13
updated: 2026-04-13
source_count: 1
po_email: AnhNQ5@fpt.com
---

## Overview

**FPT.EMS** (Hệ thống Phần mềm Quản lý Tổng thể Doanh nghiệp) là giải pháp **ERP nội địa** do [[FPT IS]] phát triển, phục vụ doanh nghiệp vừa và lớn tại Việt Nam. Tên viết tắt EMS = Enterprise Management System.

Ba trụ cột định vị:
- **Quản lý tổng thể** — xuyên suốt tất cả hoạt động của doanh nghiệp
- **Xử lý nhiều nghiệp vụ** — chức năng hệ thống, báo cáo hệ thống, báo cáo quản trị, phê duyệt
- **Cho nhiều đối tượng** — Lãnh đạo, Cán bộ, Nhân viên

---

## Kiến trúc hệ thống

| Layer | Thành phần | Mô tả |
|-------|-----------|-------|
| Giao diện Web | HTTPS (Manager/Admin) | Quản trị, phê duyệt |
| Giao diện Web | LAN (Users) | Nghiệp vụ hàng ngày |
| WEB (Approval) | Absence Register, Approving, Application Search, Approval History | Luồng phê duyệt online |
| PDA (Inventory) | Login, Main Screen, Issue, Transfer Warehouse, Stocktaking, Lot Search | Quản lý kho bằng thiết bị di động |
| WEB API | Middleware layer | Tích hợp với hệ thống khác |
| Support App | Email, Other systems | Thông báo và tích hợp ngoài |
| System Mgmt | Authentication, Users, Permissions | Bảo mật và phân quyền |
| Database | Data + Report DB | Tách biệt DB dữ liệu và báo cáo |

---

## Các phân hệ chính

### 1. Quản lý Mua hàng (Purchasing)

Quy trình: Phiếu nhu cầu vật tư → Duyệt phiếu nhu cầu → Báo giá → Cập nhật bảng giá → Chọn nhà cung cấp → Đơn hàng (mua trong nước / nhập khẩu + tờ khai hải quan) → Duyệt đơn hàng → Mua hàng → Nhận hàng → Kho hàng → Công nợ phải trả → Đóng đơn hàng → Đóng phiếu nhu cầu vật tư

Chức năng trong hệ thống: Application for Order, Application for Payment, Delivery Tracking

### 2. Quản lý Bán hàng (Sale)

Quy trình: Khách hàng → Bộ phận bán hàng → Phiếu đặt hàng → Đơn hàng → Đồng ý đơn hàng → Kho hàng → Giao hàng → Hoá đơn → Khách hàng; song song: Công nợ phải thu → Đóng đơn hàng → Đóng phiếu đặt hàng

Chức năng: Delivery Order, Despatch Note, VAT Invoice, Sales Discount, Transfer to Accounting

### 3. Quản lý Sản xuất (Manufacture)

Quy trình: Đề nghị sản xuất → Kế hoạch sản xuất → Kiểm tra NVL → Lệnh sản xuất → Xuất kho NVL → Sản xuất → Nhập kho thành phẩm → Tính giá thành → Đóng lệnh sản xuất → Đóng kế hoạch sản xuất

Chức năng: Production Plan, Production Request, KCS Material, Finished Products, Monitoring the Production Process

### 4. Quản lý Kho (Inventory)

- Nhập kho / Xuất kho / Điều chuyển kho
- Quản lý serial, barcode
- Quản lý lô (lot management)
- Tính giá: theo lô, trung bình, **FIFO**, **FILO**
- Báo cáo: nhập kho, xuất kho, tồn kho

Chức năng: Req. for Order, Receiving Note, Despatch Note, Stocktaking, Lock Transaction, Transfer Note

### 5. Quản lý Tài sản Cố định & Công cụ Dụng cụ (TSCĐ-CCDC)

Vòng đời: Thông tin TSCĐ → Tài sản cố định → Xuất sử dụng → [Điều chỉnh Nguyên giá/Khấu hao | Khấu hao - Phân bổ | Điều chuyển | Thanh lý] → Báo cáo TSCĐ

Chức năng: Receipt, Issue, Transfer, Repair, Depreciation, Recuperating, Liquidating

### 6. Quản lý Tài chính Kế toán (Accounting)

| Module | Nội dung |
|--------|---------|
| Kế toán tiền mặt | Cash - Bank |
| Kế toán ngân hàng | Bank accounting |
| Kế toán phải thu | Accounts Receivable |
| Kế toán phải trả | Accounts Payable |
| Kế toán tổng hợp | General Accounting |
| Kế toán quản trị | Management Accounting |
| Báo cáo | Báo cáo tài chính + Báo cáo quản trị |

---

## Hiệu quả mang lại (7 điểm)

1. Chuẩn hóa quy trình và kiểm soát toàn bộ hoạt động bằng phần mềm
2. Phân quyền dữ liệu theo phòng ban và bảo mật dữ liệu
3. Cung cấp đa dạng báo cáo theo nhu cầu doanh nghiệp
4. Hỗ trợ báo cáo online — lãnh đạo theo dõi tiện lợi và nhanh chóng
5. Phê duyệt online chứng từ mua hàng và đề nghị thanh toán tập trung
6. Dễ dàng tích hợp với nhiều hệ thống khác
7. Xây dựng trên công nghệ hiện đại, dễ nâng cấp và cải tiến trong tương lai

---

## Quy trình triển khai & Bảo hành

**5 giai đoạn triển khai:**
1. Lập kế hoạch và khởi động dự án
2. Khảo sát yêu cầu người dùng
3. Phân tích yêu cầu người dùng
4. Thiết kế / Lập trình / Test
5. Triển khai & Hoàn thiện

**Thời gian chuẩn: ~20 tuần**

**Bảo hành:**
- Thời gian: 12 tháng kể từ ngày nghiệm thu hệ thống
- Phản hồi hỗ trợ: trong vòng **1 ngày làm việc** kể từ khi nhận yêu cầu chính thức (văn bản hoặc email)

---

## Khách hàng tiêu biểu

| Khách hàng | Ngành |
|-----------|-------|
| Ngân hàng TMCP Bản Việt (Viet Capital Bank) | Ngân hàng |
| Bank of Tokyo-Mitsubishi UFJ | Ngân hàng |
| Công ty Thép Nguyễn Minh | Sản xuất & Kinh doanh Thép |
| Công ty TNHH Thép Vina Kyoei | Sản xuất Thép |
| Công ty PLUS Việt Nam | Sản xuất SP Văn Phòng |
| Công ty Vàng bạc Đá quý Sài Gòn (SJC) | Kinh doanh Vàng bạc |
| Liên doanh Dầu khí Việt – Xô (Vietsovpetro) | Dầu khí |
| TCT CP Dịch vụ Kỹ thuật Dầu khí Việt Nam (PTSC) | Dầu khí |
| Công ty Tàu Dịch vụ Dầu khí (PTSC Marine) | Dầu khí |
| Bệnh viện Chợ Rẫy | Bệnh viện |
| Bệnh viện Đa khoa Quốc tế Vinmec | Bệnh viện |
| Bệnh viện Quốc tế Thành Đô | Bệnh viện |

> [!NOTE]
> Không có case study định lượng (ROI, tiết kiệm chi phí cụ thể) trong tài liệu này. Danh sách khách hàng chỉ nêu tên và ngành, không có thông tin triển khai chi tiết.

---

## Vị trí trong hệ sinh thái FPT IS

- FPT.EMS là sản phẩm ERP nội địa — cạnh tranh với SAP, Oracle ERP tại phân khúc doanh nghiệp Việt Nam vừa và lớn
- Phân hệ Sản xuất của FPT.EMS (kế hoạch, lệnh sản xuất, giá thành) bổ sung cho [[akaMES]] ở lớp shopfloor/MOM — hai sản phẩm có thể triển khai song song
- Khách hàng y tế (Vinmec, Chợ Rẫy) trùng với mạng lưới của [[Azladin]] — tiềm năng cross-sell
- Khách hàng dầu khí (Vietsovpetro, PTSC) là phân khúc công nghiệp nặng — trùng target của [[akaMES]]
