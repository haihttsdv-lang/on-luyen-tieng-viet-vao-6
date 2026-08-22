# Ôn luyện Tiếng Việt vào lớp 6

Ứng dụng tự học môn Tiếng Việt thi vào lớp 6 chất lượng cao (Hà Nội): Lý
thuyết · Luyện tập · Thi thử · Lộ trình · Hồ sơ, đồng bộ đa thiết bị. Chạy
hoàn toàn phía client, cài được lên màn hình chính Android như một ứng dụng
thật (PWA).

Đặc tả đầy đủ: [`URD-ung-dung-on-luyen-tieng-viet-vao-6.md`](./URD-ung-dung-on-luyen-tieng-viet-vao-6.md).
Ghi chú tham chiếu từ ứng dụng Tiếng Anh cùng hệ sinh thái: [`docs/reference-app-notes.md`](./docs/reference-app-notes.md).

**Bản chạy thử trực tiếp:** https://haihttsdv-lang.github.io/on-luyen-tieng-viet-vao-6/
(tự động build lại mỗi khi có commit mới lên nhánh `master` — xem mục Triển khai).

## Bắt đầu

```bash
npm install
npm run dev
```

Mở `http://localhost:5173`.

## Lệnh thường dùng

```bash
npm run dev              # chạy dev server
npm run build             # build bản hosted, deploy ở domain gốc (BrowserRouter)
npm run build:gh-pages    # build cho GitHub Pages, deploy ở subpath (HashRouter)
npm run build:singlefile  # build 1 file HTML chạy qua file:// (HashRouter, NFR-11)
npm run preview           # xem thử bản build
npm run test               # chạy unit test (Vitest)
npm run test:coverage      # unit test kèm coverage
npm run e2e                 # chạy e2e test (Playwright, cả desktop + Android emulation)
npm run lint                # oxlint
npm run typecheck           # tsc --noEmit, chế độ strict
node scripts/smoke-test.mjs         # kiểm tra nhanh luồng Luyện tập qua Chromium thật
node scripts/smoke-test-writing.mjs # kiểm tra trình soạn thảo: tự lưu nháp, khôi phục sau reload, FR-P10
node scripts/smoke-test-theory.mjs  # kiểm tra luồng bài học → quiz → trạng thái "Đã nắm"
node scripts/smoke-test-mocktest.mjs # kiểm tra thi thử: 4 cấu hình, đếm giờ, tự nộp khi hết giờ
node scripts/smoke-test-curriculum.mjs # kiểm tra lộ trình: 3 giai đoạn, thẻ hôm nay, tự đánh giá, nén lịch
node scripts/smoke-test-profile.mjs # kiểm tra hồ sơ: gợi ý, radar, sao lưu/khôi phục, trang phụ huynh
node scripts/smoke-test-gamification.mjs # kiểm tra xu, huy hiệu, thử thách tốc độ, đồng bộ (chưa cấu hình)
                             # (cả bảy script trên cần `npm run preview` đang chạy ở cổng 4173)
```

`npm run e2e` chạy bộ test Playwright chính thức trong `tests/e2e/` (2 project:
desktop-chromium + android-pixel7 — FR-A20), gồm 3 kịch bản FR-A21 bắt buộc
(nhập tiếng Việt có dấu, khôi phục nháp sau khi rời trang, bàn phím ảo khi
thi thử) cùng kiểm tra hoạt động offline (FR-A02) và thời gian hiển thị nội
dung đầu tiên trên mạng 4G mô phỏng (FR-A18). Các `scripts/smoke-test-*.mjs`
là công cụ phát triển nhanh, không thay thế bộ test chính thức.

## Đồng bộ đa thiết bị (tùy chọn)

Tính năng Đồng bộ dùng Firebase (Firestore + Anonymous Auth). Không bắt
buộc — nếu bạn không cấu hình, ứng dụng vẫn chạy đầy đủ các tính năng khác,
chỉ ẩn/khoá phần Đồng bộ và hiện hướng dẫn thay vì lỗi (SY-14).

Để bật tính năng này:

