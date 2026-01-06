const SourcesSection = () => {
  return (
    <section id="water-sources" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Our Water Sources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverse and sustainable water sources ensuring reliable supply
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div
            id="source-card-1"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-mountain text-primary text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Surface Water Sources
                </h3>
                <p className="text-gray-600">
                  KIkuyu Springs
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-water text-primary mr-3 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-900">Kikuyu River</p>
                  <p className="text-gray-600 text-sm">
                    Primary source - 8,000 m³/day
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-water text-primary mr-3 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-900">Ndakaini Springs</p>
                  <p className="text-gray-600 text-sm">
                    Secondary source - 5,000 m³/day
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-water text-primary mr-3 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-900">Karura Stream</p>
                  <p className="text-gray-600 text-sm">
                    Supplementary - 3,000 m³/day
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div
            id="source-card-2"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <i className="fa-solid fa-droplet text-primary text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Groundwater Sources
                </h3>
                <p className="text-gray-600">
                  Deep boreholes across our service area
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-circle-dot text-primary mr-3 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-900">Zambezi Borehole</p>
                  <p className="text-gray-600 text-sm">
                    Depth: 180m - 4,000 m³/day
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle-dot text-primary mr-3 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-900">Muguga Borehole</p>
                  <p className="text-gray-600 text-sm">
                    Depth: 220m - 3,500 m³/day
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle-dot text-primary mr-3 mt-1"></i>
                <div>
                  <p className="font-bold text-gray-900">Kinoo Borehole</p>
                  <p className="text-gray-600 text-sm">
                    Depth: 200m - 2,500 m³/day
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start">
            <i className="fa-solid fa-leaf text-green-600 text-3xl mr-6 mt-1"></i>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Water Source Protection
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are committed to protecting our water sources through active
                participation in catchment conservation programs, reforestation
                initiatives, and community education on sustainable water
                resource management. Our partnership with WRMA and local
                environmental groups ensures long-term sustainability of our
                water sources.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center">
                  <i className="fa-solid fa-tree text-green-600 text-xl mr-3"></i>
                  <div>
                    <p className="font-bold text-gray-900">50,000+</p>
                    <p className="text-gray-600 text-sm">
                      Trees planted annually
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-shield text-green-600 text-xl mr-3"></i>
                  <div>
                    <p className="font-bold text-gray-900">8 Riparian</p>
                    <p className="text-gray-600 text-sm">Protected zones</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-users text-green-600 text-xl mr-3"></i>
                  <div>
                    <p className="font-bold text-gray-900">20+ Groups</p>
                    <p className="text-gray-600 text-sm">Community partners</p>
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

export default SourcesSection;
