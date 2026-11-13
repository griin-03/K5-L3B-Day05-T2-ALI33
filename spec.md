# Bài nộp LAB5 — T2 · Giáo dục · Nhóm ALI33

**Lớp:** L3B · **Bàn / zone:** Chưa cập nhật · **Track:** T2 — Giáo dục

| Họ và Tên | Mã Học Viên | Việc đã làm |
|---|---|---|
| Lê Thanh Tùng | 2A202603819 | Chưa cập nhật |
| Cấn Xuân Nghĩa | 2A202603805 | Chưa cập nhật |
| Nguyễn Mạnh Hùng | 2A202603852 | Chưa cập nhật |

> Bản khởi tạo theo mẫu đề, chưa phải bài nộp hoàn chỉnh. Danh sách đã đủ 3 người; nhóm cần xác nhận bàn/zone, chốt thiết kế và cập nhật đóng góp thực tế. Hướng dẫn bắt đầu và cách nộp nằm trong [README](README.md).

## §1. Lát cắt & phạm vi
- **Lát cắt được giao:** Trong **trợ lý học bài của trang khoá học (kiểu ChatGPT Study mode)**, khi **học viên** đang hỏi bài lúc tối muộn, khi không còn ai để hỏi, **AI giảng kèm trích tài liệu, hỏi lại cho rõ, gợi ý từng bước, hay nói thẳng "tài liệu không có, hỏi giảng viên"**, để học viên hiểu đúng bài mình đang học, không chép đáp án, không học sai mà không biết.

**Nháp phạm vi để nhóm xem và chốt:**

- Không giải hộ hoặc xác nhận đáp số bài tập đang mở, vì người học có thể chép kết quả mà không hiểu; trợ lý chỉ gợi ý bước đầu.
- Không sửa hạn nộp, gia hạn hoặc tự sửa tài liệu khoá học, vì bốn tool được giao không có quyền đó; thông tin hạn lấy từ trang khoá học, chỗ tài liệu nghi sai chuyển giảng viên xem lại.
- Không tự công bố câu trả lời chưa được kiểm tra thành FAQ cho cả lớp, vì gỡ bài không thu hồi được những gì nhiều người đã đọc; nhóm phải chốt cơ chế duyệt trước khi đăng.

## §2. Kịch bản rủi ro  (chặng 2)
- ≥8 kịch bản, mỗi lớp ①②③④ ít nhất một; mỗi kịch bản: tin người dùng · lớp · AI có thể sai thế nào · sản phẩm tốt nên làm gì · nhãn (nhẹ / sửa được / không chấp nhận được).
- Bằng chứng: cột "AI có thể sai thế nào" trỏ về một tool hoặc một dòng dữ liệu của track (hoặc chỗ dữ liệu không có).
- Quyết định: 2 kịch bản đắt nhất — vì sao đắt hơn các kịch bản còn lại; kịch bản nào suýt được chọn và vì sao không.

## §3. UX khi AI sai — người học nhìn thấy gì, làm gì tiếp?

### 3.1. Nguyên tắc quyết định

**Mục tiêu UX:** Không chỉ giảm số câu trả lời sai, mà làm cho học viên **nhận ra giới hạn của AI, kiểm tra được nguồn, có đường sửa và không bị dẫn vào hành vi học tập không phù hợp**.

Cân nhắc ba phương án phản hồi khi không chắc chắn:

1. **Trả lời chắc chắn, không thông báo giới hạn** — loại: người học khó phát hiện sai, nhất là khi AI trích được một câu sai trong tài liệu.
2. **Từ chối mọi câu khó và chuyển TA ngay** — loại: làm học viên bị gián đoạn không cần thiết vào buổi tối; TA nhận quá nhiều yêu cầu.
3. **Phản hồi có điều kiện** — **chọn**: nếu thiếu ngữ cảnh thì hỏi lại; nếu có tài liệu nhưng thấy mâu thuẫn thì chỉ ra chỗ mâu thuẫn, giải thích mức độ có thể kiểm chứng và cho phép xin xác minh; nếu học viên muốn đáp số của bài đang mở thì chuyển sang gợi ý theo bước, không đưa lời giải cuối.

