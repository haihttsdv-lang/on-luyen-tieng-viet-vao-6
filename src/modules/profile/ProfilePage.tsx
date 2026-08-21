import { Route, Routes } from "react-router-dom";
import ProfileHome from "@/modules/profile/ProfileHome";
import ParentPage from "@/modules/profile/ParentPage";

export default function ProfilePage() {
  return (
    <Routes>
      <Route index element={<ProfileHome />} />
      <Route path="phu-huynh" element={<ParentPage />} />
    </Routes>
  );
}
