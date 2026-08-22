import type { Exercise } from "@/data-access/types";

// NT-01 — Từ đồng nghĩa. Câu ví dụ do tự biên soạn (Mục 10.1 hướng B),
// không trích từ tác phẩm nào.
export const NT01_EXERCISES: Exercise[] = [
  {
    id: "nt-01-mcq-1",
    topicIds: ["NT-01"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ nào dưới đây đồng nghĩa với từ \"chăm chỉ\"?",
    explanation:
      "\"Siêng năng\" cùng chỉ đức tính chịu khó làm việc, học tập như \"chăm chỉ\". Ba từ còn lại chỉ những tính cách khác hẳn.",
    mcq: {
      options: ["siêng năng", "lười biếng", "nhút nhát", "vui vẻ"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — cùng nghĩa với \"chăm chỉ\".",
        "\"Lười biếng\" trái nghĩa với \"chăm chỉ\", không phải đồng nghĩa.",
        "\"Nhút nhát\" chỉ sự rụt rè, không liên quan đến chăm chỉ.",
        "\"Vui vẻ\" chỉ cảm xúc, không liên quan đến chăm chỉ.",
      ],
    },
  },
  {
    id: "nt-01-mcq-2",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ nào KHÔNG đồng nghĩa với từ \"vui vẻ\"?",
    explanation:
      "\"Buồn bã\" trái nghĩa với \"vui vẻ\". \"Vui tươi\", \"hớn hở\", \"phấn khởi\" đều là các từ đồng nghĩa với \"vui vẻ\".",
    mcq: {
      options: ["vui tươi", "hớn hở", "buồn bã", "phấn khởi"],
      answerIndex: 2,
      distractorNotes: [
        "\"Vui tươi\" đồng nghĩa với \"vui vẻ\" — không phải đáp án đúng cho câu hỏi này.",
        "\"Hớn hở\" đồng nghĩa với \"vui vẻ\" — không phải đáp án đúng cho câu hỏi này.",
        "Đúng — \"buồn bã\" trái nghĩa, không đồng nghĩa với \"vui vẻ\".",
        "\"Phấn khởi\" đồng nghĩa với \"vui vẻ\" — không phải đáp án đúng cho câu hỏi này.",
      ],
    },
  },
  {
    id: "nt-01-match-1",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "match",
    prompt: "Nối mỗi từ ở cột trái với từ đồng nghĩa của nó ở cột phải.",
    explanation:
      "chăm chỉ–siêng năng, xinh đẹp–xinh xắn, dũng cảm–gan dạ, vui vẻ–vui tươi là các cặp từ đồng nghĩa thường gặp.",
    match: {
      leftItems: [
        { id: "l1", label: "chăm chỉ" },
        { id: "l2", label: "xinh đẹp" },
        { id: "l3", label: "dũng cảm" },
        { id: "l4", label: "vui vẻ" },
      ],
      rightItems: [
        { id: "r1", label: "siêng năng" },
        { id: "r2", label: "xinh xắn" },
        { id: "r3", label: "gan dạ" },
        { id: "r4", label: "vui tươi" },
      ],
      correctPairs: [
        { leftId: "l1", rightId: "r1" },
        { leftId: "l2", rightId: "r2" },
        { leftId: "l3", rightId: "r3" },
        { leftId: "l4", rightId: "r4" },
      ],
    },
  },
  {
    id: "nt-01-fill-1",
    topicIds: ["NT-01"],
    level: "M3",
    questionType: "fill",
    prompt:
      "Tìm một từ đồng nghĩa với \"to lớn\" để điền vào chỗ trống cho phù hợp: \"Con voi có thân hình rất ___.\"",
    explanation:
      "\"To lớn\", \"khổng lồ\", \"đồ sộ\" đều mô tả kích thước rất lớn, phù hợp với ngữ cảnh miêu tả con voi.",
    fill: {
      acceptedAnswers: ["to lớn", "khổng lồ", "đồ sộ", "to"],
      strictMode: false,
      isSet: false,
    },
  },
  {
    id: "nt-01-mcq-3",
    topicIds: ["NT-01"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ đồng nghĩa là gì?",
    explanation: "Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau.",
    mcq: {
      options: [
        "Những từ có nghĩa giống nhau hoặc gần giống nhau",
        "Những từ có nghĩa trái ngược nhau",
        "Những từ giống nhau về âm nhưng khác nghĩa",
        "Những từ chỉ dùng trong văn viết",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là định nghĩa của từ đồng nghĩa.",
        "Đây là định nghĩa của từ trái nghĩa (NT-02).",
        "Đây là định nghĩa của từ đồng âm (NT-03).",
        "Từ đồng nghĩa được dùng cả trong văn nói và văn viết.",
      ],
    },
  },
  {
    id: "nt-01-mcq-4",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong hai từ đồng nghĩa "ăn" và "xơi", từ nào mang sắc thái trang trọng, lịch sự hơn?',
    explanation: "\"Xơi\" mang sắc thái trang trọng, lịch sự hơn \"ăn\" (từ trung tính, thông thường).",
    mcq: {
      options: ["ăn", "xơi", "Cả hai như nhau", "Không xác định được"],
      answerIndex: 1,
      distractorNotes: [
        "\"Ăn\" là từ trung tính, thông thường.",
        "Đúng — \"xơi\" mang sắc thái trang trọng, lịch sự hơn.",
        "Hai từ có sắc thái khác nhau rõ rệt.",
        "Có thể xác định được sắc thái của từng từ.",
      ],
    },
  },
  {
    id: "nt-01-mcq-5",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ nào đồng nghĩa với "nhanh nhẹn"?',
    explanation: "\"Nhanh nhẹn\" và \"lanh lợi\" đều chỉ sự nhanh nhạy, hoạt bát.",
    mcq: {
      options: ["chậm chạp", "lanh lợi", "im lặng", "yếu đuối"],
      answerIndex: 1,
      distractorNotes: [
        "\"Chậm chạp\" trái nghĩa với \"nhanh nhẹn\".",
        "Đúng — \"lanh lợi\" cùng chỉ sự nhanh nhạy, hoạt bát.",
        "\"Im lặng\" không liên quan đến tốc độ hay sự nhanh nhẹn.",
        "\"Yếu đuối\" không liên quan đến sự nhanh nhẹn.",
      ],
    },
  },
  {
    id: "nt-01-fill-2",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "fill",
    prompt: 'Điền một từ đồng nghĩa với "đẹp" vào chỗ trống: "Bức tranh này thật ___."',
    explanation: "\"Đẹp\", \"xinh\", \"tuyệt đẹp\" đều phù hợp để miêu tả bức tranh.",
    fill: { acceptedAnswers: ["đẹp", "xinh", "tuyệt đẹp", "đẹp đẽ"], strictMode: false, isSet: false },
  },
  {
    id: "nt-01-mcq-6",
    topicIds: ["NT-01"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Vì sao "hi sinh" và "chết" tuy đồng nghĩa nhưng không phải lúc nào cũng thay thế cho nhau được?',
    explanation: "\"Hi sinh\" mang sắc thái trang trọng, thường dùng cho người chết vì lý tưởng cao đẹp; \"chết\" là từ trung tính, dùng chung cho mọi trường hợp.",
    mcq: {
      options: [
        "Vì hai từ có nghĩa hoàn toàn khác nhau",
        "Vì hai từ khác nhau về sắc thái biểu cảm, không phải lúc nào cũng phù hợp ngữ cảnh như nhau",
        "Vì \"hi sinh\" là từ sai chính tả",
        "Vì \"chết\" chỉ dùng cho động vật",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Hai từ vẫn có nghĩa cơ bản giống nhau, đây chính là lý do chúng đồng nghĩa.",
        "Đúng — đây là điểm cần lưu ý khi dùng từ đồng nghĩa không hoàn toàn.",
        "\"Hi sinh\" không phải từ sai chính tả.",
        "\"Chết\" dùng được cho cả người và động vật.",
      ],
    },
  },
  {
    id: "nt-01-mcq-7",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Cặp từ nào dưới đây KHÔNG phải là cặp từ đồng nghĩa?',
    explanation: "\"To\" và \"nhỏ\" là cặp từ trái nghĩa, không phải đồng nghĩa.",
    mcq: {
      options: ["To – lớn", "Đẹp – xinh", "To – nhỏ", "Nhanh – mau"],
      answerIndex: 2,
      distractorNotes: [
        "\"To\" và \"lớn\" là cặp đồng nghĩa đúng.",
        "\"Đẹp\" và \"xinh\" là cặp đồng nghĩa đúng.",
        "Đúng — \"to\" và \"nhỏ\" là cặp từ trái nghĩa, không phải đồng nghĩa.",
        "\"Nhanh\" và \"mau\" là cặp đồng nghĩa đúng.",
      ],
    },
  },
  {
    id: "nt-01-mcq-8",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "mcq",
    prompt: "Vì sao cần dùng nhiều từ đồng nghĩa khác nhau khi viết văn thay vì lặp lại một từ?",
    explanation: "Dùng đa dạng từ đồng nghĩa giúp bài viết phong phú, tránh nhàm chán, đồng thời phù hợp với sắc thái từng câu.",
    mcq: {
      options: [
        "Để bài viết dài hơn",
        "Để bài viết phong phú, tránh lặp từ nhàm chán và phù hợp sắc thái từng câu",
        "Để bài viết khó hiểu hơn",
        "Không có lý do gì đặc biệt",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Độ dài bài viết không phải mục đích chính.",
        "Đúng — đây là lý do quan trọng để sử dụng từ đồng nghĩa linh hoạt.",
        "Mục đích ngược lại — giúp bài viết dễ đọc, sinh động hơn.",
        "Đây là một kỹ năng viết quan trọng, có lý do rõ ràng.",
      ],
    },
  },
  {
    id: "nt-01-fill-3",
    topicIds: ["NT-01"],
    level: "M2",
    questionType: "fill",
    prompt: 'Điền một từ đồng nghĩa với "buồn" vào chỗ trống: "Nghe tin đó, em cảm thấy rất ___."',
    explanation: "\"Buồn\", \"buồn bã\", \"buồn rầu\" đều phù hợp với ngữ cảnh này.",
    fill: { acceptedAnswers: ["buồn", "buồn bã", "buồn rầu"], strictMode: false, isSet: false },
  },
];
