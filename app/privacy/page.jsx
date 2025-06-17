'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-6 py-16 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy describes how we collect, use, and disclose your
          information when you use our website.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Information We Collect
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            Personal information (name, email, etc.) when you register or
            contact us
          </li>
          <li>Usage data (IP address, browser type, pages visited, etc.)</li>
        </ul>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          How We Use Your Information
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>To provide and maintain our services</li>
          <li>To communicate with you</li>
          <li>To improve our website</li>
        </ul>

        <h2 className="mt-8 mb-2 text-xl font-semibold">Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal data.
          Contact us at any time regarding your information.
        </p>

        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          Last updated: June 2025
        </p>
      </div>
    </div>
  );
}
