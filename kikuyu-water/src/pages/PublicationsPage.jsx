import React from "react";
import Footer from "../layouts/Footer";

const PublicationsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold">PUBLICATIONS</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Notices, Tenders & Vacancies
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Official updates, procurement opportunities, and career openings.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Sections */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Notices */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <i className="fa-solid fa-bullhorn text-primary text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Notices</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Service alerts, planned maintenance, and general updates for our customers.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-gray-600 text-sm">
                No notices have been published yet.
              </div>
              <a
                href="/notices"
                className="mt-6 inline-flex items-center justify-center w-full bg-primary text-white px-4 py-3 rounded-lg font-bold hover:bg-primary/80 transition"
              >
                View Notices
              </a>
            </div>

            {/* Tenders */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <i className="fa-solid fa-file-contract text-blue-500 text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tenders</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Procurement opportunities for goods, works, and services.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-gray-600 text-sm">
                No tenders are available at the moment.
              </div>
              <a
                href="/tenders"
                className="mt-6 inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                View Tenders
              </a>
            </div>

            {/* Vacancies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-500/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <i className="fa-solid fa-briefcase text-green-500 text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Vacancies</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Current job openings and internship opportunities.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-gray-600 text-sm">
                No vacancies are available at the moment.
              </div>
              <a
                href="/careers"
                className="mt-6 inline-flex items-center justify-center w-full bg-green-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-700 transition"
              >
                View Vacancies
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PublicationsPage;
