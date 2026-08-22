import type { Exercise } from "@/data-access/types";

// CD-03 — Chính tả: âm cuối và vần dễ lẫn. FR-M05: mọi câu fill dùng
// strictMode. Câu tự biên soạn (Mục 10.1).
export const CD03_EXERCISES: Exercise[] = [
  {
    id: "cd-03-fill-1",
    topicIds: ["CD-03"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt n/ng): \"Trong vườn có một cây ___ toả bóng mát.\" (loài cây gắn với hình ảnh sân trường)",
    explanation: "Viết đúng là \"bàng\" (âm cuối ng, chỉ cây bàng) — không viết \"bàn\" (âm cuối n, chỉ đồ vật).",
    fill: { acceptedAnswers: ["bàng"], strictMode: true, isSet: false },
  },
  {
    id: "cd-03-fill-2",
    topicIds: ["CD-03"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt vần iu/ưu): \"Đàn chim hót ___ lo trên cành cây.\"",
    explanation: "Viết đúng là \"líu\" (vần iu) — không viết \"lưu\" (vần ưu, nghĩa khác hẳn).",
    fill: { acceptedAnswers: ["líu"], strictMode: true, isSet: false },
  },
  {
    id: "cd-03-mcq-1",
    topicIds: ["CD-03"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ nào dưới đây viết ĐÚNG chính tả?",
    explanation: "\"Con hươu\" viết đúng với vần \"ươu\".",
    mcq: {
      options: ["Con hiêu", "Con hươu", "Con hiu", "Con hiểu"],
      answerIndex: 1,
      distractorNotes: [
        "Sai vần — không có từ \"hiêu\" mang nghĩa con vật này.",
        "Đúng — \"con hươu\" viết đúng chính tả.",
        "Sai vần — \"hiu\" không đúng.",
        "\"Hiểu\" là một từ khác hoàn toàn về nghĩa (biết, hiểu rõ), không liên quan đến con vật.",
      ],
    },
  },
  {
    id: "cd-03-mcq-2",
    topicIds: ["CD-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây dùng ĐÚNG chính tả (phân biệt âm cuối n/ng)?',
    explanation: "\"Bàn học\" đúng chính tả với âm cuối n, vì đang nói đến đồ vật, không phải cây bàng.",
    mcq: {
      options: [
        "Em ngồi vào bàng học để làm bài tập.",
        "Em ngồi vào bàn học để làm bài tập.",
        "Sân trường có một cây bàn rất to.",
        "Cả hai câu đều viết đúng.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Sai — phải viết \"bàn học\" (âm cuối n) vì đây là đồ vật, không phải cây bàng.",
        "Đúng — \"bàn học\" viết đúng chính tả.",
        "Sai — phải viết \"cây bàng\" (âm cuối ng) vì đây là loài cây.",
        "Chỉ có câu thứ hai (\"bàn học\") viết đúng chính tả.",
      ],
    },
  },
];
