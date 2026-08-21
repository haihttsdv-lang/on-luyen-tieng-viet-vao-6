# URD — Ứng dụng Tổng hợp & Ôn luyện Tiếng Việt vào lớp 6 Chất lượng cao

| | |
|---|---|
| **Loại tài liệu** | User Requirements Document — đặc tả để triển khai bằng Claude Code trong VS Code |
| **Sản phẩm** | Ứng dụng Lý thuyết · Luyện tập · Thi thử · Lộ trình · Hồ sơ · Đồng bộ đa thiết bị, môn Tiếng Việt, thi vào lớp 6 CLC (Hà Nội) |
| **Phiên bản** | 1.0 |
| **Ngày soạn** | 21/08/2026 |
| **Ứng dụng tham chiếu** | `github.com/haihttsdv-lang/on-luyen-tieng-anh-vao-6` — đã triển khai và vận hành thực tế. **Nguồn tham chiếu bắt buộc** cho Mục 11, 12, 13, 15 |
| **Tài liệu liên quan** | `URD-ung-dung-on-luyen-toan-vao-6-v2.md` (môn Toán, cùng hệ sinh thái) |
| **Quyết định chưa chốt** | **3 quyết định** — xem Mục 22 |

---

## 0. Hướng dẫn dành cho Claude Code — đọc trước khi viết mã

1. **Đọc toàn bộ tài liệu này trước khi tạo bất kỳ tệp mã nào.**
2. **Ba quyết định chưa chốt** ở Mục 22 phải được hỏi người dùng trước khi khởi tạo dự án: (QĐ-1) chấm bài viết bằng AI hay không; (QĐ-2) chiến lược ngữ liệu; (QĐ-3) repo độc lập hay gộp chung. Đừng tự quyết.
3. **Có ứng dụng tham chiếu đã chạy thực tế.** Trước khi tự thiết kế UI/UX, đồng bộ, mastery hay gamification, hãy đọc mã nguồn và `docs/adr/0001`→`0007` của repo tham chiếu. Mục 11–13 nêu rõ chỗ nào **giữ nguyên**, chỗ nào **làm khác**. Đừng phát minh lại.
4. **Mục 10 là phần đặc thù và rủi ro nhất của môn này.** Xây `answer-checker` cho tiếng Việt có dấu **trước tiên**, kèm unit test đầy đủ, trước mọi module giao diện (Mục 18, Giai đoạn 1).
5. **Mục 14 (Android) là ràng buộc cứng, không phải "nice to have".** Thiết bị chính của học sinh là điện thoại Android. Mọi module phải được kiểm thử trên emulation Android trước khi coi là xong.
6. **Đề xuất kế hoạch trước khi sinh mã hàng loạt.** Trình bày cấu trúc thư mục và thứ tự xây dựng theo Mục 18, chờ xác nhận.
7. **Khi một yêu cầu chưa đủ rõ để cài đặt chính xác, hãy hỏi thay vì suy đoán.**
8. **Ràng buộc bản quyền là tuyệt đối** (Mục 10.1). Không được chép nguyên văn bất kỳ bài thơ, đoạn văn nào của tác giả còn thời hạn bảo hộ vào ngân hàng nội dung, kể cả khi "chỉ để làm ví dụ".

---

## 1. Bối cảnh và mục tiêu

Học sinh lớp 5 tại Hà Nội thi vào lớp 6 các trường CLC (Archimedes, Lương Thế Vinh, Nguyễn Tất Thành, Cầu Giấy, Hà Nội – Amsterdam, Ngôi Sao Hà Nội, Marie Curie, Thanh Xuân, Nam Từ Liêm, Đoàn Thị Điểm...) phải thi ba môn Toán – Tiếng Việt – Tiếng Anh.

Môn Tiếng Việt có đặc điểm khiến việc tự học khó hơn hai môn kia: **phần lớn câu trả lời là mở**, không có đáp án đúng/sai máy móc; **cảm thụ văn học** là dạng bài học sinh sợ nhất vì ít được rèn trong chương trình chính khóa; và **tập làm văn** cần phản hồi của người có chuyên môn mới tiến bộ được.

Mục tiêu ứng dụng: công cụ tự học phủ đủ ba trụ cột kiến thức của đề thi (Luyện từ và câu · Đọc hiểu và cảm thụ · Tập làm văn), cộng thêm trụ cột thứ tư mà các trung tâm uy tín đều dạy riêng nhưng sách vở thường bỏ qua: **kỹ năng làm bài**.

---

## 2. Đối tượng người dùng

| Vai trò | Mô tả | Ghi chú |
|---|---|---|
| **Học sinh** | Người dùng chính, 10–11 tuổi. **Thiết bị chính là điện thoại Android**, máy tính là phụ | Bắt buộc |
| **Phụ huynh** | Thiết lập ban đầu, theo dõi tiến trình, **đọc và nhận xét bài viết của con** (vai trò lớn hơn ở môn này so với Toán/Tiếng Anh) | Bắt buộc |
| **Giáo viên/Trung tâm** | Ngoài phạm vi v1.0 — xem Mục 20 | |

---

## 3. Phạm vi sản phẩm — sáu trụ cột

| # | Trụ cột | Mô tả | Mục |
|---|---|---|---|
| 1 | **Lý thuyết** | Bài học 56 chuyên đề, có ví dụ, lỗi thường gặp, quiz cuối bài | 9.1 |
| 2 | **Luyện tập** | Ngân hàng bài tập 5 loại câu hỏi phân theo khả năng chấm, sổ lỗi, luyện theo chuyên đề | 9.2 |
| 3 | **Thi thử** | 4 cấu hình đề mô phỏng phong cách từng trường, tính giờ | 9.3 |
| 4 | **Lộ trình học** | Kế hoạch 3 giai đoạn theo ngày, buổi học có cấu trúc | 7, 9.4 |
| 5 | **Hồ sơ & Cá nhân hóa** | Bản đồ năng lực, gợi ý học tiếp, trang phụ huynh | 9.5 |
| 6 | **Đồng bộ đa thiết bị** | Tiến độ tự chuyển giữa điện thoại và máy tính | 13 |

---

## 4. Kết quả nghiên cứu

### 4.1. Cấu trúc đề Tiếng Việt vào lớp 6 CLC

**Khung chung (theo cô Lê Thị Thu Ngân — Next Nobels, cố vấn chuyên môn TAK12):** đề Tiếng Việt vào các trường CLC ở Hà Nội thường có **3 phần chính** — luyện từ và câu; câu hỏi đọc hiểu và cảm thụ; tập làm văn — **mỗi phần chiếm khoảng 1/3 số điểm**.

| Trường | Cấu trúc ghi nhận |
|---|---|
| **Archimedes** | Bài Điều kiện môn Tiếng Việt **60 phút**, thang 100 điểm: các câu **trắc nghiệm điền khuyết hoặc lựa chọn (80 điểm)** + **01 đoạn văn theo chủ đề (20 điểm)** |
| **Nguyễn Tất Thành** | Tiếng Việt **45 phút**. Đề **chú trọng luyện từ và câu + tập làm văn**, phần đọc hiểu và cảm thụ ít hơn các trường khác. Đề tham khảo và thang điểm ĐGNL do ĐH Sư phạm Hà Nội công bố, cấu trúc duy trì ổn định từ năm học 2025–2026 |
| **Lương Thế Vinh** | Khảo sát ĐGNL 2025–2026 gộp nhiều môn: **Phần 1 — Ngôn ngữ Tiếng Việt 25 câu trắc nghiệm**; Phần 2 — Tiếng Anh 25 câu; thêm Kỹ năng Tư duy Logic 12 câu |
| **Cầu Giấy, Amsterdam, Ngôi Sao, Marie Curie** | Theo khung chung 3 phần, tỷ lệ xấp xỉ đều |

**Xu hướng cần lưu ý:** theo nhận định của cô Thu Ngân, từ năm học 2025–2026 theo chương trình mới, **phần viết văn sẽ chiếm tỷ lệ nhiều hơn** phần luyện từ và câu, xuất hiện thêm **dạng phát biểu ý kiến (nghị luận)**, và **đề dài hơn** — đòi hỏi học sinh phải đọc nhanh và viết nhanh.

> **Hệ quả thiết kế:** ứng dụng phải coi **tốc độ viết** là một năng lực cần rèn, không chỉ là chất lượng bài viết. Xem FR-P09 và KN-04.

### 4.2. Rà soát chương trình các trung tâm

| Nguồn | Mức độ công khai | Kết quả rút ra |
|---|---|---|
| **Cây Bút Nhí** (caybutnhi.vn) | **Công khai đầy đủ cấu trúc khóa học** — nguồn tốt nhất về *cách tổ chức chương trình* | Xem 4.3 |
| **Next Nobels** | Không công khai giáo trình chi tiết. Nhưng cô Lê Thị Thu Ngân — giáo viên luyện thi của Next Nobels, chủ biên bộ sách *100 đề đánh giá năng lực môn Tiếng Việt tiểu học*, cố vấn chuyên môn TAK12 — **công bố nhiều phân tích chi tiết** về cấu trúc đề và phương pháp ôn | Xem 4.1 và 4.4 |
| **TAK12** | **Công khai danh mục chuyên đề tường minh** trong chương trình Tổng ôn Tiếng Việt vào lớp 6 — nguồn đối chiếu **danh mục** chính. Next Nobels là đối tác biên soạn chương trình Tiếng Việt vào 6 trên nền tảng này | Xem Mục 5 |
| **HOCMAI, VnDoc, VietJack** | Kho đề và tài liệu, không có danh mục chuyên đề hệ thống | Dùng đối chiếu dạng bài |

> **Phương pháp áp dụng (giống môn Toán):** lấy **danh mục chuyên đề** từ TAK12 (nguồn duy nhất tường minh), lấy **cách tổ chức chương trình** từ Cây Bút Nhí, lấy **phân tích cấu trúc đề và xu hướng** từ Next Nobels. Ghi rõ nguồn nào cho tầng nào, không trộn lẫn.

### 4.3. Bài học từ cấu trúc chương trình Cây Bút Nhí

Cây Bút Nhí công khai đầy đủ cấu trúc các khóa học. Bốn quan sát có giá trị thiết kế:

