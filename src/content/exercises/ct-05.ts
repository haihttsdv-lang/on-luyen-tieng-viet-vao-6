import type { Exercise } from "@/data-access/types";

// CT-05 — Cái hay, cái đẹp của từ ngữ và hình ảnh. Câu văn tự biên soạn
// (Mục 10.1 hướng B), không trích từ tác phẩm nào.
export const CT05_EXERCISES: Exercise[] = [
  {
    id: "ct-05-mcq-1",
    topicIds: ["CT-05"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Trong câu "Nắng vàng rót mật xuống cánh đồng lúa chín", từ ngữ nào khiến hình ảnh trở nên đặc biệt gợi cảm nhất?',
    explanation: "\"Rót mật\" là cách dùng từ độc đáo, gợi hình ảnh ánh nắng sánh vàng, ấm áp như mật ong đang chảy xuống.",
    mcq: {
      options: ["nắng vàng", "rót mật", "cánh đồng", "lúa chín"],
      answerIndex: 1,
      distractorNotes: [
        "\"Nắng vàng\" chỉ là miêu tả thông thường, chưa phải điểm đặc biệt nhất.",
        "Đúng — \"rót mật\" là cách dùng từ sáng tạo, gợi hình ảnh ấm áp, ngọt ngào đặc biệt.",
        "\"Cánh đồng\" là danh từ chỉ địa điểm, không gợi cảm đặc biệt.",
        "\"Lúa chín\" là miêu tả thông thường, chưa phải điểm đặc biệt nhất.",
      ],
    },
  },
  {
    id: "ct-05-mcq-2",
    topicIds: ["CT-05"],
    level: "M2",
    questionType: "mcq",
    prompt: "Khi tìm \"từ hay nhất\" trong một câu văn, em nên tự hỏi điều gì?",
    explanation: "Cách kiểm tra một từ có hay không là thử thay nó bằng từ khác thông thường hơn, xem câu văn có mất đi cái hay không.",
    mcq: {
      options: [
        "Từ đó có phải từ Hán Việt không",
        "Nếu thay từ này bằng một từ thông thường hơn, câu văn có còn hay không",
        "Từ đó có bao nhiêu chữ cái",
        "Từ đó có xuất hiện nhiều lần trong bài không",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Từ Hán Việt hay thuần Việt không quyết định độ hay của từ.",
        "Đúng — đây là cách kiểm tra hiệu quả để nhận ra giá trị của từ ngữ.",
        "Số lượng chữ cái không liên quan đến cái hay của từ ngữ.",
        "Số lần xuất hiện không quyết định độ hay, một từ chỉ xuất hiện 1 lần vẫn có thể rất hay.",
      ],
    },
  },
  {
    id: "ct-05-mcq-3",
    topicIds: ["CT-05"],
    level: "M1",
    questionType: "mcq",
    prompt: "Loại từ nào thường được dùng để tạo nên cái hay, cái đẹp gợi tả trong câu văn?",
    explanation: "Từ láy giàu sức gợi (long lanh, rì rào, xào xạc, lung linh...) thường tạo nên cái hay, cái đẹp trong câu văn miêu tả.",
    mcq: {
      options: ["Từ láy gợi tả", "Đại từ nhân xưng", "Quan hệ từ", "Số từ"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — từ láy gợi tả (long lanh, rì rào...) thường tạo nên cái hay trong miêu tả.",
        "Đại từ nhân xưng (tôi, em, nó...) không đóng vai trò gợi tả, gợi cảm.",
        "Quan hệ từ (và, nhưng, vì...) không tạo nên cái hay gợi tả.",
        "Số từ (một, hai, vài...) không tạo nên cái hay gợi tả.",
      ],
    },
  },
  {
    id: "ct-05-essay-1",
    topicIds: ["CT-05"],
    level: "M4",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Gió thu se lạnh, lá vàng lác đác rơi, khẽ khàng đậu xuống mặt hồ trong veo." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về cái hay của từ ngữ trong câu văn trên.',
    explanation:
      "Các từ láy \"lác đác\", \"khẽ khàng\" và tính từ \"trong veo\" phối hợp tạo nên một khung cảnh mùa thu nhẹ nhàng, tĩnh lặng và đầy chất thơ.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra từ ngữ đặc biệt gợi tả, gợi cảm trong câu (từ láy, tính từ...)",
        "Nêu cái hay của từ ngữ đó (gợi hình ảnh, âm thanh, cảm giác gì)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng từ ngữ đặc biệt gợi tả, gợi cảm", points: 2 },
        { criterion: "Nêu đúng cái hay, cái đẹp của từ ngữ đó", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Gió thu se lạnh, lá vàng lác đác rơi, khẽ khàng đậu xuống mặt hồ trong veo" đã vẽ nên một bức tranh mùa thu thật nhẹ nhàng. Từ láy "lác đác" gợi hình ảnh những chiếc lá rơi thưa thớt, không dồn dập, còn "khẽ khàng" gợi sự nhẹ nhàng, êm ái khi lá chạm mặt nước. Cùng với tính từ "trong veo" miêu tả mặt hồ, cả câu văn tạo nên một không gian yên tĩnh, thơ mộng của mùa thu. Nếu thay "lác đác" bằng "nhiều" hay "khẽ khàng" bằng "rơi xuống" thông thường, câu văn sẽ mất đi vẻ đẹp nhẹ nhàng ấy. Em cảm thấy như đang được đứng bên hồ, tận hưởng không khí mùa thu yên bình. Câu văn khiến em nhớ đến những buổi chiều thu đi dạo cùng gia đình.',
    },
  },
];
