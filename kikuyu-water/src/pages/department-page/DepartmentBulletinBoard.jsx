import React, { useState } from "react";

const DepartmentBulletinBoard = ({ departmentId, departmentTheme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Color mapping for department themes (Tailwind needs full class names)
  const gradientMap = {
    primary: "from-primary to-primary/90",
    "green-500": "from-green-500 to-green-600",
    "purple-500": "from-purple-500 to-purple-600",
    "orange-500": "from-orange-500 to-orange-600",
    "blue-500": "from-blue-500 to-blue-600",
    "teal-500": "from-teal-500 to-teal-600",
    "red-500": "from-red-500 to-red-600",
    "indigo-500": "from-indigo-500 to-indigo-600",
  };

  const textColorMap = {
    primary: "text-primary",
    "green-500": "text-green-500",
    "purple-500": "text-purple-500",
    "orange-500": "text-orange-500",
    "blue-500": "text-blue-500",
    "teal-500": "text-teal-500",
    "red-500": "text-red-500",
    "indigo-500": "text-indigo-500",
  };

  const hoverTextColorMap = {
    primary: "hover:text-primary",
    "green-500": "hover:text-green-500",
    "purple-500": "hover:text-purple-500",
    "orange-500": "hover:text-orange-500",
    "blue-500": "hover:text-blue-500",
    "teal-500": "hover:text-teal-500",
    "red-500": "hover:text-red-500",
    "indigo-500": "hover:text-indigo-500",
  };

  const bgColorMap = {
    primary: "bg-primary/10",
    "green-500": "bg-green-500/10",
    "purple-500": "bg-purple-500/10",
    "orange-500": "bg-orange-500/10",
    "blue-500": "bg-blue-500/10",
    "teal-500": "bg-teal-500/10",
    "red-500": "bg-red-500/10",
    "indigo-500": "bg-indigo-500/10",
  };

  const hoverBgColorMap = {
    primary: "group-hover:bg-primary/10",
    "green-500": "group-hover:bg-green-500/10",
    "purple-500": "group-hover:bg-purple-500/10",
    "orange-500": "group-hover:bg-orange-500/10",
    "blue-500": "group-hover:bg-blue-500/10",
    "teal-500": "group-hover:bg-teal-500/10",
    "red-500": "group-hover:bg-red-500/10",
    "indigo-500": "group-hover:bg-indigo-500/10",
  };
  
  // Sample bulletin data - this would typically come from an API
  const bulletins = {
    technical: [
      {
        id: 1,
        title: "Network Maintenance Schedule Q1 2026",
        description: "Planned maintenance activities for water distribution network in Zone A and Zone B.",
        date: "2026-01-05",
        type: "Schedule",
        fileType: "pdf",
        fileSize: "2.4 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "Equipment Safety Guidelines",
        description: "Updated safety protocols for operating and maintaining water treatment equipment.",
        date: "2025-12-20",
        type: "Guidelines",
        fileType: "pdf",
        fileSize: "1.8 MB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Infrastructure Upgrade Report 2025",
        description: "Comprehensive report on infrastructure upgrades completed in 2025.",
        date: "2025-12-15",
        type: "Report",
        fileType: "pdf",
        fileSize: "5.2 MB",
        downloadUrl: "#",
      },
    ],
    commercial: [
      {
        id: 1,
        title: "Customer Service Standards 2026",
        description: "Updated customer service protocols and response time requirements for all staff.",
        date: "2026-01-03",
        type: "Policy",
        fileType: "pdf",
        fileSize: "1.5 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "New Connection Application Form",
        description: "Latest version of the water connection application form with updated requirements.",
        date: "2025-12-28",
        type: "Form",
        fileType: "pdf",
        fileSize: "850 KB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Billing System User Manual",
        description: "Comprehensive guide for using the new digital billing system.",
        date: "2025-12-10",
        type: "Manual",
        fileType: "pdf",
        fileSize: "3.1 MB",
        downloadUrl: "#",
      },
    ],
    finance: [
      {
        id: 1,
        title: "Annual Financial Report 2025",
        description: "Audited financial statements and performance analysis for fiscal year 2025.",
        date: "2026-01-02",
        type: "Report",
        fileType: "pdf",
        fileSize: "4.7 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "Budget Guidelines 2026",
        description: "Departmental budget preparation guidelines and submission requirements.",
        date: "2025-12-18",
        type: "Guidelines",
        fileType: "pdf",
        fileSize: "1.2 MB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Expense Reimbursement Policy",
        description: "Updated policy for staff expense claims and reimbursement procedures.",
        date: "2025-12-05",
        type: "Policy",
        fileType: "pdf",
        fileSize: "980 KB",
        downloadUrl: "#",
      },
    ],
    procurement: [
      {
        id: 1,
        title: "Tender Documents Template 2026",
        description: "Standard template for preparing tender documents and specifications.",
        date: "2026-01-04",
        type: "Template",
        fileType: "docx",
        fileSize: "1.3 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "Supplier Code of Conduct",
        description: "Ethical standards and requirements for all registered suppliers.",
        date: "2025-12-22",
        type: "Policy",
        fileType: "pdf",
        fileSize: "1.1 MB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Procurement Process Flowchart",
        description: "Visual guide to the procurement process from requisition to payment.",
        date: "2025-12-12",
        type: "Guide",
        fileType: "pdf",
        fileSize: "650 KB",
        downloadUrl: "#",
      },
    ],
    hr: [
      {
        id: 1,
        title: "Employee Handbook 2026",
        description: "Comprehensive handbook covering policies, benefits, and workplace guidelines.",
        date: "2026-01-01",
        type: "Handbook",
        fileType: "pdf",
        fileSize: "3.8 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "Leave Application Form",
        description: "Updated leave application form with new approval workflow.",
        date: "2025-12-20",
        type: "Form",
        fileType: "pdf",
        fileSize: "420 KB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Training Calendar Q1 2026",
        description: "Scheduled training programs and professional development opportunities.",
        date: "2025-12-15",
        type: "Calendar",
        fileType: "pdf",
        fileSize: "890 KB",
        downloadUrl: "#",
      },
    ],
    nrw: [
      {
        id: 1,
        title: "Leak Detection Procedures Manual",
        description: "Standard operating procedures for identifying and repairing water leaks.",
        date: "2026-01-03",
        type: "Manual",
        fileType: "pdf",
        fileSize: "2.9 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "NRW Reduction Strategy 2026-2028",
        description: "Three-year strategic plan for reducing non-revenue water losses.",
        date: "2025-12-25",
        type: "Strategy",
        fileType: "pdf",
        fileSize: "3.5 MB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Meter Testing Guidelines",
        description: "Procedures for testing and calibrating water meters to ensure accuracy.",
        date: "2025-12-10",
        type: "Guidelines",
        fileType: "pdf",
        fileSize: "1.4 MB",
        downloadUrl: "#",
      },
    ],
    audit: [
      {
        id: 1,
        title: "Internal Audit Plan 2026",
        description: "Annual audit plan covering all departments and risk areas.",
        date: "2026-01-02",
        type: "Plan",
        fileType: "pdf",
        fileSize: "1.6 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "Compliance Checklist",
        description: "Regulatory compliance requirements for all departments.",
        date: "2025-12-18",
        type: "Checklist",
        fileType: "xlsx",
        fileSize: "750 KB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Risk Management Framework",
        description: "Framework for identifying, assessing, and managing organizational risks.",
        date: "2025-12-08",
        type: "Framework",
        fileType: "pdf",
        fileSize: "2.2 MB",
        downloadUrl: "#",
      },
    ],
    "customer-relations": [
      {
        id: 1,
        title: "Customer Service Charter 2026",
        description: "Our commitment to service excellence and customer satisfaction standards.",
        date: "2026-01-05",
        type: "Policy",
        fileType: "pdf",
        fileSize: "1.8 MB",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "Complaint Handling Procedures",
        description: "Step-by-step guide for lodging and resolving customer complaints.",
        date: "2025-12-28",
        type: "Guidelines",
        fileType: "pdf",
        fileSize: "1.3 MB",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "Customer Feedback Form",
        description: "Template for submitting feedback, suggestions, and commendations.",
        date: "2025-12-15",
        type: "Form",
        fileType: "pdf",
        fileSize: "650 KB",
        downloadUrl: "#",
      },
    ],
  };

  const departmentBulletins = bulletins[departmentId] || [];

  const getFileIcon = (fileType) => {
    switch (fileType.toLowerCase()) {
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

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title - Clickable */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-center mb-8 cursor-pointer group"
        >
          <div className="inline-flex items-center gap-3 mb-2">
            <h2 className={`text-3xl font-bold text-gray-900 ${hoverTextColorMap[departmentTheme.color]} transition`}>
              Resources & Documents
            </h2>
            <div className={`w-8 h-8 rounded-full bg-gray-100 ${hoverBgColorMap[departmentTheme.color]} flex items-center justify-center transition-all duration-300 ${isExpanded ? "rotate-180" : ""}`}>
              <i className={`fa-solid fa-chevron-down text-gray-600 ${hoverTextColorMap[departmentTheme.color]} transition`}></i>
            </div>
          </div>
          <p className="text-gray-600 group-hover:text-gray-900 transition">
            Access department-specific documents and policies
          </p>
        </div>

        {/* Collapsible Bulletin Board Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Card Header */}
          <div className={`bg-gradient-to-r ${gradientMap[departmentTheme.color]} p-6`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <i className="fa-solid fa-folder-open text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Department Bulletin Board</h3>
                  <p className="text-white/80 text-sm">
                    {departmentBulletins.length} document{departmentBulletins.length !== 1 ? "s" : ""} available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Document List */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {departmentBulletins.length > 0 ? (
              <div className="border-t border-gray-200">
                {departmentBulletins.map((bulletin, index) => (
                  <a
                    key={bulletin.id}
                    href={bulletin.downloadUrl}
                    download
                    className={`flex items-center justify-between p-4 hover:bg-gray-50 transition group ${
                      index !== departmentBulletins.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <i className={`fa-solid ${getFileIcon(bulletin.fileType)} ${textColorMap[departmentTheme.color]} text-lg`}></i>
                      <span className={`font-medium text-gray-900 ${hoverTextColorMap[departmentTheme.color]} transition`}>
                        {bulletin.title}
                      </span>
                    </div>
                    <i className={`fa-solid fa-download text-gray-400 ${hoverTextColorMap[departmentTheme.color]} transition`}></i>
                  </a>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center border-t border-gray-200">
                <div className={`w-16 h-16 rounded-full ${bgColorMap[departmentTheme.color]} flex items-center justify-center mx-auto mb-3`}>
                  <i className={`fa-solid fa-inbox ${textColorMap[departmentTheme.color]} text-2xl`}></i>
                </div>
                <p className="text-gray-600">No documents available at this time</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentBulletinBoard;
