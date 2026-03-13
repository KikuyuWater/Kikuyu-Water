const ConnectionSection = () => {
  return (
    <section id="connection-charges" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Connection & Activation Charges
          </h2>
          <p className="text-xl text-gray-600">
            Fees for new water connections and service activation (Effective: 15th July 2025 - 14th July 2026)
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-primary text-white p-6">
            <div className="grid grid-cols-2 gap-4 font-bold text-lg">
              <div>Service</div>
              <div>Charge</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-2 gap-4 p-6 hover:bg-neutral transition">
              <div className="font-bold text-gray-900">New Domestic Connection (DN20)</div>
              <div className="font-bold text-primary text-lg">KSh 8,000</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6 hover:bg-neutral transition">
              <div className="font-bold text-gray-900">New Commercial Connection (DN25)</div>
              <div className="font-bold text-primary text-lg">KSh 12,000</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6 hover:bg-neutral transition">
              <div className="font-bold text-gray-900">Connection Relocation</div>
              <div className="font-bold text-primary text-lg">KSh 5,000</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6 hover:bg-neutral transition">
              <div className="font-bold text-gray-900">Connection Reconnection</div>
              <div className="font-bold text-primary text-lg">KSh 3,000</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6 hover:bg-neutral transition">
              <div className="font-bold text-gray-900">Water Meter Replacement</div>
              <div className="font-bold text-primary text-lg">KSh 2,500</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6 hover:bg-neutral transition">
              <div className="font-bold text-gray-900">Meter Testing & Sealing</div>
              <div className="font-bold text-primary text-lg">KSh 1,000</div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 border-t-2 border-primary">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <i className="fa-solid fa-info-circle text-primary mr-2"></i>
              Connection Requirements
            </h4>
            <ul className="space-y-2 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <i className="fa-solid fa-check text-green-600 mr-2 mt-1"></i>
                <span>Valid national identification</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-green-600 mr-2 mt-1"></i>
                <span>Property ownership proof or lease agreement</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-green-600 mr-2 mt-1"></i>
                <span>Location sketch / coordinates</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-green-600 mr-2 mt-1"></i>
                <span>Distance to main pipeline</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
