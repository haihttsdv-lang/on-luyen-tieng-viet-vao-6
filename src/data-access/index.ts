import { createLocalContentStore } from "@/data-access/local/localContentStore";
import { createLocalProgressStore } from "@/data-access/local/localProgressStore";
import { createIndexedDbWritingStore } from "@/data-access/local/indexedDbWritingStore";

// Singletons — modules import these instead of constructing stores
// themselves, so there's exactly one source of truth for progress state.
export const contentStore = createLocalContentStore();
export const progressStore = createLocalProgressStore();
export const writingStore = createIndexedDbWritingStore();

export type * from "@/data-access/types";