1. Vào [Firebase Console](https://console.firebase.google.com/), tạo dự án
   mới (miễn phí, gói Spark).
2. Trong dự án, vào **Build → Firestore Database**, bấm **Create database**,
   chọn chế độ **Production**.
3. Vào **Build → Authentication → Sign-in method**, bật **Anonymous**.
4. Vào **Project settings → General**, cuộn xuống **Your apps**, bấm biểu
   tượng `</>` để tạo một Web App, đặt tên tuỳ ý.
5. Sao chép các giá trị `apiKey`, `authDomain`, `projectId`, `storageBucket`,
   `messagingSenderId`, `appId` được hiển thị.
6. Sao chép `.env.example` thành `.env`, dán 6 giá trị trên vào các biến
   `VITE_FIREBASE_*` tương ứng.
7. Vào **Firestore Database → Rules**, dán luật sau rồi **Publish** (chỉ cho
   phép người dùng đã xác thực ẩn danh đọc/ghi đúng document đồng bộ của họ):

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /progress_sync/{syncCode} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

8. Chạy lại `npm run dev` — mục Đồng bộ trong trang Hồ sơ sẽ hoạt động.

## Triển khai (GitHub Pages)

`.github/workflows/deploy.yml` tự động build và triển khai lên GitHub Pages
mỗi khi có commit mới lên `master` (typecheck + lint + unit test phải xanh
trước khi deploy). Kích hoạt lần đầu (chỉ cần làm một lần):

1. Vào **Settings → Pages** của repo trên GitHub.
2. Ở mục **Build and deployment → Source**, chọn **GitHub Actions** (không
   chọn "Deploy from a branch").
3. Đợi workflow chạy xong (tab **Actions**) — lần đầu mất khoảng 1-2 phút.
4. Ứng dụng sẽ có ở `https://<username>.github.io/<tên-repo>/`.

**Vì sao có `build:gh-pages` riêng, không dùng `build` thường:** GitHub
Pages phục vụ project ở một subpath (`/tên-repo/`), không phải domain gốc,
và không có cơ chế rewrite deep-link về `index.html` khi tải lại trang —
giống hệt vấn đề khiến bản `build:singlefile` phải dùng `HashRouter` (xem
`src/app/App.tsx`). `build:gh-pages` dùng base path tương đối (giống
singlefile) + `HashRouter`, nhưng vẫn giữ Service Worker/PWA (khác
singlefile, vốn tắt PWA vì chạy qua `file://`). Đã kiểm chứng cục bộ bằng
`scripts/serve-subpath.mjs` (giả lập subpath) + `scripts/smoke-test-gh-pages.mjs`
trước khi đưa vào workflow.

Muốn deploy sang nơi khác (Vercel/Netlify/Firebase Hosting ở domain gốc) thì
dùng `npm run build` (bản `BrowserRouter`, base path tuyệt đối) thay vì
`build:gh-pages`.

## Cấu trúc dự án

Xem Mục 18 của URD. Tóm tắt:

- `src/core/` — logic thuần (chuẩn hoá văn bản, chấm bài, tính mastery, sinh
  đề, lịch học...), không phụ thuộc React, có unit test riêng.
- `src/content/` — toàn bộ bài học/bài tập/văn bản, tách khỏi mã nguồn
  (NFR-06: thêm nội dung không cần sửa `src/modules/` hay `src/components/`).
- `src/data-access/` — lớp trừu tượng cho localStorage/IndexedDB (local) và
  Firebase (cloud, lazy-load).
- `src/modules/` — từng module chức năng (theory, practice, writing,
  mock-test, curriculum, profile).

## Trạng thái triển khai

- [x] Giai đoạn 0 — khởi tạo dự án, cấu hình PWA
- [x] Giai đoạn 1 — `core/text-normalize` + `core/answer-checker`, unit test
      phủ FR-M01→M09
- [x] Giai đoạn 2 — Module Luyện tập: `data-access` (ProgressStore/ContentStore),
      nội dung mẫu 3 chuyên đề (NT-01, CA-03, CD-01), đủ 5 loại câu hỏi, sổ lỗi
- [x] Giai đoạn 3 — Trình soạn thảo bài viết (`WritingStore` trên IndexedDB),
      tự lưu nháp mỗi 5 giây + khi ẩn tab, khôi phục nháp có mốc thời gian,
      khung gợi ý/dàn ý, bảng tiêu chí tự chấm (CT-07, VA-03 mẫu)
- [x] Giai đoạn 4 — Module Lý thuyết: danh sách 56 chuyên đề theo 9 nhóm với
      trạng thái, bài học mẫu (KN-01 dạng quy trình từng bước, NT-01, CA-03),
      quiz cuối bài với ngưỡng đạt hiển thị trước, sơ đồ tư duy
- [x] Giai đoạn 5 — Module Thi thử: `test-generator` (sinh đề theo trọng số,
      weighted sampling without replacement) + `scoreExam`, 4 cấu hình dữ liệu
      + đề tùy chỉnh (FR-T09), đồng hồ đếm ngược tự nộp khi hết giờ, bảng số
      thứ tự câu, không lộ đáp án khi đang thi, kết quả tách autoScore/selfScore,
      lịch sử có biểu đồ xu hướng
- [x] Giai đoạn 6 — Module Lộ trình: `core/schedule` sinh lịch 3 giai đoạn từ
      ngày mở app (nén/cảnh báo khi ngày thi gần — FR-C06, ưu tiên giữ KN),
      thẻ "Buổi học hôm nay" 3 trạng thái, bản đồ hành trình, banner buổi
      đang dở, tự đánh giá cuối buổi, kiểm tra tuần/tháng
- [x] Giai đoạn 7 — Module Hồ sơ: `mastery-engine` (masteryScore có trọng số
      cho TC/TL/NT/CA/CD/DH, activityScore cho CT/VA/KN, tách biệt theo
      FR-H03c), radar chart + bản đồ lưới 56 chuyên đề, gợi ý tối đa 3 kèm lý
      do (ưu tiên sổ lỗi → yếu nhất đã luyện → nền tảng chưa luyện), trang
      phụ huynh in được + hộp nhận xét, sao lưu/khôi phục JSON
- [x] Giai đoạn 8 — Đồng bộ đa thiết bị (Firebase, 3 thời điểm sync theo
      ADR 0005: mở app/rời app/bấm nút, SDK ~550KB chỉ tải khi bật đồng bộ)
      + gamification (`core/rewards`: xu theo buổi + tự đánh giá, huy hiệu
      derive-không-lưu, vòng tiến độ, Thử thách tốc độ) + rà soát đầy đủ
      Mục 14 (PWA cài đặt được, bàn phím ảo không che ô nhập, offline thật
      sự hoạt động — không chỉ giả định, bộ e2e Playwright chính thức)
- [~] Giai đoạn 9 — Mở rộng nội dung + kiểm chứng 3 lớp (**đang làm, chưa
      xong** — xem "Tiến độ nội dung" ngay dưới đây). Đã chốt QĐ bổ sung:
      không cần giáo viên rà soát lớp 3, tự tin xây đầy đủ theo kế hoạch;
      bộ sách chuẩn cho nội dung tranh cãi (FR-D01) = Kết nối tri thức với
      cuộc sống.

### Tiến độ nội dung (Giai đoạn 9)

**56/56 chuyên đề đã có bài học lý thuyết đầy đủ** (concept, dấu hiệu nhận
biết, ví dụ, lỗi thường gặp) + ít nhất vài bài tập mỗi chuyên đề — đúng
100% danh sách chuyên đề URD Mục 5.1–5.9 (kể cả 3 mục `[BỔ SUNG]`: CA-08,
CT-03, CT-04, TL-06). Tất cả 9 nhóm đều đã có nội dung:

- **KN — Kỹ năng làm bài: 5/5** — KN-01→05.
- **CA — Câu: 8/8** — CA-01→08 (bao gồm CA-08 chữa lỗi câu, mục `[BỔ SUNG]`).
- **CT — Cảm thụ văn học: 7/7** — CT-01→07.
- **NT — Nghĩa của từ và vốn từ: 6/6** — NT-01→06.
- **TC — Tiếng, từ và cấu tạo từ: 4/4** — TC-01→04. TC-03/TC-04 có
  `disputedNote` (FR-D02) vì đây đúng là nội dung tranh cãi giữa các bộ SGK
  (Mục 10.6) — bài học và câu hỏi chỉ dùng ví dụ không tranh cãi, không lấy
  từ tranh cãi làm đáp án đúng (FR-D04, có test guard tự động).
- **CD — Chính tả và dấu câu: 5/5** — CD-01→05. Mọi câu `fill` trong nhóm
  CD dùng `strictMode: true` (FR-M05 — so khớp chính xác từng ký tự, kể cả
  dấu và hoa/thường, vì đó chính là nội dung đang kiểm tra).
- **VA — Tập làm văn: 9/9** — VA-01→09. Mỗi chuyên đề hiện có đủ 4 đề văn
  mẫu (dàn ý, các cách mở bài, rubric chấm điểm, bài văn mẫu — đúng mục
  tiêu ≥4 đề/chuyên đề của Mục 5.11, 36 đề tổng).
- **TL — Từ loại: 6/6** — TL-01→06 (bao gồm TL-06 hiện tượng chuyển loại
  của từ, mục `[BỔ SUNG]`).
- **DH — Đọc hiểu: 6/6** — DH-01→06 (kỹ năng đọc hiểu: xác định chi tiết,
  cốt truyện, nhân vật, ý chính/chủ đề, suy luận, giải nghĩa từ theo ngữ
  cảnh — mỗi bài tập kèm một đoạn văn ngắn tự biên soạn làm ngữ liệu; đây
  là kỹ năng đọc hiểu chung, KHÁC với kho 25 văn bản đọc hiểu dài ở dưới).

**Việc còn lại (mở rộng số lượng, không phải thiếu chuyên đề nào)** — theo
đúng mục tiêu số lượng ở Mục 5.11:

- **Mục tiêu ≥12 bài tập/chuyên đề cho nhóm TC, TL, NT, CA, CD đã ĐẠT ĐỦ
  cả 5 nhóm** (Mục 5.11, ~350 bài): CA (8/8, 96 bài), TC (4/4, 48 bài), NT
  (6/6, 72 bài), CD (5/5, 60 bài), TL (6/6, 72 bài) — tổng 348 bài, đúng
  29 chuyên đề × 12 bài. Mỗi chuyên đề có đủ 4 dạng câu hỏi (mcq/fill/
  order/match) để đa dạng hoá.
- **≥5 bài cảm thụ có đáp án mẫu/chuyên đề CT đã ĐẠT ĐỦ** (7/7 chuyên đề,
  35 bài đúng mục tiêu Mục 5.11).
- **≥4 đề tập làm văn có dàn ý + bài mẫu/chuyên đề VA đã ĐẠT ĐỦ** (9/9
  chuyên đề, 36 đề đúng mục tiêu Mục 5.11).
- **Văn bản đọc hiểu dài kèm 5–7 câu hỏi: 1/25** (khác với 6 chuyên đề kỹ
  năng DH-01→06 đã xong ở trên). Hạ tầng kỹ thuật đã xong: kiểu `Passage`
  (`src/data-access/types.ts`), `contentStore.getPassage()`, văn bản lưu ở
  `src/content/passages/index.ts`, mỗi câu hỏi gắn `passageId` và bài đọc
  hiện tự động phía trên câu hỏi ở cả 3 nơi (luyện tập, quiz cuối bài, thi
  thử) qua component dùng chung `ReadingPassage`. Còn thiếu 24 văn bản.
- Đề thi thử hoàn chỉnh soạn sẵn theo đúng 4 cấu hình: 0/8 (hiện dùng sinh
  đề tự động từ kho bài tập nhỏ, chưa phải "đề soạn sẵn").
- Lớp 2 (đối chiếu chéo) và lớp 3 (giáo viên rà soát — đã quyết định bỏ
  qua) của quy trình kiểm chứng 3 lớp (Mục 18.3) chưa thực hiện; mới có
  lớp 1 (kiểm tra cấu trúc tự động qua `content-schema.test.ts`).

## Giới hạn đã biết

- **Đồng bộ Firebase**: logic quyết định xung đột (`core/sync-decision`) đã
  unit test đầy đủ, và luồng "chưa cấu hình Firebase" (SY-14) đã kiểm chứng
  qua trình duyệt thật. Nhưng luồng đồng bộ THẬT với Firestore chưa được
  kiểm thử end-to-end với dự án Firebase thật (môi trường này không có
  Java/Firebase Emulator Suite) — cần người dùng tự kiểm tra sau khi làm
  theo hướng dẫn ở trên.
- **FR-A22** (kiểm thử thủ công trên thiết bị Android thật): chưa làm được —
  chỉ có thể mô phỏng qua Playwright (FR-A20/A21), không thay thế được việc
  thử trên máy thật, đặc biệt với bộ gõ tiếng Việt.
- **FR-H01** (bài kiểm tra đầu vào ~30 câu): chưa có luồng riêng — trạng thái
  "chưa có dữ liệu" mặc định (FR-H02) đã hoạt động đúng mà không cần luồng
  chẩn đoán này.
- **Sao lưu JSON (FR-H12)**: chỉ gồm dữ liệu trong `ProgressStore`
  (localStorage). Bài viết (`StudentWriting`, lưu IndexedDB) chưa được gồm
  trong file sao lưu/khôi phục.
- **Huy hiệu "Đọc hiểu 20 văn bản"**: logic đã có và unit test đầy đủ, nhưng
  luôn hiện 0/20 — chưa có nội dung/hạ tầng Passage (nhóm DH) để đếm lượt
  đọc thật (đợi Giai đoạn 9).

## Quyết định đã chốt (Mục 22 URD)

- **QĐ-1** (chấm văn bằng AI): chưa dùng AI ở v1.0 — chỉ đáp án mẫu + rubric
  tự chấm + nhận xét phụ huynh. Có thể tích hợp Claude API sau khi 5 trụ cột
  còn lại đã ổn định.
- **QĐ-2** (chiến lược ngữ liệu): kết hợp A (phạm vi công cộng) + B (tự biên
  soạn). Không dùng C (trích dẫn có bản quyền).
- **QĐ-3** (repo): độc lập, tiền tố khóa lưu trữ `ol6v.*`.
