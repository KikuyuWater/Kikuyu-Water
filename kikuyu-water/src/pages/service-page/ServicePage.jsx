import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CoreService from "./CoreService";
import AddService from "./AddService";
import Footer from "../../layouts/Footer";

const ServicePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CoreService />
      <AddService />
      <Footer />
    </>
  );
};

export default ServicePage;
