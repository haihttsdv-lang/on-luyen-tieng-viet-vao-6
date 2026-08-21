// IndexedDB-backed WritingStore (Mục 16.1: bài viết dài dùng IndexedDB, not
// localStorage). No external library — the native API is enough for a
// single object store and keeps the bundle small (FR-A17).

import type { StudentWriting, WritingStore } from "@/data-access/types";
import { countWords } from "@/core/writing-stats";

const DB_NAME = "ol6v-writings";
const DB_VERSION = 1;
const STORE_NAME = "writings";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function promisify<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getRecord(id: string): Promise<StudentWriting | undefined> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, "readonly");
  return promisify(tx.objectStore(STORE_NAME).get(id));
}

async function putRecord(record: StudentWriting): Promise<void> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await promisify(tx.objectStore(STORE_NAME).put(record));
}

async function deleteRecord(id: string): Promise<void> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await promisify(tx.objectStore(STORE_NAME).delete(id));
}

async function getAllRecords(): Promise<StudentWriting[]> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, "readonly");
  return promisify(tx.objectStore(STORE_NAME).getAll());
}

const draftId = (exerciseId: string) => `draft:${exerciseId}`;

export function createIndexedDbWritingStore(): WritingStore {
  return {
    async getDraft(exerciseId) {
      return getRecord(draftId(exerciseId));
    },

    async saveDraft(exerciseId, content) {
      const record: StudentWriting = {
        id: draftId(exerciseId),
        exerciseId,
        content,
        wordCount: countWords(content),
        savedAt: Date.now(),
      };
      await putRecord(record);
      return record;
    },

    async submitDraft(exerciseId) {
      const draft = await getRecord(draftId(exerciseId));
      const content = draft?.content ?? "";
      const submitted: StudentWriting = {
        id: `submitted:${exerciseId}:${Date.now()}`,
        exerciseId,
        content,
        wordCount: countWords(content),
        savedAt: Date.now(),
        submittedAt: Date.now(),
      };
      await putRecord(submitted);
      await deleteRecord(draftId(exerciseId));
      return submitted;
    },

    async getSubmittedWritings(exerciseId) {
      const all = await getAllRecords();
      return all
        .filter((w) => w.submittedAt !== undefined)
        .filter((w) => exerciseId === undefined || w.exerciseId === exerciseId)
        .sort((a, b) => b.submittedAt! - a.submittedAt!);
    },

    async setSelfScore(writingId, selfScore) {
      const record = await getRecord(writingId);
      if (!record) return;
      await putRecord({ ...record, selfScore });
    },

    async setParentComment(writingId, comment) {
      const record = await getRecord(writingId);
      if (!record) return;
      await putRecord({ ...record, parentComment: comment });
    },
  };
}
