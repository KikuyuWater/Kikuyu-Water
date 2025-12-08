const Partners = () => {
  return (
    <section id="partners-regulators" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Our Partners & Regulators
          </h2>
          <p className="text-xl text-gray-600">
            Working together to deliver quality services
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 items-center">
          <div
            id="partner-1"
            className="bg-neutral rounded-xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <i className="fa-solid fa-water text-primary text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900">WASREB</h4>
            <p className="text-sm text-gray-600 mt-2">
              Water Services Regulatory Board
            </p>
          </div>
          <div
            id="partner-2"
            className="bg-neutral rounded-xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <i className="fa-solid fa-landmark text-primary text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900">County Government</h4>
            <p className="text-sm text-gray-600 mt-2">Kiambu County</p>
          </div>
          <div
            id="partner-3"
            className="bg-neutral rounded-xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <i className="fa-solid fa-flask text-primary text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900">KEBS</h4>
            <p className="text-sm text-gray-600 mt-2">
              Kenya Bureau of Standards
            </p>
          </div>
          <div
            id="partner-4"
            className="bg-neutral rounded-xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <i className="fa-solid fa-leaf text-primary text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900">NEMA</h4>
            <p className="text-sm text-gray-600 mt-2">
              National Environment Authority
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
