const DomesticTarrifSection = () => {
  return (
    <section id="domestic-tariff" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Domestic Tariff
          </h2>
          <p className="text-xl text-gray-600">
            Residential water and sewerage charges for households
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-primary text-white p-6">
            <div className="grid grid-cols-5 gap-4 font-bold text-lg">
              <div className="col-span-2">Consumption Range</div>
              <div>Water Charge</div>
              <div>Sewerage Charge</div>
              <div>Total per m³</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">0 - 6 m³</div>
              <div className="text-gray-700">KSh 53.00</div>
              <div className="text-gray-700">KSh 39.75</div>
              <div className="font-bold text-primary text-lg">KSh 92.75</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                7 - 20 m³
              </div>
              <div className="text-gray-700">KSh 65.00</div>
              <div className="text-gray-700">KSh 48.75</div>
              <div className="font-bold text-primary text-lg">KSh 113.75</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                21 - 50 m³
              </div>
              <div className="text-gray-700">KSh 75.00</div>
              <div className="text-gray-700">KSh 56.25</div>
              <div className="font-bold text-primary text-lg">KSh 131.25</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                51 - 100 m³
              </div>
              <div className="text-gray-700">KSh 85.00</div>
              <div className="text-gray-700">KSh 63.75</div>
              <div className="font-bold text-primary text-lg">KSh 148.75</div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-6 hover:bg-neutral transition">
              <div className="col-span-2 font-bold text-gray-900">
                Above 100 m³
              </div>
              <div className="text-gray-700">KSh 95.00</div>
              <div className="text-gray-700">KSh 71.25</div>
              <div className="font-bold text-primary text-lg">KSh 166.25</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 border-t-2 border-primary">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <i className="fa-solid fa-info-circle text-primary mr-2"></i>
                  Additional Charges
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Meter Rent (per month)</span>
                    <span className="font-bold">KSh 75.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fixed Charge</span>
                    <span className="font-bold">KSh 150.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Late Payment Penalty</span>
                    <span className="font-bold">1% per month</span>
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
