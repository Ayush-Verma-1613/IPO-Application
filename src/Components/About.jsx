// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-100 flex flex-col justify-between">
      
      {/* About Section */}
      <section className="px-6 py-20 text-center flex-1">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-700 mb-6 leading-tight">
          About <span className="text-indigo-700">Bluestock</span>
        </h1>

        <p className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-10">
          Bluestock is a modern IPO tracking platform crafted to deliver real-time updates, detailed company insights,
          and a beautiful, responsive experience for every kind of user — investor, analyst, or student.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto text-left text-base sm:text-lg text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">🚀 Real-Time IPO Listings</h3>
            <p>Stay up-to-date with accurate, live IPO data from trusted financial sources like Finnhub.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">📄 Detailed Company Profiles</h3>
            <p>Explore each IPO's symbol, price, issue size, exchange info, and share data in a clean layout.</p>
          </div>
          
          <div className="bg-white align-content: center rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">🔒 No Login Required</h3>
            <p>We respect your privacy. Bluestock works without accounts or trackers. Just real data, fast.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-6 text-center mt-auto">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Bluestock IPO Tracker — Empowering Investors with Data.
        </p>
      </footer>
    </div>
  );
}

export default About;
