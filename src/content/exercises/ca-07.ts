import type { Exercise } from "@/data-access/types";

// CA-07 — Liên kết câu trong đoạn: phép lặp, phép thế, phép nối. Câu ví dụ
// tự biên soạn (Mục 10.1 hướng B).
export const CA07_EXERCISES: Exercise[] = [
  {
    id: "ca-07-mcq-1",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Hai câu "Lan là học sinh giỏi. Lan luôn giúp đỡ bạn bè." liên kết với nhau bằng phép liên kết nào?',
    explanation: "Từ \"Lan\" được lặp lại nguyên vẹn ở câu thứ hai — đây là phép lặp.",
    mcq: {
      options: ["Phép lặp", "Phép thế", "Phép nối", "Không có liên kết"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — từ \"Lan\" được lặp lại y nguyên ở câu sau.",
        "Phép thế cần dùng đại từ hoặc từ khác thay thế, câu này không có.",
        "Phép nối cần có từ nối như \"vì vậy, tuy nhiên\", câu này không có.",
        "Hai câu có liên kết với nhau qua việc lặp từ \"Lan\".",
      ],
    },
  },
  {
    id: "ca-07-mcq-2",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Hai câu "Lan là học sinh giỏi. Bạn ấy luôn giúp đỡ bạn bè." liên kết với nhau bằng phép liên kết nào?',
    explanation: "\"Bạn ấy\" là đại từ thay thế cho \"Lan\" đã nhắc ở câu trước — đây là phép thế.",
    mcq: {
      options: ["Phép lặp", "Phép thế", "Phép nối", "Không có liên kết"],
      answerIndex: 1,
      distractorNotes: [
        "Phép lặp cần từ ngữ giống hệt được lặp lại, ở đây từ \"Lan\" đã được thay bằng \"bạn ấy\".",
        "Đúng — \"bạn ấy\" là đại từ thay thế cho \"Lan\".",
        "Phép nối cần có từ nối như \"vì vậy, tuy nhiên\", câu này không có.",
        "Hai câu có liên kết với nhau qua việc dùng \"bạn ấy\" thay cho \"Lan\".",
      ],
    },
  },
  {
    id: "ca-07-fill-1",
    topicIds: ["CA-07"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Trong câu \"Trời mưa to. ___, buổi dã ngoại bị hoãn lại.\", cần điền một từ nối thể hiện quan hệ kết quả.",
    explanation: "\"Vì vậy\" là từ nối thể hiện quan hệ kết quả, nối ý \"trời mưa to\" với \"buổi dã ngoại bị hoãn\".",
    fill: { acceptedAnswers: ["vì vậy"], strictMode: false, isSet: false },
  },
];
