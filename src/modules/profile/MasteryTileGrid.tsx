import { Link } from "react-router-dom";
import { contentStore } from "@/data-access";
import type { MasteryLevel } from "@/core/mastery-engine";
import type { TopicSnapshot } from "@/modules/profile/profileService";

const LEVEL_CLASSES: Record<MasteryLevel, string> = {
  "no-data": "bg-slate-100 text-slate-500 border-slate-200",
  weak: "bg-rose-100 text-rose-700 border-rose-200",
  improving: "bg-amber-100 text-amber-700 border-amber-200",
  mastered: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

// FR-H05/FR-H03c: bản đồ lưới 56 chuyên đề — mỗi ô phân biệt rõ nhãn % (chỉ
// số định lượng, nhóm mastery) với nhãn "đã luyện N/M bài" (chỉ số hoạt
// động, nhóm activity), thay vì gộp chung một con số.
export default function MasteryTileGrid({ snapshots }: { snapshots: TopicSnapshot[] }) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3" role="list">
        {snapshots.map((s) => {
          const topic = contentStore.getTopic(s.topicId);
          const level = s.isActivityBased ? s.activity!.level : s.mastery!.level;
          const displayValue = s.isActivityBased
            ? `Đã luyện ${s.activity!.completedCount}/${s.activity!.targetCount} bài`
            : s.mastery!.score !== null
              ? `${Math.round(s.mastery!.score * 100)}% đúng`
              : "Chưa đủ dữ liệu";
          return (
            <li key={s.topicId}>
              <Link
                to={`/ly-thuyet/${s.topicId}`}
                className={`flex min-h-16 flex-col justify-center rounded-lg border px-3 py-2 ${LEVEL_CLASSES[level]}`}
              >
                <span className="text-xs font-semibold">{s.topicId}</span>
                <span className="truncate text-xs">{topic?.title}</span>
                <span className="mt-1 text-[11px] font-medium">
                  {displayValue}
                  {s.isActivityBased && <span className="ml-1 opacity-70">(hoạt động)</span>}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
        <Legend color="bg-slate-100 border-slate-200" label="Chưa có dữ liệu" />
        <Legend color="bg-rose-100 border-rose-200" label="Cần ôn lại" />
        <Legend color="bg-amber-100 border-amber-200" label="Đang tiến bộ" />
        <Legend color="bg-emerald-100 border-emerald-200" label="Thành thạo" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-3 w-3 rounded border ${color}`} />
      {label}
    </span>
  );
}
