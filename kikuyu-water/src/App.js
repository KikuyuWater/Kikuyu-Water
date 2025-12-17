import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import AboutPage from "./pages/about-page";
import LandingPage from "./pages/landing-page/LandingPage";
import Maintenance from "./components/Error";

function App() {
  // Temporary force flag for immediate maintenance mode. Set to `false` to disable.
  // NOTE: This is a temporary change to take the site into maintenance instantly.
  // Remove or set to `false` after maintenance is done.
  const FORCE_MAINTENANCE = true;

  const isMaintenance = FORCE_MAINTENANCE || process.env.REACT_APP_MAINTENANCE === 'true';

  if (isMaintenance) {
    // Render the maintenance page for all routes when maintenance mode is enabled
    return <Maintenance />;
  }

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
