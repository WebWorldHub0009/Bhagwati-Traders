// Pages/RefundPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const accent = "#D4B25F";

const RefundPolicy = () => {
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
          Return & Refund Policy
        </h1>

        <p className="text-lg text-gray-800 mb-4">
          At <strong>Bhagwati Traders</strong>, we value your trust and are
          committed to providing only the highest quality Desi Ghee. If you are
          not completely satisfied with your purchase, please review the
          following return and refund policy.
        </p>

        {/* Return Window */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          30-Day Return Window
        </h2>
        <p className="text-gray-800 mb-4">
          Returns are accepted within{" "}
          <strong>30 working days from delivery</strong>. Products must be
          unopened, unused, and in their original packaging.
        </p>

        {/* How to Return */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          How to Initiate a Return
        </h2>
        <p className="text-gray-800 mb-4">
          Contact us via email at{" "}
          <a
            href="mailto:Info@bhagwatitrader.co.in"
            className="underline"
            style={{ color: accent }}
          >
            Info@bhagwatitrader.co.in
          </a>{" "}
          or call us at{" "}
          <a
            href="tel:+917303672909"
            className="underline"
            style={{ color: accent }}
          >
            +91 7303672909
          </a>{" "}
          within the return period. Provide your order number and reason for
          return, and we will assist you with the process.
        </p>

        {/* Return Shipping */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Return Shipping
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-4 space-y-2">
          <li>
            <strong>Customer Pays:</strong> For returns due to non-defective
            reasons (e.g., personal preference).
          </li>
          <li>
            <strong>Company Pays:</strong> For defective or damaged products,
            we cover return shipping.
          </li>
          <li>
            Free return shipping applies to eligible cases.
          </li>
        </ul>

        {/* Inspection */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Inspection & Approval
        </h2>
        <p className="text-gray-800 mb-4">
          After receiving your return, we will inspect it and notify you via
          email regarding approval or rejection. Please allow a few business
          days for this process.
        </p>

        {/* Refunds */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Refunds
        </h2>
        <p className="text-gray-800 mb-4">
          Approved refunds will be processed to your original payment method
          within 7–10 business days. Actual credit time depends on your bank or
          payment provider.
        </p>

        {/* Non-returnable */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Non-Returnable Items
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-4 space-y-2">
          <li>Items not in original condition or missing parts</li>
          <li>Returns after 30 working days</li>
          <li>Opened or partially used products unless defective</li>
        </ul>

        {/* Damaged Orders */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Damaged or Incorrect Orders
        </h2>
        <p className="text-gray-800 mb-4">
          If your order is damaged or incorrect, contact us immediately. We will
          arrange a replacement or refund within 5–7 business days.
        </p>

        {/* Contact Info */}
        <h2
          className="text-2xl font-semibold mt-8 mb-2"
          style={{ color: accent }}
        >
          Contact Us
        </h2>
        <div className="bg-[#FFF8ED] border border-[#f3e8d2] p-6 rounded-xl text-gray-800">
          <p className="mb-1 font-semibold">Bhagwati Traders</p>
          <p>
            Plot No. B-256, Shop No. 02, Ground Floor, Khasra No. 16/24, Street
            Gram Sabha Extension, Opposite Precious Living Stone Church, Kishan
            Chand Marg, Begumpur Village, North West Delhi 110086
          </p>
          <p className="mt-2">
            📞{" "}
            <a
              href="tel:+917303672909"
              className="underline"
              style={{ color: accent }}
            >
              +91 7303672909
            </a>
          </p>
          <p>
            📧{" "}
            <a
              href="mailto:Info@bhagwatitrader.co.in"
              className="underline"
              style={{ color: accent }}
            >
              Info@bhagwatitrader.co.in
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default RefundPolicy;
