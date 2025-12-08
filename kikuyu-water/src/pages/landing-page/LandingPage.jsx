import Footer from "../../components/Footer";
import Announcements from "./Announcements";
import CompanyHighlights from "./CompanyHighlights";
import Cta from "./Cta";
import CustomerPortal from "./CustomerPortal";
import Faq from "./Faq";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Partners from "./Partners";
import QuickActions from "./QuickActions";
import Services from "./Services";
import Statistics from "./Statistics";
import Tarrifs from "./Tarrifs";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <QuickActions />
      <CompanyHighlights />
      <Statistics />
      <Services />
      <Announcements />
      <CustomerPortal />
      <Tarrifs />
      <Partners />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default LandingPage;
