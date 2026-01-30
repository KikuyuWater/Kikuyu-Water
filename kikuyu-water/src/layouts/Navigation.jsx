import React, { useState } from "react";
import logo from "../kikuyu water logo.jpg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="header"
      className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4 lg:py-5">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 min-w-0 hover:opacity-80 transition">
            <img
              src={logo}
              alt="Kikuyu Water logo"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 object-contain"
            />
            <div className="leading-tight min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                Kikuyu Water Company
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600">
                KUBORESHA HUDUMA YA MAJI
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap">
            <a
              href="/"
              className="text-sm xl:text-base text-gray-700 hover:text-primary transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm xl:text-base text-gray-700 hover:text-primary transition"
            >
              About
            </a>
            <a
              href="/service"
              className="text-sm xl:text-base text-gray-700 hover:text-primary transition"
            >
              Services
            </a>
            <a
              href="/tarrif"
              className="text-sm xl:text-base text-gray-700 hover:text-primary transition"
            >
              Tariffs
            </a>
            <a
              href="/departments"
              className="text-sm xl:text-base text-gray-700 hover:text-primary transition"
            >
              Departments
            </a>
            <a
              href="/projects"
              className="text-sm xl:text-base text-gray-700 hover:text-primary transition"
            >
              Projects
            </a>
            <a
              href="/publications"
              className="text-sm xl:text-base text-gray-700 hover:text-primary transition"
            >
              Publications
            </a>
            {/* <a href="/" className="text-gray-700 hover:text-primary transition">
              Media
            </a> */}
            {/* <a href="/" className="text-gray-700 hover:text-primary transition">
              FAQs
            </a> */}
          </nav>

          {/* Customer Portal & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="/customer-portal"
              className="hidden lg:inline-block bg-primary text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-lg font-bold hover:bg-blue-700 transition text-sm xl:text-base whitespace-nowrap">
              Customer Portal
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl sm:text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="/"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-primary/10 transition py-3 px-4 rounded font-semibold"
              >
                Home
              </a>
              <a
                href="/about"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-primary/10 transition py-3 px-4 rounded font-semibold"
              >
                About
              </a>
              <a
                href="/service"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-primary/10 transition py-3 px-4 rounded font-semibold"
              >
                Services
              </a>
              <a
                href="/tarrif"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-primary/10 transition py-3 px-4 rounded font-semibold"
              >
                Tariffs
              </a>
              <a
                href="/departments"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-primary/10 transition py-3 px-4 rounded font-semibold"
              >
                Departments
              </a>
              <a
                href="/projects"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-primary/10 transition py-3 px-4 rounded font-semibold"
              >
                Projects
              </a>
              <a
                href="/publications"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-primary/10 transition py-3 px-4 rounded font-semibold"
              >
                Publications
              </a>
              <a
                href="/customer-portal"
                onClick={toggleMobileMenu}
                className="bg-primary text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition text-center"
              >
                Customer Portal
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
