'use client';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen px-6 py-16 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Cookie Policy</h1>

        <p className="mb-4">
          This Cookie Policy explains how we use cookies and similar technologies on our website.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device to help the website function properly and enhance user experience.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">How We Use Cookies</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>Essential cookies for site functionality</li>
          <li>Analytics cookies to understand usage patterns</li>
          <li>Preference cookies to remember your settings</li>
        </ul>

        <h2 className="mt-8 mb-2 text-xl font-semibold">Managing Cookies</h2>
        <p>
          You can control or disable cookies through your browser settings. However, some features may not work properly if cookies are disabled.
        </p>

        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          Last updated: June 2025
        </p>
      </div>
    </div>
  );
}
