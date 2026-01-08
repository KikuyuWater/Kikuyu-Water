import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CoreService from "./CoreService";
import Footer from "../../layouts/Footer";

const ServicePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CoreService />
      <Footer />
    </>
  );
};

export default ServicePage;
