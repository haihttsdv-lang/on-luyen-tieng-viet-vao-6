import type { Exercise } from "@/data-access/types";

// TL-02 — Động từ và các loại động từ. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const TL02_EXERCISES: Exercise[] = [
  {
    id: "tl-02-mcq-1",
    topicIds: ["TL-02"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Trong câu "Em đang học bài.", từ nào là động từ?',
    explanation: "\"Học\" chỉ hoạt động của em — là động từ.",
    mcq: {
      options: ["Em", "đang", "học", "bài"],
      answerIndex: 2,
      distractorNotes: [
        "\"Em\" là đại từ nhân xưng, không phải động từ.",
        "\"Đang\" là từ chỉ thời gian đi kèm động từ, không phải bản thân động từ.",
        "Đúng — \"học\" chỉ hoạt động, là động từ.",
        "\"Bài\" là danh từ, không phải động từ.",
      ],
    },
  },
  {
    id: "tl-02-mcq-2",
    topicIds: ["TL-02"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ "yêu" trong câu "Em rất yêu mẹ." thuộc loại động từ nào?',
    explanation: "\"Yêu\" chỉ trạng thái tình cảm, không phải hoạt động cụ thể — là động từ chỉ trạng thái.",
    mcq: {
      options: ["Động từ chỉ hoạt động", "Động từ chỉ trạng thái", "Không phải động từ", "Danh từ"],
      answerIndex: 1,
      distractorNotes: [
        "\"Yêu\" không chỉ một hành động cụ thể như chạy, nhảy — đây là trạng thái tình cảm.",
        "Đúng — \"yêu\" chỉ trạng thái (tình cảm), là động từ chỉ trạng thái.",
        "\"Yêu\" vẫn là động từ.",
        "\"Yêu\" chỉ trạng thái, không phải danh từ.",
      ],
    },
  },
  {
    id: "tl-02-fill-1",
    topicIds: ["TL-02"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Động từ là từ chỉ hoạt động hoặc ___ của sự vật.",
    explanation: "Động từ chỉ hoạt động hoặc trạng thái của sự vật.",
    fill: { acceptedAnswers: ["trạng thái"], strictMode: false, isSet: false },
  },
];
