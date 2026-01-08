const Services = () => {
  return (
    <section id="services-overview" className="py-12 sm:py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive water and sewerage solutions tailored to meet the
            needs of our community
          </p>
        </div>

        {/* First Row: 3 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Water Supply */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-faucet text-primary text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Water Supply
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Clean, safe, and reliable water supply and sewerage to residential, commercial,
              and industrial customers throughout Kikuyu.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Safe drinking water</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Bulk water services</span>
              </li>
            </ul>
            <a
              href="/"
              className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base"
            >
              Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>

          {/* Sewerage Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-toilet text-primary text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Sewerage Services
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Modern sewerage infrastructure ensuring proper wastewater
              management and environmental protection.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Sewer connections</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Septic tank exhaustion</span>
              </li>
            </ul>
            <a
              href="/"
              className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base"
            >
              Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>

          {/* Maintenance & Repairs */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-tools text-primary text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Maintenance & Repairs
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Professional maintenance services to keep your water and sewer
              systems functioning optimally.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Leak detection & repair</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Meter installation</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Emergency repairs</span>
              </li>
            </ul>
            <a
              href="/"
              className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base"
            >
              Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        {/* Second Row: 2 Horizontal Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
        </div>
      </div>
    </section>
  );
};

export default Services;
