const CustomerPortal = () => {
  return (
    <section
      id="customer-portal-promo"
      className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 leading-tight">
              Manage Your Account Online
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Access your customer portal for 24/7 account management, bill
              payments, service requests, and more.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-file-invoice-dollar text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">View & Pay Bills</h4>
                  <p className="text-blue-100">
                    Access billing history and make secure online payments
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-chart-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Track Consumption</h4>
                  <p className="text-blue-100">
                    Monitor your water usage patterns and trends
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-headset text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Submit Requests</h4>
                  <p className="text-blue-100">
                    Report issues and track service request status
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Access Portal
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
                Register Account
              </button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Portal Features</h3>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <i className="fa-solid fa-mobile-screen text-3xl mr-4"></i>
                <div>
                  <p className="font-bold">Mobile Friendly</p>
                  <p className="text-sm text-blue-100">
                    Access from any device
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <i className="fa-solid fa-lock text-3xl mr-4"></i>
                <div>
                  <p className="font-bold">Secure & Private</p>
                  <p className="text-sm text-blue-100">Bank-level encryption</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <i className="fa-solid fa-bell text-3xl mr-4"></i>
                <div>
                  <p className="font-bold">Smart Notifications</p>
                  <p className="text-sm text-blue-100">Get timely alerts</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <i className="fa-solid fa-download text-3xl mr-4"></i>
                <div>
                  <p className="font-bold">Download Statements</p>
                  <p className="text-sm text-blue-100">
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
