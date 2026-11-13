# LAB5 · T2 Giáo dục · Nhóm ALI33

Lớp **L3B**. Repo nhóm cho bài Day 05: thiết kế UX khi AI sai và mức tự chủ của trợ lý học bài trong trang khoá học.

Đây là **bài đang làm**, chưa phải bài nộp hoàn chỉnh. Nhóm gồm Lê Thanh Tùng, Cấn Xuân Nghĩa và Nguyễn Mạnh Hùng; mã học viên nằm ở đầu [spec.md](spec.md). Chỉ ghi việc đã làm sau khi người phụ trách thực hiện và giải thích được phần đó.

**Phần TV3 đã có:** [prototype bấm được](prototype/README.md), hai ảnh đánh số và `spec.md` §5. Xem [HANDOFF.md](HANDOFF.md) để chia phần TV1/TV2, đối chiếu hai ca rủi ro và chốt mức tự chủ đang được dựng.

Mở demo sau khi tải repo: bấm đúp `prototype/index.html`, hoặc chạy `open prototype/index.html` trên Mac. Không cần deploy, npm hay API key. Đây là bản mô phỏng; chưa gửi TA thật hoặc gọi AI thật.

## Nộp bài ở đâu?

Theo [README đề — Nộp bài](https://github.com/VinUni-AI20k/K5-L3-Day05-AI-Product-UX-Autonomy#nộp-bài), nhóm nộp **một link repo GitHub công khai**. Kênh gửi link do giảng viên thông báo trong buổi. Hạn ghi cho L3B là **23:59 ngày 13/11/2026**.

Trong repo cần có:

- **[spec.md](spec.md):** bài thiết kế theo 7 mục của mẫu; bảng đủ 3 thành viên và đóng góp ở đầu.
- **[prototype/](prototype/README.md):** file HTML hoặc README chứa link prototype, kèm 1–2 ảnh đánh số các chỗ cần giải thích.

Google Docs có thể dùng để cả nhóm soạn chung. Trước khi nộp, chuyển nội dung đã chốt sang `spec.md`, thêm prototype/ảnh và push lên repo. README đề không yêu cầu nộp file Word; chỉ thêm bước điền link vào tài liệu hay biểu mẫu khác nếu giảng viên thông báo cụ thể.

## Nhóm đang thiết kế gì?

Trợ lý học bài trong trang khoá học, hỗ trợ học viên hỏi bài tối muộn. AI phải chọn giữa giảng có trích tài liệu, hỏi lại, gợi ý từng bước hoặc nói chưa có căn cứ và đề nghị hỏi TA/giảng viên. Lát cắt đã được giao, không đổi thành một chatbot làm mọi việc.

Nguồn dùng để thiết kế là dữ liệu dựng của [track T2](https://github.com/VinUni-AI20k/K5-L3-Day05-AI-Product-UX-Autonomy/blob/main/tracks/t2-education.md): tài liệu buổi 3 (§3.1–§3.5), trang khoá học và bốn tool. Bài 3 đang mở đến 13/11/2026 23:59; TA có giờ trực 08:00–22:00. Cần thiết kế cả lúc không có TA trực, không hứa đã chuyển câu hỏi nếu chưa có hành động thực hiện được.

Một chỗ cần chú ý khi viết kịch bản: §3.3 nói độ lệch chuẩn luôn nhỏ hơn phương sai. Mệnh đề này sai; ví dụ phương sai 0.25 thì độ lệch chuẩn là 0.5. Trích đúng tài liệu chưa bảo đảm nội dung đúng — nhóm cần thiết kế cách báo chỗ cần xem lại và đường hỏi người.

## Bắt đầu theo ba mốc

| Mốc | Làm trong repo | Khi nào đủ để qua mốc |
|---|---|---|
| **M1 — Kịch bản** | `spec.md` §1–§2 | Ít nhất 8 tình huống phủ 4 lớp: nguồn, mơ hồ, thẩm quyền, đặc thù giáo dục; mỗi tình huống trỏ về tool/dữ liệu; chọn 2 lỗi đắt nhất và giải thích |
| **M2 — Mức tự chủ** | `spec.md` §3–§4 | Hai ca khó có câu AI nói nguyên văn, bằng chứng/nút, bước tiếp và người được báo; cả 4 tool có mức tự chủ, lý do; thử trên 2 ca khó + 1 ca thường |
| **M3 — Prototype** | `prototype/` và `spec.md` §5 | Bấm được 1–2 màn hình qua ca khó; thấy ít nhất 2 mức tự chủ; 2–3 nguyên tắc HAX/PAIR trỏ vào chỗ cụ thể trên ảnh đánh số |

Sau đó làm §6 với 3 tiêu chí Pass/Fail; §7 chỉ ghi ca lạ và phản hồi thật sau khi demo. Không điền trước là đã demo hay đã đạt mốc khi chưa thực hiện. Mỗi người trình bày và giải thích được một phần.

Trước khi nhóm chốt thiết kế, mỗi thành viên tự thử xếp mức cho bốn tool ở §4. So sánh chỗ khác nhau rồi ghi lại quyết định thực tế của nhóm; không cần tự nhận đã đồng ý một phương án chưa bàn.

Đọc tiếp [hướng dẫn](https://github.com/VinUni-AI20k/K5-L3-Day05-AI-Product-UX-Autonomy/blob/main/02-guide.md) và [rubric](https://github.com/VinUni-AI20k/K5-L3-Day05-AI-Product-UX-Autonomy/blob/main/04-rubric.md). Phần UX khi sai, mức tự chủ và prototype chiếm **75/100 điểm**, nên ưu tiên ba phần này.

Mẫu `spec.md` lấy từ `03-spec-template.md` của [repo đề](https://github.com/VinUni-AI20k/K5-L3-Day05-AI-Product-UX-Autonomy), chuyển phần Markdown mẫu thành bài để nhóm soạn tiếp. Repo này được tạo mới, không fork và không chứa các tài liệu đề khác.

Không cần API key cho yêu cầu cơ bản. Dùng dữ liệu dựng của track, không dữ liệu thật của người thật. Không commit key hoặc file `.env`.
