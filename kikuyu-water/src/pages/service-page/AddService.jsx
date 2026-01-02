import React from "react";

const AddService = () => {
  return (
    <section id="additional-services" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Additional Services
          </h2>
          <p className="text-xl text-gray-600">
            Specialized services to meet all your water and sewerage needs
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div
            id="additional-service-1"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-truck text-primary text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Water Bowser Services
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Emergency water supply through our modern bowser fleet. Ideal
                  for events, construction sites, or areas with temporary water
                  shortages.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Capacity</p>
                    <p className="font-bold text-gray-900">10,000 - 20,000L</p>
                  </div>
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Starting Price</p>
                    <p className="font-bold text-primary">KSh 3,000</p>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                  Order Bowser
                </button>
              </div>
            </div>
          </div>

          <div
            id="additional-service-2"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-pump text-primary text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Septic Tank Exhaustion
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Professional septic tank cleaning and waste disposal services.
                  Environmentally safe disposal at our treatment facilities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Response Time</p>
                    <p className="font-bold text-gray-900">Same Day</p>
                  </div>
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Service Fee</p>
                    <p className="font-bold text-primary">KSh 5,000</p>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                  Book Service
                </button>
              </div>
            </div>
          </div>

          <div
            id="additional-service-3"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-gauge text-primary text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Meter Installation & Replacement
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  New meter installation, replacement of faulty meters, and
                  meter calibration services. Certified and accurate metering
                  devices.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">
                      Processing Time
                    </p>
                    <p className="font-bold text-gray-900">3-5 Days</p>
                  </div>
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">
                      Installation Fee
                    </p>
                    <p className="font-bold text-primary">KSh 2,500</p>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                  Request Service
                </button>
              </div>
            </div>
          </div>

          <div
            id="additional-service-4"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-wrench text-primary text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Leak Detection & Repair
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Advanced leak detection technology and professional repair
                  services. Prevent water wastage and reduce your bills.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Response Time</p>
                    <p className="font-bold text-gray-900">2-4 Hours</p>
                  </div>
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Inspection Fee</p>
                    <p className="font-bold text-primary">KSh 500</p>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                  Report Leak
                </button>
              </div>
            </div>
          </div>

          <div
            id="additional-service-5"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-building text-primary text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Bulk Water Supply
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Large volume water supply for commercial and industrial
                  customers. Competitive rates for bulk consumers with reliable
                  delivery.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Minimum Order</p>
                    <p className="font-bold text-gray-900">50,000L</p>
                  </div>
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Bulk Rate</p>
                    <p className="font-bold text-primary">Negotiable</p>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                  Get Quote
                </button>
              </div>
            </div>
          </div>

          <div
            id="additional-service-6"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-graduation-cap text-primary text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Water Conservation Programs
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Educational programs and workshops on water conservation.
                  Learn practical tips to reduce consumption and protect the
                  environment.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Program Type</p>
                    <p className="font-bold text-gray-900">Free Workshops</p>
                  </div>
                  <div className="bg-neutral rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Frequency</p>
                    <p className="font-bold text-primary">Monthly</p>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                  Join Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
