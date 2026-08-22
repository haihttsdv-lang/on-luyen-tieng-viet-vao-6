import type { Exercise } from "@/data-access/types";

// DH-passage-19 — "Cuộc phiêu lưu trong thư viện". Văn bản tự biên soạn
// (Mục 10.1 hướng B).
export const DH_PASSAGE_19_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-19-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-19",
    prompt: "Trước đây, Vy thường làm gì mỗi khi đến thư viện?",
    explanation: "Văn bản nêu trực tiếp: Vy chỉ ngồi cho hết giờ theo yêu cầu của cô giáo, không thích đọc sách.",
    mcq: {
      options: [
        "Chỉ ngồi cho hết giờ vì không thích đọc sách",
        "Đọc hết nhiều cuốn sách mỗi lần",
        "Giúp cô thủ thư sắp xếp sách",
        "Rủ bạn bè cùng đọc sách",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp ở đầu văn bản.",
        "Văn bản nói ngược lại — Vy không thích đọc sách trước đây.",
        "Văn bản không nhắc đến việc này.",
        "Văn bản không nhắc đến việc này.",
      ],
    },
  },
  {
    id: "dh-passage-19-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-19",
    prompt: "Cuốn sách Vy nhặt được có bìa vẽ hình gì? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: bìa sách vẽ hình một khu rừng bí ẩn.",
    fill: { acceptedAnswers: ["khu rừng bí ẩn", "một khu rừng bí ẩn"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-19-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-19",
    prompt: "Sự việc nào xảy ra SAU CÙNG trong câu chuyện?",
    explanation: "Theo trình tự: Vy làm rơi sách, đọc thử, bị cuốn hút, cuối cùng Vy bắt đầu mượn sách về nhà đọc mỗi tối.",
    mcq: {
      options: [
        "Vy vô tình làm rơi một cuốn sách cũ",
        "Vy đọc một mạch đến hết buổi mà không hay biết",
        "Vy bắt đầu mượn sách về nhà đọc mỗi tối",
        "Tiếng chuông báo hết giờ vang lên",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Đây là sự việc mở đầu câu chuyện.",
        "Việc này xảy ra trước khi tiếng chuông vang lên.",
        "Đúng — đây là sự việc diễn ra sau cùng, thể hiện sự thay đổi lâu dài của Vy.",
        "Việc này xảy ra trước khi Vy quyết định mượn sách về nhà.",
      ],
    },
  },
  {
    id: "dh-passage-19-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-19",
    prompt: "Chi tiết nào cho thấy Vy đã thay đổi thái độ đối với việc đọc sách?",
    explanation: "Chi tiết Vy bắt đầu mượn sách về nhà đọc mỗi tối, khám phá nhiều thể loại sách khác nhau thể hiện rõ sự thay đổi thái độ.",
    mcq: {
      options: [
        "Vy đến thư viện theo yêu cầu của cô giáo",
        "Vy bắt đầu mượn sách về nhà đọc mỗi tối, khám phá nhiều thể loại sách khác nhau",
        "Vy làm rơi một cuốn sách",
        "Vy nghe tiếng chuông báo hết giờ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là thói quen cũ, trước khi có sự thay đổi.",
        "Đúng — đây là hành động mới, thể hiện rõ sự thay đổi thái độ tích cực với việc đọc sách.",
        "Đây chỉ là một sự việc tình cờ, chưa thể hiện sự thay đổi thái độ.",
        "Đây chỉ là một chi tiết bối cảnh, không thể hiện thái độ của Vy.",
      ],
    },
  },
  {
    id: "dh-passage-19-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-19",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu cuối văn bản nêu rõ: đọc sách giống như mở ra cánh cửa đến những thế giới kỳ diệu, chỉ cần chịu khó khám phá.",
    mcq: {
      options: [
        "Thư viện chỉ dành cho học sinh giỏi",
        "Đọc sách có thể mở ra những thế giới kỳ diệu, chỉ cần chịu khó khám phá",
        "Không nên mượn sách về nhà vì dễ làm mất",
        "Chỉ nên đọc sách có tranh vẽ đẹp",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra quan điểm này.",
        "Đúng — đây là bài học được nêu rõ ở cuối văn bản.",
        "Văn bản không đưa ra lời khuyên né tránh này.",
        "Văn bản không đưa ra tiêu chí chọn sách theo tranh vẽ.",
      ],
    },
  },
  {
    id: "dh-passage-19-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-19",
    prompt: "Vì sao Vy \"ngỡ ngàng\" khi nghe tiếng chuông báo hết giờ?",
    explanation: "Có thể suy luận: Vy ngỡ ngàng vì mải đọc sách đến mức quên hẳn thời gian, điều chưa từng xảy ra với cô trước đây khi không thích đọc sách.",
    mcq: {
      options: [
        "Vì Vy nghĩ tiếng chuông là báo cháy",
        "Vì Vy mải đọc sách đến mức quên hẳn thời gian, điều chưa từng xảy ra trước đây",
        "Vì Vy không muốn về nhà",
        "Vì tiếng chuông kêu quá to",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không gợi ý điều này.",
        "Đúng — đây là suy luận hợp lý dựa trên sự thay đổi bất ngờ trong trải nghiệm đọc sách của Vy.",
        "Văn bản không đề cập đến việc Vy không muốn về nhà.",
        "Văn bản không nói về âm lượng tiếng chuông.",
      ],
    },
  },
];
