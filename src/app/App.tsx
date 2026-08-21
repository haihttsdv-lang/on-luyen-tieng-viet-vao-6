import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/modules/curriculum/HomePage";
import TheoryPage from "@/modules/theory/TheoryPage";
import PracticePage from "@/modules/practice/PracticePage";
import MockTestPage from "@/modules/mock-test/MockTestPage";
import CurriculumPage from "@/modules/curriculum/CurriculumPage";
import ProfilePage from "@/modules/profile/ProfilePage";

// NFR-11: the `singlefile` build must run via file://, which BrowserRouter's
// History API cannot do — HashRouter works with no server involved. Same
// problem, different cause, for `gh-pages`: GitHub Pages has no server-side
// rewrite to send deep-link refreshes back to index.html, so a reload on
// e.g. /luyen-tap would 404 under BrowserRouter — HashRouter sidesteps it
// entirely, since the #fragment never reaches the server.
const HASH_ROUTER_MODES = ["singlefile", "gh-pages"];
const Router = HASH_ROUTER_MODES.includes(import.meta.env.MODE) ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ly-thuyet/*" element={<TheoryPage />} />
          <Route path="luyen-tap/*" element={<PracticePage />} />
          <Route path="thi-thu/*" element={<MockTestPage />} />
          <Route path="lo-trinh/*" element={<CurriculumPage />} />
          <Route path="ho-so/*" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
