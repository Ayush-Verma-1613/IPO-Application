// src/components/Home.jsx
import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
      
      {/* Header / Hero Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 tracking-wide
        img-src=">
          Welcome to Bluestock 📊
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Track real-time IPO listings, view upcoming offers, and get detailed insights into every IPO on the market — all in one place.
        </p>
        <Link
          to="/IPOList"
          className="inline-block mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300"
        >
          View Live IPOs →
        </Link>
      </header>

      {/* Features Section (optional) */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid sm:grid-cols-2 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">📈 Real-Time Listings</h3>
          <p className="text-gray-600">Stay up to date with IPOs happening this month with accurate and fast data.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">📄 Full IPO Details</h3>
          <p className="text-gray-600">Explore price bands, share counts, exchanges, and more with our rich IPO detail pages.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-xl font-semibold mb-2">About Bluestock</h4>
          <p className="text-sm text-gray-200 max-w-xl mx-auto">
            Bluestock is your trusted IPO tracking portal. Built for investors, analysts, and curious minds, we provide live IPO calendars, insights, and more.
          </p>
          <p className="mt-3 text-xs text-purple-200">
            © {new Date().getFullYear()} Bluestock IPO Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
