import type { Exercise } from "@/data-access/types";

// TC-04 — Từ láy: láy âm, láy vần, láy toàn bộ. Ví dụ tự biên soạn (Mục
// 10.1 hướng B), cố ý tránh mọi từ trong DISPUTED_WORDS (FR-D03/D04).
export const TC04_EXERCISES: Exercise[] = [
  {
    id: "tc-04-mcq-1",
    topicIds: ["TC-04"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Từ "long lanh" thuộc kiểu từ láy nào?',
    explanation: "Phụ âm đầu \"l\" lặp lại ở cả hai tiếng, phần vần khác nhau — đây là láy âm.",
    mcq: {
      options: ["Láy âm", "Láy vần", "Láy toàn bộ", "Không phải từ láy"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — phụ âm đầu \"l\" của hai tiếng giống nhau.",
        "Láy vần cần phần vần giống nhau, ở đây phần vần \"ong\" và \"anh\" khác nhau.",
        "Láy toàn bộ cần lặp lại gần như nguyên vẹn cả tiếng, ở đây hai tiếng khác nhau khá nhiều.",
        "\"Long lanh\" có phụ âm đầu lặp lại, là một từ láy.",
      ],
    },
  },
  {
    id: "tc-04-mcq-2",
    topicIds: ["TC-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ "lác đác" thuộc kiểu từ láy nào?',
    explanation: "Phần vần \"ac\" lặp lại ở cả hai tiếng, phụ âm đầu khác nhau — đây là láy vần.",
    mcq: {
      options: ["Láy âm", "Láy vần", "Láy toàn bộ", "Không phải từ láy"],
      answerIndex: 1,
      distractorNotes: [
        "Láy âm cần phụ âm đầu giống nhau, ở đây \"l\" và \"đ\" khác nhau.",
        "Đúng — phần vần \"ac\" của hai tiếng giống nhau.",
        "Láy toàn bộ cần lặp lại gần như nguyên vẹn cả tiếng, ở đây hai tiếng khác nhau khá nhiều.",
        "\"Lác đác\" có phần vần lặp lại, là một từ láy.",
      ],
    },
  },
  {
    id: "tc-04-fill-1",
    topicIds: ["TC-04"],
    level: "M1",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Từ láy có quan hệ với nhau về ___ giữa các tiếng, khác với từ ghép có quan hệ về nghĩa.",
    explanation: "Từ láy có quan hệ về âm (âm thanh lặp lại một phần hoặc toàn bộ) giữa các tiếng.",
    fill: { acceptedAnswers: ["âm", "âm thanh"], strictMode: false, isSet: false },
  },
  {
    id: "tc-04-mcq-3",
    topicIds: ["TC-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ "xanh xanh" thuộc kiểu từ láy nào?',
    explanation: "Tiếng \"xanh\" được lặp lại gần như nguyên vẹn — đây là láy toàn bộ.",
    mcq: {
      options: ["Láy âm", "Láy vần", "Láy toàn bộ", "Từ ghép"],
      answerIndex: 2,
      distractorNotes: [
        "Láy âm chỉ lặp phụ âm đầu, ở đây lặp lại cả tiếng.",
        "Láy vần chỉ lặp phần vần, ở đây lặp lại cả tiếng.",
        "Đúng — tiếng \"xanh\" được lặp lại nguyên vẹn, đây là láy toàn bộ.",
        "Đây là từ láy vì có quan hệ về âm, không phải từ ghép.",
      ],
    },
  },
];
