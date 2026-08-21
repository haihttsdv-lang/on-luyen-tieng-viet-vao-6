import { useState } from "react";
import type { SyncStatus } from "@/data-access/types";
import {
  clearSyncCode,
  generateSyncCode,
  getLastSyncedAt,
  getSyncCode,
  isCloudSyncAvailable,
  setSyncCode,
} from "@/data-access/cloud/syncMeta";

const STATUS_LABEL: Record<SyncStatus, string> = {
  idle: "",
  connecting: "Đang kết nối...",
  syncing: "Đang đồng bộ...",
  synced: "Đã đồng bộ",
  error: "Lỗi đồng bộ — thử lại sau",
};

// Mục 13/SY-01→15: đồng bộ hoàn toàn tùy chọn (SY-14 — không cấu hình thì
// hiện hướng dẫn, không lỗi), SDK Firebase chỉ tải khi bấm nút (SY-13).
export default function SyncSection() {
  const [code, setCode] = useState(getSyncCode());
  const [status, setStatus] = useState<SyncStatus>("idle");
  const [joinCode, setJoinCode] = useState("");
  const [confirmJoin, setConfirmJoin] = useState(false);

  if (!isCloudSyncAvailable()) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="text-base font-semibold text-slate-900">Đồng bộ đa thiết bị</h2>
        <p className="mt-1 text-sm text-slate-600">
          Tính năng này cần thiết lập Firebase (miễn phí, tùy chọn). Xem hướng dẫn từng bước trong{" "}
          <code className="rounded bg-slate-100 px-1">README.md</code> ở phần "Đồng bộ đa thiết bị".
        </p>
      </div>
    );
  }

  async function withStatus(fn: (onStatus: (s: SyncStatus) => void) => Promise<void>) {
    try {
      await fn(setStatus);
    } catch {
      setStatus("error");
    }
  }

  async function createCode() {
    const newCode = generateSyncCode();
    setSyncCode(newCode);
    setCode(newCode);
    const { initAutoSync } = await import("@/data-access/cloud/firebaseSync");
    await withStatus((onStatus) => initAutoSync(newCode, onStatus));
  }

  async function joinExisting() {
    if (joinCode.trim().length !== 8) return;
    setSyncCode(joinCode.trim().toUpperCase());
    setCode(joinCode.trim().toUpperCase());
    setConfirmJoin(false);
    const { initAutoSync } = await import("@/data-access/cloud/firebaseSync");
    await withStatus((onStatus) => initAutoSync(joinCode.trim().toUpperCase(), onStatus));
  }

  async function syncNowClick() {
    if (!code) return;
    const { syncNow } = await import("@/data-access/cloud/firebaseSync");
    await withStatus((onStatus) => syncNow(code, onStatus));
  }

  function disconnect() {
    clearSyncCode();
    setCode(undefined);
    setStatus("idle");
  }

  const lastSyncedAt = getLastSyncedAt();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h2 className="text-base font-semibold text-slate-900">Đồng bộ đa thiết bị</h2>

      {!code ? (
        <div className="mt-3 flex flex-col gap-3">
          <button
            type="button"
            onClick={createCode}
            className="min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
          >
            Tạo mã đồng bộ mới
          </button>

          <div>
            <p className="text-sm text-slate-600">Hoặc nhập mã đã có từ thiết bị khác:</p>
            <div className="mt-1 flex gap-2">
              <input
                type="text"
                maxLength={8}
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="Mã 8 ký tự"
                className="min-h-12 flex-1 rounded-lg border border-slate-300 px-3 py-2 uppercase"
              />
              <button
                type="button"
                disabled={joinCode.trim().length !== 8}
                onClick={() => setConfirmJoin(true)}
                className="min-h-12 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-40"
              >
                Liên kết
              </button>
            </div>
          </div>

          {confirmJoin && (
            <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
              {/* SY-06 */}
              <p>Dữ liệu hiện có trên máy này sẽ bị ghi đè bằng dữ liệu từ mã "{joinCode}". Tiếp tục?</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmJoin(false)}
                  className="min-h-12 flex-1 rounded-lg border border-amber-300 px-3 py-2 font-medium"
                >
                  Huỷ
                </button>
                <button
                  type="button"
                  onClick={joinExisting}
                  className="min-h-12 flex-1 rounded-lg bg-amber-600 px-3 py-2 font-semibold text-white"
                >
                  Đồng ý ghi đè
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-3">
          <p className="text-sm text-slate-600">
            Mã đồng bộ: <span className="font-mono text-base font-semibold tracking-wider text-brand-700">{code}</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {lastSyncedAt ? `Lần cuối: ${new Date(lastSyncedAt).toLocaleString("vi-VN")}` : "Chưa đồng bộ lần nào"}
            {status !== "idle" && ` · ${STATUS_LABEL[status]}`}
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={syncNowClick}
              className="min-h-12 flex-1 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Đồng bộ ngay
            </button>
            <button
              type="button"
              onClick={disconnect}
              className="min-h-12 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Huỷ đồng bộ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
