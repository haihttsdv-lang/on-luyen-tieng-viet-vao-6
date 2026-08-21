# Ghi chú từ repo tham chiếu: on-luyen-tieng-anh-vao-6

Nguồn: `https://github.com/haihttsdv-lang/on-luyen-tieng-anh-vao-6` (branch `main`), đọc qua
`raw.githubusercontent.com` và GitHub blob/tree UI vào 2026-08-21. Repo truy cập được bình thường
(public, không rate-limit, không cần auth). Nội dung dưới đây được tổng hợp từ:
`docs/adr/0001, 0004, 0005, 0006`, và các file mã nguồn thật (`src/components/Layout.tsx`,
`src/data-access/**`, `src/modules/mastery/**`, `src/modules/practice/**`,
`src/modules/curriculum/badges.ts`, `src/modules/curriculum/BadgeShelf.tsx`, `README.md`).
Một vài trích dẫn dưới đây là tóm tắt cấu trúc do công cụ fetch tạo ra (không phải copy 100% ký
tự-cho-ký-tự của file gốc) — với các đoạn quan trọng (path Firestore, tên hàm, công thức, ngưỡng
số) đã đối chiếu khớp giữa nhiều nguồn (ADR + README + source) nên độ tin cậy cao. Nếu cần độ chính
xác tuyệt đối từng dòng, mở trực tiếp file trên GitHub trước khi copy logic.

---

## 1. Kiến trúc tổng thể (ADR 0001)

- **Phương án A**: client-side thuần, React + TypeScript + Vite, không backend, không server.
  Lưu tiến độ trong `localStorage`. Phù hợp quy mô 1–2 học sinh/hộ gia đình.
- **Bắt buộc đi qua tầng abstraction**: mọi truy cập dữ liệu phải qua interface `ProgressStore` /
  `ContentStore` (định nghĩa ở `src/data-access/types.ts`), UI không bao giờ gọi `localStorage`
  trực tiếp. Mục đích: sau này có thể đổi sang backend (Phương án B) mà không phải sửa UI.
- Cấu trúc thư mục `src/`: `app/`, `components/`, `content/`, `data-access/` (`cloud/`, `local/`,
  `index.ts`, `types.ts`), `modules/` (`audio/`, `curriculum/`, `lessons/`, `mastery/`,
  `mock-test/`, `practice/`), `types/`.

**Áp dụng cho `on-luyen-tieng-viet-vao-6`**: giữ nguyên pattern `ProgressStore`/`ContentStore` +
thư mục `data-access/{local,cloud}`, chỉ đổi tên miền dữ liệu (chủ đề tiếng Việt thay vì ngữ pháp
tiếng Anh) và đổi prefix key sang `ol6v.*`.

---

## 2. Đồng bộ nhiều thiết bị (ADR 0005 + `data-access/cloud/*`)

### Firestore document shape

Một document duy nhất cho mỗi mã đồng bộ, chứa **toàn bộ snapshot tiến độ** (không tách theo loại
dữ liệu):

```
Path:  progress_sync/{syncCode}

Shape (SyncDoc):
{
  data: string          // JSON string, kết quả của progressStore.exportAll()
  updatedAt?: Timestamp // serverTimestamp() lúc ghi
  updatedBy: string     // device ID từ getDeviceId()
}
```

### 3 điểm kích hoạt sync (đúng như URD mô tả — không dùng realtime)

1. **Mở app** — `initAutoSync(code)` chạy trong `useEffect` khi `Layout` mount, chỉ nếu đã có sync
   code lưu local. Thực hiện 1 chu trình: `pullIfNewer()` → nếu remote mới hơn thì áp dụng, ngược
   lại `pushNow()` để đẩy local lên.
2. **Đóng app / rời tab** — lắng nghe `visibilitychange` (khi state = `hidden`) và `pagehide`, gọi
   `pushNow()` một lần. Ghi chú trong ADR: đây là "best-effort", trình duyệt có thể bị kill trước
   khi kịp hoàn tất.
3. **Nút "Đồng bộ ngay"** — `syncNow(onStatus?)` do người dùng chủ động bấm, chạy pull rồi push
   ngay lập tức, không chờ đóng app.

### Các hàm chính trong `firebaseSync.ts`

