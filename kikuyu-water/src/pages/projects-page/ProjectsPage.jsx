import React from 'react';
import Footer from '../../layouts/Footer';
import HeroSection from './HeroSection';
import OngoingProjects from './OngoingProjects';
import ProposedProjects from './ProposedProjects';
import CompletedProjects from './CompletedProjects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <OngoingProjects />
      <ProposedProjects />
      <CompletedProjects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
