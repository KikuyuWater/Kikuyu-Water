import React from "react";
import { Departments } from "../../data";

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

        {/* Managing Director */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 text-white text-center shadow-2xl max-w-md">
            <div className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-user-tie text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">Jane Murage</h3>
            <p className="text-lg font-semibold text-blue-100 mb-1">Managing Director</p>
            <p className="text-sm text-blue-200">CEO & Chief Executive Officer</p>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="flex justify-center mb-8">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-gray-300"></div>
        </div>

        {/* Department Heads */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Departments.map((dept) => (
            <div key={dept.id} className="relative">
              {/* Connecting Line to Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-1 h-8 bg-gray-300"></div>
              
              {/* Department Head Card */}
              <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary p-6 hover:shadow-2xl transition">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${dept.theme.iconBg} mx-auto mb-4`}>
                  <i className={`fa-solid ${dept.icon} text-2xl text-${dept.theme.color}`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 text-center mb-2">
                  {dept.title.replace(" Department", "")}
                </h4>
                <div className="text-center mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-primary">{dept.head}</p>
                  <p className="text-xs text-gray-500">Department Head</p>
                </div>
                
                {/* Team Members */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-3 text-center">Team</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {dept.features.map((member, index) => (
                      <div key={index} className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <i className="fa-solid fa-user text-[8px] text-gray-600"></i>
                        </div>
                        <span className="text-gray-700 text-xs">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="bg-gray-50 rounded-xl p-6 mt-12">
          <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
            Organizational Hierarchy
          </h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-800 mr-2"></div>
              <span className="text-gray-700">Executive Leadership</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded bg-white border-t-4 border-primary mr-2"></div>
              <span className="text-gray-700">Department Heads</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                <i className="fa-solid fa-user text-xs text-gray-600"></i>
              </div>
              <span className="text-gray-700">Team Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalStructure;
