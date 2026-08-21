// The heavy half of sync (SY-13) — only ever reached via dynamic import()
// from a sync code existing, so students who never turn sync on don't pay
// for the Firebase SDK. Mirrors the reference app's ADR 0005 design
// (progress_sync/{syncCode} doc, 3 trigger points, last-write-wins), with
// the ol6v.* key prefix per QĐ-3.

import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, signInAnonymously, type Auth } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
  Timestamp,
  type Firestore,
} from "firebase/firestore";
import { progressStore } from "@/data-access";
import type { SyncStatus } from "@/data-access/types";
import { shouldApplyRemote } from "@/core/sync-decision";
import {
  getDeviceId,
  getLastSyncedAt,
  getSyncCode,
  notifyProgressChanged,
  REMOTE_SYNC_APPLIED_EVENT,
  setLastSyncedAt,
} from "@/data-access/cloud/syncMeta";

interface SyncDoc {
  data: string; // JSON.stringify(progressStore.exportAll())
  updatedAt: Timestamp;
  updatedBy: string;
}

let firestore: Firestore | undefined;
let authInstance: Auth | undefined;
let authReady: Promise<void> | undefined;

function ensureInitialized(): { auth: Auth; db: Firestore } {
  if (!firestore || !authInstance) {
    const app: FirebaseApp = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    });
    authInstance = getAuth(app);
    firestore = getFirestore(app);
  }
  return { auth: authInstance, db: firestore };
}

// SY-05: anonymous auth so Firestore Rules can reject unauthenticated access.
function ensureAuthed(): Promise<void> {
  const { auth } = ensureInitialized();
  if (!authReady) authReady = signInAnonymously(auth).then(() => undefined);
  return authReady;
}

/** SY-07/SY-11: pulls remote data if it's newer than this device's last
 * sync and wasn't written by this device. Returns whether it applied. */
export async function pullIfNewer(code: string): Promise<boolean> {
  await ensureAuthed();
  const { db } = ensureInitialized();
  const snap = await getDoc(doc(db, "progress_sync", code));
  if (!snap.exists()) return false;

  const remote = snap.data() as SyncDoc;
  const remoteUpdatedAtMs = remote.updatedAt?.toMillis?.() ?? 0;
  const apply = shouldApplyRemote({
    remoteUpdatedAtMs,
    remoteUpdatedBy: remote.updatedBy,
    localDeviceId: getDeviceId(),
    localLastSyncedAt: getLastSyncedAt(),
  });
  if (!apply) return false;

  const parsed = JSON.parse(remote.data) as Record<string, string>;
  progressStore.importAll(parsed);
  setLastSyncedAt(remoteUpdatedAtMs);
  notifyProgressChanged();
  window.dispatchEvent(new Event(REMOTE_SYNC_APPLIED_EVENT));
  return true;
}

/** SY-02: reuses exportAll() — no separate API per data type. SY-12: caps
 * how many writings are included (essays are the one thing that can make
 * the payload large enough to threaten Firestore's 1MB document limit). */
export async function pushNow(code: string): Promise<void> {
  await ensureAuthed();
  const { db } = ensureInitialized();
  const data = JSON.stringify(progressStore.exportAll());
  await setDoc(doc(db, "progress_sync", code), {
    data,
    updatedAt: serverTimestamp(),
    updatedBy: getDeviceId(),
  });
  setLastSyncedAt(Date.now());
}

let listenersAttached = false;

function attachExitListeners(): void {
  if (listenersAttached) return;
  listenersAttached = true;
  // SY-08: visibilitychange + pagehide, deliberately NOT beforeunload/unload
  // (unreliable on mobile — Android can kill the page without firing them).
  const pushOnExit = () => {
    const code = getSyncCode();
    if (code) void pushNow(code);
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") pushOnExit();
  });
  window.addEventListener("pagehide", pushOnExit);
}

/** SY-07: called once when the app opens with an existing sync code. */
export async function initAutoSync(code: string, onStatus?: (status: SyncStatus) => void): Promise<void> {
  onStatus?.("connecting");
  try {
    const applied = await pullIfNewer(code);
    if (!applied) {
      onStatus?.("syncing");
      await pushNow(code);
    }
    onStatus?.("synced");
  } catch (err) {
    onStatus?.("error");
    throw err;
  }
  attachExitListeners();
}

/** SY-09: the "Đồng bộ ngay" button — pull then push immediately. */
export async function syncNow(code: string, onStatus?: (status: SyncStatus) => void): Promise<void> {
  onStatus?.("syncing");
  try {
    await pullIfNewer(code);
    await pushNow(code);
    onStatus?.("synced");
  } catch (err) {
    onStatus?.("error");
    throw err;
  }
}
