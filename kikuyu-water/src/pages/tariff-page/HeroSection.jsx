import React from "react";

const HeroSection = () => {
  return (
    <section
      id="tariff-hero"
      className="bg-gradient-to-br from-primary to-blue-800 text-white h-[400px] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-bold">WASREB Approved Tariffs</span>
          </div>
          <h1 className="text-5xl font-black leading-tight mb-6">
            Tariff Schedule
          </h1>
          <p className="text-2xl text-blue-100 mb-8">
            Current approved water and sewerage charges
          </p>
          <div className="flex items-center justify-center space-x-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <i className="fa-solid fa-calendar-alt mr-2"></i>
              <span className="font-bold">Effective: January 2024</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <i className="fa-solid fa-shield-halved mr-2"></i>
              <span className="font-bold">WASREB Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
