import type { Exercise } from "@/data-access/types";

// NT-01 — Từ đồng nghĩa. Câu ví dụ do tự biên soạn (Mục 10.1 hướng B),
// không trích từ tác phẩm nào.
export const NT01_EXERCISES: Exercise[] = [
  {
    id: "nt-01-mcq-1",
    topicIds: ["NT-01"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ nào dưới đây đồng nghĩa với từ \"chăm chỉ\"?",
    explanation:
      "\"Siêng năng\" cùng chỉ đức tính chịu khó làm việc, học tập như \"chăm chỉ\". Ba từ còn lại chỉ những tính cách khác hẳn.",
    mcq: {
      options: ["siêng năng", "lười biếng", "nhút nhát", "vui vẻ"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — cùng nghĩa với \"chăm chỉ\".",
        "\"Lười biếng\" trái nghĩa với \"chăm chỉ\", không phải đồng nghĩa.",
        "\"Nhút nhát\" chỉ sự rụt rè, không liên quan đến chăm chỉ.",
        "\"Vui vẻ\" chỉ cảm xúc, không liên quan đến chăm chỉ.",
      ],
    },
  },
  {
    id: "nt-01-mcq-2",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ nào KHÔNG đồng nghĩa với từ \"vui vẻ\"?",
    explanation:
      "\"Buồn bã\" trái nghĩa với \"vui vẻ\". \"Vui tươi\", \"hớn hở\", \"phấn khởi\" đều là các từ đồng nghĩa với \"vui vẻ\".",
    mcq: {
      options: ["vui tươi", "hớn hở", "buồn bã", "phấn khởi"],
      answerIndex: 2,
      distractorNotes: [
        "\"Vui tươi\" đồng nghĩa với \"vui vẻ\" — không phải đáp án đúng cho câu hỏi này.",
        "\"Hớn hở\" đồng nghĩa với \"vui vẻ\" — không phải đáp án đúng cho câu hỏi này.",
        "Đúng — \"buồn bã\" trái nghĩa, không đồng nghĩa với \"vui vẻ\".",
        "\"Phấn khởi\" đồng nghĩa với \"vui vẻ\" — không phải đáp án đúng cho câu hỏi này.",
      ],
    },
  },
  {
    id: "nt-01-match-1",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "match",
    prompt: "Nối mỗi từ ở cột trái với từ đồng nghĩa của nó ở cột phải.",
    explanation:
      "chăm chỉ–siêng năng, xinh đẹp–xinh xắn, dũng cảm–gan dạ, vui vẻ–vui tươi là các cặp từ đồng nghĩa thường gặp.",
    match: {
      leftItems: [
        { id: "l1", label: "chăm chỉ" },
        { id: "l2", label: "xinh đẹp" },
        { id: "l3", label: "dũng cảm" },
        { id: "l4", label: "vui vẻ" },
      ],
      rightItems: [
        { id: "r1", label: "siêng năng" },
        { id: "r2", label: "xinh xắn" },
        { id: "r3", label: "gan dạ" },
        { id: "r4", label: "vui tươi" },
      ],
      correctPairs: [
        { leftId: "l1", rightId: "r1" },
        { leftId: "l2", rightId: "r2" },
        { leftId: "l3", rightId: "r3" },
        { leftId: "l4", rightId: "r4" },
      ],
    },
  },
  {
    id: "nt-01-fill-1",
    topicIds: ["NT-01"],
    level: "M3",
    questionType: "fill",
    prompt:
      "Tìm một từ đồng nghĩa với \"to lớn\" để điền vào chỗ trống cho phù hợp: \"Con voi có thân hình rất ___.\"",
    explanation:
      "\"To lớn\", \"khổng lồ\", \"đồ sộ\" đều mô tả kích thước rất lớn, phù hợp với ngữ cảnh miêu tả con voi.",
    fill: {
      acceptedAnswers: ["to lớn", "khổng lồ", "đồ sộ", "to"],
      strictMode: false,
      isSet: false,
    },
  },
];