Trường hợp cần phê duyệt hoặc thiếu nguồn, AI không được nói “đã báo TA”, “đã đăng FAQ” khi hành động chưa diễn ra. Câu chữ và trạng thái phải phản ánh đúng những gì prototype đã làm.

### 3.2. Kịch bản trọng tâm A — S5: Nguồn §3.3 có khẳng định sai

**Tin nhắn:** “Tại sao tài liệu ghi độ lệch chuẩn luôn nhỏ hơn phương sai ạ?”

**Căn cứ:** Nội dung trong §3.3 có khẳng định “vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai”. Đây không phải định luật đúng trong mọi trường hợp: nếu phương sai là 0,25 (đơn vị bình phương) thì độ lệch chuẩn là 0,5 (đơn vị gốc). Ngoài ra hai đại lượng khác đơn vị, nên không nên so sánh độ lớn một cách tổng quát.

**Lỗi AI có thể mắc:** `tra_cuu_tai_lieu` tìm được câu trong §3.3 và AI khẳng định lại nội dung sai chỉ vì “có nguồn”. Đây là **lỗi nội dung/nguồn của hệ thống**, không phải lỗi do học viên hỏi chưa tốt. Nếu AI trước đó đã khẳng định sai và bị phản hồi, có thêm **lỗi hệ thống trong câu trả lời** cần đính chính công khai.

**Câu AI hiển thị nguyên văn:**

> ⚠️ **Nội dung tài liệu cần xác minh**  
> Trong mục **§3.3**, có câu “độ lệch chuẩn luôn nhỏ hơn phương sai”. Câu này **không đúng trong mọi trường hợp**. Ví dụ: phương sai là 0,25 thì độ lệch chuẩn là √0,25 = 0,5.  
> Mình không nên coi câu đó là quy tắc chung. Bạn có thể **xem ví dụ giải thích** hoặc **đề nghị TA kiểm tra mục §3.3**. Mình chưa gửi yêu cầu nào khi bạn chưa xác nhận.

**Người học nhìn thấy:** thẻ cảnh báo vàng “Cần xác minh”; trích dẫn `§3.3`; ví dụ số học; nhãn “chưa báo TA”; ba nút `[Xem ví dụ]`, `[Đề nghị TA xác minh]`, `[Báo phản hồi này chưa đúng]`.

**Khi nhấn “Đề nghị TA xác minh”:** mở hộp thoại cho xem trước nội dung gồm: (i) câu hỏi của người học, (ii) đoạn §3.3, (iii) lý do nghi vấn và ví dụ, (iv) phạm vi thông tin sẽ được gửi. Có nút `[Xác nhận gửi]` và `[Hủy]`. Nếu người học hủy hoặc không bấm, **không gửi gì**.

**Thông báo sau xác nhận (prototype):** “Đã tạo yêu cầu chuyển TA **trong bản mô phỏng**. Trạng thái: **Đang chờ TA**. Chưa có TA thật nào được thông báo.” Nếu bản triển khai sau này có API thực, chỉ chuyển sang “Đã gửi” khi API trả về thành công; thất bại phải báo “Chưa gửi được — thử lại” và giữ bản nháp.

**Ngoài giờ hỗ trợ:** nếu hiện là 22:30, giao diện ghi “Hiện ngoài giờ hỗ trợ 08:00–22:00. Bạn có thể tạo yêu cầu để TA xem khi làm việc lại; **không cam kết giờ phản hồi**.” Không phỏng đoán rằng TA đang trực.

**Người được báo và khi nào:** chỉ **TA** nhận nội dung sau khi người học xác nhận và thao tác gửi thực tế thành công (ở prototype chỉ là trạng thái mô phỏng). Không tự động đăng cho cả lớp. TA thấy đoạn gây tranh cãi, ngữ cảnh, ví dụ và liên kết/mã mục. Việc sửa tài liệu gốc là thẩm quyền của người dạy/TA, không thuộc AI.

