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
                  <span className="text-lg font-bold">Boreholes</span>
                  <span className="text-2xl font-black">31</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Combined capacity: 11,000 m³/day
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Storage Reservoirs</span>
                  <span className="text-2xl font-black">41</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Total capacity: 5,108 m³
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">
                    Distribution Network
                  </span>
                  <span className="text-2xl font-black">560 km</span>
                </div>
                <p className="text-blue-100 text-sm">Pipeline infrastructure</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Consumer connections</span>
                  <span className="text-2xl font-black">18,836</span>
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
                  <span className="text-lg font-bold">Area Served</span>
                  <span className="text-2xl font-black">4</span>
                </div>
                <p className="text-green-100 text-sm">
                  Kikuyu Town, Kidfarmaco, Thogoto, and Kinoo areas.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Sewer Lines</span>
                  <span className="text-2xl font-black">44.2 km</span>
                </div>
                <p className="text-green-100 text-sm">Collection network</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Connections</span>
                  <span className="text-2xl font-black">679</span>
                </div>
                <p className="text-green-100 text-sm">Strategic locations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">Manholes</span>
                  <span className="text-2xl font-black">1,233</span>
                </div>
                <p className="text-green-100 text-sm">
                  Maintenance access points
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Infrustructure;
