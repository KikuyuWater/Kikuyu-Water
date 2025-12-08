const Header = () => {
  return (
    <header
      id="header"
      className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <i className="fa-solid fa-droplet text-primary text-3xl mr-3"></i>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Kikuyu Water & Sewerage
                </h1>
                <p className="text-xs text-gray-600">
                  Clean Water, Healthy Community
                </p>
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
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
            <a href="/" className="text-gray-700 hover:text-primary transition">
              Contact
            </a>
          </nav>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition">
            Customer Portal
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
