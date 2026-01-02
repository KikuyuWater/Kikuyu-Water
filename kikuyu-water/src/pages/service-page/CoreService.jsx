import React from "react";

const CoreService = () => {
  return (
    <section id="main-services-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Core Services
          </h2>
          <p className="text-xl text-gray-600">
            Essential water and sewerage services for our community
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div
            id="service-new-water-connection"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-primary p-8"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-plug text-primary text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              New Water Connection
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Apply online for domestic or commercial water connection. Get
              connected to our reliable water supply network with a streamlined
              application process.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-primary mr-3 mt-1"></i>
                <span className="text-gray-700">Online application portal</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-primary mr-3 mt-1"></i>
                <span className="text-gray-700">Fast approval (7-14 days)</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-primary mr-3 mt-1"></i>
                <span className="text-gray-700">Professional installation</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-primary mr-3 mt-1"></i>
                <span className="text-gray-700">Flexible payment plans</span>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-bold">Connection Fee:</span>
                <span className="text-primary font-black text-lg">
                  From KSh 15,000
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Includes meter, materials & installation
              </p>
            </div>
            <button className="w-full bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
              Apply Now
            </button>
          </div>

          <div
            id="service-sewer-connection"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-green-500 p-8"
          >
            <div className="bg-green-500/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-toilet text-green-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sewer Connection
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect to our modern sewerage system for proper wastewater
              management. Ensure environmental compliance and public health
              safety.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Site inspection & assessment
                </span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Professional installation</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Compliance certification</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Ongoing maintenance support
                </span>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-bold">Connection Fee:</span>
                <span className="text-green-600 font-black text-lg">
                  From KSh 20,000
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Includes inspection & installation
              </p>
            </div>
            <button className="w-full bg-green-600 text-white py-3.5 rounded-lg font-bold hover:bg-green-700 transition shadow-lg">
              Apply Now
            </button>
          </div>

          <div
            id="service-billing-payments"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-blue-500 p-8"
          >
            <div className="bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-credit-card text-blue-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Billing & Payments
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Multiple convenient payment options with transparent billing.
              Access your account 24/7 through our online portal.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">M-Pesa & bank payments</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Monthly billing statements
                </span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Payment history tracking</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Auto-payment setup available
                </span>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-bold">
                  Payment Methods:
                </span>
                <span className="text-blue-600 font-black text-lg">
                  5+ Options
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Instant confirmation & receipts
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
              Pay Bill Now
            </button>
          </div>

          <div
            id="service-water-quality"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-purple-500 p-8"
          >
            <div className="bg-purple-500/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-vial text-purple-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Water Quality & Testing
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Regular water quality testing and monitoring to ensure compliance
              with national and international standards. View monthly reports.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-purple-600 mr-3 mt-1"></i>
                <span className="text-gray-700">WHO & KEBS compliant</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-purple-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Monthly quality reports</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-purple-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Laboratory testing services
                </span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-purple-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Private water testing available
                </span>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-bold">Water Quality:</span>
                <span className="text-purple-600 font-black text-lg">
                  99.8% Safe
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Tested daily at multiple points
              </p>
            </div>
            <button className="w-full bg-purple-600 text-white py-3.5 rounded-lg font-bold hover:bg-purple-700 transition shadow-lg">
              View Reports
            </button>
          </div>

          <div
            id="service-disconnection-reconnection"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-orange-500 p-8"
          >
            <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-power-off text-orange-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Disconnection & Reconnection
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Request temporary disconnection or reconnection services. Fast
              processing for reconnections after bill payment or property
              transfers.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Same-day reconnection</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Temporary disconnection option
                </span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Account transfer services</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-orange-600 mr-3 mt-1"></i>
                <span className="text-gray-700">
                  Clear payment before reconnection
                </span>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-bold">
                  Reconnection Fee:
                </span>
                <span className="text-orange-600 font-black text-lg">
                  KSh 1,000
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Plus any outstanding balance
              </p>
            </div>
            <button className="w-full bg-orange-600 text-white py-3.5 rounded-lg font-bold hover:bg-orange-700 transition shadow-lg">
              Request Service
            </button>
          </div>

          <div
            id="service-customer-support"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-red-500 p-8"
          >
            <div className="bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-headset text-red-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Customer Complaints & Support
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              24/7 customer support for all your queries and complaints. Report
              leaks, burst pipes, or service issues with priority response.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span className="text-gray-700">24/7 emergency hotline</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Online complaint portal</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Real-time tracking system</span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span className="text-gray-700">2-hour emergency response</span>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-bold">Emergency Line:</span>
                <span className="text-red-600 font-black text-lg">
                  0800 724 724
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Available 24/7 for emergencies
              </p>
            </div>
            <button className="w-full bg-red-600 text-white py-3.5 rounded-lg font-bold hover:bg-red-700 transition shadow-lg">
              Report Issue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreService;
