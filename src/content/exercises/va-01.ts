import type { Exercise } from "@/data-access/types";

// VA-01 — Văn tả người. Dàn ý phỏng theo cấu trúc chung Mục 4.4. Bài văn
// mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA01_EXERCISES: Exercise[] = [
  {
    id: "va-01-essay-1",
    topicIds: ["VA-01"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một người thân trong gia đình mà em yêu quý nhất.",
    explanation:
      "Bài văn tả người cần tả ngoại hình bao quát rồi chi tiết, sau đó tả tính cách qua hành động, lời nói cụ thể, không liệt kê tính từ suông.",
    essay: {
      outline: [
        "Mở bài: giới thiệu người định tả (là ai, quan hệ với em)",
        "Thân bài: tả bao quát (tuổi, dáng người, ấn tượng chung)",
        "Thân bài: tả chi tiết ngoại hình (khuôn mặt, mắt, tóc, trang phục...)",
        "Thân bài: tả tính cách qua hành động, lời nói cụ thể",
        "Kết bài: tình cảm của em với người đó",
      ],
      openingStyles: [
        "Giới thiệu vị trí hoặc lý do nhắc đến người đó, gắn với một kỷ niệm",
        "Bắt đầu từ một thời điểm đặc biệt (một buổi tối, một lần ốm...)",
        "Dẫn vào từ một âm thanh, hình ảnh gắn với người đó (VD tiếng ho quen thuộc của bà)",
        "Bắt đầu bằng một câu ca dao, tục ngữ về tình cảm gia đình rồi dẫn tới người đó",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng, có chi tiết cụ thể", points: 2 },
        { criterion: "Tả tính cách qua hành động, lời nói cụ thể (không chỉ tính từ suông)", points: 3 },
        { criterion: "Có cảm xúc, kỷ niệm chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trong gia đình, người em yêu quý nhất là bà nội. Bà năm nay đã ngoài 60 tuổi, dáng người nhỏ nhắn nhưng đi lại vẫn nhanh nhẹn. Khuôn mặt bà có nhiều nếp nhăn theo năm tháng, nhưng đôi mắt vẫn sáng và ánh lên vẻ hiền từ mỗi khi nhìn em. Mái tóc bà đã bạc gần hết, thường được búi gọn gàng sau gáy. Bà hay mặc những bộ quần áo giản dị, màu nâu hoặc xám, phù hợp với dáng vẻ chân chất của người phụ nữ nông thôn. Điều em nhớ nhất ở bà không phải là vẻ ngoài mà là sự ân cần, chu đáo trong từng việc nhỏ. Mỗi khi em đi học về muộn, bà luôn đứng ở cổng ngóng ra, dù trời nắng hay mưa. Có lần em bị điểm kém, sợ bị mắng, nhưng bà chỉ nhẹ nhàng xoa đầu em và nói: 'Lần sau cháu cố gắng hơn là được.' Chính sự bao dung ấy khiến em càng thêm yêu quý và kính trọng bà. Em mong bà luôn khoẻ mạnh để mãi ở bên cạnh gia đình em.",
    },
  },
];
