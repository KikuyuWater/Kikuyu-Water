const HistorySection = () => {
  return (
    <section id="history-background" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-primary font-bold text-sm">OUR JOURNEY</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            History & Background
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than two decades of dedicated service to the Kikuyu community
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div id="history-item-1" className="flex items-start">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-xl mr-8 flex-shrink-0">
                2006
              </div>
              <div className="flex-1">
                <div className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Company Establishment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kikuyu Water Company Limited (KIWACO), established in 2006, is one of the 
                    eight water utilities in Kiambu County licensed by Water Sector Regulatory
                     Board (WASREB) to provide quality and affordable water and sewerage 
                     services in Kikuyu and Kabete Sub-counties.
                  </p>
                </div>
              </div>
            </div>

            <div id="history-item-2" className="flex items-start">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-xl mr-8 flex-shrink-0">
                2008
              </div>
              <div className="flex-1">
                <div className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Infrastructure Expansion
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Major infrastructure development phase began with the
                    drilling of boreholes and the extension of
                    the distribution network. This expansion enabled us to serve
                    additional households and businesses, significantly
                    improving water access in previously underserved areas.
                  </p>
                </div>
              </div>
            </div>

            <div id="history-item-3" className="flex items-start">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-xl mr-8 flex-shrink-0">
                2018
              </div>
              <div className="flex-1">
                <div className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Sewer System Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In 2018, KIWACO secured funds from the African Development Bank (AFDB) 
                    and the Kenya Urban Support Programme (KUSP) for constructing a sewer 
                    system in Kikuyu town, Kidfarmaco, Thogoto, and Kinoo areas. The 
                    projects became fully complete and Operational from July 2023
                  </p>
                </div>
              </div>
            </div>

            <div id="history-item-4" className="flex items-start">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-xl mr-8 flex-shrink-0">
                2023
              </div>
              <div className="flex-1">
                <div className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Digital Transformation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Launched our comprehensive digital customer portal, enabling
                    online bill payments, service applications, and real-time
                    customer support. Implementation of smart metering systems
                    and GIS mapping enhanced operational efficiency and customer
                    service delivery.
                  </p>
                </div>
              </div>
            </div>

            <div id="history-item-5" className="flex items-start">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-xl mr-8 flex-shrink-0">
                2024
              </div>
              <div className="flex-1">
                <div className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Sewerage Network Modernization
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Completed major sewerage infrastructure upgrade project,
                    including construction of modern wastewater treatment plant
                    and extension of sewer lines. This project significantly 
                    improved environmental protection and public health outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div id="history-item-6" className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-xl mr-8 flex-shrink-0">
                2025
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-500 hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Present Day Excellence
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Today, we proudly serve over 45,000 active connections
                    across 120 km² coverage area. Our commitment to innovation,
                    sustainability, and customer satisfaction continues to drive
                    our growth. We maintain a 99.8% water quality standard and
                    96% service reliability, positioning us as a benchmark
                    utility in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
