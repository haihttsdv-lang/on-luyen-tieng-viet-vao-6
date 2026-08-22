import type { Exercise } from "@/data-access/types";

// DH-passage-23 — "Bài học từ trận thua bóng đá". Văn bản tự biên soạn
// (Mục 10.1 hướng B).
export const DH_PASSAGE_23_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-23-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-23",
    prompt: "Đội bóng của lớp 5B thua trận chung kết với tỷ số bao nhiêu?",
    explanation: "Văn bản nêu trực tiếp: đội thua với tỷ số sít sao 2-1.",
    mcq: {
      options: ["1-0", "2-1", "3-1", "2-0"],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nêu tỷ số này.",
        "Đúng — đây là tỷ số được nêu trực tiếp trong bài.",
        "Văn bản không nêu tỷ số này.",
        "Văn bản không nêu tỷ số này.",
      ],
    },
  },
  {
    id: "dh-passage-23-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-23",
    prompt: "Ai làm đội trưởng của đội bóng lớp 5B? (trả lời bằng tên riêng có trong bài)",
    explanation: "Văn bản nêu trực tiếp: đội bóng của lớp 5B do Duy làm đội trưởng.",
    fill: { acceptedAnswers: ["Duy"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-23-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-23",
    prompt: "Sự việc nào xảy ra NGAY SAU KHI đội thua trận chung kết?",
    explanation: "Theo trình tự: đội thua trận, cả đội buồn bã, tối hôm đó thầy giáo gọi cả đội lại nói chuyện, cuối cùng cả đội nguôi ngoai.",
    mcq: {
      options: [
        "Cả đội miệt mài tập luyện mỗi buổi chiều",
        "Cả đội buồn bã, một vài bạn bật khóc ngay trên sân",
        "Thầy giáo chủ nhiệm gọi cả đội lại nói chuyện",
        "Cả đội hẹn nhau mùa giải sau sẽ cố gắng hơn",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là sự việc xảy ra trước trận chung kết, trong quá trình chuẩn bị.",
        "Đúng — đây là phản ứng ngay sau khi trận đấu kết thúc.",
        "Việc này xảy ra vào buổi tối, sau khi cả đội đã buồn bã trên sân.",
        "Đây là kết quả sau cùng, sau khi nghe lời thầy giáo.",
      ],
    },
  },
  {
    id: "dh-passage-23-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-23",
    prompt: "Chi tiết nào cho thấy Duy là người biết kiềm chế cảm xúc để lo cho đồng đội?",
    explanation: "Chi tiết Duy rất thất vọng nhưng cố kìm nén cảm xúc để động viên đồng đội thể hiện rõ khả năng kiềm chế bản thân vì tập thể.",
    mcq: {
      options: [
        "Duy làm đội trưởng của đội bóng lớp 5B",
        "Duy rất thất vọng nhưng cố kìm nén cảm xúc để động viên đồng đội",
        "Duy cùng cả đội tập luyện mỗi buổi chiều",
        "Duy nghe lời thầy giáo chủ nhiệm nói chuyện",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là vai trò, chưa thể hiện hành động cụ thể.",
        "Đúng — hành động kìm nén nỗi buồn để động viên đồng đội thể hiện rõ sự quan tâm đến tập thể.",
        "Đây là hoạt động chung của cả đội, không riêng Duy.",
        "Đây là hành động thụ động, không thể hiện rõ đặc điểm này.",
      ],
    },
  },
  {
    id: "dh-passage-23-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-23",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Lời thầy giáo nêu rõ bài học: tinh thần thể thao và sự nỗ lực hết mình mới là điều đáng quý nhất, không nhất thiết phải chiến thắng mới là thành công.",
    mcq: {
      options: [
        "Chỉ có đội vô địch mới xứng đáng được khen ngợi",
        "Tinh thần đoàn kết và nỗ lực hết mình mới là điều đáng quý, không nhất thiết phải chiến thắng mới là thành công",
        "Không nên tham gia thi đấu nếu không chắc thắng",
        "Học sinh không nên chơi thể thao vì dễ buồn khi thua",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là ý ngược lại với thông điệp lời thầy giáo nói.",
        "Đúng — đây là bài học chính được thầy giáo nêu rõ trong bài.",
        "Văn bản không đưa ra lời khuyên né tránh này.",
        "Đây là ý ngược lại với tinh thần của câu chuyện.",
      ],
    },
  },
  {
    id: "dh-passage-23-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-23",
    prompt: "Vì sao lời nói của thầy giáo lại giúp Duy và các bạn \"dần nguôi ngoai\"?",
    explanation: "Có thể suy luận: lời thầy giúp các bạn nhìn nhận lại giá trị thực sự của mùa giải không nằm ở kết quả thắng thua mà ở sự cố gắng và đoàn kết, từ đó vơi bớt nỗi buồn thua trận.",
    mcq: {
      options: [
        "Vì thầy hứa sẽ tổ chức lại trận đấu khác để đội thắng",
        "Vì lời thầy giúp các bạn nhận ra giá trị thật sự nằm ở sự cố gắng, đoàn kết chứ không chỉ ở kết quả thắng thua",
        "Vì thầy phạt đội đối thủ vì chơi không đẹp",
        "Vì thầy tặng quà an ủi cho cả đội",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói thầy hứa tổ chức lại trận đấu.",
        "Đúng — đây là suy luận hợp lý dựa trên nội dung lời thầy giáo nói và sự thay đổi cảm xúc của cả đội.",
        "Văn bản không nhắc đến việc phạt đội đối thủ.",
        "Văn bản không nhắc đến việc tặng quà.",
      ],
    },
  },
];
