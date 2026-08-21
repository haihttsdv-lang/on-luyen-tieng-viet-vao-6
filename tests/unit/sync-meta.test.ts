import { beforeEach, describe, expect, it } from "vitest";
import {
  clearSyncCode,
  generateSyncCode,
  getDeviceId,
  getLastSyncedAt,
  getSyncCode,
  setLastSyncedAt,
  setSyncCode,
} from "@/data-access/cloud/syncMeta";

describe("generateSyncCode (SY-04)", () => {
  it("generates an 8-character code", () => {
    expect(generateSyncCode(() => 0.5)).toHaveLength(8);
  });

  it("never includes easily-confused characters (0, O, 1, I, L)", () => {
    // Sweep the RNG across its whole range to touch every charset position.
    const steps = 100;
    let all = "";
    for (let i = 0; i < steps; i++) {
      all += generateSyncCode(() => i / steps);
    }
    for (const forbidden of ["0", "O", "1", "I", "L"]) {
      expect(all).not.toContain(forbidden);
    }
  });

  it("is deterministic given the same random source", () => {
    expect(generateSyncCode(() => 0.1)).toBe(generateSyncCode(() => 0.1));
  });
});

describe("syncMeta storage (SY-04/SY-10)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("round-trips the sync code", () => {
    expect(getSyncCode()).toBeUndefined();
    setSyncCode("ABCD2345");
    expect(getSyncCode()).toBe("ABCD2345");
    clearSyncCode();
    expect(getSyncCode()).toBeUndefined();
  });

  it("clearing the sync code also clears lastSyncedAt", () => {
    setSyncCode("ABCD2345");
    setLastSyncedAt(123);
    clearSyncCode();
    expect(getLastSyncedAt()).toBeUndefined();
  });

  it("generates a stable deviceId that persists across calls", () => {
    const first = getDeviceId();
    const second = getDeviceId();
    expect(first).toBe(second);
    expect(first.length).toBeGreaterThan(0);
  });
});
