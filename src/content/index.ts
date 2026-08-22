import { TOPICS } from "@/content/topics";
import { KN01_EXERCISES } from "@/content/exercises/kn-01";
import { KN02_EXERCISES } from "@/content/exercises/kn-02";
import { KN03_EXERCISES } from "@/content/exercises/kn-03";
import { KN04_EXERCISES } from "@/content/exercises/kn-04";
import { KN05_EXERCISES } from "@/content/exercises/kn-05";
import { NT01_EXERCISES } from "@/content/exercises/nt-01";
import { NT02_EXERCISES } from "@/content/exercises/nt-02";
import { NT03_EXERCISES } from "@/content/exercises/nt-03";
import { NT04_EXERCISES } from "@/content/exercises/nt-04";
import { NT05_EXERCISES } from "@/content/exercises/nt-05";
import { NT06_EXERCISES } from "@/content/exercises/nt-06";
import { TC01_EXERCISES } from "@/content/exercises/tc-01";
import { TC02_EXERCISES } from "@/content/exercises/tc-02";
import { TC03_EXERCISES } from "@/content/exercises/tc-03";
import { TC04_EXERCISES } from "@/content/exercises/tc-04";
import { CA01_EXERCISES } from "@/content/exercises/ca-01";
import { CA02_EXERCISES } from "@/content/exercises/ca-02";
import { CA03_EXERCISES } from "@/content/exercises/ca-03";
import { CA04_EXERCISES } from "@/content/exercises/ca-04";
import { CA05_EXERCISES } from "@/content/exercises/ca-05";
import { CA06_EXERCISES } from "@/content/exercises/ca-06";
import { CA07_EXERCISES } from "@/content/exercises/ca-07";
import { CA08_EXERCISES } from "@/content/exercises/ca-08";
import { CD01_EXERCISES } from "@/content/exercises/cd-01";
import { CD02_EXERCISES } from "@/content/exercises/cd-02";
import { CD03_EXERCISES } from "@/content/exercises/cd-03";
import { CD04_EXERCISES } from "@/content/exercises/cd-04";
import { CD05_EXERCISES } from "@/content/exercises/cd-05";
import { CT01_EXERCISES } from "@/content/exercises/ct-01";
import { CT02_EXERCISES } from "@/content/exercises/ct-02";
import { CT03_EXERCISES } from "@/content/exercises/ct-03";
import { CT04_EXERCISES } from "@/content/exercises/ct-04";
import { CT05_EXERCISES } from "@/content/exercises/ct-05";
import { CT06_EXERCISES } from "@/content/exercises/ct-06";
import { CT07_EXERCISES } from "@/content/exercises/ct-07";
import { VA01_EXERCISES } from "@/content/exercises/va-01";
import { VA02_EXERCISES } from "@/content/exercises/va-02";
import { VA03_EXERCISES } from "@/content/exercises/va-03";
import { VA04_EXERCISES } from "@/content/exercises/va-04";
import { VA05_EXERCISES } from "@/content/exercises/va-05";
import { VA06_EXERCISES } from "@/content/exercises/va-06";
import { VA07_EXERCISES } from "@/content/exercises/va-07";
import { VA08_EXERCISES } from "@/content/exercises/va-08";
import { VA09_EXERCISES } from "@/content/exercises/va-09";
import { TL01_EXERCISES } from "@/content/exercises/tl-01";
import { TL02_EXERCISES } from "@/content/exercises/tl-02";
import { TL03_EXERCISES } from "@/content/exercises/tl-03";
import { TL04_EXERCISES } from "@/content/exercises/tl-04";
import { TL05_EXERCISES } from "@/content/exercises/tl-05";
import { TL06_EXERCISES } from "@/content/exercises/tl-06";
import { DH01_EXERCISES } from "@/content/exercises/dh-01";
import { DH02_EXERCISES } from "@/content/exercises/dh-02";
import { DH03_EXERCISES } from "@/content/exercises/dh-03";
import { DH04_EXERCISES } from "@/content/exercises/dh-04";
import { DH05_EXERCISES } from "@/content/exercises/dh-05";
import { DH06_EXERCISES } from "@/content/exercises/dh-06";
import { DH_PASSAGE_01_EXERCISES } from "@/content/exercises/dh-passage-01";
import { DH_PASSAGE_02_EXERCISES } from "@/content/exercises/dh-passage-02";
import { DH_PASSAGE_03_EXERCISES } from "@/content/exercises/dh-passage-03";
import { DH_PASSAGE_04_EXERCISES } from "@/content/exercises/dh-passage-04";
import { DH_PASSAGE_05_EXERCISES } from "@/content/exercises/dh-passage-05";
import { DH_PASSAGE_06_EXERCISES } from "@/content/exercises/dh-passage-06";
import { DH_PASSAGE_07_EXERCISES } from "@/content/exercises/dh-passage-07";
import { DH_PASSAGE_08_EXERCISES } from "@/content/exercises/dh-passage-08";
import { DH_PASSAGE_09_EXERCISES } from "@/content/exercises/dh-passage-09";
import { DH_PASSAGE_10_EXERCISES } from "@/content/exercises/dh-passage-10";
import { DH_PASSAGE_11_EXERCISES } from "@/content/exercises/dh-passage-11";
import { DH_PASSAGE_12_EXERCISES } from "@/content/exercises/dh-passage-12";
import { DH_PASSAGE_13_EXERCISES } from "@/content/exercises/dh-passage-13";
import { DH_PASSAGE_14_EXERCISES } from "@/content/exercises/dh-passage-14";
import { DH_PASSAGE_15_EXERCISES } from "@/content/exercises/dh-passage-15";
import { DH_PASSAGE_16_EXERCISES } from "@/content/exercises/dh-passage-16";
import { DH_PASSAGE_17_EXERCISES } from "@/content/exercises/dh-passage-17";
import { DH_PASSAGE_18_EXERCISES } from "@/content/exercises/dh-passage-18";
import { DH_PASSAGE_19_EXERCISES } from "@/content/exercises/dh-passage-19";
import { DH_PASSAGE_20_EXERCISES } from "@/content/exercises/dh-passage-20";
import { DH_PASSAGE_21_EXERCISES } from "@/content/exercises/dh-passage-21";
import { DH_PASSAGE_22_EXERCISES } from "@/content/exercises/dh-passage-22";
import { DH_PASSAGE_23_EXERCISES } from "@/content/exercises/dh-passage-23";
import { DH_PASSAGE_24_EXERCISES } from "@/content/exercises/dh-passage-24";
import { DH_PASSAGE_25_EXERCISES } from "@/content/exercises/dh-passage-25";
import type { Exercise, Topic } from "@/data-access/types";

