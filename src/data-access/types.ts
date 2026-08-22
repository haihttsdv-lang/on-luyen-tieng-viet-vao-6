// Domain content + progress types (Mục 17) and the storage abstractions that
// read/write them. UI code must go through ContentStore/ProgressStore —
// never touch localStorage/IndexedDB directly (Mục 16.2).

import type {
  FillAnswerSpec,
  MatchSpec,
  McqSpec,
  OrderSpec,
  ShortAnswerSpec,
} from "@/core/answer-checker";

export type TopicGroup = "TC" | "TL" | "NT" | "CA" | "CD" | "DH" | "CT" | "KN" | "VA";
export type QuestionLevel = "M1" | "M2" | "M3" | "M4";
export type QuestionType = "mcq" | "match" | "order" | "fill" | "short" | "essay-short" | "essay-long";

export interface Topic {
  id: string; // e.g. "NT-01"
  group: TopicGroup;
  title: string;
  /** Filled in when Giai đoạn 4 (Lý thuyết) builds the lesson content. */
  lesson?: {
    concept: string;
    signals: string[];
    examples: string[];
    commonMistakes: string[];
    /** FR-L03: nhóm KN trình bày dạng quy trình từng bước, không chỉ nêu mẹo. */
    steps?: string[];
  };
  /** FR-D02: for chuyên đề with cross-textbook disputes (Mục 10.6). */
  disputedNote?: string;
}

// FR-DH01→DH25 (Mục 5.11): a shared reading passage — multiple exercises
// reference it by id via ExerciseBase.passageId instead of repeating the
// text in every prompt.
// FR-N01→N04/NFR-07: sourceType + sourceNote are bắt buộc trên mọi Passage
// để test tự động canh vi phạm bản quyền ngữ liệu (Mục 10.1, rủi ro "rất
// cao" — Mục 21). Toàn bộ passage trong dự án này đi theo hướng B (tự biên
// soạn) nên sourceType luôn là "original".
export type PassageSourceType = "public-domain" | "original" | "quoted";

export interface Passage {
  id: string;
  title: string;
  text: string;
  sourceType: PassageSourceType;
  sourceNote: string;
}

// FR-P04: every mcq answer explains why each option is right/wrong.
export interface McqContent extends McqSpec {
  options: string[];
  distractorNotes: string[]; // index-aligned with options
}

export interface MatchContent {
  leftItems: Array<{ id: string; label: string }>;
  rightItems: Array<{ id: string; label: string }>;
  correctPairs: MatchSpec["pairs"];
}

export interface OrderContent {
  items: Array<{ id: string; label: string }>;
  correctOrder: OrderSpec["correctOrder"];
}

export interface ShortContent extends ShortAnswerSpec {
  sampleAnswer: string;
}

interface ExerciseBase {
  id: string;
  topicIds: string[];
  level: QuestionLevel;
  prompt: string;
  explanation: string;
  passageId?: string;
}

// FR-W02/W03/W04: structure hint (cảm thụ) or dàn ý (tập làm văn), optional
// opening-style suggestions for văn tả (KN-03), rubric with point values for
// self-scoring, and a sample answer gated behind FR-P10.
export interface EssayContent {
  outline: string[];
  openingStyles?: string[];
  rubric: Array<{ criterion: string; points: number }>;
  sampleAnswer: string;
  /** FR-P10: minimum word count before the sample answer/rubric unlock. Defaults to 40. */
  minWordsToReveal?: number;
}

export type Exercise =
  | (ExerciseBase & { questionType: "mcq"; mcq: McqContent })
  | (ExerciseBase & { questionType: "match"; match: MatchContent })
  | (ExerciseBase & { questionType: "order"; order: OrderContent })
  | (ExerciseBase & { questionType: "fill"; fill: FillAnswerSpec })
  | (ExerciseBase & { questionType: "short"; short: ShortContent })
  | (ExerciseBase & { questionType: "essay-short"; essay: EssayContent })
  | (ExerciseBase & { questionType: "essay-long"; essay: EssayContent });

