import { Route, Routes, useLocation } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProfilLayout from "./layouts/ProfilLayout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />
      <Route path="profil/*" element={<ProfilLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="*" element={<NotFound href="." />} />
    </Routes>
  );
}

export default App;
