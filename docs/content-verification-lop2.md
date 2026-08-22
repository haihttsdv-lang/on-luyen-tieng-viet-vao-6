# Lớp 2 — Kiểm tra chéo bằng phiên độc lập (Mục 18.3)

Quy trình tái sử dụng được cho lớp 2 của "quy trình kiểm chứng nội dung 3 lớp"
(URD Mục 18.3, mục 2): *"mở phiên làm việc mới không mang lịch sử soạn đề, làm
lại toàn bộ bài tập và đối chiếu đáp án. Mọi điểm lệch rà soát thủ công. Đặc
biệt chú ý nhóm TC (từ ghép/từ láy) và NT (từ nhiều nghĩa/đồng âm)."*

Lớp 1 (kiểm tra cấu trúc tự động, `content-schema.test.ts`) không thể phát
hiện lỗi *nội dung* — ví dụ một câu `mcq` có cấu trúc hoàn toàn hợp lệ
(đủ 4 lựa chọn, `distractorNotes` đầy đủ...) nhưng `answerIndex` trỏ vào một
đáp án sai về mặt ngôn ngữ. Lớp 2 tồn tại để bắt loại lỗi này.

## Vì sao dùng agent thay vì tự tay làm lại

"Phiên làm việc mới không mang lịch sử soạn đề" trong bối cảnh phát triển
bằng AI agent được diễn giải là: một phiên Agent **mới, độc lập, không có
bộ nhớ về cách các câu hỏi này được soạn** — đúng tinh thần "không mang lịch
sử soạn đề" hơn là chính người/agent đã viết câu hỏi tự kiểm tra lại (dễ bị
thiên kiến xác nhận — confirmation bias). Agent con (subagent) mới được spawn
qua tool `Agent` không kế thừa context của phiên đã soạn nội dung, nên thoả
điều kiện này một cách tự nhiên.

## Quy trình từng bước

1. **Trích xuất câu hỏi đã ẩn đáp án** — viết một test tạm trong
   `tests/unit/_tmp-extract-<nhóm>.test.ts`, import `ALL_EXERCISES` từ
   `@/content`, lọc theo `topicIds` của nhóm cần kiểm, in ra JSON qua
   `console.log` (bọc giữa 2 marker để dễ trích), rồi chạy bằng
   `npx vitest run <file>` và cắt phần JSON ra file trong scratchpad. **Ẩn
   hoàn toàn các trường lộ đáp án**: `answerIndex`/`distractorNotes` (mcq),
   `acceptedAnswers`/`strictMode` (fill), `correctPairs` (match),
   `correctOrder` (order) — chỉ giữ `prompt`, `options`/`leftItems`/
   `rightItems`/`items`. Xoá file test tạm ngay sau khi dùng xong.
2. **Trích xuất đáp án gốc riêng** (để đối chiếu, không đưa cho agent) —
   cùng cách trên nhưng giữ nguyên các trường đáp án, lưu vào một file JSON
   khác trong scratchpad.
3. **Spawn agent độc lập** — dùng tool `Agent` (subagent mới, `isolation:
   worktree`), giao đúng file JSON đã ẩn đáp án ở bước 1, yêu cầu giải từng
   câu bằng kiến thức ngôn ngữ của chính agent đó (không tra cứu ngược lại
   dữ liệu gốc), trả lời có cấu trúc (JSON) kèm lý do ngắn cho mỗi câu, đặc
   biệt yêu cầu agent tự nêu rõ khi gặp từ/khái niệm có tranh cãi giữa các
   bộ sách giáo khoa thay vì đoán liều. Nhóm càng lớn nên tách thành nhiều
   agent song song theo nhóm chuyên đề (ví dụ TC riêng, NT riêng) thay vì
   gộp chung một agent, để tránh agent bị loãng khi phải xử lý quá nhiều câu
   trong một lượt.
4. **Đối chiếu tự động** — viết script Node so khớp câu trả lời của agent
   với đáp án gốc (bước 2): `mcq` so `answerIndex`; `fill` dùng lại chính
   hàm chấm `checkFillAnswer` (`src/core/answer-checker`) để so khớp có
   khoan dung dấu/hoa-thường đúng như app thật chấm cho học sinh; `match` so
   từng cặp `{leftId, rightId}`. In ra danh sách các câu lệch.