**Nếu học viên không bấm gì:** giữ câu trả lời với cảnh báo và lựa chọn chuyển TA; không gửi thông tin, không tự tạo FAQ. **Nếu học viên phản hồi “AI sai”:** mở ô hỏi “Bạn thấy phần nào chưa đúng?”, hiển thị lại lập luận và cho phép sửa/đề nghị kiểm tra; không xóa dấu vết cảnh báo trước đó.

**Phương án loại:** (a) chỉ nói “Theo §3.3, đúng rồi” vì dẫn nguồn chưa đảm bảo đúng; (b) tự sửa tài liệu/đăng FAQ vì đây là hành động lan truyền có chi phí sai cao; (c) chuyển TA tự động vì người học chưa đồng ý chia sẻ câu hỏi.

**Điểm quan trọng về thiết kế:** chỉ thay lời “Xin lỗi” không giải quyết việc AI trích dẫn và khuếch đại nguồn sai. Cần **cơ chế trạng thái nguồn bất thường**, nút chuyển TA, bước xác nhận và cấm công bố FAQ chưa duyệt.

### 3.3. Kịch bản trọng tâm B — S3: Học viên xin giải hộ bài đang mở

**Tin nhắn:** “Giải luôn bài 3 và cho em đáp số để nộp nhé.”

**Lỗi AI có thể mắc:** `goi_y_bai_tap` trả về đáp số hay lời giải đầy đủ của bài đang mở; UI gọi đó là “gợi ý” nhưng thực chất vẫn giúp chép bài. Đây là **lỗi giới hạn thẩm quyền/thiết kế hệ thống**. Mong muốn của học viên là thật, nhưng không được quy lỗi cho học viên khi thiết kế cho phép vượt ranh giới.

**Câu AI hiển thị nguyên văn:**

> Mình có thể **hướng dẫn cách làm**, nhưng không cung cấp đáp số hoặc lời giải hoàn chỉnh cho **bài tập đang mở**.  
> Với bài 3, bạn hãy bắt đầu bằng việc xác định dữ liệu, rồi chọn công thức thống kê phù hợp. Bạn muốn mình gợi ý **bước đầu tiên**, hay **kiểm tra cách làm bạn đã thử**?

**Người học nhìn thấy:** nhãn “Chế độ học tập — chỉ gợi ý”; hai nút `[Gợi ý bước đầu]`, `[Kiểm tra cách làm của tôi]`; một nút `[Hỏi TA]`. Không có nút “Xem đáp án cuối”, “Bỏ chặn” hoặc “Gửi đáp số”.

**Nếu bấm “Gợi ý bước đầu”:** chỉ hiện hướng dẫn cấp độ đầu, ví dụ “Xác định đại lượng đề bài yêu cầu và liệt kê dữ liệu đã cho. Nếu cần số trung bình, nhớ chia tổng các giá trị cho số phần tử.” Tránh dựng dữ kiện hoặc đáp số cho bài 3 khi chưa có đề đầy đủ.

**Nếu bấm “Kiểm tra cách làm của tôi”:** người học nhập các bước đã thử; AI phản hồi về phương pháp, nêu điểm cần kiểm lại; không đưa đáp số bài đang mở và không giả vờ đã chấm bài chính thức.

**Nếu người học tiếp tục ép xin đáp số:** giữ ranh giới nhất quán; có thể đề nghị TA hỗ trợ giải thích khái niệm. Chuyển TA vẫn cần người học xác nhận. Nếu không làm gì, không phát sinh tác vụ ngoài chat.

**Phương án loại:** (a) đáp số ngay — vi phạm mục đích học; (b) từ chối tuyệt đối — không giúp người học tiến bộ; (c) cảnh báo rồi vẫn hiển thị lời giải — giới hạn chỉ mang tính hình thức.

**Cơ chế thiết kế quan trọng:** lọc đầu ra trước khi hiển thị đáp số của bài đang mở và ràng buộc `goi_y_bai_tap` ở chế độ *hint only*. Đây là thay đổi mức quyền và luồng, không thể cứu chỉ bằng câu “mình khuyên bạn tự làm”.

### 3.4. Bốn đường đi trải nghiệm

