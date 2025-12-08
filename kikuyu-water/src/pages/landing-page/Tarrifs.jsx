const Tarrifs = () => {
  return (
    <section id="tariffs-overview" className="py-16 sm:py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Fair and affordable tariffs approved by WASREB
          </p>
        </div>

        {/* Tariff Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Domestic */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-primary">
            <div className="text-center mb-6">
              <i className="fa-solid fa-home text-primary text-3xl sm:text-4xl mb-3 sm:mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Domestic
              </h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                Residential customers
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  0-6 m³
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 53/m³
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  7-20 m³
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 65/m³
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  21-50 m³
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 75/m³
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3">
                <span className="text-gray-700 text-sm sm:text-base">
                  Above 50 m³
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 85/m³
                </span>
              </div>
            </div>
            <button className="w-full mt-4 sm:mt-6 border-2 border-primary text-primary py-2.5 sm:py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
              View Full Tariff
            </button>
          </div>

          {/* Commercial */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-green-500">
            <div className="text-center mb-6">
              <i className="fa-solid fa-building text-green-600 text-3xl sm:text-4xl mb-3 sm:mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Commercial
              </h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                Business customers
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  0-50 m³
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 95/m³
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  51-100 m³
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 105/m³
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  Above 100 m³
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 115/m³
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3">
                <span className="text-gray-700 text-sm sm:text-base">
                  Fixed charge
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 500
                </span>
              </div>
            </div>
            <button className="w-full mt-4 sm:mt-6 border-2 border-green-600 text-green-600 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-green-600 hover:text-white transition">
              View Full Tariff
            </button>
          </div>

          {/* Industrial */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-orange-500">
            <div className="text-center mb-6">
              <i className="fa-solid fa-industry text-orange-600 text-3xl sm:text-4xl mb-3 sm:mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Industrial
              </h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                Large scale users
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  All consumption
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 125/m³
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  Fixed charge
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  KSh 1,000
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b">
                <span className="text-gray-700 text-sm sm:text-base">
                  Bulk discount
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  Available
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3">
                <span className="text-gray-700 text-sm sm:text-base">
                  Custom plans
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  Contact us
                </span>
              </div>
            </div>
            <button className="w-full mt-4 sm:mt-6 border-2 border-orange-600 text-orange-600 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition">
              View Full Tariff
            </button>
          </div>
        </div>

        {/* Additional Charges */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            <i className="fa-solid fa-info-circle text-primary text-2xl sm:text-3xl mt-1 flex-shrink-0"></i>
            <div className="flex-1">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Additional Charges
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <p>
                    <span className="font-bold">Sewerage Charge:</span> 75% of
                    water bill
                  </p>
                  <p>
                    <span className="font-bold">Meter Rent:</span> KSh 75/month
                  </p>
                  <p>
                    <span className="font-bold">Connection Fee:</span> From KSh
                    15,000
                  </p>
                </div>
                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <p>
                    <span className="font-bold">Reconnection Fee:</span> KSh
                    1,000
                  </p>
                  <p>
                    <span className="font-bold">Inspection Fee:</span> KSh 500
                  </p>
                  <p>
                    <span className="font-bold">Late Payment:</span> 1% per
                    month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarrifs;
