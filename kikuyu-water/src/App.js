import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import AboutPage from "./pages/about-page";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
