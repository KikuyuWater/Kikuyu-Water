import React from "react";

const Announcements = () => {
  return (
    <section id="latest-announcements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              Latest Announcements
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest news and service updates
            </p>
          </div>
          <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
            View All News
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div
            id="news-card-1"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100"
          >
            <div className="h-48 bg-gradient-to-br from-primary to-blue-800 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3bc7ae8d76-0e2297d7d7774b2ed85a.png"
                alt="modern water treatment plant facility with blue sky"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                  SERVICE UPDATE
                </span>
                <span className="text-gray-500 text-sm ml-auto">
                  December 5, 2024
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                New Water Treatment Plant Commissioned
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are pleased to announce the commissioning of our new
                state-of-the-art water treatment plant, increasing our capacity
                by 30% to serve more customers.
              </p>
              <a
                href="/"
                className="text-primary font-bold flex items-center hover:underline"
              >
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <div
            id="news-card-2"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100"
          >
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8c84372147-743baf9306ba3f05ba36.png"
                alt="water conservation awareness campaign community gathering"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                  CONSERVATION
                </span>
                <span className="text-gray-500 text-sm ml-auto">
                  December 1, 2024
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Water Conservation Campaign Launch
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Join our community-wide water conservation campaign. Learn
                practical tips to reduce water usage and protect our environment
                for future generations.
              </p>
              <a
                href="/"
                className="text-primary font-bold flex items-center hover:underline"
              >
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <div
            id="news-card-3"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100"
          >
            <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9b49cec583-726942c263ccccdda388.png"
                alt="scheduled maintenance work on water pipes infrastructure"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                  MAINTENANCE
                </span>
                <span className="text-gray-500 text-sm ml-auto">
                  November 28, 2024
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Scheduled Maintenance Notice
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Planned maintenance works in Zones A and B on December 15-16.
                Water supply will be temporarily interrupted. We apologize for
                any inconvenience.
              </p>
              <a
                href="/"
                className="text-primary font-bold flex items-center hover:underline"
              >
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