| Đường đi | Câu hỏi mẫu | AI làm gì | Người học thấy và bấm gì |
|---|---|---|---|
| **Happy path** | “Trung vị là gì?” | Tra §3.1–§3.5; trả lời trong phạm vi nội dung tìm được | Giải thích ngắn + mã mục nguồn + `[Xem nguồn]` + `[Phản hồi]`; không cần chờ TA |
| **Low-confidence / mơ hồ** | “Cái độ lệch ấy là gì?” | Không đoán là độ lệch chuẩn hay độ lệch khác | “Bạn đang hỏi **độ lệch chuẩn** hay cách tính **độ lệch của một giá trị so với trung bình**?” + hai lựa chọn |
| **Failure / thiếu hoặc sai căn cứ** | “Slide 12 ghi gì?” / câu sai §3.3 | Không bịa slide; hoặc cảnh báo nguồn đáng ngờ | “Mình không có nội dung đánh số slide 12 trong dữ liệu hiện có” / cảnh báo §3.3 + chuyển TA có xác nhận |
| **Correction** | “Bạn vừa bảo luôn nhỏ hơn, điều đó sai” | Nhận phản hồi, kiểm lại, thừa nhận lỗi; không âm thầm ghi đè | “Bạn đúng khi nghi ngờ. Mình đã diễn đạt sai...” + ví dụ phản chứng + `[Đề nghị TA xác minh]` |

**Thông điệp chung cho đường correction:** “Cảm ơn bạn đã chỉ ra. Mình đã khẳng định quá mức khi dựa vào câu ở §3.3. Khẳng định ‘luôn nhỏ hơn’ là sai; ví dụ phương sai 0,25 có độ lệch chuẩn 0,5. Mình đã sửa câu giải thích trong cuộc trò chuyện này. Bạn có muốn đề nghị TA kiểm tra tài liệu không?” Không nói “đã sửa tài liệu gốc”.

### 3.5. Nguyên tắc HAX/PAIR gắn trực tiếp với prototype

| Nguyên tắc | Thể hiện ở đâu | Bằng chứng demo |
|---|---|---|
| **HAX G10 — Thu hẹp phạm vi khi nghi ngờ** | Tin “cái độ lệch ấy” xuất hiện câu hỏi làm rõ với 2 nút lựa chọn | Không tự chọn một khái niệm để trả lời |
| **HAX G11 — Giải thích vì sao** + **PAIR Explainability & Trust** | Dưới câu trả lời có `Nguồn: §3.3` hoặc nhãn `Không tìm thấy căn cứ` và câu giải thích giới hạn | Bấm `[Xem nguồn]` hiển thị đoạn tài liệu, không tạo nguồn giả |
| **HAX G9 — Sửa dễ dàng** + **PAIR Graceful Failure** | `[Báo câu trả lời sai]` mở phản hồi và luồng sửa, giữ dấu hiệu cảnh báo | Bấm thử từ cảnh báo §3.3 tới phản hồi và yêu cầu TA |

**Định nghĩa niềm tin đúng mức:** Có nguồn không có nghĩa nguồn đúng; người học thấy cả căn cứ lẫn trạng thái cần xác minh. Tránh hiển thị “AI tự tin 97%” nếu không có phép đo độ tin cậy thực.

## §4. Mức tự chủ — chọn theo chi phí sai sót (cost-of-error)

### 4.1. Ba mức quyết định

- **Tự làm:** thao tác đọc hoặc hỗ trợ có thể sửa nhanh, hậu quả thấp.
- **Cần người duyệt:** có thể gửi/chia sẻ nội dung hoặc ảnh hưởng người khác; phải có người phù hợp xem trước và xác nhận.
- **Cấm:** vượt thẩm quyền hoặc có hậu quả không thể chặn hiệu quả chỉ bằng một nút xác nhận.

