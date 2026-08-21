import { beforeEach, describe, expect, it } from "vitest";
import { createIndexedDbWritingStore } from "@/data-access/local/indexedDbWritingStore";
import "fake-indexeddb/auto";
import { IDBFactory } from "fake-indexeddb";

describe("createIndexedDbWritingStore", () => {
  beforeEach(() => {
    // Fresh in-memory IndexedDB per test — this store's own tests should
    // not depend on ordering vs. other suites touching the same DB name.
    indexedDB = new IDBFactory();
  });

  it("has no draft initially", async () => {
    const store = createIndexedDbWritingStore();
    expect(await store.getDraft("ex-1")).toBeUndefined();
  });

  it("FR-W01: saveDraft upserts content, word count, and a fresh savedAt", async () => {
    const store = createIndexedDbWritingStore();
    const first = await store.saveDraft("ex-1", "Một câu đầu tiên.");
    expect(first.wordCount).toBe(4);
    expect(first.exerciseId).toBe("ex-1");

    const second = await store.saveDraft("ex-1", "Một câu đầu tiên và dài hơn.");
    expect(second.id).toBe(first.id); // same draft row, not a new one
    expect(second.wordCount).toBe(7);

    const draft = await store.getDraft("ex-1");
    expect(draft?.content).toBe("Một câu đầu tiên và dài hơn.");
  });

  it("FR-A10: draft survives being re-read after 'reopening' (new store instance)", async () => {
    await createIndexedDbWritingStore().saveDraft("ex-1", "Bản nháp của em.");
    const reopened = createIndexedDbWritingStore();
    expect((await reopened.getDraft("ex-1"))?.content).toBe("Bản nháp của em.");
  });

  it("submitDraft finalizes the draft and clears it", async () => {
    const store = createIndexedDbWritingStore();
    await store.saveDraft("ex-1", "Bài viết hoàn chỉnh của em.");
    const submitted = await store.submitDraft("ex-1");

    expect(submitted.submittedAt).toBeDefined();
    expect(submitted.content).toBe("Bài viết hoàn chỉnh của em.");
    expect(await store.getDraft("ex-1")).toBeUndefined();

    const all = await store.getSubmittedWritings("ex-1");
    expect(all).toHaveLength(1);
    expect(all[0].id).toBe(submitted.id);
  });

  it("FR-W05: setSelfScore stores a self-assessed score on the writing", async () => {
    const store = createIndexedDbWritingStore();
    await store.saveDraft("ex-1", "Bài viết.");
    const submitted = await store.submitDraft("ex-1");

    await store.setSelfScore(submitted.id, 8);
    const [writing] = await store.getSubmittedWritings("ex-1");
    expect(writing.selfScore).toBe(8);
  });

  it("FR-H10: setParentComment attaches a comment to a submitted writing", async () => {
    const store = createIndexedDbWritingStore();
    await store.saveDraft("ex-1", "Bài viết.");
    const submitted = await store.submitDraft("ex-1");

    await store.setParentComment(submitted.id, "Con viết rất hay!");
    const [writing] = await store.getSubmittedWritings("ex-1");
    expect(writing.parentComment).toBe("Con viết rất hay!");
  });

  it("getSubmittedWritings without an id returns writings across exercises, newest first", async () => {
    const store = createIndexedDbWritingStore();
    await store.saveDraft("ex-1", "Bài 1");
    await store.submitDraft("ex-1");
    // Guarantee a distinct submittedAt — two submits in the same test can
    // otherwise land in the same millisecond and make sort order among ties
    // unspecified (this is a test-timing concern, not a real one: no
    // student submits two essays within 1ms of each other).
    await new Promise((resolve) => setTimeout(resolve, 5));
    await store.saveDraft("ex-2", "Bài 2");
    await store.submitDraft("ex-2");

    const all = await store.getSubmittedWritings();
    expect(all.map((w) => w.exerciseId)).toEqual(["ex-2", "ex-1"]);
  });
});
