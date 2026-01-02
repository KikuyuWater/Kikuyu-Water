const ServiceAreaSection = () => {
  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-primary font-bold text-sm">COVERAGE AREA</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Our Service Area
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            KIWACO serves Kikuyu and Kabete Sub-Counties, covering ten administrative 
            wards with a population of over 436,000 residents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[500px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.42637567937!2d36.6556!3d-1.2501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f9d5e9c5c5d%3A0x7c5e5e5e5e5e5e5e!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KIWACO Service Area Map"
              ></iframe>
            </div>
            <div className="p-6 bg-primary text-white">
              <div className="flex items-center">
                <i className="fa-solid fa-map-location-dot text-3xl mr-4"></i>
                <div>
                  <h3 className="text-xl font-bold mb-1">Service Coverage</h3>
                  <p className="text-sm opacity-90">Kikuyu & Kabete Sub-Counties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Administrative Wards Served
            </h3>
            <div className="space-y-4">
              {[
                { name: "Kikuyu", population: "58,421" },
                { name: "Kinoo", population: "52,389" },
                { name: "Kabete", population: "45,678" },
                { name: "Uthiru", population: "62,145" },
                { name: "Muguga", population: "38,234" },
                { name: "Nyadhuna", population: "41,567" },
                { name: "Karai", population: "35,892" },
                { name: "Nyathuna", population: "33,456" },
                { name: "Sigona", population: "34,789" },
                { name: "Gitaru", population: "33,661" },
              ].map((ward, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <i className="fa-solid fa-location-dot text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{ward.name}</h4>
                      <p className="text-sm text-gray-600">Administrative Ward</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{ward.population}</p>
                    <p className="text-xs text-gray-600">Population</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-primary text-white rounded-lg p-6 text-center">
                <i className="fa-solid fa-users text-3xl mb-3"></i>
                <p className="text-3xl font-black mb-1">436,232</p>
                <p className="text-sm opacity-90">Total Population</p>
              </div>
              <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
                <i className="fa-solid fa-percent text-3xl mb-3"></i>
                <p className="text-3xl font-black mb-1">55%</p>
                <p className="text-sm opacity-90">Service Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
