const MiscellaneousChargesSection = () => {
  const waterDeposits = [
    { category: "Domestic", deposit: "2,500" },
    { category: "Retail shop less than 10m³", deposit: "3,000" },
    { category: "Retail shop more than 10m³", deposit: "3,500" },
    { category: "Bar and restaurants less than 15m³", deposit: "4,000" },
    { category: "Bar and restaurants more than 15m³", deposit: "6,000" },
    { category: "Hotel Class A & B (<150 m³)", deposit: "12,000" },
    { category: "Hotel Class A & B (>150 m³)", deposit: "15,000" },
    { category: "Hotel Class C & D (<150 m³)", deposit: "18,000" },
    { category: "Hotel Class C & D (>150 m³)", deposit: "20,000" },
    { category: "Hospitals (>150 m³)", deposit: "20,000" },
    { category: "Health centres (<150 m³)", deposit: "12,000" },
    { category: "Schools & institutions (>200 m³)", deposit: "20,000" },
    { category: "Schools (<200 m³)", deposit: "10,000" },
    { category: "Minor construction sites (>200 m³)", deposit: "15,000" },
    { category: "Major construction sites (>300 m³)", deposit: "50,000" },
    { category: "Light industries (<200 m³)", deposit: "30,000" },
    { category: "Medium industries (200–300 m³)", deposit: "50,000" },
    { category: "Heavy industries (>300 m³)", deposit: "100,000" },
    { category: "Water kiosk", deposit: "5,000" },
    { category: "Customers with sewer connection only", deposit: "Deposit equal to water connection" },
  ];

  const otherCharges = [
    { service: "New water connection (½ – 1 inch)", charge: "2,500" },
    { service: "New water connection (1.5 – 3 inches)", charge: "7,500" },
    { service: "New water connection (>3 inches)", charge: "15,000" },
    { service: "Water reconnection at meter point", charge: "1,000" },
    { service: "Water reconnection at mains", charge: "5,000 + double deposit" },
    { service: "Tanker supply (8,000 / 16,000 litres)", charge: "2,500 / 5,000 respectively within the WSP area" },
    { service: "Sale of water at bowsing point", charge: "As per water tariff" },
    { service: "Replacement of stolen/damaged meter", charge: "100% market cost of the meter" },
    { service: "Meter testing on request", charge: "500" },
    { service: "Special meter reading on request", charge: "500" },
    { service: "Sewer connection – Residential", charge: "5,000" },
    { service: "Sewer connection – Commercial / Govt / Schools", charge: "7,500" },
    { service: "Sewer connection – Industrial", charge: "15,000" },
    { service: "Private sewer unblocking", charge: "2,500" },
    { service: "Leak detection services", charge: "1,000" },
    { service: "Sewer reconnection fee", charge: "15,000" },
    { service: "Printing customer statement", charge: "200" },
    { service: "Supply cut-off at customer request", charge: "200" },
    { service: "Turning supply on (not first connection)", charge: "200" },
    { service: "Exhauster services (company truck)", charge: "5,000 for other customers; 4,000 for informal settlements" },
    { service: "Private exhausters dumping in sewer", charge: "15,000 per truck per month" },
  ];

  const penaltyCharges = [
    { offence: "Illegal water connection (commercial/industry/construction) fraud", charge: "100,000 + estimated consumption during illegality" },
    { offence: "Illegal water connection (Domestic) fraud", charge: "30,000 + estimated consumption during illegality" },
    { offence: "Illegal sewer connection – Commercial/Industry", charge: "100,000" },
    { offence: "Illegal sewer connection – Domestic/Govt/Schools", charge: "30,000" },
    { offence: "Overcharging at water kiosk", charge: "15,000" },
    { offence: "Self-reconnection after disconnection", charge: "5,000 + backdated billing from cut-off date" },
    { offence: "Meter tampering (removal/reversal etc.)", charge: "5,000" },
    { offence: "Direct suction using pump from supply line", charge: "10,000" },
  ];

  return (
    <section id="miscellaneous-charges" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Miscellaneous Charges
          </h2>
          <p className="text-xl text-gray-600">
            Additional fees and deposits (Effective: 15th July 2025 - 14th July 2026)
          </p>
        </div>

        {/* Water Deposits Section */}
        <div className="mb-12 bg-blue-50 rounded-2xl overflow-hidden shadow-lg border-t-4 border-blue-600">
          <div className="bg-blue-600 text-white p-6">
            <h3 className="text-2xl font-bold flex items-center">
              <i className="fa-solid fa-piggy-bank mr-3"></i>
              Water Deposits
            </h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">
                      Category
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">
                      Deposit (KSh)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {waterDeposits.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-blue-100 ${
                        index % 2 === 0 ? "bg-white" : "bg-blue-50"
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-700">{item.category}</td>
                      <td className="py-3 px-4 text-right font-semibold text-blue-600">
                        {item.deposit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Other Charges Section */}
        <div className="mb-12 bg-green-50 rounded-2xl overflow-hidden shadow-lg border-t-4 border-green-600">
          <div className="bg-green-600 text-white p-6">
            <h3 className="text-2xl font-bold flex items-center">
              <i className="fa-solid fa-wrench mr-3"></i>
              Other Charges
            </h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-green-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">
                      Service
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">
                      Charge (KSh)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {otherCharges.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-green-100 ${
                        index % 2 === 0 ? "bg-white" : "bg-green-50"
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-700">{item.service}</td>
                      <td className="py-3 px-4 text-right font-semibold text-green-600">
                        {item.charge}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Penalties & Enforcement Section */}
        <div className="bg-red-50 rounded-2xl overflow-hidden shadow-lg border-t-4 border-red-600">
          <div className="bg-red-600 text-white p-6">
            <h3 className="text-2xl font-bold flex items-center">
              <i className="fa-solid fa-gavel mr-3"></i>
              Penalties & Enforcement Charges
            </h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-red-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">
                      Offence
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">
                      Charge (KSh)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {penaltyCharges.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-red-100 ${
                        index % 2 === 0 ? "bg-white" : "bg-red-50"
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-700">{item.offence}</td>
                      <td className="py-3 px-4 text-right font-semibold text-red-600">
                        {item.charge}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-300">
              <p className="text-sm text-gray-800">
                <i className="fa-solid fa-exclamation-triangle text-red-600 mr-2"></i>
                <strong>Important:</strong> Penalties are enforced to prevent unauthorized water usage and ensure compliance with water supply regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiscellaneousChargesSection;
