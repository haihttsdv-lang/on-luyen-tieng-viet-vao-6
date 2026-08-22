import type { Topic } from "@/data-access/types";

// GĐ2 sample content — 3 chuyên đề, chosen to exercise both the ordinary
// comparison path and the FR-M05 strict (chính tả) path.
export const TOPICS: Topic[] = [
  {
    id: "KN-01",
    group: "KN",
    title: "Kỹ năng làm bài trắc nghiệm: phương pháp loại trừ, nhận diện bẫy thường gặp",
    // GĐ4 — nhóm KN ưu tiên xây trước (Mục 5.11): ít tài liệu sẵn có nhất,
    // giá trị cao nhất. FR-L03: trình bày dạng quy trình từng bước.
    lesson: {
      concept:
        "Làm bài trắc nghiệm hiệu quả không chỉ là biết kiến thức, mà còn là kỹ năng đọc đề và loại trừ đáp án sai một cách có hệ thống.",
      steps: [
        "Đọc kỹ toàn bộ câu hỏi trước khi nhìn vào các đáp án — tránh bị đáp án A hoặc B \"quen mắt\" chi phối.",
        "Gạch chân từ khoá quan trọng trong đề bài (đặc biệt các từ phủ định như \"không\", \"KHÔNG đúng\").",
        "Đọc lần lượt cả 4 đáp án, không dừng lại ngay khi thấy một đáp án \"có vẻ đúng\".",
        "Loại trừ đáp án sai rõ ràng trước — đáp án dùng từ tuyệt đối (\"luôn luôn\", \"tất cả\", \"không bao giờ\") thường là bẫy.",
        "Trong các đáp án còn lại, chọn đáp án đúng và đầy đủ nhất — đáp án đúng một phần nhưng thiếu ý vẫn là đáp án sai.",
        "Nếu còn phân vân giữa 2 đáp án, đọc lại câu hỏi một lần nữa để chắc chắn không bỏ sót yêu cầu của đề.",
      ],
      signals: [
        "Đáp án dùng từ tuyệt đối hoá (\"luôn luôn\", \"tất cả\", \"không bao giờ\") — thường là bẫy",
        "Hai đáp án gần giống nhau, chỉ khác một từ — cần đọc kỹ từng chữ",
        "Đề bài có từ phủ định (\"KHÔNG đúng\", \"KHÔNG phải\") dễ bị đọc sót",
      ],
      examples: [
        "Câu hỏi: \"Từ nào KHÔNG đồng nghĩa với 'chăm chỉ'?\" — nếu đọc sót chữ KHÔNG, học sinh sẽ tìm từ đồng nghĩa thay vì từ không đồng nghĩa, chọn sai dù hiểu đúng nghĩa các từ.",
        "Câu hỏi có đáp án \"Từ này luôn luôn được viết hoa\" — trong tiếng Việt hầu như không có quy tắc nào là tuyệt đối 100%, nên đáp án này thường là bẫy cần loại trừ trước.",
      ],
      commonMistakes: [
        "Đọc lướt đề, bỏ sót từ phủ định (\"không\", \"KHÔNG phải\")",
        "Chọn đáp án đầu tiên có vẻ đúng mà không đọc hết các lựa chọn còn lại",
        "Không phân biệt được đáp án \"đúng một phần\" với đáp án \"đúng và đầy đủ\"",
      ],
    },
  },
  {
    id: "NT-01",
    group: "NT",
    title: "Từ đồng nghĩa",
    lesson: {
      concept:
        "Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau, có thể thay thế cho nhau trong một số ngữ cảnh, nhưng thường có sắc thái biểu cảm hoặc phạm vi sử dụng khác nhau.",
      signals: [
        "Hai từ có thể thay thế cho nhau trong câu mà nghĩa cơ bản của câu không đổi",
        "Thường xuất hiện cùng nhóm chủ điểm (tính cách, cảm xúc, hình dáng...)",
      ],
      examples: [
        "\"Chăm chỉ\" và \"siêng năng\" đều chỉ đức tính chịu khó làm việc, học tập — có thể thay thế cho nhau: \"Bạn ấy rất chăm chỉ/siêng năng học bài.\"",
        "\"Xinh đẹp\" và \"xinh xắn\" đều chỉ vẻ ngoài ưa nhìn, nhưng \"xinh xắn\" thường dùng cho những gì nhỏ nhắn, đáng yêu hơn.",
        "\"To lớn\", \"khổng lồ\", \"đồ sộ\" đều chỉ kích thước lớn, nhưng \"khổng lồ\" nhấn mạnh mức độ lớn hơn hẳn bình thường.",
      ],
      commonMistakes: [
        "Nhầm từ đồng nghĩa hoàn toàn với từ đồng nghĩa không hoàn toàn (khác sắc thái, không phải lúc nào cũng thay thế được)",
        "Nhầm từ đồng nghĩa với từ cùng chủ điểm nhưng khác nghĩa (ví dụ \"vui vẻ\" và \"hạnh phúc\" không hoàn toàn đồng nghĩa)",
      ],
    },
  },
  // Giai đoạn 9 — CA là nhóm ưu tiên #1 cho bài tập chấm tự động (Mục 5.11:
  // "CA-01→07, TC-03/04, NT-03/04").
  {
    id: "CA-01",
    group: "CA",
    title: "Câu và các thành phần chính (chủ ngữ, vị ngữ)",
    lesson: {
      concept:
        "Câu là đơn vị ngôn ngữ diễn đạt một ý trọn vẹn. Câu đơn thường có hai thành phần chính: chủ ngữ (nêu sự vật được nói đến) và vị ngữ (nêu hoạt động, trạng thái, đặc điểm của sự vật đó).",
      signals: [
        "Chủ ngữ thường đứng trước, trả lời câu hỏi \"Ai?/Cái gì?/Con gì?\"",
        "Vị ngữ thường đứng sau, trả lời câu hỏi \"làm gì?/thế nào?/là gì?\"",
        "Một câu hoàn chỉnh cần có đủ cả chủ ngữ và vị ngữ",
      ],
      examples: [
        "\"Bạn Lan / học bài.\" — chủ ngữ: \"Bạn Lan\", vị ngữ: \"học bài\".",
        "\"Con mèo nhà em / đang ngủ trên ghế.\" — chủ ngữ: \"Con mèo nhà em\", vị ngữ: \"đang ngủ trên ghế\".",
      ],
      commonMistakes: [
        "Nhầm trạng ngữ đứng đầu câu với chủ ngữ (ví dụ \"Sáng nay\" trong \"Sáng nay, em đi học\" là trạng ngữ, không phải chủ ngữ)",
        "Viết câu chỉ có cụm danh từ mà thiếu hẳn vị ngữ, tưởng nhầm là câu hoàn chỉnh",
      ],
    },
  },
  {
    id: "CA-02",
    group: "CA",
    title: "Trạng ngữ và các loại trạng ngữ",
    lesson: {
      concept:
        "Trạng ngữ là thành phần phụ của câu, bổ sung ý nghĩa về thời gian, nơi chốn, nguyên nhân, mục đích, phương tiện... cho nòng cốt câu (chủ ngữ – vị ngữ). Trạng ngữ thường đứng ở đầu câu và ngăn cách với nòng cốt câu bằng dấu phẩy.",
      signals: [
        "Trạng ngữ chỉ thời gian trả lời câu hỏi \"Khi nào?\"",
        "Trạng ngữ chỉ nơi chốn trả lời câu hỏi \"Ở đâu?\"",
        "Trạng ngữ chỉ nguyên nhân trả lời câu hỏi \"Vì sao?\"",
        "Trạng ngữ chỉ mục đích trả lời câu hỏi \"Để làm gì?\"",
      ],
      examples: [
        "\"Sáng nay, em đi học sớm.\" — trạng ngữ chỉ thời gian: \"Sáng nay\".",
        "\"Vì trời mưa to, chúng em phải nghỉ học.\" — trạng ngữ chỉ nguyên nhân: \"Vì trời mưa to\".",
        "\"Để đạt kết quả tốt, em cần ôn bài đều đặn.\" — trạng ngữ chỉ mục đích: \"Để đạt kết quả tốt\".",
      ],
      commonMistakes: [
        "Nhầm trạng ngữ với chủ ngữ khi trạng ngữ đứng đầu câu nhưng thiếu dấu phẩy ngăn cách",
        "Xác định sai loại trạng ngữ (ví dụ nhầm trạng ngữ chỉ nguyên nhân với trạng ngữ chỉ mục đích)",
      ],
    },
  },
  {
    id: "CA-03",
    group: "CA",
    title: "Các kiểu câu kể: Ai làm gì? / Ai thế nào? / Ai là gì?",
    lesson: {
      concept:
        "Câu kể (câu trần thuật) dùng để kể, tả, giới thiệu sự vật, sự việc. Có 3 kiểu câu kể chính, phân biệt theo nội dung của vị ngữ.",
      signals: [
        "\"Ai làm gì?\": vị ngữ nêu hoạt động (động từ + các thành phần đi kèm)",
        "\"Ai thế nào?\": vị ngữ nêu đặc điểm, tính chất, trạng thái (thường có tính từ)",
        "\"Ai là gì?\": vị ngữ có từ \"là\", dùng để giới thiệu, nhận định, đánh giá",
      ],
      examples: [
        "\"Bạn Lan đang quét sân.\" — vị ngữ \"đang quét sân\" nêu hoạt động → kiểu Ai làm gì?",
        "\"Bầu trời hôm nay trong xanh.\" — vị ngữ \"trong xanh\" nêu đặc điểm → kiểu Ai thế nào?",
        "\"Bạn Nam là học sinh giỏi.\" — vị ngữ có từ \"là\", giới thiệu về Bạn Nam → kiểu Ai là gì?",
      ],
      commonMistakes: [
        "Nhầm câu có động từ \"là\" đi kèm mô tả trạng thái với kiểu Ai là gì? (ví dụ \"Em bé là rất đáng yêu\" là câu sai ngữ pháp, không phải ví dụ chuẩn của kiểu này)",
        "Nhầm câu kể \"Ai thế nào?\" với câu kể \"Ai làm gì?\" khi vị ngữ có cả động từ lẫn tính từ",
      ],
    },
  },
  {
    id: "CA-04",
    group: "CA",
    title: "Các kiểu câu chia theo mục đích nói: câu hỏi, câu kể, câu khiến, câu cảm",
    lesson: {
      concept:
        "Theo mục đích nói, câu chia thành 4 kiểu: câu kể (kể, tả, thông báo), câu hỏi (dùng để hỏi), câu khiến (dùng để yêu cầu, đề nghị, ra lệnh), câu cảm (bộc lộ cảm xúc).",
      signals: [
        "Câu hỏi thường có từ nghi vấn (ai, gì, sao, thế nào, đâu...) và kết thúc bằng dấu chấm hỏi",
        "Câu khiến thường có từ \"hãy, đừng, chớ, nên\" và kết thúc bằng dấu chấm than hoặc dấu chấm",
        "Câu cảm thường có từ cảm thán (ôi, chao, quá, thật) và kết thúc bằng dấu chấm than",
      ],
      examples: [
        "\"Bạn có đi học không?\" — câu hỏi.",
        "\"Hãy giữ trật tự!\" — câu khiến.",
        "\"Ôi, cảnh đẹp quá!\" — câu cảm.",
        "\"Hôm nay trời đẹp.\" — câu kể.",
      ],
      commonMistakes: [
        "Nhầm câu cảm với câu khiến khi cả hai đều kết thúc bằng dấu chấm than",
        "Nhầm câu hỏi tu từ (không cần trả lời, chỉ để nhấn mạnh) với câu hỏi thông thường",
      ],
    },
  },
  {
    id: "CA-05",
    group: "CA",
    title: "Câu đơn và câu ghép",
    lesson: {
      concept:
        "Câu đơn có một cụm chủ ngữ – vị ngữ (nòng cốt câu). Câu ghép có từ hai cụm chủ ngữ – vị ngữ trở lên, không bao chứa nhau, mỗi cụm diễn đạt một ý và liên kết với nhau.",
      steps: [
        "Xác định các cụm chủ ngữ – vị ngữ độc lập trong câu.",
        "Nếu chỉ có một cụm chủ ngữ – vị ngữ → câu đơn.",
        "Nếu có từ hai cụm chủ ngữ – vị ngữ trở lên, không cụm nào nằm trong cụm nào → câu ghép.",
      ],
      signals: [
        "Câu ghép thường có quan hệ từ nối (và, nhưng, vì...nên, nếu...thì) hoặc dấu phẩy/dấu chấm phẩy ngăn cách các vế",
      ],
      examples: [
        "\"Em học bài.\" — câu đơn, chỉ có một cụm chủ ngữ – vị ngữ.",
        "\"Trời mưa to nên đường phố ngập nước.\" — câu ghép, hai cụm: \"trời mưa to\" và \"đường phố ngập nước\", nối bằng \"nên\".",
      ],
      commonMistakes: [
        "Nhầm câu đơn có nhiều vị ngữ (một chủ ngữ, nhiều hành động nối bằng \"và\") với câu ghép",
        "Không nhận ra câu ghép khi các vế chỉ ngăn cách bằng dấu phẩy, không có quan hệ từ rõ ràng",
      ],
    },
  },
  {
    id: "CA-06",
    group: "CA",
    title: "Cách nối các vế câu ghép",
    lesson: {
      concept:
        "Các vế trong câu ghép có thể nối với nhau bằng 3 cách: nối trực tiếp (dùng dấu câu, không có từ nối), nối bằng quan hệ từ đơn (và, nhưng, hoặc, vì, nên...), hoặc nối bằng cặp quan hệ từ (vì...nên, nếu...thì, tuy...nhưng, không những...mà còn...).",
      signals: [
        "Cặp quan hệ từ \"vì...nên\" thể hiện quan hệ nguyên nhân – kết quả",
        "Cặp quan hệ từ \"nếu...thì\" thể hiện quan hệ giả thiết – kết quả",
        "Cặp quan hệ từ \"tuy...nhưng\" thể hiện quan hệ tương phản",
      ],
      examples: [
        "\"Trời mưa, đường trơn.\" — nối trực tiếp bằng dấu phẩy.",
        "\"Vì trời mưa nên đường trơn.\" — cặp quan hệ từ nguyên nhân – kết quả.",
        "\"Tuy nhà nghèo nhưng bạn ấy học rất giỏi.\" — cặp quan hệ từ tương phản.",
      ],
      commonMistakes: [
        "Dùng sai cặp quan hệ từ (ví dụ nhầm cặp nguyên nhân – kết quả với cặp tương phản)",
        "Thiếu vế thứ hai khi đã dùng vế đầu của một cặp quan hệ từ",
      ],
    },
  },
  {
    id: "CA-07",
    group: "CA",
    title: "Liên kết câu trong đoạn: phép lặp, phép thế, phép nối",
    lesson: {
      concept:
        "Để các câu trong đoạn văn liên kết chặt chẽ với nhau, người viết thường dùng 3 phép liên kết chính: phép lặp (lặp lại từ ngữ đã dùng ở câu trước), phép thế (dùng đại từ hoặc từ ngữ khác thay thế), phép nối (dùng từ nối như \"vì vậy, tuy nhiên, ngoài ra\").",
      signals: [
        "Phép lặp: từ ngữ giống hệt được lặp lại ở câu sau",
        "Phép thế: đại từ (nó, đó, ấy, bạn ấy) hoặc từ đồng nghĩa thay thế cho từ ngữ đã nhắc ở câu trước",
        "Phép nối: từ/cụm từ nối đứng đầu câu sau (vì vậy, tuy nhiên, ngoài ra, hơn nữa)",
      ],
      examples: [
        "\"Lan là học sinh giỏi. Lan luôn giúp đỡ bạn bè.\" — phép lặp, lặp lại từ \"Lan\".",
        "\"Lan là học sinh giỏi. Bạn ấy luôn giúp đỡ bạn bè.\" — phép thế, \"bạn ấy\" thay cho \"Lan\".",
        "\"Trời mưa to. Vì vậy, buổi dã ngoại bị hoãn lại.\" — phép nối, dùng \"vì vậy\".",
      ],
      commonMistakes: [
        "Lạm dụng phép lặp khiến đoạn văn nhàm chán, lặp từ quá nhiều lần",
        "Nhầm phép thế với việc chỉ đơn thuần đổi chủ ngữ mà không có ý thức liên kết",
      ],
    },
  },
  {
    id: "CD-01",
    group: "CD",
    title: "Chính tả: phụ âm đầu dễ lẫn (l/n, ch/tr, s/x, r/d/gi)",
    // Giai đoạn 9 — bổ sung lesson còn thiếu (đã có bài tập từ trước).
    lesson: {
      concept:
        "Một số phụ âm đầu dễ bị lẫn lộn khi phát âm theo phương ngữ (l/n, ch/tr, s/x, r/d/gi), khiến nhiều người viết sai dù đọc giống nhau. Cần phân biệt bằng cách nhớ mặt chữ và nghĩa của từ.",
      signals: [
        "Hai từ đọc gần giống nhau theo phương ngữ nhưng viết khác phụ âm đầu và mang nghĩa khác nhau",
        "Đề bài dạng \"điền l hay n\", \"điền ch hay tr\", \"từ nào viết đúng chính tả\"",
      ],
      examples: [
        "\"Long lanh\" (đúng, âm đầu l) — không viết \"nong nanh\".",
        "\"Trèo cây\" (đúng, âm đầu tr, nghĩa là leo lên) khác với \"chèo thuyền\" (âm đầu ch, nghĩa là chèo lái) — hai nghĩa hoàn toàn khác nhau.",
        "\"Sạch sẽ\" (đúng, âm đầu s) — không viết \"xạch xẽ\".",
      ],
      commonMistakes: [
        "Viết theo cách phát âm của địa phương thay vì theo chữ viết chuẩn",
        "Đổi nhầm phụ âm đầu khiến từ mang nghĩa khác hẳn (VD nhầm \"trèo\" thành \"chèo\")",
      ],
    },
  },
  {
    id: "CT-07",
    group: "CT",
    title: "Viết đoạn văn cảm thụ theo cấu trúc chuẩn (mở – thân – kết)",
    // Giai đoạn 9 — bổ sung bài học lý thuyết còn thiếu cho chuyên đề này
    // (đã có bài tập từ Giai đoạn 3, chỉ thiếu lesson).
    lesson: {
      concept:
        "Đoạn văn cảm thụ chuẩn cần có cấu trúc rõ ràng 3 phần: mở đoạn giới thiệu câu/hình ảnh ấn tượng, thân đoạn phân tích biện pháp nghệ thuật và tác dụng, kết đoạn nêu cảm xúc hoặc liên hệ (xem quy trình chi tiết ở KN-02).",
      signals: [
        "Mở đoạn: giới thiệu ngắn gọn câu văn/hình ảnh em ấn tượng, không cần dài dòng.",
        "Thân đoạn: bắt buộc có cả tên biện pháp nghệ thuật VÀ tác dụng cụ thể.",
        "Kết đoạn: cảm xúc hoặc liên hệ thực của bản thân, tránh sáo rỗng.",
      ],
      examples: [
        "Với câu văn có hình ảnh so sánh sinh động, đoạn cảm thụ mẫu thường mở đầu bằng \"Đọc câu văn ..., em cảm thấy...\", sau đó chỉ ra biện pháp so sánh, nêu tác dụng khiến hình ảnh trở nên sinh động, rồi kết bằng cảm nhận hoặc kỷ niệm liên quan của bản thân.",
      ],
      commonMistakes: [
        "Viết đoạn văn không theo cấu trúc 3 phần rõ ràng, các ý lẫn lộn vào nhau",
        "Thân đoạn chỉ kể lại nội dung câu văn mà không phân tích biện pháp nghệ thuật",
      ],
    },
  },
  {
    id: "CT-01",
    group: "CT",
    title: "Biện pháp tu từ: So sánh — nhận diện và nêu tác dụng",
    lesson: {
      concept:
        "So sánh là đối chiếu sự vật, sự việc này với sự vật, sự việc khác có nét tương đồng, thường dùng các từ so sánh (như, tựa, là, giống như...) để làm hình ảnh sinh động, dễ hình dung hơn.",
      signals: [
        "Có từ so sánh: như, tựa như, giống như, là, chẳng khác gì...",
        "Hai sự vật được so sánh phải có nét tương đồng nào đó (hình dáng, màu sắc, hoạt động...)",
      ],
      examples: [
        "\"Mặt trời đỏ như quả cầu lửa khổng lồ\" — so sánh mặt trời với quả cầu lửa qua từ \"như\", nét tương đồng là màu đỏ và hình dáng tròn.",
        "\"Tiếng suối trong như tiếng hát xa\" — so sánh âm thanh của suối với tiếng hát, nét tương đồng là sự trong trẻo, du dương.",
      ],
      commonMistakes: [
        "Nhầm so sánh với nhân hoá khi câu vừa có từ so sánh vừa có yếu tố nhân hoá",
        "Chỉ nêu \"đây là so sánh\" mà không chỉ rõ hai vế được so sánh với nhau là gì",
      ],
    },
  },
  {
    id: "CT-02",
    group: "CT",
    title: "Biện pháp tu từ: Nhân hoá — nhận diện và nêu tác dụng",
    lesson: {
      concept:
        "Nhân hoá là gán cho sự vật, hiện tượng, loài vật những đặc điểm, hành động, cảm xúc vốn chỉ có ở con người, khiến chúng trở nên gần gũi, sinh động như có sự sống.",
      signals: [
        "Sự vật/loài vật được gọi bằng từ xưng hô của người (bác, cô, chú, anh, chị...) hoặc thực hiện hành động/có cảm xúc của người",
        "KHÔNG dùng từ so sánh (như, tựa, là...) như biện pháp so sánh",
      ],
      examples: [
        "\"Ông mặt trời thức dậy sau đám mây\" — mặt trời được gọi là \"ông\" và có hành động \"thức dậy\" như con người.",
        "\"Hàng cây đứng im lặng, buồn bã tiễn mùa thu đi\" — hàng cây có cảm xúc \"buồn bã\" và hành động \"tiễn\" như con người.",
      ],
      commonMistakes: [
        "Nhầm nhân hoá với so sánh khi câu văn có cả hai yếu tố",
        "Không chỉ ra được cụ thể từ ngữ nào thể hiện phép nhân hoá trong câu",
      ],
    },
  },
  {
    id: "CT-05",
    group: "CT",
    title: "Cái hay, cái đẹp của từ ngữ và hình ảnh trong tác phẩm",
    lesson: {
      concept:
        "Ngoài các biện pháp tu từ có tên gọi cụ thể, cảm thụ văn học còn cần nhận ra cái hay của việc CHỌN TỪ (dùng từ láy, từ gợi tả, gợi cảm) và cái đẹp của HÌNH ẢNH được miêu tả, dù không phải lúc nào cũng gọi được tên biện pháp.",
      steps: [
        "Đọc kỹ đoạn văn/thơ, chú ý các từ láy, tính từ gợi tả màu sắc, âm thanh, hình dáng.",
        "Tự hỏi: nếu thay từ này bằng một từ khác thông thường hơn, câu văn có còn hay không? Vì sao?",
        "Chỉ ra từ ngữ/hình ảnh đó gợi lên điều gì cụ thể (một cảnh vật, một cảm giác, một không khí...).",
        "Nêu cảm nhận của bản thân về cái hay, cái đẹp đó.",
      ],
      signals: [
        "Thường là các từ láy giàu sức gợi (long lanh, rì rào, xào xạc, lung linh...)",
        "Đề bài dạng \"em thấy từ nào hay nhất trong đoạn văn, vì sao?\"",
      ],
      examples: [
        "Trong câu \"Nắng vàng rót mật xuống cánh đồng lúa chín\", từ \"rót mật\" gợi hình ảnh ánh nắng sánh vàng, ấm áp như mật ong đang chảy xuống, khiến cảnh vật trở nên ngọt ngào, ấm áp hơn hẳn so với chỉ nói \"nắng chiếu xuống\".",
      ],
      commonMistakes: [
        "Chỉ liệt kê từ hay mà không giải thích được vì sao nó hay",
        "Nhầm lẫn giữa việc tìm từ hay với việc tìm biện pháp tu từ có tên gọi cụ thể — không phải lúc nào cái hay cũng gọi được tên một biện pháp",
      ],
    },
  },
  {
    id: "VA-03",
    group: "VA",
    title: "Văn tả cây cối",
    // Giai đoạn 9 — bổ sung lesson còn thiếu (đã có bài tập từ trước).
    lesson: {
      concept:
        "Văn tả cây cối cần tả theo trình tự hợp lý (bao quát → chi tiết từng bộ phận: gốc, thân, cành, lá, hoa/quả), gắn với công dụng hoặc kỷ niệm của người viết với cây (xem 4 cách mở bài gián tiếp phù hợp ở KN-03).",
      steps: [
        "Giới thiệu cây định tả (tên cây, ở đâu, vì sao em chọn tả cây này).",
        "Tả bao quát (hình dáng, chiều cao, tán cây).",
        "Tả chi tiết từng bộ phận (gốc, thân, cành, lá, hoa/quả).",
        "Nêu công dụng của cây hoặc kỷ niệm gắn với cây.",
        "Nêu tình cảm của em với cây.",
      ],
      signals: [
        "Đề bài dạng \"tả một loại cây mà em yêu thích\", \"tả cây bóng mát ở sân trường\"",
      ],
      examples: [
        "\"Thân cây to đến mức hai bạn học sinh ôm không xuể, vỏ cây sần sùi, màu nâu xám\" — tả chi tiết bộ phận thân cây bằng hình ảnh cụ thể, dễ hình dung.",
      ],
      commonMistakes: [
        "Tả các bộ phận lộn xộn, không theo trình tự từ gốc lên ngọn hoặc từ bao quát đến chi tiết",
        "Chỉ tả hình dáng mà quên nêu công dụng hoặc kỷ niệm gắn với cây",
      ],
    },
  },

  // Giai đoạn 9 — hoàn thiện nốt nhóm KN (Mục 5.11: ưu tiên #1, ít tài liệu
  // sẵn có nhất, giá trị cao nhất). KN-01 đã có từ Giai đoạn 4.
  {
    id: "KN-02",
    group: "KN",
    title: "Kỹ năng làm bài cảm thụ: quy trình từ nhận diện biện pháp → nêu tác dụng → liên hệ cảm xúc",
    lesson: {
      concept:
        "Làm bài cảm thụ không phải là \"cảm nhận tự do\" mà là một kỹ năng có quy trình: nhận diện đúng biện pháp nghệ thuật, nêu đúng tác dụng của biện pháp đó, rồi mới liên hệ cảm xúc cá nhân.",
      steps: [
        "Đọc kỹ câu/đoạn văn được hỏi, gạch chân từ ngữ hoặc hình ảnh đặc biệt (so sánh, nhân hoá, từ láy, điệp từ...).",
        "Xác định chính xác biện pháp tu từ được sử dụng — gọi đúng tên (so sánh, nhân hoá, điệp từ, đảo ngữ...).",
        "Nêu tác dụng cụ thể của biện pháp đó với CÂU VĂN NÀY: hình ảnh trở nên sinh động, gợi cảm như thế nào, gợi ra điều gì.",
        "Liên hệ cảm xúc, suy nghĩ của bản thân với hình ảnh hoặc nội dung câu văn.",
        "Viết thành đoạn văn hoàn chỉnh theo cấu trúc mở – thân – kết (xem thêm CT-07).",
      ],
      signals: [
        "Đề bài thường có từ \"cảm nhận\", \"em có suy nghĩ gì\", \"nêu tác dụng của...\"",
        "Bài làm đạt điểm cao cần đủ CẢ HAI phần: gọi đúng tên biện pháp NGHỆ THUẬT và nêu ĐÚNG TÁC DỤNG — thiếu một trong hai vẫn bị trừ điểm nặng.",
      ],
      examples: [
        "Với câu \"Hàng cau đứng thẳng như những người lính canh gác khu vườn\": bước 1-2 nhận ra đây là biện pháp so sánh (hàng cau — người lính); bước 3 nêu tác dụng — khiến hàng cau hiện lên vững chãi, có tư thế nghiêm trang, gần gũi như con người; bước 4 liên hệ: gợi cảm giác khu vườn được canh giữ, bình yên.",
      ],
      commonMistakes: [
        "Chỉ gọi tên biện pháp tu từ mà không nêu tác dụng cụ thể",
        "Nêu tác dụng chung chung (\"làm câu văn hay hơn\") mà không gắn với hình ảnh/nội dung câu văn đang xét",
        "Bỏ qua hẳn bước liên hệ cảm xúc cá nhân",
      ],
    },
  },
  {
    id: "KN-03",
    group: "KN",
    title: "Kỹ năng viết mở bài gián tiếp cho từng kiểu bài",
    lesson: {
      concept:
        "Mở bài gián tiếp (không nêu ngay đối tượng ở câu đầu mà dẫn dắt qua 1–2 câu) thường hấp dẫn và ghi điểm hơn mở bài trực tiếp. Có 4 cách mở bài gián tiếp áp dụng được cho nhiều kiểu bài (tả người, tả cảnh, tả cây, tả con vật, kể chuyện).",
      steps: [
        "Cách 1 — Giới thiệu vị trí hoặc lý do có đối tượng, gắn với một kỷ niệm.",
        "Cách 2 — Bắt đầu từ một thời điểm đặc biệt (một mùa, một buổi, sau một sự kiện).",
        "Cách 3 — Dẫn vào từ một âm thanh, hình ảnh hoặc cảm giác gắn với đối tượng.",
        "Cách 4 — Bắt đầu bằng một câu thơ, câu hát, câu tục ngữ liên quan rồi dẫn tới đối tượng.",
        "Dù chọn cách nào, câu cuối đoạn mở bài luôn phải chốt lại rõ ràng: đối tượng cụ thể sắp được tả/kể là gì.",
      ],
      signals: [
        "Mở bài gián tiếp KHÔNG nêu tên đối tượng miêu tả ngay ở câu đầu tiên.",
        "Đoạn mở bài thường dài 2–4 câu, kết thúc bằng câu chốt nêu rõ đối tượng.",
      ],
      examples: [
        "Cách 2 (thời điểm đặc biệt) áp dụng cho văn tả cây: \"Mỗi độ hè về, tiếng ve lại râm ran khắp sân trường. Đó cũng là lúc cây phượng già ở góc sân bắt đầu khoác lên mình chiếc áo đỏ rực.\"",
        "Cách 3 (âm thanh) áp dụng cho văn tả con vật: \"Tiếng gáy vang lanh lảnh mỗi sớm tinh mơ đã trở thành âm thanh quen thuộc của nhà em — đó là chú gà trống mà em rất yêu quý.\"",
      ],
      commonMistakes: [
        "Nhầm mở bài gián tiếp với mở bài lan man, kể chuyện không liên quan tới đề",
        "Quên câu chốt nêu rõ đối tượng ở cuối đoạn mở bài, khiến người chấm không rõ bài sắp tả/kể về ai/cái gì",
      ],
    },
  },
  {
    id: "KN-04",
    group: "KN",
    title: "Kỹ năng lập dàn ý nhanh và phân bổ thời gian làm bài",
    lesson: {
      concept:
        "Trước khi viết, cần lập dàn ý nhanh bằng từ khoá (không viết câu hoàn chỉnh) để bài không thiếu ý, không lan man; đồng thời cần phân bổ thời gian hợp lý cho từng phần của đề thi.",
      steps: [
        "Đọc kỹ đề, xác định đúng yêu cầu (tả gì, kể gì, viết cho ai, theo kiểu bài nào).",
        "Gạch nhanh 3–5 ý chính theo cấu trúc mở – thân – kết, chỉ ghi từ khoá, không viết câu hoàn chỉnh.",
        "Ước lượng thời gian cho từng phần của đề (luyện từ và câu, đọc hiểu – cảm thụ, tập làm văn) theo đúng cơ cấu điểm của đề — phần chiếm nhiều điểm hơn thì dành nhiều thời gian hơn.",
        "Làm phần mình chắc điểm trước, phần khó hơn để sau — tránh bị kẹt ở một câu khó ngay từ đầu.",
        "Luôn dành khoảng 5 phút cuối giờ để soát lại bài (xem thêm KN-05).",
      ],
      signals: [
        "Đề thi càng dài (xu hướng đề mới từ 2025–2026 — theo Mục 4.1 nhận định của cô Thu Ngân) thì càng cần kỹ năng phân bổ thời gian tốt.",
        "Dàn ý tốt chỉ mất 2–3 phút để lập, không nên viết dài dòng.",
      ],
      examples: [
        "Với đề 60 phút gồm 3 phần đều nhau: nên dành khoảng 20 phút mỗi phần, trong đó phần tập làm văn cần trừ riêng 3 phút lập dàn ý và 5 phút soát lỗi trong tổng thời gian đó.",
      ],
      commonMistakes: [
        "Viết dàn ý quá chi tiết (thành câu hoàn chỉnh) khiến mất nhiều thời gian viết hai lần",
        "Dành quá nhiều thời gian cho một câu khó ở đầu bài, khiến các phần sau bị vội hoặc bỏ trống",
      ],
    },
  },
  {
    id: "KN-05",
    group: "KN",
    title: "Kỹ năng soát lỗi trước khi nộp: chính tả, dùng từ, đặt câu",
    lesson: {
      concept:
        "Soát lỗi là bước cuối cùng nhưng rất quan trọng — giúp tránh mất điểm oan vì lỗi chính tả, dùng từ sai, hoặc câu thiếu thành phần, dù nội dung bài đã tốt.",
      steps: [
        "Đọc lại toàn bài một lượt, tập trung vào chính tả (l/n, ch/tr, s/x, r/d/gi, dấu hỏi/dấu ngã).",
        "Kiểm tra từng câu có đủ chủ ngữ – vị ngữ không, dấu câu đã đặt đúng chưa.",
        "Kiểm tra từ dùng có phù hợp ngữ cảnh không, có bị lặp từ nhiều lần không.",
        "Với bài tập làm văn: kiểm tra đã tả/kể đúng đối tượng đề yêu cầu chưa, đã đủ 3 phần mở – thân – kết chưa.",
        "Sửa trực tiếp, gọn gàng — gạch một gạch ngang lên chỗ sai, viết lại bên cạnh, không tẩy xoá nhiều lần.",
      ],
      signals: [
        "Nên dành ít nhất 3–5 phút cuối giờ thi riêng cho việc soát lỗi (xem thêm KN-04 về phân bổ thời gian).",
        "Đọc thành tiếng (nhẩm trong đầu) thường giúp phát hiện câu thiếu thành phần tốt hơn đọc lướt bằng mắt.",
      ],
      examples: [
        "Câu \"Em rất là thích con mèo nhà em\" khi soát lại nên bỏ từ \"là\" thừa: \"Em rất thích con mèo nhà em.\"",
      ],
      commonMistakes: [
        "Bỏ qua hẳn bước soát lỗi vì thiếu thời gian (thường do không phân bổ thời gian tốt từ đầu)",
        "Chỉ đọc lướt qua mà không thực sự kiểm tra từng câu, từng dấu câu",
      ],
    },
  },

  // Giai đoạn 9 — TC-03/04 ưu tiên kế tiếp sau CA (Mục 5.11: "CA-01→07,
  // TC-03/04, NT-03/04"). FR-D01: nguồn chuẩn cho nội dung tranh cãi là bộ
  // Kết nối tri thức với cuộc sống. Các ví dụ dạy chính và câu hỏi trắc
  // nghiệm dùng từ KHÔNG tranh cãi (FR-D03); từ tranh cãi chỉ nêu trong
  // disputedNote (FR-D02), không dùng làm đáp án đúng (FR-D04, xem
  // disputed-words.ts + content-schema.test.ts).
  {
    id: "TC-03",
    group: "TC",
    title: "Từ ghép: ghép tổng hợp và ghép phân loại",
    disputedNote:
      "Một số từ hai tiếng nghe như có âm lặp lại (ví dụ \"chôm chôm\", \"cào cào\", \"ba ba\") hiện có hai cách xếp loại khác nhau giữa các tài liệu: sách giáo khoa tiểu học truyền thống thường xếp vào từ láy (dựa vào hình thức âm thanh), trong khi một số giáo trình ngôn ngữ học lại không xem đây là từ láy vì không xác định được tiếng nào có nghĩa gốc riêng (gọi là từ đơn đa âm tiết). Bài học này không lấy các từ đó làm ví dụ chính hay đáp án trắc nghiệm.",
    lesson: {
      concept:
        "Từ ghép là từ được tạo thành bằng cách ghép hai tiếng có nghĩa lại với nhau, có quan hệ với nhau về NGHĨA (khác với từ láy có quan hệ về ÂM). Có hai loại: ghép tổng hợp (nghĩa khái quát, các tiếng bình đẳng về nghĩa) và ghép phân loại (nghĩa cụ thể, hẹp hơn — tiếng sau làm rõ, phân loại cho tiếng trước).",
      signals: [
        "Ghép tổng hợp: các tiếng gần nghĩa hoặc cùng loại, đổi trật tự nghĩa không đổi nhiều (VD: quần áo, bàn ghế, ăn uống)",
        "Ghép phân loại: tiếng đứng sau thu hẹp, làm rõ nghĩa của tiếng đứng trước (VD: hoa hồng, xe đạp)",
        "Mỗi tiếng trong từ ghép (thường) đều có nghĩa riêng, xác định được",
      ],
      examples: [
        "\"Quần áo\" — ghép tổng hợp: \"quần\" và \"áo\" đều là trang phục, ghép lại chỉ chung \"trang phục\".",
        "\"Xe đạp\" — ghép phân loại: \"xe\" là loại chung, \"đạp\" phân loại cụ thể loại xe đó (khác xe máy, xe hơi).",
        "\"Hoa hồng\" — ghép phân loại: chỉ riêng loại hoa hồng, không phải hoa nói chung.",
      ],
      commonMistakes: [
        "Nhầm ghép phân loại với ghép tổng hợp khi không xác định được tiếng nào đang bổ sung, thu hẹp nghĩa cho tiếng kia",
        "Nhầm từ ghép với từ láy khi hai tiếng có âm gần giống nhau — cần kiểm tra xem MỖI tiếng có nghĩa riêng không (từ ghép) hay chỉ một/không tiếng nào có nghĩa riêng (thường là từ láy)",
      ],
    },
  },
  {
    id: "TC-04",
    group: "TC",
    title: "Từ láy: láy âm, láy vần, láy toàn bộ",
    disputedNote:
      "Một số từ hai tiếng nghe như có âm lặp lại (ví dụ \"chôm chôm\", \"cào cào\", \"ba ba\") hiện có hai cách xếp loại khác nhau giữa các tài liệu — xem chi tiết ở chuyên đề TC-03. Bài học này không lấy các từ đó làm ví dụ chính hay đáp án trắc nghiệm.",
    lesson: {
      concept:
        "Từ láy là từ được tạo ra bằng cách lặp lại (toàn bộ hoặc một phần) âm thanh của một tiếng, tạo giá trị gợi tả, gợi cảm — khác với từ ghép, các tiếng trong từ láy thường không có nghĩa riêng biệt khi đứng một mình (trừ tiếng gốc, nếu có).",
      signals: [
        "Láy âm: phụ âm đầu của các tiếng giống nhau, phần vần khác nhau (VD: long lanh, mênh mông)",
        "Láy vần: phần vần giống nhau, phụ âm đầu khác nhau (VD: lác đác, bâng khuâng)",
        "Láy toàn bộ: lặp lại gần như toàn bộ tiếng gốc, có thể biến đổi thanh điệu nhẹ (VD: xanh xanh, nho nhỏ)",
      ],
      examples: [
        "\"Long lanh\" — láy âm: phụ âm đầu \"l\" lặp lại ở cả hai tiếng.",
        "\"Lác đác\" — láy vần: phần vần \"ac\" lặp lại ở cả hai tiếng.",
        "\"Xanh xanh\" — láy toàn bộ: lặp lại nguyên vẹn tiếng \"xanh\".",
      ],
      commonMistakes: [
        "Nhầm từ láy với từ ghép khi cả hai tiếng đều có nghĩa riêng rõ ràng (trường hợp đó thường là từ ghép, không phải láy)",
        "Nhầm láy âm với láy vần khi không phân tích kỹ phụ âm đầu và phần vần của từng tiếng",
      ],
    },
  },
  {
    id: "TC-01",
    group: "TC",
    title: "Tiếng và cấu tạo của tiếng (âm đầu, vần, thanh)",
    lesson: {
      concept:
        "Tiếng là đơn vị phát âm nhỏ nhất trong tiếng Việt, thường được viết tách rời bằng khoảng trắng. Mỗi tiếng có cấu tạo gồm 3 phần: âm đầu (phụ âm đứng đầu, có thể vắng), vần (gồm âm đệm, âm chính, âm cuối) và thanh điệu (dấu thanh).",
      signals: [
        "Đề bài dạng \"phân tích cấu tạo của tiếng...\", \"tiếng ... gồm âm đầu, vần và thanh nào?\"",
        "Mỗi tiếng luôn có vần và thanh điệu, nhưng có thể không có âm đầu (VD: \"ăn\", \"ơi\")",
      ],
      examples: [
        "Tiếng \"toán\" gồm: âm đầu \"t\", vần \"oán\" (âm đệm \"o\", âm chính \"a\", âm cuối \"n\"), thanh sắc.",
        "Tiếng \"ăn\" gồm: không có âm đầu, vần \"ăn\", thanh ngang (không dấu).",
      ],
      commonMistakes: [
        "Nhầm \"tiếng\" với \"từ\" — một từ có thể gồm một hoặc nhiều tiếng (xem thêm TC-02)",
        "Bỏ sót thanh ngang (không dấu) khi phân tích, vì nghĩ tiếng không có dấu thì không có thanh điệu",
      ],
    },
  },
  {
    id: "TC-02",
    group: "TC",
    title: "Từ, từ đơn và từ phức",
    lesson: {
      concept:
        "Từ là đơn vị nhỏ nhất dùng để đặt câu, có nghĩa hoàn chỉnh. Từ đơn gồm 1 tiếng, từ phức gồm 2 tiếng trở lên (từ phức bao gồm cả từ ghép và từ láy — xem chi tiết cách phân biệt ở TC-03, TC-04).",
      signals: [
        "Đếm số tiếng tạo nên từ: 1 tiếng = từ đơn; từ 2 tiếng trở lên = từ phức",
      ],
      examples: [
        "\"Nhà\", \"đi\", \"đẹp\" là từ đơn (1 tiếng).",
        "\"Nhà cửa\", \"xinh đẹp\", \"long lanh\" là từ phức (2 tiếng trở lên).",
      ],
      commonMistakes: [
        "Nhầm \"tiếng\" với \"từ\" khi đếm — không phải cứ tách được thành nhiều tiếng là nhiều từ, cần xem các tiếng đó có đi liền nhau tạo thành một đơn vị nghĩa hay không",
        "Không xác định đúng ranh giới từ trong câu khi câu có nhiều từ phức liền nhau",
      ],
    },
  },
  {
    id: "NT-03",
    group: "NT",
    title: "Từ đồng âm",
    lesson: {
      concept:
        "Từ đồng âm là những từ giống nhau hoàn toàn về âm thanh (cách đọc, cách viết) nhưng khác nhau hoàn toàn về nghĩa, không có liên hệ gì với nhau.",
      signals: [
        "Hai từ đọc/viết giống hệt nhau nhưng nghĩa hoàn toàn không liên quan",
        "Phải dựa vào ngữ cảnh của câu mới xác định được từ đang mang nghĩa nào",
      ],
      examples: [
        "\"Con ngựa đá con ngựa đá.\" — \"đá\" thứ nhất là động từ (hành động đá), \"đá\" thứ hai là danh từ (chất liệu đá) — hai từ \"đá\" đồng âm, nghĩa không liên quan.",
        "\"Bàn\" trong \"cái bàn học\" (đồ vật) và \"bàn\" trong \"bàn bạc công việc\" (trao đổi ý kiến) là hai từ đồng âm.",
      ],
      commonMistakes: [
        "Nhầm từ đồng âm với từ nhiều nghĩa (NT-04) — từ nhiều nghĩa các nghĩa có liên hệ với nhau, còn từ đồng âm thì hoàn toàn không liên quan",
      ],
    },
  },
  {
    id: "NT-04",
    group: "NT",
    title: "Từ nhiều nghĩa: nghĩa gốc và nghĩa chuyển",
    lesson: {
      concept:
        "Từ nhiều nghĩa là từ có một nghĩa gốc (nghĩa ban đầu, cơ bản) và một hoặc nhiều nghĩa chuyển (được suy ra, phát triển từ nghĩa gốc, vẫn có liên hệ với nghĩa gốc).",
      steps: [
        "Xác định nghĩa gốc của từ (nghĩa quen thuộc, cơ bản nhất, thường dùng cho nghĩa đen).",
        "Đọc câu có từ đó trong ngữ cảnh, xem nghĩa trong câu có phải nghĩa gốc không.",
        "Nếu khác nghĩa gốc nhưng vẫn có điểm liên hệ (hình dáng, chức năng, vị trí...) thì đó là nghĩa chuyển.",
      ],
      signals: [
        "Nghĩa chuyển vẫn có mối liên hệ nào đó với nghĩa gốc (khác hẳn từ đồng âm — xem NT-03)",
      ],
      examples: [
        "\"Mắt\" nghĩa gốc là bộ phận cơ thể để nhìn (\"đôi mắt to tròn\"); nghĩa chuyển: \"mắt na\", \"mắt lưới\" (chỉ những điểm nhỏ có hình dạng giống con mắt).",
        "\"Chân\" nghĩa gốc là bộ phận cơ thể để đi (\"đôi chân khoẻ mạnh\"); nghĩa chuyển: \"chân bàn\", \"chân núi\" (chỉ phần dưới cùng, nơi tiếp xúc với mặt đất).",
      ],
      commonMistakes: [
        "Nhầm từ nhiều nghĩa với từ đồng âm — cần kiểm tra xem các nghĩa có liên hệ với nhau không",
        "Không xác định đúng đâu là nghĩa gốc, đâu là nghĩa chuyển trong một cặp nghĩa",
      ],
    },
  },
  {
    id: "CT-03",
    group: "CT",
    title: "Biện pháp tu từ: Điệp từ, điệp ngữ",
    lesson: {
      concept:
        "Điệp từ, điệp ngữ là biện pháp lặp lại có chủ ý một từ hoặc cụm từ nhiều lần trong câu/đoạn văn, thơ nhằm nhấn mạnh ý, tạo nhịp điệu và gợi cảm xúc.",
      signals: [
        "Một từ hoặc cụm từ xuất hiện lặp lại ít nhất 2 lần trong câu hoặc đoạn văn/thơ gần nhau",
        "Việc lặp lại có dụng ý nhấn mạnh, không phải lỗi diễn đạt trùng lặp ngẫu nhiên",
      ],
      examples: [
        "\"Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín.\" — điệp từ \"giữ\" lặp lại 4 lần, nhấn mạnh vai trò bảo vệ nhiều mặt của tre.",
        "\"Đoàn kết, đoàn kết, đại đoàn kết.\" — điệp ngữ \"đoàn kết\" nhấn mạnh sức mạnh của sự đoàn kết.",
      ],
      commonMistakes: [
        "Nhầm điệp từ với việc một từ (như \"là\", \"và\", \"thì\") xuất hiện tự nhiên nhiều lần mà không có dụng ý nghệ thuật",
        "Chỉ ra được từ lặp lại nhưng không nêu được tác dụng cụ thể, chỉ nói chung chung \"làm câu hay hơn\"",
      ],
    },
  },
  {
    id: "CT-04",
    group: "CT",
    title: "Biện pháp tu từ: Đảo ngữ; từ láy gợi tả, gợi cảm",
    lesson: {
      concept:
        "Đảo ngữ là thay đổi trật tự thông thường của các thành phần câu (thường đưa vị ngữ lên trước chủ ngữ) để nhấn mạnh, tạo ấn tượng mạnh; thường đi kèm từ láy gợi tả (mô phỏng hình ảnh, âm thanh) hoặc gợi cảm (mô phỏng cảm xúc) làm tăng sức biểu cảm.",
      signals: [
        "Trật tự câu khác với cấu trúc \"chủ ngữ đứng trước vị ngữ\" quen thuộc — vị ngữ/từ miêu tả được đưa lên đầu câu",
        "Xuất hiện từ láy miêu tả sinh động hình ảnh, âm thanh hoặc cảm xúc (xem thêm CT-05 về cái hay của từ láy gợi tả)",
      ],
      examples: [
        "\"Lom khom dưới núi, tiều vài chú.\" — đảo ngữ, đưa từ láy \"lom khom\" (dáng vẻ) lên đầu câu để nhấn mạnh hình ảnh nhỏ bé, vất vả của người tiều phu.",
        "\"Rì rào gió thổi, xào xạc lá rơi.\" — từ láy \"rì rào\", \"xào xạc\" gợi tả âm thanh sinh động của gió và lá.",
      ],
      commonMistakes: [
        "Nhầm đảo ngữ (có dụng ý nghệ thuật) với câu bị đảo trật tự do lỗi diễn đạt thông thường",
        "Chỉ gọi tên \"từ láy\" mà không chỉ ra được từ láy đó gợi tả điều gì cụ thể (hình ảnh, âm thanh hay cảm xúc)",
      ],
    },
  },
  {
    id: "CT-06",
    group: "CT",
    title: "Cảm thụ nhân vật",
    lesson: {
      concept:
        "Cảm thụ nhân vật là phân tích các chi tiết về ngoại hình, hành động, lời nói, suy nghĩ của nhân vật trong tác phẩm để rút ra tính cách, phẩm chất, từ đó nêu cảm nhận, đánh giá của bản thân về nhân vật.",
      steps: [
        "Đọc kỹ đoạn văn có nhân vật, tìm các chi tiết về ngoại hình, hành động, lời nói, suy nghĩ của nhân vật.",
        "Từ các chi tiết đó, suy ra tính cách hoặc phẩm chất của nhân vật (ví dụ: hành động nhường nhịn người khác → nhân vật giàu tình yêu thương).",
        "Nêu cảm nhận, đánh giá của bản thân về nhân vật (yêu thích, khâm phục, đồng cảm...) kèm lý do cụ thể dựa trên chi tiết trong bài.",
      ],
      signals: [
        "Đề bài dạng \"Em có cảm nhận gì về nhân vật...\", \"Nhân vật ... để lại ấn tượng gì cho em\"",
      ],
      examples: [
        "Nhân vật cậu bé trong một câu chuyện luôn nhường phần ăn cho em nhỏ dù bản thân cũng đói — chi tiết này cho thấy cậu bé giàu tình yêu thương, biết hy sinh vì người khác.",
      ],
      commonMistakes: [
        "Chỉ kể lại hành động của nhân vật mà không rút ra được tính cách, phẩm chất từ hành động đó",
        "Nêu cảm nhận chung chung (\"em thích nhân vật này\") mà không có lý do cụ thể dựa trên chi tiết trong bài",
      ],
    },
  },
  {
    id: "NT-02",
    group: "NT",
    title: "Từ trái nghĩa",
    lesson: {
      concept:
        "Từ trái nghĩa là những từ có nghĩa hoàn toàn đối lập nhau trên cùng một tiêu chí, thường dùng để tạo sự đối lập, làm nổi bật đặc điểm của sự vật, sự việc.",
      signals: [
        "Hai từ chỉ hai mức độ/trạng thái đối lập nhau trên CÙNG một tiêu chí (VD: cao – thấp, cùng nói về chiều cao)",
        "Một từ có thể có nhiều từ trái nghĩa khác nhau tuỳ theo nghĩa đang dùng trong câu",
      ],
      examples: [
        "\"Cao\" – \"thấp\" (cùng tiêu chí chiều cao); \"chăm chỉ\" – \"lười biếng\" (cùng tiêu chí thái độ làm việc).",
        "\"Nhạt\" trái nghĩa với \"đậm\" khi nói về màu sắc, nhưng trái nghĩa với \"mặn\" khi nói về vị giác — cùng một từ nhưng trái nghĩa khác nhau tuỳ ngữ cảnh.",
      ],
      commonMistakes: [
        "Ghép hai từ không cùng tiêu chí thành cặp trái nghĩa (VD: \"cao\" và \"xanh\" không phải trái nghĩa vì không nói về cùng một đặc điểm)",
        "Chọn sai từ trái nghĩa khi từ gốc có nhiều nghĩa mà không để ý ngữ cảnh của câu",
      ],
    },
  },
  {
    id: "NT-05",
    group: "NT",
    title: "Từ Hán Việt và mở rộng vốn từ theo chủ điểm",
    lesson: {
      concept:
        "Từ Hán Việt là từ mượn gốc Hán, chiếm tỷ lệ lớn trong tiếng Việt, thường mang sắc thái trang trọng, khái quát hơn so với từ thuần Việt có nghĩa tương đương. Mở rộng vốn từ theo chủ điểm là học thêm các từ ngữ (kể cả từ Hán Việt) cùng xoay quanh một chủ đề nhất định.",
      signals: [
        "Từ Hán Việt thường gồm 2 tiếng, mỗi tiếng nghe \"trang trọng\" hơn từ thuần Việt cùng nghĩa (VD: \"phụ mẫu\" so với \"cha mẹ\")",
        "Đề bài dạng \"tìm từ cùng chủ điểm với...\" yêu cầu vận dụng vốn từ đã học theo chủ điểm",
      ],
      examples: [
        "\"Phụ mẫu\" (Hán Việt, trang trọng) và \"cha mẹ\" (thuần Việt, thông thường) cùng chỉ một đối tượng nhưng khác sắc thái.",
        "Chủ điểm \"Tổ quốc\": các từ như \"giang sơn\", \"đất nước\", \"quốc gia\", \"Tổ quốc\" đều liên quan đến chủ điểm này, phần lớn là từ Hán Việt.",
      ],
      commonMistakes: [
        "Nghĩ mọi từ có 2 tiếng đều là từ Hán Việt — nhiều từ ghép, từ láy thuần Việt cũng có 2 tiếng",
        "Không phân biệt được sắc thái trang trọng của từ Hán Việt so với từ thuần Việt tương ứng khi chọn từ điền vào câu",
      ],
    },
  },
  {
    id: "NT-06",
    group: "NT",
    title: "Thành ngữ, tục ngữ, ca dao: thuộc, hiểu và vận dụng",
    lesson: {
      concept:
        "Thành ngữ là cụm từ cố định mang nghĩa bóng, không suy ra trực tiếp từ nghĩa đen của từng từ. Tục ngữ là câu nói ngắn gọn, có vần điệu, đúc kết kinh nghiệm sống. Ca dao là những câu thơ dân gian (thường thể lục bát) thể hiện tình cảm, kinh nghiệm sống.",
      steps: [
        "Đọc kỹ câu thành ngữ/tục ngữ/ca dao, hiểu nghĩa đen (nghĩa của từng từ) trước.",
        "Suy ra nghĩa bóng — bài học hoặc kinh nghiệm mà câu đó muốn truyền tải.",
        "Liên hệ với một tình huống thực tế phù hợp để vận dụng câu đó.",
      ],
      signals: [
        "Thành ngữ thường KHÔNG phải câu hoàn chỉnh — chỉ là một cụm từ, không rõ chủ ngữ – vị ngữ (VD: \"nước đổ lá khoai\")",
        "Tục ngữ thường là câu hoàn chỉnh, ngắn gọn, có vần (VD: \"Có công mài sắt, có ngày nên kim\")",
      ],
      examples: [
        "\"Nước đổ lá khoai\" (thành ngữ) — chỉ việc làm vô ích, không có kết quả, ví như đổ nước lên lá khoai trơn, nước trôi hết ngay.",
        "\"Có công mài sắt, có ngày nên kim\" (tục ngữ) — kiên trì, chăm chỉ thì ắt sẽ thành công.",
      ],
      commonMistakes: [
        "Chỉ dừng lại ở nghĩa đen mà không suy ra được nghĩa bóng, bài học của thành ngữ/tục ngữ",
        "Nhầm lẫn giữa thành ngữ (cụm từ cố định) và tục ngữ (câu hoàn chỉnh, đúc kết kinh nghiệm)",
      ],
    },
  },
  {
    id: "CD-02",
    group: "CD",
    title: "Chính tả: thanh hỏi và thanh ngã",
    lesson: {
      concept:
        "Thanh hỏi (dấu ?) và thanh ngã (dấu ~) dễ bị lẫn khi phát âm ở nhiều vùng miền. Cần phân biệt bằng cách nhớ mặt chữ và nghĩa của từ; với từ láy có thể tham khảo mẹo dân gian: tiếng mang thanh huyền hoặc nặng thường đi cùng tiếng mang thanh ngã, còn tiếng mang thanh ngang (không dấu) hoặc sắc thường đi cùng tiếng mang thanh hỏi.",
      signals: [
        "Đề bài dạng \"điền dấu hỏi hay dấu ngã\", \"từ nào viết đúng chính tả\"",
        "Từ láy: huyền/nặng thường đi với ngã; ngang/sắc thường đi với hỏi (chỉ là mẹo tham khảo, không tuyệt đối)",
      ],
      examples: [
        "\"Nghỉ ngơi\" (thanh hỏi, nghĩa là dừng làm việc để thư giãn) khác với \"suy nghĩ\" (thanh ngã, nghĩa là dùng trí óc để hiểu, đánh giá).",
        "\"Sẵn sàng\" — \"sẵn\" mang thanh ngã, \"sàng\" mang thanh huyền, đúng theo mẹo huyền đi với ngã.",
      ],
      commonMistakes: [
        "Nhầm \"nghỉ\" (nghỉ ngơi) với \"nghĩ\" (suy nghĩ) vì phát âm giống nhau ở nhiều vùng, dẫn đến sai nghĩa cả câu",
        "Chỉ dựa vào mẹo dấu thanh của từ láy mà không kiểm tra lại bằng nghĩa của từ — mẹo chỉ đúng với phần lớn trường hợp, không phải quy tắc tuyệt đối",
      ],
    },
  },
  {
    id: "CD-03",
    group: "CD",
    title: "Chính tả: âm cuối và vần dễ lẫn (n/ng, c/t, iu/ưu, ươu/iêu…)",
    lesson: {
      concept:
        "Một số âm cuối (n/ng, c/t) và vần (iu/ưu, ươu/iêu...) dễ bị lẫn khi phát âm theo phương ngữ, cần phân biệt bằng mặt chữ và nghĩa của từ.",
      signals: [
        "Đề bài dạng \"điền n hay ng\", \"điền c hay t\", \"từ nào viết đúng vần\"",
      ],
      examples: [
        "\"Con hươu\" (vần \"ươu\") — không viết \"con hiêu\".",
        "\"Líu lo\" (vần \"iu\") — không viết \"lưu lo\".",
        "\"Bàn học\" (âm cuối n) khác nghĩa hoàn toàn với \"cây bàng\" (âm cuối ng).",
      ],
      commonMistakes: [
        "Nhầm âm cuối n/ng khi phát âm không phân biệt rõ, dẫn đến sai nghĩa từ",
        "Nhầm vần gần giống nhau (iu/ưu, ươu/iêu) do ảnh hưởng phát âm vùng miền",
      ],
    },
  },
  {
    id: "CD-04",
    group: "CD",
    title: "Quy tắc viết hoa (tên người, địa danh, cơ quan, danh hiệu)",
    lesson: {
      concept:
        "Tên riêng (tên người, địa danh, cơ quan/tổ chức, danh hiệu) phải viết hoa chữ cái đầu của MỌI tiếng tạo nên tên riêng đó, không chỉ tiếng đầu tiên.",
      steps: [
        "Xác định đây có phải tên riêng không (chỉ một người/nơi/tổ chức cụ thể, không phải danh từ chung).",
        "Nếu là tên riêng: viết hoa chữ cái đầu của mọi tiếng trong tên riêng đó.",
        "Danh từ chung đi kèm tên riêng (VD \"thành phố\", \"sông\", \"trường\") chỉ viết hoa khi đứng đầu câu, không viết hoa vì đi cùng tên riêng.",
      ],
      signals: [
        "Tên người: Nguyễn Văn An; Tên địa danh: Hà Nội, Sông Hồng; Tên cơ quan: Trường Tiểu học Kim Đồng; Danh hiệu: Anh hùng Lao động",
      ],
      examples: [
        "\"Nguyễn Văn An\" — viết hoa cả 3 tiếng vì đều là tên riêng của một người.",
        "\"thành phố Hồ Chí Minh\" — chỉ viết hoa \"Hồ Chí Minh\" (tên riêng), \"thành phố\" là danh từ chung, không viết hoa (trừ khi đứng đầu câu).",
      ],
      commonMistakes: [
        "Chỉ viết hoa tiếng đầu tiên của tên riêng có nhiều tiếng (VD viết sai \"Nguyễn văn An\", đúng phải là \"Nguyễn Văn An\")",
        "Viết hoa cả danh từ chung đi kèm tên riêng khi không đứng đầu câu (VD viết hoa nhầm \"Thành phố\" trong \"...đến thành phố Hà Nội\")",
      ],
    },
  },
  {
    id: "CD-05",
    group: "CD",
    title: "Dấu câu: chấm, phẩy, chấm hỏi, chấm than, hai chấm, ngoặc kép, gạch ngang, chấm lửng",
    lesson: {
      concept:
        "Mỗi loại dấu câu có chức năng riêng: dấu chấm kết thúc câu kể, dấu phẩy ngăn cách các bộ phận trong câu, dấu chấm hỏi kết thúc câu hỏi, dấu chấm than kết thúc câu cảm/khiến, dấu hai chấm báo hiệu lời dẫn hoặc phần liệt kê, dấu ngoặc kép đánh dấu lời dẫn trực tiếp hoặc từ ngữ đặc biệt, dấu gạch ngang đánh dấu lời thoại hoặc phần chú thích, dấu chấm lửng thể hiện ý còn tiếp hoặc sự ngập ngừng.",
      signals: [
        "Đề bài dạng \"điền dấu câu thích hợp vào chỗ trống\", \"câu này còn thiếu dấu gì?\"",
      ],
      examples: [
        "\"Mẹ hỏi: \\\"Con đã làm bài tập chưa?\\\"\" — dấu hai chấm báo hiệu lời dẫn, dấu ngoặc kép đánh dấu lời nói trực tiếp, dấu chấm hỏi kết thúc câu hỏi bên trong.",
      ],
      commonMistakes: [
        "Lạm dụng dấu chấm than cho những câu kể bình thường, không mang sắc thái cảm thán",
        "Quên đặt dấu hai chấm trước phần lời dẫn trực tiếp hoặc phần liệt kê",
      ],
    },
  },
  {
    id: "VA-01",
    group: "VA",
    title: "Văn tả người",
    lesson: {
      concept:
        "Văn tả người cần tả theo trình tự: ngoại hình (bao quát rồi chi tiết: dáng người, khuôn mặt, mái tóc, trang phục...), sau đó tính cách/hoạt động (qua lời nói, cử chỉ, việc làm cụ thể), gắn với tình cảm hoặc kỷ niệm của người viết.",
      steps: [
        "Chọn người định tả (thường là người thân quen) và giới thiệu ngắn gọn.",
        "Tả bao quát (tuổi, dáng người, ấn tượng chung).",
        "Tả chi tiết ngoại hình (khuôn mặt, mắt, tóc, trang phục...).",
        "Tả tính cách qua hành động, lời nói cụ thể — không liệt kê tính từ suông.",
        "Nêu tình cảm, kỷ niệm gắn với người đó.",
      ],
      signals: [
        "Đề bài dạng \"tả một người thân trong gia đình em\", \"tả thầy/cô giáo mà em yêu quý\"",
      ],
      examples: [
        "Thay vì chỉ viết \"bà em rất hiền lành\", nên viết \"mỗi khi em làm sai, bà chỉ nhẹ nhàng nhắc nhở chứ không bao giờ la mắng\" — có hành động cụ thể minh hoạ cho tính cách.",
      ],
      commonMistakes: [
        "Chỉ liệt kê đặc điểm ngoại hình mà không có tính cách hay hoạt động cụ thể đi kèm",
        "Tả tính cách bằng tính từ chung chung (tốt bụng, hiền lành) mà không có dẫn chứng hành động cụ thể",
      ],
    },
  },
  {
    id: "VA-02",
    group: "VA",
    title: "Văn tả cảnh",
    lesson: {
      concept:
        "Văn tả cảnh cần tả theo một trình tự hợp lý (từ xa đến gần, từ bao quát đến chi tiết, hoặc theo thời gian), kết hợp miêu tả với cảm xúc, liên tưởng của người viết trước cảnh vật.",
      steps: [
        "Xác định cảnh định tả và thời điểm (cảnh gì, ở đâu, vào lúc nào).",
        "Tả bao quát toàn cảnh.",
        "Tả chi tiết theo trình tự hợp lý (xa → gần, hoặc theo thời gian sáng → trưa → chiều).",
        "Lồng cảm xúc, liên tưởng vào lời tả, không chỉ liệt kê sự vật.",
        "Nêu cảm nghĩ chung về cảnh.",
      ],
      signals: [
        "Đề bài dạng \"tả cảnh đẹp quê hương em\", \"tả cảnh buổi sáng trên cánh đồng\"",
      ],
      examples: [
        "Tả cảnh biển: bắt đầu bằng bao quát (biển rộng, xanh biếc), rồi đến chi tiết (sóng, cát, bãi biển, con người) — theo trình tự từ xa đến gần.",
      ],
      commonMistakes: [
        "Tả lộn xộn, không theo trình tự rõ ràng khiến người đọc khó hình dung không gian",
        "Chỉ liệt kê sự vật (có gì tả nấy) mà không có cảm xúc, liên tưởng đi kèm",
      ],
    },
  },
  {
    id: "VA-04",
    group: "VA",
    title: "Văn tả con vật",
    lesson: {
      concept:
        "Văn tả con vật cần tả ngoại hình (đặc điểm nổi bật: bộ lông, hình dáng...) và đặc biệt chú trọng hoạt động, thói quen của con vật — đây là phần thường làm bài văn sinh động, gắn với kỷ niệm giữa người viết và con vật.",
      steps: [
        "Giới thiệu con vật định tả (loài gì, có từ khi nào, tên gọi nếu có).",
        "Tả bao quát hình dáng.",
        "Tả chi tiết các bộ phận nổi bật.",
        "Tả hoạt động, thói quen đặc trưng của con vật (đi lại, ăn uống, phản ứng khi gặp người...).",
        "Nêu tình cảm, kỷ niệm với con vật.",
      ],
      signals: [
        "Đề bài dạng \"tả con vật nuôi mà em yêu thích\"",
      ],
      examples: [
        "\"Mỗi khi em vừa mở cửa, chú cún lại chạy ra vẫy đuôi mừng rỡ rồi quấn lấy chân em\" — tả hoạt động, thói quen cụ thể khiến bài văn sinh động hơn chỉ tả ngoại hình.",
      ],
      commonMistakes: [
        "Chỉ tả ngoại hình mà bỏ qua hoạt động, thói quen — khiến bài văn khô khan, thiếu sức sống",
        "Tả con vật giống hệt bài mẫu, không có chi tiết riêng gắn với con vật thật của người viết",
      ],
    },
  },
  {
    id: "VA-05",
    group: "VA",
    title: "Văn tả đồ vật",
    lesson: {
      concept:
        "Văn tả đồ vật cần tả theo trình tự hợp lý (tổng thể → từng bộ phận theo cấu tạo), nêu công dụng và gắn với kỷ niệm hoặc tình cảm với đồ vật đó (đặc biệt nếu đó là món quà hoặc vật gắn bó lâu).",
      steps: [
        "Giới thiệu đồ vật (đó là gì, có từ khi nào, ai tặng/mua).",
        "Tả bao quát (hình dáng, kích thước, màu sắc).",
        "Tả chi tiết từng bộ phận theo cấu tạo.",
        "Nêu công dụng, cách sử dụng.",
        "Nêu tình cảm, kỷ niệm gắn với đồ vật.",
      ],
      signals: [
        "Đề bài dạng \"tả một đồ vật em yêu thích\", \"tả chiếc cặp sách của em\"",
      ],
      examples: [
        "\"Chiếc bút máy màu xanh này là món quà ông tặng em ngày vào lớp 1, mỗi lần viết em lại nhớ đến ông\" — gắn đồ vật với kỷ niệm cụ thể.",
      ],
      commonMistakes: [
        "Tả chung chung, không có bộ phận cụ thể nào được miêu tả chi tiết",
        "Quên nêu công dụng hoặc tình cảm gắn với đồ vật",
      ],
    },
  },
  {
    id: "VA-06",
    group: "VA",
    title: "Kể chuyện được chứng kiến hoặc tham gia",
    lesson: {
      concept:
        "Đây là kể chuyện có thật, đã xảy ra với chính người viết hoặc người viết chứng kiến — cần kể theo trình tự thời gian, có diễn biến rõ ràng (mở đầu, diễn biến, kết thúc) và nêu cảm nghĩ, bài học rút ra.",
      steps: [
        "Giới thiệu câu chuyện (xảy ra khi nào, ở đâu, ai liên quan).",
        "Kể diễn biến câu chuyện theo trình tự thời gian, có chi tiết cụ thể (không kể chung chung).",
        "Kể tình huống đáng nhớ nhất (cao trào) của câu chuyện.",
        "Kể kết thúc câu chuyện.",
        "Nêu cảm nghĩ, bài học rút ra.",
      ],
      signals: [
        "Đề bài dạng \"kể lại một việc tốt em đã làm\", \"kể một kỷ niệm đáng nhớ với bạn bè\"",
      ],
      examples: [
        "Kể chuyện giúp một cụ già qua đường: giới thiệu tình huống, kể lại hành động cụ thể, kết thúc bằng cảm xúc của cụ già và bài học về sự tốt bụng.",
      ],
      commonMistakes: [
        "Kể lan man nhiều sự việc không liên quan, không có trọng tâm rõ ràng",
        "Kể chung chung, thiếu chi tiết cụ thể (thời gian, địa điểm, lời nói, hành động) khiến câu chuyện không sinh động",
      ],
    },
  },
  {
    id: "VA-07",
    group: "VA",
    title: "Kể chuyện sáng tạo: đóng vai, tưởng tượng, viết tiếp câu chuyện",
    lesson: {
      concept:
        "Đây là dạng kể chuyện không có thật (đóng vai một nhân vật để kể lại câu chuyện, tưởng tượng một tình huống, hoặc viết tiếp phần sau của một câu chuyện đã cho) — vẫn cần đảm bảo logic hợp lý và phù hợp với nhân vật/bối cảnh đã cho.",
      steps: [
        "Xác định rõ yêu cầu của đề (đóng vai ai, tưởng tượng điều gì, viết tiếp từ đâu).",
        "Giữ đúng đặc điểm, tính cách của nhân vật đã có (nếu đóng vai hoặc viết tiếp truyện có sẵn).",
        "Xây dựng diễn biến hợp lý, có mở đầu – diễn biến – kết thúc.",
        "Sáng tạo nhưng không phi lý — tưởng tượng cần có logic riêng, không tuỳ tiện.",
      ],
      signals: [
        "Đề bài dạng \"đóng vai nhân vật... kể lại câu chuyện\", \"tưởng tượng em là...\", \"viết tiếp câu chuyện...\"",
      ],
      examples: [
        "Đóng vai chú Dế Mèn kể lại bài học đường đời đầu tiên bằng ngôi thứ nhất (xưng \"tôi\"), giữ đúng giọng điệu hối lỗi, ăn năn của nhân vật.",
      ],
      commonMistakes: [
        "Đóng vai nhân vật nhưng lại viết theo ngôi thứ ba, quên phải xưng \"tôi\"/\"em\" theo đúng yêu cầu đóng vai",
        "Tưởng tượng phi lý, không có logic, khiến câu chuyện rời rạc, khó tin",
      ],
    },
  },
  {
    id: "VA-08",
    group: "VA",
    title: "Viết thư (chia sẻ tình cảm, bày tỏ ý kiến)",
    lesson: {
      concept:
        "Thư có cấu trúc riêng: phần đầu thư (địa điểm, ngày tháng, lời xưng hô), phần nội dung chính (lý do viết thư, nội dung chia sẻ/bày tỏ), phần cuối thư (lời chúc, lời chào, chữ ký).",
      steps: [
        "Viết địa điểm, ngày tháng ở đầu thư.",
        "Viết lời xưng hô phù hợp với người nhận.",
        "Nêu lý do viết thư.",
        "Trình bày nội dung chính (chia sẻ tình cảm, kể chuyện, hoặc bày tỏ ý kiến theo đúng yêu cầu đề).",
        "Viết lời chúc, lời chào cuối thư và ký tên.",
      ],
      signals: [
        "Đề bài dạng \"viết thư cho ông bà kể về...\", \"viết thư cho bạn chia sẻ...\"",
      ],
      examples: [
        "\"Hà Nội, ngày ... tháng ... năm ... . Ông bà kính mến,\" — mở đầu đúng cấu trúc thư (địa điểm, ngày tháng, lời xưng hô).",
      ],
      commonMistakes: [
        "Quên phần địa điểm, ngày tháng hoặc lời xưng hô ở đầu thư",
        "Nội dung thư lan man, không tập trung vào lý do viết thư đã nêu",
      ],
    },
  },
  {
    id: "VA-09",
    group: "VA",
    title: "Trình bày ý kiến / nghị luận đơn giản",
    lesson: {
      concept:
        "Dạng bài yêu cầu nêu và bảo vệ ý kiến cá nhân về một vấn đề gần gũi, cần có luận điểm rõ ràng, lý lẽ và dẫn chứng cụ thể để thuyết phục người đọc — khác với văn miêu tả/kể chuyện, đây thiên về lập luận.",
      steps: [
        "Nêu rõ ý kiến của bản thân về vấn đề (đồng ý/không đồng ý, nên/không nên...).",
        "Đưa ra lý do vì sao có ý kiến đó (2–3 lý do).",
        "Đưa dẫn chứng hoặc ví dụ cụ thể cho mỗi lý do.",
        "Nêu kết luận, khẳng định lại ý kiến.",
      ],
      signals: [
        "Đề bài dạng \"em có đồng ý với ý kiến... không? Vì sao?\", \"theo em, học sinh có nên...?\"",
      ],
      examples: [
        "Đề \"Em có nghĩ học sinh nên đọc sách mỗi ngày không?\" — nêu ý kiến \"có\", lý do (mở rộng vốn từ, rèn tư duy), kèm ví dụ cụ thể minh hoạ cho từng lý do.",
      ],
      commonMistakes: [
        "Chỉ kể chuyện hoặc miêu tả mà không nêu rõ ý kiến, lập luận của bản thân",
        "Nêu ý kiến nhưng không có lý do hoặc dẫn chứng cụ thể để thuyết phục người đọc",
      ],
    },
  },
];

