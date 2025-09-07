// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-green-700 fixed top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl md:text-2xl">
            Eat Wise
          </Link>

          {/* Menu Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-green-200 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/tips"
              className="text-white hover:text-green-200 transition-colors"
            >
              Tips
            </Link>
            <Link
              to="/tracker"
              className="text-white hover:text-green-200 transition-colors"
            >
              Tracker
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
