import React from "react";
import { careersData } from "../backend/careers/careersData";
import Footer from "../layouts/Footer";

const CareersPage = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isDeadlinePassed = (deadline) => {
    return new Date(deadline) < new Date();
  };

  const activeJobs = careersData.filter(job => !isDeadlinePassed(job.deadline));

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-briefcase text-5xl"></i>
            </div>
            <h1 className="text-xl font-bold mb-4">Careers at Kikuyu Water</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our team and be part of providing essential water services to thousands of families. 
              We offer competitive compensation, growth opportunities, and a positive work environment.
            </p>
          </div>
        </div>
      </section>

      {/* Active Job Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">
              {activeJobs.length} position{activeJobs.length !== 1 ? "s" : ""} available
            </p>
          </div>

          {activeJobs.length > 0 ? (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {activeJobs.map((job, index) => (
                <a
                  key={job.id}
                  href={job.documentUrl}
                  download
                  className={`flex items-center justify-between p-6 hover:bg-gray-50 transition group ${
                    index !== activeJobs.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-file-pdf text-primary text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-location-dot text-primary"></i>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-calendar text-primary"></i>
                          Deadline: {formatDate(job.deadline)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <i className="fa-solid fa-download text-2xl text-gray-400 group-hover:text-primary transition ml-4"></i>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-briefcase text-primary text-4xl"></i>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">NO OPEN VACANCIES</h2>
              <p className="text-gray-600 text-lg">Check back later for career opportunities</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600">Benefits and opportunities at Kikuyu Water</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fa-graduation-cap", title: "Training & Development", description: "Continuous learning opportunities" },
              { icon: "fa-heart", title: "Employee Welfare", description: "Comprehensive benefits package" },
              { icon: "fa-chart-line", title: "Career Growth", description: "Clear advancement pathways" },
              { icon: "fa-users", title: "Team Environment", description: "Collaborative and supportive" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className={`fa-solid ${benefit.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareersPage;
