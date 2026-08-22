import type { Exercise } from "@/data-access/types";

// CD-04 — Quy tắc viết hoa. FR-M05: nhóm CD kiểm tra chính xác từng ký tự
// (bao gồm cả hoa/thường vì đây chính là nội dung được kiểm tra). Câu tự
// biên soạn (Mục 10.1).
export const CD04_EXERCISES: Exercise[] = [
  {
    id: "cd-04-fill-1",
    topicIds: ["CD-04"],
    level: "M1",
    questionType: "fill",
    prompt: 'Viết lại cho đúng chính tả (viết hoa tên riêng): "bạn nguyễn văn an học lớp 5a."',
    explanation: "Tên người \"Nguyễn Văn An\" phải viết hoa chữ cái đầu của cả 3 tiếng, và đầu câu cũng viết hoa.",
    fill: {
      acceptedAnswers: ["Bạn Nguyễn Văn An học lớp 5A."],
      strictMode: true,
      isSet: false,
    },
  },
  {
    id: "cd-04-mcq-1",
    topicIds: ["CD-04"],
    level: "M1",
    questionType: "mcq",
    prompt: "Cách viết nào dưới đây ĐÚNG quy tắc viết hoa tên riêng?",
    explanation: "Tên riêng nhiều tiếng phải viết hoa chữ cái đầu của MỌI tiếng, không chỉ tiếng đầu tiên.",
    mcq: {
      options: ["Nguyễn văn An", "nguyễn Văn An", "Nguyễn Văn An", "Nguyễn Văn an"],
      answerIndex: 2,
      distractorNotes: [
        "Thiếu viết hoa chữ \"V\" trong \"Văn\".",
        "Thiếu viết hoa chữ \"N\" trong \"Nguyễn\".",
        "Đúng — viết hoa đầy đủ cả 3 tiếng của tên riêng.",
        "Thiếu viết hoa chữ \"A\" trong \"An\".",
      ],
    },
  },
  {
    id: "cd-04-mcq-2",
    topicIds: ["CD-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây viết ĐÚNG quy tắc viết hoa?',
    explanation: "\"Hồ Chí Minh\" là tên riêng, viết hoa cả 3 tiếng; \"thành phố\" là danh từ chung đứng giữa câu, không viết hoa.",
    mcq: {
      options: [
        "Gia đình em sống ở Thành Phố Hồ Chí Minh.",
        "Gia đình em sống ở thành phố Hồ Chí Minh.",
        "Gia đình em sống ở thành phố hồ chí minh.",
        "Gia đình em sống ở Thành phố hồ Chí Minh.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "\"Thành Phố\" là danh từ chung, không cần viết hoa cả hai chữ khi đứng giữa câu.",
        "Đúng — \"thành phố\" là danh từ chung (không viết hoa), \"Hồ Chí Minh\" là tên riêng (viết hoa đủ 3 tiếng).",
        "Tên riêng \"Hồ Chí Minh\" phải viết hoa, không được viết thường.",
        "Danh từ chung \"thành phố\" bị viết hoa sai, và tên riêng viết hoa không đầy đủ.",
      ],
    },
  },
];
