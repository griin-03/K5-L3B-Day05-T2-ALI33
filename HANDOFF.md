# Chia việc và bàn giao · ALI33 · T2

Theo bảng thành viên nhóm vừa cập nhật: **Hùng là TV1**, **Nghĩa là TV2**, **Tùng là TV3**. Đã giữ đầu mối này và sửa lại mã học viên bị đảo: Tùng **2A202603819**, Hùng **2A202603852**, Nghĩa **2A202603805**. Các quyết định và đóng góp cuối cùng phải phản ánh việc nhóm thực sự làm.

## Chia theo đầu ra, cùng chịu trách nhiệm phần kiểm thử

| Người phụ trách | Phần chính | Đầu ra cần bàn giao | Người đối chiếu |
|---|---|---|---|
| **TV1 — Hùng: Phạm vi & rủi ro** | §1, §2; tổng hợp §6 và §7 | Ít nhất 8 kịch bản đủ 4 lớp, mã tình huống, căn cứ tool/dữ liệu, mức hại; chọn 2 ca đắt nhất; 3 tiêu chí Pass/Fail | TV2 kiểm tra cách xử lý; TV3 xác nhận có thao tác tương ứng |
| **TV2 — Nghĩa: UX & tự chủ** | §3, §4 | Câu AI nói nguyên văn; trạng thái, nút, đường lui; bảng 4 tool có người duyệt, thông tin trước duyệt, cách xử lý quá hạn; 3 nguyên tắc trỏ vào UI | TV1 so với mức hại; TV3 so với hành vi đã dựng |
| **TV3 — Lê Thanh Tùng** | §5, `prototype/` | Hai màn hình bấm được, source code, hai ảnh đánh số, hướng dẫn demo và kết quả kiểm tra thao tác | TV1/TV2 bấm chéo bằng câu hỏi chưa chuẩn bị |

§6 cần **cả nhóm kiểm thử**, không chỉ TV1 tự xác nhận đạt. §7 do TV1 tổng hợp sau demo nhưng mỗi thành viên trình bày phần mình; không viết trước một ca lạ hoặc cuộc tranh luận chưa xảy ra.

Chặng 1–4 không nên tách thành ba bài độc lập. Cả nhóm cần chốt hai ca rủi ro và thử xếp quyền từng tool trước; sau đó mới ghép nội dung. Không chờ viết xong toàn bộ §3–§4 mới dựng UI: bàn giao câu chữ và mức tự chủ tối thiểu trước, cập nhật sau khi bấm thử.

## Hai ca prototype đang hỗ trợ để nhóm đối chiếu

| Mã tạm | Ca | Căn cứ | TV1/TV2 cần chốt |
|---|---|---|---|
| **UI-A** | Tài liệu §3.3 có câu sai; nếu đăng FAQ sẽ lan tới cả lớp | Câu “độ lệch chuẩn luôn nhỏ hơn phương sai”; ví dụ đối chiếu phương sai 0,25 → độ lệch chuẩn 0,5; tool `dang_FAQ` gỡ được nhưng không thu hồi được kiến thức đã đọc | Mức hại, loại lỗi, cách thông báo giảng viên; có chọn là một trong hai ca đắt nhất không |
| **UI-B** | Học viên xin giải hoặc xác nhận đáp số bài 3 đang mở | §3.5; hạn 13/11/2026 23:59; tool `goi_y_bai_tap` gửi gợi ý quá tay thì người học đã chép | Ranh giới gợi ý bước đầu; hậu quả nếu cho đáp số; mức tự chủ và lý do |

Đây là **hai ca được chọn cho bản dựng TV3**, chưa phải biên bản cả nhóm đã thống nhất. §3–§4 của Nghĩa đang gọi hai ca này là S5/S3. TV1 ánh xạ UI-A/UI-B sang mã kịch bản ở §2 nếu dùng; nếu đổi ca ưu tiên thì báo TV3 cập nhật nội dung và ảnh.

## Giao kèo UX đang được hiện thực

Đây là mức **tạm dùng trong prototype**, TV2 cần đối chiếu và chốt trong §4:

| Tool | Hành vi đang dựng | Điều kiện/đường lui |
|---|---|---|
| `tra_cuu_tai_lieu` | **Tự làm**, chỉ đọc nguồn buổi 3 | Có mã mục, mở nguyên văn; nguồn sai có nhãn cần xem lại; không tự sửa tài liệu gốc |
| `goi_y_bai_tap` | **Tự làm trong phạm vi gợi ý**; cấm đưa/xác nhận đáp số bài đang mở | Chỉ gợi ý bước đầu, không mở dần thành lời giải khi bấm lại; người học ẩn/khôi phục gợi ý hoặc sửa câu hỏi |
| `chuyen_TA` | **Cần học viên xác nhận** trước khi tạo yêu cầu | Xem trước câu hỏi, mã mục và dữ liệu sẽ gửi; ngoài giờ báo TA trở lại từ 08:00 ngày sau, chưa hứa trả lời trước deadline; huỷ xác nhận không tạo yêu cầu; rút được khi TA chưa bắt đầu xác minh |
| `dang_FAQ` | **Cần TA duyệt**; AI/học viên không tự công bố | TA xem câu gốc và ví dụ, xác minh phản hồi, đánh dấu đồng ý rồi mới có thể bấm đăng; gỡ được nhưng không thu hồi điều đã đọc |

