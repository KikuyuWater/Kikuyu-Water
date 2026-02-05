import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import ScrollToTop from "./components/ScrollToTop";
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
import ProjectsPage from "./pages/projects-page";
import PaymentPage from "./pages/PaymentPage";
import WorldWetlandsDayPage from "./pages/WorldWetlandsDayPage";
import CustomerPortalPage from "./pages/CustomerPortalPage";
import NewConnectionPage from "./pages/NewConnectionPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import PublicationsPage from "./pages/PublicationsPage";
import NoticesPage from "./pages/NoticesPage";
import FAQsPage from "./pages/FAQsPage";

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
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/customer-portal" element={<CustomerPortalPage />} />
        <Route path="/world-wetlands-day-2025" element={<WorldWetlandsDayPage />} />
        <Route path="/new-connection" element={<NewConnectionPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<Maintenance />} />
      </Routes>
    </>
  );
}

export default App;
