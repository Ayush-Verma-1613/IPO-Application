import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Active link styling helper
  const isActive = (path) =>
    location.pathname === path
      ? 'text-yellow-300 font-semibold'
      : 'hover:text-gray-200';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link to="/">Bluestock</Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className={`${isActive('/')} transition`}>Home</Link>
          <Link to="/about" className={`${isActive('/about')} transition`}>About</Link>
          <Link to="/contact" className={`${isActive('/contact')} transition`}>Contact</Link>
          <Link to="/IPOList" className={`${isActive('/IPOList')} transition`}>IPO List</Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-purple-700 px-4 py-4 space-y-2 text-lg shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className={`${isActive('/')} block`}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={`${isActive('/about')} block`}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`${isActive('/contact')} block`}>
            Contact
          </Link>
          <Link to="/IPOList" onClick={() => setMenuOpen(false)} className={`${isActive('/IPOList')} block`}>
            IPO List
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
