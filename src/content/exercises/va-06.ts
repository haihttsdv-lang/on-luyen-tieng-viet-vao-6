import type { Exercise } from "@/data-access/types";

// VA-06 — Kể chuyện được chứng kiến hoặc tham gia. Dàn ý phỏng theo cấu
// trúc chung Mục 4.4. Bài văn mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA06_EXERCISES: Exercise[] = [
  {
    id: "va-06-essay-1",
    topicIds: ["VA-06"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Kể lại một việc tốt em đã làm hoặc chứng kiến khiến em nhớ mãi.",
    explanation:
      "Bài văn kể chuyện có thật cần kể theo trình tự thời gian, có chi tiết cụ thể (không chung chung) và nêu cảm nghĩ, bài học rút ra.",
    essay: {
      outline: [
        "Mở bài: giới thiệu câu chuyện (xảy ra khi nào, ở đâu, ai liên quan)",
        "Thân bài: kể diễn biến câu chuyện theo trình tự thời gian",
        "Thân bài: kể tình huống đáng nhớ nhất (cao trào)",
        "Thân bài: kể kết thúc câu chuyện",
        "Kết bài: cảm nghĩ, bài học rút ra",
      ],
      openingStyles: [
        "Giới thiệu thời gian, địa điểm xảy ra câu chuyện",
        "Bắt đầu từ cảm xúc hiện tại khi nhớ lại câu chuyện",
        "Dẫn vào từ một câu nói ấn tượng trong câu chuyện",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới câu chuyện",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Kể đúng trình tự thời gian, rõ ràng", points: 2 },
        { criterion: "Có chi tiết cụ thể, sinh động ở tình huống cao trào", points: 3 },
        { criterion: "Có cảm nghĩ, bài học rút ra rõ ràng", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Chiều hôm ấy, trên đường đi học về, em gặp một cụ già đang đứng loay hoay bên vệ đường, tay run run cầm chiếc gậy, không dám bước qua vì dòng xe cộ đông đúc. Thấy vậy, em liền chạy tới, lễ phép hỏi: 'Bà ơi, bà có cần cháu giúp qua đường không ạ?' Cụ mỉm cười gật đầu, ánh mắt đầy biết ơn. Em nhẹ nhàng nắm lấy tay cụ, chờ lúc đường vắng rồi dắt cụ qua từng bước một, mắt luôn để ý xe cộ hai bên. Khi sang đến vỉa hè bên kia, cụ vuốt tóc em và nói: 'Cảm ơn cháu, cháu ngoan quá.' Nghe vậy, em cảm thấy trong lòng vui sướng lạ thường, dù chỉ là một việc làm rất nhỏ. Trên đường về nhà, em cứ nghĩ mãi về nụ cười của cụ già lúc ấy. Em nhận ra rằng chỉ cần một hành động nhỏ, đúng lúc, cũng có thể mang lại niềm vui lớn cho người khác. Từ đó, em càng cố gắng quan tâm, giúp đỡ mọi người xung quanh nhiều hơn.",
    },
  },
];
