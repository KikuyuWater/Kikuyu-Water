const QuickActions = () => {
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
              Apply for Connection
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
            <button class="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
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
            <button class="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
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
            <button class="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition">
              Report Issue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
