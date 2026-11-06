# Hệ Thống Quản Lý Bộ Biểu Vị Trí Việc Làm (VTVL) - Trường THPT Phục Hòa

> Website quản lý, tra cứu và hiển thị trực quan toàn bộ **Bộ biểu Vị trí việc làm (kèm Hướng dẫn 07 & Nghị định số 232/NĐ-CP)** của **Trường Trung học Phổ thông Phục Hòa (Sở Giáo dục và Đào tạo tỉnh Cao Bằng)**.

---

## 📌 Tổng Quan Hệ Thống

Dữ liệu được chuẩn hóa và trích xuất từ file gốc: `30.10.2026 C3 Phục Hòa_Bo bieu VTVL (kèm HD 07).xlsx`.

- **Cơ quan chủ quản:** Sở Giáo dục và Đào tạo Cao Bằng
- **Đơn vị thực hiện:** Trường THPT Phục Hòa
- **Căn cứ pháp lý:** 
  - Nghị định số 232/NĐ-CP của Chính phủ
  - Tờ trình số 22/TTr-THPT ngày 08/10/2026
  - Quyết định số 1548/QĐ-SGD&ĐT của Sở GD&ĐT tỉnh Cao Bằng
- **Quỹ giờ chuẩn PP2:** `1.904 giờ/người/năm` (Chế độ làm việc 40 giờ/tuần)
- **Phương án nhân sự 2027:** `35 biên chế`

---

## 🚀 Các Tính Năng Chính

1. **📊 Bảng Điều Khiển Tổng Quan (Dashboard):**
   - Thống kê 14 Nhiệm vụ, 33 Công việc, 12 Vị trí việc làm, 35 Biên chế được giao.
   - Sơ đồ cơ cấu tổ chức phân cấp trực quan của nhà trường (Ban Giám hiệu, Khối Chuyên môn, Khối Văn phòng - Hỗ trợ).
   - Biểu đồ phân bổ nhân lực theo 3 nhóm (Lãnh đạo, Chuyên môn, Hỗ trợ).

2. **📋 Biểu C1 & C2 - Danh Mục Vị Trí Việc Làm & Bản Mô Tả Năng Lực:**
   - 12 Vị trí việc làm chuẩn hóa (Hiệu trưởng, Phó Hiệu trưởng, Tổ trưởng/Tổ phó CM, Giáo viên THPT, Giáo vụ, Thiết bị thí nghiệm, Y tế, Kế toán, Văn thư, Thư viện, Tư vấn học sinh).
   - Modal xem hồ sơ chi tiết từng vị trí: Trách nhiệm chính, năng lực chung, năng lực chuyên môn (Bậc 1 - Bậc 4), năng lực lãnh đạo, công việc trực thuộc và khối lượng giờ lao động.

3. **🎯 Biểu A1 - Danh Mục Nhiệm Vụ (14 Nhiệm vụ):**
   - Tra cứu nhiệm vụ kèm căn cứ, kỳ thực hiện, mở rộng accordion để xem trực tiếp các công việc trực thuộc.

4. **💼 Biểu A2 - Phân Rã Công Việc (33 Công việc):**
   - Phân rã sản phẩm đầu ra, đơn vị tính, tiêu chuẩn chất lượng và gắn mã VTVL chịu trách nhiệm.

5. **⏱️ Biểu B1 - Định Mức & Khối Lượng Thời Gian (33 Dòng):**
   - Số sản phẩm/năm, phút/SP đo thực tế, giờ sản phẩm, giờ bổ sung và tổng giờ lao động chuẩn. Cảnh báo dữ liệu 100% ĐẠT.

6. **⚖️ Biểu C3 - Xác Định Nhu Cầu Nhân Lực & Công Cụ Mô Phỏng:**
   - Đối chiếu phương pháp PP1 (Quy định), PP2 (Giờ ròng ÷ 1.904h), PP3 (Thực tế).
   - **Interactive Demand Simulator:** Cho phép điều chỉnh số giờ thực tế để tính toán biên chế quy đổi theo công thức chuẩn.

7. **👥 Biểu D1 & D2 - Hiện Trạng & Phương Án Bố Trí Nhân Lực 2027:**
   - Biểu D1: 12 mã nguồn lực (LK-NL-001 đến LK-NL-012) thuộc Sở GD&ĐT Cao Bằng.
   - Biểu D2: Phương án phân bổ chi tiết 35 biên chế cho năm 2027.

8. **📖 Cẩm Nang Tra Cứu & Hướng Dẫn Kèm Theo HD 07:**
   - Hướng dẫn sử dụng bộ biểu (`HUONG_DAN` - 41 mục).
   - Hướng dẫn điền từng cột của các biểu (`HD_DIEN_BIEU`).
   - Quy tắc đặt mã (`QUY_TAC_MA`).
   - Quy trình 7 bước thao tác nhanh (`THAO_TAC_NHANH`).
   - Tham số dùng chung (`DM_THAM_SO`).

9. **📥 Xuất File Excel Trọn Bộ:**
   - Xuất dữ liệu sạch và chính xác toàn bộ 10 sheets thành file `.xlsx` trực tiếp trên trình duyệt.

---

## 🛠️ Công Nghệ Sử Dụng

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Lucide Icons**
- **SheetJS (xlsx)**

---

## 💻 Cài Đặt & Chạy Cục Bộ

```bash
# Cài đặt dependencies
npm install

# Khởi chạy môi trường phát triển
npm run dev

# Đóng gói sản phẩm
npm run build
```
