const Cta = () => {
  return (
    <section
      id="cta-section"
      className="py-16 sm:py-20 bg-gradient-to-br from-primary to-blue-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied customers enjoying reliable water and
          sewerage services
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
            Apply for Connection
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
            Contact Support
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-phone text-3xl sm:text-4xl mb-2 sm:mb-3"></i>
            <p className="font-bold mb-1 text-sm sm:text-base">Call Us</p>
            {/* Mobile: tap to call; Desktop: plain text */}
            <a href="tel:+254758578098" aria-label="Call Kikuyu Water" className="text-blue-100 text-sm sm:text-base block sm:hidden">
              +254 758 578 098
            </a>
            <p className="text-blue-100 text-sm sm:text-base hidden sm:block">
              +254 758 578 098
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-envelope text-3xl sm:text-4xl mb-2 sm:mb-3"></i>
            <p className="font-bold mb-1 text-sm sm:text-base">Email Us</p>
            <p className="text-blue-100 text-sm sm:text-base">
              info@kikuyuwater.co.ke
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-map-marker-alt text-3xl sm:text-4xl mb-2 sm:mb-3"></i>
            <p className="font-bold mb-1 text-sm sm:text-base">Visit Us</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=QM46%2BF8X%2C%20Ivory%20Towers%20Street%2C%20Rungiri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
              className="text-blue-100 text-sm sm:text-base hover:underline"
            >
              QM46+F8X, Ivory Towers Street, Rungiri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