| Quan sát | Áp dụng vào URD |
|---|---|
| **Tách "Cảm thụ văn học" thành khóa riêng, có 2 cấp độ** (Cơ bản 20 bài; nâng cao 17 bài) — không lồng vào đọc hiểu | Mục 5.6 — cảm thụ là **nhóm chuyên đề riêng (CT)**, không phải một mục con của đọc hiểu; và có phân mức độ riêng |
| **Dạy "Kĩ năng làm bài" như bài giảng độc lập** — khóa Ôn thi vào 6 có riêng *Kĩ năng làm bài cảm thụ*, *Kĩ năng làm bài trắc nghiệm 1–2*, tách khỏi *Hệ thống kiến thức Ngữ pháp 1–2* | Mục 5.8 — thêm hẳn **nhóm chuyên đề KN (Kỹ năng làm bài)**, là trụ cột thứ tư mà URD Toán không có |
| **Cấu trúc khóa ôn thi: ~5 bài kiến thức/kỹ năng + ~20 bài luyện đề** — tỷ trọng luyện đề áp đảo | Mục 7 — lộ trình dành phần lớn thời lượng cho luyện đề, không dàn đều |
| **Quy trình luyện đề bắt buộc: làm đề trước → mới được xem video chữa** | FR-T05 và FR-P10 — khóa đáp án/lời giải cho tới khi học sinh thực sự nộp bài |

### 4.4. Nội dung chuyên môn thu được từ Next Nobels

Ngoài phân tích cấu trúc đề ở 4.1, tài liệu công khai của cô Thu Ngân còn cung cấp nội dung dạy học cụ thể có thể đưa thẳng vào bài học — điển hình là **4 cách viết mở bài cho bài văn tả cây cối**: (1) giới thiệu vị trí hoặc lý do có cây, gắn cây với kỷ niệm; (2) bắt đầu từ một thời điểm đặc biệt (mùa xuân, sau cơn mưa, buổi sớm); (3) dẫn vào từ âm thanh gắn với cây; (4) bắt đầu bằng một câu thơ, câu hát về cây rồi dẫn tới kỷ niệm.

> **Áp dụng:** chuyên đề **KN-03 (Kỹ năng viết mở bài)** phải dạy mở bài gián tiếp theo nhiều cách như trên, cho từng kiểu bài — đây là điểm học sinh lúng túng nhất và cũng là chỗ dễ tạo khác biệt điểm số nhất.

---

## 5. Phạm vi kiến thức — 56 chuyên đề

Mỗi bài tập bắt buộc gắn ít nhất một mã chuyên đề. Chuyên đề **không có** trong danh mục TAK12 mà được bổ sung sau khi đối chiếu đề thi thực tế được đánh dấu **`[BỔ SUNG]`**.

### 5.1. TC — Tiếng, từ và cấu tạo từ (4)

| Mã | Chuyên đề |
|---|---|
| TC-01 | Tiếng và cấu tạo của tiếng (âm đầu, vần, thanh) |
| TC-02 | Từ, từ đơn và từ phức |
| TC-03 | Từ ghép: ghép tổng hợp và ghép phân loại |
| TC-04 | Từ láy: láy âm, láy vần, láy toàn bộ |

### 5.2. TL — Từ loại (6)

| Mã | Chuyên đề |
|---|---|
| TL-01 | Danh từ và các loại danh từ |
| TL-02 | Động từ và các loại động từ |
| TL-03 | Tính từ và các loại tính từ |
| TL-04 | Đại từ (nhân xưng, đại từ thay thế) |
| TL-05 | Quan hệ từ và cặp quan hệ từ |
| **TL-06** | **`[BỔ SUNG]`** Xác định từ loại trong ngữ cảnh; hiện tượng chuyển loại của từ |

### 5.3. NT — Nghĩa của từ và vốn từ (6)

| Mã | Chuyên đề |
|---|---|
| NT-01 | Từ đồng nghĩa |
| NT-02 | Từ trái nghĩa |
| NT-03 | Từ đồng âm |
| NT-04 | Từ nhiều nghĩa: nghĩa gốc và nghĩa chuyển |
| NT-05 | Từ Hán Việt và mở rộng vốn từ theo chủ điểm |
| NT-06 | Thành ngữ, tục ngữ, ca dao: thuộc, hiểu và vận dụng |

### 5.4. CA — Câu (8)

| Mã | Chuyên đề |
|---|---|
| CA-01 | Câu và các thành phần chính (chủ ngữ, vị ngữ) |
| CA-02 | Trạng ngữ và các loại trạng ngữ |
| CA-03 | Các kiểu câu kể: Ai làm gì? / Ai thế nào? / Ai là gì? |
| CA-04 | Các kiểu câu chia theo mục đích nói: câu hỏi, câu kể, câu khiến, câu cảm |
| CA-05 | Câu đơn và câu ghép |
| CA-06 | Cách nối các vế câu ghép |
| CA-07 | Liên kết câu trong đoạn: phép lặp, phép thế, phép nối |
| **CA-08** | **`[BỔ SUNG]`** Chữa lỗi câu: thiếu thành phần, sai quan hệ từ, lặp từ, diễn đạt lủng củng |

### 5.5. CD — Chính tả và dấu câu (5)

| Mã | Chuyên đề |
|---|---|
| CD-01 | Chính tả: phụ âm đầu dễ lẫn (l/n, ch/tr, s/x, r/d/gi) |
| CD-02 | Chính tả: thanh hỏi và thanh ngã |
| CD-03 | Chính tả: âm cuối và vần dễ lẫn (n/ng, c/t, iu/ưu, ươu/iêu…) |
| CD-04 | Quy tắc viết hoa (tên người, địa danh, cơ quan, danh hiệu) |
| CD-05 | Dấu câu: chấm, phẩy, chấm hỏi, chấm than, hai chấm, ngoặc kép, gạch ngang, chấm lửng |

### 5.6. DH — Đọc hiểu (6)

| Mã | Chuyên đề |
|---|---|
| DH-01 | Xác định chi tiết, sự việc trong văn bản |
| DH-02 | Cốt truyện và trình tự sự việc |
| DH-03 | Nhân vật: hành động, đặc điểm, tính cách |
| DH-04 | Ý chính, chủ đề, thông điệp của tác phẩm |
| DH-05 | Hàm ý, ẩn ý; suy luận từ văn bản |
| DH-06 | Giải nghĩa từ theo ngữ cảnh |

### 5.7. CT — Cảm thụ văn học (7)

| Mã | Chuyên đề |
|---|---|
| CT-01 | Biện pháp tu từ: So sánh — nhận diện và nêu tác dụng |
| CT-02 | Biện pháp tu từ: Nhân hóa — nhận diện và nêu tác dụng |
| **CT-03** | **`[BỔ SUNG]`** Biện pháp tu từ: Điệp từ, điệp ngữ |
| **CT-04** | **`[BỔ SUNG]`** Biện pháp tu từ: Đảo ngữ; từ láy gợi tả, gợi cảm |
| CT-05 | Cái hay, cái đẹp của từ ngữ và hình ảnh trong tác phẩm |
| CT-06 | Cảm thụ nhân vật |
| CT-07 | Viết đoạn văn cảm thụ theo cấu trúc chuẩn (mở – thân – kết) |

### 5.8. KN — Kỹ năng làm bài (5) — nhóm bổ sung theo mô hình Cây Bút Nhí

| Mã | Chuyên đề |
|---|---|
| **KN-01** | **`[BỔ SUNG]`** Kỹ năng làm bài trắc nghiệm: phương pháp loại trừ, nhận diện bẫy thường gặp |
| **KN-02** | **`[BỔ SUNG]`** Kỹ năng làm bài cảm thụ: quy trình từ nhận diện biện pháp → nêu tác dụng → liên hệ cảm xúc |
| **KN-03** | **`[BỔ SUNG]`** Kỹ năng viết mở bài gián tiếp cho từng kiểu bài (theo 4 cách của Next Nobels — Mục 4.4) |
| **KN-04** | **`[BỔ SUNG]`** Kỹ năng lập dàn ý nhanh và phân bổ thời gian làm bài |
| **KN-05** | **`[BỔ SUNG]`** Kỹ năng soát lỗi trước khi nộp: chính tả, dùng từ, đặt câu |

### 5.9. VA — Tập làm văn (9)

| Mã | Chuyên đề |
|---|---|
| VA-01 | Văn tả người |
| VA-02 | Văn tả cảnh |
| VA-03 | Văn tả cây cối |
| VA-04 | Văn tả con vật |
| VA-05 | Văn tả đồ vật |
| VA-06 | Kể chuyện được chứng kiến hoặc tham gia |
| VA-07 | Kể chuyện sáng tạo: đóng vai, tưởng tượng, viết tiếp câu chuyện |
| VA-08 | Viết thư (chia sẻ tình cảm, bày tỏ ý kiến) |
| **VA-09** | **`[BỔ SUNG]`** Trình bày ý kiến / nghị luận đơn giản — theo xu hướng đề mới từ 2025–2026 (Mục 4.1) |

### 5.10. Tổng hợp và thang độ khó

| Nhóm | Số chuyên đề |
|---|---|
| TC — Tiếng, từ và cấu tạo từ | 4 |
| TL — Từ loại | 6 |
| NT — Nghĩa của từ và vốn từ | 6 |
| CA — Câu | 8 |
| CD — Chính tả và dấu câu | 5 |
| DH — Đọc hiểu | 6 |
| CT — Cảm thụ văn học | 7 |
| KN — Kỹ năng làm bài | 5 |
| VA — Tập làm văn | 9 |
| **Tổng** | **56** |

**Thang độ khó 4 mức** (`Exercise.level`), thống nhất với URD Toán:

| Mức | Tên | Đặc điểm | Tỷ trọng |
|---|---|---|---|
| M1 | Nhận biết | Nhận ra khái niệm, tìm từ/câu trong bài | 25% |
| M2 | Thông hiểu | Giải thích, phân loại, xác định trong ngữ cảnh mới | 35% |
| M3 | Vận dụng | Đặt câu, viết đoạn ngắn, phân tích tác dụng | 30% |
| M4 | Vận dụng cao | Cảm thụ sâu, viết bài hoàn chỉnh, xử lý ngữ liệu lạ | 10% |

> **Ràng buộc kiểm thử:** mỗi chuyên đề có ≥ 2 bài mỗi mức M1–M3 và ≥ 1 bài M4. Viết test tự động canh ngưỡng này.

### 5.11. Mục tiêu khối lượng nội dung

