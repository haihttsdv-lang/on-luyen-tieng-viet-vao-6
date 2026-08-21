import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contentStore } from "@/data-access";
import { buildCustomTestConfig } from "@/core/test-generator";
import { GROUP_LABELS, GROUP_ORDER } from "@/content/groupLabels";
import type { TestConfig, TopicGroup } from "@/data-access/types";

// FR-T01: chọn 1 trong 4 cấu hình khai báo bằng dữ liệu; FR-T09: hoặc tự
// tạo đề tùy chỉnh.
export default function ConfigPicker() {
  const navigate = useNavigate();
  const configs = contentStore.getTestConfigs();

  const [customGroups, setCustomGroups] = useState<Set<TopicGroup>>(new Set());
  const [customCount, setCustomCount] = useState(10);
  const [customMinutes, setCustomMinutes] = useState(20);

  function start(config: TestConfig) {
    navigate("/thi-thu/lam-bai", { state: { config } });
  }

  function toggleGroup(group: TopicGroup) {
    setCustomGroups((prev) => {
      const next = new Set(prev);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  }

  function startCustom() {
    if (customGroups.size === 0) return;
    const config = buildCustomTestConfig({
      topicGroups: [...customGroups],
      totalQuestions: customCount,
      durationMinutes: customMinutes,
    });
    start(config);
  }

  return (
    <section>
      <h1 className="text-xl font-semibold text-slate-900">Thi thử</h1>

      <ul className="mt-4 flex flex-col gap-2" role="list">
        {configs.map((config) => (
          <li key={config.id}>
            <button
              type="button"
              onClick={() => start(config)}
              className="flex min-h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-left"
            >
              <span>
                <span className="block text-sm font-semibold text-slate-800">{config.label}</span>
                <span className="block text-xs text-slate-500">
                  {config.durationMinutes} phút · {config.totalQuestions} câu
                  {config.includeEssay ? " + 1 bài viết" : ""}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h2 className="text-base font-semibold text-slate-900">Tạo đề tùy chỉnh</h2>
        <p className="mt-1 text-sm text-slate-600">Chọn nhóm chuyên đề, số câu và thời gian.</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {GROUP_ORDER.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => toggleGroup(group)}
              className={`min-h-12 rounded-full border px-3 py-1.5 text-xs font-medium ${
                customGroups.has(group)
                  ? "border-brand-600 bg-brand-100 text-brand-700"
                  : "border-slate-300 bg-white text-slate-600"
              }`}
              title={GROUP_LABELS[group]}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <label className="text-sm text-slate-700">
            Số câu
            <input
              type="number"
              min={1}
              max={50}
              value={customCount}
              onChange={(e) => setCustomCount(Number(e.target.value))}
              className="mt-1 min-h-12 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
          <label className="text-sm text-slate-700">
            Thời gian (phút)
            <input
              type="number"
              min={5}
              max={120}
              value={customMinutes}
              onChange={(e) => setCustomMinutes(Number(e.target.value))}
              className="mt-1 min-h-12 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
        </div>

        <button
          type="button"
          disabled={customGroups.size === 0}
          onClick={startCustom}
          className="mt-4 min-h-12 w-full rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          Bắt đầu đề tùy chỉnh
        </button>
      </div>

      <button
        type="button"
        onClick={() => navigate("/thi-thu/lich-su")}
        className="mt-4 min-h-12 w-full rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
      >
        Lịch sử thi thử
      </button>
    </section>
  );
}
