import type { Exercise } from "@/data-access/types";

// VA-07 — Kể chuyện sáng tạo: đóng vai, tưởng tượng, viết tiếp câu chuyện.
// Đề bài dựa trên truyện ngụ ngôn "Rùa và Thỏ" (phạm vi công cộng, Mục
// 10.1 hướng A). Bài văn mẫu tự biên soạn.
export const VA07_EXERCISES: Exercise[] = [
  {
    id: "va-07-essay-1",
    topicIds: ["VA-07"],
    level: "M4",
    questionType: "essay-long",
    prompt:
      'Đóng vai chú Thỏ trong truyện "Rùa và Thỏ", kể lại cuộc thi chạy và cảm nghĩ của em sau khi thua cuộc.',
    explanation:
      "Bài văn đóng vai cần xưng \"tôi\"/\"em\" theo đúng nhân vật, giữ đúng diễn biến câu chuyện gốc nhưng thêm cảm xúc, suy nghĩ nội tâm của nhân vật.",
    essay: {
      outline: [
        "Mở bài: (đóng vai Thỏ) giới thiệu bản thân và lời thách thức chạy thi với Rùa",
        "Thân bài: kể diễn biến cuộc thi (Thỏ chủ quan ngủ quên)",
        "Thân bài: kể lúc Thỏ tỉnh dậy và phát hiện Rùa đã gần về đích",
        "Thân bài: kể kết quả cuộc thi (Thỏ thua cuộc)",
        "Kết bài: cảm nghĩ, bài học Thỏ rút ra sau khi thua cuộc",
      ],
      openingStyles: [
        "Giới thiệu bản thân (Thỏ) và tính cách tự phụ trước cuộc thi",
        "Bắt đầu từ cảm xúc hối hận hiện tại rồi kể lại chuyện đã xảy ra",
        "Dẫn vào từ lời thách thức với Rùa",
        "Bắt đầu bằng một câu hỏi tự vấn bản thân rồi kể lại câu chuyện",
      ],
      rubric: [
        { criterion: "Xưng hô đúng ngôi thứ nhất, đúng vai Thỏ", points: 2 },
        { criterion: "Kể đúng diễn biến câu chuyện gốc", points: 2 },
        { criterion: "Có suy nghĩ, cảm xúc nội tâm hợp lý của nhân vật", points: 3 },
        { criterion: "Bài học rút ra rõ ràng, hợp lý", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Tôi là Thỏ, vốn nổi tiếng khắp khu rừng vì đôi chân chạy nhanh như gió. Một hôm, thấy Rùa chậm chạp bò qua, tôi buông lời chê bai, thế là Rùa thách tôi thi chạy một đường đua dài đến ngọn đồi phía trước. Tôi cười thầm, nghĩ bụng mình chỉ cần chạy vài bước là đã bỏ xa Rùa cả cây số. Quả nhiên, mới xuất phát được một đoạn, tôi đã dẫn trước rất xa. Thấy còn nhiều thời gian, tôi liền nằm dưới một gốc cây rợp bóng mát để nghỉ ngơi, tự nhủ chỉ chợp mắt một chút thôi. Không ngờ, tôi ngủ quên mất. Khi giật mình tỉnh dậy, tôi hoảng hốt nhìn về phía đích thì thấy Rùa đã sắp về tới nơi. Tôi vội vàng vùng dậy chạy hết sức, nhưng đã quá muộn — Rùa cán đích trước tôi trong tiếng reo hò của cả khu rừng. Đứng lặng người, tôi mới nhận ra bài học thấm thía: dù có tài giỏi đến đâu, nếu chủ quan, kiêu ngạo thì cũng có thể thua cuộc trước những người kiên trì, chăm chỉ. Từ đó, tôi tự hứa với lòng sẽ không bao giờ coi thường ai nữa.",
    },
  },
];
