import Cta from "../../layouts/Cta";
import Footer from "../../layouts/Footer";
import HeroSection from "./HeroSection";
import HistorySection from "./HistorySection";
import Infrustructure from "./Infrustructure";
import OverviewSection from "./OverviewSection";
import PlanSection from "./PlanSection";
import ServiceAreaSection from "./ServiceAreaSection";
import SourcesSection from "./SourcesSection";
import VisionSection from "./VisionSection";
import ManagementTeam from "./ManagementTeam";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <VisionSection />
      <ManagementTeam />
      <ServiceAreaSection />
      <HistorySection />
      <Infrustructure />
      <SourcesSection />
      <PlanSection />
      <Cta />
      <Footer />
    </>
  );
};

export default AboutPage;
