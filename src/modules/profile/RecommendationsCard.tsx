import { Link } from "react-router-dom";
import { contentStore } from "@/data-access";
import type { Recommendation } from "@/core/mastery-engine";

const KIND_LABEL: Record<Recommendation["kind"], string> = {
  "error-log": "Luyện lại câu sai",
  "weak-topic": "Ôn lại chuyên đề",
  foundation: "Học chuyên đề mới",
};

// FR-H06/H11: tối đa 3 gợi ý, mỗi gợi ý kèm lý do rõ ràng.
export default function RecommendationsCard({ recommendations }: { recommendations: Recommendation[] }) {
  if (recommendations.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        Chưa có đủ dữ liệu để gợi ý — hãy bắt đầu luyện tập!
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2" role="list">
      {recommendations.map((rec, i) => {
        const topic = rec.topicId ? contentStore.getTopic(rec.topicId) : undefined;
        const to = rec.kind === "error-log" ? "/luyen-tap/so-loi" : `/ly-thuyet/${rec.topicId}`;
        return (
          <li key={i}>
            <Link
              to={to}
              className="flex min-h-12 flex-col justify-center rounded-lg border border-slate-200 bg-white px-3 py-2"
            >
              <span className="text-xs font-semibold uppercase text-brand-700">{KIND_LABEL[rec.kind]}</span>
              <span className="text-sm font-medium text-slate-800">{topic ? topic.title : "Sổ lỗi"}</span>
              <span className="text-xs text-slate-500">{rec.reason}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
