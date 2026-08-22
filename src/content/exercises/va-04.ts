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
  {
    id: "va-04-essay-2",
    topicIds: ["VA-04"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một chú chó mà em yêu thích (nhà em nuôi hoặc nhà người quen).",
    explanation:
      "Bài văn tả chó cần chú trọng miêu tả sự trung thành, tinh nghịch qua các hoạt động canh nhà, đón chủ, vui đùa.",
    essay: {
      outline: [
        "Mở bài: giới thiệu chú chó định tả",
        "Thân bài: tả bao quát hình dáng",
        "Thân bài: tả chi tiết các bộ phận nổi bật",
        "Thân bài: tả hoạt động, thói quen (canh nhà, đón chủ, chơi đùa)",
        "Kết bài: tình cảm, kỷ niệm của em với chú chó",
      ],
      openingStyles: [
        "Giới thiệu lý do nhà em nuôi chú chó đó",
        "Bắt đầu từ tiếng sủa quen thuộc mỗi khi có khách",
        "Dẫn vào từ một kỷ niệm đáng nhớ với chú chó",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới chú chó định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng", points: 2 },
        { criterion: "Tả hoạt động, thói quen sinh động, có chi tiết riêng", points: 3 },
        { criterion: "Có cảm xúc, kỷ niệm chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Nhà em nuôi một chú chó tên là Lu, giống chó ta, đã ở cùng gia đình em được ba năm nay. Lu có bộ lông vàng óng, thân hình chắc nịch cùng bốn chân nhanh nhẹn. Đôi tai Lu luôn dựng đứng, rất thính, chỉ cần nghe tiếng bước chân lạ ngoài cổng là đã sủa vang báo hiệu. Cái đuôi của Lu cong lên như một dấu hỏi ngộ nghĩnh, mỗi khi vui mừng lại ngoáy tít không ngừng. Lu rất trung thành, đêm nào cũng nằm canh trước cửa nhà, hễ có tiếng động lạ là lập tức đứng dậy cảnh giác. Mỗi khi em đi học về, Lu luôn là người chạy ra đón đầu tiên, nhảy chồm lên mừng rỡ và liếm tay em không ngớt. Có lần em chơi trốn tìm cùng các bạn, Lu còn biết chạy đi tìm em như một người bạn tinh nghịch. Em rất yêu quý Lu vì sự trung thành và tình cảm mà chú dành cho cả gia đình.",
    },
  },
  {
    id: "va-04-essay-3",
    topicIds: ["VA-04"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả đàn gà (hoặc một loài vật nuôi trong trang trại) mà em từng quan sát.",
    explanation:
      "Bài văn tả đàn vật nuôi cần tả cả đặc điểm chung của cả đàn và một vài cá thể nổi bật, kết hợp hoạt động sinh hoạt hằng ngày.",
    essay: {
      outline: [
        "Mở bài: giới thiệu đàn gà (nuôi ở đâu, số lượng)",
        "Thân bài: tả bao quát đặc điểm chung của đàn gà",
        "Thân bài: tả chi tiết một vài con nổi bật (gà trống, gà mái, gà con)",
        "Thân bài: tả hoạt động sinh hoạt hằng ngày của đàn gà",
        "Kết bài: cảm nghĩ của em về đàn gà",
      ],
      openingStyles: [
        "Giới thiệu lý do gia đình nuôi đàn gà",
        "Bắt đầu từ tiếng gà gáy buổi sáng",
        "Dẫn vào từ hình ảnh đàn gà con mới nở",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới đàn gà định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng", points: 2 },
        { criterion: "Tả hoạt động sinh động, có chi tiết riêng của các cá thể", points: 3 },
        { criterion: "Có cảm xúc, liên hệ chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Ở quê ngoại em, bà nuôi một đàn gà gần hai mươi con trong khu vườn sau nhà. Chú gà trống đầu đàn có bộ lông sặc sỡ với chiếc mào đỏ tươi dựng cao, dáng đi oai vệ như một vị chỉ huy. Những chị gà mái có bộ lông màu nâu vàng, thân hình tròn trịa, suốt ngày cần mẫn bới đất tìm giun. Đáng yêu nhất là đàn gà con mới nở, lông vàng óng như tơ, líu ríu chạy theo mẹ khắp sân, thỉnh thoảng lại kêu \"chiếp chiếp\" khi bị lạc đàn. Mỗi buổi sáng sớm, tiếng gà trống gáy vang \"ò ó o\" như đánh thức cả khu vườn dậy. Đến giờ ăn, bà chỉ cần rắc một nắm thóc là cả đàn gà chạy ùa đến, tranh nhau mổ lia lịa. Buổi chiều, khi trời sắp tối, đàn gà lại tự động kéo nhau về chuồng, xếp hàng ngay ngắn. Em rất thích thú mỗi khi được về quê quan sát đàn gà, vì chúng khiến khu vườn của bà thêm sinh động, nhộn nhịp.",
    },
  },
  {
    id: "va-04-essay-4",
    topicIds: ["VA-04"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một chú chim (hoặc loài vật nuôi trong lồng) mà em từng quan sát.",
    explanation:
      "Bài văn tả chim cần chú trọng miêu tả bộ lông, tiếng hót và thói quen sinh hoạt trong lồng để làm nổi bật vẻ đẹp và sự sống động của con vật.",
    essay: {
      outline: [
        "Mở bài: giới thiệu chú chim định tả (loài gì, có từ khi nào)",
        "Thân bài: tả bao quát hình dáng",
        "Thân bài: tả chi tiết các bộ phận nổi bật (bộ lông, mỏ, chân)",
        "Thân bài: tả tiếng hót, thói quen sinh hoạt hằng ngày",
        "Kết bài: tình cảm của em với chú chim",
      ],
      openingStyles: [
        "Giới thiệu lý do nhà em nuôi chú chim đó",
        "Bắt đầu từ tiếng hót quen thuộc mỗi sáng",
        "Dẫn vào từ hình ảnh chú chim trong chiếc lồng treo trước hiên",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới chú chim định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng", points: 2 },
        { criterion: "Tả tiếng hót, thói quen sinh động, có chi tiết riêng", points: 3 },
        { criterion: "Có cảm xúc, liên hệ chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trước hiên nhà ông em có treo một chiếc lồng nuôi một chú chim hoạ mi mà ông rất yêu quý. Chú hoạ mi có bộ lông màu nâu sẫm, điểm xuyết vài vệt trắng nhỏ quanh mắt trông rất tinh nghịch. Đôi mắt chim đen láy, tròn xoe, luôn linh hoạt đảo qua đảo lại quan sát xung quanh. Chiếc mỏ nhỏ, nhọn và đôi chân mảnh khảnh giúp chú di chuyển thoăn thoắt trên các thanh gỗ trong lồng. Điều đặc biệt nhất ở chú hoạ mi chính là giọng hót, mỗi buổi sáng chú lại cất lên những âm thanh trong trẻo, líu lo như một bản nhạc du dương, khiến cả khu vườn như bừng tỉnh. Mỗi khi ông mang thức ăn đến, chú hoạ mi lại nhảy nhót vui mừng, cất tiếng hót vang hơn như muốn cảm ơn ông. Ông thường kể cho em nghe rằng chú chim này đã ở cùng ông nhiều năm, trở thành người bạn nhỏ giúp ông đỡ buồn mỗi khi ở nhà một mình. Em rất thích thú mỗi khi được nghe tiếng hót của chú hoạ mi và cảm nhận được tình cảm đặc biệt mà ông dành cho nó.",
    },
  },
];
