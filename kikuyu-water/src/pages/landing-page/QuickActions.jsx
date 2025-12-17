import React, { useState } from 'react';

const QuickActions = () => {
  const [showSupervisors, setShowSupervisors] = useState(false);

  return (
    <section id="quick-actions" className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-gray-900 mb-4">
            Quick Actions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Fast access to essential customer services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 sm:p-8 border-t-4 border-primary">
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-file-signature text-primary text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Apply for Connection.
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Get connected to our reliable water supply network. Complete your
              application online in minutes.
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start">
                <i className="fa-solid fa-check text-primary mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  Fast online application
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-primary mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  Track application status
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-primary mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  Quick approval process
                </span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 sm:p-8 border-t-4 border-green-500">
            <div className="bg-green-500/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-credit-card text-green-600 text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pay Water Bill
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Multiple convenient payment options available. Pay your bill
              securely online anytime, anywhere.
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start">
                <i className="fa-solid fa-check text-green-600 mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  M-Pesa & Bank payments
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-green-600 mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  View payment history
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-green-600 mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  Instant confirmation
                </span>
              </li>
            </ul>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Pay Bill
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 sm:p-8 border-t-4 border-orange-500">
            <div className="bg-orange-500/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-exclamation-triangle text-orange-600 text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Report Leak / Complaint
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Report water leaks, burst pipes, or service issues. Our team
              responds promptly to all reports.
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start">
                <i className="fa-solid fa-check text-orange-600 mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  24/7 reporting available
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-orange-600 mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  Real-time tracking
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-orange-600 mr-2 sm:mr-3 mt-1"></i>
                <span className="text-gray-700 text-sm sm:text-base">
                  Priority emergency response
                </span>
              </li>
            </ul>
            <button
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition"
              onClick={() => setShowSupervisors((s) => !s)}
              aria-expanded={showSupervisors}
              aria-controls="supervisors-list"
            >
              Report Issue
            </button>

            {showSupervisors && (
              <div id="supervisors-list" className="mt-4 bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Contact Supervisors</h4>
                <p className="text-sm text-gray-600 mb-3">Choose your zone to contact the supervisor directly.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded border">
                    <p className="font-semibold">Muguga</p>
                    <p className="text-sm text-gray-600">Supervisor</p>
                    <div className="mt-2 flex items-center space-x-3">
                      <a href="tel:+254758578091" aria-label="Call Muguga supervisor at +254 758 578 091" className="text-primary font-medium">Call</a>
                      <a href="mailto:supervisor-muguga@kikuyuwater.co.ke" aria-label="Email Muguga supervisor" className="text-primary font-medium">Email</a>
                    </div>
                  </div>
                  <div className="p-3 rounded border">
                    <p className="font-semibold">Karai</p>
                    <p className="text-sm text-gray-600">Supervisor</p>
                    <div className="mt-2 flex items-center space-x-3">
                      <a href="tel:+254758578092" aria-label="Call Karai supervisor at +254 758 578 092" className="text-primary font-medium">Call</a>
                      <a href="mailto:supervisor-karai@kikuyuwater.co.ke" aria-label="Email Karai supervisor" className="text-primary font-medium">Email</a>
                    </div>
                  </div>
                  <div className="p-3 rounded border">
                    <p className="font-semibold">Wangige</p>
                    <p className="text-sm text-gray-600">Supervisor</p>
                    <div className="mt-2 flex items-center space-x-3">
                      <a href="tel:+254758578093" aria-label="Call Wangige supervisor at +254 758 578 093" className="text-primary font-medium">Call</a>
                      <a href="mailto:supervisor-wangige@kikuyuwater.co.ke" aria-label="Email Wangige supervisor" className="text-primary font-medium">Email</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-right">
                  <button className="text-sm text-gray-600 underline" onClick={() => setShowSupervisors(false)}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