Không có tool đổi hạn nộp hoặc sửa tài liệu chính thức. Việc xác minh ở màn hình TA là xác minh **phản hồi/FAQ**, không phải khẳng định đã sửa tài liệu khoá học.

Prototype chỉ mô phỏng hai vai trò. Chuyển tab sang TA không phải đăng nhập hay phân quyền bảo mật; dữ liệu nằm trong trình duyệt, chưa thông báo TA thật. Không dùng bản demo này cho học viên thật.

## TV2 bàn giao gì để TV3 cập nhật nhanh?

Mỗi trạng thái chỉ cần một hàng:

```text
Mã ca | trạng thái | câu AI nói nguyên văn | nguồn hiển thị |
nút + ai bấm | điều kiện cho phép | sau khi bấm hiện gì | quá hạn/huỷ thì sao
```

- Câu chữ mô phỏng và dữ liệu tập trung trong `prototype/fixtures.js`.
- Luồng xác nhận, hàng chờ, duyệt FAQ nằm ở `prototype/app.js`.
- Hai màn hình và định dạng nằm ở `index.html`, `styles.css`.
- Nếu sửa luồng, lời hứa hoặc mức quyền, cần kiểm lại §4–§5 và chụp lại ảnh tương ứng. Không chỉ đổi nhãn trên nút.

## Gợi ý ba tiêu chí cho TV1 chốt §6

1. **Không lộ đáp số bài đang mở:** xin giải hộ hoặc xin xác nhận đều chỉ nhận gợi ý bước đầu; không xác nhận đúng/sai một kết quả cụ thể.
2. **Không bịa căn cứ hoặc hành động:** nguồn có vấn đề được chỉ đúng mục; nguồn không có không được tạo ra; huỷ xác nhận thì không có yêu cầu TA; ngoài giờ không hứa thời điểm trả lời không có trong dữ liệu.
3. **Không phát tán FAQ chưa duyệt:** trước khi TA xác minh, đồng ý và bấm đăng, phía học viên chưa thấy FAQ; khi gỡ phải nói rõ không thu hồi được điều người khác đã đọc.

TV3 đã kiểm tra thao tác của prototype; xem [QA.md](prototype/QA.md) và [kết quả máy ghi](prototype/qa-results.json). Đây chưa phải bằng chứng model AI thật đáp ứng các tiêu chí, cũng chưa thay thế vòng bấm chéo của nhóm hoặc ca lạ trong demo.

## Ghép bài trên GitHub

Đọc bản `main` mới trước khi sửa. TV1 giữ §1/§2/§6/§7, TV2 giữ §3/§4, TV3 giữ §5 và `prototype/`; khi cần sửa sang phần người khác, báo để ghép nội dung. Không ghi đè cả `spec.md` bằng một bản cũ. Cột “Việc đã làm” chỉ cập nhật sau khi làm, tách khỏi kế hoạch phân công.

## Các điểm cần chốt khi ghép bản mới của nhóm

- §2 đã có nội dung và bảng tình huống, nhưng chưa có cột mã. §3–§4 dùng **S5 = nguồn §3.3 sai**, **S3 = xin giải hộ bài đang mở**; hai ca được khoanh trong §2 hiện mô tả đáp số và bịa nguồn/hành động. Hùng cần thống nhất hai ca ưu tiên, thêm mã và một dòng riêng cho tài liệu §3.3 có câu sai nếu chọn ca này. TV3 giữ nguyên §1–§4, không tự sửa quyết định rủi ro của TV1/TV2.
- Hai đoạn phản hồi chính trong UI đã dùng câu chữ của §3.2–§3.3; có Xem ví dụ, Báo phản hồi chưa đúng, Gợi ý bước đầu và Kiểm tra cách làm. Feedback giữ phản hồi cũ, bổ sung lời đối chiếu; không tự nhận đã có một lỗi trước đó nếu lịch sử demo không chứa lỗi đó.
- Bản xem trước chuyển TA có câu hỏi, mã mục, đoạn nguồn và lý do nghi vấn. Checkbox thử lỗi gửi giữ yêu cầu ở bản nháp, không tăng hàng chờ; bỏ chọn rồi thử lại mới tạo yêu cầu mô phỏng. Đây là mô phỏng trạng thái lỗi, không phải request API thất bại thật.
- FAQ chỉ dùng nội dung lý thuyết soạn sẵn, không lấy tên hoặc toàn bộ câu hỏi học viên để công bố. Ô duyệt yêu cầu TA kiểm tra cả nội dung và ẩn danh. Chưa có bộ ẩn danh tổng quát cho nội dung tự do.
- §6 và §7 vẫn cần kết quả bấm chéo/ca lạ thật. Không lấy kiểm tra của TV3 làm biên bản ba người đã thảo luận hoặc giảng viên đã demo.
