import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import AboutPage from "./pages/about-page";
import LandingPage from "./pages/landing-page/LandingPage";
import Maintenance from "./components/Error";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Maintenance />} />
      </Routes>
    </>
  );
}

export default App;
