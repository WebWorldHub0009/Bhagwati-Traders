// Pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const accent = "#D4B25F"; // brand gold

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-[#FFFDF8] text-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1
        className="text-4xl font-bold text-center mb-8 mt-16 font-serif"
        style={{ color: accent }}
      >
        Privacy Policy
      </h1>

      {/* Optional Legal Disclaimer */}
      <p className="text-xs sm:text-sm text-gray-500 italic text-center max-w-2xl mx-auto mb-10">
        This Privacy Policy template is provided for general informational purposes for Bhagwati Traders.
        It is not legal advice. Please review with qualified legal counsel before relying on it.
      </p>

      <section className="space-y-6 text-justify leading-relaxed">
        <p>
          This Privacy Policy describes how <strong>Bhagwati Traders</strong> and its
          affiliates (collectively, “<strong>Bhagwati Traders</strong>,” “we,” “our,” “us”)
          collect, use, share, protect, and otherwise process your personal data when you
          access or use our website{" "}
          <a
            href="https://bhagwatitrader.co.in/"
            className="underline font-medium"
            style={{ color: accent }}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://bhagwatitrader.co.in/
          </a>{" "}
          (the “Platform”), place an order, submit an enquiry, or interact with us through
          email, phone, social media, or offline channels. Our products are offered
          primarily within India; your data will generally be processed and stored in India.
        </p>

        <p>
          By accessing the Platform, sharing information with us, or purchasing / enquiring
          about our products (including our Desi Ghee range), you agree to this Privacy
          Policy, our Terms &amp; Conditions, and any product‑specific terms. If you do not
          agree, please do not use the Platform or submit personal data.
        </p>

        {/* 1. Collection */}
        <h2
          className="text-2xl font-semibold"
          style={{ color: accent }}
        >
          1. Information We Collect
        </h2>
        <p>
          We collect information that you voluntarily provide, information collected
          automatically when you use our Platform, and information we may receive from
          service partners. Depending on your interaction, this may include:
        </p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Name, phone number, email address.</li>
          <li>Billing / shipping address and PIN code.</li>
          <li>Business details for trade / wholesale enquiries (GST number, firm name, etc.).</li>
          <li>Order history, cart activity, and enquiry submissions.</li>
          <li>Payment references (processed through secure payment gateways; we do not store full card data).</li>
          <li>Device, browser, and usage data (cookies, IP, referral source) to help improve performance and security.</li>
        </ul>
        <p className="text-sm text-gray-600">
          Sensitive personal data (if ever required) will only be collected with your explicit consent and handled per applicable law.
        </p>

        {/* 2. Usage */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          2. How We Use Your Information
        </h2>
        <p>We use personal data to:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Process and fulfill orders, invoices, and dispatch logistics.</li>
          <li>Respond to enquiries, support requests, and trade partnership proposals.</li>
          <li>Verify identity for wholesale or dealership onboarding.</li>
          <li>Improve our website, product quality, and customer experience.</li>
          <li>Send service updates, dispatch alerts, and limited promotional offers (opt‑out available).</li>
          <li>Detect fraud, security abuse, or unauthorized access.</li>
          <li>Comply with legal, tax, and regulatory obligations.</li>
        </ul>

        {/* 3. Sharing */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          3. How We Share Data
        </h2>
        <p>
          We do not sell your personal data. We may share data only as needed to deliver
          our products or comply with law:
        </p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Courier, transport, or logistics partners (for order delivery).</li>
          <li>Payment processors and banking partners (for transaction settlement).</li>
          <li>Compliance auditors, tax consultants, or legal advisors.</li>
          <li>Government / regulatory authorities when required under law or valid request.</li>
          <li>IT / hosting providers that enable Platform functionality.</li>
        </ul>
        <p className="text-sm text-gray-600">
          Marketing communications are sent per your consent or legitimate business interest; you may unsubscribe.
        </p>

        {/* 4. Security */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          4. Security Measures
        </h2>
        <p>
          We implement reasonable technical and organizational safeguards to protect your
          information. However, no internet transmission or storage system is 100% secure.
          Please protect account logins, OTPs, and device access. Report suspicious activity
          immediately to us at the email below.
        </p>

        {/* 5. Retention & Deletion */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          5. Data Retention &amp; Deletion
        </h2>
        <p>
          We retain personal data for as long as necessary to provide services, comply with
          legal or accounting obligations, resolve disputes, and enforce agreements. You may
          request deletion of your account or enquiry records by writing to us. Some records
          (e.g., tax invoices) may be retained as required by law. Data may be anonymized for
          analytics after deletion.
        </p>

        {/* 6. Your Rights */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          6. Your Choices &amp; Rights
        </h2>
        <p>
          Depending on applicable law, you may request to access, correct, update, or
          delete certain personal data. To exercise rights, email us with the subject
          “Privacy Request – Bhagwati Traders” from your registered email ID or provide
          proof of identity.
        </p>

        {/* 7. Consent */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          7. Consent &amp; Withdrawal
        </h2>
        <p>
          By using the Platform or sharing data, you consent to the collection and use of
          information as described. You may withdraw consent (where applicable) by contacting
          us; doing so may limit access to certain services such as order fulfillment or
          marketing updates.
        </p>

        {/* 8. Updates */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          8. Policy Updates
        </h2>
        <p>
          We may revise this Privacy Policy periodically to reflect changes in law, technology,
          or our business practices. Updated versions will be posted on this page with a
          revised “Last Updated” date. Continued use after changes constitutes acceptance.
        </p>

        {/* 9. Contact / Grievance */}
        <h2
          className="text-2xl font-semibold mt-8"
          style={{ color: accent }}
        >
          9. Contact / Grievance Redressal
        </h2>
        <div
          className="p-4 rounded-md border"
          style={{ borderColor: accent, backgroundColor: "#FFF8ED" }}
        >
          <p><strong>Name:</strong> Tokh Ram Singh</p>
          <p><strong>Designation:</strong> Founder</p>
          <p>
            <strong>Company:</strong> Bhagwati Traders
          </p>
          <p>
            <strong>Company Address:</strong> GROUND FLOOR, PLOT NO. 119-120, BLK-D-DDA, SLUM COLONY,
            Rohini Sector 24, New Delhi, North West Delhi, Delhi, 110085
          </p>
          <p>
            <strong>Primary Email:</strong>{" "}
            <a
              href="mailto:Info@bhagwatitrader.co.in"
              className="underline"
              style={{ color: accent }}
            >
              Info@bhagwatitrader.co.in
            </a>
          </p>
          <p>
            <strong>Alternate Email:</strong>{" "}
            <a
              href="mailto:Bhagwatitradersdelhi1@gmail.com"
              className="underline"
              style={{ color: accent }}
            >
              Bhagwatitradersdelhi1@gmail.com
            </a>
          </p>
          <p>
            <strong>Contact:</strong>{" "}
            <a
              href="tel:+917303672909"
              className="underline"
              style={{ color: accent }}
            >
              +91 7303672909
            </a>
          </p>
          <p>
            <strong>Working Hours:</strong> Monday – Saturday (9:00 AM – 6:00 PM IST)
          </p>
        </div>

        {/* Regulatory IDs */}
        <div className="mt-8 text-sm text-gray-700">
          <p>
            <strong style={{ color: accent }}>GSTIN:</strong> 07GKXPS5124N1Z3
          </p>
          <p>
            <strong style={{ color: accent }}>UDYAM:</strong> UDYAM-DL-06-0166578
          </p>
          {/* Uncomment if you want to display FSSAI here globally:
          <p><strong style={{ color: accent }}>FSSAI No.:</strong> 23325001002665</p>
          */}
        </div>

        {/* Last Updated */}
        <p className="mt-10 text-xs text-gray-500 text-center">
          Last Updated: {new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
