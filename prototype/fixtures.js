/* Dữ liệu dựng của T2. Câu chữ phản hồi là bản để TV2 rà lại, không phải output LLM. */
window.ALI33_LAB = {
  sources: {
    '3.1': { title: 'Trung bình cộng', body: 'Tổng các giá trị chia cho số giá trị. Trung bình bị kéo mạnh bởi giá trị ngoại lai.' },
    '3.2': { title: 'Trung vị', body: 'Giá trị đứng giữa khi sắp xếp dữ liệu tăng dần. Nếu số giá trị là chẵn, trung vị là trung bình cộng của hai giá trị đứng giữa. Trung vị ít bị ảnh hưởng bởi giá trị ngoại lai, nên thường dùng cho dữ liệu lệch như thu nhập hay giá nhà.' },
    '3.3': { title: 'Phương sai & độ lệch chuẩn', warning: true, body: 'Phương sai đo mức độ phân tán của dữ liệu quanh trung bình. Độ lệch chuẩn là căn bậc hai của phương sai, có cùng đơn vị với dữ liệu. Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.' },
    '3.4': { title: 'Giá trị ngoại lai', body: 'Giá trị khác hẳn phần lớn dữ liệu. Trước khi bỏ một giá trị ngoại lai, cần hỏi: đây là lỗi nhập liệu hay là dữ liệu thật?' },
    '3.5': { title: 'Bài tập 3 · Đang mở', body: 'Lương tháng của 8 nhân viên một phòng (triệu đồng, dựng): 9, 10, 10, 11, 12, 12, 13, 45.\n(a) Tính trung bình và trung vị.\n(b) Con số nào mô tả “lương điển hình” của phòng tốt hơn? Vì sao?\n\nHạn: 13/11/2026 23:59. Chỉ gợi ý bước đầu; không đưa hoặc xác nhận đáp số.' },
    course: { title: 'Trang khoá học · Dữ liệu B', body: 'Buổi đã mở: 1, 2, 3.\nBuổi 7: Kiểm định giả thuyết và p-value — chưa mở.\nBài tập làm bằng bảng tính; tài liệu không chỉ định hàm Excel.\nBài tập 2: hết hạn 06/11/2026 23:59; đáp án công bố 07/11: trung bình của 4, 8, 6, 5, 7 là 6.\nBài tập 3: hạn 13/11/2026 23:59 — đang mở.\nGiờ TA: 08:00–22:00. Không có cam kết thời gian phản hồi.' }
  },
  starters: [
    { topic: 'source-error', title: 'Tài liệu có chỗ chưa đúng?', detail: 'Độ lệch chuẩn luôn nhỏ hơn phương sai?', question: '§3.3 nói độ lệch chuẩn luôn nhỏ hơn phương sai. Câu này có đúng không?' },
    { topic: 'open-assignment', title: 'Em muốn kiểm tra đáp số', detail: 'Bài tập 3 đang mở thì được giúp tới đâu?', question: 'Bài 3 em tính xong rồi, bạn xác nhận đáp số giúp em được không?' },
    { topic: 'ambiguous', title: 'Em chưa biết hỏi thế nào', detail: '“Cái độ lệch ấy” là gì nhỉ?', question: 'Cái độ lệch ấy là gì ạ, em đọc không hiểu.' },
    { topic: 'missing-source', title: 'Em tìm không thấy nguồn', detail: 'Tài liệu có slide 12 không?', question: 'Giải thích slide 12 cho em với.' }
  ],
  replies: {
    'source-error': {
      title: 'Có một câu trong §3.3 cần xem lại.', label: 'Nội dung tài liệu cần xác minh', tone: 'warning', sources: ['3.3'],
      text: 'Trong mục §3.3, có câu “độ lệch chuẩn luôn nhỏ hơn phương sai”. Câu này không đúng trong mọi trường hợp. Ví dụ: phương sai là 0,25 thì độ lệch chuẩn là √0,25 = 0,5.\n\nMình không nên coi câu đó là quy tắc chung. Bạn có thể xem ví dụ giải thích hoặc đề nghị TA kiểm tra mục §3.3. Mình chưa gửi yêu cầu nào khi bạn chưa xác nhận.',
      actions: ['example', 'handoff']
    },
    'open-assignment': {
      title: 'Mình chỉ gợi ý bước đầu cho bài đang mở.', label: 'Giới hạn bài đang mở', tone: 'limited', sources: ['3.2', '3.5', 'course'],
      text: 'Mình có thể hướng dẫn cách làm, nhưng không cung cấp đáp số hoặc lời giải hoàn chỉnh cho bài tập đang mở.\n\nVới bài 3, bạn hãy bắt đầu bằng việc xác định dữ liệu, rồi chọn công thức thống kê phù hợp. Bạn muốn mình gợi ý bước đầu tiên, hay kiểm tra cách làm bạn đã thử?\n\nMình không đưa hoặc xác nhận đáp số. Hạn bài 3: 13/11/2026 23:59; đây không phải chấm bài chính thức.',
      choices: [{ label: 'Gợi ý bước đầu', question: 'Cho em gợi ý bước đầu của bài 3.', topic: 'first-hint' }, { label: 'Kiểm tra cách làm của tôi', action: 'method' }],
      actions: ['handoff']
    },
    'first-hint': {
      title: 'Chỉ bắt đầu bằng việc sắp xếp dữ liệu.', label: 'Gợi ý bước đầu · chưa có đáp số', tone: 'limited', sources: ['3.2', '3.5'],
      text: 'Gợi ý bước đầu: sắp xếp 8 giá trị theo thứ tự tăng dần. Với số phần tử chẵn, hãy xác định hai vị trí ở giữa theo §3.2. Bạn tự thử bước này trước nhé.\n\nMình không đưa hoặc xác nhận đáp số bài đang mở. Bấm lại không mở thêm các bước thành lời giải.', actions: ['handoff']
    },
    'method-review': {
      title: 'Đối chiếu phương pháp, chưa xác nhận đáp số.', label: 'Kiểm cách làm trong giới hạn', tone: 'limited', sources: ['3.1', '3.2', '3.4'],
      text: 'Mình chưa chấm đúng/sai kết quả số bạn nhập. Để tự kiểm cách làm: §3.1 yêu cầu lấy tổng chia cho số giá trị; §3.2 yêu cầu sắp xếp trước khi xác định vị trí giữa. Theo §3.4, không tự bỏ một giá trị ngoại lai khi chưa biết đó là lỗi nhập hay dữ liệu thật.\n\nBạn đối chiếu các bước mình đã thử với các điều kiện này; nếu còn vướng, có thể đề nghị TA xem phương pháp.', actions: ['handoff']
    },
    correction: {
      title: 'Mình ghi nhận phần bạn thấy chưa đúng.', label: 'Đã nhận phản hồi · giữ lịch sử', tone: 'warning', sources: ['3.3'],
      text: 'Cảm ơn bạn đã chỉ ra chỗ cần kiểm tra. Mình đối chiếu lại định nghĩa ở §3.3: phương sai 0,25 thì độ lệch chuẩn là 0,5; không thể coi “luôn nhỏ hơn” là quy tắc chung.\n\nLời giải thích đối chiếu được bổ sung trong cuộc trò chuyện này, không xoá phản hồi trước đó. Tài liệu gốc chưa được sửa và chưa có yêu cầu TA nào tự gửi. Bạn có muốn đề nghị TA xác minh không?', actions: ['example', 'handoff']
    },
    'feedback-generic': {
      title: 'Mình đã ghi nhận ý kiến để kiểm tra lại.', label: 'Phản hồi chưa được tự coi là đã xác minh', tone: 'limited', sources: ['course'],
      text: 'Phản hồi trước vẫn được giữ trong hội thoại để đối chiếu. Bản demo chưa tự hiểu và xác minh mọi ý kiến tự do; bạn có thể đề nghị TA xem câu hỏi. Chưa có nội dung nào được tự gửi hay công bố.', actions: ['handoff']
    },
    ambiguous: {
      title: 'Bạn đang hỏi “độ lệch” theo nghĩa nào?', label: 'Cần làm rõ trước khi giảng', tone: 'limited', sources: ['3.3', '3.4'],
      text: 'Mình chưa đủ thông tin để chọn đúng khái niệm. Bạn đang hỏi độ lệch chuẩn, hay độ lệch của một giá trị so với trung bình?',
      choices: [{ label: 'Độ lệch chuẩn', question: 'Em muốn hiểu khái niệm độ lệch chuẩn.' }, { label: 'Độ lệch của một giá trị', question: 'Em hỏi độ lệch của một giá trị so với trung bình.' }], actions: []
    },
    'individual-deviation': {
      title: 'Thuật ngữ này cần xác định rõ hơn.', label: 'Chưa đủ tài liệu cho cách tính riêng', tone: 'limited', sources: ['3.3'],
      text: '§3.3 nói về phương sai và độ lệch chuẩn, chưa đưa công thức riêng cho độ lệch của một giá trị so với trung bình. Mình không tự đồng nhất thuật ngữ này với độ lệch chuẩn. Bạn có thể cho biết câu đang đọc hoặc đề nghị TA xác định đúng khái niệm.', actions: ['handoff']
    },
    'missing-source': {
      title: 'Tài liệu được cấp không có “slide 12”.', label: 'Chưa tìm thấy căn cứ', tone: 'warning', sources: ['course'],
      text: 'Tài liệu buổi 3 chỉ có các mục §3.1 đến §3.5, không có slide đánh số. Mình chưa thể nói slide 12 chứa gì. Bạn có thể sửa lại câu hỏi bằng mã mục, hoặc gửi câu hỏi cho TA kiểm tra.', actions: ['handoff']
    },
    'future-lesson': {
      title: 'Nội dung này thuộc buổi 7, chưa mở.', label: 'Ngoài tài liệu đã học', tone: 'limited', sources: ['course'],
      text: 'Trang khoá học ghi buổi 7 là “Kiểm định giả thuyết và p-value”. Hiện chỉ buổi 1–3 đã mở, chưa có tài liệu buổi 7 để mình giảng có căn cứ. Bạn có thể quay lại nội dung buổi 3 hoặc hỏi TA.', actions: ['handoff']
    },
    'self-doubt': {
      title: 'Mình cùng tách chỗ khó thành một câu nhỏ nhé.', label: 'Chọn khái niệm để bắt đầu', tone: '', sources: ['3.1', '3.2'],
      text: 'Việc đang vướng một khái niệm không đủ để nhận xét năng lực của bạn. Bạn muốn phân biệt trung bình với trung vị, hay hiểu độ lệch chuẩn trước?',
      choices: [{ label: 'Trung bình & trung vị', question: 'Trung bình khác trung vị thế nào?' }, { label: 'Độ lệch chuẩn', question: 'Độ lệch chuẩn là gì?' }], actions: []
    },
    'mean-median': {
      title: 'Một số là bình quân, một số là vị trí ở giữa.', label: 'Có căn cứ trong tài liệu', tone: '', sources: ['3.1', '3.2'],
      text: 'Theo §3.1, trung bình cộng là tổng các giá trị chia cho số giá trị và bị kéo mạnh bởi ngoại lai. Theo §3.2, trung vị lấy vị trí ở giữa sau khi sắp xếp và ít bị ảnh hưởng bởi ngoại lai.\n\nVới dữ liệu lệch như thu nhập hay giá nhà, tài liệu gợi ý dùng trung vị để mô tả điển hình. Bạn thử diễn đạt lại sự khác nhau bằng lời của mình nhé.', actions: []
    },
    'standard-deviation': {
      title: 'Độ lệch chuẩn mô tả mức phân tán.', label: 'Mục nguồn có câu cần xem lại', tone: 'warning', sources: ['3.3'],
      text: 'Theo phần định nghĩa của §3.3, độ lệch chuẩn là căn bậc hai của phương sai và có cùng đơn vị với dữ liệu.\n\nLưu ý: câu tiếp theo trong tài liệu nói nó “luôn nhỏ hơn phương sai” cần được xem lại. Ví dụ phương sai 0,25 thì căn bậc hai là 0,5. Không nên học thuộc mệnh đề “luôn nhỏ hơn”.', actions: ['handoff']
    },
    outlier: {
      title: 'Đừng vội xoá một giá trị khác biệt.', label: 'Có căn cứ trong §3.4', tone: '', sources: ['3.4'],
      text: 'Giá trị ngoại lai khác hẳn phần lớn dữ liệu. Theo §3.4, trước khi bỏ nó cần kiểm tra đây là lỗi nhập liệu hay dữ liệu thật. Chỉ vì một giá trị lớn hoặc nhỏ bất thường chưa đủ để xoá.', actions: []
    },
    deadline: {
      title: 'Hạn bài 3 đã có; hàm bảng tính chưa có căn cứ.', label: 'Tách phần biết và phần chưa biết', tone: 'limited', sources: ['course'],
      text: 'Trang khoá học ghi bài tập 3 có hạn 13/11/2026 lúc 23:59. TA trực 08:00–22:00.\n\nTài liệu được cấp không nêu tên hàm Excel hay chọn cách tính mẫu/tổng thể. Nếu bạn hỏi hàm để dùng, mình chưa có căn cứ để chỉ định; bạn có thể gửi TA hỏi rõ.', actions: ['handoff']
    },
    'closed-assignment': {
      title: 'Bài 2 đã đóng và đã công bố đáp án.', label: 'Được giải thích bài đã đóng', tone: '', sources: ['3.1', 'course'],
      text: 'Trang khoá học ghi bài 2 hết hạn ngày 06/11 và đã công bố đáp án ngày 07/11. Với dữ liệu 4, 8, 6, 5, 7: tổng là 30, có 5 giá trị, nên trung bình cộng là 30 ÷ 5 = 6. Cách tính này theo §3.1.', actions: []
    },
    faq: {
      title: 'AI không tự đăng nội dung cho cả lớp.', label: 'Cần TA duyệt trước khi đăng', tone: 'limited', sources: ['course'],
      text: 'Đăng FAQ có thể làm một câu sai lan tới nhiều người. Gỡ sau đó không thu hồi được những gì đã đọc. Bạn có thể đề nghị TA xem câu hỏi trước; bản nháp và căn cứ phải được TA kiểm tra rồi mới có nút duyệt đăng trong màn hình TA. Không đưa lời giải bài đang mở vào FAQ.', actions: ['handoff']
    },
    unknown: {
      title: 'Mình chưa có căn cứ cho câu hỏi này.', label: 'Ngoài các ca mô phỏng hiện có', tone: 'limited', sources: ['course'],
      text: 'Bản demo chỉ xử lý một số tình huống trên tài liệu buổi 3 và trang khoá học. Mình sẽ không đoán câu trả lời. Bạn có thể sửa câu hỏi cho rõ, chọn một ca gợi ý, hoặc tạo yêu cầu cho TA xem trong hàng chờ mô phỏng.', actions: ['handoff']
    }
  },
  normalize(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  },
  route(text) {
    const q = this.normalize(text);
    if (/bai\s*(tap\s*)?2/.test(q) && !/bai\s*(tap\s*)?3/.test(q)) return 'closed-assignment';
    if (/han nop|han bai|deadline|excel|bang tinh/.test(q) && !/xac nhan|dap so|giai ho|tinh ho/.test(q)) return 'deadline';
    if (/bai\s*(tap\s*)?3|bai dang mo|xac nhan dap|dap so|giai ho/.test(q)) {
      if (/goi y.*buoc dau/.test(q) && !/xac nhan|dap so|giai ho/.test(q)) return 'first-hint';
      return 'open-assignment';
    }
    if (/ban vua.*sai|phan hoi.*chua dung/.test(q)) return 'correction';
    if (/faq|dang.*ca lop/.test(q)) return 'faq';
    if (/luon nho|3\.3|tai lieu.*sai/.test(q)) return 'source-error';
    if (/slide/.test(q)) return 'missing-source';
    if (/p.?value|kiem dinh|buoi\s*7/.test(q)) return 'future-lesson';
    if (/\bngu\b|dot|kem coi/.test(q)) return 'self-doubt';
    if (/han nop|deadline|excel|bang tinh/.test(q)) return 'deadline';
    if (/do lech cua mot gia tri/.test(q)) return 'individual-deviation';
    if (/do lech chuan|phuong sai/.test(q)) return 'standard-deviation';
    if (/ngoai lai/.test(q)) return 'outlier';
    if (/trung vi|trung binh/.test(q)) return 'mean-median';
    if (/do lech/.test(q)) return 'ambiguous';
    return 'unknown';
  }
};