| Loại | Mục tiêu | Ưu tiên xây trước |
|---|---|---|
| Bài học lý thuyết | 1 bài × 56 chuyên đề | Nhóm KN (ít tài liệu nhất, giá trị cao nhất), rồi CT, rồi CA |
| Bài tập chấm tự động | ≥ 12 bài/chuyên đề nhóm TC, TL, NT, CA, CD (~**350 bài**) | CA-01→07, TC-03/04, NT-03/04 |
| Văn bản đọc hiểu | ≥ 25 văn bản (mỗi văn bản 5–7 câu hỏi) | Ưu tiên ngữ liệu phạm vi công cộng (Mục 10.1) |
| Bài cảm thụ có đáp án mẫu | ≥ 5 bài/chuyên đề CT (~**35 bài**) | CT-01, CT-02, CT-05 |
| Đề tập làm văn có dàn ý + bài mẫu | ≥ 4 đề/chuyên đề VA (~**36 đề**) | VA-01→03, VA-09 |
| Đề thi thử hoàn chỉnh | ≥ 8 đề (2 đề/cấu hình ở Mục 6) | Cấu hình `ARCH60` trước |

---

## 6. Cấu hình đề thi thử

| Mã | Mô phỏng | Thời gian | Thành phần |
|---|---|---|---|
| `ARCH60` | Archimedes | 60 phút | ~40 câu trắc nghiệm/điền khuyết (80 điểm) + 01 đoạn văn theo chủ đề (20 điểm) |
| `NTT45` | Nguyễn Tất Thành | 45 phút | Trọng số cao cho TC/TL/NT/CA + 01 bài tập làm văn; đọc hiểu–cảm thụ chiếm tỷ trọng thấp |
| `BALANCED` | Cầu Giấy, Ams, Ngôi Sao, Marie Curie | 60 phút | Ba phần xấp xỉ đều: luyện từ và câu · đọc hiểu và cảm thụ · tập làm văn |
| `LTV_MCQ25` | Lương Thế Vinh (ĐGNL) | 25 phút | 25 câu trắc nghiệm ngôn ngữ Tiếng Việt, không có phần viết |

> Cấu hình khai báo bằng **dữ liệu** (`TestConfig`), không hard-code — để thêm/sửa khi cấu trúc đề trường thay đổi chỉ cần sửa dữ liệu.

---

## 7. Lộ trình học 3 giai đoạn

Theo lộ trình Tiếng Việt của TAK12, điều chỉnh theo tỷ trọng luyện đề của Cây Bút Nhí (Mục 4.3).

| GĐ | Tên | Thời lượng | Nội dung | Điều kiện chuyển |
|---|---|---|---|---|
| **1** | 🧱 Nền tảng — chủ điểm trọng tâm | 3–4 tháng | 29 chuyên đề nhóm TC, TL, NT, CA, CD ở mức M1–M2, xen 5 chuyên đề KN | Hoàn thành ≥ 80% buổi học |
| **2** | 📖 Đọc hiểu, cảm thụ và viết văn | 4–6 tháng | 13 chuyên đề DH + CT, 9 chuyên đề VA ở mức M2–M4; xen buổi luyện đề các năm trước + buổi **phân tích lỗi sai** | Đã làm ≥ 6 đề, bản đồ năng lực đủ dữ liệu |
| **3** | 🎯 Luyện đề trường mục tiêu | Hàng tuần đến ngày thi | Đề theo đúng cấu hình trường mục tiêu + buổi luyện chuyên sâu chuyên đề yếu nhất | Chạy đến ngày thi |

**Quy tắc lịch học** (kế thừa ứng dụng tham chiếu): lịch bắt đầu từ ngày mở ứng dụng lần đầu; mặc định 3 buổi/tuần, đổi được ngày trong tuần; nhập được **ngày thi dự kiến** và **trường mục tiêu**, hệ thống nén/giãn giai đoạn cho khớp và cảnh báo nếu thời gian không đủ.

> **Lưu ý riêng môn này:** lộ trình Tiếng Việt dài hơn Toán đáng kể (7–10 tháng so với 3–4 tháng). Nếu người dùng nhập ngày thi quá gần, hệ thống phải đề xuất **lộ trình rút gọn ưu tiên nhóm KN và các chuyên đề tần suất cao**, thay vì nén đều mọi chuyên đề.

---

## 8. Yêu cầu người dùng

| Mã | Yêu cầu | Ưu tiên |
|---|---|---|
| YC-01 | Là học sinh, tôi muốn học lý thuyết từng chuyên đề có ví dụ rõ ràng trước khi làm bài | Cao |
| YC-02 | Là học sinh, tôi muốn biết mình sai ở đâu và vì sao, không chỉ biết đáp án đúng | Cao |
| YC-03 | Là học sinh, tôi muốn luyện riêng chuyên đề tôi đang yếu | Cao |
| YC-04 | Là học sinh, tôi muốn được **dạy cách làm bài cảm thụ** vì tôi thấy dạng này khó nhất | Cao |
| YC-05 | Là học sinh, tôi muốn viết bài văn trong ứng dụng và **được xem bài mẫu để đối chiếu** | Cao |
| YC-06 | Là học sinh, tôi muốn **không bị mất bài viết** khi điện thoại tắt màn hình hoặc có cuộc gọi đến | Cao |
| YC-07 | Là học sinh, tôi muốn thi thử đúng áp lực thời gian của trường tôi nhắm tới | Cao |
| YC-08 | Là học sinh, tôi muốn làm lại những câu tôi từng làm sai | Cao |
| YC-09 | Là học sinh, tôi muốn biết mình mạnh/yếu ở phần nào một cách trực quan | Cao |
| YC-10 | Là học sinh, tôi muốn được gợi ý nên học gì tiếp theo | Cao |
| YC-11 | Là học sinh, tôi muốn có kế hoạch học theo ngày để biết hôm nay làm gì | Cao |
| YC-12 | Là học sinh, tôi muốn **rèn tốc độ viết** vì đề mới dài hơn | Trung bình |
| YC-13 | Là học sinh, tôi muốn có động lực học đều trong nhiều tháng | Cao |
| YC-14 | Là học sinh, tôi muốn **dùng ứng dụng mượt trên điện thoại Android** như dùng app thật | Cao |
| YC-15 | Là học sinh, tôi muốn học tiếp trên điện thoại đúng chỗ đã dừng trên máy tính | Cao |
| YC-16 | Là học sinh, tôi muốn **nghe đọc văn bản** khi bài đọc dài và khó | Trung bình |
| YC-17 | Là phụ huynh, tôi muốn **đọc được bài viết của con và ghi nhận xét** ngay trong ứng dụng | Cao |
| YC-18 | Là phụ huynh, tôi muốn xem tổng quan tiến trình của con và in ra được | Cao |
| YC-19 | Là phụ huynh, tôi muốn chắc chắn ứng dụng không thu thập thông tin cá nhân của con | Cao |

---

## 9. Yêu cầu chức năng theo module

### 9.1. Module Lý thuyết

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-L01 | Danh sách 56 chuyên đề nhóm theo 9 nhóm, mỗi chuyên đề có trạng thái Chưa học / Đang học / Đã nắm | YC-01, YC-09 |
| FR-L02 | Mỗi chuyên đề có bài học: khái niệm, **bảng dấu hiệu nhận biết**, 3–5 ví dụ có phân tích, mục **lỗi thường gặp** | YC-01 |
| FR-L03 | Với nhóm KN, bài học trình bày dạng **quy trình từng bước** kèm ví dụ áp dụng đầy đủ, không chỉ nêu mẹo | YC-04 |
| FR-L04 | Quiz cuối bài 3–5 câu; **hiển thị công khai ngưỡng đạt ngay đầu quiz**; đạt ngưỡng mới đánh dấu "Đã nắm". Ngưỡng 80%, bài dưới 5 câu luôn được phép sai 1 câu | YC-01 |
| FR-L05 | Mở lại bài lý thuyết của chuyên đề ngay từ màn hình làm bài khi làm sai | YC-02 |
| FR-L06 | Trang **Sơ đồ tư duy** tổng hợp 56 chuyên đề theo nhóm, bấm đi thẳng tới bài học | YC-01 |
| FR-L07 | Điều hướng "bài trước / bài sau" hiển thị **tên bài**, không phải mã chuyên đề | YC-01 |

### 9.2. Module Luyện tập

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-P01 | Mỗi bài tập gắn: mã chuyên đề (≥1), mức M1–M4, và **loại câu hỏi theo Mục 10.2** | YC-03, YC-09 |
| FR-P02 | Hỗ trợ đủ 5 loại câu hỏi theo Mục 10.2 với cơ chế chấm riêng từng loại | YC-02 |
| FR-P03 | Chọn luyện theo một/nhiều chuyên đề, lọc thêm theo mức độ | YC-03 |
| FR-P04 | Sau mỗi câu: kết quả + **giải thích vì sao đáp án đúng và vì sao các đáp án kia sai** (bắt buộc với câu trắc nghiệm) | YC-02 |
| FR-P05 | **Sổ lỗi**: tự lưu mọi câu làm sai; có chế độ luyện lại riêng | YC-08 |
| FR-P06 | Câu được xóa khỏi sổ lỗi khi làm đúng **2 lần liên tiếp** ở các lần luyện lại sau | YC-08 |
| FR-P07 | **Trang phân tích lỗi sai** theo chuyên đề *và* theo **loại lỗi** (`errorType`: nhầm khái niệm / sai chính tả / không đọc kỹ đề / diễn đạt chưa rõ / thiếu ý) | YC-02, YC-09 |
| FR-P08 | Với bài viết (CT, VA): trình soạn thảo có **đếm từ, đếm câu**, và **tự lưu nháp mỗi 5 giây** | YC-05, YC-06 |
| FR-P09 | Chế độ **luyện viết có tính giờ**: đặt mục tiêu số từ trong khoảng thời gian, hiển thị tốc độ viết (từ/phút) — rèn theo xu hướng đề dài hơn ở Mục 4.1 | YC-12 |
| FR-P10 | **Bài mẫu và đáp án chỉ mở sau khi học sinh đã nộp bài của mình**, và với bài viết chỉ mở khi đã gõ ≥ 40 từ — chống chép bài mẫu | YC-05 |

### 9.3. Module Thi thử

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-T01 | Chọn một trong 4 cấu hình đề (Mục 6); cấu hình khai báo bằng dữ liệu | YC-07 |
| FR-T02 | Sinh đề ngẫu nhiên theo tỷ trọng chuyên đề, tỷ lệ mức độ và tỷ lệ loại câu hỏi khai báo trong cấu hình | YC-07 |
| FR-T03 | Đồng hồ đếm ngược; cảnh báo khi còn 10 phút và 5 phút; tự nộp khi hết giờ | YC-07 |
| FR-T04 | Bảng số thứ tự câu: đã làm / chưa làm / đánh dấu xem lại | YC-07 |
| FR-T05 | Trong lúc thi **không** hiển thị đáp án hay phản hồi đúng/sai | YC-07 |
| FR-T06 | Sau khi nộp: chấm tự động các loại chấm được; với câu mở hiển thị **đáp án mẫu + bảng tiêu chí tự chấm**; học sinh tự cho điểm phần này | YC-05, YC-07 |
| FR-T07 | Trang kết quả: điểm tự động, điểm tự chấm (**tách riêng**), tổng, thời gian dùng, điểm theo nhóm chuyên đề và theo mức độ, bảng xem lại từng câu | YC-07, YC-09 |
| FR-T08 | Lưu lịch sử thi thử; **biểu đồ xu hướng điểm theo thời gian**, tách đường điểm tự động và điểm tự chấm | YC-09 |
| FR-T09 | Chế độ **tạo đề tùy chỉnh**: tự chọn chuyên đề, số câu, thời gian | YC-03, YC-07 |

