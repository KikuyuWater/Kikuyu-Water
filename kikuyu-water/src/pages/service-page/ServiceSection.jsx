import React from "react";

const ServiceSection = () => {
  return (
    <section
      id="services-navigation"
      className="py-8 bg-neutral border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition">
              All Services
            </button>
            <button className="text-gray-700 hover:text-primary font-bold transition">
              Water Services
            </button>
            <button className="text-gray-700 hover:text-primary font-bold transition">
              Sewerage Services
            </button>
            <button className="text-gray-700 hover:text-primary font-bold transition">
              Support Services
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              className="bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary w-80"
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>

        {/* Mobile View - Stacked */}
        <div className="md:hidden space-y-4">
          <div className="flex flex-wrap gap-2">
            <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition text-sm">
              All Services
            </button>
            <button className="text-gray-700 hover:text-primary font-bold transition px-4 py-2 text-sm">
              Water
            </button>
            <button className="text-gray-700 hover:text-primary font-bold transition px-4 py-2 text-sm">
              Sewerage
            </button>
            <button className="text-gray-700 hover:text-primary font-bold transition px-4 py-2 text-sm">
              Support
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary"
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
