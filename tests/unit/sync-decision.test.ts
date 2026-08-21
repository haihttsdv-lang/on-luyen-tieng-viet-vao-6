import { describe, expect, it } from "vitest";
import { shouldApplyRemote } from "@/core/sync-decision";

describe("shouldApplyRemote (SY-10/SY-11)", () => {
  it("applies remote data when it's newer than the last sync and from another device", () => {
    expect(
      shouldApplyRemote({
        remoteUpdatedAtMs: 2000,
        remoteUpdatedBy: "device-b",
        localDeviceId: "device-a",
        localLastSyncedAt: 1000,
      }),
    ).toBe(true);
  });

  it("does not apply remote data that is not newer than the last sync", () => {
    expect(
      shouldApplyRemote({
        remoteUpdatedAtMs: 1000,
        remoteUpdatedBy: "device-b",
        localDeviceId: "device-a",
        localLastSyncedAt: 1000,
      }),
    ).toBe(false);
  });

  it("never re-applies a write this same device made (avoids self-overwrite loops)", () => {
    expect(
      shouldApplyRemote({
        remoteUpdatedAtMs: 9999,
        remoteUpdatedBy: "device-a",
        localDeviceId: "device-a",
        localLastSyncedAt: 0,
      }),
    ).toBe(false);
  });

  it("treats an undefined lastSyncedAt (first-ever sync) as 0", () => {
    expect(
      shouldApplyRemote({
        remoteUpdatedAtMs: 1,
        remoteUpdatedBy: "device-b",
        localDeviceId: "device-a",
        localLastSyncedAt: undefined,
      }),
    ).toBe(true);
  });
});
