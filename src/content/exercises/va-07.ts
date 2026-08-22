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
  {
    id: "va-07-essay-2",
    topicIds: ["VA-07"],
    level: "M4",
    questionType: "essay-long",
    prompt:
      'Đóng vai chú Ve Sầu trong truyện "Ve và Kiến", kể lại mùa đông đói rét và bài học em rút ra.',
    explanation:
      "Bài văn đóng vai cần xưng \"tôi\" theo đúng nhân vật Ve Sầu, giữ đúng diễn biến câu chuyện gốc (Ve mải ca hát mùa hè, đói rét mùa đông) nhưng thêm cảm xúc nội tâm chân thực.",
    essay: {
      outline: [
        "Mở bài: (đóng vai Ve) giới thiệu bản thân và cuộc sống ca hát mùa hè",
        "Thân bài: kể việc Ve mải ca hát, không lo dự trữ thức ăn như Kiến",
        "Thân bài: kể cảnh mùa đông đến, Ve đói rét đi xin thức ăn",
        "Thân bài: kể phản ứng của Kiến khi Ve đến xin giúp đỡ",
        "Kết bài: cảm nghĩ, bài học Ve rút ra",
      ],
      openingStyles: [
        "Giới thiệu bản thân (Ve) và niềm vui ca hát mùa hè",
        "Bắt đầu từ cảm giác rét buốt hiện tại rồi kể lại chuyện đã xảy ra",
        "Dẫn vào từ tiếng hát của chính mình vang lên trong ký ức",
        "Bắt đầu bằng một câu hỏi tự vấn bản thân rồi kể lại câu chuyện",
      ],
      rubric: [
        { criterion: "Xưng hô đúng ngôi thứ nhất, đúng vai Ve", points: 2 },
        { criterion: "Kể đúng diễn biến câu chuyện gốc", points: 2 },
        { criterion: "Có suy nghĩ, cảm xúc nội tâm hợp lý của nhân vật", points: 3 },
        { criterion: "Bài học rút ra rõ ràng, hợp lý", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Tôi là Ve Sầu, cả mùa hè chỉ biết say sưa ca hát trên những cành cây rợp bóng. Trong khi tôi mải mê cất tiếng hát vang khắp khu vườn, tôi thường thấy bác Kiến hàng xóm cặm cụi tha từng hạt thóc về tổ, người tôi thầm nghĩ sao mà vất vả, chẳng có thời gian tận hưởng mùa hè như tôi. Tôi từng cười bác Kiến vì suốt ngày chỉ biết làm việc. Thế nhưng, khi mùa đông kéo đến, gió lạnh thổi ù ù, tôi mới nhận ra mình chẳng có lấy một hạt thức ăn nào dự trữ. Đói và rét, tôi run rẩy tìm đến tổ của bác Kiến, cất lời xin một chút thức ăn để cầm cự qua mùa đông. Nhìn đống lương thực bác Kiến đã chăm chỉ tích trữ suốt mùa hè, tôi vô cùng xấu hổ và hối hận vì những lời chê bai trước đây. Bác Kiến tuy có phần trách móc nhưng vẫn thương tình chia sẻ cho tôi một ít thức ăn. Trải qua mùa đông ấy, tôi hiểu ra rằng cuộc sống cần biết lo xa, chăm chỉ chuẩn bị cho tương lai chứ không nên chỉ ham vui trước mắt. Từ đó, tôi tự hứa sẽ thay đổi, biết chăm chỉ và tiết kiệm hơn.",
    },
  },
  {
    id: "va-07-essay-3",
    topicIds: ["VA-07"],
    level: "M4",
    questionType: "essay-long",
    prompt:
      "Tưởng tượng em là chiếc cặp sách của một bạn học sinh, hãy kể lại một ngày đi học cùng bạn ấy.",
    explanation:
      "Bài văn tưởng tượng cần xây dựng góc nhìn hợp lý của đồ vật (quan sát, cảm nhận theo cách riêng) nhưng vẫn logic, gắn với hoạt động thực tế của một ngày đi học.",
    essay: {
      outline: [
        "Mở bài: (đóng vai chiếc cặp) giới thiệu bản thân và người bạn nhỏ sở hữu mình",
        "Thân bài: kể lại buổi sáng chuẩn bị đến trường",
        "Thân bài: kể những gì \"chứng kiến\" trong lớp học, giờ ra chơi",
        "Thân bài: kể lúc trở về nhà, được nghỉ ngơi",
        "Kết bài: cảm nghĩ của chiếc cặp về tình cảm với người bạn nhỏ",
      ],
      openingStyles: [
        "Giới thiệu bản thân là chiếc cặp và người bạn nhỏ",
        "Bắt đầu từ cảm giác được đeo trên vai bạn nhỏ mỗi sáng",
        "Dẫn vào từ âm thanh chuông báo thức buổi sáng",
        "Bắt đầu bằng suy nghĩ tưởng tượng của chiếc cặp về ngày mới",
      ],
      rubric: [
        { criterion: "Xưng hô đúng ngôi thứ nhất, đúng vai chiếc cặp", points: 2 },
        { criterion: "Diễn biến hợp lý theo trình tự một ngày đi học", points: 2 },
        { criterion: "Có suy nghĩ, cảm xúc nội tâm sáng tạo, hợp lý", points: 3 },
        { criterion: "Bài học/cảm nghĩ rút ra rõ ràng", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Tôi là chiếc cặp sách màu xanh, người bạn đồng hành thân thiết của cô bé Mai suốt năm học lớp 5. Mỗi sáng, khi tiếng chuông báo thức vang lên, Mai lại vội vàng nhét sách vở vào bụng tôi rồi khoác tôi lên vai, cùng nhau chạy đến trường. Trên đường đi, tôi cảm nhận được từng bước chân háo hức của Mai khi nghĩ đến giờ ra chơi sắp tới. Vào lớp học, tôi được đặt ngay ngắn bên cạnh bàn học, lặng lẽ \"quan sát\" Mai chăm chú nghe cô giáo giảng bài, thỉnh thoảng lại mở bụng tôi ra để lấy quyển vở ghi chép. Đến giờ ra chơi, tôi được nghỉ ngơi một lát trong khi Mai chạy ra sân chơi cùng bạn bè, tiếng cười đùa vọng vào khiến tôi cũng thấy vui lây. Buổi chiều tan học, Mai lại khoác tôi lên vai trở về nhà, đôi lúc còn vừa đi vừa kể cho tôi nghe (dù chỉ trong tưởng tượng) về những chuyện vui trong ngày. Về đến nhà, tôi được đặt ngay ngắn trên giá sách, chờ đợi một ngày mới để tiếp tục cùng Mai đến trường. Tôi cảm thấy rất hạnh phúc vì được là người bạn đồng hành nhỏ bé nhưng luôn gắn bó với hành trình học tập của Mai.",
    },
  },
  {
    id: "va-07-essay-4",
    topicIds: ["VA-07"],
    level: "M4",
    questionType: "essay-long",
    prompt:
      'Đóng vai chú Kiến trong truyện "Ve và Kiến", kể lại việc mình chăm chỉ làm việc suốt mùa hè và giúp đỡ Ve khi mùa đông đến.',
    explanation:
      "Bài văn đóng vai cần xưng \"tôi\" theo đúng nhân vật Kiến, giữ đúng diễn biến câu chuyện gốc nhưng thêm suy nghĩ nội tâm về sự chăm chỉ và lòng tốt.",
    essay: {
      outline: [
        "Mở bài: (đóng vai Kiến) giới thiệu bản thân và công việc chăm chỉ mùa hè",
        "Thân bài: kể việc tha thức ăn về tổ suốt mùa hè, trong khi Ve mải ca hát",
        "Thân bài: kể cảnh mùa đông đến, Ve đói rét đến xin thức ăn",
        "Thân bài: kể quyết định giúp đỡ Ve của Kiến",
        "Kết bài: cảm nghĩ, bài học Kiến rút ra",
      ],
      openingStyles: [
        "Giới thiệu bản thân (Kiến) và công việc hằng ngày",
        "Bắt đầu từ hình ảnh kho lương thực đầy ắp trong tổ",
        "Dẫn vào từ tiếng gõ cửa của Ve giữa mùa đông",
        "Bắt đầu bằng suy nghĩ về ý nghĩa của sự chăm chỉ rồi kể lại câu chuyện",
      ],
      rubric: [
        { criterion: "Xưng hô đúng ngôi thứ nhất, đúng vai Kiến", points: 2 },
        { criterion: "Kể đúng diễn biến câu chuyện gốc", points: 2 },
        { criterion: "Có suy nghĩ, cảm xúc nội tâm hợp lý của nhân vật", points: 3 },
        { criterion: "Bài học rút ra rõ ràng, hợp lý", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Tôi là Kiến, suốt cả mùa hè tôi cùng các anh chị em trong đàn miệt mài tha từng hạt thóc, hạt gạo về tổ để dự trữ cho mùa đông. Trong khi tôi làm việc dưới cái nắng gay gắt, tôi thường nghe thấy tiếng hát vang của anh Ve Sầu trên cành cây, tôi thầm nghĩ giá mà mình cũng được thảnh thơi ca hát như vậy. Nhưng tôi vẫn tự nhủ phải cố gắng, vì mùa đông sẽ không còn thức ăn ngoài tự nhiên nữa. Quả nhiên, khi mùa đông đến, một buổi tối nọ, tôi nghe thấy tiếng gõ cửa run rẩy — đó chính là anh Ve Sầu, gầy gò, đói rét, đến xin tôi một chút thức ăn. Nhìn thấy dáng vẻ tội nghiệp của anh Ve, dù trong lòng có chút trách móc vì trước đây anh từng chê cười tôi làm việc vất vả, tôi vẫn quyết định chia sẻ một phần lương thực mình đã dành dụm được. Nhìn anh Ve ăn ngon lành, tôi cảm thấy vui vì đã giúp được một người bạn lúc khó khăn. Qua câu chuyện này, tôi càng tin rằng chăm chỉ lao động không chỉ giúp bản thân mà còn có thể giúp đỡ người khác khi họ gặp hoạn nạn.",
    },
  },
];
