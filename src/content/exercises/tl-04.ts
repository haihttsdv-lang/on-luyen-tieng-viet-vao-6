import type { Exercise } from "@/data-access/types";

// TL-04 — Đại từ (nhân xưng, đại từ thay thế). Ví dụ tự biên soạn (Mục
// 10.1 hướng B).
export const TL04_EXERCISES: Exercise[] = [
  {
    id: "tl-04-mcq-1",
    topicIds: ["TL-04"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Trong câu "Tôi và bạn cùng đi học.", từ nào là đại từ nhân xưng?',
    explanation: "\"Tôi\" và \"bạn\" dùng để xưng hô giữa người nói và người nghe — là đại từ nhân xưng.",
    mcq: {
      options: ["đi, học", "Tôi, bạn", "và", "cùng"],
      answerIndex: 1,
      distractorNotes: [
        "\"Đi\", \"học\" là động từ, không phải đại từ.",
        "Đúng — \"tôi\", \"bạn\" là đại từ nhân xưng, dùng để xưng hô.",
        "\"Và\" là quan hệ từ, không phải đại từ.",
        "\"Cùng\" là từ chỉ mức độ/cách thức, không phải đại từ.",
      ],
    },
  },
  {
    id: "tl-04-mcq-2",
    topicIds: ["TL-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Lan rất chăm học. Điều đó khiến cô giáo rất vui.", từ "đó" thay thế cho điều gì?',
    explanation: "\"Đó\" là đại từ thay thế, thay cho ý \"Lan rất chăm học\" đã nói ở câu trước, tránh lặp lại cả câu.",
    mcq: {
      options: ["Thay cho \"cô giáo\"", "Thay cho ý \"Lan rất chăm học\"", "Thay cho \"Lan\"", "Không thay thế cho gì cả"],
      answerIndex: 1,
      distractorNotes: [
        "\"Cô giáo\" xuất hiện sau từ \"đó\", không phải điều \"đó\" thay thế.",
        "Đúng — \"đó\" thay thế cho cả ý \"Lan rất chăm học\" ở câu trước, tránh lặp lại.",
        "\"Đó\" thay thế cho cả một ý, không chỉ riêng tên \"Lan\".",
        "\"Đó\" là đại từ thay thế, có chức năng thay thế rõ ràng trong câu này.",
      ],
    },
  },
];
