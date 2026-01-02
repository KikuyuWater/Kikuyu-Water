const OverviewSection = () => {
  return (
    <section id="company-overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-bold text-sm">WHO WE ARE</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Serving Kikuyu and Kabete with Quality Water Services
            </h2>
            <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
              <p>
                ─	Kikuyu Water Company Limited (KIWACO), established in 2006, is one of the eight water utilities in Kiambu County licensed by Water Sector Regulatory Board (WASREB) to provide quality and affordable water and sewerage services in Kikuyu and Kabete Sub-counties.
              </p>
              <p>
                ─	The company is fully owned by the County Government of Kiambu.
              </p>
              <p>
                ─	Its service area is approximately 250km² covering 10 wards incl. Nachu, Karai, Kikuyu, Kinoo, Sigona, Muguga, Gitaru, Kabete, Nyathuna and Uthiru.
              </p>
              <p>
                ─	Currently, there are about 436,232 people out of which nearly 240,900 people are served by utility which is about 55% of the population.
              </p>
              <p>
                ─	The 420,262 persons generate a daily water demand of 42,026m³/day against a daily supply of 11,000m³/day. This lead to a daily deficit of 31,026m³/day.
              </p>
              <p>
                ─	NB: This daily water supply of 11,000m³/day is not constant due to down times caused by power interruptions and mechanical breakdowns
              </p>
              <p>
                ─	The deficit in demand is met partly through the community water projects and Private boreholes. However, there is no verifiable data for these.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Download Company Profile
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                View Annual Report
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl overflow-hidden h-[500px]">
              <img
                className="w-full h-full object-cover opacity-90"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/921ee04888-0ff25509908c15c8fb4f.png"
                alt="modern water treatment facility with blue pipes and filtration systems, professional industrial photography"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-8 max-w-xs">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-award text-primary text-2xl"></i>
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">ISO 9001</p>
                  <p className="text-sm text-gray-600">Certified Since 2015</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Committed to quality management systems and continuous
                improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
