import React from "react";
import Footer from "../layouts/Footer";

const NoticesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold">NOTICES</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Public Notices
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest service alerts, planned maintenance, and important announcements from Kikuyu Water Company.
            </p>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="fa-solid fa-bullhorn text-primary text-2xl mr-3"></i>
              Latest Notices
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 text-gray-600 text-base text-center">
                No notices have been published yet.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NoticesPage;