export const ALL_TOPICS: Topic[] = TOPICS;
export { ALL_PASSAGES } from "@/content/passages";

export const ALL_EXERCISES: Exercise[] = [
  ...KN01_EXERCISES,
  ...KN02_EXERCISES,
  ...KN03_EXERCISES,
  ...KN04_EXERCISES,
  ...KN05_EXERCISES,
  ...NT01_EXERCISES,
  ...NT02_EXERCISES,
  ...NT03_EXERCISES,
  ...NT04_EXERCISES,
  ...NT05_EXERCISES,
  ...NT06_EXERCISES,
  ...TC01_EXERCISES,
  ...TC02_EXERCISES,
  ...TC03_EXERCISES,
  ...TC04_EXERCISES,
  ...CA01_EXERCISES,
  ...CA02_EXERCISES,
  ...CA03_EXERCISES,
  ...CA04_EXERCISES,
  ...CA05_EXERCISES,
  ...CA06_EXERCISES,
  ...CA07_EXERCISES,
  ...CA08_EXERCISES,
  ...CD01_EXERCISES,
  ...CD02_EXERCISES,
  ...CD03_EXERCISES,
  ...CD04_EXERCISES,
  ...CD05_EXERCISES,
  ...CT01_EXERCISES,
  ...CT02_EXERCISES,
  ...CT03_EXERCISES,
  ...CT04_EXERCISES,
  ...CT05_EXERCISES,
  ...CT06_EXERCISES,
  ...CT07_EXERCISES,
  ...VA01_EXERCISES,
  ...VA02_EXERCISES,
  ...VA03_EXERCISES,
  ...VA04_EXERCISES,
  ...VA05_EXERCISES,
  ...VA06_EXERCISES,
  ...VA07_EXERCISES,
  ...VA08_EXERCISES,
  ...VA09_EXERCISES,
  ...TL01_EXERCISES,
  ...TL02_EXERCISES,
  ...TL03_EXERCISES,
  ...TL04_EXERCISES,
  ...TL05_EXERCISES,
  ...TL06_EXERCISES,
  ...DH01_EXERCISES,
  ...DH02_EXERCISES,
  ...DH03_EXERCISES,
  ...DH04_EXERCISES,
  ...DH05_EXERCISES,
  ...DH06_EXERCISES,
  ...DH_PASSAGE_01_EXERCISES,
  ...DH_PASSAGE_02_EXERCISES,
  ...DH_PASSAGE_03_EXERCISES,
  ...DH_PASSAGE_04_EXERCISES,
  ...DH_PASSAGE_05_EXERCISES,
  ...DH_PASSAGE_06_EXERCISES,
  ...DH_PASSAGE_07_EXERCISES,
  ...DH_PASSAGE_08_EXERCISES,
  ...DH_PASSAGE_09_EXERCISES,
  ...DH_PASSAGE_10_EXERCISES,
  ...DH_PASSAGE_11_EXERCISES,
  ...DH_PASSAGE_12_EXERCISES,
  ...DH_PASSAGE_13_EXERCISES,
  ...DH_PASSAGE_14_EXERCISES,
  ...DH_PASSAGE_15_EXERCISES,
  ...DH_PASSAGE_16_EXERCISES,
  ...DH_PASSAGE_17_EXERCISES,
  ...DH_PASSAGE_18_EXERCISES,
  ...DH_PASSAGE_19_EXERCISES,
  ...DH_PASSAGE_20_EXERCISES,
  ...DH_PASSAGE_21_EXERCISES,
  ...DH_PASSAGE_22_EXERCISES,
  ...DH_PASSAGE_23_EXERCISES,
  ...DH_PASSAGE_24_EXERCISES,
  ...DH_PASSAGE_25_EXERCISES,
];

export { DISPUTED_WORDS } from "@/content/disputed-words";
