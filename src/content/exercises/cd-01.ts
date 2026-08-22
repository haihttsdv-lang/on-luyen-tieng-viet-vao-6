import type { Exercise } from "@/data-access/types";

// CD-01 — Chính tả: phụ âm đầu dễ lẫn. FR-M05: every fill exercise in the
// CD group uses strictMode — exact spelling is the entire point, so no tone
// -style or case normalization here. Sentences self-authored (Mục 10.1).
export const CD01_EXERCISES: Exercise[] = [
  {
    id: "cd-01-fill-1",
    topicIds: ["CD-01"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt l/n): \"Những giọt sương ___ trên lá cỏ như hạt ngọc.\"",
    explanation: "Viết đúng là \"long lanh\" (âm đầu l), không viết \"nong nanh\".",
    fill: { acceptedAnswers: ["long lanh"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-fill-2",
    topicIds: ["CD-01"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt ch/tr): \"Em bé đang tập ___ cây trong vườn.\"",
    explanation:
      "Viết đúng là \"trèo\" (âm đầu tr, nghĩa là leo lên). \"Chèo\" nghĩa khác (chèo thuyền, hát chèo), không phù hợp câu này.",
    fill: { acceptedAnswers: ["trèo"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-fill-3",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt s/x): \"Bạn Lan luôn giữ quần áo ___.\"",
    explanation: "Viết đúng là \"sạch sẽ\" (âm đầu s).",
    fill: { acceptedAnswers: ["sạch sẽ"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-fill-4",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt r/d/gi): \"Buổi sáng, ông mặt trời ___ chiếu những tia nắng đầu tiên.\"",
    explanation: "Viết đúng là \"rực rỡ\" (âm đầu r).",
    fill: { acceptedAnswers: ["rực rỡ"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-mcq-1",
    topicIds: ["CD-01"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ nào dưới đây viết ĐÚNG chính tả?",
    explanation:
      "\"Nong lanh\" đổi cả hai âm đầu là sai; \"Long nanh\" và \"Nong nanh\" đều sai. \"Long lanh\" viết đúng.",
    mcq: {
      options: ["Nong lanh", "Long lanh", "Long nanh", "Nong nanh"],
      answerIndex: 1,
      distractorNotes: [
        "Sai âm đầu của cả hai tiếng.",
        "Đúng — \"long lanh\" viết đúng chính tả.",
        "Sai âm đầu tiếng thứ hai (phải là \"lanh\", không phải \"nanh\").",
        "Sai âm đầu cả hai tiếng.",
      ],
    },
  },
  {
    id: "cd-01-fill-5",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt l/n): \"Bầu trời đêm ___ đầy sao.\"",
    explanation: "Viết đúng là \"lấp lánh\" (âm đầu l).",
    fill: { acceptedAnswers: ["lấp lánh"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-fill-6",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt ch/tr): \"Con thuyền ___ ra khơi.\"",
    explanation: "Viết đúng là \"chèo\" (âm đầu ch, nghĩa là dùng mái chèo đẩy thuyền đi).",
    fill: { acceptedAnswers: ["chèo"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-mcq-2",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "mcq",
    prompt: "Từ nào dưới đây viết ĐÚNG chính tả (phân biệt s/x)?",
    explanation: "\"Sạch sẽ\" viết đúng với âm đầu s ở cả hai tiếng.",
    mcq: {
      options: ["Xạch xẽ", "Sạch xẽ", "Xạch sẽ", "Sạch sẽ"],
      answerIndex: 3,
      distractorNotes: [
        "Sai âm đầu cả hai tiếng.",
        "Sai âm đầu tiếng thứ hai.",
        "Sai âm đầu tiếng thứ nhất.",
        "Đúng — \"sạch sẽ\" viết đúng chính tả.",
      ],
    },
  },
  {
    id: "cd-01-mcq-3",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây dùng ĐÚNG từ (phân biệt tr/ch)?',
    explanation: "\"Trèo cây\" (leo lên) viết đúng với âm đầu tr, phù hợp với hành động của em bé.",
    mcq: {
      options: [
        "Em bé đang tập chèo cây trong vườn.",
        "Em bé đang tập trèo cây trong vườn.",
        "Em bé đang chèo lên cây trong vườn.",
        "Cả ba câu đều đúng.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Sai — \"chèo\" nghĩa là chèo thuyền, không phù hợp với việc leo cây.",
        "Đúng — \"trèo cây\" (leo lên) viết đúng với âm đầu tr.",
        "Sai — \"chèo\" không phù hợp với hành động leo lên cây.",
        "Chỉ có câu thứ hai dùng đúng từ.",
      ],
    },
  },
  {
    id: "cd-01-fill-7",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ đúng chính tả vào chỗ trống (phân biệt r/d/gi): \"Mẹ ___ em bé ngủ bằng một bài hát ru.\"",
    explanation: "Viết đúng là \"dỗ\" (âm đầu d, nghĩa là vỗ về cho ngủ yên).",
    fill: { acceptedAnswers: ["dỗ"], strictMode: true, isSet: false },
  },
  {
    id: "cd-01-mcq-4",
    topicIds: ["CD-01"],
    level: "M3",
    questionType: "mcq",
    prompt: "Vì sao cần phân biệt kỹ các phụ âm đầu dễ lẫn (l/n, ch/tr, s/x, r/d/gi) khi viết?",
    explanation: "Viết sai phụ âm đầu có thể khiến từ đổi hẳn nghĩa hoặc trở thành từ vô nghĩa, gây hiểu lầm cho người đọc.",
    mcq: {
      options: [
        "Để bài viết dài hơn",
        "Vì viết sai phụ âm đầu có thể làm đổi nghĩa từ hoặc gây hiểu lầm",
        "Không quan trọng, viết sao cũng được",
        "Để tránh bị trừ điểm trình bày",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây không phải mục đích của việc viết đúng chính tả.",
        "Đúng — đây là lý do quan trọng nhất cần viết đúng chính tả.",
        "Viết sai chính tả có thể gây hiểu lầm nghiêm trọng về nghĩa.",
        "Đây có thể là một lý do phụ nhưng không phải lý do chính, quan trọng nhất là về nghĩa.",
      ],
    },
  },
  {
    id: "cd-01-fill-8",
    topicIds: ["CD-01"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ đúng chính tả vào chỗ trống (phân biệt s/x): \"Mẹ mua cho em một chiếc cặp ___ màu đỏ.\"",
    explanation: "Viết đúng là \"xinh xắn\" (âm đầu x, nghĩa là nhỏ nhắn, đáng yêu).",
    fill: { acceptedAnswers: ["xinh xắn"], strictMode: true, isSet: false },
  },
];
