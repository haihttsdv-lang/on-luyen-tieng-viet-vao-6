// Lightweight sync status — no Firebase import here (SY-13). This lets the
// UI show sync state (has a code? last synced when?) without pulling in the
// ~550KB SDK. The heavy client lives in firebaseSync.ts, loaded via
// dynamic import() only once a sync code actually exists.

const KEYS = {
  syncCode: "ol6v.sync.code",
  deviceId: "ol6v.sync.deviceId",
  lastSyncedAt: "ol6v.sync.lastSyncedAt",
} as const;

// FR-M... no — SY-04: 8 characters, excludes characters easy to confuse
// (0/O, 1/I/L). Doubles as a lightweight shared secret.
const SYNC_CODE_CHARSET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
const SYNC_CODE_LENGTH = 8;

export function generateSyncCode(random: () => number = Math.random): string {
  let code = "";
  for (let i = 0; i < SYNC_CODE_LENGTH; i++) {
    code += SYNC_CODE_CHARSET[Math.floor(random() * SYNC_CODE_CHARSET.length)];
  }
  return code;
}

export function isCloudSyncAvailable(): boolean {
  return Boolean(
    import.meta.env.VITE_FIREBASE_API_KEY &&
      import.meta.env.VITE_FIREBASE_PROJECT_ID &&
      import.meta.env.VITE_FIREBASE_APP_ID,
  );
}

export function getSyncCode(): string | undefined {
  return localStorage.getItem(KEYS.syncCode) ?? undefined;
}

export function setSyncCode(code: string): void {
  localStorage.setItem(KEYS.syncCode, code);
}

export function clearSyncCode(): void {
  localStorage.removeItem(KEYS.syncCode);
  localStorage.removeItem(KEYS.lastSyncedAt);
}

export function getDeviceId(): string {
  let id = localStorage.getItem(KEYS.deviceId);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEYS.deviceId, id);
  }
  return id;
}

export function getLastSyncedAt(): number | undefined {
  const raw = localStorage.getItem(KEYS.lastSyncedAt);
  return raw ? Number(raw) : undefined;
}

export function setLastSyncedAt(timestamp: number): void {
  localStorage.setItem(KEYS.lastSyncedAt, String(timestamp));
}

// Lets the header coin badge (and anything else) re-render on data changes
// without a route change — dispatched by ProgressStore mutations and by a
// remote pull landing locally.
export const PROGRESS_CHANGED_EVENT = "ol6v:progress-changed";
export const REMOTE_SYNC_APPLIED_EVENT = "ol6v:remote-sync-applied";

export function notifyProgressChanged(): void {
  window.dispatchEvent(new Event(PROGRESS_CHANGED_EVENT));
}
