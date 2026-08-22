import type { Exercise } from "@/data-access/types";

// DH-04 — Ý chính, chủ đề, thông điệp của tác phẩm. Đoạn văn ngắn tự biên
// soạn (Mục 10.1 hướng B).
export const DH04_EXERCISES: Exercise[] = [
  {
    id: "dh-04-mcq-1",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Suốt cả mùa hè, đàn kiến nhỏ chăm chỉ tha từng hạt thóc về tổ. Trong khi đó, chú ve sầu chỉ mải mê ca hát. Đến mùa đông, đàn kiến có đủ thức ăn dự trữ, còn chú ve sầu phải chịu đói rét."\nThông điệp chính của đoạn văn trên là gì?',
    explanation: "Câu chuyện cho thấy sự chăm chỉ, biết chuẩn bị trước sẽ giúp vượt qua khó khăn, trong khi lười biếng sẽ phải chịu hậu quả.",
    mcq: {
      options: [
        "Cần chăm chỉ, biết lo xa, chuẩn bị cho tương lai",
        "Mùa đông rất lạnh",
        "Kiến là loài vật nhỏ bé",
        "Ve sầu hát rất hay",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là bài học/thông điệp chính rút ra từ toàn bộ câu chuyện.",
        "Đây chỉ là một chi tiết nhỏ, không phải thông điệp chính.",
        "Đây không phải nội dung chính mà đoạn văn muốn truyền tải.",
        "Đây chỉ là một chi tiết phụ, không phải bài học của câu chuyện.",
      ],
    },
  },
  {
    id: "dh-04-mcq-2",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    prompt: "Chủ đề của một văn bản khác với ý chính của một đoạn văn ở điểm nào?",
    explanation: "Chủ đề bao trùm toàn bộ văn bản, còn ý chính chỉ là nội dung quan trọng nhất của một đoạn cụ thể.",
    mcq: {
      options: [
        "Chủ đề chỉ áp dụng cho một câu, ý chính áp dụng cho cả bài",
        "Chủ đề bao trùm toàn bộ văn bản, ý chính chỉ thuộc về một đoạn văn cụ thể",
        "Chủ đề và ý chính hoàn toàn giống nhau, có thể dùng thay thế cho nhau",
        "Chủ đề chỉ có ở thơ, ý chính chỉ có ở văn xuôi",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Ngược lại — chủ đề mới là khái niệm bao trùm cả bài, không phải chỉ một câu.",
        "Đúng — đây là điểm khác biệt cơ bản giữa hai khái niệm.",
        "Hai khái niệm có phạm vi khác nhau rõ rệt, không thể dùng thay thế cho nhau.",
        "Cả hai khái niệm đều áp dụng được cho mọi loại văn bản.",
      ],
    },
  },
];
