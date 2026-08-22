import type { Exercise } from "@/data-access/types";

// CD-02 — Chính tả: thanh hỏi và thanh ngã. FR-M05: mọi câu fill trong
// nhóm CD dùng strictMode. Câu tự biên soạn (Mục 10.1).
export const CD02_EXERCISES: Exercise[] = [
  {
    id: "cd-02-fill-1",
    topicIds: ["CD-02"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt hỏi/ngã): \"Sau giờ học, em ___ ngơi một lúc rồi mới làm bài tập.\"",
    explanation: "Viết đúng là \"nghỉ\" (thanh hỏi, nghĩa là dừng làm việc để thư giãn), không viết \"nghĩ\" (thanh ngã, nghĩa là suy nghĩ).",
    fill: { acceptedAnswers: ["nghỉ"], strictMode: true, isSet: false },
  },
  {
    id: "cd-02-fill-2",
    topicIds: ["CD-02"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt hỏi/ngã): \"Bạn Nam đang ___ về bài toán khó.\"",
    explanation: "Viết đúng là \"suy nghĩ\" (thanh ngã, nghĩa là dùng trí óc để hiểu, đánh giá).",
    fill: { acceptedAnswers: ["suy nghĩ"], strictMode: true, isSet: false },
  },
  {
    id: "cd-02-mcq-1",
    topicIds: ["CD-02"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ nào dưới đây viết ĐÚNG chính tả?",
    explanation: "\"Sẵn sàng\" viết đúng: \"sẵn\" mang thanh ngã, \"sàng\" mang thanh huyền.",
    mcq: {
      options: ["Sẳn sàng", "Sẵn sàng", "Sẵn sàn", "Sẩn sàng"],
      answerIndex: 1,
      distractorNotes: [
        "Sai dấu ở tiếng \"sẳn\" (phải là \"sẵn\" — thanh ngã).",
        "Đúng — \"sẵn sàng\" viết đúng chính tả.",
        "Thiếu dấu ở tiếng \"sàn\" (phải là \"sàng\").",
        "Sai dấu ở tiếng \"sẩn\" (phải là \"sẵn\" — thanh ngã, không phải thanh hỏi).",
      ],
    },
  },
  {
    id: "cd-02-mcq-2",
    topicIds: ["CD-02"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây dùng ĐÚNG từ "nghỉ"/"nghĩ"?',
    explanation: "\"Nghỉ hè\" dùng thanh hỏi vì nghĩa là dừng học để thư giãn — dùng đúng chính tả.",
    mcq: {
      options: [
        "Em đang nghĩ hè ở quê ngoại.",
        "Em đang nghỉ hè ở quê ngoại.",
        "Bạn Lan hay nghỉ trước khi trả lời câu hỏi khó.",
        "Cả hai câu đều sai chính tả.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Sai — phải dùng \"nghỉ\" (thanh hỏi) vì đang nói về việc nghỉ ngơi, không phải suy nghĩ.",
        "Đúng — \"nghỉ hè\" dùng đúng thanh hỏi.",
        "Câu này nên dùng \"nghĩ\" (thanh ngã, suy nghĩ) vì đang nói về việc suy nghĩ trước khi trả lời.",
        "Câu thứ hai (\"Em đang nghỉ hè...\") viết đúng chính tả.",
      ],
    },
  },
];
