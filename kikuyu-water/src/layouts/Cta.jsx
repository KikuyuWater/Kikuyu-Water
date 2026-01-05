import './Cta.css';

const Cta = () => {
  const createRipple = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    const circle = document.createElement('span');
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    const x = clientX - rect.left - radius;
    const y = clientY - rect.top - radius;
    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.className = 'ripple';
    const existing = target.getElementsByClassName('ripple')[0];
    if (existing) existing.remove();
    target.appendChild(circle);
    setTimeout(() => { circle.remove(); }, 600);
  }

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
          <a href="tel:+254758578098" role="link" aria-label="Call Kikuyu Water at +254 758 578 098" className="flex flex-col items-center no-underline hover:underline relative overflow-hidden active:scale-95 active:opacity-80 transform transition duration-150" onMouseDown={createRipple} onTouchStart={createRipple}>
            <i className="fa-solid fa-phone text-3xl sm:text-4xl mb-2 sm:mb-3" aria-hidden="true"></i>
            <p className="font-bold mb-1 text-sm sm:text-base">Call Us</p>
            <span className="text-blue-100 text-sm sm:text-base">+254 758 578 098</span>
          </a>
          <a href="mailto:kikuyuwater@yahoo.com" role="link" aria-label="Email Kikuyu Water" className="flex flex-col items-center no-underline hover:underline relative overflow-hidden active:scale-95 active:opacity-80 transform transition duration-150" onMouseDown={createRipple} onTouchStart={createRipple}>
            <i className="fa-solid fa-envelope text-3xl sm:text-4xl mb-2 sm:mb-3" aria-hidden="true"></i>
            <p className="font-bold mb-1 text-sm sm:text-base">Email Us</p>
            <span className="text-blue-100 text-sm sm:text-base">kikuyuwater@yahoo.com</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=QM46%2BF8X%2C%20Ivory%20Towers%20Street%2C%20Rungiri"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            aria-label="Open Kikuyu Water location in Google Maps: QM46 plus F8X, Ivory Towers Street, Rungiri"
            className="flex flex-col items-center no-underline hover:underline relative overflow-hidden active:scale-95 active:opacity-80 transform transition duration-150"
            onMouseDown={createRipple}
            onTouchStart={createRipple}
          >
            <i className="fa-solid fa-map-marker-alt text-3xl sm:text-4xl mb-2 sm:mb-3" aria-hidden="true"></i>
            <p className="font-bold mb-1 text-sm sm:text-base">Visit Us</p>
            <span className="text-blue-100 text-sm sm:text-base">QM46+F8X, Ivory Towers Street, Rungiri</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
