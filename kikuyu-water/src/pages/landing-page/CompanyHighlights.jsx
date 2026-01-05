import React from "react";

const CompanyHighlights = () => {
  return (
    <section id="company-highlights" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-block bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <span className="text-primary font-bold text-xs sm:text-sm">
                ABOUT KIKUYU WATER
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              Committed to Excellence in Water Service Delivery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Kikuyu Water and Sewerage Company is a leading water service
              provider dedicated to ensuring access to clean, safe, and
              affordable water for all residents and businesses within our
              service area.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Our mission is to provide sustainable water and sanitation
              services through innovative solutions, community engagement, and
              environmental stewardship. We are regulated by WASREB and work
              closely with the County Government to meet the highest standards
              of service delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <i className="fa-solid fa-leaf text-primary text-lg sm:text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">
                    Eco-Friendly
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Sustainable practices
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full sm:w-auto border-2 border-primary text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition text-sm sm:text-base">
              Learn More About Us
            </button>
          </div>

          {/* Right Column - Stats */}
          <div className="mt-10 lg:mt-0">
            <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Our Impact in Numbers
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {/* Water Quality */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-sm sm:text-lg font-bold">
                      Water Quality
                    </span>
                    <span className="text-2xl sm:text-3xl font-black">
                      99.8%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
                    <div
                      className="bg-white rounded-full h-2 sm:h-3"
                      style={{ width: "99.8%" }}
                    ></div>
                  </div>
                </div>

                {/* Service Reliability */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-sm sm:text-lg font-bold">
                      Service Reliability
                    </span>
                    <span className="text-2xl sm:text-3xl font-black">96%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
                    <div
                      className="bg-white rounded-full h-2 sm:h-3"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>

                {/* Customer Satisfaction */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-sm sm:text-lg font-bold">
                      Customer Satisfaction
                    </span>
                    <span className="text-2xl sm:text-3xl font-black">94%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
                    <div
                      className="bg-white rounded-full h-2 sm:h-3"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>

                {/* Non-Revenue Water */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-sm sm:text-lg font-bold">
                      Non-Revenue Water
                    </span>
                    <span className="text-2xl sm:text-3xl font-black">18%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
                    <div
                      className="bg-white rounded-full h-2 sm:h-3"
                      style={{ width: "18%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