### 9.4. Module Lộ trình học

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-C01 | Sinh lịch học đầy đủ 3 giai đoạn (Mục 7) từ ngày mở ứng dụng lần đầu | YC-11 |
| FR-C02 | **Thẻ "Buổi học hôm nay"** trên trang chủ, 3 trạng thái: hôm nay / đang trễ lịch / buổi tiếp theo, kèm tiến độ toàn khóa | YC-11 |
| FR-C03 | Mỗi buổi có cấu trúc khối rõ ràng, bấm vào khối đi thẳng tới đúng nội dung | YC-11 |
| FR-C04 | Cuối buổi học sinh **tự đánh giá kết quả** 3 mức (Xuất sắc / Ổn / Cần ôn lại) — dùng cho gamification | YC-11, YC-13 |
| FR-C05 | Chèn **bài kiểm tra định kỳ** vào lộ trình: kiểm tra tuần và kiểm tra tháng | YC-09 |
| FR-C06 | Nhập **ngày thi dự kiến** và **trường mục tiêu**; điều chỉnh giai đoạn và cấu hình đề mặc định. Nếu thời gian không đủ, đề xuất **lộ trình rút gọn** (Mục 7) | YC-07, YC-11 |
| FR-C07 | **Bản đồ hành trình** hiển thị 3 giai đoạn và vị trí hiện tại | YC-11, YC-13 |
| FR-C08 | **Banner "Quay lại buổi học đang dở"** khi học sinh rời buổi học giữa chừng | YC-11 |

### 9.5. Module Hồ sơ & Cá nhân hóa

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-H01 | Bài kiểm tra đầu vào ~30 câu phủ đều 9 nhóm chuyên đề (chỉ dùng câu chấm tự động được) | YC-09 |
| FR-H02 | Bỏ qua kiểm tra đầu vào → mọi chuyên đề "chưa có dữ liệu", dùng lộ trình mặc định | YC-09 |
| FR-H03 | Tính **mức độ thành thạo** theo Mục 10.5 — **chỉ từ câu chấm tự động**, loại trừ điểm tự chấm | YC-09 |
| FR-H04 | Phân loại 3 mức: Cần ôn lại / Đang tiến bộ / Thành thạo. Ngưỡng — xem Mục 22 | YC-09 |
| FR-H05 | **Biểu đồ radar** theo 9 nhóm + bản đồ lưới chi tiết 56 chuyên đề, **phân biệt rõ chỉ số định lượng và chỉ số hoạt động** (Mục 10.5) | YC-09 |
| FR-H06 | Gợi ý tối đa 3 hành động tiếp theo, ưu tiên chuyên đề thành thạo thấp nhất **trong số đã luyện ≥ 1 lần** | YC-10 |
| FR-H07 | Chuyên đề chưa từng luyện không bị coi là yếu; đưa vào gợi ý theo lộ trình nền tảng | YC-10 |
| FR-H08 | Sổ lỗi vượt ngưỡng → đẩy "luyện lại câu sai" lên đầu gợi ý | YC-08, YC-10 |
| FR-H09 | **Trang phụ huynh**: số buổi học trong tuần, xu hướng điểm, 2–3 chuyên đề yếu nhất, ngôn ngữ dễ hiểu, in được | YC-18 |
| FR-H10 | **Hộp nhận xét của phụ huynh**: phụ huynh đọc bài viết của con ngay trong ứng dụng và ghi nhận xét; nhận xét hiển thị lại cho học sinh cùng bài viết đó | YC-17 |
| FR-H11 | Hiển thị **lý do** mỗi gợi ý (ví dụ: "vì con đúng 4/12 câu gần nhất ở chuyên đề này") | YC-10 |
| FR-H12 | **Sao lưu & khôi phục** thủ công: xuất/nhập toàn bộ tiến độ dạng JSON | YC-15 |

---

## 10. Đặc thù môn Tiếng Việt

> Phần rủi ro cao nhất của dự án. Đọc kỹ trước khi thiết kế bất kỳ module nào.

### 10.1. Chiến lược ngữ liệu — ràng buộc pháp lý tuyệt đối

Đề Tiếng Việt truyền thống dùng trích đoạn thơ/văn của tác giả đương đại. **Các tác phẩm này còn trong thời hạn bảo hộ quyền tác giả.** Ứng dụng **không được** sao chép chúng vào ngân hàng nội dung.

| Hướng | Ưu điểm | Nhược điểm |
|---|---|---|
| **A. Ngữ liệu phạm vi công cộng** — ca dao, tục ngữ, thành ngữ, truyện cổ tích, truyện ngụ ngôn, thơ của tác giả đã qua đời đủ thời hạn bảo hộ | An toàn pháp lý tuyệt đối; ca dao–tục ngữ vốn đã là nội dung thi (NT-06); truyện dân gian phù hợp dạy cốt truyện, nhân vật | Ít văn bản hiện đại; khó tìm ngữ liệu tả cảnh thiên nhiên hiện đại hợp gu đề thi |
| **B. Tự biên soạn văn bản gốc** mô phỏng đúng thể loại, độ dài, độ khó | Kiểm soát hoàn toàn độ khó và chuyên đề cần kiểm tra; không giới hạn chủ đề | Tốn công nhất; chất lượng văn chương phụ thuộc người biên soạn — văn dở thì phần cảm thụ mất giá trị |
| **C. Trích rất ngắn có dẫn nguồn đầy đủ** | Sát đề thi thật nhất | Ranh giới trích dẫn hợp lý khó xác định chắc chắn; rủi ro pháp lý còn lại; không phù hợp nếu ứng dụng được chia sẻ rộng |

**Khuyến nghị: kết hợp A + B** — dùng A làm nền cho các chuyên đề TC/TL/NT/CA/CD/NT-06 và phần lớn DH; dùng B cho các văn bản cần độ khó và chủ đề cụ thể, đặc biệt nhóm CT. **Không dùng C** trừ khi người dùng chấp nhận rủi ro và ứng dụng chỉ dùng nội bộ gia đình.

> **Đây là QĐ-2 ở Mục 22 — cần người dùng chốt.**

**Ràng buộc cứng cho Claude Code, áp dụng ngay cả trước khi QĐ-2 được chốt:**

| Mã | Ràng buộc |
|---|---|
| FR-N01 | Mỗi bản ghi văn bản (`Passage`) **bắt buộc** có trường `sourceType`: `public-domain` \| `original` \| `quoted`, và trường `sourceNote` ghi rõ xuất xứ |
| FR-N02 | Test tự động **chặn** mọi `Passage` có `sourceType: 'quoted'` nếu QĐ-2 chưa chọn hướng C |
| FR-N03 | Không được đưa nguyên văn bài thơ/đoạn văn của tác giả còn bảo hộ vào **bất kỳ đâu** trong mã nguồn, kể cả comment, test fixture, hay dữ liệu mẫu |
| FR-N04 | Với ngữ liệu `public-domain`, `sourceNote` phải ghi căn cứ (ví dụ: "ca dao dân gian", "truyện cổ tích Việt Nam") |

### 10.2. Phân loại câu hỏi theo khả năng chấm

| Loại | Mã | Ví dụ dạng bài | Cơ chế chấm | Tỷ trọng mục tiêu |
|---|---|---|---|---|
| **Chấm tự động tuyệt đối** | `mcq`, `match`, `order` | Trắc nghiệm 4 đáp án; nối từ với nghĩa; sắp xếp câu thành đoạn | So khớp chỉ số/tập hợp | **45%** |
| **Chấm tự động có điều kiện** | `fill` | Điền từ vào chỗ trống; tìm từ láy trong câu; điền dấu câu | So khớp theo Mục 10.3, chấp nhận nhiều biến thể | **25%** |
| **Chấm bán tự động** | `short` | Đặt câu với từ cho trước; nêu tác dụng của biện pháp tu từ trong 1–2 câu | Đối chiếu **từ khóa/ý bắt buộc** → gợi ý kết quả → **học sinh tự xác nhận** | **15%** |
| **Không chấm tự động — cảm thụ** | `essay-short` | Viết đoạn cảm thụ 5–7 câu | Đáp án mẫu + bảng tiêu chí tự chấm | **10%** |
| **Không chấm tự động — bài văn** | `essay-long` | Bài văn tả/kể/viết thư/nghị luận | Dàn ý + bài mẫu + bảng tiêu chí tự chấm + nhận xét phụ huynh (FR-H10) | **5%** |

> **Vì sao tỷ trọng này quan trọng:** nếu quá nửa ngân hàng không chấm tự động được, học sinh 10–11 tuổi sẽ mất hứng vì không có phản hồi tức thì. Mục tiêu **70% chấm tự động hoàn toàn** (45% + 25%) là ngưỡng tối thiểu để ứng dụng giữ được tính hấp dẫn. Bù lại cho 30% còn lại bằng: bảng tiêu chí tự chấm cụ thể, cơ chế nhận xét của phụ huynh, và xu (GM) thưởng cho **hành vi hoàn thành** chứ không chỉ cho điểm đúng.

### 10.3. Chuẩn hóa và chấm tiếng Việt có dấu

