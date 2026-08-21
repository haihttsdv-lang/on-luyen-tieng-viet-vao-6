import { useState } from "react";
import { progressStore } from "@/data-access";

// GM-08: công tắc bật/tắt hiệu ứng âm thanh.
export default function SoundToggle() {
  const [enabled, setEnabled] = useState(() => progressStore.getSoundEnabled());

  return (
    <div className="flex min-h-12 items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
      <span className="text-sm font-medium text-slate-700">Hiệu ứng âm thanh</span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => {
          const next = !enabled;
          progressStore.setSoundEnabled(next);
          setEnabled(next);
        }}
        className={`h-7 w-12 rounded-full transition-colors ${enabled ? "bg-brand-600" : "bg-slate-300"}`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
    </div>
  );
}
