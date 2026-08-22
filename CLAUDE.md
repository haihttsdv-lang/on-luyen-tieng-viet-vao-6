# CLAUDE.md — on-luyen-tieng-viet-vao-6

Đặc tả đầy đủ: **`URD-ung-dung-on-luyen-tieng-viet-vao-6.md`** (thư mục gốc).
Đọc trước khi viết bất kỳ dòng code nào. File này chỉ chứa quy ước làm việc
và bối cảnh nhanh — không lặp lại nội dung URD hay README.

**Đọc theo thứ tự này khi bắt đầu phiên mới:**
1. File này (quy ước + trạng thái)
2. `README.md` — mục "Trạng thái triển khai" và "Giới hạn đã biết" (chính
   xác, cập nhật) — biết ngay cái gì xong, cái gì chưa, chưa test ở đâu.
3. `docs/open-questions.md` — tham số nào đã chọn tạm mà chưa được xác nhận.
4. URD Mục 22 — 3 quyết định đã chốt (QĐ-1/2/3) + các thông số còn mở.

## Bối cảnh 30 giây

Ứng dụng tự học Tiếng Việt thi vào lớp 6 CLC (Hà Nội), 6 trụ cột: Lý thuyết
· Luyện tập · Thi thử · Lộ trình · Hồ sơ · Đồng bộ đa thiết bị. Chạy hoàn
toàn phía client (không backend riêng), PWA cài được lên Android.

Bản chạy thật: https://haihttsdv-lang.github.io/on-luyen-tieng-viet-vao-6/
(tự deploy khi push lên `master`, xem README mục Triển khai).

**Trạng thái ngắn gọn:** cơ chế (Giai đoạn 0–8) đã xong và test kỹ. **Giai
đoạn 9 (mở rộng nội dung) đã đạt mốc 56/56 chuyên đề có bài học lý thuyết
đầy đủ** — toàn bộ 9 nhóm (KN, CA, CT, NT, TC, CD, VA, TL, DH) đều 100% về
số CHUYÊN ĐỀ, đúng danh sách URD Mục 5.1–5.9 kể cả 3 mục `[BỔ SUNG]` (CA-08,
CT-03/04, TL-06). Việc còn lại của Giai đoạn 9 là MỞ RỘNG SỐ LƯỢNG (không
phải thiếu chuyên đề): mỗi chuyên đề mới có 2–5 bài tập, Mục 5.11 muốn
≥12 bài/chuyên đề nhóm TC/TL/NT/CA/CD, ≥5 bài cảm thụ/chuyên đề CT, ≥4 đề
văn/chuyên đề VA; văn bản đọc hiểu dài 0/25 (khác với 6 chuyên đề KỸ NĂNG
đọc hiểu DH-01→06 đã xong); đề thi thử soạn sẵn 0/8. QĐ bổ sung đã chốt:
không cần giáo viên rà soát, bộ sách chuẩn cho nội dung tranh cãi = Kết
nối tri thức với cuộc sống. Xem README mục "Tiến độ nội dung" để biết
chính xác từng mục còn thiếu bao nhiêu.

## Năm quy tắc không được vi phạm (URD Mục 2)

1. **Không look-ahead bias.** Quyết định tại phiên `t` chỉ dùng dữ liệu ≤ `t`.
2. **Không hardcode luật/tham số.** Cấu hình đề, ngưỡng mastery, danh sách
   chuyên đề... đều là dữ liệu trong `src/content/`, không hardcode trong
   `src/modules/`.
3. **Không phát tín hiệu khi thiếu dữ liệu.** Trạng thái "chưa có dữ liệu"
   luôn hợp lệ — không suy diễn/giả định khi chưa đủ lượt làm bài.
4. **Không có bài viết nào mất dữ liệu.** Bất kỳ ô nhập/bài viết nào cũng
   phải tự lưu (đã có cơ chế mẫu ở `WritingEditor` — FR-A09→A11), đặc biệt
   quan trọng trên Android vì trình duyệt có thể bị hệ điều hành kill bất kỳ
   lúc nào.
