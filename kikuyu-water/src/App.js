import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import AboutPage from "./pages/about-page";
import LandingPage from "./pages/landing-page/LandingPage";
import Maintenance from "./components/Error";
import ServicePage from "./pages/service-page";
import Tariff from "./pages/tariff-page";
import DepartmentPage from "./pages/department-page/DepartmentPage";
import DepartmentDetailPage from "./pages/department-page/DepartmentDetailPage";
import CustomerServiceCharter from "./pages/CustomerServiceCharter";
import CareersPage from "./pages/CareersPage";
import TendersPage from "./pages/TendersPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/tarrif" element={<Tariff />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/departments/:id" element={<DepartmentDetailPage />} />
        <Route path="/charter" element={<CustomerServiceCharter />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/tenders" element={<TendersPage />} />
        <Route path="*" element={<Maintenance />} />
      </Routes>
    </>
  );
}

export default App;
