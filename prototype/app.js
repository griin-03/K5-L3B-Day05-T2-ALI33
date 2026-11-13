(() => {
  'use strict';
  const lab = window.ALI33_LAB;
  const STORAGE_KEY = 'ali33-day05-prototype-v1';
  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const emptyState = () => ({ version: 1, messages: [], requests: [], faqs: [], counter: 0, clock: '22:10', annotations: false });
  let state = load();
  let view = 'student';
  let selectedRequest = state.requests[0]?.id || null;
  let pendingHandoff = null;
  let feedbackIndex = null;
  let toastTimer;

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved?.version === 1 && ['messages', 'requests', 'faqs'].every((key) => Array.isArray(saved[key])) && Number.isInteger(saved.counter)) {
        return { ...emptyState(), ...saved, clock: saved.clock === '10:00' ? '10:00' : '22:10' };
      }
    } catch { /* file:// hoặc trình duyệt hạn chế lưu vẫn dùng được trong phiên. */ }
    return emptyState();
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch { toast('Trình duyệt không cho lưu; tải lại sẽ bắt đầu phiên mới.'); }
  }

  function toast(text) {
    clearTimeout(toastTimer);
    $('#toast').textContent = text;
    $('#toast').hidden = false;
    toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 3800);
  }

  function sourceButtons(sources) {
    return sources.map((id) => `<button class="source-chip" data-source="${escapeHTML(id)}">${id === 'course' ? 'Trang khoá học' : '§' + escapeHTML(id)} ↗</button>`).join('');
  }

  function availability() {
    return state.clock === '22:10'
      ? 'Đang ngoài giờ TA. TA trở lại từ 08:00 ngày 14/11; chưa có cam kết phản hồi trước hạn bài 3 tối nay.'
      : 'Đang trong giờ TA. Chưa có cam kết thời điểm trả lời; gửi yêu cầu không làm thay đổi hạn bài.';
  }

  function renderMessages() {
    const messages = $('#messages');
    if (!state.messages.length) {
      messages.innerHTML = `<div class="welcome"><div class="welcome-symbol" aria-hidden="true">✳</div><h2>Hỏi một câu, hiểu thêm một chút.</h2><p>Mình dùng tài liệu buổi 3 để gợi mở. Chưa đủ căn cứ thì cùng hỏi lại, thay vì đoán.</p><div class="prompt-grid">${lab.starters.map((item, index) => `<button class="prompt-card" data-start="${index}"><b aria-hidden="true">↗</b><strong>${escapeHTML(item.title)}</strong><span>${escapeHTML(item.detail)}</span></button>`).join('')}</div></div>`;
      return;
    }
    messages.innerHTML = state.messages.map((message, index) => {
      const reply = lab.replies[message.topic] || lab.replies.unknown;
      if (message.hidden) return `<article class="message user"><div class="user-bubble">${escapeHTML(message.question)}</div></article><article class="message"><p class="review-note">Bạn đã ẩn gợi ý này. Ẩn không thu hồi được nội dung đã đọc.</p><button class="link-button" data-restore="${index}">Khôi phục gợi ý</button></article>`;
      return `<article class="message user"><div class="user-bubble">${escapeHTML(message.question)}</div></article><article class="message assistant"><div class="assistant-label"><span aria-hidden="true">✳</span> TRỢ LÝ · PHẢN HỒI MÔ PHỎNG</div><div class="answer-card ${escapeHTML(reply.tone)}" data-note="2"><span class="state-tag ${escapeHTML(reply.tone)}">${escapeHTML(reply.label)}</span><h3>${escapeHTML(reply.title)}</h3><p class="answer-copy">${escapeHTML(reply.text)}</p><div class="source-chips">${sourceButtons(reply.sources)}</div>${reply.choices ? `<div class="clarification-options">${reply.choices.map((choice, i) => `<button class="button secondary" data-choice="${i}" data-message="${index}">${escapeHTML(choice.label)}</button>`).join('')}</div>` : ''}${renderAnswerActions(reply, index)}</div><div class="message-correction"><button class="link-button" data-hide="${index}">Ẩn gợi ý</button><button class="link-button" data-edit="${index}">Sửa câu hỏi</button><button class="link-button" data-feedback="${index}">Báo phản hồi chưa đúng</button></div></article>`;
    }).join('');
  }

  function renderAnswerActions(reply, index) {
    const buttons = [];
    if (reply.actions.includes('example')) buttons.push(`<button class="button secondary" data-example="true">Xem ví dụ</button>`);
    if (reply.actions.includes('handoff')) buttons.push(`<button class="button primary" data-handoff="${index}">${['source-error', 'standard-deviation', 'correction'].includes(state.messages[index].topic) ? 'Đề nghị TA xác minh' : 'Hỏi TA'} ↗</button>`);
    return buttons.length ? `<div class="answer-actions">${buttons.join('')}</div>` : '';
  }

  function renderStudentRequests() {
    $('#student-requests').innerHTML = state.requests.map((request) => {
      const cancelled = request.status === 'cancelled';
      const waiting = request.status === 'waiting';
      const status = cancelled ? 'Đã rút yêu cầu' : waiting ? 'Chờ TA · mô phỏng' : 'Đã có phản hồi · mô phỏng';
      return `<article class="request-card" data-note="3"><span class="request-state">${escapeHTML(request.id)} · ${status}</span><h3>${escapeHTML(lab.replies[request.topic]?.title || 'Câu hỏi cần xem')}</h3><p>${cancelled ? 'Yêu cầu đã được rút khỏi hàng chờ xử lý.' : request.reply ? escapeHTML(request.reply) : escapeHTML(availability())}</p>${waiting ? `<button class="link-button" data-cancel="${escapeHTML(request.id)}" ${request.verified ? 'disabled' : ''}>Rút yêu cầu</button>${request.verified ? '<p>TA đã bắt đầu xác minh nên không thể rút trong demo này.</p>' : ''}` : ''}<p class="review-note">Chỉ lưu trong demo; chưa gửi hay thông báo TA thật.</p></article>`;
    }).join('');
    $('#student-faq').innerHTML = state.faqs.filter((item) => item.active).map((item) => `<article class="faq-card"><span class="status-pill reviewed">FAQ đã được TA duyệt · mô phỏng</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.body)}</p>${sourceButtons(['3.3'])}</article>`).join('');
  }

  function renderTA() {
    const waiting = state.requests.filter((r) => r.status === 'waiting').length;
    $('#queue-count').textContent = waiting;
    $('#ta-queue-total').textContent = `${waiting} đang chờ`;
    $('#ta-requests').innerHTML = state.requests.length ? state.requests.map((request) => `<button class="queue-item ${request.id === selectedRequest ? 'selected' : ''}" data-select-request="${escapeHTML(request.id)}"><span class="status-pill ${request.status === 'waiting' ? 'amber' : ''}">${request.status === 'cancelled' ? 'Đã rút' : request.status === 'answered' ? 'Đã phản hồi' : 'Cần xem'}</span><strong>${escapeHTML(lab.replies[request.topic]?.title || 'Câu hỏi học viên')}</strong><small>${escapeHTML(request.id)} · Học viên mẫu</small><p>13/11/2026 · ${escapeHTML(request.createdAt)}</p></button>`).join('') : '<div class="empty-panel"><span aria-hidden="true">▤</span>Chưa có câu hỏi nào.<p>Học viên phải xác nhận chuyển trước khi yêu cầu xuất hiện tại đây.</p></div>';
    const request = state.requests.find((r) => r.id === selectedRequest);
    if (!request) {
      $('#ta-detail').innerHTML = '<div class="empty-instruction"><strong>Một câu hỏi, đủ bối cảnh.</strong>Chọn yêu cầu để xem nội dung học viên đã xác nhận gửi, căn cứ và giới hạn hỗ trợ.</div>';
      return;
    }
    const reply = lab.replies[request.topic] || lab.replies.unknown;
    const sourceIssue = ['source-error', 'standard-deviation', 'correction'].includes(request.topic);
    const cancelled = request.status === 'cancelled';
    const faq = state.faqs.find((f) => f.requestId === request.id);
    const evidence = sourceIssue ? `<div class="evidence-box"><strong>§3.3 · câu gốc cần xem lại</strong><p>“Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.”</p><div class="counterexample">σ² = 0,25 → σ = 0,5</div><p>Ví dụ kiểm tra cho thấy mệnh đề “luôn nhỏ hơn” không đúng. Xác minh phản hồi không đồng nghĩa đã sửa tài liệu chính thức.</p></div>` : `<div class="evidence-box"><strong>Giới hạn hỗ trợ</strong><p>${['open-assignment', 'first-hint', 'method-review'].includes(request.topic) ? 'Bài tập 3 đang mở: không đưa hoặc xác nhận đáp số. Chỉ gửi lại gợi ý bước đầu theo §3.2 và chuyển giảng viên nếu cần quyết định vượt quyền.' : 'Chỉ dùng tài liệu buổi đã mở. Không tạo nguồn hoặc cam kết thời gian trả lời không có trong trang khoá học.'}</p></div>`;
    let reviewControls = '';
    if (!cancelled) {
      reviewControls = `${sourceIssue ? `<div class="review-toolbar"><button class="button secondary" data-verify="${escapeHTML(request.id)}" ${request.verified ? 'disabled' : ''}>${request.verified ? 'Đã xác minh phản hồi · mô phỏng' : 'Xác minh phản hồi · mô phỏng'}</button></div>` : ''}<div class="review-toolbar"><button class="button primary" data-reply="${escapeHTML(request.id)}" ${request.status === 'answered' || (sourceIssue && !request.verified) ? 'disabled' : ''}>${request.status === 'answered' ? 'Đã gửi phản hồi · mô phỏng' : 'Gửi phản hồi an toàn · mô phỏng'}</button></div><p class="review-note">${sourceIssue ? 'Nội dung gửi: chỉ ra câu sai, ví dụ đối chiếu và đề nghị giảng viên sửa. ' : 'Nội dung gửi: gợi ý có giới hạn; không giải hộ bài đang mở. '}Không thay hạn nộp. Không thông báo TA hay học viên thật.</p>`;
    }
    const faqPanel = sourceIssue && !cancelled ? `<section class="review-section"><h3>Đề xuất FAQ cho cả lớp</h3><div class="faq-draft" data-note="4"><span class="status-pill ${faq?.active ? 'reviewed' : 'amber'}">${faq?.active ? 'Đã đăng · mô phỏng' : faq ? 'Đã gỡ · mô phỏng' : 'Bản nháp · cần TA duyệt'}</span><h3>Độ lệch chuẩn có luôn nhỏ hơn phương sai?</h3><p>Không phải mọi trường hợp. Khi phương sai là 0,25 thì độ lệch chuẩn là 0,5. Câu so sánh trong §3.3 cần giảng viên xem lại; định nghĩa căn bậc hai giúp tự kiểm tra mệnh đề.</p>${sourceButtons(['3.3'])}<label class="check-label"><input type="checkbox" data-faq-ack="${escapeHTML(request.id)}" ${request.faqAcknowledged ? 'checked' : ''} ${!request.verified || faq ? 'disabled' : ''}><span>Tôi đã đối chiếu phản hồi, kiểm tra ẩn danh và đồng ý cho bản này hiển thị với cả lớp trong demo.</span></label><button class="button primary" data-publish="${escapeHTML(request.id)}" ${!request.verified || !request.faqAcknowledged || faq ? 'disabled' : ''}>TA duyệt & đăng FAQ · mô phỏng</button>${faq?.active ? `<button class="button danger" data-remove-faq="${escapeHTML(faq.id)}">Gỡ FAQ</button>` : ''}<p class="decision-note">${faq && !faq.active ? 'Đã gỡ khỏi danh sách. Không thể thu hồi những gì người khác đã đọc.' : 'Gỡ được sau khi đăng, nhưng không thu hồi được những gì cả lớp đã đọc.'}</p></div></section>` : '';
    $('#ta-detail').innerHTML = `<div class="review-content"><div class="review-top"><span class="eyebrow">${escapeHTML(request.id)} / HỌC VIÊN MẪU</span><span class="status-pill ${cancelled ? '' : 'amber'}">${cancelled ? 'Yêu cầu đã rút' : 'Duyệt bằng vai trò TA mô phỏng'}</span></div><h2>${escapeHTML(reply.title)}</h2><div class="review-question">${escapeHTML(request.question)}</div><section class="review-section" data-note="1"><h3>Căn cứ cần kiểm tra</h3>${evidence}<div class="source-chips">${sourceButtons(reply.sources)}</div></section>${cancelled ? '<p class="reviewed-label">Yêu cầu đã rút; không có hành động xử lý hay đăng FAQ.</p>' : reviewControls}${faqPanel}</div>`;
  }

  function render() {
    document.body.classList.toggle('annotated', state.annotations);
    $('#annotation-toggle').setAttribute('aria-pressed', String(state.annotations));
    $('#demo-clock').value = state.clock;
    $('#ta-availability').textContent = availability();
    renderMessages();
    renderStudentRequests();
    renderTA();
    setView(view, false);
  }

  function setView(next, moveFocus = true) {
    view = next === 'ta' ? 'ta' : 'student';
    $('#student-view').hidden = view !== 'student';
    $('#ta-view').hidden = view !== 'ta';
    $('#view-label').textContent = view === 'ta' ? 'Hàng chờ TA · mô phỏng' : 'Trợ lý học bài';
    document.querySelectorAll('[data-view]').forEach((button) => {
      button.classList.toggle('selected', button.dataset.view === view);
      button.setAttribute('aria-pressed', String(button.dataset.view === view));
    });
    if (moveFocus) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function submit(question, topicOverride = null) {
    const text = question.trim().slice(0, 1200);
    if (!text) return toast('Bạn viết một câu hỏi trước nhé.');
    state.messages.push({ question: text, topic: topicOverride && lab.replies[topicOverride] ? topicOverride : lab.route(text) });
    $('#question').value = '';
    $('#conversation-status').hidden = true;
    save(); render();
    $('#messages').scrollTop = $('#messages').scrollHeight;
    $('#question').focus();
  }

  function showSource(id) {
    const source = lab.sources[id];
    if (!source) return;
    $('#source-content').innerHTML = `<p class="eyebrow">${id === 'course' ? 'TRANG KHOÁ HỌC / DỮ LIỆU B' : 'TÀI LIỆU BUỔI 3 / §' + escapeHTML(id)}</p><h2>${escapeHTML(source.title)}</h2><div class="source-body">${escapeHTML(source.body)}</div>${source.warning ? '<p class="source-warning">Câu “luôn nhỏ hơn phương sai” đang được đánh dấu cần giảng viên xem lại. Tài liệu gốc chưa bị sửa trong demo.</p>' : ''}`;
    $('#source-dialog').showModal();
  }

  function beginHandoff(index) {
    const message = state.messages[index];
    if (!message) return;
    const reply = lab.replies[message.topic] || lab.replies.unknown;
    pendingHandoff = { question: message.question, topic: message.topic, sourceIds: [...reply.sources] };
    if (['source-error', 'standard-deviation', 'correction'].includes(message.topic)) {
      pendingHandoff.evidence = { quote: lab.sources['3.3'].body, reason: 'Câu so sánh cần xem lại: phương sai 0,25 → độ lệch chuẩn 0,5.' };
    }
    $('#simulate-send-failure').checked = false;
    $('#handoff-error').hidden = true;
    $('#confirm-handoff').textContent = 'Xác nhận gửi · mô phỏng';
    $('#handoff-preview').innerHTML = `<div class="preview-box"><p>${escapeHTML(message.question)}</p><small>Buổi 3 · ${escapeHTML(reply.sources.map((id) => id === 'course' ? 'Trang khoá học' : '§' + id).join(', '))}</small><small>Gửi kèm: câu hỏi, mã mục liên quan và trạng thái cần xem. Không gửi toàn bộ hội thoại.</small></div><p class="wait-notice">${escapeHTML(availability())} Việc gửi không gia hạn bài. Chỉ thêm vào hàng chờ trên máy này, không gửi TA thật.</p>`;
    if (pendingHandoff.evidence) {
      const evidence = document.createElement('div'); evidence.className = 'preview-box';
      const title = document.createElement('small'); title.textContent = 'Gửi kèm nguyên văn §3.3 và lý do cần xác minh';
      const quote = document.createElement('p'); quote.textContent = pendingHandoff.evidence.quote;
      const reason = document.createElement('small'); reason.textContent = pendingHandoff.evidence.reason;
      evidence.append(title, quote, reason); $('#handoff-preview').prepend(evidence);
    }
    $('#handoff-dialog').showModal();
  }

  function confirmHandoff() {
    if (!pendingHandoff) return;
    if ($('#simulate-send-failure').checked) {
      $('#handoff-error').textContent = 'Yêu cầu chưa gửi thành công. Nội dung vẫn ở bản nháp; không có TA nào được thông báo. Bỏ chọn ca lỗi rồi bấm Thử lại để tiếp tục mô phỏng.';
      $('#handoff-error').hidden = false;
      $('#confirm-handoff').textContent = 'Thử lại · mô phỏng';
      return;
    }
    const duplicate = state.requests.find((r) => r.question === pendingHandoff.question && r.topic === pendingHandoff.topic && r.status === 'waiting');
    if (duplicate) {
      pendingHandoff = null; $('#handoff-dialog').close();
      return toast('Câu hỏi này đã có trong hàng chờ mô phỏng.');
    }
    state.counter += 1;
    const request = { ...pendingHandoff, id: 'TA-' + String(state.counter).padStart(3, '0'), status: 'waiting', verified: false, faqAcknowledged: false, createdAt: state.clock };
    state.requests.unshift(request);
    selectedRequest = request.id;
    pendingHandoff = null;
    $('#handoff-dialog').close();
    save(); render(); toast('Đã thêm yêu cầu vào hàng chờ mô phỏng. Chưa gửi TA thật.');
    $('#student-requests button')?.focus();
  }

  function cancelRequest(id) {
    const request = state.requests.find((r) => r.id === id);
    if (!request || request.status !== 'waiting' || request.verified) return;
    request.status = 'cancelled';
    save(); render(); toast('Đã rút yêu cầu khỏi hàng chờ mô phỏng.');
  }

  function verifyRequest(id) {
    const request = state.requests.find((r) => r.id === id);
    if (view !== 'ta' || !request || request.status === 'cancelled') return;
    request.verified = true;
    save(); render(); toast('Đã xác minh phản hồi mô phỏng; tài liệu gốc chưa được sửa.');
  }

  function replyToRequest(id) {
    const request = state.requests.find((r) => r.id === id);
    if (view !== 'ta' || !request || request.status !== 'waiting') return;
    const sourceIssue = ['source-error', 'standard-deviation', 'correction'].includes(request.topic);
    if (sourceIssue && !request.verified) return;
    request.reply = sourceIssue
      ? 'TA mô phỏng: câu “luôn nhỏ hơn” cần sửa. Ví dụ phương sai 0,25 → độ lệch chuẩn 0,5. Đề nghị giảng viên cập nhật tài liệu chính thức; bản gốc trong demo vẫn giữ nguyên.'
      : ['open-assignment', 'first-hint', 'method-review'].includes(request.topic)
        ? 'TA mô phỏng: chỉ gợi ý sắp xếp dữ liệu và xác định hai vị trí giữa theo §3.2. Không đưa hoặc xác nhận đáp số bài 3 đang mở.'
        : 'TA mô phỏng đã nhận câu hỏi để xem căn cứ. Chưa có thêm tài liệu hay cam kết thời điểm giải đáp; không tự thay hạn nộp.';
    request.status = 'answered';
    save(); render(); toast('Phản hồi mô phỏng đã hiện ở màn hình học viên.');
  }

  function publishFAQ(id) {
    const request = state.requests.find((r) => r.id === id);
    if (view !== 'ta' || !request || request.status === 'cancelled' || !request.verified || !request.faqAcknowledged || state.faqs.some((f) => f.requestId === id)) return;
    state.faqs.push({ id: 'FAQ-' + id, requestId: id, active: true, title: 'Độ lệch chuẩn có luôn nhỏ hơn phương sai?', body: 'Không phải mọi trường hợp. Phương sai 0,25 thì độ lệch chuẩn là 0,5. Câu so sánh ở §3.3 cần giảng viên xem lại; tài liệu gốc chưa được sửa trong demo.' });
    save(); render(); toast('FAQ đã được TA duyệt và đăng trong demo.');
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button || button.disabled) return;
    const data = button.dataset;
    if (data.view) setView(data.view);
    else if (data.example) {
      $('#source-content').innerHTML = '<p class="eyebrow">VÍ DỤ KIỂM TRA · DỮ LIỆU TỰ DỰNG</p><h2>Một phản ví dụ cho “luôn nhỏ hơn”.</h2><div class="source-body">Phương sai σ² = 0,25\nĐộ lệch chuẩn σ = √0,25 = 0,5\n\n0,5 không nhỏ hơn 0,25. Mệnh đề trong §3.3 không đúng trong mọi trường hợp. Hai đại lượng còn có đơn vị khác nhau.</div><p class="source-warning">Ví dụ dùng để kiểm tra mệnh đề, không phải đáp số bài 3. Tài liệu gốc chưa được sửa.</p>';
      $('#source-dialog').showModal();
    }
    else if (data.source) showSource(data.source);
    else if (data.close) document.getElementById(data.close).close();
    else if (data.start !== undefined) submit(lab.starters[Number(data.start)].question);
    else if (data.handoff !== undefined) beginHandoff(Number(data.handoff));
    else if (data.cancel) cancelRequest(data.cancel);
    else if (data.selectRequest) { selectedRequest = data.selectRequest; renderTA(); }
    else if (data.verify) verifyRequest(data.verify);
    else if (data.reply) replyToRequest(data.reply);
    else if (data.publish) publishFAQ(data.publish);
    else if (data.removeFaq && view === 'ta') {
      const faq = state.faqs.find((f) => f.id === data.removeFaq);
      if (faq) { faq.active = false; save(); render(); toast('Đã gỡ FAQ mô phỏng; không thu hồi được nội dung đã đọc.'); }
    } else if (data.hide !== undefined || data.restore !== undefined) {
      const index = Number(data.hide ?? data.restore);
      if (state.messages[index]) { state.messages[index].hidden = data.hide !== undefined; save(); render(); }
    } else if (data.feedback !== undefined) {
      feedbackIndex = Number(data.feedback); $('#feedback-text').value = ''; $('#feedback-dialog').showModal();
    } else if (data.edit !== undefined) {
      $('#question').value = state.messages[Number(data.edit)]?.question || '';
      $('#question').focus();
      $('#conversation-status').textContent = 'Bạn có thể sửa hoặc thêm chỗ cần kiểm tra. Chưa tạo yêu cầu TA cho đến khi bạn xác nhận.';
      $('#conversation-status').hidden = false;
    } else if (data.choice !== undefined) {
      const topic = state.messages[Number(data.message)]?.topic;
      const choice = lab.replies[topic]?.choices?.[Number(data.choice)];
      if (choice?.action === 'method') { $('#method-text').value = ''; $('#method-dialog').showModal(); }
      else if (choice) submit(choice.question, choice.topic);
    }
  });

  document.addEventListener('change', (event) => {
    const id = event.target.dataset.faqAck;
    if (!id || view !== 'ta') return;
    const request = state.requests.find((r) => r.id === id);
    if (!request?.verified || request.status === 'cancelled') return;
    request.faqAcknowledged = event.target.checked;
    save(); renderTA();
  });
  $('#composer').addEventListener('submit', (event) => { event.preventDefault(); submit($('#question').value); });
  $('#question').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault(); $('#composer').requestSubmit(); }
  });
  $('#demo-clock').addEventListener('change', (event) => { state.clock = event.target.value; save(); render(); });
  $('#confirm-handoff').addEventListener('click', confirmHandoff);
  $('#feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const text = $('#feedback-text').value.trim();
    const original = state.messages[feedbackIndex];
    if (!text || !original) return;
    const topic = ['source-error', 'standard-deviation', 'correction'].includes(original.topic) ? 'correction'
      : ['open-assignment', 'first-hint', 'method-review'].includes(original.topic) ? 'open-assignment' : 'feedback-generic';
    $('#feedback-dialog').close(); submit('Phản hồi về câu trả lời trước: ' + text, topic);
  });
  $('#method-form').addEventListener('submit', (event) => {
    event.preventDefault(); const text = $('#method-text').value.trim();
    if (!text) return;
    $('#method-dialog').close(); submit('Cách làm em đã thử: ' + text, 'method-review');
  });
  $('#handoff-dialog').addEventListener('close', () => { pendingHandoff = null; });
  $('#annotation-toggle').addEventListener('click', () => { state.annotations = !state.annotations; save(); render(); });
  $('#reset-button').addEventListener('click', () => $('#reset-dialog').showModal());
  $('#confirm-reset').addEventListener('click', () => {
    $('#reset-dialog').close(); state = emptyState(); selectedRequest = null; pendingHandoff = null; view = 'student';
    $('#question').value = ''; $('#conversation-status').hidden = true;
    save(); render(); toast('Đã bắt đầu lại demo.');
  });

  $('#source-list').innerHTML = Object.entries(lab.sources).filter(([id]) => id !== 'course').map(([id, source]) => `<button class="source-button ${source.warning ? 'has-warning' : ''}" data-source="${id}"><span class="source-code">§${id}</span><span>${escapeHTML(source.title)}</span>${source.warning ? '<span class="source-flag" aria-label="Mục này có câu cần xem lại">△</span>' : ''}</button>`).join('');
  render();
})();
