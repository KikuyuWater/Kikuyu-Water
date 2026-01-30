const ServiceAreaSection = () => {
  return (
    <section id="service-area" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-bold text-sm">COVERAGE AREA</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Our Service Area
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map Section */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-[300px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.713187839685!2d36.63087!3d-1.2501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f7e1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="kiwaco Service Area Map"
              ></iframe>
              
              {/* Legend Overlay */}
              <div className="absolute bottom-2 right-2 bg-white/95 rounded-lg p-2 shadow-md text-xs max-w-[180px]">
                <div className="font-semibold text-gray-800 mb-1.5 text-[10px]">Service Area</div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-1 bg-blue-600"></div>
                  <span className="text-gray-700">Kikuyu Sub-County</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-1 bg-blue-600"></div>
                  <span className="text-gray-700">Kabete Sub-County</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-green-600"></div>
                  <span className="text-gray-700">10 Wards</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-primary text-white">
              <div className="flex items-center">
                <i className="fa-solid fa-map-location-dot text-2xl mr-3"></i>
                <div>
                  <h3 className="text-lg font-bold mb-0.5">Service Coverage</h3>
                  <p className="text-xs opacity-90">Kikuyu & Kabete Sub-Counties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Administrative Coverage
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              kiwaco serves Kikuyu and Kabete Sub-Counties, covering ten administrative 
              wards with a total projected population of <strong className="text-primary">436,232 people</strong> based 
              on the 2019 census. Our service area includes the wards of <strong>Kikuyu</strong> (58,421), 
              <strong> Kinoo</strong> (52,389), <strong>Kabete</strong> (45,678), <strong>Uthiru</strong> (62,145), 
              <strong> Muguga</strong> (38,234), <strong>Nyadhuna</strong> (41,567), <strong>Karai</strong> (35,892), 
              <strong> Nyathuna</strong> (33,456), <strong>Sigona</strong> (34,789), and <strong>Gitaru</strong> (33,661).
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              The Company currently serves approximately <strong className="text-primary">240,900 residents</strong>, 
              translating to an overall water service coverage of <strong className="text-primary">55 percent</strong>. 
              This represents a significant portion of the population, with ongoing efforts to expand coverage 
              and improve service delivery to underserved areas within our jurisdiction.
            </p>
            
            {/* Statistics */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-primary/5 rounded-lg p-4 text-center border border-primary/20">
                <i className="fa-solid fa-users text-primary text-2xl mb-2"></i>
                <p className="text-2xl font-black text-gray-900 mb-0.5">436,232</p>
                <p className="text-xs text-gray-600">Total Population</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                <i className="fa-solid fa-percent text-blue-600 text-2xl mb-2"></i>
                <p className="text-2xl font-black text-gray-900 mb-0.5">55%</p>
                <p className="text-xs text-gray-600">Service Coverage</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                <i className="fa-solid fa-map-marked text-green-600 text-2xl mb-2"></i>
                <p className="text-2xl font-black text-gray-900 mb-0.5">10</p>
                <p className="text-xs text-gray-600">Wards Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
