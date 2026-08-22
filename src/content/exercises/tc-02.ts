import type { Exercise } from "@/data-access/types";

// TC-02 — Từ, từ đơn và từ phức. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const TC02_EXERCISES: Exercise[] = [
  {
    id: "tc-02-mcq-1",
    topicIds: ["TC-02"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ đơn là gì?",
    explanation: "Từ đơn là từ chỉ gồm 1 tiếng.",
    mcq: {
      options: ["Từ gồm 1 tiếng", "Từ gồm 2 tiếng trở lên", "Từ có nghĩa mơ hồ", "Từ chỉ dùng trong văn nói"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — từ đơn chỉ có 1 tiếng.",
        "Đây là định nghĩa của từ phức, không phải từ đơn.",
        "Từ đơn vẫn có nghĩa rõ ràng, không mơ hồ.",
        "Từ đơn được dùng cả trong văn nói lẫn văn viết.",
      ],
    },
  },
  {
    id: "tc-02-mcq-2",
    topicIds: ["TC-02"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Bạn Lan có mái tóc dài và đôi mắt sáng.", từ nào dưới đây là từ phức?',
    explanation: "\"Mái tóc\" gồm 2 tiếng ghép lại mang một nghĩa — đây là từ phức. \"Có\", \"và\" là từ đơn.",
    mcq: {
      options: ["có", "và", "mái tóc", "Lan"],
      answerIndex: 2,
      distractorNotes: [
        "\"Có\" chỉ gồm 1 tiếng, là từ đơn.",
        "\"Và\" chỉ gồm 1 tiếng, là từ đơn.",
        "Đúng — \"mái tóc\" gồm 2 tiếng ghép lại, là từ phức.",
        "\"Lan\" là tên riêng, 1 tiếng, là từ đơn.",
      ],
    },
  },
  {
    id: "tc-02-fill-1",
    topicIds: ["TC-02"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Từ phức được tạo thành từ ___ tiếng trở lên.",
    explanation: "Từ phức gồm 2 tiếng trở lên, khác với từ đơn chỉ có 1 tiếng.",
    fill: { acceptedAnswers: ["2", "hai"], strictMode: false, isSet: false },
  },
  {
    id: "tc-02-mcq-3",
    topicIds: ["TC-02"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Trong nhóm từ: "nhà, sách vở, đi, xinh đẹp, mưa" có bao nhiêu từ phức?',
    explanation: "\"Sách vở\" và \"xinh đẹp\" đều gồm 2 tiếng — là từ phức. \"Nhà\", \"đi\", \"mưa\" mỗi từ chỉ có 1 tiếng — là từ đơn.",
    mcq: {
      options: ["1", "2", "3", "4"],
      answerIndex: 1,
      distractorNotes: [
        "Có 2 từ phức trong nhóm này, không phải 1.",
        "Đúng — \"sách vở\" và \"xinh đẹp\" là 2 từ phức.",
        "\"Nhà\", \"đi\", \"mưa\" đều là từ đơn (1 tiếng), không tính vào từ phức.",
        "Cả nhóm chỉ có 5 từ, trong đó chỉ 2 từ là từ phức.",
      ],
    },
  },
];
