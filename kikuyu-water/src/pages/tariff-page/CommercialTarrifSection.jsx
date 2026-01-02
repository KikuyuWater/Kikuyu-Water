const CommercialTarrifSection = () => {
  return (
    <section id="commercial-tariff" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Commercial Tariff
          </h2>
          <p className="text-xl text-gray-600">
            Business and commercial establishment charges
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-green-600 text-white p-6">
            <div className="grid grid-cols-5 gap-4 font-bold text-lg">
              <div className="col-span-2">Consumption Range</div>
              <div>Water Charge</div>
              <div>Sewerage Charge</div>
              <div>Total per m³</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                0 - 50 m³
              </div>
              <div className="text-gray-700">KSh 95.00</div>
              <div className="text-gray-700">KSh 71.25</div>
              <div className="font-bold text-green-600 text-lg">KSh 166.25</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                51 - 100 m³
              </div>
              <div className="text-gray-700">KSh 105.00</div>
              <div className="text-gray-700">KSh 78.75</div>
              <div className="font-bold text-green-600 text-lg">KSh 183.75</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                101 - 300 m³
              </div>
              <div className="text-gray-700">KSh 115.00</div>
              <div className="text-gray-700">KSh 86.25</div>
              <div className="font-bold text-green-600 text-lg">KSh 201.25</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                Above 300 m³
              </div>
              <div className="text-gray-700">KSh 125.00</div>
              <div className="text-gray-700">KSh 93.75</div>
              <div className="font-bold text-green-600 text-lg">KSh 218.75</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 border-t-2 border-green-600">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Fixed Charges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monthly Fixed Charge</span>
                    <span className="font-bold">KSh 500.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Meter Rent</span>
                    <span className="font-bold">KSh 150.00</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  Business Categories
                </h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Retail shops & supermarkets</li>
                  <li>• Restaurants & hotels</li>
                  <li>• Offices & banks</li>
                  <li>• Car wash facilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Payment Terms</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Bills due within 21 days</li>
                  <li>• Disconnection after 30 days</li>
                  <li>• Reconnection fee: KSh 1,500</li>
                  <li>• Deposit: 2 months average bill</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialTarrifSection;
