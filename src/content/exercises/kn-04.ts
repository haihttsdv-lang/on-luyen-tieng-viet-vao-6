import type { Exercise } from "@/data-access/types";

// KN-04 — Kỹ năng lập dàn ý nhanh và phân bổ thời gian làm bài. Câu hỏi tự
// biên soạn (Mục 10.1 hướng B).
export const KN04_EXERCISES: Exercise[] = [
  {
    id: "kn-04-mcq-1",
    topicIds: ["KN-04"],
    level: "M1",
    questionType: "mcq",
    prompt: "Khi lập dàn ý nhanh trước khi viết bài, em nên làm gì?",
    explanation: "Dàn ý nhanh chỉ cần gạch từ khoá các ý chính, không viết thành câu hoàn chỉnh để tiết kiệm thời gian.",
    mcq: {
      options: [
        "Viết dàn ý thành các câu văn hoàn chỉnh",
        "Gạch nhanh 3-5 ý chính bằng từ khoá",
        "Bỏ qua bước lập dàn ý để viết bài nhanh hơn",
        "Chép lại đề bài thành dàn ý",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Viết câu hoàn chỉnh cho dàn ý sẽ mất nhiều thời gian, không đúng mục đích của bước lập dàn ý nhanh.",
        "Đúng — dàn ý nhanh chỉ cần từ khoá các ý chính.",
        "Bỏ qua dàn ý dễ khiến bài viết thiếu ý hoặc lan man.",
        "Chép lại đề bài không phải là lập dàn ý.",
      ],
    },
  },
  {
    id: "kn-04-mcq-2",
    topicIds: ["KN-04"],
    level: "M2",
    questionType: "mcq",
    prompt: "Nguyên tắc nào sau đây ĐÚNG khi phân bổ thời gian làm bài thi?",
    explanation: "Nên làm phần mình chắc điểm trước, để tránh bị kẹt ở câu khó ngay từ đầu làm ảnh hưởng các phần sau.",
    mcq: {
      options: [
        "Luôn làm câu đầu tiên trong đề trước, bất kể khó hay dễ",
        "Làm phần mình chắc điểm trước, phần khó hơn để sau",
        "Dành toàn bộ thời gian cho câu khó nhất trước tiên",
        "Không cần ước lượng thời gian, làm đến đâu hay đến đó",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Câu đầu tiên trong đề không nhất thiết là câu dễ nhất.",
        "Đúng — nên ưu tiên phần chắc điểm trước.",
        "Dồn hết thời gian cho câu khó nhất dễ khiến các câu dễ khác không kịp làm.",
        "Không ước lượng thời gian dễ dẫn đến thiếu thời gian cho phần quan trọng.",
      ],
    },
  },
  {
    id: "kn-04-fill-1",
    topicIds: ["KN-04"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Nên dành khoảng 5 phút cuối giờ thi để ___ lại bài làm trước khi nộp.",
    explanation: "Dành thời gian cuối giờ để soát lại bài giúp phát hiện và sửa các lỗi trước khi nộp.",
    fill: { acceptedAnswers: ["soát", "soát lại"], strictMode: false, isSet: false },
  },
  {
    id: "kn-04-mcq-3",
    topicIds: ["KN-04"],
    level: "M3",
    questionType: "mcq",
    prompt:
      "Một đề thi 60 phút có 3 phần điểm gần bằng nhau: luyện từ và câu, đọc hiểu-cảm thụ, tập làm văn. Cách phân bổ thời gian nào hợp lý?",
    explanation:
      "Khi các phần có tỷ trọng điểm gần bằng nhau, nên chia thời gian gần bằng nhau cho mỗi phần, khoảng 20 phút/phần.",
    mcq: {
      options: [
        "Dành 50 phút cho tập làm văn, 10 phút còn lại cho hai phần kia",
        "Chia thời gian gần bằng nhau, khoảng 20 phút mỗi phần",
        "Dành toàn bộ thời gian cho phần luyện từ và câu",
        "Bỏ qua phần đọc hiểu-cảm thụ để tập trung viết văn",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Dồn quá nhiều thời gian cho một phần khiến các phần còn lại không đủ thời gian, dù điểm tương đương.",
        "Đúng — các phần có tỷ trọng điểm gần bằng nhau nên chia thời gian gần bằng nhau.",
        "Bỏ hẳn các phần khác sẽ mất điểm ở những phần đó.",
        "Bỏ qua một phần có điểm tương đương sẽ mất nhiều điểm oan.",
      ],
    },
  },
];
