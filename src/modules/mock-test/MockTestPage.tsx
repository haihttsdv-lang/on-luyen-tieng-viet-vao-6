import { Route, Routes } from "react-router-dom";
import ConfigPicker from "@/modules/mock-test/ConfigPicker";
import ExamSession from "@/modules/mock-test/ExamSession";
import ResultsPage from "@/modules/mock-test/ResultsPage";
import HistoryPage from "@/modules/mock-test/HistoryPage";

export default function MockTestPage() {
  return (
    <Routes>
      <Route index element={<ConfigPicker />} />
      <Route path="lam-bai" element={<ExamSession />} />
      <Route path="ket-qua" element={<ResultsPage />} />
      <Route path="lich-su" element={<HistoryPage />} />
    </Routes>
  );
}
