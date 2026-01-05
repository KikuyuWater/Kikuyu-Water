const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <i className="fa-solid fa-droplet text-primary text-2xl sm:text-3xl mr-2 sm:mr-3"></i>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Kikuyu Water & Sewerage Company</h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  & Sewerage Company
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Providing clean water and reliable sewerage services to Kenyans
              community since 2004.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="/"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <i className="fa-brands fa-facebook-f text-xs sm:text-base"></i>
              </a>
              <a
                href="/"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <i className="fa-brands fa-twitter text-xs sm:text-base"></i>
              </a>
              <a
                href="/"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <i className="fa-brands fa-instagram text-xs sm:text-base"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {[
                "About Us",
                "Our Services",
                "Tariffs",
                "Departments",
                "Careers",
                "Tenders",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Customer Service
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {[
                "Customer Portal",
                "Apply for Connection",
                "Pay Bill",
                "Report Issue",
                "FAQs",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Contact Information
            </h4>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-primary mr-2 sm:mr-3 mt-1"></i>
                <div>
                  <p>Head Office: Kikuyu Town</p>
                  <p>Kiambu County, Kenya</p>
                  <a
                    href="https://maps.app.goo.gl/zDMBWXx73o3dr4727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1.5 bg-primary text-white text-xs rounded hover:bg-blue-700 transition"
                  >
                    <i className="fa-solid fa-location-dot mr-1"></i>
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-phone text-primary mr-2 sm:mr-3 mt-1"></i>
                <div>
                  <p>+254728578098</p>
                  <p className="text-xs sm:text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-envelope text-primary mr-2 sm:mr-3 mt-1"></i>
                <p>kikuyuwater@yahoo.com</p>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-clock text-primary mr-2 sm:mr-3 mt-1"></i>
                <div>
                  <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-xs sm:text-sm"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Kikuyu Water and Sewerage Company. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-6 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
                <a
                  key={link}
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
