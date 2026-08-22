import type { Exercise } from "@/data-access/types";

// VA-08 — Viết thư. Dàn ý phỏng theo cấu trúc chung Mục 4.4. Bài văn mẫu
// tự biên soạn (Mục 10.1 hướng B).
export const VA08_EXERCISES: Exercise[] = [
  {
    id: "va-08-essay-1",
    topicIds: ["VA-08"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Viết thư cho ông bà ở quê kể về tình hình học tập của em ở trường.",
    explanation:
      "Thư cần đủ 3 phần: đầu thư (địa điểm, ngày tháng, lời xưng hô), nội dung chính (lý do viết thư, nội dung chia sẻ), cuối thư (lời chúc, lời chào, ký tên).",
    essay: {
      outline: [
        "Đầu thư: địa điểm, ngày tháng, lời xưng hô với ông bà",
        "Nêu lý do viết thư (hỏi thăm sức khoẻ, kể chuyện học tập)",
        "Nội dung chính: kể về tình hình học tập, những điều đáng nhớ ở trường",
        "Bày tỏ tình cảm, nỗi nhớ với ông bà",
        "Cuối thư: lời chúc, lời chào, ký tên",
      ],
      openingStyles: [
        "Mở đầu bằng lời hỏi thăm sức khoẻ ông bà",
        "Mở đầu bằng việc nhắc đến khoảng thời gian đã lâu chưa gặp",
        "Mở đầu bằng một kỷ niệm gần đây gắn với ông bà",
      ],
      rubric: [
        { criterion: "Đủ cấu trúc thư (đầu thư, nội dung, cuối thư)", points: 2 },
        { criterion: "Nội dung chính tập trung, đúng yêu cầu đề", points: 3 },
        { criterion: "Có tình cảm chân thực với người nhận", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        "Hà Nội, ngày 12 tháng 10 năm 2026\n\nÔng bà kính mến,\n\nCháu là Minh đây ạ. Đã lâu cháu chưa được về quê thăm ông bà nên cháu viết thư này để hỏi thăm sức khoẻ ông bà và kể cho ông bà nghe về việc học tập của cháu.\n\nDạo này ông bà có khoẻ không ạ? Cháu vẫn thường nhớ đến những buổi chiều được ông dạy cháu tưới rau, được bà kể chuyện cổ tích trước khi đi ngủ. Về việc học, cháu xin báo với ông bà là cuối kỳ vừa rồi cháu đạt học sinh giỏi, môn Tiếng Việt cháu được cô giáo khen viết văn tiến bộ nhiều. Cháu đang cố gắng ôn luyện thêm để chuẩn bị cho kỳ thi vào lớp 6 sắp tới. Có những lúc bài khó, cháu lại nhớ đến lời ông dặn: 'Có công mài sắt, có ngày nên kim', thế là cháu lại có thêm động lực để cố gắng.\n\nCháu mong hè này được về quê thăm ông bà, được ăn cơm bà nấu và nghe ông kể chuyện. Cháu kính chúc ông bà luôn mạnh khoẻ, sống vui cùng con cháu.\n\nCháu của ông bà,\nMinh",
    },
  },
];
