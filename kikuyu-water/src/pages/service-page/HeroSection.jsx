import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      id="services-hero"
      className="bg-gradient-to-br from-primary to-blue-800 text-white min-h-[400px] py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-bold">
              COMPREHENSIVE WATER SOLUTIONS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
            From new connections we also provide complete
            water and sewerage solutions for residential, commercial, and
            industrial customers
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
            <button 
              onClick={() => navigate('/new-connection')}
              className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              Apply for Service
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
