// src/components/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! 🚀 (This is a demo. You can connect this to backend/email service.)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col justify-between">
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-purple-700 mb-6">📬 Contact Us</h1>
        <p className="text-gray-700 text-lg mb-10">
          Have questions, feedback, or suggestions? We’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 space-y-6 text-left">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white text-center py-6 mt-auto">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Bluestock IPO Tracker — Reach out anytime.
        </p>
      </footer>
    </div>
  );
}

export default Contact;
