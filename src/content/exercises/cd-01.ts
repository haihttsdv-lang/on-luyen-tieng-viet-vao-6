import type { Exercise } from "@/data-access/types";

// CD-01 — Chính tả: phụ âm đầu dễ lẫn. FR-M05: every fill exercise in the
// CD group uses strictMode — exact spelling is the entire point, so no tone
// -style or case normalization here. Sentences self-authored (Mục 10.1).
export const CD01_EXERCISES: Exercise[] = [
  {
    id: "cd-01-fill-1",
    topicIds: ["CD-01"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt l/n): \"Những giọt sương ___ trên lá cỏ như hạt ngọc.\"",
    explanation: "Viết đúng là \"long lanh\" (âm đầu l), không viết \"nong nanh\".",
    fill: { acceptedAnswers: ["long lanh"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-fill-2",
    topicIds: ["CD-01"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt ch/tr): \"Em bé đang tập ___ cây trong vườn.\"",
    explanation:
      "Viết đúng là \"trèo\" (âm đầu tr, nghĩa là leo lên). \"Chèo\" nghĩa khác (chèo thuyền, hát chèo), không phù hợp câu này.",
    fill: { acceptedAnswers: ["trèo"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-fill-3",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt s/x): \"Bạn Lan luôn giữ quần áo ___.\"",
    explanation: "Viết đúng là \"sạch sẽ\" (âm đầu s).",
    fill: { acceptedAnswers: ["sạch sẽ"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-fill-4",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt r/d/gi): \"Buổi sáng, ông mặt trời ___ chiếu những tia nắng đầu tiên.\"",
    explanation: "Viết đúng là \"rực rỡ\" (âm đầu r).",
    fill: { acceptedAnswers: ["rực rỡ"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-mcq-1",
    topicIds: ["CD-01"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ nào dưới đây viết ĐÚNG chính tả?",
    explanation:
      "\"Nong lanh\" đổi cả hai âm đầu là sai; \"Long nanh\" và \"Nong nanh\" đều sai. \"Long lanh\" viết đúng.",
    mcq: {
      options: ["Nong lanh", "Long lanh", "Long nanh", "Nong nanh"],
      answerIndex: 1,
      distractorNotes: [
        "Sai âm đầu của cả hai tiếng.",
        "Đúng — \"long lanh\" viết đúng chính tả.",
        "Sai âm đầu tiếng thứ hai (phải là \"lanh\", không phải \"nanh\").",
        "Sai âm đầu cả hai tiếng.",
      ],
    },
  },
];
