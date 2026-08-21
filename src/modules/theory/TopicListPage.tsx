import { Link } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import { GROUP_LABELS, GROUP_ORDER } from "@/content/groupLabels";
import { TOPIC_STATUS_CLASSES, TOPIC_STATUS_LABELS } from "@/modules/theory/topicStatusLabels";
import type { TopicStatus } from "@/data-access/types";

// FR-L01: danh sách 56 chuyên đề nhóm theo 9 nhóm, mỗi chuyên đề có trạng
// thái Chưa học / Đang học / Đã nắm.
export default function TopicListPage() {
  const topics = contentStore.getTopics();
  const statuses = progressStore.getTopicStatuses();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-900">Lý thuyết</h1>
        <Link
          to="/ly-thuyet/so-do-tu-duy"
          className="min-h-12 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
        >
          Sơ đồ tư duy
        </Link>
      </div>

      {GROUP_ORDER.map((group) => {
        const groupTopics = topics.filter((t) => t.group === group);
        if (groupTopics.length === 0) return null;
        return (
          <div key={group} className="mt-6">
            <h2 className="text-sm font-semibold text-slate-500">
              {group} — {GROUP_LABELS[group]}
            </h2>
            <ul className="mt-2 flex flex-col gap-2" role="list">
              {groupTopics.map((topic) => {
                const status: TopicStatus = statuses[topic.id] ?? "chua-hoc";
                return (
                  <li key={topic.id}>
                    <Link
                      to={`/ly-thuyet/${topic.id}`}
                      className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2"
                    >
                      <span className="text-sm font-medium text-slate-800">
                        <span className="mr-1 text-slate-400">{topic.id}</span>
                        {topic.title}
                      </span>
                      <span
                        className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium ${TOPIC_STATUS_CLASSES[status]}`}
                      >
                        {TOPIC_STATUS_LABELS[status]}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
