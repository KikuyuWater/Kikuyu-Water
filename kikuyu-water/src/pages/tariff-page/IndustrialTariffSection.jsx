import React from "react";

const IndustrialTariffSection = () => {
  return (
    <section id="industrial-tariff" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Commercial / Industrial / Government / Institutions
          </h2>
          <p className="text-xl text-gray-600">
            Official water charges for businesses, industries, and institutions (Effective: 15th July 2025 - 14th July 2026)
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-orange-600 text-white p-6">
            <div className="grid grid-cols-3 gap-4 font-bold text-lg">
              <div className="col-span-2">Consumption Block</div>
              <div>Approved Tariff</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                1 - 50 m³
              </div>
              <div className="font-bold text-orange-600 text-lg">KSh 154.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                51 - 100 m³
              </div>
              <div className="font-bold text-orange-600 text-lg">KSh 164.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                101 - 300 m³
              </div>
              <div className="font-bold text-orange-600 text-lg">KSh 174.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                Above 300 m³
              </div>
              <div className="font-bold text-orange-600 text-lg">KSh 184.00 / m³</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 border-t-2 border-orange-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fa-solid fa-building text-orange-600 mr-2"></i>
                  Public Schools, Universities & Colleges
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">1 - 600 m³</span>
                    <span className="font-bold text-gray-900">KSh 154.00 / m³</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">601 - 1200 m³</span>
                    <span className="font-bold text-gray-900">KSh 169.00 / m³</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Above 1200 m³</span>
                    <span className="font-bold text-gray-900">KSh 184.00 / m³</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fa-solid fa-droplet text-orange-600 mr-2"></i>
                  Bulk Supply Services
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start p-3 bg-white rounded-lg">
                    <div className="w-full">
                      <div className="flex justify-between">
                        <p className="font-bold text-gray-900">Bulk Water Supply</p>
                        <span className="font-bold text-orange-600">KSh 123.00 / m³</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        For large-scale water supply contracts
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start p-3 bg-white rounded-lg">
                    <div className="w-full">
                      <div className="flex justify-between">
                        <p className="font-bold text-gray-900">Bowsing Points (Own Tanker)</p>
                        <span className="font-bold text-orange-600">KSh 154.00 / m³</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        For water collected using own tanker
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