```
initAutoSync(code: string, onStatus?: (status: SyncStatus) => void): Promise<void>
  // đăng nhập ẩn danh (Firebase Auth anonymous), chạy 1 chu trình sync,
  // đăng ký listener visibilitychange + pagehide, trạng thái:
  // 'connecting' → 'syncing' → 'synced' | 'error'

syncNow(onStatus?): Promise<void>
  // đọc sync code đã lưu, pull rồi push ngay; bắn REMOTE_SYNC_APPLIED_EVENT nếu remote được áp dụng

pullIfNewer(code: string): Promise<boolean>
  // đọc progress_sync/{code}, so remote.updatedAt với lastSyncedAt local;
  // bỏ qua nếu updatedBy trùng device hiện tại (tránh tự ghi đè chính mình)

pushNow(code: string): Promise<void>
  // export local qua progressStore.exportAll(), ghi lên Firestore kèm serverTimestamp + deviceId,
  // cập nhật lastSyncedAt local = now

disableSync(): void  // xoá sync code + gỡ listener
```

### Conflict resolution — Last-write-wins, KHÔNG merge

- So sánh `remote.updatedAt` với `ol6.sync.lastSyncedAt` (epoch ms, lưu local). Remote chỉ được áp
  dụng nếu mới hơn **và** không phải do chính device này ghi.
- ADR nói thẳng: "không xây cơ chế merge — chấp nhận được ở quy mô 1–2 học sinh vì hiếm khi sửa
  cùng field đồng thời." → Đây là quyết định có chủ đích, không phải thiếu sót — **giữ nguyên**,
  đừng tự ý thêm merge logic phức tạp hơn cho app tiếng Việt.

### Sinh mã đồng bộ (`syncMeta.ts`)

- `generateSyncCode()`: **8 ký tự**, loại bỏ các ký tự dễ nhầm (`0/O/1/I/L`). File tóm tắt không
  show được bảng ký tự chính xác còn lại — khi implement, dùng tập an toàn kiểu
  `23456789ABCDEFGHJKMNPQRSTUVWXYZ` (loại 0,O,1,I,L) là đúng tinh thần ADR; nên mở trực tiếp
  `syncMeta.ts` trên GitHub để copy chính xác charset trước khi chốt.

### Module `syncMeta.ts` — tách nhẹ khỏi Firebase SDK

Mục đích: cho phép UI kiểm tra trạng thái sync (có code chưa, sync lần cuối khi nào...) **mà không
phải load Firebase SDK (~500KB)**. SDK thật chỉ `import()` động (lazy) khi có sync code tồn tại —
xem trong `Layout.tsx`:

```js
useEffect(() => {
  const code = getSyncCode()
  if (code && isCloudSyncAvailable()) {
    loadFirebaseSync().then((mod) => mod.initAutoSync(code).catch(() => {}))
  }
  ...
})
```

Local keys (prefix `ol6.sync.*` trong repo gốc → đổi thành `ol6v.sync.*` cho app mới):
- `ol6.sync.code` — mã đồng bộ
- `ol6.sync.deviceId` — UUID thiết bị, tự sinh nếu chưa có
- `ol6.sync.lastSyncedAt` — epoch ms lần sync thành công gần nhất

Hàm export: `isCloudSyncAvailable()`, `generateSyncCode()`, `getSyncCode()/setSyncCode()/clearSyncCode()`,
`getDeviceId()`, `getLastSyncedAt()/setLastSyncedAt()`, và 2 custom events:
`PROGRESS_CHANGED_EVENT`, `REMOTE_SYNC_APPLIED_EVENT` (dùng để UI tự re-render, ví dụ badge coins
trên header, khi dữ liệu đổi mà không chuyển route).

### Bài học quan trọng nhất (ghi rõ trong ADR 0005)

Bản đầu tiên dùng **realtime listener** (`onSnapshot`) + debounce push 2 giây mỗi lần local đổi.
Người dùng phản hồi **không muốn app giữ kết nối online liên tục** → chuyển hẳn sang mô hình
event-driven 3-điểm-kích-hoạt ở trên, bỏ hoàn toàn `onSnapshot` và upload theo sự kiện. Lý do thực
dụng: giảm đáng kể số lần đọc/ghi Firestore, quan trọng vì gói Spark (free tier) có quota giới hạn.
→ **Kết luận cho app mới**: đừng bắt đầu bằng realtime sync rồi mới revert — implement thẳng mô
hình 3-trigger ngay từ đầu.