| Mã | Yêu cầu |
|---|---|
| FR-M01 | **Chuẩn hóa Unicode NFC** mọi chuỗi trước khi so khớp (xử lý tổ hợp ký tự vs ký tự dựng sẵn) |
| FR-M02 | **Hai kiểu đặt dấu thanh đều hợp lệ**: `hoà` = `hòa`, `thuý` = `thúy`, `loà` = `lòa`. Bắt buộc chấp nhận cả hai |
| FR-M03 | Bỏ qua khác biệt hoa/thường và khoảng trắng thừa ở đầu/cuối/giữa |
| FR-M04 | Chấp nhận biến thể dấu câu cuối câu trả lời (có/không dấu chấm) khi đáp án là một từ hoặc cụm từ |
| FR-M05 | **Ngoại lệ tuyệt đối cho nhóm CD (chính tả):** so khớp **chính xác từng ký tự**, **không** chuẩn hóa bỏ dấu, **không** bỏ qua hoa/thường khi bài kiểm tra quy tắc viết hoa (CD-04) — vì chính dấu, phụ âm và chữ hoa là nội dung đang được kiểm tra |
| FR-M06 | Mỗi câu `fill` khai báo `acceptedAnswers[]` (danh sách đáp án chấp nhận) và cờ `strictMode` để bật chế độ FR-M05 |
| FR-M07 | Với câu yêu cầu **liệt kê nhiều từ** (ví dụ "tìm 3 từ láy trong đoạn"): chấm theo **tập hợp**, không theo thứ tự; đúng khi đủ số lượng và mọi từ đều nằm trong danh sách hợp lệ |
| FR-M08 | Nhập sai định dạng → hiện hướng dẫn, **không** tính là làm sai |
| FR-M09 | Bộ chấm phải hoạt động đúng với **bộ gõ Telex và VNI** trên cả máy tính và Android — xem thêm FR-A05 |

> **Kiểm thử bắt buộc:** unit test phủ toàn bộ FR-M01 → FR-M09, bao gồm tối thiểu 20 cặp ví dụ dấu thanh kiểu cũ/kiểu mới, trước khi module Luyện tập được coi là hoàn thành.

### 10.4. Bài viết: cảm thụ và tập làm văn

| Mã | Yêu cầu |
|---|---|
| FR-W01 | Trình soạn thảo văn bản dài với: đếm từ, đếm câu, **tự lưu nháp mỗi 5 giây**, khôi phục nháp khi mở lại |
| FR-W02 | Với `essay-short` (cảm thụ): hiển thị **khung gợi ý cấu trúc** trước khi viết (mở đoạn → nêu biện pháp → nêu tác dụng → cảm xúc/liên hệ), theo quy trình dạy ở KN-02 |
| FR-W03 | Với `essay-long`: hiển thị **dàn ý gợi ý** và (với văn tả) **các cách mở bài** theo KN-03 |
| FR-W04 | **Bảng tiêu chí tự chấm** có mốc điểm cụ thể cho từng bài (ví dụ: "Nêu đúng tên biện pháp tu từ — 1 điểm"; "Nêu được tác dụng gợi hình — 2 điểm"; "Diễn đạt trôi chảy, không sai chính tả — 1 điểm") |
| FR-W05 | Điểm tự chấm lưu vào hồ sơ, **đánh dấu rõ là điểm tự đánh giá**, **không** dùng tính mastery (FR-H03) |
| FR-W06 | Bài viết của học sinh **được lưu lại** để phụ huynh đọc và nhận xét (FR-H10), và để học sinh xem lại tiến bộ của chính mình theo thời gian |
| FR-W07 | Chấm tự động bài viết bằng AI: **xem QĐ-1 ở Mục 22** — không tự triển khai khi chưa được chốt |

### 10.5. Đo mức độ thành thạo cho môn định tính

| Mã | Yêu cầu |
|---|---|
| FR-H03a | **Chỉ số định lượng** (`masteryScore`): tính từ độ chính xác các lần làm gần nhất, **chỉ dùng câu loại `mcq`/`match`/`order`/`fill`**. Áp dụng cho nhóm TC, TL, NT, CA, CD, DH |
| FR-H03b | **Chỉ số hoạt động** (`activityScore`): với nhóm **CT, VA, KN** — nơi phần lớn câu là mở — dùng chỉ số thay thế tính từ **số bài đã hoàn thành và tần suất luyện trong 4 tuần gần nhất**, không phải độ chính xác |
| FR-H03c | Giao diện phải **phân biệt rõ hai loại chỉ số** — không gộp chung vào một con số duy nhất. Nhóm dùng `activityScore` hiển thị nhãn khác (ví dụ "Đã luyện 8/20 bài") thay vì phần trăm đúng |
| FR-H03d | Điểm tự chấm (FR-W05) **không** tham gia vào cả hai chỉ số |
| FR-H03e | Công thức và ngưỡng cụ thể — xem Mục 22 |

### 10.6. Nội dung có tranh cãi giữa các bộ sách

Chương trình GDPT 2018 có nhiều bộ sách (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều). Một số nội dung phân loại khác nhau — điển hình là ranh giới **từ ghép / từ láy** ở những từ như *"chôm chôm", "ba ba", "cào cào"*, hay cách gọi tên thành phần câu.

| Mã | Yêu cầu |
|---|---|
| FR-D01 | Chọn **một nguồn chuẩn duy nhất** làm căn cứ, ghi rõ ngay trong URD của repo và trong phần "Về ứng dụng" |
| FR-D02 | Trường `Topic.disputedNote`: với chuyên đề có nội dung tranh cãi, bài học **phải nói rõ cho học sinh biết là có cách hiểu khác**, thay vì khẳng định một chiều |
| FR-D03 | Ngân hàng câu hỏi **tránh lấy chính những từ gây tranh cãi** làm đáp án của câu trắc nghiệm |
| FR-D04 | Duy trì danh sách từ tranh cãi trong `src/content/disputed-words.ts`; **test tự động cảnh báo** nếu một từ trong danh sách này xuất hiện làm đáp án đúng của câu `mcq` |

---

## 11. Yêu cầu UI/UX

> Kế thừa từ ứng dụng tham chiếu. Đọc mã nguồn repo đó trước khi tự thiết kế.

### 11.1. Điều hướng

| Mã | Yêu cầu |
|---|---|
| UX-01 | Thanh điều hướng ngang chỉ hiện từ `sm:` trở lên; dưới đó dùng **thanh tab cố định ở đáy màn hình** |
| UX-02 | Header rút gọn 1 dòng dưới `lg:`; `main` có `padding-bottom` để không bị thanh tab che |
| UX-03 | Vì mỗi mục xuất hiện ở **hai** thanh, test phải khoanh vùng theo `role="navigation"` có tên cụ thể |

### 11.2. Màn hình làm bài

| Mã | Yêu cầu |
|---|---|
| UX-04 | Bài có **văn bản đọc hiểu**: từ `lg:` xếp **2 cột** — văn bản dính (`sticky`) bên trái, câu hỏi bên phải. Trên điện thoại: văn bản **thu gọn được** và tự thu gọn từ câu thứ 2 trở đi của cùng một bài |
| UX-05 | **Thanh tiến trình tô màu theo kết quả từng câu** (xanh đúng / đỏ sai / xám chưa làm) |
| UX-06 | **Nút thoát** có hộp xác nhận nêu rõ đã làm bao nhiêu câu và **kết quả vẫn được ghi nhận** |
| UX-07 | **Phím tắt** `1`–`4` chọn đáp án, `Enter` sang câu tiếp; số thứ tự hiện trên phương án (chỉ từ `sm:`) |
| UX-08 | Với câu `fill`: **Enter để nộp đáp án**, không cần rê tay bấm nút — quan trọng trên điện thoại |
| UX-09 | **Không lồng `<button>` trong `<button>`**, không đặt nút bên trong `<label>` của radio — lỗi này đã xảy ra thực tế ở ứng dụng tham chiếu |

### 11.3. Danh sách và trang chủ

| Mã | Yêu cầu |
|---|---|
| UX-10 | Trang danh sách chuyển sang **lưới 2–3 cột** từ `lg:`, các ô cùng hàng cao bằng nhau |
| UX-11 | Trang chủ lấy **thẻ Buổi học hôm nay** làm trung tâm, dùng **đúng cùng hàm sinh lịch** với trang Lộ trình để hai màn hình không lệch nhau |

### 11.4. Khả năng tiếp cận và bản in

| Mã | Yêu cầu |
|---|---|
| UX-12 | Mọi thao tác thực hiện được bằng bàn phím; trạng thái focus rõ ràng |
| UX-13 | Tôn trọng `prefers-reduced-motion` |
| UX-14 | `@media print`: ẩn header và điều hướng, nền trắng — cho trang phụ huynh và **cho bài viết của học sinh** (phụ huynh in ra chữa tay) |
| UX-15 | Cỡ chữ nội dung tối thiểu 16px trên di động; hỗ trợ người dùng phóng to tới 200% không vỡ bố cục |

### 11.5. Đọc văn bản bằng giọng nói

*Toàn bộ tiểu mục này đáp ứng **YC-16**.*

| Mã | Yêu cầu |
|---|---|
| UX-16 | Nút **đọc văn bản** dùng Web Speech API với giọng tiếng Việt (`lang: 'vi-VN'`), cho văn bản đọc hiểu và đề bài dài. Nút **tự ẩn** khi thiết bị không có giọng tiếng Việt |
| UX-17 | Có nút **đọc chậm** (`rate` thấp hơn) cho học sinh đọc yếu |
| UX-18 | **Tự hủy giọng đọc khi rời trang** — nếu không, giọng đọc vẫn chạy tiếp ở trang mới |

---

## 12. Gamification

| Mã | Yêu cầu |
|---|---|
| GM-01 | **Hệ thống xu**: cộng khi hoàn thành buổi học và làm đúng bài; hiển thị ở header |
| GM-02 | Xu theo **kết quả tự đánh giá cuối buổi**: "Xuất sắc" cộng đủ, "Ổn" cộng một nửa, **"Cần ôn lại" trừ một nửa** — cố ý để khuyến khích tự đánh giá trung thực |
| GM-03 | **Với bài viết, thưởng theo hành vi hoàn thành, không theo điểm tự chấm** — tránh việc học sinh tự cho điểm cao để lấy xu |
| GM-04 | Buổi càng nặng (luyện đề, kiểm tra tháng, viết bài văn hoàn chỉnh) thì mức xu càng cao |
| GM-05 | **Huy hiệu**: hoàn thành mỗi giai đoạn, chuỗi 5 buổi liên tiếp, thi thử đạt trên 80%, **viết đủ 10 bài văn**, **đọc hiểu 20 văn bản** |
| GM-06 | **Tủ huy hiệu** hiển thị huy hiệu đã đạt và chưa đạt (chưa đạt hiện mờ kèm điều kiện) |
| GM-07 | **Vòng tiến độ theo giai đoạn** hiển thị % hoàn thành từng giai đoạn |
| GM-08 | Hiệu ứng âm thanh bằng Web Audio API (không thêm file), có **công tắc bật/tắt**; tiếng báo sai **trầm và ngắn, không chói tai** |
| GM-09 | Chế độ **Thử thách tốc độ**: trả lời nhanh nhiều câu M1–M2 nhóm TC/TL/NT/CA trong thời gian giới hạn |

