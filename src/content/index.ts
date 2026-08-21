import { TOPICS } from "@/content/topics";
import { KN01_EXERCISES } from "@/content/exercises/kn-01";
import { NT01_EXERCISES } from "@/content/exercises/nt-01";
import { CA03_EXERCISES } from "@/content/exercises/ca-03";
import { CD01_EXERCISES } from "@/content/exercises/cd-01";
import { CT07_EXERCISES } from "@/content/exercises/ct-07";
import { VA03_EXERCISES } from "@/content/exercises/va-03";
import type { Exercise, Topic } from "@/data-access/types";

export const ALL_TOPICS: Topic[] = TOPICS;

export const ALL_EXERCISES: Exercise[] = [
  ...KN01_EXERCISES,
  ...NT01_EXERCISES,
  ...CA03_EXERCISES,
  ...CD01_EXERCISES,
  ...CT07_EXERCISES,
  ...VA03_EXERCISES,
];

export { DISPUTED_WORDS } from "@/content/disputed-words";
