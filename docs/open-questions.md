# Câu hỏi mở — cần xác nhận

Theo quy trình ở Mục 8 URD: khi thiếu tham số, đã chọn giá trị thận trọng và ghi chú ở đây.

## Giai đoạn 5 — Cấu hình đề thi thử (`src/content/test-configs/index.ts`)

Mục 6 URD nêu rõ số câu và điểm cho `ARCH60` (~40 câu, 80đ trắc nghiệm + 20đ đoạn văn) và `LTV_MCQ25` (25 câu trắc nghiệm). Với `NTT45` và `BALANCED`, Mục 6 chỉ mô tả **tỷ trọng định tính** ("trọng số cao cho TC/TL/NT/CA", "3 phần xấp xỉ đều"), không nêu số câu hay điểm tối đa cụ thể.

**Đã chọn tạm thời** (suy ra tỷ lệ theo thời lượng so với ARCH60, thận trọng hơn là nén chặt):
- `NTT45`: 30 câu, tự động tối đa 30đ, tự chấm tối đa 15đ
- `BALANCED`: 30 câu, tự động tối đa 30đ, tự chấm tối đa 15đ

**Cần xác nhận:** số câu và thang điểm chính xác cho hai cấu hình này, lý tưởng nhất là đối chiếu đề thi thật của Nguyễn Tất Thành và nhóm trường Cầu Giấy/Ams/Ngôi Sao/Marie Curie nếu có.
