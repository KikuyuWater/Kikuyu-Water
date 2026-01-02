import React from "react";

const IndustrialTariffSection = () => {
  return (
    <section id="industrial-tariff" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Industrial Tariff
          </h2>
          <p className="text-xl text-gray-600">
            Manufacturing and large-scale industrial users
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-orange-600 text-white p-6">
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
                All Consumption
              </div>
              <div className="text-gray-700">KSh 125.00</div>
              <div className="text-gray-700">KSh 93.75</div>
              <div className="font-bold text-orange-600 text-lg">
                KSh 218.75
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                Bulk Supply (1000 m³)
              </div>
              <div className="text-gray-700">KSh 115.00</div>
              <div className="text-gray-700">KSh 86.25</div>
              <div className="font-bold text-orange-600 text-lg">
                KSh 201.25
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 border-t-2 border-orange-600">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">
                  Industrial Fixed Charges
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Monthly Fixed Charge</span>
                    <span className="font-bold text-gray-900">
                      KSh 1,000.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">
                      Meter Rent (Large Meter)
                    </span>
                    <span className="font-bold text-gray-900">KSh 300.00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Security Deposit</span>
                    <span className="font-bold text-gray-900">
                      3 months bill
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">
                  Bulk Supply Benefits
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start p-3 bg-white rounded-lg">
                    <i className="fa-solid fa-percent text-orange-600 mr-3 mt-1"></i>
                    <div>
                      <p className="font-bold text-gray-900">Volume Discount</p>
                      <p className="text-sm text-gray-600">
                        Reduced rates for consumption above 1000 m³
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start p-3 bg-white rounded-lg">
                    <i className="fa-solid fa-handshake text-orange-600 mr-3 mt-1"></i>
                    <div>
                      <p className="font-bold text-gray-900">
                        Custom Agreements
                      </p>
                      <p className="text-sm text-gray-600">
                        Tailored contracts for large users
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialTariffSection;
