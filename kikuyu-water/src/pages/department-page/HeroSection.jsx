import React from "react";

const HeroSection = () => {
  return (
    <section
      id="departments-hero"
      className="bg-gradient-to-br from-primary to-blue-800 text-white h-[400px] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-bold">Organizational Structure</span>
          </div>
          <h1 className="text-5xl font-black leading-tight mb-6">
            Our Departments
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Dedicated teams working together to deliver excellence in water and
            sewerage services across Kikuyu adn Kabete Sub counties
          </p>
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-users text-3xl"></i>
              </div>
              <div>
                <p className="text-3xl font-black">8</p>
                <p className="text-sm text-blue-200">Departments</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-user-tie text-3xl"></i>
              </div>
              <div>
                <p className="text-3xl font-black">150+</p>
                <p className="text-sm text-blue-200">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
