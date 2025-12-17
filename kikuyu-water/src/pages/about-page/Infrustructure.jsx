const Infrustructure = () => {
  return (
    <section id="infrastructure-overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Infrastructure Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities ensuring reliable water supply and
            sewerage services
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div
            id="water-infrastructure"
            className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-10 text-white"
          >
            <div className="flex items-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-water text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold">Water Infrastructure</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Treatment Plants</span>
                  <span className="text-2xl font-black">8</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Combined capacity: 25,000 m³/day
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Storage Reservoirs</span>
                  <span className="text-2xl font-black">12</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Total capacity: 15,000 m³
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">
                    Distribution Network
                  </span>
                  <span className="text-2xl font-black">450 km</span>
                </div>
                <p className="text-blue-100 text-sm">Pipeline infrastructure</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Booster Stations</span>
                  <span className="text-2xl font-black">18</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Ensuring optimal pressure
                </p>
              </div>
            </div>
          </div>

          <div
            id="sewerage-infrastructure"
            className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-10 text-white"
          >
            <div className="flex items-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-toilet text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold">Sewerage Infrastructure</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Treatment Plants</span>
                  <span className="text-2xl font-black">4</span>
                </div>
                <p className="text-green-100 text-sm">
                  Combined capacity: 12,000 m³/day
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Sewer Lines</span>
                  <span className="text-2xl font-black">280 km</span>
                </div>
                <p className="text-green-100 text-sm">Collection network</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Pumping Stations</span>
                  <span className="text-2xl font-black">14</span>
                </div>
                <p className="text-green-100 text-sm">Strategic locations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Manholes</span>
                  <span className="text-2xl font-black">3,500+</span>
                </div>
                <p className="text-green-100 text-sm">
                  Maintenance access points
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div
            id="infra-feature-1"
            className="bg-neutral rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <i className="fa-solid fa-flask text-primary text-3xl mb-4"></i>
            <h4 className="font-bold text-gray-900 mb-2">Water Quality Lab</h4>
            <p className="text-gray-600 text-sm">
              ISO 17025 accredited testing facility
            </p>
          </div>
          <div
            id="infra-feature-2"
            className="bg-neutral rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <i className="fa-solid fa-microchip text-primary text-3xl mb-4"></i>
            <h4 className="font-bold text-gray-900 mb-2">Smart Meters</h4>
            <p className="text-gray-600 text-sm">
              15,000+ digital meters installed
            </p>
          </div>
          <div
            id="infra-feature-3"
            className="bg-neutral rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <i className="fa-solid fa-satellite-dish text-primary text-3xl mb-4"></i>
            <h4 className="font-bold text-gray-900 mb-2">SCADA System</h4>
            <p className="text-gray-600 text-sm">
              Real-time monitoring and control
            </p>
          </div>
          <div
            id="infra-feature-4"
            className="bg-neutral rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <i className="fa-solid fa-mobile text-primary text-3xl mb-4"></i>
            <h4 className="font-bold text-gray-900 mb-2">Mobile Apps</h4>
            <p className="text-gray-600 text-sm">Customer service on the go</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrustructure;
