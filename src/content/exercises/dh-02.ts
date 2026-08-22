import type { Exercise } from "@/data-access/types";

// DH-02 — Cốt truyện và trình tự sự việc. Đoạn văn ngắn tự biên soạn (Mục
// 10.1 hướng B).
export const DH02_EXERCISES: Exercise[] = [
  {
    id: "dh-02-mcq-1",
    topicIds: ["DH-02"],
    level: "M1",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Sáng sớm, Nam ra vườn tưới cây. Sau đó, em cho gà ăn. Cuối cùng em mới ăn sáng rồi đến trường."\nViệc nào Nam làm ĐẦU TIÊN?',
    explanation: "Đoạn văn nêu \"Sáng sớm, Nam ra vườn tưới cây\" là việc đầu tiên, trước khi cho gà ăn và ăn sáng.",
    mcq: {
      options: ["Ăn sáng", "Cho gà ăn", "Tưới cây", "Đến trường"],
      answerIndex: 2,
      distractorNotes: [
        "\"Ăn sáng\" là việc Nam làm gần cuối, trước khi đến trường.",
        "\"Cho gà ăn\" là việc thứ hai, sau khi tưới cây.",
        "Đúng — \"tưới cây\" là việc Nam làm đầu tiên trong đoạn văn.",
        "\"Đến trường\" là việc cuối cùng.",
      ],
    },
  },
  {
    id: "dh-02-order-1",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "order",
    prompt:
      'Đọc lại đoạn văn: "Sáng sớm, Nam ra vườn tưới cây. Sau đó, em cho gà ăn. Cuối cùng em mới ăn sáng rồi đến trường."\nSắp xếp các sự việc sau theo đúng trình tự trong bài.',
    explanation: "Trình tự đúng theo bài: tưới cây → cho gà ăn → ăn sáng → đến trường.",
    order: {
      items: [
        { id: "an-sang", label: "Ăn sáng" },
        { id: "tuoi-cay", label: "Tưới cây" },
        { id: "den-truong", label: "Đến trường" },
        { id: "cho-ga-an", label: "Cho gà ăn" },
      ],
      correctOrder: ["tuoi-cay", "cho-ga-an", "an-sang", "den-truong"],
    },
  },
  {
    id: "dh-02-mcq-2",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ ngữ nào dưới đây thường dùng để chỉ trình tự sự việc trong văn bản?",
    explanation: "\"Sau đó\", \"cuối cùng\", \"đầu tiên\" là các từ ngữ chỉ trình tự thời gian, giúp xác định thứ tự sự việc.",
    mcq: {
      options: ["Rất, hơi, quá", "Sau đó, cuối cùng, đầu tiên", "Và, hoặc", "Đẹp, xinh, to"],
      answerIndex: 1,
      distractorNotes: [
        "Đây là các từ chỉ mức độ, không chỉ trình tự.",
        "Đúng — đây là các từ ngữ chỉ trình tự thời gian thường gặp.",
        "Đây là các quan hệ từ nối, không chỉ trình tự thời gian cụ thể.",
        "Đây là các tính từ, không liên quan đến trình tự sự việc.",
      ],
    },
  },
];
