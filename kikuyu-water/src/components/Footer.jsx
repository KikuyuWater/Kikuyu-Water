const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <i className="fa-solid fa-droplet text-primary text-2xl mr-3"></i>
              <div>
                <h3 className="text-lg font-bold">Kikuyu Water</h3>
                <p className="text-xs text-gray-400">& Sewerage Company</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing clean water and reliable sewerage services to the Kikuyu
              community since 2003.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="/"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="/"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Tariffs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Tenders
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Customer Portal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Apply for Connection
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Pay Bill
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Report Issue
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-primary mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-400">Kikuyu Town</p>
                  <p className="text-gray-400">Kiambu County, Kenya</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-phone text-primary mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-400">0800 724 724</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-envelope text-primary mr-3 mt-1"></i>
                <p className="text-gray-400">info@kikuyuwater.co.ke</p>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-clock text-primary mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-400">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-400 text-sm">
                    Sat: 8:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Kikuyu Water and Sewerage Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/"
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Terms of Service
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
