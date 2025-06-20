// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/">Bluestock</Link>
        </div>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
          
          <Link to="/IPOList" className="hover:text-gray-200 transition">IPO List</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-gray-200">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-gray-200">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-gray-200">Contact</Link>
          
          <Link to="/IPOList" onClick={() => setMenuOpen(false)} className="block hover:text-gray-200">IPO List</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
