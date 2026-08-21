import { useRef, useState } from "react";
import { progressStore } from "@/data-access";
import { notifyProgressChanged } from "@/data-access/cloud/syncMeta";

const APP_ID = "on-luyen-tieng-viet-vao-6";

// FR-H12: sao lưu & khôi phục thủ công dạng JSON. Chưa gồm bài viết
// (StudentWriting, lưu ở IndexedDB) — xem README/ghi chú giới hạn.
export default function BackupSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  function exportBackup() {
    const payload = {
      app: APP_ID,
      version: 1,
      exportedAt: new Date().toISOString(),
      data: progressStore.exportAll(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sao-luu-${APP_ID}-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function importBackup(file: File) {
    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed || typeof parsed !== "object" || typeof parsed.data !== "object") {
        setMessage("File không đúng định dạng sao lưu.");
        return;
      }
      progressStore.importAll(parsed.data);
      notifyProgressChanged();
      setMessage("Đã khôi phục xong — tải lại trang để xem đầy đủ thay đổi.");
    } catch {
      setMessage("Không đọc được file — hãy chọn đúng file JSON đã xuất từ ứng dụng.");
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h2 className="text-base font-semibold text-slate-900">Sao lưu & khôi phục</h2>
      <p className="mt-1 text-sm text-slate-600">
        Xuất tiến độ ra file JSON để lưu giữ, hoặc khôi phục từ file đã xuất trước đó.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={exportBackup}
          className="min-h-12 flex-1 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Xuất file sao lưu
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="min-h-12 flex-1 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
        >
          Khôi phục từ file
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void importBackup(file);
            e.target.value = "";
          }}
        />
      </div>
      {message && <p className="mt-2 text-sm text-slate-600">{message}</p>}
    </div>
  );
}
