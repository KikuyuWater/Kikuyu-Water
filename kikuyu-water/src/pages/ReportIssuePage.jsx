import React from "react";
import Footer from "../layouts/Footer";

const ReportIssuePage = () => {
  // Google Form direct link
  const googleFormLink = "https://forms.gle/FSxCubaJSxXCvoQG8";
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black mb-4">Report an Issue</h1>
          <p className="text-xl text-white/90">
            Help us improve our services by reporting any issues you encounter
          </p>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <i className="fa-solid fa-exclamation-circle text-primary mr-3"></i>
                Report an Issue Anonymously
              </h2>
              <p className="text-gray-600 mb-6">
                Your feedback is important to us. You can report issues anonymously without revealing your identity.
              </p>

              {/* Direct Link Button */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg"
                >
                  <i className="fa-solid fa-external-link-alt mr-3"></i>
                  Open Report Form
                </a>
                <button
                  onClick={() => window.open(googleFormLink, 'report-form', 'width=800,height=900')}
                  className="inline-flex items-center bg-gray-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-700 transition text-lg"
                >
                  <i className="fa-solid fa-window-restore mr-3"></i>
                  Open in New Window
                </button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700">
                <i className="fa-solid fa-info-circle text-primary mr-2"></i>
                <span className="font-semibold">The form will open in a new tab/window.</span> Please fill it out completely and submit your report. All information is kept confidential.
              </p>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fa-solid fa-shield text-primary mr-2"></i>
                Anonymous
              </h3>
              <p className="text-gray-600">
                You can report issues completely anonymously without revealing your identity.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fa-solid fa-clock text-primary mr-2"></i>
                Quick Response
              </h3>
              <p className="text-gray-600">
                Our team reviews all reports and takes action within 24-48 hours.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fa-solid fa-check text-primary mr-2"></i>
                Confidential
              </h3>
              <p className="text-gray-600">
                All information is kept strictly confidential and handled by our support team.
              </p>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-900 font-semibold mb-2">
                  <i className="fa-solid fa-phone text-primary mr-2"></i>
                  Emergency Hotline
                </p>
                <a href="tel:+254728578098" className="text-primary hover:underline font-semibold">
                  +254 728 578 098
                </a>
                <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-2">
                  <i className="fa-brands fa-whatsapp text-primary mr-2"></i>
                  WhatsApp Support
                </p>
                <a 
                  href="https://wa.me/254728578098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Chat with us on WhatsApp
                </a>
                <p className="text-sm text-gray-600">Quick responses during business hours</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-2">
                  <i className="fa-solid fa-envelope text-primary mr-2"></i>
                  Email
                </p>
                <a href="mailto:info@kikuyuwater.co.ke" className="text-primary hover:underline font-semibold">
                  info@kikuyuwater.co.ke
                </a>
                <p className="text-sm text-gray-600">Response within 24 hours</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-2">
                  <i className="fa-solid fa-headset text-primary mr-2"></i>
                  Customer Service
                </p>
                <a href="/contact-us" className="text-primary hover:underline font-semibold">
                  Visit our Contact Page
                </a>
                <p className="text-sm text-gray-600">Business hours: Mon-Fri 8AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReportIssuePage;
