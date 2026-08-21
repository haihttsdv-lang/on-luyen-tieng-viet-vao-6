import { Route, Routes } from "react-router-dom";
import TopicPicker from "@/modules/practice/TopicPicker";
import ExerciseSession from "@/modules/practice/ExerciseSession";
import SessionResultPage from "@/modules/practice/SessionResultPage";
import ErrorLogPage from "@/modules/practice/ErrorLogPage";
import WritingSession from "@/modules/writing/WritingSession";
import SpeedChallengePage from "@/modules/practice/SpeedChallengePage";

export default function PracticePage() {
  return (
    <Routes>
      <Route index element={<TopicPicker />} />
      <Route path="lam-bai" element={<ExerciseSession />} />
      <Route path="ket-qua" element={<SessionResultPage />} />
      <Route path="so-loi" element={<ErrorLogPage />} />
      <Route path="viet/:exerciseId" element={<WritingSession />} />
      <Route path="toc-do" element={<SpeedChallengePage />} />
    </Routes>
  );
}
