import type { Exercise } from "@/data-access/types";

// NT-05 — Từ Hán Việt và mở rộng vốn từ theo chủ điểm. Ví dụ tự biên soạn
// (Mục 10.1 hướng B).
export const NT05_EXERCISES: Exercise[] = [
  {
    id: "nt-05-mcq-1",
    topicIds: ["NT-05"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Từ nào dưới đây là từ Hán Việt tương ứng với từ thuần Việt "cha mẹ"?',
    explanation: "\"Phụ mẫu\" là từ Hán Việt mang sắc thái trang trọng, cùng nghĩa với \"cha mẹ\".",
    mcq: {
      options: ["Phụ mẫu", "Ông bà", "Con cái", "Anh chị"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"phụ mẫu\" là từ Hán Việt trang trọng chỉ cha mẹ.",
        "\"Ông bà\" chỉ thế hệ trên cha mẹ, không cùng nghĩa.",
        "\"Con cái\" chỉ thế hệ con, không cùng nghĩa với \"cha mẹ\".",
        "\"Anh chị\" chỉ anh chị em, không cùng nghĩa với \"cha mẹ\".",
      ],
    },
  },
  {
    id: "nt-05-mcq-2",
    topicIds: ["NT-05"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ Hán Việt thường mang sắc thái như thế nào so với từ thuần Việt cùng nghĩa?",
    explanation: "Từ Hán Việt thường trang trọng, khái quát hơn — thường dùng trong văn viết, hoàn cảnh trang trọng.",
    mcq: {
      options: [
        "Trang trọng, khái quát hơn từ thuần Việt cùng nghĩa",
        "Thân mật, gần gũi hơn từ thuần Việt cùng nghĩa",
        "Luôn ngắn hơn từ thuần Việt cùng nghĩa",
        "Không có sự khác biệt nào so với từ thuần Việt",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là đặc điểm sắc thái nổi bật của từ Hán Việt.",
        "Đây là đặc điểm của từ thuần Việt so với từ Hán Việt, ngược lại với câu hỏi.",
        "Độ dài không phải là đặc điểm phân biệt sắc thái giữa hai loại từ.",
        "Từ Hán Việt và từ thuần Việt cùng nghĩa thường khác nhau về sắc thái sử dụng.",
      ],
    },
  },
  {
    id: "nt-05-mcq-3",
    topicIds: ["NT-05"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ nào dưới đây KHÔNG thuộc chủ điểm "Tổ quốc"?',
    explanation: "\"Bàn ghế\" là đồ vật trong nhà, không liên quan đến chủ điểm Tổ quốc, đất nước.",
    mcq: {
      options: ["Giang sơn", "Quốc gia", "Bàn ghế", "Đất nước"],
      answerIndex: 2,
      distractorNotes: [
        "\"Giang sơn\" là từ Hán Việt chỉ đất nước, thuộc chủ điểm Tổ quốc.",
        "\"Quốc gia\" thuộc chủ điểm Tổ quốc.",
        "Đúng — \"bàn ghế\" là đồ vật, không liên quan đến chủ điểm Tổ quốc.",
        "\"Đất nước\" thuộc chủ điểm Tổ quốc.",
      ],
    },
  },
];
