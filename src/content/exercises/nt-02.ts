import type { Exercise } from "@/data-access/types";

// NT-02 — Từ trái nghĩa. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const NT02_EXERCISES: Exercise[] = [
  {
    id: "nt-02-mcq-1",
    topicIds: ["NT-02"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Từ nào trái nghĩa với từ "chăm chỉ"?',
    explanation: "\"Lười biếng\" đối lập hoàn toàn với \"chăm chỉ\" trên cùng tiêu chí thái độ làm việc.",
    mcq: {
      options: ["Siêng năng", "Cần cù", "Lười biếng", "Nhanh nhẹn"],
      answerIndex: 2,
      distractorNotes: [
        "\"Siêng năng\" đồng nghĩa với \"chăm chỉ\", không phải trái nghĩa.",
        "\"Cần cù\" đồng nghĩa với \"chăm chỉ\", không phải trái nghĩa.",
        "Đúng — \"lười biếng\" đối lập hoàn toàn với \"chăm chỉ\".",
        "\"Nhanh nhẹn\" không cùng tiêu chí với \"chăm chỉ\" (tiêu chí tốc độ, không phải thái độ làm việc).",
      ],
    },
  },
  {
    id: "nt-02-mcq-2",
    topicIds: ["NT-02"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Canh này nhạt quá, mẹ cho thêm chút muối nhé!", từ trái nghĩa với "nhạt" ở đây là từ nào?',
    explanation: "Ở đây \"nhạt\" đang nói về vị giác (thiếu muối) nên từ trái nghĩa phù hợp là \"mặn\", không phải \"đậm\" (dùng cho màu sắc).",
    mcq: {
      options: ["Đậm", "Mặn", "Nhiều", "Ngọt"],
      answerIndex: 1,
      distractorNotes: [
        "\"Đậm\" là từ trái nghĩa của \"nhạt\" khi nói về MÀU SẮC, không phù hợp trong câu nói về vị canh.",
        "Đúng — trong ngữ cảnh vị giác (canh thiếu muối), \"nhạt\" trái nghĩa với \"mặn\".",
        "\"Nhiều\" không phải từ trái nghĩa của \"nhạt\".",
        "\"Ngọt\" là một vị khác, không đối lập trực tiếp với \"nhạt\" trong câu này.",
      ],
    },
  },
  {
    id: "nt-02-fill-1",
    topicIds: ["NT-02"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ trái nghĩa: cao – ___",
    explanation: "\"Thấp\" trái nghĩa với \"cao\" trên tiêu chí chiều cao.",
    fill: { acceptedAnswers: ["thấp"], strictMode: false, isSet: false },
  },
  {
    id: "nt-02-mcq-3",
    topicIds: ["NT-02"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Cặp từ nào dưới đây KHÔNG phải là cặp từ trái nghĩa?',
    explanation: "\"Cao\" và \"xanh\" không cùng nói về một tiêu chí (chiều cao và màu sắc), nên không phải cặp trái nghĩa.",
    mcq: {
      options: ["To – nhỏ", "Vui – buồn", "Cao – xanh", "Nhanh – chậm"],
      answerIndex: 2,
      distractorNotes: [
        "\"To – nhỏ\" là cặp trái nghĩa đúng (cùng tiêu chí kích thước).",
        "\"Vui – buồn\" là cặp trái nghĩa đúng (cùng tiêu chí cảm xúc).",
        "Đúng — \"cao\" và \"xanh\" không cùng tiêu chí, không phải cặp trái nghĩa.",
        "\"Nhanh – chậm\" là cặp trái nghĩa đúng (cùng tiêu chí tốc độ).",
      ],
    },
  },
];
