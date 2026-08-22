import type { Exercise } from "@/data-access/types";

// DH-passage-22 — "Chiếc bánh trung thu đầu tiên". Văn bản tự biên soạn
// (Mục 10.1 hướng B).
export const DH_PASSAGE_22_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-22-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-22",
    prompt: "Năm nay, gia đình Su quyết định làm gì khác so với mọi năm?",
    explanation: "Văn bản nêu trực tiếp: thay vì mua bánh trung thu, mẹ quyết định cả nhà cùng nhau tự làm bánh.",
    mcq: {
      options: [
        "Tự làm bánh trung thu tại nhà",
        "Đi mua bánh trung thu ở nhiều tiệm khác nhau",
        "Không tổ chức Tết Trung thu năm nay",
        "Đặt bánh trung thu từ nước ngoài",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp ở đầu văn bản.",
        "Văn bản nói ngược lại — không mua bánh như mọi năm.",
        "Văn bản không nói gia đình bỏ Tết Trung thu.",
        "Văn bản không nhắc đến việc đặt bánh từ nước ngoài.",
      ],
    },
  },
  {
    id: "dh-passage-22-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-22",
    prompt: "Chiếc bánh đầu tiên của Su bị lỗi gì? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: chiếc bánh đầu tiên méo mó, nhân bị lộ ra ngoài.",
    fill: { acceptedAnswers: ["méo mó", "méo mó, nhân bị lộ ra ngoài"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-22-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-22",
    prompt: "Sự việc nào xảy ra NGAY SAU KHI Su nặn hỏng chiếc bánh đầu tiên?",
    explanation: "Theo trình tự: Su nặn hỏng bánh, hơi buồn định bỏ cuộc, chị Hai động viên, sau đó những chiếc bánh tiếp theo đẹp hơn.",
    mcq: {
      options: [
        "Su hơi buồn và định bỏ cuộc",
        "Cả nhà quây quần thưởng thức bánh dưới ánh trăng",
        "Mẹ chuẩn bị sẵn bột và nhân đậu xanh",
        "Những chiếc bánh sau của Su đẹp hơn hẳn",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là cảm xúc của Su ngay sau khi làm hỏng chiếc bánh đầu tiên.",
        "Đây là sự việc diễn ra vào buổi tối, sau cùng.",
        "Đây là sự việc xảy ra trước khi Su bắt đầu nặn bánh.",
        "Đây là kết quả xảy ra sau khi được chị Hai hướng dẫn.",
      ],
    },
  },
  {
    id: "dh-passage-22-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-22",
    prompt: "Chi tiết nào cho thấy chị Hai là người biết động viên, quan tâm đến em?",
    explanation: "Chi tiết chị Hai an ủi Su khi làm hỏng bánh và hướng dẫn em vo bột, ém nhân kỹ hơn thể hiện rõ sự quan tâm, biết động viên.",
    mcq: {
      options: [
        "Chị Hai cùng mẹ chuẩn bị khuôn bánh",
        "Chị Hai an ủi và hướng dẫn Su vo bột, ém nhân kỹ hơn khi Su làm hỏng bánh",
        "Chị Hai ăn bánh cùng cả nhà vào buổi tối",
        "Chị Hai thích bánh trung thu nhân đậu xanh",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là công việc chuẩn bị, chưa thể hiện sự quan tâm đến Su.",
        "Đúng — lời động viên và hướng dẫn tận tình thể hiện rõ sự quan tâm của chị Hai.",
        "Đây là hoạt động chung của cả nhà, không riêng chị Hai.",
        "Đây chỉ là sở thích, không thể hiện sự quan tâm.",
      ],
    },
  },
  {
    id: "dh-passage-22-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-22",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện đề cao niềm vui và ý nghĩa của việc tự tay làm ra thành quả cùng người thân, dù chưa hoàn hảo.",
    mcq: {
      options: [
        "Chỉ nên mua bánh trung thu ở tiệm vì làm tại nhà mất thời gian",
        "Tự tay làm ra thành quả cùng người thân mang lại niềm vui và kỷ niệm ý nghĩa, dù chưa hoàn hảo",
        "Trẻ em không nên tham gia làm bánh vì dễ làm hỏng",
        "Chỉ có bánh mua ngoài tiệm mới ngon",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Đúng — đây là bài học chính thể hiện qua cảm xúc tự hào của Su ở cuối bài.",
        "Văn bản không đưa ra lời khuyên né tránh này.",
        "Đây là ý ngược lại với cảm nhận của cả nhà trong bài.",
      ],
    },
  },
  {
    id: "dh-passage-22-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-22",
    prompt: "Vì sao Su cảm thấy Tết Trung thu năm ấy là một kỷ niệm đáng nhớ, dù bánh làm ra không đẹp bằng bánh mua ngoài tiệm?",
    explanation: "Có thể suy luận: giá trị của chiếc bánh không nằm ở vẻ ngoài mà ở công sức, tình cảm gia đình và trải nghiệm tự tay làm ra nó cùng người thân.",
    mcq: {
      options: [
        "Vì bánh của Su thực ra đẹp hơn bánh mua ngoài tiệm",
        "Vì đó là thành quả do chính tay Su làm ra cùng sự yêu thương, giúp đỡ của mẹ và chị Hai",
        "Vì Su được nghỉ học vào ngày hôm đó",
        "Vì gia đình Su không đủ tiền mua bánh trung thu",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản nói bánh không hoàn hảo như bánh mua ngoài tiệm.",
        "Đúng — đây là suy luận hợp lý dựa trên cảm xúc tự hào và ấm áp được nêu ở cuối bài.",
        "Văn bản không nhắc đến việc nghỉ học.",
        "Văn bản không nói lý do là vì thiếu tiền.",
      ],
    },
  },
];
