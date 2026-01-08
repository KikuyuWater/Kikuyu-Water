const VisionSection = () => {
  return (
    <section id="vision-mission-values" className="py-12 bg-neutral">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-2">
            Our Vision, Mission & Core Values
          </h2>
          <p className="text-base text-gray-600">
            The guiding principles that drive our commitment to excellence
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg space-y-6">
          {/* Vision */}
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <i className="fa-solid fa-eye text-primary text-lg"></i>
              </div>
              <h3 className="text-xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed pl-13">
              To be the leading company in the provision of quality, reliable, 
              and affordable water services in the region and beyond.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Mission */}
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-green-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <i className="fa-solid fa-bullseye text-green-600 text-lg"></i>
              </div>
              <h3 className="text-xl font-bold text-green-600">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed pl-13">
              To consistently provide excellent water services within our area of jurisdiction to 
              the absolute satisfaction of our esteemed customers throughout the year.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Core Values */}
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-orange-500/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <i className="fa-solid fa-gem text-orange-600 text-lg"></i>
              </div>
              <h3 className="text-xl font-bold text-orange-600">Core Values</h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 pl-13">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-2 mt-0.5 text-sm"></i>
                <span className="text-gray-900 font-semibold">Integrity</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-2 mt-0.5 text-sm"></i>
                <span className="text-gray-900 font-semibold">Accountability</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-2 mt-0.5 text-sm"></i>
                <span className="text-gray-900 font-semibold">Customer Focus</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-2 mt-0.5 text-sm"></i>
                <span className="text-gray-900 font-semibold">Our Employees</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-2 mt-0.5 text-sm"></i>
                <span className="text-gray-900 font-semibold">Teamwork</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-2 mt-0.5 text-sm"></i>
                <span className="text-gray-900 font-semibold">Professionalism</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
