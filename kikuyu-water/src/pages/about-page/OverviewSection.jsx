const OverviewSection = () => {
  return (
    <section id="company-overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-bold text-sm">EXECUTIVE SUMMARY</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Serving the Kikuyu Community with Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kikuyu Water Company Limited (KIWACO) provides water services within 
              Kikuyu and Kabete Sub-Counties, covering ten administrative wards 
              with a total projected population of 436,232 people, based on the 
              2019 census. The Company currently serves approximately 240,900 
              residents, translating to an overall water service coverage of 55 
              percent.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The utility relies exclusively on groundwater sources, operating 43 
              boreholes, of which 31 are active, while several have been decommissioned 
              due to low yield and poor water quality. KIWACO has an installed design 
              production capacity of 17,200 m³ per day, with an additional 6,120 m³ per 
              day expected upon completion of ongoing borehole and network expansion 
              projects. At present, the Company produces an average of 11,000 m³ 
              per day, resulting in a persistent supply shortfall.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The water supply infrastructure comprises approximately 33 kilometres
               of transmission pipelines and 560 kilometres of distribution networks, 
               supported by 41 storage tanks with a total capacity of 5,108 m³, of 
               which 3,950 m³ is usable storage. The system serves 18,836 registered 
               consumer connections, including 10,764 active connections, with 
               disconnections largely attributable to historical water shortages. 
               Reconnection efforts are ongoing as supply capacity improves.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To mitigate the supply deficit, water provision is partially supplemented through Community Water Projects, estimated at 25 schemes, alongside private boreholes
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
