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
      hour: "numeric",
      minute: "2-digit",
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
            <div className="space-y-8">
              {activeJobs.map((job) => (
                <article key={job.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                  <div className="flex flex-col gap-5 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
                      <p className="mb-3 mt-1 text-base font-medium text-gray-700">{job.title}</p>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <i className="fa-solid fa-location-dot text-primary"></i>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <i className="fa-solid fa-calendar text-primary"></i>
                          Deadline: {formatDate(job.deadline)}
                        </span>
                      </div>
                    </div>
                    <a
                      href={job.applyDocumentUrl}
                      className="inline-flex min-h-11 items-center justify-center rounded bg-primary px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      APPLY NOW
                    </a>
                  </div>
                  <h4 className="border-b border-gray-200 px-6 py-4 text-lg font-bold text-gray-900">
                    KIKUYU WATER COMPANY LIMITED ADVERT
                  </h4>
                  <iframe
                    title={`${job.company} ${job.title} vacancy advertisement`}
                    src={job.documentUrl}
                    className="block h-[80vh] min-h-[520px] max-h-[960px] w-full bg-gray-100"
                  />
                </article>
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
