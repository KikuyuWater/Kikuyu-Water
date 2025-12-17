import Cta from "../../layouts/Cta";
import Footer from "../../layouts/Footer";
import GovernanceSection from "./GovernanceSection";
import HeroSection from "./HeroSection";
import HistorySection from "./HistorySection";
import Infrustructure from "./Infrustructure";
import OverviewSection from "./OverviewSection";
import PlanSection from "./PlanSection";
import SourcesSection from "./SourcesSection";
import VisionSection from "./VisionSection";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <VisionSection />
      <HistorySection />
      <Infrustructure />
      <SourcesSection />
      <GovernanceSection />
      <PlanSection />
      <Cta />
      <Footer />
    </>
  );
};

export default AboutPage;
