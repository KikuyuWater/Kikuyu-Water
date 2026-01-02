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
              Serving the Kikuyu Community with Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kikuyu Water and Sewerage Company is a public utility mandated to
              provide clean water and sewerage services to residents and
              businesses in Kikuyu and surrounding areas. Established in 2003,
              we have grown to become one of the most reliable water service
              providers in the region.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our commitment extends beyond mere service delivery. We are
              dedicated to sustainable water resource management, environmental
              conservation, and community empowerment through education and
              engagement programs.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Regulated by the Water Services Regulatory Board (WASREB) and
              working in close partnership with Kiambu County Government, we
              uphold the highest standards of service quality, transparency, and
              accountability in all our operations.
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
