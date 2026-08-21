import { useLocation, useNavigate } from "react-router-dom";

interface ResultState {
  total: number;
  correct: number;
}

export default function SessionResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ResultState | null;

  if (!state) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Kết quả</h1>
        <p className="mt-2 text-slate-600">Không có dữ liệu kết quả. Hãy làm một bài luyện tập trước.</p>
      </section>
    );
  }

  const ratio = state.total === 0 ? 0 : Math.round((state.correct / state.total) * 100);

  return (
    <section className="text-center">
      <h1 className="text-xl font-semibold text-slate-900">Kết quả luyện tập</h1>
      <p className="mt-4 text-4xl font-bold text-brand-700">
        {state.correct}/{state.total}
      </p>
      <p className="mt-1 text-slate-600">{ratio}% câu trả lời đúng</p>

      <div className="mt-6 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => navigate("/luyen-tap")}
          className="min-h-12 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
        >
          Chọn chuyên đề khác
        </button>
        <button
          type="button"
          onClick={() => navigate("/luyen-tap/so-loi")}
          className="min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Xem sổ lỗi
        </button>
      </div>
    </section>
  );
}
