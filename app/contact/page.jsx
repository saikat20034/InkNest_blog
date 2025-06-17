'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // You can connect this to an API like Formspree, Nodemailer, etc.
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-center">Contact Us</h1>
        {submitted && (
          <p className="mb-4 font-medium text-center text-green-600">
            Thank you for reaching out. We'll get back to you soon!
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
