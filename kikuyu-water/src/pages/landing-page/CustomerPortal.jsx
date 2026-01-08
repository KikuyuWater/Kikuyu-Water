const CustomerPortal = () => {
  const handleAppRedirect = () => {
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=app.wonderkid.maji_safi&hl=en';
    window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="customer-portal-promo"
      className="py-16 sm:py-20 bg-gradient-to-br from-primary to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 leading-tight">
              Manage Your Account Online
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Access your customer portal for 24/7 account management, bill
              payments, service requests, and more.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <i className="fa-solid fa-file-invoice-dollar text-2xl sm:text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-1">
                    View & Pay Bills
                  </h4>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Access billing history and make secure online payments
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <i className="fa-solid fa-chart-line text-2xl sm:text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-1">
                    Track Consumption
                  </h4>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Monitor your water usage patterns and trends
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <i className="fa-solid fa-headset text-2xl sm:text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-1">
                    Submit Requests
                  </h4>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Report issues and track service request status
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleAppRedirect}
                className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Access Portal
              </button>
              <button 
                onClick={handleAppRedirect}
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
                Register Account
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Portal Features
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center">
                <i className="fa-solid fa-mobile-screen text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0"></i>
                <div>
                  <p className="font-bold text-sm sm:text-base">
                    Mobile Friendly
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Access from any device
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center">
                <i className="fa-solid fa-lock text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0"></i>
                <div>
                  <p className="font-bold text-sm sm:text-base">
                    Secure & Private
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Bank-level encryption
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center">
                <i className="fa-solid fa-bell text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0"></i>
                <div>
                  <p className="font-bold text-sm sm:text-base">
                    Smart Notifications
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Get timely alerts
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center">
                <i className="fa-solid fa-download text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0"></i>
                <div>
                  <p className="font-bold text-sm sm:text-base">
                    Download Statements
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    PDF invoices & receipts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPortal;
