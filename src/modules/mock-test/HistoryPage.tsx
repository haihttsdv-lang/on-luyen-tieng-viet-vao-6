import { useNavigate } from "react-router-dom";
import { progressStore } from "@/data-access";

// FR-T08: lưu lịch sử thi thử; biểu đồ xu hướng điểm theo thời gian, tách
// đường điểm tự động và điểm tự chấm. No chart library (FR-A17 bundle
// budget) — a small inline SVG polyline is enough for a trend line.
export default function HistoryPage() {
  const navigate = useNavigate();
  const results = [...progressStore.getTestResults()].sort((a, b) => a.date - b.date);

  return (
    <section>
      <button
        type="button"
        onClick={() => navigate("/thi-thu")}
        className="mb-2 min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
      >
        ← Thi thử
      </button>
      <h1 className="text-xl font-semibold text-slate-900">Lịch sử thi thử</h1>

      {results.length === 0 ? (
        <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          Chưa có lần thi thử nào được lưu.
        </p>
      ) : (
        <>
          {results.length > 1 && <TrendChart results={results} />}
          <ul className="mt-4 flex flex-col gap-2" role="list">
            {[...results].reverse().map((r) => {
              const autoPct = r.autoScoreMax > 0 ? Math.round((r.autoScore / r.autoScoreMax) * 100) : 0;
              const selfPct = r.selfScoreMax > 0 ? Math.round((r.selfScore / r.selfScoreMax) * 100) : null;
              return (
                <li key={r.id} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{r.configLabel}</span>
                    <span className="text-xs text-slate-500">{new Date(r.date).toLocaleDateString("vi-VN")}</span>
                  </div>
                  <p className="mt-1 text-slate-600">
                    Tự động: {r.autoScore}/{r.autoScoreMax} ({autoPct}%)
                    {selfPct !== null && ` · Tự chấm: ${r.selfScore}/${r.selfScoreMax} (${selfPct}%)`}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}

function TrendChart({
  results,
}: {
  results: Array<{ date: number; autoScore: number; autoScoreMax: number; selfScore: number; selfScoreMax: number }>;
}) {
  const width = 320;
  const height = 120;
  const pad = 8;
  const step = (width - pad * 2) / Math.max(results.length - 1, 1);

  const toY = (pct: number) => height - pad - (pct / 100) * (height - pad * 2);
  const autoPoints = results
    .map((r, i) => `${pad + i * step},${toY(r.autoScoreMax > 0 ? (r.autoScore / r.autoScoreMax) * 100 : 0)}`)
    .join(" ");
  const hasSelf = results.some((r) => r.selfScoreMax > 0);
  const selfPoints = results
    .map((r, i) => `${pad + i * step},${toY(r.selfScoreMax > 0 ? (r.selfScore / r.selfScoreMax) * 100 : 0)}`)
    .join(" ");

  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Biểu đồ xu hướng điểm thi thử">
        <polyline points={autoPoints} fill="none" stroke="#0d9488" strokeWidth="2" />
        {hasSelf && <polyline points={selfPoints} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />}
      </svg>
      <div className="mt-2 flex gap-4 text-xs text-slate-600">
        <span className="flex items-center gap-1">
          <span className="h-0.5 w-4 bg-brand-600" /> Điểm tự động
        </span>
        {hasSelf && (
          <span className="flex items-center gap-1">
            <span className="h-0.5 w-4 border-t-2 border-dashed border-amber-500" /> Điểm tự chấm
          </span>
        )}
      </div>
    </div>
  );
}
