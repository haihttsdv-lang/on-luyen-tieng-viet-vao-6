import { useNavigate, useParams } from "react-router-dom";
import { contentStore } from "@/data-access";
import WritingEditor from "@/modules/writing/WritingEditor";

export default function WritingSession() {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  const navigate = useNavigate();
  const exercise = exerciseId ? contentStore.getExercise(exerciseId) : undefined;

  if (!exercise || (exercise.questionType !== "essay-short" && exercise.questionType !== "essay-long")) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Viết bài</h1>
        <p className="mt-2 text-slate-600">Không tìm thấy đề bài này.</p>
      </section>
    );
  }

  return (
    <section>
      <button
        type="button"
        onClick={() => navigate("/luyen-tap")}
        className="mb-3 min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
      >
        ← Quay lại
      </button>
      <WritingEditor exercise={exercise} />
    </section>
  );
}