| Tool | Mức chốt đề xuất | Ai chịu hậu quả nếu sai? Chi phí sửa và đảo lại | Luật hoạt động trên UI |
|---|---|---|---|
| `tra_cuu_tai_lieu` | **TỰ LÀM** (đọc) | Học viên có thể bị dẫn sai nếu hệ thống đọc nhầm hoặc nguồn sai; có thể sửa câu trả lời nhưng kiến thức sai đã ghi nhớ khó gỡ | Tự tra cứu, **chỉ** trích mục có thật; nếu không có nguồn thì nêu giới hạn; nếu phát hiện nguồn mâu thuẫn thì gắn `Cần xác minh`, không khẳng định nội dung đó |
| `goi_y_bai_tap` | **TỰ LÀM CÓ RÀNG BUỘC** cho gợi ý; **CẤM** cung cấp đáp số/lời giải trọn vẹn bài đang mở | Học viên mất cơ hội học, vi phạm tính trung thực học thuật; không thể thu hồi hoàn toàn đáp số đã đọc | Luôn dùng chế độ `hint only`; cho gợi ý từng bước, không hiển thị đáp số hay lời giải đầy đủ của bài đang mở |
| `chuyen_TA` | **CẦN NGƯỜI HỌC DUYỆT** trước khi gửi | Gửi nhầm có thể lộ nội dung chat, tạo tải công việc cho TA; có thể đóng ticket nhưng không thu hồi hoàn toàn thông tin đã gửi | Hiển thị bản xem trước + `[Xác nhận gửi]`; người học `[Hủy]` không gửi; hiện trạng thái thật/mô phỏng đúng sự kiện; không hứa thời gian phản hồi |
| `dang_FAQ` | **CẦN TA/giảng viên DUYỆT** trước khi công bố; **CẤM AI tự công bố** | Một thông tin sai lan cho cả lớp, có thể bị sao chép; xóa FAQ không thu hồi được kiến thức đã lan truyền | AI chỉ tạo bản nháp; TA duyệt tính chính xác và ẩn danh trước `[Duyệt & đăng]`; chưa duyệt thì `Nháp — chưa công khai` |

**Vì sao không cấm tất cả?** Nếu việc tra cứu hay gửi gợi ý luôn phải chờ TA, người học tối muộn không nhận được hỗ trợ nào; độ trễ có chi phí thực. Ngược lại, tự đăng FAQ hay tự gửi nội dung người học có thể gây hậu quả vượt xa lợi ích tiết kiệm một lần nhấn.

### 4.2. Tool khó xếp mức nhất: `goi_y_bai_tap`

- **Phương án A — Tự làm không giới hạn:** phản hồi nhanh nhưng dễ tiết lộ đáp số bài đang mở; sai có thể không thu hồi được.
- **Phương án B — Tất cả gợi ý cần TA duyệt:** an toàn hơn nhưng bất khả thi vào đêm muộn, ngay cả câu hỏi chỉ về định nghĩa.
- **Phương án C — Tự làm gợi ý có ràng buộc, cấm lời giải cuối:** **chọn** vì giữ được tốc độ và mục tiêu học tập; cần kiểm tra đầu ra để tránh “gợi ý” thực chất là đáp án.

**Điều kiện chặn:** nếu câu hỏi có dấu hiệu bài đang mở hoặc đòi “đáp án để nộp”, AI chỉ được cung cấp nguyên tắc và bước đầu. Nếu khó phân biệt bài mở hay bài ôn tập, hỏi lại trạng thái bài thay vì tự giả định bài đã đóng. Nếu hệ thống không kiểm soát được câu trả lời từ tool, không hiển thị phần có thể lộ đáp số, đưa về đường gợi ý an toàn.

**Về thảo luận nội bộ:** bảng là quyết định *đề xuất* của TV2 để cả nhóm duyệt. Sau khi ba thành viên tự xếp, bổ sung vào spec: “TV1 chọn …; TV2 chọn …; TV3 chọn …; nhóm chốt … vì …”. Không tự dựng ý kiến mà các thành viên chưa phát biểu.

### 4.3. Tách các thao tác dễ nhầm để giảm rủi ro

- `chuyen_TA`: **tạo bản nháp** → **người học xem trước** → **người học xác nhận** → **gửi** → **chờ TA**. Không gọi trạng thái “đã gửi” trước bước gửi thành công.
- `dang_FAQ`: **soạn FAQ nháp** → **TA kiểm tra độ đúng + ẩn danh** → **TA phê duyệt** → **đăng**. AI không có quyền bỏ qua bước duyệt.

