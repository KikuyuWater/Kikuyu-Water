import React, { useState } from "react";

const LatestUpdates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Aggregate all bulletin data from all departments
  const allBulletins = [
    // Technical
    {
      id: "tech-1",
      department: "Technical",
      departmentId: "technical",
      title: "Network Maintenance Schedule Q1 2026",
      description: "Planned maintenance activities for water distribution network in Zone A and Zone B.",
      date: "2026-01-05",
      type: "Schedule",
      fileType: "pdf",
      color: "blue",
    },
    {
      id: "tech-2",
      department: "Technical",
      departmentId: "technical",
      title: "Equipment Safety Guidelines",
      description: "Updated safety protocols for operating and maintaining water treatment equipment.",
      date: "2025-12-20",
      type: "Guidelines",
      fileType: "pdf",
      color: "blue",
    },
    {
      id: "tech-3",
      department: "Technical",
      departmentId: "technical",
      title: "Infrastructure Upgrade Report 2025",
      description: "Comprehensive report on infrastructure upgrades completed in 2025.",
      date: "2025-12-15",
      type: "Report",
      fileType: "pdf",
      color: "blue",
    },
    // Commercial
    {
      id: "comm-1",
      department: "Commercial",
      departmentId: "commercial",
      title: "Customer Service Standards 2026",
      description: "Updated customer service protocols and response time requirements for all staff.",
      date: "2026-01-03",
      type: "Policy",
      fileType: "pdf",
      color: "green",
    },
    {
      id: "comm-2",
      department: "Commercial",
      departmentId: "commercial",
      title: "New Connection Application Form",
      description: "Latest version of the water connection application form with updated requirements.",
      date: "2025-12-28",
      type: "Form",
      fileType: "pdf",
      color: "green",
    },
    // Finance
    {
      id: "fin-1",
      department: "Finance",
      departmentId: "finance",
      title: "Annual Financial Report 2025",
      description: "Audited financial statements and performance analysis for fiscal year 2025.",
      date: "2026-01-02",
      type: "Report",
      fileType: "pdf",
      color: "purple",
    },
    {
      id: "fin-2",
      department: "Finance",
      departmentId: "finance",
      title: "Budget Guidelines 2026",
      description: "Departmental budget preparation guidelines and submission requirements.",
      date: "2025-12-18",
      type: "Guidelines",
      fileType: "pdf",
      color: "purple",
    },
    // Procurement
    {
      id: "proc-1",
      department: "Procurement",
      departmentId: "procurement",
      title: "Tender Documents Template 2026",
      description: "Standard template for preparing tender documents and specifications.",
      date: "2026-01-04",
      type: "Template",
      fileType: "docx",
      color: "orange",
    },
    {
      id: "proc-2",
      department: "Procurement",
      departmentId: "procurement",
      title: "Supplier Code of Conduct",
      description: "Ethical standards and requirements for all registered suppliers.",
      date: "2025-12-22",
      type: "Policy",
      fileType: "pdf",
      color: "orange",
    },
    // HR
    {
      id: "hr-1",
      department: "Human Resources",
      departmentId: "hr",
      title: "Employee Handbook 2026",
      description: "Comprehensive handbook covering policies, benefits, and workplace guidelines.",
      date: "2026-01-01",
      type: "Handbook",
      fileType: "pdf",
      color: "teal",
    },
    {
      id: "hr-2",
      department: "Human Resources",
      departmentId: "hr",
      title: "Training Calendar Q1 2026",
      description: "Scheduled training programs and professional development opportunities.",
      date: "2025-12-15",
      type: "Calendar",
      fileType: "pdf",
      color: "teal",
    },
    // NRW
    {
      id: "nrw-1",
      department: "NRW",
      departmentId: "nrw",
      title: "Leak Detection Procedures Manual",
      description: "Standard operating procedures for identifying and repairing water leaks.",
      date: "2026-01-03",
      type: "Manual",
      fileType: "pdf",
      color: "red",
    },
    {
      id: "nrw-2",
      department: "NRW",
      departmentId: "nrw",
      title: "NRW Reduction Strategy 2026-2028",
      description: "Three-year strategic plan for reducing non-revenue water losses.",
      date: "2025-12-25",
      type: "Strategy",
      fileType: "pdf",
      color: "red",
    },
    // Customer Relations
    {
      id: "cr-1",
      department: "Customer Relations",
      departmentId: "customer-relations",
      title: "Customer Service Charter 2026",
      description: "Our commitment to service excellence and customer satisfaction standards.",
      date: "2026-01-05",
      type: "Policy",
      fileType: "pdf",
      color: "indigo",
    },
    {
      id: "cr-2",
      department: "Customer Relations",
      departmentId: "customer-relations",
      title: "Complaint Handling Procedures",
      description: "Step-by-step guide for lodging and resolving customer complaints.",
      date: "2025-12-28",
      type: "Guidelines",
      fileType: "pdf",
      color: "indigo",
    },
  ];

  // Sort by date (most recent first) and take all items
  const sortedBulletins = [...allBulletins].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalSlides = Math.ceil(sortedBulletins.length / 3);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Get current 3 cards to display
  const getCurrentCards = () => {
    const startIdx = currentIndex * 3;
    return sortedBulletins.slice(startIdx, startIdx + 3);
  };

  const getFileIcon = (fileType) => {
    switch (fileType?.toLowerCase()) {
      case "pdf":
        return "fa-file-pdf";
      case "docx":
      case "doc":
        return "fa-file-word";
      case "xlsx":
      case "xls":
        return "fa-file-excel";
      default:
        return "fa-file";
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600", icon: "text-blue-500" },
      green: { bg: "bg-green-500/10", text: "text-green-600", icon: "text-green-500" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600", icon: "text-purple-500" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-600", icon: "text-orange-500" },
      teal: { bg: "bg-teal-500/10", text: "text-teal-600", icon: "text-teal-500" },
      red: { bg: "bg-red-500/10", text: "text-red-600", icon: "text-red-500" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600", icon: "text-indigo-500" },
    };
    return colorMap[color] || colorMap.blue;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const currentCards = getCurrentCards();

  return (
    <section id="latest-updates" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2">
              Latest Updates
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              Recent documents and announcements from all departments
            </p>
          </div>
          <a
            href="/departments"
            className="border-2 border-primary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition text-sm sm:text-base"
          >
            View All Departments
          </a>
        </div>

        {/* Slideshow Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-white hover:bg-primary text-gray-800 hover:text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center group"
            aria-label="Previous updates"
          >
            <i className="fa-solid fa-chevron-left text-lg"></i>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-white hover:bg-primary text-gray-800 hover:text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center group"
            aria-label="Next updates"
          >
            <i className="fa-solid fa-chevron-right text-lg"></i>
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentCards.map((bulletin, idx) => {
              const colors = getColorClasses(bulletin.color);
              return (
                <div
                  key={bulletin.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 flex flex-col animate-fadeIn"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Card Header with Icon */}
                  <div className={`${colors.bg} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${colors.icon} text-3xl`}>
                        <i className={`fa-solid ${getFileIcon(bulletin.fileType)}`}></i>
                      </div>
                      <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-bold border ${colors.text.replace('text-', 'border-')}`}>
                        {bulletin.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">
                      {bulletin.department} Department
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {bulletin.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed flex-1 line-clamp-3">
                      {bulletin.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-gray-500 text-xs sm:text-sm flex items-center">
                        <i className="fa-solid fa-calendar-days mr-2"></i>
                        {formatDate(bulletin.date)}
                      </span>
                      <a
                        href={`/departments/${bulletin.departmentId}`}
                        className={`${colors.text} font-bold flex items-center hover:underline text-sm`}
                      >
                        View <i className="fa-solid fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LatestUpdates;
