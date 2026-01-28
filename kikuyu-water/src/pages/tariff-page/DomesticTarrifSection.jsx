const DomesticTarrifSection = () => {
  return (
    <section id="domestic-tariff" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Domestic / Residential Tariff
          </h2>
          <p className="text-xl text-gray-600">
            Official water charges for households (Effective: 15th July 2025 - 14th July 2026)
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-primary text-white p-6">
            <div className="grid grid-cols-3 gap-4 font-bold text-lg">
              <div className="col-span-2">Consumption Block</div>
              <div>Approved Tariff</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">1 - 6 m³</div>
              <div className="font-bold text-primary text-lg">KSh 128.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                7 - 20 m³
              </div>
              <div className="font-bold text-primary text-lg">KSh 138.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                21 - 50 m³
              </div>
              <div className="font-bold text-primary text-lg">KSh 154.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                51 - 100 m³
              </div>
              <div className="font-bold text-primary text-lg">KSh 164.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                101 - 300 m³
              </div>
              <div className="font-bold text-primary text-lg">KSh 174.00 / m³</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                Above 300 m³
              </div>
              <div className="font-bold text-primary text-lg">KSh 184.00 / m³</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 border-t-2 border-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <i className="fa-solid fa-info-circle text-primary mr-2"></i>
                  Special Categories
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>MDUs / Gated Communities</span>
                    <span className="font-bold">KSh 154.00 / m³</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <i className="fa-solid fa-lightbulb text-primary mr-2"></i>
                  Conservation Tips
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-green-600 mr-2 mt-1"></i>
                    <span>Fix leaks promptly to avoid wastage</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-green-600 mr-2 mt-1"></i>
                    <span>Install water-efficient fixtures</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-green-600 mr-2 mt-1"></i>
                    <span>Monitor your monthly consumption</span>
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

export default DomesticTarrifSection;
