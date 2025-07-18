// Pages/ShippingPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const accent = "#D4B25F";

const ShippingPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF8ED] via-[#F9F2E7] to-[#EEDFC9] px-6 md:px-20 pt-32 pb-20 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#f3e8d2]"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-6 font-serif"
          style={{ color: accent }}
        >
          Shipping Policy
        </h1>

        <p className="text-lg text-gray-800 mb-4">
          At <strong>Bhagwati Traders</strong>, we are committed to delivering
          our premium Desi Ghee products to your doorstep quickly and safely.
          Please review our shipping policy before placing an order.
        </p>

        {/* Shipping Locations */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Shipping Locations
        </h2>
        <p className="text-gray-800 mb-4">
          We currently deliver across India. For bulk, wholesale, or
          international shipping inquiries, please contact us directly.
        </p>

        {/* Order Processing */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Order Processing
        </h2>
        <p className="text-gray-800 mb-4">
          All orders are processed within <strong>1–2 business days</strong>.
          Orders placed on weekends or public holidays will be processed the
          next working day.
        </p>

        {/* Estimated Delivery Time */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Estimated Delivery Time
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
          <li>Metro Cities: 3–5 business days</li>
          <li>Other Cities & Towns: 5–7 business days</li>
          <li>Remote Areas: 7–10 business days</li>
        </ul>

        {/* Shipping Charges */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Shipping Charges
        </h2>
        <p className="text-gray-800 mb-4">
          Shipping fees are calculated during checkout based on your location
          and order weight. We occasionally offer{" "}
          <strong>free shipping promotions</strong>.
        </p>

        {/* Order Tracking */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Order Tracking
        </h2>
        <p className="text-gray-800 mb-4">
          Once your order is shipped, you will receive a tracking ID via{" "}
          <strong>Email or SMS</strong> to monitor the delivery status.
        </p>

        {/* Delays */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Delays & Issues
        </h2>
        <p className="text-gray-800 mb-4">
          While we strive to deliver within the estimated timelines, delays may
          occur due to unforeseen circumstances such as weather conditions,
          courier delays, or holidays. We will keep you informed in such cases.
        </p>

        {/* Contact Info */}
        <div className="mt-10 bg-[#FFF8ED] border border-[#f3e8d2] p-6 rounded-xl">
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: accent }}
          >
            For Shipping Inquiries
          </h3>
          <p className="text-gray-800">
            Email us at:{" "}
            <a
              href="mailto:Info@bhagwatitrader.co.in"
              className="underline"
              style={{ color: accent }}
            >
              Info@bhagwatitrader.co.in
            </a>{" "}
            or{" "}
            <a
              href="mailto:Bhagwatitradersdelhi1@gmail.com"
              className="underline"
              style={{ color: accent }}
            >
              Bhagwatitradersdelhi1@gmail.com
            </a>
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a
              href="tel:+917303672909"
              className="underline"
              style={{ color: accent }}
            >
              +91 7303672909
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ShippingPolicy;
