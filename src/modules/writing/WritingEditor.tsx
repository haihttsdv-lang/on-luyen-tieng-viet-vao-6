import { useEffect, useRef, useState } from "react";
import { countSentences, countWords } from "@/core/writing-stats";
import { progressStore, writingStore } from "@/data-access";
import type { Exercise, StudentWriting } from "@/data-access/types";

interface Props {
  exercise: Extract<Exercise, { questionType: "essay-short" | "essay-long" }>;
}

const AUTOSAVE_INTERVAL_MS = 5000;
const DEFAULT_MIN_WORDS_TO_REVEAL = 40; // FR-P10

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

export default function WritingEditor({ exercise }: Props) {
  const [phase, setPhase] = useState<"loading" | "writing" | "submitted">("loading");
  const [content, setContent] = useState("");
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [restoredAt, setRestoredAt] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<StudentWriting | null>(null);
  const [checkedCriteria, setCheckedCriteria] = useState<Set<number>>(new Set());
  const [scoreSaved, setScoreSaved] = useState(false);

  const lastSavedContent = useRef("");
  const contentRef = useRef(""); // always current, for the visibilitychange handler
  contentRef.current = content;

  // FR-A10: load any existing draft, or fall back to the latest submission.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const draft = await writingStore.getDraft(exercise.id);
      if (cancelled) return;
      if (draft && draft.content.trim().length > 0) {
        setContent(draft.content);
        lastSavedContent.current = draft.content;
        setSavedAt(draft.savedAt);
        setRestoredAt(draft.savedAt);
        setPhase("writing");
        return;
      }
      const subs = await writingStore.getSubmittedWritings(exercise.id);
      if (cancelled) return;
      if (subs.length > 0) {
        setSubmitted(subs[0]);
        setContent(subs[0].content);
        setPhase("submitted");
      } else {
        setPhase("writing");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [exercise.id]);

  // FR-W01/FR-A09: autosave every 5s, and immediately when the tab is hidden
  // (visibilitychange, not beforeunload/unload per SY-08's same reasoning —
  // Android can kill the page process at any time without warning).
  useEffect(() => {
    if (phase !== "writing") return;

    async function saveIfChanged() {
      if (contentRef.current === lastSavedContent.current) return;
      const saved = await writingStore.saveDraft(exercise.id, contentRef.current);
      lastSavedContent.current = saved.content;
      setSavedAt(saved.savedAt);
    }

    const interval = setInterval(saveIfChanged, AUTOSAVE_INTERVAL_MS);
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") void saveIfChanged();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      void saveIfChanged();
    };
  }, [phase, exercise.id]);

  async function handleSubmit() {
    await writingStore.saveDraft(exercise.id, content);
    const result = await writingStore.submitDraft(exercise.id);
    // FR-H03b: essay submissions must show up as topic activity too — without
    // this, activityScore for CT/VA topics would always read zero, since
    // essays otherwise never touch progressStore.addAttempt at all.
    // `correct` stays undefined: essays have no automatic verdict.
    progressStore.addAttempt({
      id: `${exercise.id}-${Date.now()}`,
      exerciseId: exercise.id,
      topicIds: exercise.topicIds,
      timestamp: Date.now(),
    });
    setSubmitted(result);
    setPhase("submitted");
  }

  function startNewAttempt() {
    setSubmitted(null);
    setContent("");
    lastSavedContent.current = "";
    setSavedAt(null);
    setRestoredAt(null);
    setCheckedCriteria(new Set());
    setScoreSaved(false);
    setPhase("writing");
  }

  async function saveSelfScore() {
    if (!submitted) return;
    const total = exercise.essay.rubric.reduce(
      (sum, r, i) => sum + (checkedCriteria.has(i) ? r.points : 0),
      0,
    );
    await writingStore.setSelfScore(submitted.id, total);
    setSubmitted({ ...submitted, selfScore: total });
    setScoreSaved(true);
  }

  if (phase === "loading") return null;

  const wordCount = countWords(content);
  const sentenceCount = countSentences(content);
  const minWords = exercise.essay.minWordsToReveal ?? DEFAULT_MIN_WORDS_TO_REVEAL;

  return (
    <div>
      <p className="text-base text-slate-800">{exercise.prompt}</p>

      <details className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700">
          {exercise.questionType === "essay-long" ? "Dàn ý gợi ý" : "Khung gợi ý"}
        </summary>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
          {exercise.essay.outline.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        {exercise.essay.openingStyles && (
          <>
            <p className="mt-3 text-sm font-semibold text-slate-700">Gợi ý cách mở bài</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-600" role="list">
              {exercise.essay.openingStyles.map((style) => (
                <li key={style}>{style}</li>
              ))}
            </ul>
          </>
        )}
      </details>

      {restoredAt && phase === "writing" && (
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">
          Đã khôi phục bản nháp lúc {formatTime(restoredAt)}.
        </p>
      )}

      {phase === "writing" && (
        <>
          <div className="sticky top-14 z-10 mt-3 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500">
            <span>
              {wordCount} từ · {sentenceCount} câu
            </span>
            <span>{savedAt ? `Đã lưu lúc ${formatTime(savedAt)}` : "Chưa lưu"}</span>
          </div>
          <textarea
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            enterKeyHint="enter"
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
            placeholder="Viết bài của em ở đây..."
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={wordCount === 0}
            className="mt-3 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
          >
            Nộp bài
          </button>
        </>
      )}

      {phase === "submitted" && submitted && (
        <div className="mt-3">
          <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            Đã nộp bài ({submitted.wordCount} từ).
          </p>
          <p className="mt-3 whitespace-pre-wrap rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-800">
            {submitted.content}
          </p>

          {/* FR-H10: nhận xét của phụ huynh hiển thị lại cho học sinh. */}
          {submitted.parentComment && (
            <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
              <span className="font-semibold">Nhận xét của phụ huynh: </span>
              {submitted.parentComment}
            </p>
          )}

          {submitted.wordCount >= minWords ? (
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-sm font-semibold text-slate-800">Bài mẫu</p>
              <p className="mt-1 whitespace-pre-wrap text-sm text-slate-600">{exercise.essay.sampleAnswer}</p>

              <p className="mt-4 text-sm font-semibold text-slate-800">
                Em tự chấm theo tiêu chí (điểm tự đánh giá, không dùng để tính mức độ thành thạo)
              </p>
              <ul className="mt-2 flex flex-col gap-1" role="list">
                {exercise.essay.rubric.map((r, i) => (
                  <li key={r.criterion}>
                    <label className="flex min-h-12 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
                      <input
                        type="checkbox"
                        className="h-5 w-5"
                        checked={checkedCriteria.has(i)}
                        onChange={() => {
                          setScoreSaved(false);
                          setCheckedCriteria((prev) => {
                            const next = new Set(prev);
                            if (next.has(i)) next.delete(i);
                            else next.add(i);
                            return next;
                          });
                        }}
                      />
                      <span className="flex-1">{r.criterion}</span>
                      <span className="font-medium text-slate-500">{r.points} điểm</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={saveSelfScore}
                className="mt-3 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
              >
                Lưu điểm tự chấm
              </button>
              {scoreSaved && submitted.selfScore !== undefined && (
                <p className="mt-2 text-sm font-medium text-emerald-700">
                  Đã lưu: {submitted.selfScore} điểm (tự đánh giá)
                </p>
              )}
            </div>
          ) : (
            <p className="mt-3 text-sm text-amber-600">
              Viết thêm để đạt {minWords} từ — khi đó em sẽ xem được bài mẫu và bảng tiêu chí chấm điểm.
            </p>
          )}

          <button
            type="button"
            onClick={startNewAttempt}
            className="mt-4 min-h-12 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
          >
            Viết lại bài khác
          </button>
        </div>
      )}
    </div>
  );
}
