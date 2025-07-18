// Pages/CookiePolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fef3c7] via-[#ffeaa5] to-[#ffe091] px-6 md:px-20 pt-32 pb-20 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 md:p-12"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-6">
          Cookie Policy — Bhagwati Traders
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-800 mb-4">
          At <strong>Bhagwati Traders</strong>, we use cookies and similar
          tracking technologies to improve your browsing experience and analyze
          site traffic. By using our website, you consent to our use of cookies
          in accordance with this policy.
        </p>

        {/* Essential Cookies */}
        <h2 className="text-2xl font-semibold text-yellow-600 mt-8 mb-2">
          Essential Cookies
        </h2>
        <p className="text-gray-800 mb-4">
          These cookies are necessary for the basic functioning of our website.
          Without them, certain features and services would not work properly.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <span className="font-semibold text-yellow-700">Session Cookies:</span>{" "}
            Used to maintain your session on our website while navigating pages
            or logging in.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Security Tokens:</span>{" "}
            Protect against cross-site request forgery (CSRF) and ensure your
            interactions are secure.
          </li>
        </ul>

        {/* Your Choices */}
        <h2 className="text-2xl font-semibold text-yellow-600 mt-8 mb-2">
          Your Choices
        </h2>
        <p className="text-gray-800 mb-4">
          You can adjust your browser settings to decline cookies if you prefer,
          but please note that this may affect the functionality and performance
          of our website.
        </p>

        {/* Closing Note */}
        <div className="mt-10">
          <p className="text-sm text-gray-600">
            By continuing to use the <strong>Bhagwati Traders</strong> website,
            you agree to our cookie policy and our commitment to protect your
            privacy.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CookiePolicy;
