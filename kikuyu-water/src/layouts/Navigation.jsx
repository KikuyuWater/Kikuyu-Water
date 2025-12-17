import React from "react";
import logo from "../kikuyu water logo.jpg";

const Navigation = () => {
  return (
    <header
      id="header"
      className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Kikuyu Water logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-4 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                KIKUYU WATER AND SEWERAGE COMPANY
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                KUBORESHA HUDUMA YA MAJI
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition   "
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-primary transition"
            >
              About
            </a>
            <a
              href="/service"
              className="text-gray-700 hover:text-primary transition"
            >
              Services
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              Tariffs
            </a>
            <a href="/" className="text-gray-700 hover:text-primary transition">
              Departments
            </a>
            {/* <a href="/" className="text-gray-700 hover:text-primary transition">
              Media
            </a> */}
            {/* <a href="/" className="text-gray-700 hover:text-primary transition">
              FAQs
            </a> */}
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
              Service
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

export default Navigation;
