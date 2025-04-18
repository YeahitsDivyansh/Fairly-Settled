import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#9db6d9bd] mx-auto py-16 px-6 text-left">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-7xl md:text-5xl font-extrabold leading-tight text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-800 mt-8 font-simple mb-4">
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our application. By accessing or
        using the app, you agree to this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="text-gray-700 mb-4">
        We may collect personal information such as your name, email address,
        usage data, and messages you send. We may also collect anonymous data to
        improve performance and reliability.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
        <li>To operate and maintain the application</li>
        <li>To improve user experience</li>
        <li>To respond to support requests and feedback</li>
        <li>To analyze app usage and improve features</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Sharing of Information
      </h2>
      <p className="text-gray-700 mb-4">
        We do not sell your personal information. We may share data with service
        providers like authentication and database services (e.g., Supabase)
        solely to operate the app effectively.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access, update, or delete your data. To exercise
        these rights, please contact us at [your contact email].
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We take appropriate security measures to protect your information.
        However, no method of transmission over the internet is completely
        secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Third-Party Services
      </h2>
      <p className="text-gray-700 mb-4">
        We may use third-party services like analytics or authentication
        providers. These services have their own privacy policies and data
        practices.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Changes to This Policy
      </h2>
      <p className="text-gray-700 mb-4">
        We may update this policy from time to time. When we do, we will revise
        the “Last updated” date below.
      </p>

      <p className="text-gray-600 text-sm mt-6">Last updated: April 17, 2025</p>
    </section>
  );
};

export default PrivacyPolicy;
