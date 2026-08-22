import type { Exercise } from "@/data-access/types";

// DH-passage-15 — "Hạt giống trong sa mạc". Truyện ngụ ngôn tự sáng tác
// (Mục 10.1 hướng B), không phải bản dịch/phóng tác từ tác phẩm cụ thể nào.
export const DH_PASSAGE_15_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-15-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-15",
    prompt: "Hạt giống nhỏ trong câu chuyện đã rơi xuống đâu?",
    explanation: "Văn bản nêu trực tiếp: hạt giống bị gió cuốn rơi xuống giữa vùng sa mạc khô cằn.",
    mcq: {
      options: ["Đồng cỏ xanh tươi", "Vùng sa mạc khô cằn", "Khu rừng rậm", "Bờ sông"],
      answerIndex: 1,
      distractorNotes: [
        "Đồng cỏ xanh tươi là nơi những hạt giống khác may mắn rơi xuống, không phải hạt giống này.",
        "Đúng — đây là chi tiết được nêu trực tiếp ở đầu văn bản.",
        "Văn bản không nhắc đến khu rừng.",
        "Văn bản không nhắc đến bờ sông.",
      ],
    },
  },
  {
    id: "dh-passage-15-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-15",
    prompt: "Hạt giống cuối cùng lớn lên thành loài cây gì? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: hạt giống nảy mầm thành một cây xương rồng nhỏ xinh.",
    fill: { acceptedAnswers: ["cây xương rồng", "xương rồng"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-15-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-15",
    prompt: "Sự việc nào xảy ra NGAY TRƯỚC KHI hạt giống bắt đầu nảy mầm?",
    explanation: "Theo trình tự: hạt giống hút sương đêm, rễ đâm sâu tìm mạch nước ngầm, chạm được mạch nước, rồi mới nảy mầm.",
    mcq: {
      options: [
        "Hạt giống bị gió cuốn rơi xuống sa mạc",
        "Chiếc rễ chạm được đến mạch nước ngầm mát lành",
        "Cây xương rồng trở thành bóng mát cho lữ hành",
        "Những hạt giống khác rơi xuống đồng cỏ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là sự việc mở đầu câu chuyện, xảy ra từ rất lâu trước đó.",
        "Đúng — đây là sự việc xảy ra ngay trước khi hạt giống nảy mầm.",
        "Đây là kết quả cuối cùng, sau khi cây đã lớn lên.",
        "Đây là sự việc xảy ra song song ở đầu truyện, không liên quan trực tiếp đến việc nảy mầm.",
      ],
    },
  },
  {
    id: "dh-passage-15-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-15",
    prompt: "Chi tiết nào cho thấy hạt giống có ý chí kiên trì, không từ bỏ?",
    explanation: "Chi tiết chiếc rễ non yếu ớt kiên trì đâm sâu xuống lòng cát suốt nhiều tháng để tìm mạch nước ngầm thể hiện rõ ý chí kiên trì.",
    mcq: {
      options: [
        "Hạt giống bị gió cuốn đến sa mạc",
        "Chiếc rễ non yếu ớt kiên trì đâm sâu xuống lòng cát suốt nhiều tháng để tìm nước",
        "Những hạt giống khác nảy mầm nhanh chóng ở đồng cỏ",
        "Cây xương rồng trở thành bóng mát cho lữ hành",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là hoàn cảnh khách quan, không thể hiện ý chí của hạt giống.",
        "Đúng — sự kiên trì suốt nhiều tháng dù gặp khó khăn thể hiện rõ ý chí không từ bỏ.",
        "Đây nói về những hạt giống khác, không phải hạt giống chính trong câu chuyện.",
        "Đây là kết quả cuối cùng, không phải quá trình thể hiện ý chí.",
      ],
    },
  },
  {
    id: "dh-passage-15-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-15",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu cuối văn bản nêu rõ: dù trong hoàn cảnh khó khăn nhất, chỉ cần không từ bỏ hy vọng và kiên trì cố gắng, sự sống vẫn có thể nảy nở.",
    mcq: {
      options: [
        "Chỉ nên trồng cây ở nơi có nhiều nước",
        "Dù trong hoàn cảnh khó khăn nhất, kiên trì và không từ bỏ hy vọng có thể mang lại thành quả",
        "Sa mạc là nơi không có sự sống",
        "Xương rồng là loài cây vô dụng",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên này, mà ngược lại ca ngợi sức sống ngay cả nơi khó khăn.",
        "Đúng — đây là bài học được nêu rõ ở cuối văn bản.",
        "Câu chuyện chứng minh điều ngược lại — sự sống vẫn có thể tồn tại ở sa mạc.",
        "Văn bản cho thấy cây xương rồng rất có ích, làm bóng mát cho lữ hành.",
      ],
    },
  },
  {
    id: "dh-passage-15-q6",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-15",
    prompt: 'Trong câu "trở thành bóng mát hiếm hoi giữa sa mạc mênh mông", từ "mênh mông" gợi tả điều gì?',
    explanation: "\"Mênh mông\" là từ láy gợi tả không gian rộng lớn, bao la, không có giới hạn rõ ràng.",
    mcq: {
      options: [
        "Không gian nhỏ hẹp, chật chội",
        "Không gian rộng lớn, bao la",
        "Âm thanh ồn ào",
        "Màu sắc sặc sỡ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "\"Mênh mông\" mang nghĩa ngược lại với sự chật chội.",
        "Đúng — \"mênh mông\" gợi tả không gian sa mạc rộng lớn, bao la.",
        "\"Mênh mông\" không liên quan đến âm thanh.",
        "\"Mênh mông\" không liên quan đến màu sắc.",
      ],
    },
  },
];
