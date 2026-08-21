import type { Topic } from "@/data-access/types";

// GĐ2 sample content — 3 chuyên đề, chosen to exercise both the ordinary
// comparison path and the FR-M05 strict (chính tả) path.
export const TOPICS: Topic[] = [
  {
    id: "KN-01",
    group: "KN",
    title: "Kỹ năng làm bài trắc nghiệm: phương pháp loại trừ, nhận diện bẫy thường gặp",
    // GĐ4 — nhóm KN ưu tiên xây trước (Mục 5.11): ít tài liệu sẵn có nhất,
    // giá trị cao nhất. FR-L03: trình bày dạng quy trình từng bước.
    lesson: {
      concept:
        "Làm bài trắc nghiệm hiệu quả không chỉ là biết kiến thức, mà còn là kỹ năng đọc đề và loại trừ đáp án sai một cách có hệ thống.",
      steps: [
        "Đọc kỹ toàn bộ câu hỏi trước khi nhìn vào các đáp án — tránh bị đáp án A hoặc B \"quen mắt\" chi phối.",
        "Gạch chân từ khoá quan trọng trong đề bài (đặc biệt các từ phủ định như \"không\", \"KHÔNG đúng\").",
        "Đọc lần lượt cả 4 đáp án, không dừng lại ngay khi thấy một đáp án \"có vẻ đúng\".",
        "Loại trừ đáp án sai rõ ràng trước — đáp án dùng từ tuyệt đối (\"luôn luôn\", \"tất cả\", \"không bao giờ\") thường là bẫy.",
        "Trong các đáp án còn lại, chọn đáp án đúng và đầy đủ nhất — đáp án đúng một phần nhưng thiếu ý vẫn là đáp án sai.",
        "Nếu còn phân vân giữa 2 đáp án, đọc lại câu hỏi một lần nữa để chắc chắn không bỏ sót yêu cầu của đề.",
      ],
      signals: [
        "Đáp án dùng từ tuyệt đối hoá (\"luôn luôn\", \"tất cả\", \"không bao giờ\") — thường là bẫy",
        "Hai đáp án gần giống nhau, chỉ khác một từ — cần đọc kỹ từng chữ",
        "Đề bài có từ phủ định (\"KHÔNG đúng\", \"KHÔNG phải\") dễ bị đọc sót",
      ],
      examples: [
        "Câu hỏi: \"Từ nào KHÔNG đồng nghĩa với 'chăm chỉ'?\" — nếu đọc sót chữ KHÔNG, học sinh sẽ tìm từ đồng nghĩa thay vì từ không đồng nghĩa, chọn sai dù hiểu đúng nghĩa các từ.",
        "Câu hỏi có đáp án \"Từ này luôn luôn được viết hoa\" — trong tiếng Việt hầu như không có quy tắc nào là tuyệt đối 100%, nên đáp án này thường là bẫy cần loại trừ trước.",
      ],
      commonMistakes: [
        "Đọc lướt đề, bỏ sót từ phủ định (\"không\", \"KHÔNG phải\")",
        "Chọn đáp án đầu tiên có vẻ đúng mà không đọc hết các lựa chọn còn lại",
        "Không phân biệt được đáp án \"đúng một phần\" với đáp án \"đúng và đầy đủ\"",
      ],
    },
  },
  {
    id: "NT-01",
    group: "NT",
    title: "Từ đồng nghĩa",
    lesson: {
      concept:
        "Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau, có thể thay thế cho nhau trong một số ngữ cảnh, nhưng thường có sắc thái biểu cảm hoặc phạm vi sử dụng khác nhau.",
      signals: [
        "Hai từ có thể thay thế cho nhau trong câu mà nghĩa cơ bản của câu không đổi",
        "Thường xuất hiện cùng nhóm chủ điểm (tính cách, cảm xúc, hình dáng...)",
      ],
      examples: [
        "\"Chăm chỉ\" và \"siêng năng\" đều chỉ đức tính chịu khó làm việc, học tập — có thể thay thế cho nhau: \"Bạn ấy rất chăm chỉ/siêng năng học bài.\"",
        "\"Xinh đẹp\" và \"xinh xắn\" đều chỉ vẻ ngoài ưa nhìn, nhưng \"xinh xắn\" thường dùng cho những gì nhỏ nhắn, đáng yêu hơn.",
        "\"To lớn\", \"khổng lồ\", \"đồ sộ\" đều chỉ kích thước lớn, nhưng \"khổng lồ\" nhấn mạnh mức độ lớn hơn hẳn bình thường.",
      ],
      commonMistakes: [
        "Nhầm từ đồng nghĩa hoàn toàn với từ đồng nghĩa không hoàn toàn (khác sắc thái, không phải lúc nào cũng thay thế được)",
        "Nhầm từ đồng nghĩa với từ cùng chủ điểm nhưng khác nghĩa (ví dụ \"vui vẻ\" và \"hạnh phúc\" không hoàn toàn đồng nghĩa)",
      ],
    },
  },
  {
    id: "CA-03",
    group: "CA",
    title: "Các kiểu câu kể: Ai làm gì? / Ai thế nào? / Ai là gì?",
    lesson: {
      concept:
        "Câu kể (câu trần thuật) dùng để kể, tả, giới thiệu sự vật, sự việc. Có 3 kiểu câu kể chính, phân biệt theo nội dung của vị ngữ.",
      signals: [
        "\"Ai làm gì?\": vị ngữ nêu hoạt động (động từ + các thành phần đi kèm)",
        "\"Ai thế nào?\": vị ngữ nêu đặc điểm, tính chất, trạng thái (thường có tính từ)",
        "\"Ai là gì?\": vị ngữ có từ \"là\", dùng để giới thiệu, nhận định, đánh giá",
      ],
      examples: [
        "\"Bạn Lan đang quét sân.\" — vị ngữ \"đang quét sân\" nêu hoạt động → kiểu Ai làm gì?",
        "\"Bầu trời hôm nay trong xanh.\" — vị ngữ \"trong xanh\" nêu đặc điểm → kiểu Ai thế nào?",
        "\"Bạn Nam là học sinh giỏi.\" — vị ngữ có từ \"là\", giới thiệu về Bạn Nam → kiểu Ai là gì?",
      ],
      commonMistakes: [
        "Nhầm câu có động từ \"là\" đi kèm mô tả trạng thái với kiểu Ai là gì? (ví dụ \"Em bé là rất đáng yêu\" là câu sai ngữ pháp, không phải ví dụ chuẩn của kiểu này)",
        "Nhầm câu kể \"Ai thế nào?\" với câu kể \"Ai làm gì?\" khi vị ngữ có cả động từ lẫn tính từ",
      ],
    },
  },
  { id: "CD-01", group: "CD", title: "Chính tả: phụ âm đầu dễ lẫn (l/n, ch/tr, s/x, r/d/gi)" },
  { id: "CT-07", group: "CT", title: "Viết đoạn văn cảm thụ theo cấu trúc chuẩn (mở – thân – kết)" },
  { id: "VA-03", group: "VA", title: "Văn tả cây cối" },
];
