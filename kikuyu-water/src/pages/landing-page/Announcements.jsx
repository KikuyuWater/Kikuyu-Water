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
                  December 5, 2024
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                New Water Treatment Plant Commissioned
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                We are pleased to announce the commissioning of our new
                state-of-the-art water treatment plant, increasing our capacity
                by 30% to serve more customers.
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
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9b49cec583-726942c263ccccdda388.png"
                alt="scheduled maintenance work on water pipes infrastructure"
              />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="bg-orange-500/10 text-orange-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  MAINTENANCE
                </span>
                <span className="text-gray-500 text-xs sm:text-sm ml-auto">
                  November 28, 2024
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Scheduled Maintenance Notice
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                Planned maintenance works in Zones A and B on December 15-16.
                Water supply will be temporarily interrupted. We apologize for
                any inconvenience.
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
