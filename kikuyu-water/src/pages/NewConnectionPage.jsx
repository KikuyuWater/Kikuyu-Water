import React from "react";
import applicationForm from "../assets/department-heads/New Connection Application  Form.pdf";
import Footer from "../layouts/Footer";

const NewConnectionPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold">NEW WATER CONNECTION</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Apply for New Water Connection
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get connected to our reliable water supply network. Download the
              application form and see the requirements below.
            </p>
            <a
              href={applicationForm}
              download="New Connection Application Form.pdf"
              className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              <i className="fa-solid fa-download mr-2"></i>
              Download Application Form
            </a>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Application Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Please prepare the following documents based on your applicant
              category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Requirements for Individuals */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 border-t-4 border-primary">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-user text-primary text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                For Individuals
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-primary text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    A Copy of Your National Identification Card (ID)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-primary text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    A Copy of Your PIN Certificate
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-primary text-xs"></i>
                  </div>
                  <span className="text-gray-700">A Copy of the Title Deed</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-primary text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    Duly filled application form
                  </span>
                </li>
              </ul>
            </div>

            {/* Requirements for Companies & Institutions */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600">
              <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-building text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                For Companies & Institutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    Copy of certificate of incorporation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    Copy of Your PIN Certificate
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">A Copy of Title deed</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    Duly filled application form
                  </span>
                </li>
              </ul>
            </div>

            {/* Change of Tenancy Requirements */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-600">
              <div className="bg-purple-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-home text-purple-600 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Change of Tenancy
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-purple-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    A Copy of National Identification Card (ID)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-purple-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">A copy of PIN Certificate</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-purple-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    Introduction Letter from Agent/Landlord
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-purple-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700">
                    Duly filled Application form
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              New Connection Process
            </h2>
            <p className="text-xl text-gray-600">
              Follow these steps after submitting your application and making payment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Process Steps */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>

              {/* Step 1 */}
              <div className="relative flex items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg">
                  1
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Application Submission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upon site visit or customer advice from the person in charge
                    of new connections, the customer shall make an application
                    for a new water connection by filling in the new water
                    connection application form.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg">
                  2
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Payment & Recommendation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upon payment, the person in charge of new connections shall
                    recommend approval of the connection. The Commercial Manager
                    shall verify payment and recommend approval and authorization
                    of connection.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg">
                  3
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Authorization
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Commercial Manager shall authorize the connection.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg">
                  4
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Physical Installation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The person in charge of new connections shall deploy an
                    artisan to execute the works by physically installing the
                    meter, giving the customer the account number, and bringing
                    back to the office details of the connection.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg">
                  5
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Account Opening
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The revenue officer shall open the account and forward the
                    details to the Audit department.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg">
                  6
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Audit Verification
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Auditor verifies the payments, accounts, and the meter
                    number.
                  </p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="relative flex items-start mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg">
                  7
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Account Activation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Auditor forwards the details to the Billing Office for
                    recording and activation of the accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our customer service team is ready to assist you with your new
              connection application
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="tel:+254728578098"
                className="flex items-center text-lg hover:text-blue-200 transition"
              >
                <i className="fa-solid fa-phone text-2xl mr-3"></i>
                <div className="text-left">
                  <p className="text-sm text-blue-200">Call Us</p>
                  <p className="font-bold">+254 728 578 098</p>
                </div>
              </a>
              <a
                href="mailto:info@kikuyuwater.co.ke"
                className="flex items-center text-lg hover:text-blue-200 transition"
              >
                <i className="fa-solid fa-envelope text-2xl mr-3"></i>
                <div className="text-left">
                  <p className="text-sm text-blue-200">Email Us</p>
                  <p className="font-bold">info@kikuyuwater.co.ke</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewConnectionPage;
