import type { Exercise } from "@/data-access/types";

// CD-05 — Dấu câu. Câu tự biên soạn (Mục 10.1).
export const CD05_EXERCISES: Exercise[] = [
  {
    id: "cd-05-mcq-1",
    topicIds: ["CD-05"],
    level: "M1",
    questionType: "mcq",
    prompt: "Dấu câu nào dùng để kết thúc một câu hỏi?",
    explanation: "Dấu chấm hỏi (?) dùng để kết thúc câu hỏi.",
    mcq: {
      options: ["Dấu chấm (.)", "Dấu phẩy (,)", "Dấu chấm hỏi (?)", "Dấu hai chấm (:)"],
      answerIndex: 2,
      distractorNotes: [
        "Dấu chấm dùng để kết thúc câu kể.",
        "Dấu phẩy dùng để ngăn cách các bộ phận trong câu, không kết thúc câu.",
        "Đúng — dấu chấm hỏi kết thúc câu hỏi.",
        "Dấu hai chấm dùng để báo hiệu lời dẫn hoặc phần liệt kê, không kết thúc câu.",
      ],
    },
  },
  {
    id: "cd-05-mcq-2",
    topicIds: ["CD-05"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Mẹ hỏi: \'Con đã làm bài tập chưa?\'", dấu hai chấm có tác dụng gì?',
    explanation: "Dấu hai chấm ở đây báo hiệu phần lời dẫn trực tiếp (lời mẹ hỏi) sắp xuất hiện.",
    mcq: {
      options: [
        "Báo hiệu phần lời dẫn trực tiếp sắp xuất hiện",
        "Kết thúc câu",
        "Ngăn cách hai vế câu ghép",
        "Thể hiện ý còn tiếp tục",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — dấu hai chấm báo hiệu lời dẫn trực tiếp phía sau.",
        "Dấu hai chấm không dùng để kết thúc câu.",
        "Đây không phải chức năng chính của dấu hai chấm trong câu này.",
        "Đây là chức năng của dấu chấm lửng, không phải dấu hai chấm.",
      ],
    },
  },
  {
    id: "cd-05-mcq-3",
    topicIds: ["CD-05"],
    level: "M2",
    questionType: "mcq",
    prompt: "Câu nào dưới đây dùng dấu chấm than PHÙ HỢP?",
    explanation: "\"Ôi, cảnh đẹp quá!\" là câu cảm thán, phù hợp dùng dấu chấm than. Câu kể bình thường không cần dấu chấm than.",
    mcq: {
      options: [
        "Hôm nay em đi học!",
        "Ôi, cảnh đẹp quá!",
        "Bạn tên là gì!",
        "Em ăn cơm rồi!",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là câu kể bình thường, không mang sắc thái cảm thán, nên dùng dấu chấm là phù hợp hơn.",
        "Đúng — đây là câu cảm thán, thể hiện cảm xúc ngạc nhiên, thích thú, phù hợp dùng dấu chấm than.",
        "Đây là câu hỏi, nên dùng dấu chấm hỏi, không phải dấu chấm than.",
        "Đây là câu kể bình thường, không cần dấu chấm than.",
      ],
    },
  },
  {
    id: "cd-05-fill-1",
    topicIds: ["CD-05"],
    level: "M1",
    questionType: "fill",
    prompt: "Điền dấu câu còn thiếu vào cuối câu: \"Hôm nay trời đẹp quá___\" (câu cảm thán)",
    explanation: "Câu cảm thán kết thúc bằng dấu chấm than (!).",
    fill: { acceptedAnswers: ["!"], strictMode: true, isSet: false },
  },
];