---

## 13. Đồng bộ đa thiết bị

> Sao chép cơ chế đã vận hành thực tế ở ứng dụng tham chiếu (ADR 0005). **Giữ nguyên thiết kế, chỉ đổi tiền tố khóa lưu trữ thành `ol6v.*`.**

### 13.1. Nguyên tắc

| Mã | Yêu cầu |
|---|---|
| SY-01 | Dùng **Firebase Firestore** làm nơi lưu trung gian — không dựng backend riêng |
| SY-02 | **Không thêm API mới cho từng loại dữ liệu.** Tái dùng `exportAll()` / `importAll()` của tính năng Sao lưu & khôi phục (FR-H12) |
| SY-03 | **Một document duy nhất mỗi mã đồng bộ**: `progress_sync/{syncCode}` chứa `{ data, updatedAt, updatedBy }` |
| SY-04 | **Mã đồng bộ 8 ký tự**, bỏ ký tự dễ nhầm `0/O`, `1/I/L`. Mã vừa là khóa tra cứu vừa đóng vai trò mật khẩu |
| SY-05 | Kết hợp **Firebase Anonymous Auth** để Firestore Rules chặn truy cập không xác thực |
| SY-06 | Cảnh báo rõ khi liên kết vào mã có sẵn: **dữ liệu cục bộ sẽ bị ghi đè** |

### 13.2. Thời điểm đồng bộ

**Chỉ 3 thời điểm, không giữ kết nối hay tiến trình nền giữa các thời điểm đó.** Ứng dụng tham chiếu ban đầu làm realtime liên tục rồi phải đổi lại — đừng lặp lại.

| Mã | Thời điểm | Hành vi |
|---|---|---|
| SY-07 | **Mở ứng dụng** | Đọc 1 lần; cloud mới hơn mốc đồng bộ gần nhất thì kéo về, ngược lại đẩy lên |
| SY-08 | **Rời ứng dụng** | Bắt qua `visibilitychange` → `hidden` và `pagehide` (**không dùng** `beforeunload`/`unload`), đẩy lên 1 lần |
| SY-09 | **Bấm "Đồng bộ ngay"** | Làm cả hai bước ngay lập tức |

| Mã | Yêu cầu bổ sung |
|---|---|
| SY-10 | Lưu `lastSyncedAt`; lúc mở app chỉ kéo về nếu `updatedAt` cloud mới hơn — tránh kéo lại dữ liệu không đổi |
| SY-11 | Xung đột: last-write-wins theo mốc thời gian, không merge |
| SY-12 | **Bài viết dài làm dữ liệu đồng bộ lớn hơn nhiều so với app Toán/Tiếng Anh.** Giới hạn: chỉ đồng bộ **20 bài viết gần nhất**; bài cũ hơn chỉ giữ cục bộ và trong bản sao lưu JSON. Cảnh báo nếu tổng dữ liệu vượt 800KB (giới hạn document Firestore là 1MB) |
| SY-13 | Tách phần **nhẹ** (trạng thái, sinh mã, localStorage) khỏi phần **nặng** (SDK Firebase ~550KB); SDK chỉ `import()` **động** khi thật sự cần |
| SY-14 | Tính năng **hoàn toàn tùy chọn**: không cấu hình biến môi trường thì hiện hướng dẫn thay vì lỗi |
| SY-15 | README có **hướng dẫn thiết lập Firebase từng bước cho người không rành kỹ thuật** |

---

## 14. Yêu cầu riêng cho thiết bị Android

> **Ràng buộc cứng.** Thiết bị chính của học sinh là điện thoại Android; máy tính chỉ là phụ. Mọi module phải đạt các yêu cầu dưới đây trước khi coi là hoàn thành.
>
> **Truy vết:** toàn bộ Mục 14 đáp ứng **YC-14** (dùng mượt trên Android như app thật); Mục 14.3 đáp ứng **YC-06** (không mất bài viết).

### 14.1. Cài đặt và chạy như ứng dụng thật (PWA)

| Mã | Yêu cầu |
|---|---|
| FR-A01 | Cấu hình **PWA đầy đủ**: `manifest.webmanifest` (tên, biểu tượng 192/512px, `display: standalone`, `theme_color`, `background_color`, `orientation: portrait`), để cài lên màn hình chính Android và chạy không có thanh địa chỉ trình duyệt |
| FR-A02 | **Service worker** cache toàn bộ tài nguyên tĩnh và dữ liệu nội dung → ứng dụng **dùng được khi mất mạng**, trừ tính năng Đồng bộ (vốn luôn cần mạng) |
| FR-A03 | Hiển thị lời nhắc "Thêm vào màn hình chính" một cách kín đáo ở trang Hồ sơ, **không** bật popup chặn màn hình khi vừa mở app |

### 14.2. Bàn phím ảo và bộ gõ tiếng Việt — rủi ro cao nhất

| Mã | Yêu cầu |
|---|---|
| FR-A04 | **Bàn phím ảo không được che ô đang nhập.** Khi bàn phím bật, cuộn ô nhập vào vùng nhìn thấy. Dùng `visualViewport` API để phát hiện thay đổi chiều cao, **không** dựa vào `window.innerHeight` |
| FR-A05 | **Bộ gõ tiếng Việt (Gboard, Laban Key…) dùng composition events.** Mọi ô nhập phải xử lý `compositionstart` / `compositionupdate` / `compositionend` đúng cách — **không** xử lý hoặc chuẩn hóa giá trị giữa chừng khi `isComposing === true`, vì sẽ làm mất dấu hoặc nhân đôi ký tự đang gõ |
| FR-A06 | **Không** dùng `autoCapitalize`, `autoCorrect`, `spellCheck` mặc định của trình duyệt cho ô nhập bài chính tả (nhóm CD) — trình duyệt sẽ tự sửa và làm hỏng mục đích kiểm tra |
| FR-A07 | Ô nhập ngắn dùng `enterKeyHint="done"`; ô soạn văn dài dùng `enterKeyHint="enter"` để phím Enter trên bàn phím Android hiển thị đúng chức năng |
| FR-A08 | Với trình soạn thảo bài văn dài: giữ **thanh công cụ (đếm từ, nút lưu) luôn nhìn thấy** phía trên bàn phím, không bị đẩy khỏi màn hình |

### 14.3. Không mất bài viết

| Mã | Yêu cầu |
|---|---|
| FR-A09 | **Android có thể hủy tiến trình trình duyệt bất cứ lúc nào** khi thiếu bộ nhớ hoặc học sinh nhận cuộc gọi. Bài viết phải **tự lưu mỗi 5 giây** và lưu ngay khi `visibilitychange` → `hidden` |
| FR-A10 | Khi mở lại bài viết đang dở, hiển thị **rõ ràng rằng đã khôi phục bản nháp**, kèm thời điểm lưu gần nhất |
| FR-A11 | Bản nháp lưu **cục bộ trước**, đồng bộ cloud sau — không để mất bài chỉ vì mất mạng |

### 14.4. Cảm ứng và bố cục

| Mã | Yêu cầu |
|---|---|
| FR-A12 | Mọi vùng chạm tối thiểu **48×48px**, khoảng cách giữa hai vùng chạm ≥ 8px |
| FR-A13 | **Không có chức năng nào chỉ truy cập được bằng hover** — điện thoại không có hover |
| FR-A14 | Tôn trọng **safe area insets** (`env(safe-area-inset-*)`) cho thiết bị có tai thỏ và thanh điều hướng cử chỉ; thanh tab đáy không bị thanh cử chỉ của Android che |
| FR-A15 | Hoạt động đúng ở **cả hướng dọc và ngang**; khi xoay màn hình không mất nội dung đang nhập |
| FR-A16 | Không dùng `100vh` cho bố cục toàn màn hình (sai trên Chrome Android khi thanh địa chỉ ẩn/hiện) — dùng `100dvh` |

### 14.5. Hiệu năng trên mạng và máy yếu

| Mã | Yêu cầu |
|---|---|
| FR-A17 | Bundle chính (không tính chunk Firebase và nội dung tải theo nhu cầu) **dưới 300KB gzip**; chia nhỏ dữ liệu nội dung theo nhóm chuyên đề, tải theo nhu cầu |
| FR-A18 | Thời gian hiển thị nội dung đầu tiên **dưới 3 giây** trên mạng 4G mô phỏng và thiết bị tầm trung |
| FR-A19 | Font chữ phải **phủ đủ ký tự tiếng Việt có dấu**; dùng `font-display: swap`; ưu tiên font hệ thống để không phải tải font |

### 14.6. Kiểm thử Android bắt buộc

| Mã | Yêu cầu |
|---|---|
| FR-A20 | Bộ e2e Playwright phải chạy với **device emulation Android** (ví dụ Pixel 7, Chrome), không chỉ desktop |
| FR-A21 | Kịch bản e2e bắt buộc có: nhập tiếng Việt có dấu vào ô `fill`; viết bài văn dài rồi chuyển tab và quay lại (kiểm tra khôi phục nháp); làm bài thi thử với bàn phím ảo bật |
| FR-A22 | Kiểm thử thủ công trên **thiết bị Android thật** ít nhất một lần trước mỗi lần phát hành — emulation không phát hiện được mọi vấn đề của bộ gõ tiếng Việt |

---

## 15. Yêu cầu phi chức năng

| Mã | Yêu cầu | Chỉ tiêu đo được |
|---|---|---|
| NFR-01 | Phản hồi nhanh | Chuyển màn hình và chấm câu dưới 150ms trên thiết bị tầm trung |
| NFR-02 | Tương thích thiết bị | Bố cục đúng từ 360px đến 1440px; đạt toàn bộ Mục 14 |
| NFR-03 | Bảo vệ dữ liệu trẻ em *(truy vết **YC-19**)* | **0** trường nhập liệu thu thập tên thật, số điện thoại, địa chỉ, ảnh hoặc giọng nói; test tự động quét schema và form để canh |
| NFR-04 | Khả năng tiếp cận | Theo UX-12, UX-13, UX-15 |
| NFR-05 | Độ bền dữ liệu | Sau khi đóng và mở lại ứng dụng, **100%** tiến độ, mục sổ lỗi và bài viết đã lưu được khôi phục nguyên vẹn; xuất rồi nhập lại file JSON cho trạng thái giống hệt ban đầu |
| NFR-06 | Mở rộng nội dung | Thêm 1 chuyên đề, 1 bài tập hoặc 1 văn bản mới chỉ cần sửa tệp trong `src/content/`, **0** dòng thay đổi trong `src/modules/` và `src/components/` |
| NFR-07 | **Tuân thủ bản quyền ngữ liệu** | 100% bản ghi `Passage` có `sourceType` và `sourceNote` hợp lệ; test tự động canh |
| NFR-08 | Tính đúng đắn nội dung | 100% bài tập qua kiểm chứng 3 lớp (Mục 18, GĐ 8) |
| NFR-09 | Minh bạch gợi ý | Xem được lý do một chuyên đề được đề xuất (FR-H11) |
| NFR-10 | Đa dạng đề thi thử | Cùng cấu hình, xác suất trùng đề hoàn toàn giữa hai lần sinh liên tiếp dưới 1% |
| NFR-11 | Chạy không cần máy chủ | Hỗ trợ build đóng gói **1 file HTML** chạy qua `file://` (dùng `HashRouter`) |

