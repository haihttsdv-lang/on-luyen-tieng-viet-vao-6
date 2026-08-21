// Pure conflict-resolution rule for multi-device sync (SY-10/SY-11). No
// network, no Firebase — firebaseSync.ts calls this after fetching the
// remote document, so the actual decision logic is testable without a real
// backend.

export function shouldApplyRemote(params: {
  remoteUpdatedAtMs: number;
  remoteUpdatedBy: string;
  localDeviceId: string;
  localLastSyncedAt: number | undefined;
}): boolean {
  // Avoid re-applying a write this very device just made (SY-10's "chỉ kéo
  // về nếu updatedAt cloud mới hơn" combined with the reference app's own
  // self-write guard).
  if (params.remoteUpdatedBy === params.localDeviceId) return false;
  const lastSynced = params.localLastSyncedAt ?? 0;
  return params.remoteUpdatedAtMs > lastSynced;
}
