import { useState } from "react";
import type { Exercise } from "@/data-access/types";

// FR-T05: during the exam, no correctness feedback of any kind — these are
// deliberately dumber than the practice-module question components, which
// reveal right/wrong immediately and are wrong to reuse here.

interface Props {
  exercise: Exercise;
  value: unknown;
  onChange: (value: unknown) => void;
}

export default function ExamAnswerInput({ exercise, value, onChange }: Props) {
  if (exercise.questionType === "mcq") {
    const selected = value as number | undefined;
    return (
      <ul className="mt-4 flex flex-col gap-2" role="list">
        {exercise.mcq.options.map((option, index) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => onChange(index)}
              className={`min-h-12 w-full rounded-lg border px-4 py-3 text-left text-sm font-medium ${
                selected === index ? "border-brand-600 bg-brand-50" : "border-slate-300 bg-white"
              }`}
            >
              <span className="mr-2 hidden text-slate-400 sm:inline">{index + 1}.</span>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  if (exercise.questionType === "match") {
    return <MatchCapture exercise={exercise} value={value as Record<string, string> | undefined} onChange={onChange} />;
  }

  if (exercise.questionType === "order") {
    return <OrderCapture exercise={exercise} value={value as string[] | undefined} onChange={onChange} />;
  }

  if (exercise.questionType === "fill") {
    const count = exercise.fill.isSet ? (exercise.fill.expectedCount ?? 1) : 1;
    const values = exercise.fill.isSet
      ? ((value as string[] | undefined) ?? Array(count).fill(""))
      : [(value as string | undefined) ?? ""];
    return (
      <div className="mt-4 flex flex-wrap gap-2">
        {values.map((v, i) => (
          <input
            key={i}
            type="text"
            value={v}
            onChange={(e) => {
              if (!exercise.fill.isSet) {
                onChange(e.target.value);
                return;
              }
              const next = [...values];
              next[i] = e.target.value;
              onChange(next);
            }}
            enterKeyHint="done"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className="min-h-12 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-base"
            placeholder={exercise.fill.isSet ? `Từ ${i + 1}` : "Nhập câu trả lời"}
          />
        ))}
      </div>
    );
  }

  if (exercise.questionType === "short" || exercise.questionType === "essay-short" || exercise.questionType === "essay-long") {
    return (
      <textarea
        rows={exercise.questionType === "short" ? 3 : 10}
        value={(value as string | undefined) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        enterKeyHint="enter"
        className="mt-4 w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
        placeholder="Viết câu trả lời của em..."
      />
    );
  }

  return null;
}

function MatchCapture({
  exercise,
  value,
  onChange,
}: {
  exercise: Extract<Exercise, { questionType: "match" }>;
  value: Record<string, string> | undefined;
  onChange: (value: Record<string, string>) => void;
}) {
  const [activeLeftId, setActiveLeftId] = useState<string | null>(null);
  const pairs = value ?? {};
  const { leftItems, rightItems } = exercise.match;
  const pairedRightIds = new Set(Object.values(pairs));

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <ul className="flex flex-col gap-2" role="list" aria-label="Cột trái">
        {leftItems.map((item) => {
          const pairedLabel = rightItems.find((r) => r.id === pairs[item.id])?.label;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActiveLeftId(item.id)}
                className={`min-h-12 w-full rounded-lg border px-3 py-2 text-left text-sm font-medium ${
                  activeLeftId === item.id ? "border-brand-500 bg-brand-50" : "border-slate-300 bg-white"
                }`}
              >
                {item.label}
                {pairedLabel && <span className="block text-xs text-slate-500">→ {pairedLabel}</span>}
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2" role="list" aria-label="Cột phải">
        {rightItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => {
                if (!activeLeftId) return;
                onChange({ ...pairs, [activeLeftId]: item.id });
                setActiveLeftId(null);
              }}
              className={`min-h-12 w-full rounded-lg border px-3 py-2 text-left text-sm font-medium ${
                pairedRightIds.has(item.id) ? "border-slate-400 bg-slate-100 text-slate-500" : "border-slate-300 bg-white"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrderCapture({
  exercise,
  value,
  onChange,
}: {
  exercise: Extract<Exercise, { questionType: "order" }>;
  value: string[] | undefined;
  onChange: (value: string[]) => void;
}) {
  const [pool] = useState(() => {
    const copy = [...exercise.order.items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  });
  const chosenIds = value ?? [];
  const itemsById = new Map(exercise.order.items.map((i) => [i.id, i]));
  const remaining = pool.filter((item) => !chosenIds.includes(item.id));

  return (
    <div className="mt-4">
      <div className="min-h-14 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-2">
        <div className="flex flex-wrap gap-2">
          {chosenIds.map((id) => (
            <span key={id} className="min-h-12 rounded-lg border border-brand-400 bg-brand-50 px-3 py-2 text-sm font-medium">
              {itemsById.get(id)?.label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {remaining.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange([...chosenIds, item.id])}
            className="min-h-12 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800"
          >
            {item.label}
          </button>
        ))}
      </div>
      {chosenIds.length > 0 && (
        <button
          type="button"
          onClick={() => onChange(chosenIds.slice(0, -1))}
          className="mt-2 min-h-12 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600"
        >
          Xoá phần cuối
        </button>
      )}
    </div>
  );
}