---

## 16. Kiến trúc kỹ thuật

### 16.1. Stack — chốt theo ứng dụng tham chiếu

| Thành phần | Lựa chọn |
|---|---|
| Framework | **React 19 + TypeScript** |
| Build | **Vite** |
| CSS | **Tailwind CSS v4** |
| Định tuyến | **react-router-dom** — `BrowserRouter` bản hosted, `HashRouter` bản 1 file |
| Lưu trữ cục bộ | `localStorage` qua `ProgressStore`; **IndexedDB cho bài viết dài** (vượt giới hạn localStorage) |
| PWA | `vite-plugin-pwa` *(bổ sung so với app Tiếng Anh — do yêu cầu Android ở Mục 14)* |
| Đồng bộ | **Firebase** (Firestore + Anonymous Auth), lazy-load |
| Unit test | **Vitest** + Testing Library |
| E2E test | **Playwright** — có cấu hình device Android (FR-A20) |
| Lint | **oxlint** |
| Đóng gói 1 file | **vite-plugin-singlefile** |

**Khác biệt so với ứng dụng Tiếng Anh:** không cần KaTeX; **thêm** `vite-plugin-pwa`; **thêm** IndexedDB cho bài viết; **không** có ghi âm giọng nói.

### 16.2. Nguyên tắc kiến trúc bắt buộc

- **Lớp truy cập dữ liệu trừu tượng**: `ProgressStore`, `ContentStore` — không gọi thẳng `localStorage`/`IndexedDB` rải rác.
- **Logic thuần tách khỏi component**: `answer-checker`, `mastery-engine`, `test-generator`, `schedule`, `text-normalize` là module TypeScript thuần có unit test riêng, không phụ thuộc React.
- **Nội dung tách khỏi mã**: toàn bộ bài học/bài tập/văn bản nằm trong `src/content/`, chỉ là dữ liệu.

---

## 17. Mô hình dữ liệu

| Thực thể | Trường chính | Ghi chú |
|---|---|---|
| `Topic` | `id` (TC/TL/NT/CA/CD/DH/CT/KN/VA-xx), `group`, `title`, `lesson`, `signals[]`, `examples[]`, `commonMistakes[]`, `disputedNote?` | 56 bản ghi |
| `Passage` | `id`, `title`, `text`, `genre`, **`sourceType`**, **`sourceNote`**, `level`, `wordCount` | FR-N01→N04 |
| `Exercise` | `id`, `topicIds[]`, `level` (M1–M4), `questionType` (`mcq`\|`match`\|`order`\|`fill`\|`short`\|`essay-short`\|`essay-long`), `passageId?`, `prompt`, `explanation` | `explanation` bắt buộc |
| `McqAnswer` | `options[]`, `answerIndex`, `distractorNotes[]` | `distractorNotes` giải thích vì sao mỗi đáp án sai (FR-P04) |
| `FillAnswer` | `acceptedAnswers[]`, `strictMode` (bool), `isSet` (bool), `expectedCount?` | FR-M05→M07 |
| `ShortAnswer` | `requiredKeywords[]`, `sampleAnswer` | Chấm bán tự động |
| `EssayAnswer` | `outline[]`, `openingStyles[]?`, `sampleAnswer`, `rubric[]` | FR-W02→W04 |
| `StudentWriting` | `id`, `exerciseId`, `content`, `wordCount`, `selfScore?`, `parentComment?`, `savedAt`, `submittedAt?` | FR-W06, FR-H10, FR-A09 |
| `TestConfig` | `id`, `durationMinutes`, `topicWeights{}`, `levelRatio{}`, `questionTypeRatio{}`, `autoScoreMax`, `essayScoreMax` | 4 cấu hình Mục 6 |
| `Attempt` | `exerciseId`, `correct?`, `userAnswer`, `errorType?`, `timeSpent`, `timestamp`, `context` | `correct` là `undefined` với câu không chấm tự động |
| `ErrorLogEntry` | `exerciseId`, `addedAt`, `consecutiveCorrect`, `errorType?` | FR-P05, P06, P07 |
| `TestResult` | `configId`, `date`, `autoScore`, `selfScore`, `total`, `byTopicGroup{}`, `byLevel{}`, `durationUsed` | Tách `autoScore` / `selfScore` |
| `MasterySnapshot` | `topicId`, `masteryScore?`, `activityScore?`, `level`, `lastUpdated` | Hai chỉ số tách biệt (FR-H03a/b) |
| `LearnerProfile` | `alias`, `targetSchool?`, `examDate?`, `startDate`, `coins`, `badges[]` | Không chứa thông tin định danh thật |
| `SyncMeta` | `syncCode?`, `deviceId`, `lastSyncedAt?` | Tiền tố `ol6v.sync.*` |

---

## 18. Cấu trúc thư mục và kế hoạch xây dựng

### 18.1. Cấu trúc thư mục

```
project-root/
├── URD-ung-dung-on-luyen-tieng-viet-vao-6.md
├── .env.example                       # 6 biến VITE_FIREBASE_*
├── public/
│   ├── manifest.webmanifest           # FR-A01
│   └── icons/                         # 192px, 512px, maskable
├── src/
│   ├── content/
│   │   ├── topics/                    # 56 bài học
│   │   ├── passages/                  # văn bản đọc hiểu (có sourceType)
│   │   ├── exercises/                 # theo nhóm TC/TL/NT/CA/CD/DH/CT/KN/VA
│   │   ├── writing-prompts/           # đề tập làm văn + dàn ý + bài mẫu
│   │   ├── disputed-words.ts          # FR-D04
│   │   └── test-configs/              # ARCH60 / NTT45 / BALANCED / LTV_MCQ25
│   ├── core/                          # LOGIC THUẦN — unit test riêng
│   │   ├── text-normalize/            # FR-M01→M04  ← XÂY TRƯỚC TIÊN
│   │   ├── answer-checker/            # FR-M05→M09
│   │   ├── mastery-engine/            # FR-H03a→e
│   │   ├── test-generator/            # FR-T02
│   │   ├── schedule/                  # FR-C01
│   │   ├── error-analysis/            # FR-P07
│   │   └── rewards/                   # GM-01→GM-07
│   ├── data-access/
│   │   ├── types.ts                   # ProgressStore, ContentStore
│   │   ├── local/                     # localStorage + IndexedDB (bài viết)
│   │   └── cloud/                     # syncMeta.ts (nhẹ) + firebaseSync.ts (nặng, lazy)
│   ├── modules/
│   │   ├── theory/  practice/  writing/  mock-test/  curriculum/  profile/
│   ├── components/                    # Layout, PassageView, WritingEditor, SpeakButton…
│   └── app/
├── tests/
│   ├── unit/                          # text-normalize, answer-checker, mastery, content.schema
│   └── e2e/                           # Playwright: desktop + Android emulation (FR-A20)
└── docs/adr/
```

### 18.2. Kế hoạch xây dựng

| GĐ | Nội dung | Điều kiện hoàn thành |
|---|---|---|
| 0 | Xác nhận QĐ-1, QĐ-2, QĐ-3 (Mục 22); khởi tạo dự án; cấu hình PWA | Cài được lên màn hình chính Android, chạy standalone |
| 1 | **`core/text-normalize` + `core/answer-checker` + unit test phủ FR-M01→M09** | Toàn bộ test xanh — **tiên quyết cho mọi module sau** |
| 2 | Module Luyện tập với nội dung mẫu 3 chuyên đề, đủ 5 loại câu hỏi; sổ lỗi | Làm được cả 5 loại; giải thích hiển thị đúng |
| 3 | **Trình soạn thảo bài viết + tự lưu nháp** (FR-W01, FR-A09→A11), kiểm thử trên Android emulation | Viết bài, chuyển tab, quay lại → bản nháp còn nguyên |
| 4 | Module Lý thuyết cho 3 chuyên đề mẫu (ưu tiên 1 chuyên đề nhóm KN) + quiz + sơ đồ tư duy | Học xong 1 bài → quiz → trạng thái "Đã nắm" |
| 5 | Module Thi thử: `test-generator`, đồng hồ, chấm, trang kết quả tách `autoScore`/`selfScore` | Thi thử được cả 4 cấu hình; hết giờ tự nộp đúng |
| 6 | Module Lộ trình: `schedule`, thẻ buổi hôm nay, bản đồ hành trình, kiểm tra định kỳ | Lịch sinh đúng 3 giai đoạn từ ngày mở app |
| 7 | Module Hồ sơ: `mastery-engine` (2 chỉ số), radar, gợi ý, phân tích lỗi, trang phụ huynh + hộp nhận xét, sao lưu JSON | Gợi ý đúng logic với dữ liệu giả lập |
| 8 | Đồng bộ đa thiết bị + gamification + hoàn thiện UI/UX + **rà soát toàn bộ Mục 14** | Đồng bộ được giữa 2 trình duyệt; đạt toàn bộ FR-A01→A22 |
| 9 | Mở rộng nội dung đạt Mục 5.11 + **kiểm chứng nội dung 3 lớp** | Xem quy trình bên dưới |

### 18.3. Quy trình kiểm chứng nội dung (Giai đoạn 9) — bắt buộc

1. **Kiểm tra tự động**: script xác minh mọi `Passage` có `sourceType` + `sourceNote` hợp lệ (NFR-07); mọi `mcq` có đủ lựa chọn, chỉ số đáp án hợp lệ và `distractorNotes`; mọi bài có `explanation`; mỗi chuyên đề đủ ngưỡng số bài và đủ mức M1–M4; không từ nào trong `disputed-words.ts` làm đáp án đúng của câu `mcq` (FR-D04).
2. **Kiểm tra chéo bằng phiên độc lập**: mở phiên làm việc mới **không mang lịch sử soạn đề**, làm lại toàn bộ bài tập và đối chiếu đáp án. Mọi điểm lệch rà soát thủ công. **Đặc biệt chú ý nhóm TC (từ ghép/từ láy) và NT (từ nhiều nghĩa/đồng âm)** — hai nhóm dễ sai nhất.
3. **Rà soát bởi giáo viên Tiếng Việt tiểu học**: chốt kiểm soát bắt buộc trước khi sử dụng thật, **đặc biệt cho toàn bộ đáp án mẫu nhóm CT và VA** — bài mẫu dở còn hại hơn không có bài mẫu.