---

## 3. Layout & điều hướng (`src/components/Layout.tsx`, ADR 0006)

- Một mảng dữ liệu duy nhất `NAV_ITEMS` (6 mục: Trang chủ, Lộ trình, Lý thuyết, Luyện tập, Đề thi
  thử, Hồ sơ), mỗi item có `{ to, label, shortLabel, icon }`.
- **Cả nav ngang (desktop) và tab bar dưới (mobile) render CÙNG một mảng `NAV_ITEMS`** — chỉ khác
  class Tailwind ẩn/hiện: nav ngang `hidden sm:flex` trong header, tab bar `sm:hidden` cố định đáy
  màn hình. Đây là cách xử lý vấn đề "cùng 1 mục xuất hiện ở 2 nav" — không phải 2 danh sách dữ
  liệu tách rời, tránh lệch nhãn/route giữa 2 nơi và giúp test dễ hơn (test theo `NAV_ITEMS`, không
  phải theo từng DOM riêng).
- Breakpoint chia: `sm:` trở lên = nav ngang trong header; dưới `sm:` = tab bar đáy. Nội dung có
  `pb-20 sm:pb-0` để tab bar không che nội dung trên mobile.
- Header thu gọn còn 1 dòng dưới `lg:`. Badge coins (🪙) hiện trong header khi `coins !== null &&
  coins > 0`, cập nhật qua listener `PROGRESS_CHANGED_EVENT` (không cần đổi route).
- Trang có passage (đọc hiểu): mở rộng `lg:max-w-6xl`, 2 cột — passage sticky bên trái, câu hỏi bên
  phải. Trang 1 câu hỏi: `max-w-2xl`. Trang danh sách (bài học, luyện tập, viết): lưới 2–3 cột ở
  màn lớn, card cao bằng nhau.
- Hộp thoại xác nhận thoát bài: hiển thị số câu đã làm + xác nhận kết quả đã lưu, giảm lo âu mất
  dữ liệu.

---

## 4. Tầng data-access / `ProgressStore`

### Cấu trúc thư mục

```
src/data-access/
  types.ts              # định nghĩa interface ProgressStore, ContentStore
  index.ts
  local/
    localProgressStore.ts
    localContentStore.ts
  cloud/
    firebaseSync.ts
    syncMeta.ts
```

### Interface `ContentStore` (đọc nội dung tĩnh)

`getTopics()`, `getTopic(id)`, `getQuestions()`, `getReadingPassages()`, `getVocabCards()`,
`getWritingPrompts()`.

### Interface `ProgressStore` (đọc/ghi tiến độ học sinh) — nhóm theo domain

- Hồ sơ & lượt làm: `getProfile()/saveProfile()`, `addAttempt()/getAttempts()`
- Từ vựng (Leitner): `getVocabBoxLevel()/setVocabBoxLevel()` theo từng thẻ
- Mastery theo chủ đề: `getTopicStatuses()/setTopicStatus()`
- Bài kiểm tra đầu vào: `getDiagnosticStatus()/setDiagnosticStatus()`,
  `getDiagnosticScore()/setDiagnosticScore()` (dùng để cá nhân hoá lộ trình)
- Đề thi thử: `addMockTestResult()/getMockTestResults()`
- Gamification: `getCoins()/addCoins()`
- Tiến độ theo buổi học: `getSessionOutcomes()/setSessionOutcome()`,
  `getSessionBlockProgress()/setSessionBlockProgress()`, `getHomeworkDone()/setHomeworkDone()`
- Backup: `exportAll()/importAll()`

**Lưu ý**: không có type/field "badge" nào trong `ProgressStore` — huy hiệu **không lưu trực tiếp**
mà được **tính lại (derive) mỗi lần render** từ dữ liệu khác (xem mục 6). Chỉ có coin là lưu trạng
thái thật.

### Namespacing localStorage (`localProgressStore.ts`)

Prefix `ol6.*`, mỗi domain một key riêng (repo mới nên đổi `ol6.` → `ol6v.`):

```
ol6.progress.profile
ol6.progress.attempts
ol6.progress.vocabBoxLevels
ol6.progress.topicStatuses
ol6.progress.diagnosticStatus
ol6.progress.diagnosticScore
ol6.progress.coins
ol6.progress.mockTestResults
ol6.progress.sessionOutcomes
ol6.progress.sessionBlockProgress
ol6.progress.homeworkDone
```