5. **Không dùng ngôn ngữ cam kết với học sinh/phụ huynh.** Không "chắc chắn
   đỗ", "đảm bảo tiến bộ". Luôn khiêm tốn, có disclaimer khi cần.

## Quy ước code

- TypeScript strict, `oxlint` sạch, không dùng `any` khi tránh được.
- `src/core/` — logic thuần, **không phụ thuộc React, không I/O** (đọc/ghi
  localStorage/IndexedDB/network). Mọi lookup ra ngoài (topic→group,
  exercise→type...) được inject qua tham số, không import trực tiếp từ
  `data-access`. Đây là lớp có unit test dày nhất và dễ test nhất — logic
  mới nên ưu tiên viết ở đây trước, ghép UI sau.
- `src/data-access/` — lớp duy nhất được chạm localStorage/IndexedDB/
  Firebase. UI không bao giờ gọi thẳng các API đó.
- `src/content/` — toàn bộ bài học/bài tập/văn bản là dữ liệu thuần, tách
  khỏi `src/modules/` và `src/components/` (NFR-06: thêm nội dung mới không
  cần sửa code).
- Giá không dùng ở app này (không phải app tiền tệ), nhưng theo mẫu chung:
  không dùng `float` cho các phép tính có ý nghĩa "đúng/sai" tuyệt đối
  (điểm số, ngưỡng) — dùng số nguyên hoặc so sánh tường minh.

## Kiểm thử — thói quen đã hình thành trong dự án này

- `npm run typecheck && npm run lint && npm run test` phải sạch trước khi
  coi bất kỳ thay đổi nào là xong. Nhưng **chưa đủ** — xem mục dưới.
- **Luôn xác minh qua trình duyệt thật trước khi báo "đã xong".** Dự án này
  nhiều lần phát hiện bug thật (không phải bug test) chỉ khi chạy Playwright
  thật: base path sai làm vỡ trang khi F5 ở route sâu, đồng hồ đếm ngược
  đóng gói `answers` cũ khiến hết giờ mất bài làm, nhầm luồng quiz lý thuyết
  với luồng thi thử... `npm run typecheck`/`lint`/`test` xanh không chứng
  minh tính năng THẬT SỰ hoạt động đúng.
- Bộ e2e chính thức: `npm run e2e` (`tests/e2e/`, chạy cả desktop lẫn
  Android emulation — xem `playwright.config.ts`). Các `scripts/
  smoke-test-*.mjs` là công cụ phát triển nhanh (chạy tay qua
  `npm run preview`), không thay thế bộ e2e chính thức.
- Thêm nội dung/bài tập mới → chạy lại `tests/unit/content-schema.test.ts`
  (kiểm tra cấu trúc) và cân nhắc thêm test case boundary nếu chạm vào
  `core/answer-checker`, `core/mastery-engine`, `core/schedule` (đều có
  ngưỡng/công thức cụ thể, dễ sai lệch 1 đơn vị).

## Definition of Done cho mỗi tác vụ

- [ ] `typecheck` + `lint` + `test` xanh
- [ ] Tính năng mới đã tự tay xác minh qua trình duyệt (Playwright thật,
      không chỉ đọc code)
- [ ] Tham số/ngưỡng mới đã vào `src/content/` hoặc được truyền vào, không
      hardcode trong logic
- [ ] Nếu chạm `core/` — có unit test mới, kể cả test biên (boundary)
- [ ] Nếu thêm output hướng tới học sinh/phụ huynh — tiếng Việt, không dùng
      ngôn ngữ cam kết
- [ ] `README.md` mục "Trạng thái triển khai" / "Giới hạn đã biết" được cập
      nhật nếu có thay đổi đáng kể

## Khi gặp mơ hồ

1. Tra URD trước — phần lớn tham số đã có giá trị mặc định hoặc công thức
   cụ thể (Mục 22 đặc biệt quan trọng).
