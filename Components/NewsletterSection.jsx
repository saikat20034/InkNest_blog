'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsletterSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="px-6 py-16 mb-10 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 md:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">
          Stay Updated ✉️
        </h2>
        <p className="mb-8 font-mono text-sm text-gray-300 md:text-base">
          Subscribe to our newsletter and never miss an update. Get the latest blogs, tips, and insights delivered to your inbox.
        </p>

        <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[60%] px-4 py-3 text-gray-400 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 font-mono text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 font-mono text-xs text-gray-400">
          We care about your data. Read our <a href="/privacy" className="underline hover:text-blue-400">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
