import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Departments } from "../../data";
import Footer from "../../layouts/Footer";
import DepartmentBulletinBoard from "./DepartmentBulletinBoard";

const DepartmentDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const department = Departments.find((dept) => dept.id === id);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Department Not Found</h2>
          <button
            onClick={() => navigate("/departments")}
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Back to Departments
          </button>
        </div>
      </div>
    );
  }

  const achievements = {
    technical: [
      "Successfully maintained 98% uptime in water supply across the network",
      "Completed infrastructure upgrades in 15 zones, benefiting 50,000+ residents",
      "Reduced average repair response time to under 4 hours",
      "Implemented smart monitoring systems across 80% of the network",
    ],
    commercial: [
      "Increased customer satisfaction rating to 92%",
      "Digitized billing systems reaching 85% of customers",
      "Processed over 2,000 new connection applications annually",
      "Reduced billing errors by 60% through system automation",
    ],
    finance: [
      "Achieved 95% revenue collection efficiency",
      "Maintained clean audit reports for 5 consecutive years",
      "Implemented cost-saving measures reducing operational expenses by 15%",
      "Secured funding for major infrastructure projects worth KES 500M",
    ],
    procurement: [
      "Streamlined procurement processes reducing lead time by 30%",
      "Achieved 100% compliance with procurement regulations",
      "Saved over KES 20M through competitive bidding processes",
      "Established partnerships with 50+ verified suppliers",
    ],
    hr: [
      "Maintained 95% employee retention rate",
      "Conducted 200+ training sessions improving staff competency",
      "Implemented performance management system covering all staff",
      "Achieved gender balance with 45% female representation",
    ],
    nrw: [
      "Reduced non-revenue water from 35% to 22% over three years",
      "Detected and repaired over 500 leaks annually",
      "Installed 10,000+ new meters improving accuracy",
      "Saved 2 million cubic meters of water through leak detection",
    ],
    audit: [
      "Conducted comprehensive audits across all departments",
      "Identified cost savings opportunities worth KES 15M",
      "Maintained zero major compliance violations",
      "Implemented risk management framework protecting company assets",
    ],
    "customer-relations": [
      "Achieved 92% customer satisfaction rating through enhanced service delivery",
      "Resolved 95% of customer complaints within 48 hours",
      "Implemented digital feedback system receiving 5,000+ responses annually",
      "Reduced average call wait time from 10 minutes to under 2 minutes",
      "Established 24/7 customer support helpline serving 1,000+ calls daily",
      "Trained customer service team resulting in 40% improvement in service quality",
      "Launched customer engagement programs reaching 15,000+ households",
      "Maintained 98% accuracy in billing inquiries resolution",
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => navigate("/departments")}
            className="mb-8 text-white/80 hover:text-white flex items-center transition"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back to Departments
          </button>
          <div className="flex items-center gap-8">
            <div className={`w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
              <i className={`fa-solid ${department.icon} text-6xl`}></i>
            </div>
            <div>
              <h1 className="text-5xl font-black mb-4">{department.title}</h1>
              <p className="text-xl text-white/90">{department.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Head & Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Department Head */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border-l-4 border-primary">
              <div className="text-center">
                <div className="w-40 h-40 rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center mx-auto mb-6 border-4 border-primary/10">
                  {department.photo ? (
                    <img
                      src={department.photo}
                      alt={`${department.title} head portrait`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${department.theme.iconBg}`}>
                      <i className={`fa-solid ${department.icon} text-5xl text-${department.theme.color}`}></i>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{department.head}</h3>
                <p className="text-sm text-gray-600 mb-4">Department Head</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-primary mr-2"></i>
                    <span>kikuyuwater@yahoo.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-phone text-primary mr-2"></i>
                    <span>+254 728 578 098</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Functions */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Functions & Responsibilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {department.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className={`w-10 h-10 rounded-full ${department.theme.iconBg} flex items-center justify-center mr-4 flex-shrink-0`}>
                      <i className={`fa-solid fa-check text-${department.theme.color}`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature}</h4>
                      <p className="text-sm text-gray-600">Core responsibility ensuring service excellence</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600">
              Milestones and accomplishments that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements[department.id]?.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-start hover:shadow-xl transition">
                <div className={`w-12 h-12 rounded-full ${department.theme.iconBg} flex items-center justify-center mr-4 flex-shrink-0`}>
                  <i className={`fa-solid fa-trophy text-${department.theme.color} text-xl`}></i>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-bullseye text-4xl mr-4"></i>
                <h3 className="text-2xl font-bold">Department Mission</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To deliver exceptional {department.title.toLowerCase()} services that exceed customer expectations 
                while maintaining the highest standards of professionalism and efficiency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-eye text-4xl mr-4"></i>
                <h3 className="text-2xl font-bold">Department Vision</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be a model of excellence in {department.title.toLowerCase()}, setting industry benchmarks 
                and contributing to the company's position as Kenya's leading water service provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Bulletin Board */}
      <DepartmentBulletinBoard 
        departmentId={department.id} 
        departmentTheme={department.theme}
      />

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Assistance from this Department?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help you with any inquiries or services related to {department.title.toLowerCase()}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+254728578098"
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center"
            >
              <i className="fa-solid fa-phone mr-3"></i>
              Call Us
            </a>
            <a
              href="mailto:kikuyuwater@yahoo.com"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition inline-flex items-center"
            >
              <i className="fa-solid fa-envelope mr-3"></i>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DepartmentDetailPage;
