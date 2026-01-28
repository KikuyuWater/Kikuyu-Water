import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();
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
            <button 
              onClick={() => navigate('/new-connection')}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
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
            <a href="/payment" className="block w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition text-center">
              Pay Bill
            </a>
          </div>

          {/* Card 3 */}
          <div id="report-issue" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 sm:p-8 border-t-4 border-orange-500">
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
                <ul className="space-y-3">
                  <li className="p-3 rounded border hover:bg-gray-50 transition">
                    <p className="font-semibold">Muguga</p>
                    <p className="text-sm text-gray-600">Supervisor Mr Kitheka</p>
                    <div className="mt-2 flex items-center space-x-3">
                      <a href="tel:+254714370990" aria-label="Call Muguga supervisor at +254 714 370 990" className="text-primary font-medium">Call</a>
                      <a href="mailto:kikuyuwater@yahoo.com?subject=[MUGUGA]%20Service%20Issue%20Report&amp;body=Office%20Location:%20Muguga" aria-label="Email Muguga supervisor" className="text-primary font-medium">Email</a>
                    </div>
                    <div className="mt-2">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('-1.2480,36.6460')}`} target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Get Directions</a>
                    </div>
                  </li>
                  <li className="p-3 rounded border hover:bg-gray-50 transition">
                    <p className="font-semibold">Karai</p>
                    <p className="text-sm text-gray-600">Supervisor Mr Peter</p>
                    <div className="mt-2 flex items-center space-x-3">
                      <a href="tel:+254722731026" aria-label="Call Karai supervisor at +254 722 731 026" className="text-primary font-medium">Call</a>
                      <a href="mailto:kikuyuwater@yahoo.com?subject=[KARAI]%20Service%20Issue%20Report&amp;body=Office%20Location:%20Karai" aria-label="Email Karai supervisor" className="text-primary font-medium">Email</a>
                    </div>
                    <div className="mt-2">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('-1.2100,36.6900')}`} target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Get Directions</a>
                    </div>
                  </li>
                  <li className="p-3 rounded border hover:bg-gray-50 transition">
                    <p className="font-semibold">Kikuyu</p>
                    <p className="text-sm text-gray-600">Supervisor Mr Wilfred </p>
                    <div className="mt-2 flex items-center space-x-3">
                      <a href="tel:+254717684692" aria-label="Call Kikuyu supervisor at +254 717 684 692" className="text-primary font-medium">Call</a>
                      <a href="mailto:kikuyuwater@yahoo.com?subject=[KIKUYU]%20Service%20Issue%20Report&amp;body=Office%20Location:%20Kikuyu" aria-label="Email Kikuyu supervisor" className="text-primary font-medium">Email</a>
                    </div>
                    <div className="mt-2">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('-1.2196,36.6659')}`} target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Get Directions</a>
                    </div>
                  </li>
                  <li className="p-3 rounded border hover:bg-gray-50 transition">
                    <p className="font-semibold">Kabete</p>
                    <p className="text-sm text-gray-600">Supervisor Mr Ngatia</p>
                    <div className="mt-2 flex items-center space-x-3">
                      <a href="tel:+254724705173" aria-label="Call Kabete supervisor at +254 724 705 173" className="text-primary font-medium">Call</a>
                      <a href="mailto:kikuyuwater@yahoo.com?subject=[KABETE]%20Service%20Issue%20Report&amp;body=Office%20Location:%20Kabete" aria-label="Email Kabete supervisor" className="text-primary font-medium">Email</a>
                    </div>
                    <div className="mt-2">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('-1.2197950587077637,36.7147972033909')}`} target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Get Directions</a>
                    </div>
                  </li>
                </ul>
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
