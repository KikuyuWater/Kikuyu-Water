const Tarrifs = () => {
  return (
    <section id="tariffs-overview" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Fair and affordable tariffs approved by WASREB
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div
            id="tariff-card-1"
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary"
          >
            <div className="text-center mb-6">
              <i className="fa-solid fa-home text-primary text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900">Domestic</h3>
              <p className="text-gray-600 mt-2">Residential customers</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">0-6 m³</span>
                <span className="font-bold text-gray-900">KSh 53/m³</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">7-20 m³</span>
                <span className="font-bold text-gray-900">KSh 65/m³</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">21-50 m³</span>
                <span className="font-bold text-gray-900">KSh 75/m³</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Above 50 m³</span>
                <span className="font-bold text-gray-900">KSh 85/m³</span>
              </div>
            </div>
            <button className="w-full mt-6 border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
              View Full Tariff
            </button>
          </div>

          <div
            id="tariff-card-2"
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-green-500"
          >
            <div className="text-center mb-6">
              <i className="fa-solid fa-building text-green-600 text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900">Commercial</h3>
              <p className="text-gray-600 mt-2">Business customers</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">0-50 m³</span>
                <span className="font-bold text-gray-900">KSh 95/m³</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">51-100 m³</span>
                <span className="font-bold text-gray-900">KSh 105/m³</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">Above 100 m³</span>
                <span className="font-bold text-gray-900">KSh 115/m³</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Fixed charge</span>
                <span className="font-bold text-gray-900">KSh 500</span>
              </div>
            </div>
            <button className="w-full mt-6 border-2 border-green-600 text-green-600 py-3 rounded-lg font-bold hover:bg-green-600 hover:text-white transition">
              View Full Tariff
            </button>
          </div>

          <div
            id="tariff-card-3"
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500"
          >
            <div className="text-center mb-6">
              <i className="fa-solid fa-industry text-orange-600 text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900">Industrial</h3>
              <p className="text-gray-600 mt-2">Large scale users</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">All consumption</span>
                <span className="font-bold text-gray-900">KSh 125/m³</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">Fixed charge</span>
                <span className="font-bold text-gray-900">KSh 1,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">Bulk discount</span>
                <span className="font-bold text-gray-900">Available</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Custom plans</span>
                <span className="font-bold text-gray-900">Contact us</span>
              </div>
            </div>
            <button className="w-full mt-6 border-2 border-orange-600 text-orange-600 py-3 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition">
              View Full Tariff
            </button>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start">
            <i className="fa-solid fa-info-circle text-primary text-2xl mr-4 mt-1"></i>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Additional Charges
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Sewerage Charge:</span> 75% of
                    water bill
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Meter Rent:</span> KSh 75/month
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Connection Fee:</span> From KSh
                    15,000
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Reconnection Fee:</span> KSh
                    1,000
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Inspection Fee:</span> KSh 500
                  </p>
                  <p className="text-gray-700">
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
