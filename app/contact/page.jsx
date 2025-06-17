'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    console.log(formData); // Replace with actual API call
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl p-8 mx-auto bg-white shadow-2xl rounded-xl dark:bg-gray-900">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-gray-800 dark:text-white">
          Contact Us
        </h1>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Have questions or feedback? We'd love to hear from you!
        </p>

        {submitted && (
          <div className="mb-4 font-medium text-center text-green-600">
            ✅ Thank you! Your message has been sent.
          </div>
        )}

        {error && (
          <div className="mb-4 font-medium text-center text-red-500">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