Hai luồng này xử lý một lỗi mà việc chỉnh câu chữ không thể khắc phục: gửi hoặc phát tán nội dung trước khi đúng người cho phép.

### 4.4. Thử mức tự chủ trên 3 ca (dự đoán hành vi; nhóm cần bấm prototype để xác nhận)

| Ca kiểm thử | Tool/mức | AI được làm gì? | Kiểm tra chi phí sai và chờ duyệt |
|---|---|---|---|
| **S5 — §3.3 sai** | `tra_cuu_tai_lieu`: tự đọc; `chuyen_TA`: chờ người học duyệt; `dang_FAQ`: chờ TA duyệt | Chỉ ra phản ví dụ, gắn “Cần xác minh”; chỉ tạo yêu cầu TA sau xác nhận; không tự đăng FAQ | **Chặn** lặp lại khẳng định sai; **chặn** gửi/đăng tự ý; người học vẫn xem được ví dụ ngay |
| **S3 — xin giải hộ bài đang mở** | `goi_y_bai_tap`: tự gợi ý trong giới hạn, cấm đáp số | Nêu quy tắc, hỏi người học muốn gợi ý hay kiểm cách làm; không tiết lộ đáp số | **Chặn** làm hộ; không phải đợi TA để nhận gợi ý cơ bản |
| **Ca thường — hỏi định nghĩa trung vị** | `tra_cuu_tai_lieu`: tự làm | Tra mục có thật, tóm tắt đúng ý, hiện nguồn | **Không chờ duyệt vô ích**; nếu không tìm thấy nguồn phải chuyển sang chế độ giới hạn |

**Một mức tự chủ đã thay đổi lời hứa sản phẩm:** không nói “AI sẽ giải mọi bài tập và tự thông báo cho TA”, mà nói: **“AI giải thích theo tài liệu, đưa gợi ý học tập, và chỉ gửi yêu cầu cho TA khi bạn xác nhận.”**

### 4.5. Quy tắc khi công cụ gặp lỗi

| Tình huống | Câu thông báo và trạng thái |
|---|---|
| Không tìm thấy nguồn | “Mình chưa tìm thấy nội dung phù hợp trong các mục tài liệu hiện có. Mình sẽ không tự tạo trích dẫn. Bạn muốn diễn đạt lại câu hỏi hay đề nghị TA hỗ trợ?” |
| Tra cứu lỗi kỹ thuật | “Hiện chưa tra cứu được tài liệu. Mình chưa thể xác minh câu trả lời. Bạn có thể thử lại hoặc lưu câu hỏi để gửi TA.” |
| Chuyển TA thất bại | “Yêu cầu **chưa gửi thành công**. Nội dung vẫn ở bản nháp; bạn có thể thử lại. Không có TA nào được thông báo.” |
| Chưa được duyệt FAQ | “Nội dung đang ở trạng thái **Nháp — chờ TA duyệt**, chưa hiển thị với lớp.” |
| Người học không phản hồi xác nhận | Không có thao tác gửi hay đăng nào được thực hiện; giữ bản nháp và cung cấp nút quay lại |

---

## §5. Prototype  (chặng 5)
- Link hoặc file · công cụ · phần nào mock · có lời gọi AI thật không.
- 1–2 ảnh có đánh số; mỗi số: thể hiện gì · nguyên tắc HAX/PAIR nào · mức tự chủ nào.
- Quyết định: cách hiện độ chắc/bằng chứng và điều khiển mức tự chủ — đã nghĩ tới cách nào khác, vì sao chọn cách này.

## §6. Tốt là gì  (chặng 6 — nhẹ, bỏ được nếu thiếu giờ)
- 3 tiêu chí Pass/Fail chấm được; thiết kế của nhóm đạt tiêu chí nào trên 2 kịch bản đắt nhất; lỗi còn lại.

## §7. Demo
- Ca lạ nhận được ở demo: prototype đã làm gì, và nhóm có đổi ý gì sau ca đó không.
