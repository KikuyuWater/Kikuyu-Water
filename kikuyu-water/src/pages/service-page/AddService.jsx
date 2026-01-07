import React, { useState } from "react";

const AddService = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const additionalServices = [
    {
      id: 'water-bowser',
      icon: 'fa-truck',
      title: 'Water Bowser Services',
      description: 'Emergency water supply through our modern bowser fleet. Ideal for events, construction sites, or areas with temporary water shortages.',
      details: [
        { label: 'Capacity', value: '10,000 - 20,000L' },
        { label: 'Starting Price', value: 'KSh 3,000' }
      ],
      buttonText: 'Order Bowser'
    },
    {
      id: 'septic-tank',
      icon: 'fa-pump',
      title: 'Septic Tank Exhaustion',
      description: 'Professional septic tank cleaning and waste disposal services. Environmentally safe disposal at our treatment facilities.',
      details: [
        { label: 'Response Time', value: 'Same Day' },
        { label: 'Service Fee', value: 'KSh 5,000' }
      ],
      buttonText: 'Book Service'
    },
    {
      id: 'meter-installation',
      icon: 'fa-gauge',
      title: 'Meter Installation & Replacement',
      description: 'New meter installation, replacement of faulty meters, and meter calibration services. Certified and accurate metering devices.',
      details: [
        { label: 'Processing Time', value: '3-5 Days' },
        { label: 'Installation Fee', value: 'KSh 2,500' }
      ],
      buttonText: 'Request Service'
    },
    {
      id: 'leak-detection',
      icon: 'fa-wrench',
      title: 'Leak Detection & Repair',
      description: 'Advanced leak detection technology and professional repair services. Prevent water wastage and reduce your bills.',
      details: [
        { label: 'Response Time', value: '2-4 Hours' },
        { label: 'Inspection Fee', value: 'KSh 500' }
      ],
      buttonText: 'Report Leak'
    },
    {
      id: 'bulk-water',
      icon: 'fa-building',
      title: 'Bulk Water Supply',
      description: 'Large volume water supply for commercial and industrial customers. Competitive rates for bulk consumers with reliable delivery.',
      details: [
        { label: 'Minimum Order', value: '50,000L' },
        { label: 'Bulk Rate', value: 'Negotiable' }
      ],
      buttonText: 'Get Quote'
    },
    {
      id: 'conservation',
      icon: 'fa-graduation-cap',
      title: 'Water Conservation Programs',
      description: 'Educational programs and workshops on water conservation. Learn practical tips to reduce consumption and protect the environment.',
      details: [
        { label: 'Program Type', value: 'Free Workshops' },
        { label: 'Frequency', value: 'Monthly' }
      ],
      buttonText: 'Join Program'
    }
  ];

  return (
    <section id="additional-services" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Additional Services
          </h2>
          <p className="text-xl text-gray-600">
            Specialized services to meet all your water and sewerage needs
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 gap-8">
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {additionalServices.map((service) => (
            <div
              key={service.id}
              id={`additional-service-${service.id}`}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className={`fa-solid ${service.icon} text-primary text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="bg-neutral rounded-lg p-3">
                        <p className="text-sm text-gray-600 mb-1">{detail.label}</p>
                        <p className={`font-bold ${idx === 1 ? 'text-primary' : 'text-gray-900'}`}>
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile List View with Dropdowns */}
        <div className="md:hidden space-y-4">
          {additionalServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg border-l-4 border-primary overflow-hidden"
            >
              {/* Collapsed Header */}
              <button
                onClick={() => toggleService(service.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${service.icon} text-primary text-xl`}></i>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                </div>
                <i className={`fa-solid ${expandedService === service.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400`}></i>
              </button>

              {/* Expanded Content */}
              {expandedService === service.id && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 mt-4 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="bg-neutral rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">{detail.label}</p>
                        <p className={`text-sm font-bold ${idx === 1 ? 'text-primary' : 'text-gray-900'}`}>
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                    {service.buttonText}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddService;
