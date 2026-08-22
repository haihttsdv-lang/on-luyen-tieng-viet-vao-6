import { TOPICS } from "@/content/topics";
import { KN01_EXERCISES } from "@/content/exercises/kn-01";
import { KN02_EXERCISES } from "@/content/exercises/kn-02";
import { KN03_EXERCISES } from "@/content/exercises/kn-03";
import { KN04_EXERCISES } from "@/content/exercises/kn-04";
import { KN05_EXERCISES } from "@/content/exercises/kn-05";
import { NT01_EXERCISES } from "@/content/exercises/nt-01";
import { CA01_EXERCISES } from "@/content/exercises/ca-01";
import { CA02_EXERCISES } from "@/content/exercises/ca-02";
import { CA03_EXERCISES } from "@/content/exercises/ca-03";
import { CA04_EXERCISES } from "@/content/exercises/ca-04";
import { CA05_EXERCISES } from "@/content/exercises/ca-05";
import { CA06_EXERCISES } from "@/content/exercises/ca-06";
import { CA07_EXERCISES } from "@/content/exercises/ca-07";
import { CD01_EXERCISES } from "@/content/exercises/cd-01";
import { CT01_EXERCISES } from "@/content/exercises/ct-01";
import { CT02_EXERCISES } from "@/content/exercises/ct-02";
import { CT05_EXERCISES } from "@/content/exercises/ct-05";
import { CT07_EXERCISES } from "@/content/exercises/ct-07";
import { VA03_EXERCISES } from "@/content/exercises/va-03";
import type { Exercise, Topic } from "@/data-access/types";

export const ALL_TOPICS: Topic[] = TOPICS;

export const ALL_EXERCISES: Exercise[] = [
  ...KN01_EXERCISES,
  ...KN02_EXERCISES,
  ...KN03_EXERCISES,
  ...KN04_EXERCISES,
  ...KN05_EXERCISES,
  ...NT01_EXERCISES,
  ...CA01_EXERCISES,
  ...CA02_EXERCISES,
  ...CA03_EXERCISES,
  ...CA04_EXERCISES,
  ...CA05_EXERCISES,
  ...CA06_EXERCISES,
  ...CA07_EXERCISES,
  ...CD01_EXERCISES,
  ...CT01_EXERCISES,
  ...CT02_EXERCISES,
  ...CT05_EXERCISES,
  ...CT07_EXERCISES,
  ...VA03_EXERCISES,
];

export { DISPUTED_WORDS } from "@/content/disputed-words";
