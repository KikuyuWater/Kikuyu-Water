import React, { useState } from "react";

const CalculatorSection = () => {
  const [category, setCategory] = useState("domestic");
  const [consumption, setConsumption] = useState(25);
  const [breakdown, setBreakdown] = useState(null);

  // Tariff rates based on Kenya Gazette Notice No. 9724
  const tariffs = {
    domestic: [
      { max: 6, rate: 128 },
      { max: 20, rate: 138 },
      { max: 50, rate: 154 },
      { max: 100, rate: 164 },
      { max: 300, rate: 174 },
      { max: Infinity, rate: 184 }
    ],
    mdu: [
      { max: Infinity, rate: 154 }
    ],
    commercial: [
      { max: 50, rate: 154 },
      { max: 100, rate: 164 },
      { max: 300, rate: 174 },
      { max: Infinity, rate: 184 }
    ],
    school: [
      { max: 600, rate: 154 },
      { max: 1200, rate: 169 },
      { max: Infinity, rate: 184 }
    ],
    kiosk: [
      { max: Infinity, rate: 50 }
    ],
    bowsing: [
      { max: Infinity, rate: 154 }
    ],
    bulk: [
      { max: Infinity, rate: 123 }
    ]
  };

  const calculateBill = () => {
    if (consumption <= 0) {
      setBreakdown(null);
      return;
    }

    let waterCharge = 0;
    let details = [];
    let selectedTariff = tariffs[category];
    let remaining = consumption;
    let previousMax = 0;

    for (let tier of selectedTariff) {
      if (remaining <= 0) break;

      const tierMax = tier.max === Infinity ? remaining : Math.min(tier.max - previousMax, remaining);
      const tierConsumption = Math.min(remaining, tierMax);
      const tierCost = tierConsumption * tier.rate;

      waterCharge += tierCost;
      
      const displayMax = tier.max === Infinity ? `Above ${previousMax}` : `${previousMax + 1}-${tier.max}`;
      details.push({
        range: displayMax + " m³",
        volume: tierConsumption,
        rate: tier.rate,
        cost: tierCost
      });

      remaining -= tierConsumption;
      previousMax = tier.max;
    }

    const categoryLabel = {
      domestic: "Domestic / Residential",
      mdu: "MDUs / Gated Communities",
      commercial: "Commercial / Industrial / Government",
      school: "Public Schools / Universities",
      kiosk: "Water Kiosks",
      bowsing: "Bowsing Points",
      bulk: "Bulk Water Supply"
    };

    setBreakdown({
      category: categoryLabel[category],
      waterCharge,
      details,
      total: waterCharge
    });
  };

  React.useEffect(() => {
    calculateBill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, consumption]);

  return (
    <section id="tariff-calculator" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option value="domestic">Domestic / Residential</option>
                      <option value="mdu">MDUs / Gated Communities</option>
                      <option value="commercial">Commercial / Industrial / Government</option>
                      <option value="school">Public Schools / Universities</option>
                      <option value="kiosk">Water Kiosks</option>
                      <option value="bowsing">Bowsing Points (Own Tanker)</option>
                      <option value="bulk">Bulk Water Supply</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3">
                      Monthly Consumption (m³)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter consumption in cubic meters"
                      value={consumption}
                      onChange={(e) => setConsumption(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white"
                      min="0"
                      step="0.1"
                    />
                  </div>
                  <p className="text-sm text-blue-200">
                    <i className="fa-solid fa-info-circle mr-2"></i>
                    Note: Rates effective 15th July 2025 - 14th July 2026
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                {breakdown ? "Bill Breakdown" : "Enter Values"}
              </h3>
              {breakdown ? (
                <div className="space-y-3">
                  <div className="text-sm text-blue-200 mb-4">
                    <strong>{breakdown.category}</strong>
                  </div>
                  {breakdown.details.map((detail, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-blue-100 text-sm">{detail.range}</span>
                        <span className="font-bold">KSh {detail.cost.toFixed(2)}</span>
                      </div>
                      <div className="text-xs text-blue-200">
                        {detail.volume.toFixed(1)} m³ × KSh {detail.rate}/m³
                      </div>
                    </div>
                  ))}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 mt-6 border border-white/30">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-black">Total Bill</span>
                      <span className="text-3xl font-black">KSh {breakdown.total.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-blue-200 mt-4">
                    *Does not include additional charges or fixed monthly fees. Check billing section for complete charges.
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-blue-200">
                  <p className="text-center">Select a category and enter your consumption to calculate your bill</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
