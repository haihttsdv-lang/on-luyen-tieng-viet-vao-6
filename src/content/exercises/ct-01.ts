import type { Exercise } from "@/data-access/types";

// CT-01 — Biện pháp tu từ: So sánh. Câu văn tự biên soạn (Mục 10.1 hướng B),
// không trích từ tác phẩm nào.
export const CT01_EXERCISES: Exercise[] = [
  {
    id: "ct-01-mcq-1",
    topicIds: ["CT-01"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Câu văn "Mặt trời đỏ như quả cầu lửa khổng lồ" sử dụng biện pháp tu từ nào?',
    explanation: "Câu văn dùng từ \"như\" để đối chiếu mặt trời với quả cầu lửa — đây là biện pháp so sánh.",
    mcq: {
      options: ["So sánh", "Nhân hoá", "Điệp từ", "Đảo ngữ"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — câu văn dùng từ \"như\" để so sánh mặt trời với quả cầu lửa.",
        "Nhân hoá là gán đặc điểm người cho vật, câu này không có yếu tố đó.",
        "Điệp từ là lặp lại từ ngữ, câu này không lặp từ.",
        "Đảo ngữ là thay đổi trật tự câu thông thường, câu này không có.",
      ],
    },
  },
  {
    id: "ct-01-mcq-2",
    topicIds: ["CT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: "Trong biện pháp so sánh, hai sự vật được so sánh với nhau cần có đặc điểm gì?",
    explanation: "Hai sự vật so sánh phải có nét tương đồng nào đó (hình dáng, màu sắc, âm thanh, hoạt động...) thì phép so sánh mới hợp lý.",
    mcq: {
      options: [
        "Phải hoàn toàn giống hệt nhau",
        "Phải có nét tương đồng nào đó (hình dáng, màu sắc...)",
        "Phải là hai sự vật cùng loại",
        "Không cần có điểm gì chung",
      ],
      answerIndex: 1,
      distractorNotes: [
        "So sánh không yêu cầu hai vế giống hệt nhau, chỉ cần có nét tương đồng.",
        "Đúng — cần có nét tương đồng để phép so sánh hợp lý và gợi hình.",
        "Hai vế so sánh thường khác loại nhưng có điểm chung nào đó (VD: mặt trời và quả cầu lửa).",
        "Nếu không có điểm chung, phép so sánh sẽ vô lý, khó hiểu.",
      ],
    },
  },
  {
    id: "ct-01-mcq-3",
    topicIds: ["CT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ nào trong câu "Tiếng suối trong như tiếng hát xa" là từ so sánh?',
    explanation: "Từ \"như\" là từ so sánh, nối hai vế \"tiếng suối trong\" và \"tiếng hát xa\".",
    mcq: {
      options: ["trong", "như", "xa", "tiếng"],
      answerIndex: 1,
      distractorNotes: [
        "\"Trong\" là tính từ miêu tả, không phải từ so sánh.",
        "Đúng — \"như\" là từ so sánh nối hai vế trong câu.",
        "\"Xa\" là tính từ miêu tả, không phải từ so sánh.",
        "\"Tiếng\" là danh từ, không phải từ so sánh.",
      ],
    },
  },
  {
    id: "ct-01-essay-1",
    topicIds: ["CT-01"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Những giọt sương sớm long lanh như những viên ngọc nhỏ treo trên đầu ngọn cỏ." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về biện pháp so sánh trong câu văn trên.',
    explanation:
      "Biện pháp so sánh \"giọt sương như viên ngọc\" giúp hình ảnh giọt sương trở nên lung linh, quý giá và đẹp đẽ hơn trong mắt người đọc.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp so sánh được sử dụng trong câu",
        "Nêu tác dụng của biện pháp so sánh đó (gợi hình, gợi cảm như thế nào)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp so sánh", points: 2 },
        { criterion: "Nêu đúng tác dụng gợi hình, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Những giọt sương sớm long lanh như những viên ngọc nhỏ treo trên đầu ngọn cỏ" đã vẽ nên một bức tranh buổi sáng thật đẹp. Tác giả so sánh giọt sương với viên ngọc qua từ "như". Nhờ phép so sánh này, những giọt sương vốn bình thường trở nên lấp lánh, quý giá như những viên ngọc thật sự. Người đọc như được chiêm ngưỡng một khung cảnh tinh khôi, trong trẻo của buổi sớm mai. Em cảm thấy rất thích thú khi hình dung ra cảnh những viên ngọc nhỏ xíu treo trên ngọn cỏ. Câu văn khiến em nhớ đến những buổi sáng đi bộ ra vườn cùng ông ngoại, nhìn ngắm sương sớm còn đọng trên lá.',
    },
  },
  {
    id: "ct-01-essay-2",
    topicIds: ["CT-01"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Hàng dừa nghiêng mình soi bóng xuống dòng sông, tán lá xoè rộng như những chiếc quạt khổng lồ." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về biện pháp so sánh trong câu văn trên.',
    explanation:
      "Biện pháp so sánh \"tán lá dừa như những chiếc quạt khổng lồ\" giúp hình dung rõ hình dáng xoè rộng, sinh động của tán lá dừa.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp so sánh được sử dụng trong câu",
        "Nêu tác dụng của biện pháp so sánh đó (gợi hình như thế nào)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp so sánh", points: 2 },
        { criterion: "Nêu đúng tác dụng gợi hình, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Hàng dừa nghiêng mình soi bóng xuống dòng sông, tán lá xoè rộng như những chiếc quạt khổng lồ" đã gợi cho em hình ảnh rất sinh động về hàng dừa quê hương. Tác giả so sánh tán lá dừa với những chiếc quạt khổng lồ qua từ "như". Nhờ phép so sánh này, tán lá dừa vốn chỉ là những chiếc lá dài trở nên có hình dáng cụ thể, rõ ràng và có phần ngộ nghĩnh, thú vị hơn trong tưởng tượng của người đọc. Em như nhìn thấy hàng dừa đang khe khẽ đung đưa, phe phẩy như đang quạt mát cho dòng sông. Hình ảnh này khiến em nhớ đến những buổi trưa hè được ngồi dưới bóng dừa mát rượi ở quê. Câu văn thật gợi cảm và giàu hình ảnh.',
    },
  },
];
