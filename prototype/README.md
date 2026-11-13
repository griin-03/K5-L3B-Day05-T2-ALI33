# Prototype · T2 Giáo dục

**Đã có bản bấm được:** [index.html](index.html). Hai màn hình: **Trợ lý học bài** và **Hàng chờ TA**. Phụ trách TV3: Lê Thanh Tùng — 2A202603819; Codex hỗ trợ triển khai và kiểm tra.

## Mở demo, không cần deploy

Tải repo về, mở `prototype/index.html` bằng Chrome, Edge hoặc Safari. Giữ cùng thư mục với `styles.css`, `fixtures.js`, `app.js`. Không cần npm, backend hay API key. Trên Mac, từ thư mục repo có thể chạy:

```bash
open prototype/index.html
```

Trang HTML trên GitHub hiển thị source; cần tải file hoặc repo để chạy. Repo này chưa có website deploy.

## Bấm demo trong khoảng 3 phút

1. **Làm lại demo** để bắt đầu sạch; giữ giờ mô phỏng **22:10**.
2. Chọn **Tài liệu có chỗ chưa đúng?**. Chỉ vào nhãn nguồn có vấn đề, mở **§3.3** để đối chiếu câu gốc và ví dụ kiểm tra.
3. Bấm **Đề nghị TA xem câu hỏi**. Đọc nội dung sẽ gửi và cảnh báo giờ TA/hạn bài. Bấm **Chưa gửi** để chứng minh chưa có yêu cầu; mở lại và **Xác nhận gửi**.
4. Thẻ yêu cầu xuất hiện. Có thể **Rút yêu cầu** trước khi TA bắt đầu xác minh. Không có TA thật được thông báo.
5. Chuyển **Hàng chờ TA**. Khi chưa xác minh, nút đăng FAQ bị khoá. Xác minh phản hồi, đánh dấu đồng ý rồi mới bấm **TA duyệt & đăng FAQ**. FAQ lúc này mới hiện ở phía học viên. Gỡ FAQ không thu hồi được những gì đã đọc.
6. Làm lại, chọn **Em muốn kiểm tra đáp số**: bài 3 đang mở nên không nhận đáp số hoặc xác nhận kết quả; chỉ có gợi ý bước đầu. Có thể ẩn/khôi phục gợi ý, sửa câu hỏi hoặc đề nghị TA xem.

Đã đồng bộ thêm các nút trong §3–§4: **Xem ví dụ**, **Báo phản hồi chưa đúng**, **Gợi ý bước đầu**, **Kiểm tra cách làm của tôi**. Phản hồi cụ thể không xoá lịch sử và không tự gửi TA. Kiểm tra phương pháp chỉ đối chiếu các bước, không xác nhận kết quả số.

Trong hộp chuyển TA, có thể bật **Thử ca gửi thất bại**: bấm gửi sẽ giữ bản nháp, không tạo yêu cầu. Bỏ chọn rồi bấm Thử lại để xem đường phục hồi. Đoạn nguồn và lý do nghi vấn xuất hiện trong bản xem trước, ngoài câu hỏi và mã mục.

Ô nhập nhận được câu hỏi tự gõ. Các ca khác gồm hỏi mơ hồ về “độ lệch”, slide không tồn tại, nội dung buổi 7, tự chê bản thân, hạn bài/Excel, bài 2 đã đóng. Câu ngoài các ca này đi tới nhánh chưa có căn cứ. Đây là định tuyến từ khoá cho prototype, không phải AI hiểu mọi câu hỏi.

## Ảnh và nguyên tắc

Bấm **Chú thích** để hiện số trên giao diện.

| Ảnh | Số trên ảnh | Ý nghĩa |
|---|---|---|
| [01 — Học viên](screenshots/01-hoc-vien.png) | **1** | Nguồn cụ thể và mục có vấn đề: HAX G11 |
| | **2** | Phản hồi thu hẹp phạm vi, chỉ ra điều chưa được tự làm: HAX G10 |
| | **3** | Yêu cầu đã được xác nhận, có trạng thái và nút rút: HAX G9 |
| [02 — TA duyệt](screenshots/02-ta-duyet.png) | **1** | TA đối chiếu câu gốc với ví dụ kiểm tra: HAX G11 |
| | **4** | Xác minh, ô đồng ý và nút duyệt là ba bước riêng; FAQ chưa tự xuất bản |

Nguồn nguyên tắc: Microsoft HAX [G9](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/), [G10](https://www.microsoft.com/en-us/haxtoolkit/guideline/scope-services-when-in-doubt/), [G11](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-why-the-system-did-what-it-did/). Lập luận thiết kế và phương án đã loại nằm trong `spec.md` §5.

## Phần nào đang mô phỏng?

- Tài liệu và dữ liệu khoá học dựa trên dữ liệu dựng của [track T2](https://github.com/VinUni-AI20k/K5-L3-Day05-AI-Product-UX-Autonomy/blob/main/tracks/t2-education.md).
- Phản hồi trong `fixtures.js` là câu soạn sẵn, chọn bằng từ khoá; **không có lời gọi AI thật**, không đo độ tin cậy của model và chưa có bonus gọi AI.
- Hàng chờ, phản hồi TA, duyệt/gỡ FAQ đều là trạng thái trên máy này. Hai tab là mô phỏng vai trò, chưa có xác thực hoặc phân quyền server. Không gửi email, không gọi TA thật, không sửa hạn hay tài liệu chính thức.
- Dữ liệu demo lưu trong trình duyệt để tải lại không mất trạng thái. **Làm lại demo** xoá hội thoại/yêu cầu/FAQ của bản demo. Trình duyệt chặn lưu vẫn dùng được trong phiên.
- Nhãn “có căn cứ”, “cần làm rõ” là trạng thái thiết kế, không phải xác suất model được hiệu chuẩn. Chỉ dùng câu hỏi/dữ liệu dựng.

Đã kiểm tra **37 tình huống trên Chrome** bằng file mở trực tiếp, có kiểm tra mobile 390px và bàn phím. Xem [QA.md](QA.md) và [qa-results.json](qa-results.json). Chưa kiểm tra Safari/Edge, chưa kiểm thử người dùng thật hay chấm AI thật.

Phần TV1/TV2 cần đối chiếu trước khi chốt bài nhóm được ghi trong [HANDOFF.md](../HANDOFF.md).
