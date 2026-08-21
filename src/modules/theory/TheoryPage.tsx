import { Route, Routes } from "react-router-dom";
import TopicListPage from "@/modules/theory/TopicListPage";
import LessonPage from "@/modules/theory/LessonPage";
import QuizPage from "@/modules/theory/QuizPage";
import MindMapPage from "@/modules/theory/MindMapPage";

export default function TheoryPage() {
  return (
    <Routes>
      <Route index element={<TopicListPage />} />
      <Route path="so-do-tu-duy" element={<MindMapPage />} />
      <Route path=":topicId" element={<LessonPage />} />
      <Route path=":topicId/quiz" element={<QuizPage />} />
    </Routes>
  );
}
