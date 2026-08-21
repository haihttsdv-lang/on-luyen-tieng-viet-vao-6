import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contentStore } from "@/data-access";
import type { QuestionLevel } from "@/data-access/types";

const isEssay = (t: string) => t === "essay-short" || t === "essay-long";

const LEVELS: Array<{ value: QuestionLevel | "all"; label: string }> = [
  { value: "all", label: "Tất cả mức độ" },
  { value: "M1", label: "M1 — Nhận biết" },
  { value: "M2", label: "M2 — Thông hiểu" },
  { value: "M3", label: "M3 — Vận dụng" },
  { value: "M4", label: "M4 — Vận dụng cao" },
];

// FR-P03: choose one or more chuyên đề, optionally filter by level.
export default function TopicPicker() {
  const navigate = useNavigate();
  const allExercises = contentStore.getExercises();
  // Essay exercises (CT/VA) go through the writing editor (FR-P08), not the
  // mcq/match/order/fill/short quiz runner — so chuyên đề made up entirely
  // of essay content don't belong in the quiz topic list.
  const quizTopicIds = new Set(
    allExercises.filter((e) => !isEssay(e.questionType)).flatMap((e) => e.topicIds),
  );
  const topics = contentStore.getTopics().filter((t) => quizTopicIds.has(t.id));
  const essayExercises = allExercises.filter((e) => isEssay(e.questionType));

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [level, setLevel] = useState<QuestionLevel | "all">("all");

  function toggle(topicId: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      return next;
    });
  }

  function start() {
    if (selected.size === 0) return;
    const params = new URLSearchParams({ topics: [...selected].join(",") });
    if (level !== "all") params.set("level", level);
    navigate(`/luyen-tap/lam-bai?${params.toString()}`);
  }

  return (
    <section>
      <h1 className="text-xl font-semibold text-slate-900">Luyện tập</h1>
      <p className="mt-1 text-sm text-slate-600">Chọn một hoặc nhiều chuyên đề muốn luyện.</p>

      <ul className="mt-4 flex flex-col gap-2" role="list">
        {topics.map((topic) => (
          <li key={topic.id}>
            <label className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input
                type="checkbox"
                checked={selected.has(topic.id)}
                onChange={() => toggle(topic.id)}
                className="h-5 w-5"
              />
              <span className="text-sm font-medium text-slate-800">
                <span className="mr-1 text-slate-400">{topic.id}</span>
                {topic.title}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <label htmlFor="level-select" className="mb-1 block text-sm font-medium text-slate-700">
          Mức độ
        </label>
        <select
          id="level-select"
          value={level}
          onChange={(e) => setLevel(e.target.value as QuestionLevel | "all")}
          className="min-h-12 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          {LEVELS.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        disabled={selected.size === 0}
        onClick={start}
        className="mt-5 min-h-12 w-full rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
      >
        Bắt đầu luyện tập
      </button>

      <button
        type="button"
        onClick={() => navigate("/luyen-tap/so-loi")}
        className="mt-3 min-h-12 w-full rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
      >
        Sổ lỗi
      </button>

      <button
        type="button"
        onClick={() => navigate("/luyen-tap/toc-do")}
        className="mt-3 min-h-12 w-full rounded-lg border border-amber-300 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-800"
      >
        ⚡ Thử thách tốc độ
      </button>

      {essayExercises.length > 0 && (
        <div className="mt-8">
          <h2 className="text-base font-semibold text-slate-900">Viết bài (cảm thụ, tập làm văn)</h2>
          <p className="mt-1 text-sm text-slate-600">
            Bài viết mở, có tự lưu nháp — không nằm trong luồng luyện tập trắc nghiệm ở trên.
          </p>
          <ul className="mt-3 flex flex-col gap-2" role="list">
            {essayExercises.map((exercise) => (
              <li key={exercise.id}>
                <Link
                  to={`/luyen-tap/viet/${exercise.id}`}
                  className="flex min-h-12 items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800"
                >
                  {exercise.prompt}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
