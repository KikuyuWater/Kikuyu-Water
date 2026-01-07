import React, { useState } from "react";
import { tendersData } from "../backend/tenders/tendersData";
import Footer from "../layouts/Footer";

const TendersPage = () => {
  const [filterCategory, setFilterCategory] = useState("All");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const openTenders = tendersData.filter(tender => tender.status === "Open");
  const closedTenders = tendersData.filter(tender => tender.status === "Closed");

  const filteredOpenTenders = filterCategory === "All" 
    ? openTenders 
    : openTenders.filter(tender => tender.category === filterCategory);

  const categories = ["All", "Goods", "Services", "Works"];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-gavel text-5xl"></i>
            </div>
            <h1 className="text-5xl font-black mb-4">Tenders & Procurement</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Kikuyu Water Company is committed to transparent and competitive procurement processes. 
              View current tender opportunities and participate in our procurement activities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Open Tenders</h2>
              <p className="text-gray-600">{filteredOpenTenders.length} active tender{filteredOpenTenders.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-lg font-bold transition ${
                    filterCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Tenders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredOpenTenders.length > 0 ? (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {filteredOpenTenders.map((tender, index) => (
                <a
                  key={tender.id}
                  href={tender.documentUrl}
                  download
                  className={`flex items-center justify-between p-6 hover:bg-gray-50 transition group ${
                    index !== filteredOpenTenders.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-file-pdf text-orange-500 text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition">
                          {tender.title}
                        </h3>
                        <span className="px-2 py-0.5 bg-orange-500/10 text-orange-500 text-xs font-bold rounded-full">
                          {tender.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-hashtag text-orange-500"></i>
                          {tender.tenderNo}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-calendar text-orange-500"></i>
                          Closes: {formatDate(tender.closingDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <i className="fa-solid fa-download text-2xl text-gray-400 group-hover:text-orange-500 transition ml-4"></i>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-folder-open text-orange-500 text-4xl"></i>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">NO OPEN TENDERS</h2>
              <p className="text-gray-600 text-lg">Check back later for new procurement opportunities</p>
            </div>
          )}
        </div>
      </section>

      {/* Closed Tenders */}
      {closedTenders.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Closed Tenders</h2>
              <p className="text-gray-600">Previously awarded contracts</p>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              {closedTenders.map((tender, index) => (
                <div
                  key={tender.id}
                  className={`flex items-center justify-between p-4 ${
                    index !== closedTenders.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <i className="fa-solid fa-file-pdf text-gray-400 text-lg"></i>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900">{tender.title}</h3>
                        <span className="text-xs font-bold text-gray-500">{tender.tenderNo}</span>
                      </div>
                      {tender.awardedTo && (
                        <p className="text-sm text-gray-600">
                          <i className="fa-solid fa-award text-orange-500 mr-2"></i>
                          Awarded to: <span className="font-semibold">{tender.awardedTo}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Closed: {formatDate(tender.closingDate)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Procurement Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Procurement Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fa-solid fa-envelope text-orange-500 mr-3 w-5"></i>
                    <a href="mailto:tenders@kikuyuwater.co.ke" className="text-primary hover:text-blue-700">
                      tenders@kikuyuwater.co.ke
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-phone text-orange-500 mr-3 w-5"></i>
                    <a href="tel:+254728578098" className="text-primary hover:text-blue-700">
                      +254 728 578 098
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-location-dot text-orange-500 mr-3 w-5"></i>
                    <span className="text-gray-700">Kikuyu Town, Kiambu County</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TendersPage;
