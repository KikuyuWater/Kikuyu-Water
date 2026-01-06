const OtherTariffSection = () => {
  return (
    <section id="other-tariffs" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Special Tariff Categories
          </h2>
          <p className="text-xl text-gray-600">
            Water kiosks and special service categories (Effective: 15th July 2025 - 14th July 2026)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            id="water-kiosk-tariff"
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-cyan-600"
          >
            <div className="bg-cyan-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <i className="fa-solid fa-store mr-3"></i>
                Water Kiosks
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Community water points and resale vendors
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">Tariff per m³</span>
                  <span className="text-cyan-600 font-bold text-xl">
                    KSh 50.00
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <i className="fa-solid fa-info-circle text-cyan-600 mr-2"></i>
                  Subsidized rates to ensure affordable community access to clean water
                </p>
              </div>
            </div>
          </div>

          <div
            id="public-institution-tariff"
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-600"
          >
            <div className="bg-purple-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <i className="fa-solid fa-landmark mr-3"></i>
                Public Institutions
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Schools, hospitals, government offices, and religious
                institutions
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">Water Charge</span>
                  <span className="text-purple-600 font-bold text-lg">
                    KSh 75.00/m³
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">
                    Sewerage Charge
                  </span>
                  <span className="text-purple-600 font-bold text-lg">
                    KSh 56.25/m³
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">
                    Monthly Fixed Charge
                  </span>
                  <span className="text-purple-600 font-bold text-lg">
                    KSh 300.00
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">Meter Rent</span>
                  <span className="text-purple-600 font-bold text-lg">
                    KSh 100.00
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <i className="fa-solid fa-info-circle text-purple-600 mr-2"></i>
                  Subsidized rates to support public service delivery
                </p>
              </div>
            </div>
          </div>

          <div
            id="water-kiosk-tariff"
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-cyan-600"
          >
            <div className="bg-cyan-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <i className="fa-solid fa-store mr-3"></i>
                Water Kiosks
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Community water points and resale vendors
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">Water Charge</span>
                  <span className="text-cyan-600 font-bold text-lg">
                    KSh 45.00/m³
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">
                    Monthly Fixed Charge
                  </span>
                  <span className="text-cyan-600 font-bold text-lg">
                    KSh 200.00
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">Meter Rent</span>
                  <span className="text-cyan-600 font-bold text-lg">
                    KSh 150.00
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral rounded-lg">
                  <span className="font-bold text-gray-900">
                    Recommended Retail
                  </span>
                  <span className="text-cyan-600 font-bold text-lg">
                    KSh 2.00/20L
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <i className="fa-solid fa-info-circle text-cyan-600 mr-2"></i>
                  Lower rates to ensure affordable water access for all
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTariffSection;