### Export/Import (backup)

```json
{
  "app": "on-luyen-tieng-anh-vao-6",
  "version": 1,
  "exportedAt": "2026-08-21T00:00:00.000Z",
  "data": { "ol6.progress.profile": "...", "...": "..." }
}
```

`importAll()` kiểm tra key nằm trong tập `KEYS` cho phép rồi mới ghi lại vào localStorage; sau khi
import xong bắn event `notifyProgressChanged()` (khớp với `PROGRESS_CHANGED_EVENT` ở mục 2) để UI
tự cập nhật không cần reload. Đây cũng chính là format `exportAll()` dùng để đẩy lên Firestore
trong sync (field `data` ở mục 2 = JSON string của toàn bộ object này).

---

## 5. Mastery / chấm điểm thành thạo (`src/modules/mastery/masteryCalc.ts`)

### Công thức

Trung bình có trọng số của **tối đa 10 lượt làm gần nhất** mỗi chủ đề, trọng số tăng tuyến tính
theo độ mới (lượt cũ nhất trong cửa sổ = trọng số 1, lượt mới nhất = trọng số k):

```
score = Σ(correct_i × weight_i) / Σ(weight_i)     với weight_i = 1..k (k ≤ 10)
```

### Ngưỡng & hằng số

| Hằng số | Giá trị | Ý nghĩa |
|---|---|---|
| `MIN_ATTEMPTS_FOR_SCORE` | 3 | Cần ≥3 lượt mới hiện điểm |
| `RECENCY_WINDOW` | 10 | Số lượt gần nhất tối đa được tính |
| `WEAK_THRESHOLD` | 0.5 | Dưới 50% |
| `MASTERED_THRESHOLD` | 0.8 | Trên 80% |

### 4 mức mastery

