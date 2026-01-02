import React from "react";

const CalculatorSection = () => {
  return (
    <section id="tariff-calculator" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-4">Tariff Calculator</h2>
              <p className="text-xl text-blue-100 mb-8">
                Estimate your monthly water bill based on consumption
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-3">
                      Customer Category
                    </label>
                    <select className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white">
                      <option>Domestic</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Public Institution</option>
                      <option>Water Kiosk</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3">
                      Monthly Consumption (m³)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter consumption in cubic meters"
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white"
                      value="25"
                    />
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 w-5 h-5" checked />
                      <span className="text-sm">
                        Include sewerage charges (75% of water bill)
                      </span>
                    </label>
                  </div>
                  <button className="w-full bg-white text-primary py-4 rounded-lg font-black text-lg hover:bg-gray-100 transition shadow-lg">
                    Calculate Bill
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Estimated Bill Breakdown
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">
                      Water Consumption (0-6 m³)
                    </span>
                    <span className="font-bold text-xl">KSh 318.00</span>
                  </div>
                  <div className="text-sm text-blue-200">6 m³ × KSh 53/m³</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">
                      Water Consumption (7-20 m³)
                    </span>
                    <span className="font-bold text-xl">KSh 910.00</span>
                  </div>
                  <div className="text-sm text-blue-200">14 m³ × KSh 65/m³</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">
                      Water Consumption (21-25 m³)
                    </span>
                    <span className="font-bold text-xl">KSh 375.00</span>
                  </div>
                  <div className="text-sm text-blue-200">5 m³ × KSh 75/m³</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Subtotal (Water)</span>
                    <span className="font-bold text-xl">KSh 1,603.00</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Sewerage Charge (75%)</span>
                    <span className="font-bold text-xl">KSh 1,202.25</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Meter Rent</span>
                    <span className="font-bold text-xl">KSh 75.00</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-black text-xl">
                      TOTAL BILL
                    </span>
                    <span className="text-primary font-black text-4xl">
                      KSh 2,880.25
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
