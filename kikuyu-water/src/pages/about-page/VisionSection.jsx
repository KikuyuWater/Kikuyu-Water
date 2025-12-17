const VisionSection = () => {
  return (
    <section id="vision-mission-values" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Our Vision, Mission & Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The guiding principles that drive our commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div
            id="vision-card"
            className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition border-t-4 border-primary"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-eye text-primary text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-gray-700 text-center leading-relaxed text-lg">
              To be the leading water and sewerage service provider in Kenya,
              recognized for excellence, innovation, and sustainable service
              delivery to all communities within our jurisdiction.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <i className="fa-solid fa-lightbulb text-primary text-xl mr-3"></i>
                <span className="text-sm font-bold text-gray-700">
                  Excellence & Innovation
                </span>
              </div>
            </div>
          </div>

          <div
            id="mission-card"
            className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition border-t-4 border-green-500"
          >
            <div className="bg-green-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-bullseye text-green-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-700 text-center leading-relaxed text-lg">
              To provide sustainable, affordable, and quality water and sewerage
              services through innovative solutions, community engagement, and
              environmental stewardship for the wellbeing of our customers.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <i className="fa-solid fa-heart text-green-600 text-xl mr-3"></i>
                <span className="text-sm font-bold text-gray-700">
                  Sustainability & Quality
                </span>
              </div>
            </div>
          </div>

          <div
            id="values-card"
            className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition border-t-4 border-orange-500"
          >
            <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-gem text-orange-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Core Values
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700 font-bold">Integrity</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700 font-bold">Accountability</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700 font-bold">Customer Focus</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700 font-bold">Innovation</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700 font-bold">Teamwork</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700 font-bold">Professionalism</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
