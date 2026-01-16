import React, { useState } from 'react';

const Services = () => {
  const [openService, setOpenService] = useState(null);

  const supervisors = {
    Muguga: { name: 'Mr Kitheka', phone: '+254714370990', office: 'Muguga', coords: '-1.2480,36.6460' },
    Karai: { name: 'Mr Peter', phone: '+254722731026', office: 'Karai', coords: '-1.2100,36.6900' },
    Kikuyu: { name: 'Mr Wilfred', phone: '+254717684692', office: 'Kikuyu', coords: '-1.2196,36.6659' },
    Kabete: { name: 'Mr Ngatia', phone: '+254724705173', office: 'Kabete', coords: '-1.2460,36.6980' },
    // Wangige merged into Kabete
    // fallback / head office
    Head: { name: 'Head Office', phone: '+254728578098', office: 'Kikuyu Town', coords: '-1.2196,36.6659' },
  };

  const renderContactsFor = (serviceKey) => {
    // serviceKey: 'water' | 'sewer' | 'maintenance'
    let areas = [];
    if (serviceKey === 'water') areas = ['Karai', 'Kikuyu', 'Muguga', 'Kabete'];
    if (serviceKey === 'sewer') areas = ['Kikuyu'];
    if (serviceKey === 'maintenance') areas = ['Kikuyu', 'Karai', 'Muguga', 'Kabete'];

    return (
      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border">
        <h4 className="text-lg font-bold text-gray-900 mb-2">Service Availability & Contacts</h4>
        <p className="text-sm text-gray-600 mb-3">
          For inquiries on the availability of the services visit our offices or call:
        </p>
        <ul className="space-y-3">
          {areas.map((area) => {
            // For sewer we want Muguga and Kikuyu to share the same contact (Mr Wilfred)
            if (serviceKey === 'sewer') {
              const shared = supervisors.Kikuyu || supervisors.Head;
              return (
                <li key={area} className="p-3 rounded border hover:bg-gray-50 transition">
                  <p className="font-semibold">{area}</p>
                  <p className="text-sm text-gray-600">Contact: {shared.name}</p>
                  <div className="mt-2 flex items-center space-x-3">
                    <a href={`tel:${shared.phone}`} className="text-primary font-medium">Call {shared.phone}</a>
                    <span className="text-xs text-gray-500">Office: {shared.office}</span>
                  </div>
                  {shared.coords && (
                    <div className="mt-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shared.coords)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm"
                      >
                        Get Directions
                      </a>
                    </div>
                  )}
                </li>
              );
            }

            // Muguga may not have a dedicated field supervisor in the map; fall back to Head
            const info = supervisors[area] || supervisors.Head;
            return (
              <li key={area} className="p-3 rounded border hover:bg-gray-50 transition">
                <p className="font-semibold">{area}</p>
                <p className="text-sm text-gray-600">Contact: {info.name}</p>
                <div className="mt-2 flex items-center space-x-3">
                  <a href={`tel:${info.phone}`} className="text-primary font-medium">Call {info.phone}</a>
                  <span className="text-xs text-gray-500">Office: {info.office}</span>
                </div>
                {info.coords && (
                  <div className="mt-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.coords)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-3 text-right">
          <button className="text-sm text-gray-600 underline" onClick={() => setOpenService(null)}>Close</button>
        </div>
      </div>
    );
  };

  return (
    <section id="services-overview" className="py-12 sm:py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive water and sewerage solutions tailored to meet the
            needs of our community
          </p>
        </div>

        {/* First Row: 3 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Water Supply */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-faucet text-primary text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Water Supply
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Clean, safe, and reliable water supply and sewerage to residential, commercial,
              and industrial customers throughout Kikuyu.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Safe drinking water</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Bulk water services</span>
              </li>
            </ul>
            <button
              onClick={() => setOpenService(openService === 'water' ? null : 'water')}
              className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base bg-transparent"
              aria-expanded={openService === 'water'}
            >
              Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>

            {openService === 'water' && renderContactsFor('water')}
          </div>

          {/* Sewerage Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-toilet text-primary text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Sewerage Services
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Modern sewerage infrastructure ensuring proper wastewater
              management and environmental protection.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Sewer connections</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Septic tank exhaustion</span>
              </li>
            </ul>
            <button
              onClick={() => setOpenService(openService === 'sewer' ? null : 'sewer')}
              className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base bg-transparent"
              aria-expanded={openService === 'sewer'}
            >
              Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>

            {openService === 'sewer' && renderContactsFor('sewer')}
          </div>

          {/* Maintenance & Repairs */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="fa-solid fa-tools text-primary text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Maintenance & Repairs
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Professional maintenance services to keep your water and sewer
              systems functioning optimally.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Leak detection & repair</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Meter installation</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="fa-solid fa-check-circle text-primary mr-2"></i>
                <span>Emergency repairs</span>
              </li>
            </ul>
            <button
              onClick={() => setOpenService(openService === 'maintenance' ? null : 'maintenance')}
              className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base bg-transparent"
              aria-expanded={openService === 'maintenance'}
            >
              Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>

            {openService === 'maintenance' && renderContactsFor('maintenance')}
          </div>
        </div>

        {/* Second Row: 2 Horizontal Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
        </div>
      </div>
    </section>
  );
};

export default Services;
