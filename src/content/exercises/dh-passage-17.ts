import type { Exercise } from "@/data-access/types";

// DH-passage-17 — "Chiếc đồng hồ của ông". Văn bản tự biên soạn (Mục
// 10.1 hướng B).
export const DH_PASSAGE_17_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-17-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-17",
    prompt: "Long tìm thấy chiếc đồng hồ ở đâu?",
    explanation: "Văn bản nêu trực tiếp: Long tìm thấy chiếc đồng hồ trong ngăn tủ của bố.",
    mcq: {
      options: ["Trong ngăn tủ của bố", "Trong cặp sách của mình", "Ở tiệm sửa đồng hồ", "Trong hộp quà sinh nhật"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp ở đầu văn bản.",
        "Văn bản không nói đồng hồ ở trong cặp sách của Long.",
        "Long mang đồng hồ đến tiệm sau khi đã tìm thấy nó, không phải tìm thấy ở đó.",
        "Văn bản không nhắc đến hộp quà.",
      ],
    },
  },
  {
    id: "dh-passage-17-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-17",
    prompt: "Chiếc đồng hồ là kỷ vật của ai để lại? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: đây là chiếc đồng hồ ông nội để lại trước khi qua đời.",
    fill: { acceptedAnswers: ["ông nội"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-17-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-17",
    prompt: "Sự việc nào xảy ra NGAY SAU KHI bố kể cho Long nghe về chiếc đồng hồ?",
    explanation: "Theo trình tự: bố kể chuyện, Long xin sửa đồng hồ, mang đến tiệm, cuối cùng đeo đồng hồ mỗi ngày.",
    mcq: {
      options: [
        "Long tìm thấy chiếc đồng hồ trong ngăn tủ",
        "Long xin phép bố được sửa lại chiếc đồng hồ",
        "Long đeo chiếc đồng hồ mỗi ngày",
        "Bác thợ lau chùi, thay dây đồng hồ mới",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là sự việc xảy ra trước khi bố kể chuyện.",
        "Đúng — đây là phản ứng của Long ngay sau khi nghe câu chuyện từ bố.",
        "Đây là kết quả cuối cùng, sau khi đồng hồ đã được sửa.",
        "Việc này xảy ra sau khi Long mang đồng hồ đến tiệm.",
      ],
    },
  },
  {
    id: "dh-passage-17-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-17",
    prompt: "Chi tiết nào cho thấy Long là người biết trân trọng kỷ vật gia đình?",
    explanation: "Chi tiết Long xin sửa lại đồng hồ và đeo nó mỗi ngày để nhớ đến ông nội thể hiện rõ sự trân trọng kỷ vật gia đình.",
    mcq: {
      options: [
        "Long tìm thấy chiếc đồng hồ trong ngăn tủ",
        "Long xin sửa lại đồng hồ và đeo nó mỗi ngày để nhớ đến ông nội",
        "Long hỏi bố về chiếc đồng hồ",
        "Long mang đồng hồ đến tiệm sửa chữa",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là hành động tình cờ, chưa thể hiện sự trân trọng.",
        "Đúng — quyết định giữ gìn và đeo đồng hồ mỗi ngày thể hiện rõ sự trân trọng kỷ vật.",
        "Đây chỉ là sự tò mò ban đầu, chưa thể hiện rõ sự trân trọng.",
        "Đây chỉ là một bước trong quá trình, không thể hiện đầy đủ sự trân trọng.",
      ],
    },
  },
  {
    id: "dh-passage-17-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-17",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện đề cao việc trân trọng kỷ vật gia đình như một cách ghi nhớ, biết ơn những hy sinh của thế hệ trước.",
    mcq: {
      options: [
        "Nên vứt bỏ những đồ vật cũ, không dùng được",
        "Trân trọng kỷ vật gia đình là cách ghi nhớ, biết ơn những hy sinh của thế hệ trước",
        "Đồng hồ đắt tiền luôn tốt hơn đồng hồ cũ",
        "Không nên sửa chữa đồ vật cũ vì tốn kém",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Đúng — đây là bài học chính thể hiện qua hành động và suy nghĩ của Long.",
        "Văn bản không so sánh giá trị vật chất giữa các loại đồng hồ.",
        "Đây là ý ngược lại với hành động của Long trong câu chuyện.",
      ],
    },
  },
  {
    id: "dh-passage-17-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-17",
    prompt: 'Vì sao Long cảm thấy "như thể mình đang được kết nối với người ông mà cậu chưa từng có cơ hội gặp mặt"?',
    explanation: "Có thể suy luận: dù chưa từng gặp ông, việc sở hữu và sử dụng lại kỷ vật của ông khiến Long cảm nhận được sự gắn bó, gần gũi với ông qua câu chuyện và đồ vật để lại.",
    mcq: {
      options: [
        "Vì Long nhìn thấy hình ông trên đồng hồ",
        "Vì chiếc đồng hồ là kỷ vật mang theo câu chuyện và tình cảm của ông, khiến Long cảm thấy gần gũi dù chưa từng gặp",
        "Vì đồng hồ có thể phát ra âm thanh giọng nói của ông",
        "Vì Long tưởng tượng ra hình ảnh ông trong giấc mơ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói đồng hồ có in hình ông.",
        "Đúng — đây là suy luận hợp lý về ý nghĩa tình cảm của kỷ vật gia đình.",
        "Đây không phải chi tiết có thật, đồng hồ không có chức năng này.",
        "Văn bản không nhắc đến việc Long nằm mơ thấy ông.",
      ],
    },
  },
];
