import React from 'react';
import { useNavigate } from 'react-router-dom';
import kcbLogo from '../assets/KCB bank logo.png';
import equityLogo from '../assets/Equity Bank Logo.png';
import familyBankLogo from '../assets/Family Bank Logo.jpg';
import postBankLogo from '../assets/Post Bank logo.png';

export default function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back
          </button>
          <div className="bg-green-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-mobile-screen text-green-600 text-4xl"></i>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Pay Your Water Bill via M-Pesa
          </h1>
          <p className="text-lg text-gray-600">
            Quick and secure payment using M-Pesa Paybill
          </p>
          <div className="mt-4">
            <a href="#kcb-bank" className="text-primary font-semibold hover:underline">View bank transfer details</a>
          </div>
        </div>

        {/* Paybill Number Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-t-4 border-green-500">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-lg mb-2">M-Pesa Paybill Number</p>
            <div className="bg-green-50 border-2 border-green-500 rounded-xl py-6 px-4">
              <p className="text-5xl font-black text-green-600">810100</p>
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 text-center">
              <i className="fa-solid fa-info-circle mr-1"></i>
              Use your Kikuyu Water customer account number as the account number
            </p>
          </div>
        </div>

        {/* USSD Quick Dial */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-8 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <i className="fa-solid fa-phone-flip mr-3"></i>
                Try Our USSD
              </h3>
              <p className="text-green-100 text-lg">Quick and easy dial access</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-green-100 mb-2">Dial on your phone:</p>
              <p className="text-4xl font-black">*483*002#</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <i className="fa-solid fa-list-check text-primary"></i>
            </span>
            How to Pay
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Select "Lipa na M-Pesa" on your phone
                </h3>
                <p className="text-gray-600">
                  Open the M-Pesa menu on your mobile phone
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Select "Pay Bill"
                </h3>
                <p className="text-gray-600">
                  Choose the Pay Bill option from the menu
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Enter Business Number
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mt-2 inline-block">
                  <p className="text-2xl font-bold text-gray-900">810100</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Enter Account Number
                </h3>
                <p className="text-gray-600">
                  Enter your Kikuyu Water customer account number as it appears on your bill.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Enter Amount
                </h3>
                <p className="text-gray-600">
                  Key in the amount to be paid.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                6
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Enter M-Pesa PIN and Confirm
                </h3>
                <p className="text-gray-600">
                  Enter your M-Pesa PIN to complete the transaction
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex items-start">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                7
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Receive Confirmation SMS
                </h3>
                <p className="text-gray-600">
                  You will receive an M-Pesa message confirming successful payment. Kindly keep this message for your records.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Transfer Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bank Transfer Options</h2>
          <p className="text-gray-600">You can also pay directly to our bank accounts</p>
        </div>

        {/* Bank Transfer Card (KCB) */}
        <div id="kcb-bank" className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-t-4 border-primary">
          <div className="flex items-center gap-4 mb-4">
            <img src={kcbLogo} alt="KCB" className="w-24 h-12 object-contain" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Kenya Commercial Bank (KCB)</h3>
              <p className="text-gray-600 text-sm">Direct bank transfer</p>
            </div>
          </div>
          <div className="bg-neutral p-3 rounded-lg">
            <p className="text-sm text-gray-700"><span className="font-bold">A/C 1:</span> 1102658111</p>
            <p className="text-sm text-gray-700"><span className="font-bold">Account Name:</span> Kikuyu Water Company Ltd</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">After payment, email payment confirmation and transaction code to info@kikuyuwater.co.ke for reconciliation.</p>
        </div>

        {/* Equity Bank */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-t-4 border-red-600">
          <div className="flex items-center gap-4 mb-4">
            <img src={equityLogo} alt="Equity Bank" className="w-24 h-12 object-contain" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Equity Bank</h3>
              <p className="text-gray-600 text-sm">Direct bank transfer</p>
            </div>
          </div>
          <div className="bg-neutral p-3 rounded-lg">
            <p className="text-sm text-gray-700"><span className="font-bold">Account No:</span> 0570292031078</p>
            <p className="text-sm text-gray-700"><span className="font-bold">Account Name:</span> Kikuyu Water Company Ltd</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">After payment, email payment confirmation and transaction code to info@kikuyuwater.co.ke for reconciliation.</p>
        </div>

        {/* Family Bank */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-t-4 border-orange-500">
          <div className="flex items-center gap-4 mb-4">
            <img src={familyBankLogo} alt="Family Bank" className="w-24 h-12 object-contain" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Family Bank</h3>
              <p className="text-gray-600 text-sm">Direct bank transfer</p>
            </div>
          </div>
          <div className="bg-neutral p-3 rounded-lg">
            <p className="text-sm text-gray-700"><span className="font-bold">Account No:</span> 102000004731</p>
            <p className="text-sm text-gray-700"><span className="font-bold">Account Name:</span> Kikuyu Water Company Ltd</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">After payment, email payment confirmation and transaction code to info@kikuyuwater.co.ke for reconciliation.</p>
        </div>

        {/* PostBank */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-t-4 border-yellow-500">
          <div className="flex items-center gap-4 mb-4">
            <img src={postBankLogo} alt="PostBank" className="w-24 h-12 object-contain" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">PostBank</h3>
              <p className="text-gray-600 text-sm">Direct bank transfer</p>
            </div>
          </div>
          <div className="bg-neutral p-3 rounded-lg">
            <p className="text-sm text-gray-700"><span className="font-bold">Account No:</span> 0744130007563</p>
            <p className="text-sm text-gray-700"><span className="font-bold">Account Name:</span> Kikuyu Water Company Ltd</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">After payment, email payment confirmation and transaction code to info@kikuyuwater.co.ke for reconciliation.</p>
        </div>



        {/* Additional Info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <i className="fa-solid fa-circle-info text-blue-600 text-xl mr-3 mt-1"></i>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important Information</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-blue-600 mr-2 mt-1"></i>
                  <span>Payments are processed instantly</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-blue-600 mr-2 mt-1"></i>
                  <span>Keep your M-Pesa confirmation message as proof of payment</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-blue-600 mr-2 mt-1"></i>
                  <span>For any payment issues, contact customer service with your M-Pesa transaction code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Need help with your payment?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+254728578093"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition"
            >
              <i className="fa-solid fa-phone mr-2"></i>
              Call Us: +254 728 578 093
            </a>
            <a
              href="mailto:kikuyuwater@yahoo.com"
              className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
