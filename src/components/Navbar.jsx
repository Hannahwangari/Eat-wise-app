import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // closes menu after clicking a link
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-[#098826]/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          Eat <span className="text-green-300">Wise</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#features" className="hover:text-green-300">Features</a>
          <a href="#about" className="hover:text-green-300">About</a>
          <a href="#contact" className="hover:text-green-300">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 text-white text-center py-6 space-y-4">
          <a href="#features" className="block hover:text-green-300" onClick={handleLinkClick}>Features</a>
          <a href="#about" className="block hover:text-green-300" onClick={handleLinkClick}>About</a>
          <a href="#contact" className="block hover:text-green-300" onClick={handleLinkClick}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
