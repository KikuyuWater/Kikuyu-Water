import managingDirectorPhoto from "../../assets/department-heads/Jane Murage, Managing Director.jpg";

const ManagingDirectorMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
          <span className="text-primary font-bold text-sm">LEADERSHIP</span>
        </div>

        <h2 className="text-4xl font-black text-gray-900 mb-12">
          Message from the Managing Director
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={managingDirectorPhoto}
                alt="Jane Murage, Managing Director"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jane Murage</h3>
              <p className="text-lg text-primary font-semibold">Managing Director</p>
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Kikuyu Water and Sewerage Company. As Managing Director, I am 
                proud to lead an organization committed to delivering reliable, safe, 
                and affordable water services to the Kikuyu and Kabete communities.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Water is a fundamental human right, and our mission is to ensure that 
                every household and business within our service area has access to clean, 
                quality water. Over the years, KIWASCO has made significant investments 
                in infrastructure expansion, capacity building, and operational excellence 
                to meet the growing demands of our customers.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We face challenges common to many water utilities in Kenya, including 
                water source variability, aging infrastructure, and the need for continuous 
                investment. However, our dedicated team of professionals, supported by our 
                Board of Directors and stakeholders, remains committed to addressing these 
                challenges head-on through innovation, strategic planning, and sustainable 
                practices.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to be a model water utility that delivers excellent service, 
                maintains financial sustainability, and contributes positively to the social 
                and economic development of the region. We invite all our stakeholders—customers, 
                employees, suppliers, and partners—to join us on this journey toward water 
                security and excellence.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                Thank you for your continued support and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingDirectorMessage;
