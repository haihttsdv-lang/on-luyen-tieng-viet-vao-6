import type { Exercise } from "@/data-access/types";

// NT-03 — Từ đồng âm. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const NT03_EXERCISES: Exercise[] = [
  {
    id: "nt-03-mcq-1",
    topicIds: ["NT-03"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ đồng âm là gì?",
    explanation: "Từ đồng âm là những từ giống nhau về âm thanh nhưng khác nhau hoàn toàn về nghĩa, không có liên hệ gì với nhau.",
    mcq: {
      options: [
        "Những từ giống nhau về âm nhưng nghĩa không liên quan gì đến nhau",
        "Những từ có nghĩa giống nhau nhưng âm khác nhau",
        "Những từ có nghĩa gốc và nghĩa chuyển liên quan đến nhau",
        "Những từ trái nghĩa nhau",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là định nghĩa của từ đồng âm.",
        "Đây là định nghĩa của từ đồng nghĩa (NT-01), không phải từ đồng âm.",
        "Đây là định nghĩa của từ nhiều nghĩa (NT-04), không phải từ đồng âm.",
        "Đây là định nghĩa của từ trái nghĩa (NT-02), không phải từ đồng âm.",
      ],
    },
  },
  {
    id: "nt-03-mcq-2",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Trong câu "Con ngựa đá con ngựa đá.", hai từ "đá" có quan hệ gì với nhau?',
    explanation: "\"Đá\" thứ nhất là động từ (hành động đá), \"đá\" thứ hai là danh từ (chất liệu đá) — hai từ giống âm nhưng nghĩa hoàn toàn không liên quan, đây là từ đồng âm.",
    mcq: {
      options: ["Đồng nghĩa", "Trái nghĩa", "Đồng âm", "Nhiều nghĩa (cùng gốc)"],
      answerIndex: 2,
      distractorNotes: [
        "Hai từ \"đá\" không cùng nghĩa.",
        "Hai từ \"đá\" không trái nghĩa nhau, chúng chỉ giống âm mà nghĩa không liên quan.",
        "Đúng — hai từ \"đá\" giống âm nhưng nghĩa hoàn toàn khác nhau, không liên hệ.",
        "Từ nhiều nghĩa cần các nghĩa có liên hệ với nhau, ở đây hai nghĩa \"đá\" không liên quan.",
      ],
    },
  },
  {
    id: "nt-03-fill-1",
    topicIds: ["NT-03"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Muốn biết một từ đồng âm đang mang nghĩa nào, cần dựa vào ___ của câu.",
    explanation: "Phải dựa vào ngữ cảnh của câu mới xác định được từ đồng âm đang mang nghĩa nào.",
    fill: { acceptedAnswers: ["ngữ cảnh"], strictMode: false, isSet: false },
  },
  {
    id: "nt-03-mcq-3",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Bàn tay em rất khéo léo. Cả nhà cùng ngồi bàn bạc kế hoạch đi chơi.", hai từ "bàn" có quan hệ gì?',
    explanation: "\"Bàn\" thứ nhất (bàn tay) chỉ bộ phận cơ thể, \"bàn\" thứ hai (bàn bạc) chỉ hành động trao đổi ý kiến — hai nghĩa hoàn toàn không liên quan, là từ đồng âm.",
    mcq: {
      options: ["Đồng nghĩa", "Đồng âm", "Trái nghĩa", "Nhiều nghĩa (cùng gốc)"],
      answerIndex: 1,
      distractorNotes: [
        "Hai từ \"bàn\" không cùng nghĩa.",
        "Đúng — hai nghĩa của \"bàn\" hoàn toàn không liên quan đến nhau.",
        "Hai từ \"bàn\" không đối lập nhau về nghĩa.",
        "Từ nhiều nghĩa cần các nghĩa có liên hệ, ở đây hai nghĩa \"bàn\" không liên quan gì.",
      ],
    },
  },
  {
    id: "nt-03-mcq-4",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây có hiện tượng từ đồng âm?',
    explanation: "\"Đường\" trong \"con đường\" (lối đi) và \"đường\" trong \"vị đường\" (chất tạo ngọt) là hai nghĩa hoàn toàn không liên quan — từ đồng âm.",
    mcq: {
      options: [
        "Em đi trên con đường quen thuộc. Mẹ cho thêm đường vào cốc nước chanh.",
        "Em rất chăm chỉ học bài.",
        "Bầu trời hôm nay trong xanh.",
        "Chú mèo đang ngủ trên ghế.",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"đường\" (lối đi) và \"đường\" (chất ngọt) là từ đồng âm.",
        "Câu này không có từ đồng âm nào.",
        "Câu này không có từ đồng âm nào.",
        "Câu này không có từ đồng âm nào.",
      ],
    },
  },
  {
    id: "nt-03-fill-2",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "fill",
    prompt: 'Điền từ còn thiếu: Đặc điểm quan trọng nhất của từ đồng âm là các nghĩa của chúng hoàn toàn ___ liên quan đến nhau.',
    explanation: "Từ đồng âm có các nghĩa hoàn toàn không liên quan đến nhau, chỉ giống nhau về âm thanh.",
    fill: { acceptedAnswers: ["không"], strictMode: false, isSet: false },
  },
  {
    id: "nt-03-mcq-5",
    topicIds: ["NT-03"],
    level: "M1",
    questionType: "mcq",
    prompt: "Điều gì KHÔNG đúng khi nói về từ đồng âm?",
    explanation: "Từ đồng âm có nghĩa hoàn toàn không liên quan — nói \"có phần nghĩa chung\" là sai, đây là đặc điểm của từ nhiều nghĩa (NT-04).",
    mcq: {
      options: [
        "Đọc/viết giống hệt nhau",
        "Nghĩa hoàn toàn không liên quan đến nhau",
        "Cần dựa vào ngữ cảnh để xác định nghĩa",
        "Luôn có một phần nghĩa chung giữa các từ",
      ],
      answerIndex: 3,
      distractorNotes: [
        "Đây là đặc điểm đúng của từ đồng âm.",
        "Đây là đặc điểm đúng của từ đồng âm.",
        "Đây là đặc điểm đúng của từ đồng âm.",
        "Đúng — đây là điều SAI; từ đồng âm không có phần nghĩa chung nào (khác với từ nhiều nghĩa).",
      ],
    },
  },
  {
    id: "nt-03-mcq-6",
    topicIds: ["NT-03"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Trong câu "Chân bàn bị gãy. Em bị đau chân khi chạy.", hai từ "chân" có phải từ đồng âm không?',
    explanation: "Hai từ \"chân\" này thực chất có liên hệ về nghĩa (đều chỉ phần dưới cùng, nơi tiếp xúc/đỡ) — đây là từ nhiều nghĩa (NT-04), không phải từ đồng âm.",
    mcq: {
      options: [
        "Có, vì đọc giống nhau",
        "Không, vì hai nghĩa có liên hệ với nhau (đều chỉ phần dưới cùng/đỡ) — đây là từ nhiều nghĩa",
        "Có, vì viết giống nhau",
        "Không, vì đây là hai từ hoàn toàn khác nhau",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đọc giống nhau chỉ là điều kiện cần, chưa đủ để kết luận là từ đồng âm — cần xét nghĩa có liên quan không.",
        "Đúng — đây là ví dụ về từ nhiều nghĩa (nghĩa gốc và nghĩa chuyển có liên hệ), không phải từ đồng âm.",
        "Viết giống nhau chỉ là điều kiện cần, chưa đủ để kết luận là từ đồng âm.",
        "Đây vẫn là cùng một từ \"chân\", chỉ khác nghĩa gốc/nghĩa chuyển.",
      ],
    },
  },
  {
    id: "nt-03-match-1",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "match",
    prompt: "Nối mỗi cặp câu có từ đồng âm ở cột trái với đúng nghĩa của từ được gạch dưới ở cột phải (từ \"đá\").",
    explanation: "\"Em đá bóng.\" — đá là động từ (hành động); \"Viên đá này rất cứng.\" — đá là danh từ (chất liệu).",
    match: {
      leftItems: [
        { id: "l1", label: "Em đá bóng." },
        { id: "l2", label: "Viên đá này rất cứng." },
      ],
      rightItems: [
        { id: "r1", label: "Đá là danh từ (chất liệu)" },
        { id: "r2", label: "Đá là động từ (hành động)" },
      ],
      correctPairs: [
        { leftId: "l1", rightId: "r2" },
        { leftId: "l2", rightId: "r1" },
      ],
    },
  },
  {
    id: "nt-03-mcq-7",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Em kê lại cái bàn học. Cả lớp bàn nhau chuẩn bị văn nghệ.", hai từ "bàn" có quan hệ gì?',
    explanation: "\"Bàn\" thứ nhất (cái bàn) chỉ đồ vật, \"bàn\" thứ hai (bàn nhau) chỉ hành động trao đổi ý kiến — hai nghĩa hoàn toàn không liên quan, là từ đồng âm.",
    mcq: {
      options: ["Đồng nghĩa", "Trái nghĩa", "Đồng âm", "Nhiều nghĩa (cùng gốc)"],
      answerIndex: 2,
      distractorNotes: [
        "Hai từ \"bàn\" không cùng nghĩa.",
        "Hai từ \"bàn\" không đối lập nhau về nghĩa.",
        "Đúng — hai nghĩa của \"bàn\" (đồ vật và hành động trao đổi) hoàn toàn không liên quan đến nhau.",
        "Từ nhiều nghĩa cần các nghĩa có liên hệ, ở đây hai nghĩa \"bàn\" không liên quan gì.",
      ],
    },
  },
  {
    id: "nt-03-mcq-8",
    topicIds: ["NT-03"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Trong câu "Lồng chim rất đẹp. Áo len được lồng một lớp vải bên trong.", hai từ "lồng" có quan hệ gì?',
    explanation: "\"Lồng\" thứ nhất (lồng chim) là danh từ chỉ đồ vật; \"lồng\" thứ hai (lồng vải) là động từ chỉ hành động — hai nghĩa không liên quan, là từ đồng âm.",
    mcq: {
      options: ["Đồng nghĩa", "Đồng âm", "Trái nghĩa", "Nhiều nghĩa (cùng gốc)"],
      answerIndex: 1,
      distractorNotes: [
        "Hai từ \"lồng\" không cùng nghĩa.",
        "Đúng — hai nghĩa của \"lồng\" (đồ vật và hành động) không liên quan đến nhau.",
        "Hai từ \"lồng\" không đối lập nhau về nghĩa.",
        "Từ nhiều nghĩa cần các nghĩa có liên hệ, ở đây hai nghĩa \"lồng\" không liên quan.",
      ],
    },
  },
  {
    id: "nt-03-mcq-9",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "mcq",
    prompt: "Vì sao cần phân biệt từ đồng âm với từ nhiều nghĩa?",
    explanation: "Phân biệt đúng giúp hiểu chính xác nghĩa của từ trong từng ngữ cảnh, tránh nhầm lẫn khi làm bài tập về nghĩa của từ.",
    mcq: {
      options: [
        "Để bài làm dài hơn",
        "Để hiểu đúng nghĩa từ trong ngữ cảnh, tránh nhầm lẫn khi làm bài",
        "Vì hai khái niệm này hoàn toàn giống nhau",
        "Không cần thiết phải phân biệt",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây không phải mục đích của việc phân biệt hai khái niệm.",
        "Đúng — đây là lý do quan trọng để phân biệt đúng hai hiện tượng ngôn ngữ này.",
        "Hai khái niệm khác nhau rõ rệt: từ đồng âm không liên quan nghĩa, từ nhiều nghĩa có liên quan.",
        "Việc phân biệt rất cần thiết để làm đúng các dạng bài tập về từ vựng.",
      ],
    },
  },
];
