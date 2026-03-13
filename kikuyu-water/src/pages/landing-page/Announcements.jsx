const Announcements = () => {
  return (
    <section id="latest-announcements" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2">
              Latest Announcements
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              Stay updated with our latest news and service updates
            </p>
          </div>
          <button className="border-2 border-primary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition text-sm sm:text-base">
            View All News
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* News Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 sm:h-56 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3bc7ae8d76-0e2297d7d7774b2ed85a.png"
                alt="modern water treatment plant facility with blue sky"
              />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  SERVICE UPDATE
                </span>
                <span className="text-gray-500 text-xs sm:text-sm ml-auto">
                  December 5, 2023
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                New Solar 
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                We are pleased to announce the commissioning of our new
               Solar water Pumping plant, reducing power cost
                by 30% to ensure sustainable water supply.
              </p>
              <a
                href="/"
                className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base mt-auto"
              >
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 sm:h-56 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={require('../../assets/During World Wetlands day 2025 celebrations at  at Ondiri Swamp in Kikuyu.jpeg')}
                alt="World Wetlands Day 2025 celebrations at Ondiri Swamp in Kikuyu"
              />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="bg-green-500/10 text-green-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  CONSERVATION
                </span>
                <span className="text-gray-500 text-xs sm:text-sm ml-auto">
                  February 2, 2025
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                World Wetlands Day 2025 at Ondiri Swamp
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                National commemoration celebrating Ondiri Wetland's ecological importance. The event brought together government officials, conservation partners, and community members for awareness and restoration activities.
              </p>
              <a
                href="/world-wetlands-day-2025"
                className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base mt-auto"
              >
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 sm:h-56 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/Butt fussion.jpg"
                alt="DN150 water meter installation along pipeline using butt fusion welding"
              />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="bg-blue-500/10 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  INFRASTRUCTURE
                </span>
                <span className="text-gray-500 text-xs sm:text-sm ml-auto">
                  March 13, 2026
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Advanced Water Meter Installation
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                To improve water monitoring and accountability within the distribution network, a DN150 (150 mm diameter) water meter was installed along a key section of the pipeline. The installation involved connecting HDPE pipe sections using butt fusion welding, a modern technique that joins pipes by heating their ends and pressing them together to form a strong, leak-proof bond. After successfully pressure testing all joints, the pipeline was restored to service, strengthening our ability to accurately measure water flow and support better management of the water supply system.
              </p>
              <a
                href="/"
                className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base mt-auto"
              >
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
