import Cta from "../../layouts/Cta";
import Footer from "../../layouts/Footer";
import GovernanceSection from "./GovernanceSection";
import HeroSection from "./HeroSection";
import HistorySection from "./HistorySection";
import Infrustructure from "./Infrustructure";
import OverviewSection from "./OverviewSection";
import PlanSection from "./PlanSection";
import ServiceAreaSection from "./ServiceAreaSection";
import SourcesSection from "./SourcesSection";
import VisionSection from "./VisionSection";
import ManagementTeam from "./ManagementTeam";
import ManagingDirectorMessage from "./ManagingDirectorMessage";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ManagingDirectorMessage />
      <ServiceAreaSection />
      <VisionSection />
      <HistorySection />
      <Infrustructure />
      <SourcesSection />
      <GovernanceSection />
      <ManagementTeam />
      <PlanSection />
      <Cta />
      <Footer />
    </>
  );
};

export default AboutPage;
