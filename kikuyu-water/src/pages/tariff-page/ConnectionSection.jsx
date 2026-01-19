import React from "react";

const ConnectionSection = () => {
  return (
    <section id="connection-fees" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Miscellaneous Charges
          </h2>
          <p className="text-xl text-gray-600">
            This section outlines applicable charges for Water Services, Sewer Services, and Exhauster & Tanker Services as approved by the utility.
          </p>
        </div>

        {/* Water-Related Charges */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-faucet text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Water-Related Charges
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Service</th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">Applicable Charge (Ksh.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-gray-700">New water connection (½ inch – 1 inch)</td>
                    <td className="py-3 px-4 text-right font-semibold">2,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">New water connection (1.5 inches – 3 inches)</td>
                    <td className="py-3 px-4 text-right font-semibold">7,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">New water connection (Above 3 inches)</td>
                    <td className="py-3 px-4 text-right font-semibold">15,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Water reconnection – at meter point</td>
                    <td className="py-3 px-4 text-right font-semibold">1,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Water reconnection – at mains</td>
                    <td className="py-3 px-4 text-right font-semibold">5,000 plus double deposit</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Sale of water per cubic metre at bowsing point (own tanker)</td>
                    <td className="py-3 px-4 text-right font-semibold">As per approved water tariffs</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Replacement of stolen or damaged water meter</td>
                    <td className="py-3 px-4 text-right font-semibold">100% of current market cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Meter testing (upon customer request)</td>
                    <td className="py-3 px-4 text-right font-semibold">500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Special meter reading (upon customer request)</td>
                    <td className="py-3 px-4 text-right font-semibold">500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Printing of customer statement (upon request)</td>
                    <td className="py-3 px-4 text-right font-semibold">200</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Supply disconnection at customer's request</td>
                    <td className="py-3 px-4 text-right font-semibold">200</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Restoration of supply (other than first connection)</td>
                    <td className="py-3 px-4 text-right font-semibold">200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sewer-Related Charges */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-toilet text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Sewer-Related Charges
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Service</th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">Applicable Charge (Ksh.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Sewer connection – Residential / Domestic</td>
                    <td className="py-3 px-4 text-right font-semibold">5,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Sewer connection – Commercial, Government, Schools, Universities & Colleges</td>
                    <td className="py-3 px-4 text-right font-semibold">7,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Sewer connection – Industrial</td>
                    <td className="py-3 px-4 text-right font-semibold">15,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Sewer reconnection fee</td>
                    <td className="py-3 px-4 text-right font-semibold">15,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Private sewer unblocking</td>
                    <td className="py-3 px-4 text-right font-semibold">2,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Leak detection services</td>
                    <td className="py-3 px-4 text-right font-semibold">1,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Illegal sewer connection – Commercial, Industry, Construction</td>
                    <td className="py-3 px-4 text-right font-semibold">100,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Illegal sewer connection – Domestic, Government, Schools, Universities & Colleges</td>
                    <td className="py-3 px-4 text-right font-semibold">30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Exhauster & Tanker Services */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600/10 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-truck text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Exhauster & Tanker Services
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Service</th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">Applicable Charge (Ksh.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Company exhauster services – General customers</td>
                    <td className="py-3 px-4 text-right font-semibold">5,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Company exhauster services – Informal settlements</td>
                    <td className="py-3 px-4 text-right font-semibold">4,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Private exhausters dumping into company sewer system</td>
                    <td className="py-3 px-4 text-right font-semibold">15,000 per truck per month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <i className="fa-solid fa-circle-info text-primary text-2xl"></i>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Important Notice</h4>
              <p className="text-gray-700">
                All charges are subject to review in accordance with WASREB regulations and approved tariff schedules. 
                Customers are encouraged to confirm applicable fees with the Commercial Department before service application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
