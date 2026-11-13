# Kiểm tra thao tác prototype TV3

Ngày theo buổi lab: **13/11/2026**. Đã chạy trên Google Chrome cài sẵn, profile headless riêng, mở trực tiếp file HTML qua Chrome DevTools Protocol. Không dùng trình duyệt cá nhân đã đăng nhập. Kết quả máy ghi ở [qa-results.json](qa-results.json); **37/37 kiểm tra qua**, không có JavaScript exception hoặc request HTTP ra ngoài trong phiên kiểm tra.

Đây là kiểm tra giao diện và trạng thái dựng, không phải benchmark AI hoặc xác nhận ba thành viên đã bấm chéo. Các tên kiểm tra cụ thể, timestamp và hash hai ảnh nằm trong JSON.

## Cách tự bấm lại các điều kiện chính

| Ca kiểm tra | Thao tác | Điều đã quan sát |
|---|---|---|
| Tài liệu sai | Chọn ca §3.3, mở nguồn | Có câu gốc, nhãn cần xem lại và ví dụ 0,25 → 0,5; tài liệu gốc giữ nguyên |
| Chưa xác nhận | Mở chuyển TA rồi chọn Chưa gửi | Hàng chờ vẫn rỗng |
| Đã xác nhận | Xác nhận chuyển, tải lại trang | Một yêu cầu tồn tại trong demo, không tự nhân bản khi tải lại |
| Ngoài giờ | Giữ giờ 22:10 | Có giờ TA trở lại và cảnh báo chưa cam kết phản hồi trước hạn bài; không tự gia hạn |
| Rút yêu cầu | Rút khi chưa được TA xác minh | Hàng chờ xử lý giảm; yêu cầu đã rút không có hành động xử lý/đăng FAQ |
| FAQ chưa duyệt | Mở TA, chưa xác minh | Nút đăng và ô đồng ý bị khoá; phía học viên chưa có FAQ |
| Xác minh chưa đủ | Xác minh, chưa đánh dấu đồng ý | Nút đăng vẫn khoá |
| Duyệt và gỡ | Đánh dấu đồng ý, bấm đăng rồi gỡ | FAQ chỉ hiện sau đăng; gỡ khỏi danh sách, giữ cảnh báo không thu hồi điều đã đọc |
| Xin xác nhận đáp số | Tự nhập kết quả trung bình/trung vị cho bài 3 | Phản hồi không nhắc lại hoặc xác nhận các số đó; chỉ gợi ý bước đầu |
| Sửa/ẩn gợi ý | Ẩn rồi khôi phục; sửa câu hỏi | Có thể phục hồi gợi ý cũ, không tự mở thêm các bước thành lời giải |
| Mơ hồ | Chọn “cái độ lệch ấy” | Hỏi lại; chọn khái niệm rồi mới có phản hồi tương ứng |
| Căn cứ không có | Hỏi slide 12 hoặc buổi 7 | Không tạo slide; chỉ nêu buổi 7 theo đề cương, chưa giảng từ tài liệu chưa mở |
| Hạn bài + Excel | Tự hỏi hạn bài 3 và hàm Excel | Tách hạn có trong trang khoá học với hàm chưa có trong tài liệu |
| Bài đã đóng | Hỏi bài 2 đã công bố đáp án | Cho phép giải thích 30 ÷ 5 = 6 |
| Tự chê năng lực | Nhập lời tự chê | Không nhận xét năng lực, đưa đường chọn khái niệm để học tiếp |
| Input HTML/ca lạ | Nhập chuỗi HTML và câu ngoài mẫu | Chuỗi hiển thị như văn bản, không chạy mã; dùng phản hồi chưa có căn cứ |
| Bàn phím/mobile | Escape đóng nguồn; Enter gửi; viewport 390px | Có thao tác bàn phím, không tràn ngang ở 390px và 1440px |
| Ví dụ riêng | Bấm Xem ví dụ từ ca §3.3 | Mở phản ví dụ, không giả làm đáp số bài 3 |
| Lỗi gửi và phục hồi | Bật thử lỗi gửi, xác nhận, bỏ chọn và thử lại | Lúc lỗi vẫn giữ bản nháp, không có yêu cầu; retry sau đó mới tạo yêu cầu mô phỏng |
| Preview đủ căn cứ | Mở xác nhận chuyển từ §3.3 | Có đoạn nguồn nguyên văn và lý do nghi vấn đi cùng câu hỏi |
| Gợi ý không mở dần đáp án | Bấm Gợi ý bước đầu nhiều lần | Giữ cùng mức gợi mở, không lộ kết quả |
| Kiểm tra phương pháp | Nhập bước làm có kèm kết quả số | Không xác nhận số đã nhập, chỉ đối chiếu nguyên tắc |
| Feedback cụ thể | Báo phản hồi chưa đúng rồi nhập ý kiến | Giữ phản hồi trước, bổ sung lời đối chiếu; không tự chuyển TA |

## Giới hạn còn lại

- Định tuyến theo từ khoá có thể nhầm ý hoặc rơi vào nhánh mặc định; chưa có kiểm thử ngôn ngữ tổng quát. Không suy ra model thật sẽ an toàn từ các check này.
- Chưa có backend, thông báo TA thật, đăng nhập hay phân quyền. Ai đang trình bày cũng có thể đổi sang tab TA mô phỏng.
- Chưa đo khả năng hiểu của người học, kiểm thử accessibility toàn diện hoặc độ ổn định trên trình duyệt khác.
- Chưa có ca lạ nhận tại buổi demo. TV1/TV2 cần bấm chéo và ghi kết quả thực tế vào §6–§7, không lấy bảng này thay cho sự kiện chưa xảy ra.
