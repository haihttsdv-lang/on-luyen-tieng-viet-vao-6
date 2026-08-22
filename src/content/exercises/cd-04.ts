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
  {
    id: "cd-04-mcq-3",
    topicIds: ["CD-04"],
    level: "M1",
    questionType: "mcq",
    prompt: "Tên cơ quan, tổ chức khi viết hoa cần tuân theo quy tắc nào?",
    explanation: "Tên cơ quan, tổ chức viết hoa chữ cái đầu của mỗi bộ phận tạo thành tên riêng đó (VD: Trường Tiểu học Kim Đồng).",
    mcq: {
      options: [
        "Chỉ viết hoa chữ cái đầu tiên của cả tên",
        "Viết hoa chữ cái đầu của mỗi bộ phận tạo thành tên riêng",
        "Không cần viết hoa vì đây không phải tên người",
        "Viết hoa toàn bộ các chữ cái trong tên",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Cách này bỏ sót việc viết hoa các bộ phận quan trọng khác trong tên.",
        "Đúng — đây là quy tắc viết hoa tên cơ quan, tổ chức.",
        "Tên cơ quan, tổ chức vẫn là tên riêng, cần viết hoa đúng quy tắc.",
        "Viết hoa toàn bộ chữ cái không đúng quy tắc chính tả tiếng Việt.",
      ],
    },
  },
  {
    id: "cd-04-fill-2",
    topicIds: ["CD-04"],
    level: "M1",
    questionType: "fill",
    prompt: 'Viết lại cho đúng chính tả (viết hoa tên riêng): "em học ở trường tiểu học kim đồng."',
    explanation: "Tên trường \"Trường Tiểu học Kim Đồng\" phải viết hoa chữ cái đầu của mỗi bộ phận tạo thành tên riêng, và đầu câu viết hoa.",
    fill: {
      acceptedAnswers: ["Em học ở Trường Tiểu học Kim Đồng."],
      strictMode: true,
      isSet: false,
    },
  },
  {
    id: "cd-04-mcq-4",
    topicIds: ["CD-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây viết ĐÚNG quy tắc viết hoa tên địa danh?',
    explanation: "\"Sông Hồng\" là tên riêng của một con sông, phải viết hoa cả hai tiếng.",
    mcq: {
      options: [
        "Con sông hồng chảy qua nhiều tỉnh thành.",
        "Con Sông Hồng chảy qua nhiều tỉnh thành.",
        "Con sông Hồng chảy qua nhiều tỉnh thành.",
        "Con sông hông chảy qua nhiều tỉnh thành.",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Thiếu viết hoa \"Hồng\" — đây là một phần tên riêng của con sông.",
        "\"Sông\" ở đây là danh từ chung (loại địa hình), không cần viết hoa; chỉ \"Hồng\" mới là tên riêng cần viết hoa.",
        "Đúng — \"sông\" là danh từ chung không viết hoa, \"Hồng\" là tên riêng viết hoa.",
        "Đây là lỗi chính tả (thiếu dấu), không liên quan đến quy tắc viết hoa.",
      ],
    },
  },
  {
    id: "cd-04-mcq-5",
    topicIds: ["CD-04"],
    level: "M2",
    questionType: "mcq",
    prompt: "Danh hiệu (như \"Anh hùng Lao động\") khi đứng trước tên người thì viết hoa như thế nào?",
    explanation: "Danh hiệu là một loại tên riêng đặc biệt, viết hoa chữ cái đầu của mỗi từ tạo thành danh hiệu đó.",
    mcq: {
      options: [
        "Không viết hoa vì danh hiệu không phải tên riêng",
        "Chỉ viết hoa chữ cái đầu tiên của cả cụm danh hiệu",
        "Viết hoa chữ cái đầu của mỗi từ tạo thành danh hiệu",
        "Viết hoa toàn bộ bằng chữ in hoa",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Danh hiệu là một dạng tên riêng đặc biệt, cần viết hoa theo quy tắc.",
        "Cách này bỏ sót việc viết hoa các từ quan trọng khác trong danh hiệu.",
        "Đúng — đây là quy tắc viết hoa danh hiệu (VD: Anh hùng Lao động).",
        "Viết hoa toàn bộ bằng chữ in hoa không đúng quy tắc chính tả thông thường.",
      ],
    },
  },
  {
    id: "cd-04-mcq-6",
    topicIds: ["CD-04"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây mắc lỗi viết hoa?',
    explanation: "\"nam\" trong tên người phải viết hoa (\"Nam\"), câu 3 viết sai vì không viết hoa tên riêng.",
    mcq: {
      options: [
        "Bạn Nam học ở Hà Nội.",
        "Cô giáo tên là Lê Thị Hoa.",
        "Bạn nam học rất giỏi Toán.",
        "Em thích đọc truyện Dế Mèn Phiêu Lưu Ký.",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Câu này viết hoa đúng tên riêng \"Nam\" và \"Hà Nội\".",
        "Câu này viết hoa đúng tên riêng \"Lê Thị Hoa\".",
        "Đúng — đây là câu sai, vì \"nam\" là tên riêng của bạn học sinh nhưng lại viết thường.",
        "Câu này viết hoa đúng tên tác phẩm.",
      ],
    },
  },
  {
    id: "cd-04-match-1",
    topicIds: ["CD-04"],
    level: "M2",
    questionType: "match",
    prompt: "Nối mỗi cách viết ở cột trái với đúng/sai ở cột phải.",
    explanation: "\"Nguyễn Văn An\" viết đúng (viết hoa đủ 3 tiếng); \"Nguyễn văn An\" viết sai (thiếu hoa \"Văn\"); \"Trường Tiểu học Kim Đồng\" viết đúng.",
    match: {
      leftItems: [
        { id: "l1", label: "Nguyễn Văn An" },
        { id: "l2", label: "Nguyễn văn An" },
        { id: "l3", label: "Trường Tiểu học Kim Đồng" },
      ],
      rightItems: [
        { id: "r1", label: "Viết sai" },
        { id: "r2", label: "Viết đúng" },
      ],
      correctPairs: [
        { leftId: "l1", rightId: "r2" },
        { leftId: "l2", rightId: "r1" },
        { leftId: "l3", rightId: "r2" },
      ],
    },
  },
  {
    id: "cd-04-mcq-7",
    topicIds: ["CD-04"],
    level: "M2",
    questionType: "mcq",
    prompt: "Danh từ chung đi kèm tên riêng (như \"sông\", \"núi\", \"thành phố\") có được viết hoa không?",
    explanation: "Danh từ chung đi kèm tên riêng KHÔNG viết hoa, trừ khi nó đứng đầu câu (khi đó viết hoa vì quy tắc đầu câu, không phải vì là tên riêng).",
    mcq: {
      options: [
        "Luôn luôn viết hoa vì đi kèm tên riêng",
        "Không viết hoa, trừ khi đứng đầu câu",
        "Chỉ viết hoa vào buổi sáng",
        "Viết hoa tuỳ theo sở thích người viết",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Danh từ chung không tự động được viết hoa chỉ vì đi kèm tên riêng.",
        "Đúng — đây là quy tắc chính xác.",
        "Đây không phải quy tắc chính tả, không có căn cứ.",
        "Chính tả có quy tắc rõ ràng, không tuỳ ý.",
      ],
    },
  },
  {
    id: "cd-04-mcq-8",
    topicIds: ["CD-04"],
    level: "M1",
    questionType: "mcq",
    prompt: "Chữ cái đầu câu luôn phải được viết như thế nào?",
    explanation: "Chữ cái đầu tiên của mỗi câu luôn phải viết hoa, đây là quy tắc bắt buộc, áp dụng cho mọi câu.",
    mcq: {
      options: ["Viết hoa", "Viết thường", "Tuỳ ý người viết", "Chỉ viết hoa nếu là tên riêng"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — chữ cái đầu câu luôn phải viết hoa.",
        "Đây là quy tắc sai — chữ đầu câu không được viết thường.",
        "Đây là quy tắc bắt buộc, không tuỳ ý.",
        "Chữ đầu câu viết hoa vì là đầu câu, không phụ thuộc vào việc đó có phải tên riêng hay không.",
      ],
    },
  },
  {
    id: "cd-04-fill-3",
    topicIds: ["CD-04"],
    level: "M2",
    questionType: "fill",
    prompt: 'Viết lại cho đúng chính tả: "bạn lan sống ở hà nội."',
    explanation: "\"Lan\" và \"Hà Nội\" là tên riêng, cần viết hoa; đầu câu cũng viết hoa.",
    fill: {
      acceptedAnswers: ["Bạn Lan sống ở Hà Nội."],
      strictMode: true,
      isSet: false,
    },
  },
];