`'no-data'` (chưa đủ 3 lượt) → `'weak'` (<50%, "Cần ôn lại") → `'improving'` (50–80%, "Đang tiến
bộ") → `'mastered'` (>80%, "Thành thạo").

### Chữ ký hàm

```typescript
computeWeightedMastery(attempts: Attempt[]): MasteryResult
computeAllTopicMastery(attempts, questions): Record<string, MasteryResult>
computeAllSkillMastery(attempts, questions): Partial<Record<SkillId, MasteryResult>>
computeVocabMasteryFromBoxes(cards, boxLevels): Record<string, MasteryResult>
```
`MasteryResult` gồm `score` (0–1 hoặc null), `attemptsUsed`, `totalAttempts`, `level`.

Từ vựng dùng công thức khác (không qua `computeWeightedMastery`): quy đổi hộp Leitner —
**box 1 → 0 điểm, box 5 → 1 điểm**, lấy trung bình các thẻ trong chủ đề (ADR 0006).

### UI hiển thị (`MasteryPage.tsx`)

**Không có radar chart, không dùng thư viện chart nào.** Toàn bộ là ô màu (tile) dạng lưới
(2 cột mobile, 3 cột desktop), mỗi ô: mã chủ đề, nhãn, màu theo mức mastery. Bố cục trang từ trên
xuống: header + link "xem theo phụ huynh" → khu vực huy hiệu (`BadgeShelf`) → gợi ý chẩn đoán (nếu
chưa làm) → khu vực gợi ý luyện tập (card có lý do) → bản đồ mastery chia 3 nhóm (ngữ pháp / từ
vựng / kỹ năng) → các phần cài đặt (âm thanh, đồng bộ cloud, backup). Có legend giải thích 4 mức
màu, hỗ trợ dark mode qua class Tailwind.

**Với app tiếng Việt**: nên giữ nguyên cách tiếp cận "tile lưới + legend", không cần tự phát minh
radar chart — repo gốc thử nghiệm và chốt ở phương án tile vì đơn giản, rõ ràng cho phụ huynh xem
nhanh.

---

## 6. Gamification

### Coin — hệ số streak, tính trong `QuestionRunner.tsx`

```javascript
function coinsForStreak(streak: number): number {
  return 2 + Math.min(streak, 3)   // 2–5 coin mỗi câu đúng liên tiếp
}
```

- Chỉ áp dụng cho variant `'speed'` và `'survival'` (2 game mode); variant `'standard'` (luyện tập
  thường) **không** phát coin.
- Coin cộng dồn trong phiên chơi, chỉ **lưu (`progressStore.addCoins(coins)`) một lần khi phiên kết
  thúc** — guard bằng ref (`coinsSaved.current`) để tránh cộng trùng khi component re-render.
- Trả lời sai → reset streak về 0 (áp dụng mọi variant).
- Mỗi câu trả lời (đúng/sai, mọi variant) đều ghi 1 attempt:
  `progressStore.addAttempt({ id: `${questionId}-${Date.now()}`, questionId, correct, timestamp })`
  — độc lập với việc phiên có coin hay không, nên mastery vẫn cập nhật kể cả ở luyện tập thường.

### 2 chế độ chơi ăn coin

- **Speed Challenge** (`SpeedChallengePage.tsx`, ADR gọi là "Đường đua tốc độ"): đếm ngược **60
  giây**, pool 30 câu xáo trộn ngẫu nhiên, trả cho `QuestionRunner` với `variant="speed"`. State
  machine: idle (màn chờ, nút start disabled tới khi load xong câu hỏi) → loading → playing →
  finished (điều hướng về `/luyen-tap`).
- **Treasure Hunt** (`TreasureHuntPage.tsx`, "Săn kho báu 🗺️"): **3 mạng**, 12 câu lấy ngẫu nhiên từ
  pool lớn hơn, `variant="survival"`. Sai câu → trừ 1 mạng (`setLivesLeft(l => l - 1)`), hết mạng
  thì kết thúc ngay. UI mô tả "mỗi câu đúng mở 1 rương kho báu và nhận coin".

### Badge — KHÔNG lưu trạng thái, tính lại (derive) mỗi lần render

Khác với coin (có lưu), badge **không có key riêng trong `ProgressStore`**. Được tính bởi
`computeEarnedBadges()` ở `src/modules/curriculum/badges.ts`:

```typescript
computeEarnedBadges(
  schedule: ScheduledSession[],
  outcomes: Record<string, SessionOutcomeRecord>,
  homeworkDoneBySession: Record<string, boolean>,
  mockTestResults: MockTestResult[]
): EarnedBadge[]
```

4 loại huy hiệu, mỗi loại đạt 1 lần (không có tier):

| Icon | ID | Điều kiện |
|---|---|---|
| 🏅 | `phase-${label}` | Hoàn thành tất cả buổi trong 1 giai đoạn liên tục (đã ghi outcome) |
| 🔥 | `streak-5` | 5 buổi học chính liên tiếp không đứt quãng (không tính test tuần/tháng); `STREAK_TARGET = 5` |
| 📋 | `homework-100` | Có ít nhất 1 tuần làm 100% bài tập về nhà được giao trong tuần đó |
| 🎯 | `mock-test-80` | Đạt >80% ít nhất 1 lần thi thử; `MOCK_TEST_GREAT_RATIO = 0.8` |

### UI huy hiệu (`BadgeShelf.tsx`)

Layout dạng "kệ" flex-wrap (`flex flex-wrap gap-2`, `role="list"`), không phải lưới. Mỗi badge:
emoji (decorative, không aria-label) + tên in đậm cỡ chữ nhỏ, có `title` attribute làm tooltip.
Màu sắc tông hổ phách: light `border-amber-200 bg-amber-50 text-amber-800`, dark
`dark:border-amber-800 dark:bg-amber-500/10 dark:text-amber-300`, bo tròn full, viền 2px. **Chỉ
render huy hiệu đã đạt** — component trả `null` nếu mảng rỗng, không có trạng thái "khoá/xám" cho
huy hiệu chưa đạt (đơn giản hoá: ẩn hẳn thay vì hiện mờ).

---

## 7. Đa phương tiện & các chi tiết UI khác (ADR 0006) — tham khảo nhanh

- `speakWord()` tách từ trang riêng thành module dùng chung `src/modules/audio/speak.ts`, bọc
  trong component `SpeakButton` — tự ẩn nếu trình duyệt không hỗ trợ Web Speech API, tự huỷ khi rời
  trang.
- `ReadAlongPassage`: highlight từ đang đọc bằng `SpeechSynthesisUtterance.onboundary`, tách đoạn
  văn 3 phần (trước/hiện tại/sau), bọc từ đang đọc trong `<mark>`. Có chế độ đọc chậm.
  → Với app tiếng Việt, cân nhắc: Web Speech API tiếng Việt trên các trình duyệt/OS có độ hỗ trợ
  khác tiếng Anh — cần test kỹ trước khi copy nguyên pattern này.
- Sơ đồ ngữ pháp: dựng bằng React + Tailwind thuần, không SVG/ảnh, để gọn trong bundle single-file
  HTML.
- Ghi âm giọng nói: blob chỉ tồn tại trong bộ nhớ tab (blob URL) — **không lưu localStorage, không
  backup, không sync cloud**; dừng stream mic ngay bằng `stream.getTracks().forEach(stop)` và
  revoke blob URL để tránh rò rỉ bộ nhớ.
- Hiệu ứng âm thanh: sine-wave beep sinh bằng Web Audio API (không dùng file audio); âm báo lỗi cố
  tình làm trầm và ngắn để không gây khó chịu.
- Thanh tiến độ khi làm bài: đổi màu theo từng câu đã làm (xanh/đỏ/xám) — feedback tức thời, không
  liên quan gamification.

---

## 8. Bài học "hard-won" khác đáng chú ý

- **Lazy-load Firebase SDK có điều kiện**: SDK (~500KB) chỉ `import()` động khi phát hiện đã có
  sync code lưu local — người chưa bật sync không phải tải thêm gì. Nên áp dụng y hệt cho app mới.
- **Tách `syncMeta.ts` khỏi `firebaseSync.ts`**: cho phép UI (ví dụ hiển thị trạng thái sync ở
  Layout/Profile) đọc trạng thái mà không kéo theo toàn bộ Firebase SDK vào bundle chính.
- **Badge tính lại thay vì lưu trạng thái**: tránh bài toán đồng bộ hoá "đã trao huy hiệu chưa" giữa
  nhiều thiết bị — vì badge derive thuần từ dữ liệu đã sync (schedule, outcomes, homework, mock
  test), nó tự động nhất quán sau khi `progressStore` sync xong, không cần thêm field riêng.
- **Guard chống cộng coin trùng lặp**: dùng `useRef` (`coinsSaved.current`) thay vì state, để tránh
  StrictMode / re-render gọi `addCoins()` 2 lần trong 1 phiên chơi — chi tiết nhỏ nhưng dễ bị bug
  nếu copy ẩu.
- **Quyết định có chủ đích không làm merge conflict**: ADR 0005 nói rõ đây là đánh đổi chấp nhận
  được ở quy mô nhỏ (1–2 học sinh/gia đình) — không phải thiếu sót cần "sửa cho đúng" khi triển
  khai app mới.

---

## 9. Việc cần làm khi copy sang `on-luyen-tieng-viet-vao-6`

1. Copy cấu trúc `data-access/{types.ts,index.ts,local/*,cloud/*}` — đổi tên miền (Content/Progress
   giữ nguyên interface, đổi các hàm liên quan ngữ pháp/từ vựng tiếng Anh thành các khái niệm tiếng
   Việt tương ứng theo URD Mục 11–13).
2. Đổi toàn bộ prefix `ol6.` → `ol6v.` (bao gồm cả `ol6.sync.*` → `ol6v.sync.*`), và đổi tên
   `SyncDoc.data` app field trong `exportAll()` output (`"app": "on-luyen-tieng-anh-vao-6"` →
   `"app": "on-luyen-tieng-viet-vao-6"`).
3. Giữ nguyên collection path pattern `progress_sync/{syncCode}`, giữ nguyên 3 điểm trigger sync,
   giữ nguyên last-write-wins theo `updatedAt`.
4. Mở trực tiếp `syncMeta.ts` trên GitHub để lấy chính xác charset của `generateSyncCode()` trước
   khi code (brief này chỉ xác nhận: 8 ký tự, loại 0/O/1/I/L).
5. Copy `NAV_ITEMS`-pattern (1 mảng dùng chung cho nav ngang + tab bar) cho Layout mới.
6. Copy công thức mastery và 4 ngưỡng nguyên vẹn trừ khi URD tiếng Việt quy định khác — nếu URD im
   lặng, dùng đúng giá trị này (đã validated trong production).
7. Copy công thức `coinsForStreak` và 4 loại badge làm baseline, đổi tên buổi/giai đoạn cho khớp lộ
   trình tiếng Việt (không nhất thiết vẫn là 4 loại — nhưng nên giữ nguyên tắc "badge derive, không
   lưu trạng thái").
