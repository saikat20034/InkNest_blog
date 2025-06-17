'use client';

export default function TermsOfService() {
  return (
    <div className="min-h-screen px-6 py-16 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>

        <p className="mb-4">
          By accessing and using our website, you agree to comply with the
          following terms and conditions.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">1. Use of Website</h2>
        <p>
          You must use the site for lawful purposes only. You agree not to
          misuse the services provided.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">2. Account</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account information.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">3. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to our site
          without notice or liability.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">4. Changes to Terms</h2>
        <p>
          We may modify these terms at any time. Continued use of the site means
          you accept the updated terms.
        </p>

        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          Last updated: June 2025
        </p>
      </div>
    </div>
  );
}
