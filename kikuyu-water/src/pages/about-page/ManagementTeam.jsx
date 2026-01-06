import React from "react";
import { Departments } from "../../data";

const ManagementTeam = () => {
  return (
    <section id="management-team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Management Team
          </h2>
          <p className="text-xl text-gray-600">
            Meet the dedicated leaders driving our organization forward
          </p>
        </div>

        <div className="space-y-12">
          {Departments.map((department) => (
            <div key={department.id}>
              <div className={`flex items-center mb-8 pb-4 border-b-2 ${department.theme.border}`}>
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${department.theme.iconBg} mr-6`}
                >
                  <i className={`fa-solid ${department.theme.icon} text-2xl text-${department.theme.color}`}></i>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold text-${department.theme.color}`}>
                    {department.title}
                  </h3>
                  <p className="text-gray-600">{department.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Department Head */}
                <div className={`rounded-xl p-6 border-l-4 ${department.theme.border} bg-gradient-to-br from-white to-gray-50 shadow-md`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${department.theme.iconBg} mr-4`}>
                      <i className="fa-solid fa-crown text-lg"></i>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-500">Head of Department</p>
                      <p className={`text-lg font-bold text-${department.theme.color}`}>
                        {department.head}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <i className="fa-solid fa-envelope text-gray-400 mr-2"></i>
                      <span>kikuyuwater@yahoo.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fa-solid fa-phone text-gray-400 mr-2"></i>
                      <span>+254 728 578 098</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
