import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CoreService from "./CoreService";
import AddService from "./AddService";

const ServicePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CoreService />
      <AddService />
    </>
  );
};

export default ServicePage;