2. Nếu URD không nói rõ: chọn giá trị **thận trọng hơn**, ghi chú
   `# TODO: cần xác nhận` và thêm dòng vào `docs/open-questions.md` (đã có
   ví dụ mẫu ở đó từ Giai đoạn 5 — cấu hình đề NTT45/BALANCED).
3. Không tự nới lỏng ràng buộc rủi ro (bản quyền ngữ liệu Mục 10.1, ngưỡng
   mastery Mục 22) để "cho ra kết quả đẹp hơn".

## Việc tiếp theo hợp lý nhất

**Mốc 56/56 chuyên đề có lesson đã đạt được** (tất cả 9 nhóm KN/CA/CT/NT/
TC/CD/VA/TL/DH đều có ít nhất 1 lesson + vài bài tập). Giai đoạn 9 từ đây
chuyển sang MỞ RỘNG SỐ LƯỢNG theo đúng mục tiêu Mục 5.11 (không còn phải
tạo chuyên đề mới). Thứ tự hợp lý tiếp theo:

1. **Tăng số bài tập mỗi chuyên đề nhóm TC/TL/NT/CA/CD lên ≥12 bài** (Mục
   5.11: ~350 bài tổng). Hiện mỗi chuyên đề trong 5 nhóm này mới có 2–5
   bài — đây là khối lượng lớn nhất còn lại, nên làm theo từng nhóm một,
   mỗi batch thêm ~8 bài/chuyên đề cho một nhóm, xác minh qua
   `content-schema.test.ts` + trình duyệt thật rồi mới sang nhóm tiếp theo.
2. **Tăng bài cảm thụ nhóm CT lên ≥5 bài/chuyên đề** (~35 bài) — hiện mỗi
   chuyên đề CT có 3–4 bài.
3. **Tăng đề tập làm văn nhóm VA lên ≥4 đề/chuyên đề** (~36 đề) — hiện mỗi
   chuyên đề VA chỉ có 1 đề mẫu. Ưu tiên VA-01→03, VA-09 trước (theo đúng
   thứ tự Mục 5.11).
4. **Văn bản đọc hiểu dài (0/25, mỗi văn bản 5–7 câu hỏi)** — khác với 6
   chuyên đề KỸ NĂNG đọc hiểu DH-01→06 đã có. Cần thiết kế thêm cách lưu
   một đoạn văn dài dùng chung cho nhiều câu hỏi (hiện các bài tập DH đang
   nhúng đoạn văn ngắn trực tiếp vào từng `prompt`, đủ cho việc dạy kỹ
   năng nhưng chưa phải kho văn bản dài theo đúng mục tiêu này — cân nhắc
   dùng field `passageId` đã có sẵn trong `ExerciseBase` (`src/data-access/
   types.ts`) nhưng chưa được dùng ở đâu).
5. **Đề thi thử hoàn chỉnh soạn sẵn theo 4 cấu hình** (0/8) — làm sau cùng,
   khi đã có đủ ngữ liệu (văn bản đọc hiểu, đề văn) để ghép thành đề.

Thói quen đã áp dụng khi xây nội dung mới, giữ nguyên: mỗi chuyên đề có
lesson (concept/signals/examples/commonMistakes, KN thêm `steps`) +
exercises (mcq/fill là chính, thêm order/match cho đa dạng) trong
`src/content/exercises/<id>.ts`, đăng ký vào `src/content/index.ts` và
`src/content/topics/index.ts`, rồi chạy `typecheck && lint && test` +
xác minh nhanh qua trình duyệt thật (topic list hiện đúng, 1 lesson mới mở
được, 1 quiz mới làm được) trước khi coi là xong.

Ngoài Giai đoạn 9, các khoảng trống nhỏ hơn liệt kê ở README mục "Giới hạn
đã biết" đều là các tác vụ độc lập, có thể làm bất kỳ lúc nào không cần chờ
Giai đoạn 9.
