const Statistics = () => {
  return (
    <section
      id="statistics-strip"
      className="py-12 sm:py-16 bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coverage Area */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fa-solid fa-map-marked-alt text-3xl sm:text-4xl"></i>
            </div>
            <p className="text-3xl sm:text-5xl font-black mb-1 sm:mb-2">
              120 km²
            </p>
            <p className="text-lg sm:text-lg text-SlateBlue-100">Coverage Area</p>
            <p className="text-xs sm:text-sm text-SlateBlue-200 mt-1 sm:mt-2">
              Serving entire Kikuyu region
            </p>
          </div>

          {/* Active Connections */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fa-solid fa-home text-3xl sm:text-4xl"></i>
            </div>
            <p className="text-3xl sm:text-5xl font-black mb-1 sm:mb-2">
              45,000+
            </p>
            <p className="text-lg sm:text-lg text-blue-100">
              Active Connections
            </p>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 sm:mt-2">
              Growing customer base
            </p>
          </div>

          {/* Water Sources */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fa-solid fa-water text-3xl sm:text-4xl"></i>
            </div>
            <p className="text-3xl sm:text-5xl font-black mb-1 sm:mb-2">8</p>
            <p className="text-lg sm:text-lg text-blue-100">Water Sources</p>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 sm:mt-2">
              Reliable supply network
            </p>
          </div>

          {/* Service Hours */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fa-solid fa-clock text-3xl sm:text-4xl"></i>
            </div>
            <p className="text-3xl sm:text-5xl font-black mb-1 sm:mb-2">24/7</p>
            <p className="text-lg sm:text-lg text-blue-100">Service Hours</p>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 sm:mt-2">
              Emergency response available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
