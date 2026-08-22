import type { Exercise } from "@/data-access/types";

// TL-01 — Danh từ và các loại danh từ. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const TL01_EXERCISES: Exercise[] = [
  {
    id: "tl-01-mcq-1",
    topicIds: ["TL-01"],
    level: "M1",
    questionType: "mcq",
    prompt: "Danh từ là gì?",
    explanation: "Danh từ là từ chỉ người, sự vật, hiện tượng, khái niệm.",
    mcq: {
      options: [
        "Từ chỉ người, sự vật, hiện tượng, khái niệm",
        "Từ chỉ hoạt động, trạng thái",
        "Từ chỉ đặc điểm, tính chất",
        "Từ dùng để nối các vế câu",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là định nghĩa của danh từ.",
        "Đây là định nghĩa của động từ (TL-02).",
        "Đây là định nghĩa của tính từ (TL-03).",
        "Đây là định nghĩa của quan hệ từ (TL-05).",
      ],
    },
  },
  {
    id: "tl-01-mcq-2",
    topicIds: ["TL-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Hà Nội là thủ đô của Việt Nam.", từ nào là danh từ riêng?',
    explanation: "\"Hà Nội\" và \"Việt Nam\" là tên riêng của địa danh, phải viết hoa — là danh từ riêng.",
    mcq: {
      options: ["là", "thủ đô", "Hà Nội, Việt Nam", "của"],
      answerIndex: 2,
      distractorNotes: [
        "\"Là\" là động từ, không phải danh từ.",
        "\"Thủ đô\" là danh từ chung, chỉ loại sự vật nói chung, không phải tên riêng.",
        "Đúng — \"Hà Nội\", \"Việt Nam\" là tên riêng của địa danh, viết hoa, là danh từ riêng.",
        "\"Của\" là quan hệ từ, không phải danh từ.",
      ],
    },
  },
  {
    id: "tl-01-mcq-3",
    topicIds: ["TL-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ nào dưới đây là danh từ chỉ khái niệm (trừu tượng)?',
    explanation: "\"Niềm vui\" là danh từ chỉ khái niệm, không sờ thấy được nhưng vẫn là danh từ.",
    mcq: {
      options: ["Cái bàn", "Niềm vui", "Con mèo", "Quyển sách"],
      answerIndex: 1,
      distractorNotes: [
        "\"Cái bàn\" là danh từ chỉ sự vật cụ thể, sờ thấy được.",
        "Đúng — \"niềm vui\" là danh từ chỉ khái niệm, trừu tượng.",
        "\"Con mèo\" là danh từ chỉ sự vật cụ thể.",
        "\"Quyển sách\" là danh từ chỉ sự vật cụ thể.",
      ],
    },
  },
];
