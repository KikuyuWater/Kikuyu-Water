import React from "react";

const OrganizationalStructure = () => {
  return (
    <section id="organizational-structure" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Organizational Structure
          </h2>
          <p className="text-xl text-gray-600">
            Clear hierarchy ensuring efficient operations and accountability
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-12 text-white mb-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-4">
              <i className="fa-solid fa-user-tie text-5xl mb-3"></i>
              <h3 className="text-2xl font-bold">Managing Director</h3>
              <p className="text-blue-100 mt-2">
                CEO & Chief Executive Officer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-wrench text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">Technical</h4>
              <p className="text-sm text-blue-100">Operations & Maintenance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-briefcase text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">Commercial</h4>
              <p className="text-sm text-blue-100">Customer Relations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-chart-line text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">Finance</h4>
              <p className="text-sm text-blue-100">Financial Management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-users text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">HR</h4>
              <p className="text-sm text-blue-100">Human Capital</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-shopping-cart text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">Procurement</h4>
              <p className="text-sm text-blue-100">Supply Chain</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-laptop-code text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">ICT</h4>
              <p className="text-sm text-blue-100">Information Systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-tint-slash text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">NRW</h4>
              <p className="text-sm text-blue-100">Water Loss Control</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-shield-halved text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">Audit</h4>
              <p className="text-sm text-blue-100">Internal Controls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalStructure;
