import type { Exercise } from "@/data-access/types";

// TL-06 — Xác định từ loại trong ngữ cảnh; hiện tượng chuyển loại của từ.
// `[BỔ SUNG]`. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const TL06_EXERCISES: Exercise[] = [
  {
    id: "tl-06-mcq-1",
    topicIds: ["TL-06"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Cuộc thi rất hấp dẫn.", từ "thi" thuộc từ loại nào?',
    explanation: "Ở đây \"thi\" đứng sau \"cuộc\" (danh từ chỉ đơn vị), tạo thành cụm danh từ \"cuộc thi\" — \"thi\" đóng vai trò danh từ.",
    mcq: {
      options: ["Danh từ", "Động từ", "Tính từ", "Đại từ"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — trong cụm \"cuộc thi\", \"thi\" đóng vai trò danh từ (sự kiện thi đấu).",
        "\"Thi\" chỉ là động từ khi đứng độc lập chỉ hành động (VD \"em thi đỗ\"), ở đây nó nằm trong cụm danh từ.",
        "\"Thi\" ở đây không chỉ đặc điểm, tính chất.",
        "\"Thi\" ở đây không dùng để xưng hô hay thay thế.",
      ],
    },
  },
  {
    id: "tl-06-mcq-2",
    topicIds: ["TL-06"],
    level: "M3",
    questionType: "mcq",
    prompt: 'So sánh từ "cuốc" trong hai câu: (1) "Cái cuốc này rất sắc." và (2) "Bác nông dân đang cuốc đất." Nhận xét nào ĐÚNG?',
    explanation: "Ở câu (1), \"cuốc\" là danh từ (chỉ dụng cụ). Ở câu (2), \"cuốc\" là động từ (chỉ hành động dùng cuốc). Đây là hiện tượng chuyển loại của từ.",
    mcq: {
      options: [
        "Cả hai câu \"cuốc\" đều là danh từ",
        "Cả hai câu \"cuốc\" đều là động từ",
        "Câu (1) \"cuốc\" là danh từ, câu (2) \"cuốc\" là động từ — đây là hiện tượng chuyển loại",
        "\"Cuốc\" trong hai câu không liên quan gì đến nhau",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Câu (2) \"cuốc\" chỉ hành động, là động từ, không phải danh từ.",
        "Câu (1) \"cuốc\" chỉ sự vật (dụng cụ), là danh từ, không phải động từ.",
        "Đúng — cùng một từ nhưng khác từ loại tuỳ ngữ cảnh, đây chính là hiện tượng chuyển loại của từ.",
        "Hai từ này có liên quan (dụng cụ cuốc và hành động dùng cuốc để làm việc).",
      ],
    },
  },
  {
    id: "tl-06-fill-1",
    topicIds: ["TL-06"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Để xác định từ loại của một từ có nhiều cách dùng, cần dựa vào ___ cụ thể của câu, không dựa vào từ đó một cách cô lập.",
    explanation: "Cần dựa vào ngữ cảnh cụ thể của câu để xác định từ loại chính xác.",
    fill: { acceptedAnswers: ["ngữ cảnh"], strictMode: false, isSet: false },
  },
];
