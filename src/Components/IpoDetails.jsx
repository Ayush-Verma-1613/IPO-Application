// src/components/IPODetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function IPODetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();

  const [ipo, setIpo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://finnhub.io/api/v1/calendar/ipo?from=2025-06-01&to=2025-06-30&token=d1afephr01qltin13hf0d1afephr01qltin13hfg`
      )
      .then((res) => {
        const matched = res.data.ipoCalendar.find(
          (item) => item.symbol.toLowerCase() === symbol.toLowerCase()
        );
        setIpo(matched || null);
      })
      .catch((err) => console.error('Error fetching IPO detail:', err))
      .finally(() => setLoading(false));
  }, [symbol]);

  if (loading) return <p className="text-center text-lg font-semibold text-blue-600">Loading IPO details...</p>;
  if (!ipo) return <p className="text-center text-red-600 font-medium">IPO not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header Banner */}
      <div className="bg-purple-700 py-10 text-center text-white shadow-md">
        <h1 className="text-4xl font-bold uppercase tracking-wide">IPO Detail Overview</h1>
        <p className="mt-2 text-lg">Symbol: <span className="font-semibold">{ipo.symbol}</span></p>
      </div>

      {/* IPO Detail Card */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 transition duration-500 hover:shadow-2xl border-t-4 border-purple-500 pt-6">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">{ipo.name || ipo.company}</h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800 text-lg border-t-4 border-purple-500 pt-6">
            <div>
              <h4 className="font-semibold mb-1">📅 IPO Date</h4>
              <p className="text-gray-600">{ipo.date}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">📈 Exchange</h4>
              <p>{ipo.exchange || 'N/A'}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">💵 Price</h4>
              <p>{ipo.price || 'Not disclosed'}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">🧾 No. of Shares</h4>
              <p>{ipo.numberOfShares || 'N/A'}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">💰 Total Share Value</h4>
              <p>{ipo.totalSharesValue || 'N/A'}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">🟢 Status</h4>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                ${ipo.status?.toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {ipo.status || 'Unknown'}
              </span>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              ← Back to IPO List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPODetail;