---

## 19. Tiêu chí nghiệm thu v1.0

- [ ] `text-normalize` + `answer-checker` vượt toàn bộ unit test phủ FR-M01 → FR-M09
- [ ] Học và làm quiz được toàn bộ **56** chuyên đề; sơ đồ tư duy đi đúng tới từng bài
- [ ] Luyện tập đủ **5 loại câu hỏi**; câu trắc nghiệm có giải thích cả đáp án sai
- [ ] Đạt tỷ trọng ≥ **70% câu chấm tự động hoàn toàn** trong ngân hàng (Mục 10.2)
- [ ] Viết bài trong ứng dụng: tự lưu nháp, khôi phục được sau khi bị ngắt; phụ huynh ghi nhận xét được
- [ ] Sổ lỗi hoạt động; trang phân tích lỗi theo loại lỗi
- [ ] Thi thử đủ 4 cấu hình; kết quả tách `autoScore` và `selfScore`
- [ ] Lộ trình 3 giai đoạn sinh đúng; thẻ buổi hôm nay và trang Lộ trình **không lệch nhau**
- [ ] Bản đồ năng lực **phân biệt rõ chỉ số định lượng và chỉ số hoạt động**
- [ ] Đồng bộ được tiến độ và bài viết giữa hai trình duyệt bằng mã đồng bộ
- [ ] **Cài được lên màn hình chính Android, chạy standalone, dùng được khi mất mạng**
- [ ] **Gõ tiếng Việt có dấu bằng Gboard không mất dấu, không nhân đôi ký tự**
- [ ] **Bàn phím ảo không che ô nhập ở mọi màn hình**
- [ ] Bộ e2e chạy xanh trên **cả desktop và Android emulation**
- [ ] 100% `Passage` có `sourceType` hợp lệ; không có ngữ liệu vi phạm bản quyền
- [ ] Đạt khối lượng nội dung Mục 5.11 và hoàn thành 3 lớp kiểm chứng

---

## 20. Ngoài phạm vi v1.0

- Vai trò Giáo viên/Trung tâm (cần hệ thống tài khoản thật)
- Nhận diện chữ viết tay / chụp ảnh bài làm để chấm
- Ứng dụng Android native (dùng PWA thay thế — Mục 14.1)
- Thông báo đẩy nhắc lịch học
- Ghi âm giọng đọc của học sinh
- Chấm chính tả tự động cho **toàn bộ bài văn** (chỉ chấm bài tập chính tả có đáp án đóng, nhóm CD)
- Phần Nói/Nghe (kỳ thi vào 6 không có)

---

## 21. Rủi ro

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| **Vi phạm bản quyền ngữ liệu** | **Rất cao** | FR-N01→N04 + NFR-07 + test tự động; chốt QĐ-2 trước khi xây nội dung |
| **Đáp án mẫu cảm thụ/tập làm văn kém chất lượng** | **Rất cao** | Bài mẫu dở còn hại hơn không có; bắt buộc lớp 3 kiểm chứng (Mục 18.3) |
| **Bộ gõ tiếng Việt trên Android làm hỏng ô nhập** | Cao | FR-A05 + kiểm thử thiết bị thật (FR-A22); xây `text-normalize` trước tiên |
| **Học sinh mất bài viết dài** | Cao | FR-A09→A11: tự lưu 5 giây + lưu khi ẩn tab + lưu cục bộ trước |
| Tỷ trọng câu không chấm tự động quá cao làm mất hứng | Cao | Mục 10.2 đặt ngưỡng 70%; GM-03 thưởng theo hành vi hoàn thành |
| **Khối lượng nội dung lớn** (~350 bài + 25 văn bản + 71 bài viết mẫu) | Cao | Xây theo ưu tiên Mục 5.11; ra bản dùng được với 3 chuyên đề mẫu trước |
| Sai phân loại từ ghép/từ láy do khác bộ sách | Trung bình | FR-D01→D04 |
| Dữ liệu đồng bộ vượt giới hạn Firestore do bài viết dài | Trung bình | SY-12 |
| Cấu trúc đề thay đổi theo năm (xu hướng tăng phần viết) | Trung bình | Cấu hình đề bằng dữ liệu (FR-T01); đã tính trước ở Mục 4.1 |

---

## 22. Câu hỏi còn mở — cần chốt trước khi khởi tạo dự án

### QĐ-1. Chấm bài viết bằng AI hay không?

| Hướng | Ưu điểm | Nhược điểm |
|---|---|---|
| **(a) Không chấm AI** — chỉ đáp án mẫu + rubric tự chấm + nhận xét phụ huynh | Giữ kiến trúc client-side thuần; không chi phí; không rủi ro AI nhận xét sai/không phù hợp với trẻ | Học sinh thiếu phản hồi tức thì ở đúng phần chiếm 1/3 số điểm; phụ thuộc phụ huynh có thời gian |
| **(b) Tích hợp Claude API nhận xét theo rubric** | Phản hồi tức thì, chi tiết, đúng tiêu chí; giá trị lớn nhất của ứng dụng ở môn này | Cần lớp gọi API (không còn client-side thuần); có chi phí theo lượt; **bắt buộc kiểm soát an toàn nội dung vì người đọc là trẻ em** |

**Khuyến nghị:** hướng (b), nhưng **triển khai sau khi 5 trụ cột kia đã chạy ổn** (sau Giai đoạn 8), và bắt buộc kèm các ràng buộc: rubric đưa thẳng vào prompt; giới hạn phạm vi nhận xét trong đúng tiêu chí; **giọng văn khích lệ, chỉ ra điểm mạnh trước**; tuyệt đối không chê bai cá nhân học sinh; luôn hiển thị kèm câu "đây là nhận xét tự động, hãy hỏi thầy cô nếu em chưa đồng ý".

**Đây là quyết định của người dùng, không phải của Claude Code.**

### QĐ-2. Chiến lược ngữ liệu

Chọn giữa A (phạm vi công cộng), B (tự biên soạn), C (trích ngắn có dẫn nguồn), hoặc kết hợp. **Khuyến nghị A + B** — xem Mục 10.1.

### QĐ-3. Repo độc lập hay gộp chung với ứng dụng Tiếng Anh/Toán?

**Khuyến nghị: repo độc lập**, sao chép có chủ đích các module đã kiểm chứng (`mastery-engine`, `data-access`, `cloud sync`, `Layout`), dùng tiền tố khóa lưu trữ riêng `ol6v.*`.

### Các thông số cần xác nhận

| # | Nội dung | Đề xuất mặc định |
|---|---|---|
| 1 | Công thức `masteryScore` (FR-H03a) | Trung bình có trọng số N = 10 lượt gần nhất; tối thiểu 3 lượt mới bắt đầu tính |
| 2 | Ngưỡng 3 mức (FR-H04) | < 50% Cần ôn lại · 50–80% Đang tiến bộ · > 80% Thành thạo |
| 3 | Công thức `activityScore` (FR-H03b) | Số bài hoàn thành / mục tiêu chuyên đề, có hệ số giảm nếu > 4 tuần không luyện |
| 4 | Ngưỡng sổ lỗi (FR-H08) | 10 câu |
| 5 | Nguồn chuẩn cho nội dung tranh cãi (FR-D01) | Cần người dùng chỉ định bộ sách |
| 6 | Trường mục tiêu và ngày thi dự kiến | Cần người dùng cung cấp để đặt cấu hình đề mặc định |
| 7 | **Nguồn kiểm chứng nội dung** | Có giáo viên Tiếng Việt tiểu học cho Giai đoạn 9 không? Nếu chưa, cần bàn phương án **trước khi** xây nội dung quy mô lớn |

---

## 23. Phụ lục — Nguồn tham khảo

**Cấu trúc đề và phương pháp ôn (Mục 4.1, 4.4):**
- Cô Lê Thị Thu Ngân (Next Nobels) — *Thi vào lớp 6: Phương pháp ôn thi môn tiếng Việt hiệu quả*, VietNamNet
- Cô Thu Ngân hướng dẫn ôn thi vào lớp 6 môn Tiếng Việt (phần 1 và 2) — TAK12
- Thông tin tuyển sinh và bộ đề thi vào lớp 6 THCS Archimedes — TAK12
- Thông tin tuyển sinh và bộ đề thi vào lớp 6 THCS & THPT Nguyễn Tất Thành — TAK12
- Thông tin tuyển sinh và bộ đề thi vào lớp 6 THCS Lương Thế Vinh — TAK12
- Đề thi tham khảo và đáp án ĐGNL tuyển sinh lớp 6 Nguyễn Tất Thành 2026–2027 — ĐH Sư phạm Hà Nội (qua HoaTieu)

**Chương trình trung tâm (Mục 4.2, 4.3):**
- Khóa *Ôn thi vào lớp 6 – HSG*, *Cảm thụ văn học (Cơ bản / 2024)*, *Luyện từ và câu*, *Tập làm văn 5*, *Tuyệt chiêu viết văn*, *Chinh phục ngữ pháp lớp 5* — Cây Bút Nhí (caybutnhi.vn)
- Next Nobels — qua các bài phân tích công khai của cô Thu Ngân và chương trình hợp tác biên soạn Tiếng Việt vào lớp 6 trên TAK12

**Danh mục chuyên đề (Mục 5):**
- *Lộ trình ôn thi vào lớp 6 môn Tiếng Việt* và chương trình *Tổng ôn Tiếng Việt vào lớp 6* — TAK12 (nguồn đối chiếu danh mục chính)
- Bộ đề thi vào lớp 6 môn Tiếng Việt — VnDoc, VietJack (đối chiếu dạng bài)

**Ứng dụng tham chiếu (Mục 11, 12, 13, 16):**
- `github.com/haihttsdv-lang/on-luyen-tieng-anh-vao-6` — mã nguồn và `docs/adr/0001`→`0007`

*Các bài phân tích là của bên thứ ba, không phải đề thi chính thức của các trường. Danh mục chuyên đề là danh mục kiến thức; toàn bộ nội dung bài học, bài tập và ngữ liệu phải tự biên soạn theo ràng buộc Mục 10.1.*

— Hết tài liệu —
