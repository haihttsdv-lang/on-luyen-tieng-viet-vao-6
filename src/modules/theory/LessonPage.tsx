import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import { TOPIC_STATUS_CLASSES, TOPIC_STATUS_LABELS } from "@/modules/theory/topicStatusLabels";
import type { QuestionType, TopicStatus } from "@/data-access/types";

const QUIZ_ELIGIBLE_TYPES: QuestionType[] = ["mcq", "match", "order", "fill"];

export default function LessonPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topics = contentStore.getTopics();
  const topic = topicId ? contentStore.getTopic(topicId) : undefined;
  const index = topics.findIndex((t) => t.id === topicId);

  // FR-L01: opening a lesson moves "Chưa học" to "Đang học". Doesn't touch
  // "Đã nắm" — only the quiz can grant/re-confirm that.
  useEffect(() => {
    if (!topic) return;
    const current = progressStore.getTopicStatuses()[topic.id] ?? "chua-hoc";
    if (current === "chua-hoc") progressStore.setTopicStatus(topic.id, "dang-hoc");
  }, [topic]);

  if (!topic || index < 0) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Lý thuyết</h1>
        <p className="mt-2 text-slate-600">Không tìm thấy chuyên đề này.</p>
      </section>
    );
  }

  const status: TopicStatus = progressStore.getTopicStatuses()[topic.id] ?? "dang-hoc";
  const prevTopic = index > 0 ? topics[index - 1] : undefined;
  const nextTopic = index < topics.length - 1 ? topics[index + 1] : undefined;
  const hasQuiz =
    contentStore.getExercisesByTopics([topic.id]).filter((e) => QUIZ_ELIGIBLE_TYPES.includes(e.questionType))
      .length > 0;

  return (
    <section>
      <button
        type="button"
        onClick={() => navigate("/ly-thuyet")}
        className="mb-2 min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
      >
        ← Danh sách chuyên đề
      </button>

      <div className="flex items-start justify-between gap-3">
        <h1 className="text-xl font-semibold text-slate-900">{topic.title}</h1>
        <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium ${TOPIC_STATUS_CLASSES[status]}`}>
          {TOPIC_STATUS_LABELS[status]}
        </span>
      </div>

      {topic.disputedNote && (
        <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">{topic.disputedNote}</p>
      )}

      {!topic.lesson ? (
        <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          Bài học đang được biên soạn.
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-5">
          <div>
            <h2 className="text-sm font-semibold text-slate-700">Khái niệm</h2>
            <p className="mt-1 text-sm text-slate-700">{topic.lesson.concept}</p>
          </div>

          {topic.lesson.steps && (
            <div>
              <h2 className="text-sm font-semibold text-slate-700">Quy trình từng bước</h2>
              <ol className="mt-1 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                {topic.lesson.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <div>
            <h2 className="text-sm font-semibold text-slate-700">Dấu hiệu nhận biết</h2>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700" role="list">
              {topic.lesson.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-700">Ví dụ</h2>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700" role="list">
              {topic.lesson.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-700">Lỗi thường gặp</h2>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-rose-700" role="list">
              {topic.lesson.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {hasQuiz && (
        <Link
          to={`/ly-thuyet/${topic.id}/quiz`}
          className="mt-6 flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Làm quiz cuối bài
        </Link>
      )}

      {/* FR-L07: hiển thị tên bài, không phải mã chuyên đề. */}
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm">
        {prevTopic ? (
          <Link to={`/ly-thuyet/${prevTopic.id}`} className="min-h-12 py-3 font-medium text-brand-700">
            ← {prevTopic.title}
          </Link>
        ) : (
          <span />
        )}
        {nextTopic && (
          <Link
            to={`/ly-thuyet/${nextTopic.id}`}
            className="min-h-12 py-3 text-right font-medium text-brand-700"
          >
            {nextTopic.title} →
          </Link>
        )}
      </div>
    </section>
  );
}
