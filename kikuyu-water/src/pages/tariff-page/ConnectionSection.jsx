import React from "react";

const ConnectionSection = () => {
  return (
    <section id="connection-fees" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Connection & Service Fees
          </h2>
          <p className="text-xl text-gray-600">
            One-time and recurring service charges
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div
            id="water-connection-fees"
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-faucet text-primary text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Water Connection
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Domestic (1/2" pipe)</span>
                <span className="font-bold">KSh 15,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Commercial (3/4" pipe)</span>
                <span className="font-bold">KSh 25,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Industrial (1" pipe)</span>
                <span className="font-bold">KSh 45,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Bulk Supply (2" pipe)</span>
                <span className="font-bold">KSh 85,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Additional piping</span>
                <span className="font-bold">KSh 1,500/m</span>
              </div>
            </div>
          </div>

          <div
            id="sewer-connection-fees"
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-toilet text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sewer Connection
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Domestic (4" pipe)</span>
                <span className="font-bold">KSh 12,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Commercial (6" pipe)</span>
                <span className="font-bold">KSh 20,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Industrial (8" pipe)</span>
                <span className="font-bold">KSh 35,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Inspection chamber</span>
                <span className="font-bold">KSh 8,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Septic exhaustion</span>
                <span className="font-bold">KSh 3,500</span>
              </div>
            </div>
          </div>

          <div
            id="other-service-fees"
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-orange-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-tools text-orange-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Other Services
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Reconnection fee</span>
                <span className="font-bold">KSh 1,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Meter replacement</span>
                <span className="font-bold">KSh 3,500</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Meter testing</span>
                <span className="font-bold">KSh 500</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Site inspection</span>
                <span className="font-bold">KSh 500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Water bowser (5000L)</span>
                <span className="font-bold">KSh 2,500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
