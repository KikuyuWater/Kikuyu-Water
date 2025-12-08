const Cta = () => {
  return (
    <section
      id="cta-section"
      className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied customers enjoying reliable water and
          sewerage services
        </p>
        <div className="flex items-center justify-center space-x-6">
          <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Apply for Connection
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
            Contact Support
          </button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <i className="fa-solid fa-phone text-3xl mb-3"></i>
            <p className="font-bold mb-1">Call Us</p>
            <p className="text-blue-100">0800 724 724</p>
          </div>
          <div>
            <i className="fa-solid fa-envelope text-3xl mb-3"></i>
            <p className="font-bold mb-1">Email Us</p>
            <p className="text-blue-100">info@kikuyuwater.co.ke</p>
          </div>
          <div>
            <i className="fa-solid fa-map-marker-alt text-3xl mb-3"></i>
            <p className="font-bold mb-1">Visit Us</p>
            <p className="text-blue-100">Kikuyu Town</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
