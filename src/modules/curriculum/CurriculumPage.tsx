import { Route, Routes } from "react-router-dom";
import JourneyOverview from "@/modules/curriculum/JourneyOverview";
import SessionDetailPage from "@/modules/curriculum/SessionDetailPage";

export default function CurriculumPage() {
  return (
    <Routes>
      <Route index element={<JourneyOverview />} />
      <Route path=":sessionId" element={<SessionDetailPage />} />
    </Routes>
  );
}
