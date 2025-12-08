const Header = () => {
  return (
    <header
      id="header"
      className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <i className="fa-solid fa-droplet text-primary text-3xl sm:text-4xl mr-2 sm:mr-3"></i>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Kikuyu Water & Sewerage
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Clean Water, Healthy Community
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="/"
              className="text-primary font-bold border-b-2 border-primary pb-1"
            >
              Home
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              About
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              Services
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              Tariffs
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              Departments
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              Media
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              FAQs
            </a>
          </nav>

          {/* Customer Portal & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:inline-block bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold hover:bg-blue-700 transition text-sm sm:text-base">
              Customer Portal
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              aria-label="Open Menu"
            >
              <i className="fa-solid fa-bars text-xl sm:text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu (hidden by default, toggle with JS) */}
        <div
          className="lg:hidden sm:hidden md:hidden xl:hidden sx:hidden xs:hidden hidden"
          id="mobile-menu"
        >
          <nav className="flex flex-col space-y-2 mt-2">
            <a
              href="/"
              className="text-primary font-bold py-2 px-3 rounded hover:bg-primary/10 transition"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition py-2 px-3 rounded"
            >
              About
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition py-2 px-3 rounded"
            >
              Services
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition py-2 px-3 rounded"
            >
              Tariffs
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition py-2 px-3 rounded"
            >
              Departments
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition py-2 px-3 rounded"
            >
              Media
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition py-2 px-3 rounded"
            >
              FAQs
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition py-2 px-3 rounded"
            >
              Contact
            </a>
            <a
              href="/"
              className="bg-primary text-white py-2 px-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Customer Portal
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
