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
  {
    id: "ca-07-mcq-3",
    topicIds: ["CA-07"],
    level: "M1",
    questionType: "mcq",
    prompt: "Phép lặp trong liên kết câu là gì?",
    explanation: "Phép lặp là lặp lại một từ ngữ đã xuất hiện ở câu trước sang câu sau để tạo sự liên kết.",
    mcq: {
      options: [
        "Lặp lại một từ ngữ đã có ở câu trước sang câu sau",
        "Dùng đại từ để thay thế cho từ ngữ ở câu trước",
        "Dùng từ nối để nối ý giữa hai câu",
        "Đổi thứ tự các câu trong đoạn văn",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là định nghĩa của phép lặp.",
        "Đây là định nghĩa của phép thế.",
        "Đây là định nghĩa của phép nối.",
        "Đây không phải là một phép liên kết câu.",
      ],
    },
  },
  {
    id: "ca-07-mcq-4",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Hai câu "Mùa hè, hoa phượng nở đỏ rực. Ngoài ra, hoa bằng lăng cũng khoe sắc tím." liên kết với nhau bằng phép liên kết nào?',
    explanation: "\"Ngoài ra\" là từ nối, thể hiện quan hệ bổ sung giữa hai câu — đây là phép nối.",
    mcq: {
      options: ["Phép lặp", "Phép thế", "Phép nối", "Không có liên kết"],
      answerIndex: 2,
      distractorNotes: [
        "Không có từ ngữ nào được lặp lại giữa hai câu.",
        "Không có đại từ thay thế nào ở đây.",
        "Đúng — \"ngoài ra\" là từ nối thể hiện quan hệ bổ sung.",
        "Hai câu có liên kết với nhau qua từ nối \"ngoài ra\".",
      ],
    },
  },
  {
    id: "ca-07-mcq-5",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ nối nào dưới đây thường thể hiện quan hệ tương phản giữa hai câu?",
    explanation: "\"Tuy nhiên\" là từ nối thường dùng để thể hiện sự đối lập, tương phản giữa hai câu.",
    mcq: {
      options: ["Vì vậy", "Tuy nhiên", "Ngoài ra", "Đầu tiên"],
      answerIndex: 1,
      distractorNotes: [
        "\"Vì vậy\" thể hiện quan hệ kết quả.",
        "Đúng — \"tuy nhiên\" thường thể hiện sự tương phản.",
        "\"Ngoài ra\" thể hiện quan hệ bổ sung.",
        "\"Đầu tiên\" thể hiện trình tự, không phải tương phản.",
      ],
    },
  },
  {
    id: "ca-07-fill-2",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Phép ___ là dùng đại từ hoặc từ ngữ khác để thay cho từ ngữ đã xuất hiện ở câu trước.",
    explanation: "Phép thế là dùng đại từ hoặc từ ngữ khác thay cho từ ngữ đã nhắc ở câu trước, tránh lặp từ.",
    fill: { acceptedAnswers: ["thế"], strictMode: false, isSet: false },
  },
  {
    id: "ca-07-mcq-6",
    topicIds: ["CA-07"],
    level: "M3",
    questionType: "mcq",
    prompt:
      'Hai câu "Chiếc bàn học của em đã cũ. Cái bàn ấy vẫn còn rất chắc chắn." liên kết với nhau bằng phép liên kết nào?',
    explanation: "\"Cái bàn ấy\" thay thế cho \"chiếc bàn học\" đã nhắc ở câu trước — đây là phép thế.",
    mcq: {
      options: ["Phép lặp", "Phép thế", "Phép nối", "Không có liên kết"],
      answerIndex: 1,
      distractorNotes: [
        "Từ ngữ không được lặp lại y nguyên, mà được thay bằng \"cái bàn ấy\".",
        "Đúng — \"cái bàn ấy\" thay thế cho \"chiếc bàn học\" đã nhắc trước đó.",
        "Không có từ nối nào ở đây.",
        "Hai câu vẫn liên kết với nhau qua việc thay thế từ ngữ.",
      ],
    },
  },
  {
    id: "ca-07-mcq-7",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "mcq",
    prompt: "Vì sao cần sử dụng các phép liên kết câu (lặp, thế, nối) trong đoạn văn?",
    explanation: "Các phép liên kết giúp các câu trong đoạn gắn kết chặt chẽ với nhau về ý nghĩa, đồng thời giúp tránh lặp từ ngữ một cách nhàm chán.",
    mcq: {
      options: [
        "Để đoạn văn dài hơn",
        "Để các câu gắn kết chặt chẽ về ý nghĩa và tránh lặp từ nhàm chán",
        "Để đoạn văn có nhiều dấu câu hơn",
        "Không có tác dụng gì đặc biệt",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Độ dài đoạn văn không phải mục đích của phép liên kết.",
        "Đúng — đây là hai tác dụng chính của các phép liên kết câu.",
        "Số lượng dấu câu không liên quan đến phép liên kết.",
        "Các phép liên kết có tác dụng rất quan trọng trong việc tạo đoạn văn mạch lạc.",
      ],
    },
  },
  {
    id: "ca-07-match-1",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "match",
    prompt: "Nối mỗi cặp câu ở cột trái với đúng phép liên kết được sử dụng ở cột phải.",
    explanation: "\"Lan học giỏi. Lan còn hát hay.\" — phép lặp; \"Nam chăm chỉ. Cậu bé luôn hoàn thành bài tập.\" — phép thế; \"Trời tối. Vì vậy, mọi người về nhà.\" — phép nối.",
    match: {
      leftItems: [
        { id: "l1", label: "Lan học giỏi. Lan còn hát hay." },
        { id: "l2", label: "Nam chăm chỉ. Cậu bé luôn hoàn thành bài tập." },
        { id: "l3", label: "Trời tối. Vì vậy, mọi người về nhà." },
      ],
      rightItems: [
        { id: "r1", label: "Phép nối" },
        { id: "r2", label: "Phép lặp" },
        { id: "r3", label: "Phép thế" },
      ],
      correctPairs: [
        { leftId: "l1", rightId: "r2" },
        { leftId: "l2", rightId: "r3" },
        { leftId: "l3", rightId: "r1" },
      ],
    },
  },
  {
    id: "ca-07-mcq-8",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ nào dưới đây có thể dùng làm phép thế cho một danh từ chỉ người đã nhắc ở câu trước?',
    explanation: "\"Cậu ấy\" là đại từ nhân xưng, có thể thay thế cho danh từ chỉ người (VD một bạn nam đã được nhắc đến).",
    mcq: {
      options: ["Vì vậy", "Cậu ấy", "Ngoài ra", "Tuy nhiên"],
      answerIndex: 1,
      distractorNotes: [
        "Đây là từ nối, không phải từ dùng để thế.",
        "Đúng — \"cậu ấy\" là đại từ có thể thay thế cho danh từ chỉ người.",
        "Đây là từ nối, không phải từ dùng để thế.",
        "Đây là từ nối, không phải từ dùng để thế.",
      ],
    },
  },
  {
    id: "ca-07-fill-3",
    topicIds: ["CA-07"],
    level: "M2",
    questionType: "fill",
    prompt: 'Điền từ còn thiếu: Hai câu "Em rất thích đọc sách. Đây là thói quen tốt của em." liên kết với nhau bằng phép ___.',
    explanation: "\"Đây\" thay thế cho ý \"đọc sách\" đã nhắc ở câu trước — là phép thế.",
    fill: { acceptedAnswers: ["thế"], strictMode: false, isSet: false },
  },
];
