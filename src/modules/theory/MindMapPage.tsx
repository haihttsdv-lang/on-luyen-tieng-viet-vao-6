import { Link, useNavigate } from "react-router-dom";
import { contentStore } from "@/data-access";
import { GROUP_LABELS, GROUP_ORDER } from "@/content/groupLabels";

// FR-L06: sơ đồ tư duy tổng hợp 56 chuyên đề theo nhóm, bấm đi thẳng tới bài học.
export default function MindMapPage() {
  const navigate = useNavigate();
  const topics = contentStore.getTopics();

  return (
    <section>
      <button
        type="button"
        onClick={() => navigate("/ly-thuyet")}
        className="mb-2 min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
      >
        ← Danh sách chuyên đề
      </button>
      <h1 className="text-xl font-semibold text-slate-900">Sơ đồ tư duy</h1>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {GROUP_ORDER.map((group) => {
          const groupTopics = topics.filter((t) => t.group === group);
          if (groupTopics.length === 0) return null;
          return (
            <div key={group} className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-sm font-semibold text-brand-700">
                {group} — {GROUP_LABELS[group]}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {groupTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/ly-thuyet/${topic.id}`}
                    className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {topic.id}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
