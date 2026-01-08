import Footer from "../../layouts/Footer";
import Announcements from "./Announcements";
import CompanyHighlights from "./CompanyHighlights";
import Cta from "../../layouts/Cta";
import CustomerPortal from "./CustomerPortal";
import Faq from "./Faq";

import HeroSection from "./HeroSection";
import Partners from "./Partners";
import QuickActions from "./QuickActions";
import Services from "./Services";
import Statistics from "./Statistics";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <CompanyHighlights />
      <Statistics />
      <Services />
      <Announcements />
      <CustomerPortal />
      <Partners />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default LandingPage;
