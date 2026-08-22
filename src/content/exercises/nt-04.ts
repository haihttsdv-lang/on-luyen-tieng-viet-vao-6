import type { Exercise } from "@/data-access/types";

// NT-04 — Từ nhiều nghĩa: nghĩa gốc và nghĩa chuyển. Ví dụ tự biên soạn
// (Mục 10.1 hướng B).
export const NT04_EXERCISES: Exercise[] = [
  {
    id: "nt-04-mcq-1",
    topicIds: ["NT-04"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Trong câu "Đôi mắt em to tròn.", từ "mắt" được dùng với nghĩa nào?',
    explanation: "\"Mắt\" chỉ bộ phận cơ thể dùng để nhìn — đây là nghĩa gốc của từ \"mắt\".",
    mcq: {
      options: ["Nghĩa gốc", "Nghĩa chuyển", "Nghĩa đồng âm", "Không có nghĩa"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là nghĩa cơ bản, quen thuộc nhất của từ \"mắt\", là nghĩa gốc.",
        "Nghĩa chuyển là nghĩa được suy ra từ nghĩa gốc (ví dụ \"mắt lưới\"), câu này dùng đúng nghĩa gốc.",
        "\"Mắt\" ở đây không phải hiện tượng đồng âm.",
        "Từ \"mắt\" trong câu này có nghĩa rõ ràng.",
      ],
    },
  },
  {
    id: "nt-04-mcq-2",
    topicIds: ["NT-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Chiếc bàn có bốn chân vững chãi.", từ "chân" được dùng với nghĩa nào?',
    explanation: "\"Chân bàn\" chỉ phần dưới cùng đỡ cái bàn, có liên hệ với nghĩa gốc \"chân người\" (bộ phận để đứng, đỡ cơ thể) — đây là nghĩa chuyển.",
    mcq: {
      options: ["Nghĩa gốc", "Nghĩa chuyển", "Nghĩa đồng âm", "Không có nghĩa"],
      answerIndex: 1,
      distractorNotes: [
        "Nghĩa gốc của \"chân\" là bộ phận cơ thể người/động vật dùng để đi, đứng.",
        "Đúng — \"chân bàn\" được suy ra từ nghĩa gốc, vẫn có liên hệ (phần đỡ ở dưới cùng).",
        "\"Chân\" ở đây có liên hệ với nghĩa gốc, không phải hiện tượng đồng âm.",
        "Từ \"chân\" trong câu này có nghĩa rõ ràng, là nghĩa chuyển.",
      ],
    },
  },
  {
    id: "nt-04-fill-1",
    topicIds: ["NT-04"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Khác với từ đồng âm, các nghĩa của từ nhiều nghĩa luôn có ___ với nhau.",
    explanation: "Nghĩa chuyển của từ nhiều nghĩa luôn có liên hệ với nghĩa gốc — đây là điểm khác biệt so với từ đồng âm.",
    fill: { acceptedAnswers: ["liên hệ"], strictMode: false, isSet: false },
  },
];
