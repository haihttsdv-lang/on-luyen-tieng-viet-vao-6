import type { Exercise } from "@/data-access/types";

// CA-02 — Trạng ngữ và các loại trạng ngữ. Câu ví dụ tự biên soạn (Mục 10.1
// hướng B).
export const CA02_EXERCISES: Exercise[] = [
  {
    id: "ca-02-mcq-1",
    topicIds: ["CA-02"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Trạng ngữ trong câu "Vì trời mưa to, chúng em phải nghỉ học." trả lời cho câu hỏi nào?',
    explanation: "Trạng ngữ \"Vì trời mưa to\" nêu nguyên nhân, trả lời câu hỏi \"Vì sao?\".",
    mcq: {
      options: ["Khi nào?", "Ở đâu?", "Vì sao?", "Để làm gì?"],
      answerIndex: 2,
      distractorNotes: [
        "Trạng ngữ chỉ thời gian trả lời câu hỏi này, câu trên là trạng ngữ chỉ nguyên nhân.",
        "Trạng ngữ chỉ nơi chốn trả lời câu hỏi này, câu trên là trạng ngữ chỉ nguyên nhân.",
        "Đúng — \"Vì trời mưa to\" nêu nguyên nhân của việc nghỉ học.",
        "Trạng ngữ chỉ mục đích trả lời câu hỏi này, câu trên là trạng ngữ chỉ nguyên nhân.",
      ],
    },
  },
  {
    id: "ca-02-mcq-2",
    topicIds: ["CA-02"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây có trạng ngữ chỉ mục đích?',
    explanation: "\"Để đạt kết quả tốt\" nêu mục đích của hành động ôn bài, trả lời câu hỏi \"Để làm gì?\".",
    mcq: {
      options: [
        "Sáng nay, em dậy sớm hơn mọi ngày.",
        "Để đạt kết quả tốt, em cần ôn bài đều đặn.",
        "Ở sân trường, các bạn đang chơi nhảy dây.",
        "Bằng chiếc xe đạp cũ, em đến trường mỗi ngày.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là trạng ngữ chỉ thời gian.",
        "Đúng — \"Để đạt kết quả tốt\" là trạng ngữ chỉ mục đích.",
        "Đây là trạng ngữ chỉ nơi chốn.",
        "Đây là trạng ngữ chỉ phương tiện.",
      ],
    },
  },
  {
    id: "ca-02-fill-1",
    topicIds: ["CA-02"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Trạng ngữ thường đứng ở đầu câu và ngăn cách với nòng cốt câu bằng dấu ___.",
    explanation: "Trạng ngữ đứng đầu câu thường được ngăn cách với phần còn lại của câu bằng dấu phẩy.",
    fill: { acceptedAnswers: ["phẩy", "dấu phẩy"], strictMode: false, isSet: false },
  },
  {
    id: "ca-02-mcq-3",
    topicIds: ["CA-02"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Trong câu "Trên cành cây, những chú chim đang ríu rít hót.", trạng ngữ "Trên cành cây" thuộc loại nào?',
    explanation: "\"Trên cành cây\" chỉ vị trí, nơi diễn ra sự việc — đây là trạng ngữ chỉ nơi chốn.",
    mcq: {
      options: ["Trạng ngữ chỉ thời gian", "Trạng ngữ chỉ nơi chốn", "Trạng ngữ chỉ nguyên nhân", "Trạng ngữ chỉ mục đích"],
      answerIndex: 1,
      distractorNotes: [
        "\"Trên cành cây\" không nêu thời gian.",
        "Đúng — \"Trên cành cây\" nêu vị trí, nơi diễn ra sự việc.",
        "\"Trên cành cây\" không nêu nguyên nhân.",
        "\"Trên cành cây\" không nêu mục đích.",
      ],
    },
  },
];
