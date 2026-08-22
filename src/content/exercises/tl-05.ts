import type { Exercise } from "@/data-access/types";

// TL-05 — Quan hệ từ và cặp quan hệ từ. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const TL05_EXERCISES: Exercise[] = [
  {
    id: "tl-05-mcq-1",
    topicIds: ["TL-05"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Cặp quan hệ từ "vì...nên" thể hiện quan hệ ý nghĩa gì?',
    explanation: "Cặp \"vì...nên\" thể hiện quan hệ nguyên nhân – kết quả.",
    mcq: {
      options: ["Nguyên nhân – kết quả", "Tương phản", "Điều kiện – kết quả", "Tăng tiến"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"vì...nên\" thể hiện quan hệ nguyên nhân – kết quả.",
        "Quan hệ tương phản thường dùng cặp \"tuy...nhưng\".",
        "Quan hệ điều kiện – kết quả thường dùng cặp \"nếu...thì\".",
        "Đây không phải quan hệ tăng tiến.",
      ],
    },
  },
  {
    id: "tl-05-mcq-2",
    topicIds: ["TL-05"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dùng ĐÚNG cặp quan hệ từ để thể hiện quan hệ tương phản?',
    explanation: "\"Tuy nhà nghèo nhưng bạn ấy học rất giỏi.\" dùng đúng cặp \"tuy...nhưng\" cho quan hệ tương phản.",
    mcq: {
      options: [
        "Vì nhà nghèo nên bạn ấy học rất giỏi.",
        "Tuy nhà nghèo nhưng bạn ấy học rất giỏi.",
        "Nếu nhà nghèo thì bạn ấy học rất giỏi.",
        "Nhà nghèo và bạn ấy học rất giỏi.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "\"Vì...nên\" thể hiện quan hệ nguyên nhân – kết quả, không phù hợp ý tương phản (nghèo nhưng vẫn giỏi).",
        "Đúng — \"tuy...nhưng\" phù hợp thể hiện quan hệ tương phản.",
        "\"Nếu...thì\" thể hiện quan hệ điều kiện – kết quả, không phù hợp ở đây.",
        "\"Và\" chỉ là quan hệ từ đơn, không thể hiện rõ quan hệ tương phản như một cặp quan hệ từ.",
      ],
    },
  },
  {
    id: "tl-05-fill-1",
    topicIds: ["TL-05"],
    level: "M2",
    questionType: "fill",
    prompt: 'Điền quan hệ từ còn thiếu: "___ trời mưa to, em vẫn đến trường đúng giờ." (quan hệ tương phản, chỉ điền vế đầu)',
    explanation: "\"Tuy\" mở đầu cho vế tương phản, kết hợp với \"vẫn\" ở vế sau.",
    fill: { acceptedAnswers: ["Tuy", "tuy"], strictMode: false, isSet: false },
  },
];
