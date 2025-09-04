import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            Eat Wise
          </div>

          {/* Hamburger button (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu (desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/tips" 
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Tips
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown menu (mobile) */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white hover:bg-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/tips"
            className="block px-3 py-2 rounded-md text-white hover:bg-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Tips
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
