import type { Exercise } from "@/data-access/types";

// VA-04 — Văn tả con vật. Dàn ý phỏng theo cấu trúc chung Mục 4.4. Bài văn
// mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA04_EXERCISES: Exercise[] = [
  {
    id: "va-04-essay-1",
    topicIds: ["VA-04"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một con vật nuôi mà em yêu thích.",
    explanation:
      "Bài văn tả con vật cần tả ngoại hình và đặc biệt là hoạt động, thói quen của con vật để bài văn sinh động, có kỷ niệm gắn với người viết.",
    essay: {
      outline: [
        "Mở bài: giới thiệu con vật định tả (loài gì, có từ khi nào)",
        "Thân bài: tả bao quát hình dáng",
        "Thân bài: tả chi tiết các bộ phận nổi bật",
        "Thân bài: tả hoạt động, thói quen đặc trưng của con vật",
        "Kết bài: tình cảm, kỷ niệm của em với con vật",
      ],
      openingStyles: [
        "Giới thiệu lý do/hoàn cảnh nhà em có con vật đó",
        "Bắt đầu từ một thời điểm đặc biệt (ngày đầu tiên đem về nhà)",
        "Dẫn vào từ một âm thanh quen thuộc của con vật (tiếng gáy, tiếng sủa)",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới con vật định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng", points: 2 },
        { criterion: "Tả hoạt động, thói quen sinh động, có chi tiết riêng", points: 3 },
        { criterion: "Có cảm xúc, kỷ niệm chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Nhà em nuôi một chú mèo tên là Mun, đến nay đã được hai năm. Mun có bộ lông đen tuyền, mượt như nhung, chỉ có một đốm trắng nhỏ ở đầu chân trước. Đôi mắt Mun tròn xoe, màu vàng óng, mỗi khi nhìn vào bóng tối lại sáng lên long lanh. Đôi tai nhỏ luôn vểnh lên, lắng nghe mọi âm thanh xung quanh. Mun rất thích nằm cuộn tròn trên bậu cửa sổ để sưởi nắng vào buổi sáng, thỉnh thoảng lại vươn vai, duỗi người một cách lười biếng. Mỗi khi em đi học về, Mun luôn là người ra đón đầu tiên, chạy lại dụi đầu vào chân em rồi kêu 'meo meo' như muốn kể chuyện cả ngày ở nhà. Có lần em bị ốm, Mun cứ nằm im bên cạnh giường suốt cả buổi chiều, như thể đang lo lắng cho em vậy. Em rất yêu quý Mun và coi chú như một người bạn nhỏ trong gia đình.",
    },
  },
];
