import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerPortalPage() {
  const navigate = useNavigate();

  const handleGetApp = () => {
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=app.wonderkid.maji_safi&hl=en';
    window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back
          </button>
          <div className="bg-primary/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <i className="fa-solid fa-mobile-screen-button text-primary text-5xl"></i>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            kiwaco Customer Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download our mobile app for convenient water service management at your fingertips
          </p>
        </div>

        {/* Get App Button */}
        <div className="text-center mb-16">
          <button
            onClick={handleGetApp}
            className="bg-gradient-to-r from-primary to-blue-700 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <i className="fa-brands fa-google-play text-3xl"></i>
            <span>Get the App</span>
            <i className="fa-solid fa-download"></i>
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Available on Google Play Store
          </p>
        </div>

        {/* USSD Code Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl shadow-2xl p-8 sm:p-10 mb-16 text-white text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center">
              <i className="fa-solid fa-phone-volume text-4xl"></i>
            </div>
          </div>
          <h2 className="text-3xl font-black mb-3">
            Quick USSD Access
          </h2>
          <p className="text-lg mb-6 text-green-50">
            Do you have an account registered ?
          </p>
          <p className="text-sm mb-6 text-green-100">
            Try our USSD to know your account status*
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/20">
            <p className="text-sm mb-3 text-green-100">Dial this code:</p>
            <div className="bg-white text-green-600 rounded-xl py-4 px-6 inline-block">
              <span className="text-3xl sm:text-4xl font-black tracking-wider">*423*002#</span>
            </div>
          </div>
          <p className="text-sm text-green-100 mt-6">
            <i className="fa-solid fa-info-circle mr-2"></i>
            No internet connection required
          </p>
        </div>

        {/* App Features Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-t-4 border-primary">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              App Features
            </h2>
            <p className="text-gray-600 text-lg">
              The app provides customers with a convenient digital platform that enables them to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-money-bill-wave text-primary text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Account Balance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    View current balances across all their registered accounts
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-file-invoice text-green-600 text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Free Statements
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access account statements for any selected period at no cost
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-droplet text-purple-600 text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Water Quality Reports
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Report water quality concerns directly to the utility
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-truck text-orange-600 text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Exhauster Services
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Request exhauster services through a transparent live bidding system
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Why Choose Our Mobile App?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fa-solid fa-clock text-primary text-xl"></i>
                </div>
                <p className="font-semibold text-gray-900">24/7 Access</p>
                <p className="text-sm text-gray-600">Anytime, anywhere</p>
              </div>
              <div className="p-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fa-solid fa-shield-halved text-green-600 text-xl"></i>
                </div>
                <p className="font-semibold text-gray-900">Secure</p>
                <p className="text-sm text-gray-600">Protected data</p>
              </div>
              <div className="p-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fa-solid fa-bolt text-purple-600 text-xl"></i>
                </div>
                <p className="font-semibold text-gray-900">Fast & Easy</p>
                <p className="text-sm text-gray-600">Quick transactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Need help? Contact our customer support team
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
            <a href="tel:+254728578089" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
              <i className="fa-solid fa-phone mr-2"></i>
              +254 728 578 089
            </a>
            <a href="mailto:kikuyuwater@yahoo.com" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
              <i className="fa-solid fa-envelope mr-2"></i>
              kikuyuwater@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