5. **Rà soát thủ công từng điểm lệch** — với mỗi câu lệch, đọc lại `prompt`
   gốc, lý do agent đưa ra, và giải thích (`explanation`) đã lưu trong nội
   dung. Ba khả năng:
   - **Lỗi nội dung thật** (đáp án gốc sai) → sửa trực tiếp trong file
     `src/content/exercises/<id>.ts` (đáp án, `distractorNotes`/
     `explanation` liên quan), chạy lại `typecheck && lint && test`.
   - **Từ/khái niệm tranh cãi giữa các bộ sách** → nếu thuộc nhóm TC (FR-D02)
     và trùng danh sách `DISPUTED_WORDS`, giữ nguyên (đã có `disputedNote`
     và test tự động canh không dùng làm đáp án đúng — Lớp 1 đã xử lý). Nếu
     là ca mới chưa nằm trong danh sách, cân nhắc thêm vào
     `src/content/disputed-words.ts` hoặc đổi ví dụ sang từ không tranh cãi,
     theo đúng nguyên tắc Mục 8 CLAUDE.md (chọn giá trị thận trọng hơn).
   - **Agent trả lời sai/hiểu nhầm đề** (đáp án gốc đúng) → không sửa nội
     dung; chỉ cần xác nhận và ghi chú lại (không phải mọi điểm lệch đều là
     lỗi nội dung).
6. **Ghi lại kết quả lần chạy** — cập nhật phần "Kết quả các lần chạy" bên
   dưới: ngày chạy, nhóm chuyên đề, số câu, số điểm lệch, số lỗi nội dung
   thật đã sửa. Xoá toàn bộ file JSON tạm trong scratchpad sau khi xong (dữ
   liệu trung gian, không cần giữ lại — chỉ giữ lại tài liệu này).

## Phạm vi ưu tiên

URD Mục 18.3 chỉ định rõ **TC** (từ ghép/từ láy) và **NT** (từ nhiều nghĩa/
đồng âm) là "hai nhóm dễ sai nhất" — đây là phạm vi bắt buộc chạy đầu tiên.
Các nhóm khác (CA, CD, TL, KN, DH, CT, VA) có thể lặp lại đúng quy trình này
theo lô sau, không bắt buộc phải chạy hết trong một lần — chi phí (thời gian
agent, số lượt rà soát thủ công) tăng tuyến tính theo số câu, nên ưu tiên
nhóm rủi ro cao trước là hợp lý, đúng tinh thần Mục 8 CLAUDE.md.

## Kết quả các lần chạy

### 2026-08-22 — TC (4 chuyên đề, 48 câu) và NT (6 chuyên đề, 72 câu)

Chạy đúng quy trình ở trên: 2 agent độc lập (tool `Agent`, `isolation:
worktree`, không có bộ nhớ về phiên soạn nội dung), mỗi agent nhận đúng 1
nhóm (TC hoặc NT) đã ẩn đáp án, giải độc lập bằng kiến thức ngôn ngữ riêng,
trả lời có lý do kèm theo.

**Kết quả đối chiếu: 120/120 câu khớp hoàn toàn với đáp án gốc, 0 điểm
lệch.**

Cả hai agent đều tự nêu rõ một số ca "khó/dễ lăn tăn" trong phần lý do dù
vẫn đi đến đúng đáp án gốc — đã rà soát thủ công riêng 5 câu này để xác
nhận `explanation` đã lưu trong nội dung giải thích rõ đúng điểm agent
lăn tăn, không cần sửa:

- `nt-03-mcq-3` ("bàn tay" vs "bàn bạc") và `nt-03-mcq-8` ("lồng chim" vs
  "lồng vải") — cả hai agent coi đây là đồng âm rõ ràng hơn ví dụ đồng âm
  kinh điển trong sách, nhưng vẫn xác nhận đúng là đồng âm (hai nghĩa
  không liên quan về gốc), khớp `explanation` đã có.
- `nt-02-mcq-2` ("nhạt" → trái nghĩa) và `nt-02-mcq-7` ("rộng" → trái
  nghĩa) — cả hai đều là trường hợp trái nghĩa phụ thuộc ngữ cảnh (vị
  giác/kích cỡ quần áo, không phải nghĩa chung nhất), agent tự nêu băn
  khoăn nhưng `explanation` đã lưu giải thích đúng lý do chọn đáp án theo
  ngữ cảnh.
- `tc-04-mcq-5` ("bâng khuâng" → láy vần) — vần "âng"/"uâng" không khớp
  hoàn toàn 100% do âm đệm "u", agent ghi nhận đây là cách phân loại chuẩn
  theo sách giáo khoa dù về ngữ âm học thuần tuý có thể tranh luận;
  `explanation` hiện tại đã nêu đúng căn cứ (phần vần "âng" trùng nhau).

Không phát hiện lỗi nội dung thật nào trong lần chạy này. Không có ca nào
cần thêm vào `disputed-words.ts`.

**Còn lại:** các nhóm khác (CA, CD, TL, KN, DH, CT, VA) chưa chạy qua quy
trình này — có thể lặp lại đúng các bước ở trên theo lô khi cần, không
bắt buộc phải hoàn thành ngay (xem "Phạm vi ưu tiên" ở trên).