// FR-P07: student-selected reason for a wrong answer, shown as optional
// chips right after grading — this is self-diagnosis, not inferred.
export type ErrorType =
  | "nham-khai-niem"
  | "sai-chinh-ta"
  | "khong-doc-ky-de"
  | "dien-dat-chua-ro"
  | "thieu-y";

export interface Attempt {
  id: string;
  exerciseId: string;
  topicIds: string[];
  correct?: boolean; // undefined for question types with no auto verdict
  timestamp: number;
  errorType?: ErrorType;
}

// FR-P05/P06: entries auto-added on a wrong attempt, removed after 2
// consecutive correct redos.
export interface ErrorLogEntry {
  exerciseId: string;
  addedAt: number;
  consecutiveCorrect: number;
  errorType?: ErrorType;
}

// FR-W06/FR-A09→A11: one row per draft-in-progress (submittedAt undefined)
// or finished submission. Stored in IndexedDB, not localStorage — long
// essays can exceed localStorage's practical size (Mục 16.1).
export interface StudentWriting {
  id: string;
  exerciseId: string;
  content: string;
  wordCount: number;
  selfScore?: number; // FR-W05: self-assessed only, never feeds mastery
  parentComment?: string; // FR-H10
  savedAt: number;
  submittedAt?: number;
}

export interface WritingStore {
  getDraft(exerciseId: string): Promise<StudentWriting | undefined>;
  saveDraft(exerciseId: string, content: string): Promise<StudentWriting>;
  /** Finalizes the current draft as a submitted StudentWriting and clears the draft. */
  submitDraft(exerciseId: string): Promise<StudentWriting>;
  getSubmittedWritings(exerciseId?: string): Promise<StudentWriting[]>;
  setSelfScore(writingId: string, selfScore: number): Promise<void>;
  setParentComment(writingId: string, comment: string): Promise<void>;
}

// Mục 6/FR-T01: declared as data, never hard-coded — new/changed school exam
// structures only require editing `content/test-configs`.
export interface TestConfig {
  id: string;
  label: string;
  durationMinutes: number;
  topicGroupWeights: Partial<Record<TopicGroup, number>>;
  levelRatio: Partial<Record<QuestionLevel, number>>;
  /** Objective (auto/semi-auto graded) question types only — essay is a separate single slot. */
  questionTypeWeights: Partial<Record<QuestionType, number>>;
  totalQuestions: number;
  includeEssay: boolean;
  autoScoreMax: number;
  essayScoreMax: number;
}

// Mục 5.11 — "đề thi thử hoàn chỉnh soạn sẵn": khác đề sinh ngẫu nhiên
// (FR-T02/generateTest) ở chỗ danh sách câu hỏi CỐ ĐỊNH, học sinh làm lại
// vẫn ra đúng đề đó. Mỗi đề tham chiếu đúng 1 TestConfig (cùng thời gian,
// thang điểm) nhưng exerciseIds đã chọn sẵn, không sinh lại mỗi lần vào.
export interface PresetExam {
  id: string;
  configId: string;
  label: string;
  exerciseIds: string[];
  essayExerciseId?: string;
}

// FR-T07/T08.
export interface TestResult {
  id: string;
  configId: string;
  configLabel: string;
  date: number;
  autoScore: number;
  autoScoreMax: number;
  selfScore: number;
  /** Max for `selfScore` — essay rubric points plus any `short` questions (1 pt each). */
  selfScoreMax: number;
  byTopicGroup: Record<string, { correct: number; total: number }>;
  byLevel: Record<string, { correct: number; total: number }>;
  durationUsedSeconds: number;
}

// ---------------------------------------------------------------------------
// Lộ trình học (Mục 7 / Mục 9.4)
// ---------------------------------------------------------------------------

