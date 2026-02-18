import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import DealsPage from "./pages/DealsPage";
import Menu from "./pages/Menu";
import Delivery from "./pages/Delivery";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
