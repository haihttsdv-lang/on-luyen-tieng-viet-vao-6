import type { Exercise } from "@/data-access/types";

// DH-passage-11 — "Chiếc áo len cũ". Văn bản tự biên soạn (Mục 10.1
// hướng B).
export const DH_PASSAGE_11_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-11-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-11",
    prompt: "Chiếc áo len của Vy có đặc điểm gì khiến một số bạn bàn tán?",
    explanation: "Văn bản nêu trực tiếp: áo đã sờn vai, màu xanh nhạt bạc màu vì mặc qua từ năm ngoái.",
    mcq: {
      options: [
        "Áo quá rộng so với người Vy",
        "Áo đã cũ, sờn vai và bạc màu",
        "Áo có màu quá sặc sỡ",
        "Áo bị rách một lỗ to",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói về kích cỡ áo.",
        "Đúng — đây là chi tiết được nêu trực tiếp trong bài.",
        "Văn bản nói áo màu xanh nhạt, không phải sặc sỡ.",
        "Văn bản nói áo sờn vai, không nói bị rách lỗ to.",
      ],
    },
  },
  {
    id: "dh-passage-11-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-11",
    prompt: "Ai là người đã đan chiếc áo len tặng Vy? (trả lời bằng từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: mẹ đã tự tay đan chiếc áo tặng Vy.",
    fill: { acceptedAnswers: ["mẹ"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-11-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-11",
    prompt: "Sự việc nào xảy ra NGAY SAU KHI Chi hỏi Vy về chiếc áo len?",
    explanation: "Theo trình tự: Chi hỏi về áo, Vy kể chuyện mẹ đan áo, sau đó Chi khen áo đẹp vì chứa tình yêu thương.",
    mcq: {
      options: [
        "Vy kể rằng mẹ đã tự tay đan chiếc áo tặng mình",
        "Vy cảm thấy tự tin hẳn lên",
        "Các bạn trong lớp xì xào bàn tán",
        "Vy không còn khoanh tay che vai áo",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là phản ứng của Vy ngay sau câu hỏi của Chi.",
        "Đây là kết quả cuối cùng, sau khi nghe lời Chi nói.",
        "Đây là sự việc xảy ra trước, dẫn đến việc Vy cảm thấy ngại ngùng.",
        "Đây là kết quả cuối cùng của câu chuyện.",
      ],
    },
  },
  {
    id: "dh-passage-11-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-11",
    prompt: "Chi tiết nào cho thấy Chi là người tinh tế, biết an ủi bạn bè?",
    explanation: "Chi tiết Chi khen áo len đẹp và nói áo mẹ đan chứa tình yêu thương thể hiện sự tinh tế, biết cách động viên bạn.",
    mcq: {
      options: [
        "Chi ngồi cạnh Vy trong lớp",
        "Chi khen áo len đẹp và nói áo mẹ đan chứa cả tình yêu thương",
        "Chi thích mặc áo len mới",
        "Chi học cùng lớp với Vy",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là vị trí ngồi, không thể hiện tính cách.",
        "Đúng — lời khen tinh tế và đúng lúc này thể hiện sự quan tâm, biết an ủi bạn.",
        "Đây không phải chi tiết về Chi trong bài.",
        "Đây chỉ là thông tin chung, không thể hiện tính cách riêng.",
      ],
    },
  },
  {
    id: "dh-passage-11-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-11",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện cho thấy giá trị tình cảm của một món đồ (áo mẹ đan) quan trọng hơn vẻ ngoài mới hay cũ, và không nên đánh giá người khác qua vẻ bề ngoài.",
    mcq: {
      options: [
        "Nên mua áo len mới mỗi năm",
        "Giá trị tình cảm của một món đồ quan trọng hơn vẻ ngoài, không nên đánh giá người khác qua bề ngoài",
        "Không nên mặc áo len cũ đến trường",
        "Trẻ em không nên chơi với bạn có gia đình khó khăn",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên này.",
        "Đúng — đây là bài học chính được thể hiện qua sự thay đổi cảm xúc của Vy.",
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Đây là ý hoàn toàn trái với tinh thần câu chuyện.",
      ],
    },
  },
  {
    id: "dh-passage-11-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-11",
    prompt: "Vì sao ban đầu Vy cảm thấy ngại ngùng, hay khoanh tay che vai áo?",
    explanation: "Có thể suy luận: Vy cảm thấy tự ti khi bị các bạn bàn tán về chiếc áo cũ của mình so với áo mới của các bạn khác.",
    mcq: {
      options: [
        "Vì Vy bị lạnh",
        "Vì Vy cảm thấy tự ti khi bị bạn bè bàn tán về chiếc áo cũ của mình",
        "Vì Vy không thích màu xanh nhạt",
        "Vì Vy sợ áo bị rách thêm",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Hành động khoanh tay ở đây không liên quan đến cảm giác lạnh.",
        "Đúng — đây là suy luận hợp lý dựa trên phản ứng của Vy sau khi bị bàn tán.",
        "Văn bản không nói Vy không thích màu áo.",
        "Văn bản không đề cập đến lo lắng này.",
      ],
    },
  },
];