export type SessionType = "lesson" | "practice" | "mock-test" | "error-review" | "weekly-check" | "monthly-check";

export interface ScheduledSession {
  id: string;
  index: number;
  date: string; // ISO "YYYY-MM-DD"
  phase: 1 | 2 | 3;
  type: SessionType;
  label: string;
  topicIds?: string[]; // lesson/practice/error-review
  testConfigId?: string; // mock-test/weekly-check/monthly-check
}

// FR-C04: tự đánh giá 3 mức cuối buổi, dùng cho gamification (Giai đoạn 8).
export type SessionOutcome = "xuat-sac" | "on" | "can-on-lai";

export interface SessionOutcomeRecord {
  sessionId: string;
  outcome: SessionOutcome;
  completedAt: number;
}

// FR-C06: đầu vào cho việc sinh lịch — startDate cố định từ lần mở app đầu
// tiên, các trường còn lại có thể chỉnh sau.
export interface ScheduleSettings {
  startDate: string; // ISO "YYYY-MM-DD", set once on first open
  daysOfWeek: number[]; // 0=Sun..6=Sat
  examDate?: string;
  testConfigId?: string; // trường mục tiêu → cấu hình đề mặc định GĐ3
}

// ---------------------------------------------------------------------------
// Đồng bộ đa thiết bị (Mục 13) — tách riêng khỏi ProgressStore: syncMeta là
// trạng thái cục bộ (không thuộc bản sao lưu JSON — mã đồng bộ/deviceId là
// đặc thù thiết bị, không nên bị ghi đè khi khôi phục bản sao lưu của người
// khác), còn SDK Firebase chỉ tải khi thực sự cần (SY-13).
// ---------------------------------------------------------------------------

export type SyncStatus = "idle" | "connecting" | "syncing" | "synced" | "error";

export interface SyncMeta {
  syncCode?: string;
  deviceId: string;
  lastSyncedAt?: number;
}

export interface ContentStore {
  getTopics(): Topic[];
  getTopic(id: string): Topic | undefined;
  getExercises(): Exercise[];
  getExercise(id: string): Exercise | undefined;
  getExercisesByTopics(topicIds: string[], level?: QuestionLevel): Exercise[];
  getTestConfigs(): TestConfig[];
  getTestConfig(id: string): TestConfig | undefined;
  getPassage(id: string): Passage | undefined;
  getPresetExams(configId: string): PresetExam[];
  getPresetExam(id: string): PresetExam | undefined;
}

// FR-L01: per-topic progress through the lesson→quiz cycle.
export type TopicStatus = "chua-hoc" | "dang-hoc" | "da-nam";

export interface ProgressStore {
  getAttempts(): Attempt[];
  addAttempt(attempt: Attempt): void;

  getErrorLog(): ErrorLogEntry[];
  setErrorLog(entries: ErrorLogEntry[]): void;

  getTopicStatuses(): Record<string, TopicStatus>;
  setTopicStatus(topicId: string, status: TopicStatus): void;

  getTestResults(): TestResult[];
  addTestResult(result: TestResult): void;

  getScheduleSettings(): ScheduleSettings | undefined;
  setScheduleSettings(settings: ScheduleSettings): void;

  getSchedule(): ScheduledSession[];
  setSchedule(sessions: ScheduledSession[]): void;

  getSessionOutcomes(): Record<string, SessionOutcomeRecord>;
  setSessionOutcome(sessionId: string, outcome: SessionOutcome): void;

  /** FR-C08: session opened but not yet self-assessed. */
  getLastOpenedSessionId(): string | undefined;
  setLastOpenedSessionId(sessionId: string | undefined): void;

  // GM-01→04: never goes below 0.
  getCoins(): number;
  addCoins(delta: number): number;

  // GM-08.
  getSoundEnabled(): boolean;
  setSoundEnabled(enabled: boolean): void;

  exportAll(): Record<string, string>;
  importAll(data: Record<string, string>): void;
}
