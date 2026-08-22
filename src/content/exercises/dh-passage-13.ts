import type { Exercise } from "@/data-access/types";

// DH-passage-13 — "Vì sao chúng ta cần ngủ đủ giấc" (văn bản thông tin,
// khoa học sức khoẻ). Tự biên soạn (Mục 10.1 hướng B). Không có cốt
// truyện/nhân vật nên không gắn câu hỏi DH-02/DH-03 ở đây.
export const DH_PASSAGE_13_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-13-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-13",
    prompt: "Theo văn bản, học sinh tiểu học và trung học cơ sở nên ngủ bao nhiêu tiếng mỗi đêm?",
    explanation: "Văn bản nêu trực tiếp: nên ngủ đủ từ chín đến mười một tiếng mỗi đêm.",
    mcq: {
      options: ["5 đến 6 tiếng", "9 đến 11 tiếng", "12 đến 14 tiếng", "3 đến 4 tiếng"],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra con số này.",
        "Đúng — đây là con số được nêu trực tiếp trong bài.",
        "Văn bản không đưa ra con số này.",
        "Văn bản không đưa ra con số này.",
      ],
    },
  },
  {
    id: "dh-passage-13-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-13",
    prompt: "Trong lúc ngủ, cơ thể tiết ra loại chất gì giúp xương và cơ bắp phát triển? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: cơ thể tiết ra hoóc-môn tăng trưởng.",
    fill: { acceptedAnswers: ["hoóc-môn tăng trưởng"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-13-q3",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-13",
    prompt: "Nội dung chính của văn bản trên là gì?",
    explanation: "Toàn bộ văn bản giải thích vai trò quan trọng của giấc ngủ đối với sức khoẻ, sự phát triển và khả năng học tập của trẻ em.",
    mcq: {
      options: [
        "Cách chọn mua đệm ngủ tốt",
        "Vai trò quan trọng của giấc ngủ đối với sức khoẻ, sự phát triển và học tập",
        "Kể chuyện về một bạn học sinh hay thức khuya",
        "Hướng dẫn cách trang trí phòng ngủ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không hướng dẫn cách chọn đệm.",
        "Đúng — đây là nội dung chính xuyên suốt văn bản.",
        "Đây là văn bản thông tin khoa học, không phải truyện kể.",
        "Văn bản không hướng dẫn trang trí phòng.",
      ],
    },
  },
  {
    id: "dh-passage-13-q4",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-13",
    prompt: "Dựa vào văn bản, vì sao học sinh thức khuya ôn bài thường học kém hiệu quả hơn?",
    explanation: "Suy luận từ văn bản: vì bộ não cần thời gian ngủ để sắp xếp lại kiến thức đã học, thức khuya làm giảm thời gian này, khiến việc ghi nhớ kém hiệu quả hơn.",
    mcq: {
      options: [
        "Vì thức khuya khiến học sinh đói bụng",
        "Vì bộ não cần thời gian ngủ để sắp xếp lại kiến thức, thức khuya làm giảm hiệu quả ghi nhớ",
        "Vì ban đêm phòng học không đủ ánh sáng",
        "Vì thức khuya khiến học sinh bị cận thị",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đề cập đến việc đói bụng.",
        "Đúng — đây là suy luận hợp lý dựa trên vai trò của giấc ngủ đối với trí nhớ đã nêu trong bài.",
        "Văn bản không đề cập đến vấn đề ánh sáng.",
        "Văn bản không đề cập đến vấn đề cận thị ở đoạn này.",
      ],
    },
  },
  {
    id: "dh-passage-13-q5",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-13",
    prompt: 'Trong văn bản, cụm từ "khả năng miễn dịch" có nghĩa gần nhất với điều gì?',
    explanation: "Dựa vào ngữ cảnh (thiếu ngủ làm giảm khả năng miễn dịch, khiến dễ mắc bệnh hơn), có thể hiểu \"khả năng miễn dịch\" là khả năng chống lại bệnh tật của cơ thể.",
    mcq: {
      options: [
        "Khả năng chống lại bệnh tật của cơ thể",
        "Khả năng ghi nhớ bài học",
        "Khả năng chạy nhanh",
        "Khả năng nhìn xa",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — ngữ cảnh (thiếu ngủ → giảm khả năng này → dễ mắc bệnh) cho thấy đây là khả năng chống bệnh tật.",
        "Đây là chức năng của trí nhớ, đã được nhắc ở đoạn khác trong bài, không phải nghĩa của cụm từ này.",
        "Cụm từ này không liên quan đến tốc độ chạy.",
        "Cụm từ này không liên quan đến thị lực.",
      ],
    },
  },
  {
    id: "dh-passage-13-q6",
    topicIds: ["DH-01"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-13",
    prompt: "Theo văn bản, nên tránh làm gì ngay trước khi ngủ để có giấc ngủ ngon?",
    explanation: "Văn bản nêu trực tiếp: nên tránh sử dụng điện thoại hay xem ti vi ngay trước khi ngủ.",
    mcq: {
      options: [
        "Đọc sách",
        "Sử dụng điện thoại hoặc xem ti vi",
        "Uống nước",
        "Tắt đèn phòng ngủ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không khuyên tránh đọc sách.",
        "Đúng — văn bản khuyên nên tránh sử dụng điện thoại, xem ti vi trước khi ngủ.",
        "Văn bản không đề cập đến việc uống nước.",
        "Tắt đèn phòng ngủ không phải điều cần tránh, mà thường được khuyến khích.",
      ],
    },
  },
];
