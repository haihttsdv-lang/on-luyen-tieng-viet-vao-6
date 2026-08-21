import type { Exercise } from "@/data-access/types";

// KN-01 — Kỹ năng làm bài trắc nghiệm. Câu hỏi tự biên soạn để minh hoạ
// đúng quy trình dạy ở phần lesson (Mục 10.1 hướng B).
export const KN01_EXERCISES: Exercise[] = [
  {
    id: "kn-01-mcq-1",
    topicIds: ["KN-01"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ nào KHÔNG đồng nghĩa với từ \"chăm chỉ\"?",
    explanation:
      "Đề có từ phủ định \"KHÔNG\" — đây là dạng bẫy phổ biến nhất. \"Lười biếng\" trái nghĩa với \"chăm chỉ\" nên là đáp án đúng cho câu hỏi này.",
    mcq: {
      options: ["siêng năng", "cần cù", "lười biếng", "chịu khó"],
      answerIndex: 2,
      distractorNotes: [
        "\"Siêng năng\" đồng nghĩa với \"chăm chỉ\" — không phải đáp án cho câu hỏi KHÔNG đồng nghĩa.",
        "\"Cần cù\" đồng nghĩa với \"chăm chỉ\" — không phải đáp án cho câu hỏi KHÔNG đồng nghĩa.",
        "Đúng — \"lười biếng\" trái nghĩa, không đồng nghĩa với \"chăm chỉ\".",
        "\"Chịu khó\" đồng nghĩa với \"chăm chỉ\" — không phải đáp án cho câu hỏi KHÔNG đồng nghĩa.",
      ],
    },
  },
  {
    id: "kn-01-mcq-2",
    topicIds: ["KN-01"],
    level: "M2",
    questionType: "mcq",
    prompt: "Đáp án nào dưới đây có khả năng cao là một \"bẫy\" trong đề trắc nghiệm?",
    explanation:
      "Đáp án dùng từ tuyệt đối hoá (\"luôn luôn\", \"tất cả\", \"không bao giờ\") thường là bẫy, vì rất ít quy tắc ngôn ngữ đúng trong 100% trường hợp.",
    mcq: {
      options: [
        "\"Từ này thường được dùng trong văn nói.\"",
        "\"Từ này luôn luôn được viết hoa trong mọi trường hợp.\"",
        "\"Từ này có thể xuất hiện ở đầu câu.\"",
        "\"Từ này phổ biến trong văn miêu tả.\"",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đáp án này dùng từ \"thường\" — có mức độ, không tuyệt đối hoá, ít khả năng là bẫy.",
        "Đúng — từ \"luôn luôn... mọi trường hợp\" tuyệt đối hoá, cần cảnh giác.",
        "Đáp án này nêu khả năng (\"có thể\"), không tuyệt đối hoá.",
        "Đáp án này không dùng từ tuyệt đối hoá.",
      ],
    },
  },
  {
    id: "kn-01-fill-1",
    topicIds: ["KN-01"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Khi làm bài trắc nghiệm, nên đọc kỹ đề để không bỏ sót các từ ___ như \"không\", \"KHÔNG phải\".",
    explanation: "Các từ \"không\", \"KHÔNG phải\" là từ phủ định — dễ bị đọc sót nhất khi làm bài nhanh.",
    fill: { acceptedAnswers: ["phủ định"], strictMode: false, isSet: false },
  },
  {
    id: "kn-01-mcq-3",
    topicIds: ["KN-01"],
    level: "M3",
    questionType: "mcq",
    prompt:
      "Một câu hỏi trắc nghiệm có 2 đáp án gần giống nhau, chỉ khác một từ. Em nên làm gì?",
    explanation:
      "Khi hai đáp án gần giống nhau, sự khác biệt nhỏ đó chính là điểm mấu chốt để phân biệt đáp án đúng — cần đọc kỹ từng chữ thay vì đoán nhanh.",
    mcq: {
      options: [
        "Chọn đáp án xuất hiện trước vì thường đúng hơn",
        "Đọc thật kỹ từng chữ khác nhau giữa hai đáp án rồi đối chiếu với đề bài",
        "Chọn đáp án dài hơn vì thường đầy đủ hơn",
        "Bỏ qua câu này vì chắc chắn đề có lỗi",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Không có quy tắc nào nói đáp án xuất hiện trước luôn đúng hơn — đây là ngộ nhận cần tránh.",
        "Đúng — đọc kỹ điểm khác biệt và đối chiếu với đề là cách làm đúng.",
        "Đáp án dài hơn không đồng nghĩa với đúng hơn — đây là ngộ nhận cần tránh.",
        "Bỏ qua câu hỏi không phải là kỹ năng làm bài đúng đắn.",
      ],
    },
  },
];
