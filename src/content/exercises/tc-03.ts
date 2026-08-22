import type { Exercise } from "@/data-access/types";

// TC-03 — Từ ghép: ghép tổng hợp và ghép phân loại. Ví dụ tự biên soạn (Mục
// 10.1 hướng B), cố ý tránh mọi từ trong DISPUTED_WORDS (FR-D03/D04).
export const TC03_EXERCISES: Exercise[] = [
  {
    id: "tc-03-mcq-1",
    topicIds: ["TC-03"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Từ "quần áo" là từ ghép loại nào?',
    explanation: "\"Quần\" và \"áo\" đều là trang phục, có nghĩa gần nhau và bình đẳng — đây là từ ghép tổng hợp.",
    mcq: {
      options: ["Ghép tổng hợp", "Ghép phân loại", "Từ láy", "Từ đơn"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"quần\" và \"áo\" bình đẳng về nghĩa, cùng chỉ chung \"trang phục\".",
        "Ghép phân loại cần một tiếng thu hẹp nghĩa của tiếng kia, ở đây không có quan hệ đó.",
        "Cả hai tiếng đều có nghĩa riêng rõ ràng, đây là từ ghép chứ không phải từ láy.",
        "\"Quần áo\" gồm hai tiếng, không phải từ đơn.",
      ],
    },
  },
  {
    id: "tc-03-mcq-2",
    topicIds: ["TC-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ "xe đạp" là từ ghép loại nào?',
    explanation: "\"Đạp\" thu hẹp, phân loại rõ cho \"xe\" (loại xe đi bằng cách đạp) — đây là từ ghép phân loại.",
    mcq: {
      options: ["Ghép tổng hợp", "Ghép phân loại", "Từ láy", "Từ đơn"],
      answerIndex: 1,
      distractorNotes: [
        "Ghép tổng hợp cần hai tiếng bình đẳng về nghĩa, ở đây \"đạp\" đang bổ sung, phân loại cho \"xe\".",
        "Đúng — \"đạp\" phân loại cụ thể cho \"xe\", khác với xe máy, xe hơi.",
        "Cả hai tiếng đều có nghĩa riêng rõ ràng, đây là từ ghép chứ không phải từ láy.",
        "\"Xe đạp\" gồm hai tiếng, không phải từ đơn.",
      ],
    },
  },
  {
    id: "tc-03-fill-1",
    topicIds: ["TC-03"],
    level: "M1",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Từ ghép là từ được tạo thành bằng cách ghép các tiếng có quan hệ với nhau về ___.",
    explanation: "Từ ghép có quan hệ về nghĩa giữa các tiếng — khác với từ láy có quan hệ về âm.",
    fill: { acceptedAnswers: ["nghĩa"], strictMode: false, isSet: false },
  },
  {
    id: "tc-03-mcq-3",
    topicIds: ["TC-03"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Trong hai từ "bàn ghế" và "hoa hồng", từ nào là từ ghép phân loại?',
    explanation: "\"Bàn ghế\" là ghép tổng hợp (hai đồ vật bình đẳng); \"hoa hồng\" là ghép phân loại (\"hồng\" phân loại cụ thể cho \"hoa\").",
    mcq: {
      options: ["Bàn ghế", "Hoa hồng", "Cả hai đều là ghép tổng hợp", "Cả hai đều là ghép phân loại"],
      answerIndex: 1,
      distractorNotes: [
        "\"Bàn ghế\" là ghép tổng hợp — hai đồ vật bình đẳng, cùng chỉ chung \"đồ đạc\".",
        "Đúng — \"hồng\" thu hẹp, phân loại cụ thể cho \"hoa\", chỉ riêng loại hoa hồng.",
        "\"Hoa hồng\" là ghép phân loại, không phải ghép tổng hợp.",
        "\"Bàn ghế\" là ghép tổng hợp, không phải ghép phân loại.",
      ],
    },
  },
];
