import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleApplyForConnection = () => {
    navigate('/new-connection');
  };

  const handleAppRedirect = () => {
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=app.wonderkid.maji_safi&hl=en';
    window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
  };

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
              since 2006.
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
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/service" },
                { label: "Tariffs", path: "/tarrif" },
                { label: "Departments", path: "/departments" },
                { label: "Gallery", path: "/gallery" },
                { label: "Careers", path: "/careers" },
                { label: "Tenders", path: "/tenders" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.label}
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
                { label: "Customer Portal", path: "/", onClick: handleAppRedirect },
                { label: "Apply for Connection", path: "/", onClick: handleApplyForConnection },
                { label: "Pay Bill", path: "/payment" },
                { label: "Report Issue", path: "/#report-issue" },
                { label: "Service Charter", path: "/charter" },
                { label: "FAQs", path: "/" },
                { label: "Contact Us", path: "/" },
              ].map((link) => (
                <li key={link.label}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-white transition text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.path}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  )}
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
                <i className="fa-brands fa-whatsapp text-primary mr-2 sm:mr-3 mt-1"></i>
                <a
                  href="https://wa.me/254728578098?text=Hello%20Kikuyu%20Water%2C%20I%20have%20a%20service%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  WhatsApp: +254 728 578 098
                </a>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-primary mr-2 sm:mr-3 mt-1"></i>
                <div>
                  <p>Head Office: Kikuyu Town</p>
                  <p>Kiambu County, Kenya</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('-1.2436313567256625,36.661594284695')}`}
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
                  <a
                    href="tel:+254728578098"
                    className="text-gray-300 hover:text-white transition font-semibold"
                  >
                    +254728578098
                  </a>
                  <p className="text-xs sm:text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-envelope text-primary mr-2 sm:mr-3 mt-1"></i>
                <a
                  href="mailto:kikuyuwater@yahoo.com"
                  className="text-gray-300 hover:text-white transition font-semibold"
                >
                  kikuyuwater@yahoo.com
                </a>
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

          {/* Branch Offices */}
          <div className="lg:col-span-2">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Branch Offices
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base">
              {[
                {
                  name: "Muguga Office",
                  coords: '-1.2480,36.6460'
                },
                {
                  name: "Karai Office",
                  coords: '-1.2100,36.6900'
                },
                {
                  name: "Kabete Office",
                  coords: '-1.2197950587077637,36.7147972033909'
                },
              ].map((office) => (
                <a
                  key={office.name}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.coords)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-gray-800 rounded text-gray-400 hover:text-white hover:bg-primary/20 transition flex items-center justify-center text-center"
                >
                  <div className="flex flex-col items-center">
                    <i className="fa-solid fa-location-dot text-primary mr-2 mb-1"></i>
                    <span>{office.name}</span>
                  </div>
                </a>
              ))}
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
