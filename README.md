# 🚀 Trang Web Portfolio Cá Nhân Song Ngữ - Nguyễn Đình Trường Giang

Chào anh Giang! Đây là mã nguồn hoàn chỉnh cho trang web Portfolio cá nhân chuyên nghiệp của anh. Trang web này được thiết kế và lập trình sẵn sàng để chạy cực kỳ mượt mà, hỗ trợ song ngữ (tiếng Việt & tiếng Anh), giao diện Dark Mode phong cách Glassmorphism công nghệ cao và tối ưu hoàn toàn cho việc lưu trữ miễn phí trên **GitHub Pages**.

---

## 📂 Cấu trúc mã nguồn

Mã nguồn được phân tách khoa học và chuẩn hóa:
- **`index.html`**: Định nghĩa cấu trúc chuẩn SEO, nhúng Google Fonts và FontAwesome Icons công nghệ.
- **`style.css`**: Hệ thống biến màu sắc neon (Teal & Cyan), layout tương thích 100% với điện thoại, máy tính bảng và máy tính.
- **`script.js`**: Bản dịch song ngữ Anh-Việt tích hợp công cụ chuyển đổi nhanh không tải lại trang và hiệu ứng gõ chữ tiêu đề động.
- **`profile_avatar.png`**: Ảnh đại diện mẫu mang phong cách kỹ sư công nghệ.
- **`hero_bg.png`**: Hình nền nghệ thuật với các bo mạch, cảm biến đặc trưng ngành điện - tự động hóa.

---

## 🛠️ Hướng dẫn Kiểm tra cục bộ (Local Test)

Để mở và xem trang web ngay lập tức trên máy tính của anh:
1. Nhấp đúp chuột trực tiếp vào file `index.html` trong thư mục này để mở bằng Chrome, Edge, hoặc Firefox.
2. Hoặc, nếu anh đang mở thư mục này trong trình soạn thảo như VS Code, anh có thể sử dụng extension **Live Server** để chạy trang web như một máy chủ cục bộ.

---

## 🌐 Hướng dẫn Đưa lên GitHub & Kích hoạt GitHub Pages (Có Public Link)

Chỉ với 5 bước đơn giản dưới đây, trang web của anh sẽ có một đường link truy cập công khai trên toàn cầu (ví dụ: `https://[ten-tai-khoan-github].github.io/[ten-kho-luu-tru]`).

### Bước 1: Tạo tài khoản GitHub (Nếu chưa có)
- Truy cập [GitHub.com](https://github.com/) và đăng ký một tài khoản miễn phí.

### Bước 2: Tạo Kho lưu trữ mới (New Repository)
1. Đăng nhập vào GitHub, chọn nút **New** (hoặc dấu cộng `+` ở góc trên cùng bên phải -> **New repository**).
2. Điền thông tin:
   - **Repository name**: Nhập tên kho lưu trữ (Ví dụ: `portfolio` hoặc `portfolio-giang`).
   - **Public/Private**: Chọn **Public** (Bắt buộc phải chọn Public thì mới dùng được tính năng GitHub Pages miễn phí).
   - *Không tích chọn các ô tự tạo README, .gitignore hay License vì ta đã có sẵn mã nguồn*.
3. Bấm nút **Create repository**.

### Bước 3: Đẩy mã nguồn lên GitHub (Upload Files)
Anh có thể đẩy mã nguồn lên bằng 2 cách:

#### 👉 Cách A: Dùng giao diện web kéo thả (Dành cho người mới - Dễ nhất!)
1. Tại trang Repository mới tạo, nhấp vào dòng chữ **"uploading an existing file"** nằm ở cuối phần gợi ý.
2. Kéo toàn bộ các tệp tin và hình ảnh trong thư mục này (`index.html`, `style.css`, `script.js`, `README.md`, `profile_avatar.png`, `hero_bg.png`) thả vào khung upload trên web.
3. Chờ các tệp tải lên hoàn tất, lăn xuống dưới cùng điền tiêu đề commit (Ví dụ: `Upload mã nguồn portfolio`) rồi bấm **Commit changes**.

#### 👉 Cách B: Dùng Git Command Line (Nếu anh đã cài Git trên máy)
Mở Terminal/PowerShell tại thư mục này và chạy các lệnh:
```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/[TÊN-TÀI-KHOẢN-GITHUB]/[TÊN-REPO-CỦA-ANH].git
git push -u origin main
```

### Bước 4: Kích hoạt GitHub Pages để nhận Link công khai
1. Tại trang Repository của anh trên GitHub, nhấp vào tab **Settings** (Hình bánh răng ở thanh menu phía trên).
2. Ở danh sách menu bên trái, lăn xuống và chọn mục **Pages**.
3. Tại phần **Build and deployment** -> **Branch**:
   - Chuyển từ `None` thành **`main`** (hoặc `master`).
   - Nhánh thư mục bên cạnh giữ nguyên là **`/ (root)`**.
4. Nhấn nút **Save**.

### Bước 5: Thưởng thức thành quả!
- Đợi khoảng 1 đến 2 phút để GitHub tự động xây dựng trang web.
- F5 lại trang Settings Pages, anh sẽ thấy một khung màu xanh lá cây hiện lên ở đầu trang kèm theo đường link công khai của anh dạng:
  👉 **`https://[username].github.io/[repo-name]/`**
- Anh có thể chia sẻ đường link này vào CV, gửi cho bạn bè, nhà tuyển dụng hoặc đối tác!

---

## 🎨 Hướng dẫn Thay đổi Thông tin theo ý muốn

- **Thay đổi Ảnh Đại Diện**: Chỉ cần đặt tên bức ảnh chân dung cá nhân của anh là `profile_avatar.png` và ghi đè (replace) vào tệp ảnh đại diện mẫu hiện tại là trang web sẽ tự cập nhật!
- **Thay đổi/Bổ sung Dự án thực tế**: Mở tệp `index.html` bằng Notepad hoặc trình biên soạn code bất kỳ, tìm đến thẻ `<section id="projects">` và chỉnh sửa các tiêu đề thẻ dự án mẫu cùng phần mô tả theo ý muốn của anh.
- **Thay đổi bản dịch tiếng Anh & tiếng Việt**: Mở tệp `script.js`, toàn bộ câu chữ trên trang web nằm ở khối dữ liệu `const translations = { ... }` ở đầu tệp. Anh chỉ cần sửa nội dung trong các dấu ngoặc kép `"..."` là trang web sẽ tự chuyển ngữ chính xác!

*Chúc anh sớm có một trang portfolio cực kỳ ưng ý và gặt hái thêm nhiều thành công tại Riken Viet!* 🎉
