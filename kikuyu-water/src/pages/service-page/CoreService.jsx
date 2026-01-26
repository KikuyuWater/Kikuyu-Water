import React, { useState } from "react";

const CoreService = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const handleCall = (number, name) => {
    try {
      const confirmCall = window.confirm(`Call ${name} at ${number}?`);
      if (confirmCall) {
        // remove spaces for tel: link
        const tel = `tel:${number.replace(/\s+/g, '')}`;
        window.location.href = tel;
      }
    } catch (e) {
      // fallback: just navigate to tel link
      window.location.href = `tel:${number}`;
    }
  };

  const services = [
    {
      id: 'new-water-connection',
      icon: 'fa-plug',
      color: 'primary',
      colorClass: 'blue',
      title: 'New Water Connection',
      description: 'Apply online for domestic or commercial water connection. Get connected to our reliable water supply network with a streamlined application process.',
      features: [
        'Online application portal',
        'Fast approval (7-14 days)',
        'Professional installation',
        'Flexible payment plans'
      ],
      buttonText: 'Apply Now',
      buttonColor: 'bg-primary hover:bg-primary/90',
      download: { href: '/documents/New_Water_Connection_Form.pdf', filename: 'New_Water_Connection_Form.pdf' }
    },
    {
      id: 'sewer-connection',
      icon: 'fa-toilet',
      color: 'green-500',
      colorClass: 'green',
      title: 'Sewer Connection',
      description: 'Connect to our modern sewerage system for proper wastewater management. Ensure environmental compliance and public health safety.',
      features: [
        'Site inspection & assessment',
        'Professional installation',
        'Compliance certification',
        'Ongoing maintenance support'
      ],
      call: { name: 'Mr Macharia', number: '+254 712 692 965' },
      buttonText: 'Call Mr Macharia',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'exhauster-services',
      icon: 'fa-truck-ramp-box',
      color: 'orange-500',
      colorClass: 'orange',
      title: 'Exhauster Services',
      description: 'Professional septic tank and pit emptying services. Rapid response for domestic and commercial premises.',
      features: [
        'Septic tank emptying',
        'Scheduled desludging',
        'Emergency response',
        'Environmentally safe disposal'
      ],
      pricing: { label: 'Service Availability:', value: 'On Request', note: 'Call to schedule and get a quote' },
      call: { name: 'Mr Kamau', number: '+254726113280' },
      buttonText: 'Call Mr Kamau',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  return (
    <section id="main-services-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Core Services
          </h2>
          <p className="text-xl text-gray-600">
            Essential water and sewerage services for our community
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-${service.color} p-8`}
            >
              <div className={`bg-${service.color}/10 w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                <i className={`fa-solid ${service.icon} text-${service.color} text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <i className={`fa-solid fa-check-circle text-${service.color} mr-3 mt-1`}></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              {service.pricing && (
                <div className="bg-neutral rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-bold">{service.pricing.label}</span>
                    <span className={`text-${service.color} font-black text-lg`}>
                      {service.pricing.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{service.pricing.note}</p>
                </div>
              )}
              {service.call ? (
                <button onClick={() => handleCall(service.call.number, service.call.name)} className={`w-full ${service.buttonColor} text-white py-3.5 rounded-lg font-bold transition shadow-lg`}>
                  {service.buttonText}
                </button>
              ) : service.download ? (
                <a
                  href={service.download.href}
                  download={service.download.filename}
                  className={`block w-full ${service.buttonColor} text-white py-3.5 rounded-lg font-bold transition shadow-lg text-center`}
                >
                  {service.buttonText}
                </a>
              ) : (
                <button className={`w-full ${service.buttonColor} text-white py-3.5 rounded-lg font-bold transition shadow-lg`}>
                  {service.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Mobile List View with Dropdowns */}
        <div className="md:hidden space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl shadow-lg border-l-4 border-${service.color} overflow-hidden`}
            >
              {/* Collapsed Header */}
              <button
                onClick={() => toggleService(service.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className={`bg-${service.color}/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`fa-solid ${service.icon} text-${service.color} text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <i className={`fa-solid ${expandedService === service.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400`}></i>
              </button>

              {/* Expanded Content */}
              {expandedService === service.id && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 mt-4 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <i className={`fa-solid fa-check-circle text-${service.color} mr-2 mt-0.5 text-sm`}></i>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.pricing && (
                    <div className="bg-neutral rounded-lg p-3 mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-700 font-bold">{service.pricing.label}</span>
                        <span className={`text-${service.color} font-black text-base`}>
                          {service.pricing.value}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{service.pricing.note}</p>
                    </div>
                  )}
                  {service.call ? (
                    <button onClick={() => handleCall(service.call.number, service.call.name)} className={`w-full ${service.buttonColor} text-white py-3 rounded-lg font-bold transition shadow-lg`}>
                      {service.buttonText}
                    </button>
                  ) : service.download ? (
                    <a
                      href={service.download.href}
                      download={service.download.filename}
                      className={`block w-full ${service.buttonColor} text-white py-3 rounded-lg font-bold transition shadow-lg text-center`}
                    >
                      {service.buttonText}
                    </a>
                  ) : (
                    <button className={`w-full ${service.buttonColor} text-white py-3 rounded-lg font-bold transition shadow-lg`}>
                      {service.buttonText}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreService;
