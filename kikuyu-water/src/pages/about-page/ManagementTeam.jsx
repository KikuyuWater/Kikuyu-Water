import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Departments } from "../../data";
import managingDirectorPhoto from "../../assets/department-heads/Jane Murage, Managing Director.jpg";

const ManagementTeam = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);

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

        {/* Managing Director Message Section */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-primary font-bold text-sm">LEADERSHIP</span>
          </div>

          <h3 className="text-3xl font-black text-gray-900 mb-8">
            Message from the Managing Director
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={managingDirectorPhoto}
                  alt="Jane Murage, Managing Director"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Jane Murage</h4>
                <p className="text-lg text-primary font-semibold mb-4">Managing Director</p>
                <div className="text-sm space-y-2 text-gray-600">
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-gray-400 mr-2"></i>
                    <span>kikuyuwater@yahoo.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-phone text-gray-400 mr-2"></i>
                    <span>+254 728 578 098</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <p className="text-base text-gray-700 leading-relaxed">
                  Welcome to Kikuyu Water and Sewerage Company. As Managing Director, I am 
                  proud to lead an organization committed to delivering reliable, safe, 
                  and affordable water services to the Kikuyu and Kabete communities.
                </p>

                {/* Show truncated or full message based on state (mobile only) */}
                <div className={`space-y-4 ${showFullMessage ? 'block' : 'hidden md:block'}`}>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Water is a fundamental human right, and our mission is to ensure that 
                    every household and business within our service area has access to clean, 
                    quality water. Over the years, KIWASCO has made significant investments 
                    in infrastructure expansion, capacity building, and operational excellence 
                    to meet the growing demands of our customers.
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed">
                    We face challenges common to many water utilities in Kenya, including 
                    water source variability, aging infrastructure, and the need for continuous 
                    investment. However, our dedicated team of professionals, supported by our 
                    Board of Directors and stakeholders, remains committed to addressing these 
                    challenges head-on through innovation, strategic planning, and sustainable 
                    practices.
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed">
                    Our vision is to be a model water utility that delivers excellent service, 
                    maintains financial sustainability, and contributes positively to the social 
                    and economic development of the region. We invite all our stakeholders—customers, 
                    employees, suppliers, and partners—to join us on this journey toward water 
                    security and excellence.
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed font-semibold">
                    Thank you for your continued support and trust.
                  </p>
                </div>

                {/* Read More/Less Button for Mobile */}
                <button
                  onClick={() => setShowFullMessage(!showFullMessage)}
                  className="md:hidden text-primary font-semibold hover:underline flex items-center"
                >
                  {showFullMessage ? (
                    <>
                      Show Less <i className="fa-solid fa-chevron-up ml-2"></i>
                    </>
                  ) : (
                    <>
                      Read More <i className="fa-solid fa-chevron-down ml-2"></i>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            Department Heads
          </h3>
          <p className="text-lg text-gray-600">
            Our dedicated department leaders
          </p>
        </div>

        {/* Department Heads Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Departments.map((department) => (
            <Link
              key={department.id}
              to={`/departments/${department.id}`}
              className="group block"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${department.theme.border}`}>
                {/* Square Photo Container */}
                <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
                  {department.photo ? (
                    <img
                      src={department.photo}
                      alt={`${department.head}, ${department.title}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${department.theme.iconBg}`}>
                      <i className={`fa-solid ${department.icon} text-6xl text-${department.theme.color} opacity-20`}></i>
                    </div>
                  )}
                  {/* Department Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${department.theme.iconBg} border-2 ${department.theme.border} flex items-center justify-center bg-white shadow-lg`}>
                    <i className={`fa-solid ${department.icon} text-lg text-${department.theme.color}`}></i>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 text-center">
                  <h3 className={`text-xl font-bold mb-2 text-${department.theme.color}`}>
                    {department.head}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    {department.title}
                  </p>
                  <div className="text-xs space-y-2 text-gray-600">
                    <div className="flex items-center justify-center">
                      <i className="fa-solid fa-envelope text-gray-400 mr-2"></i>
                      <span>kikuyuwater@yahoo.com</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <i className="fa-solid fa-phone text-gray-400 mr-2"></i>
                      <span>+254 728 578 098</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
