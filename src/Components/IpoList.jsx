// src/components/IPOList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function IPOList() {
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://finnhub.io/api/v1/calendar/ipo?from=2025-06-01&to=2025-06-30&token=d1afephr01qltin13hf0d1afephr01qltin13hfg`
      )
      .then((res) => {
        if (res.data && Array.isArray(res.data.ipoCalendar)) {
          setIpos(res.data.ipoCalendar);
        } else {
          throw new Error('Invalid API format');
        }
      })
      .catch((err) => {
        console.error('❌ Error fetching IPOs:', err);
        setError(true);
        setIpos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredIPOs = ipos.filter((ipo) =>
    (ipo.name || ipo.company || '')
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-lg font-semibold text-purple-600">⏳ Loading IPOs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 font-medium mt-8">🚫 Failed to fetch IPOs. Please try again later.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-purple-100 via-white to-blue-100">
      {/* IPO List */}
      <div className="px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-6 tracking-wide">
          📈 Live & Upcoming IPOs
        </h2>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search by company name..."
            className="w-full px-4 py-3 border border-purple-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {filteredIPOs.length === 0 ? (
          <p className="text-center text-gray-600">No matching IPOs found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIPOs.map((ipo, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border-t-4 border-purple-500"
              >
                <h3 className="text-xl font-bold text-purple-700 mb-2">{ipo.name || ipo.company}</h3>
                <p><strong>🆔 Symbol:</strong> {ipo.symbol || 'N/A'}</p>
                <p><strong>📅 Date:</strong> {ipo.date || 'N/A'}</p>
                <p><strong>📦 No. of Shares:</strong> {ipo.numberOfShares || 'N/A'}</p>

                {ipo.symbol && (
                  <div className="mt-4 text-right">
                    <Link
                      to={`/ipo/${ipo.symbol.toLowerCase()}`}
                      className="inline-block text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
                    >
                      View Details →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-6 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-xl font-semibold mb-2">About Bluestock IPO Web App</h4>
          <p className="text-sm text-gray-200 max-w-xl mx-auto">
            Bluestock helps you track upcoming and active IPOs in real time, using data from trusted financial APIs.
            Built with ❤️ for market research, education, and insights.
          </p>
          <p className="mt-3 text-xs text-purple-200">
            © {new Date().getFullYear()} Bluestock IPO Tracker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default IPOList;
