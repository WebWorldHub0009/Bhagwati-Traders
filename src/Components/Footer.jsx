import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaBoxes,
  FaCertificate,
  FaPhoneAlt,
  FaCookieBite,
  FaTruckMoving,
  FaUndoAlt,
  FaUserShield,
  FaFileContract,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Translator from "./Translator";
import VisitorCounter from "./VisitorCounter";
import footerBg from "../assets/images/footer-bg.avif"; // ✅ Background image

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  // Social buttons -> open platform root until brand handles available
  const socials = [
    { Icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com" },
    { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com" },
    { Icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com" },
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/917303672909", // pre-fill with your number
    },
  ];

  // Pack sizes -> programmatic navigate to /products with state
  const packSizes = [
    { label: "200 gm Jar", size: "200gm" },
    { label: "250 gm Jar", size: "250gm" },
    { label: "500 gm Jar", size: "500gm" },
    { label: "1 kg Pack", size: "1kg" },
    { label: "2 kg Family Pack", size: "2kg" },
    { label: "5 kg Value Pack", size: "5kg" },
    { label: "15 kg Bulk Pack", size: "15kg" },
  ];

  const handleSizeClick = (size) => {
    navigate("/products", { state: { size } });
  };

  return (
    <footer
      className="relative text-gray-800 px-6 py-12 pt-24 sm:px-10 lg:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Bhagwati Traders */}
        <div className="rounded-lg p-6 flex flex-col justify-between bg-white/60 backdrop-blur-sm shadow">
          <h3 className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow text-[#6B3E26] font-serif">
            About Bhagwati Traders
          </h3>
          <p className="text-sm leading-relaxed mb-6 text-gray-700">
            Bhagwati Traders offers pure, traditionally prepared Desi Ghee made
            from farm-fresh milk. We stand for honesty, nutrition, and the
            authentic flavor every Indian kitchen deserves.
          </p>

          {/* Socials */}
          <div className="flex flex-wrap gap-4 mb-6">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  bg-white/80 p-3 rounded-full text-[#6B3E26]
                  hover:bg-[#D4B25F] hover:text-white
                  transition-transform duration-300 hover:scale-110 shadow-md
                "
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Translator (optional) */}
          <div className="mr-0 sm:mr-14">
            <Translator />
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-6 bg-white/60 backdrop-blur-sm shadow rounded-lg">
          <h3 className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow text-[#6B3E26] font-serif">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaHome className="text-[#D4B25F]" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaInfoCircle className="text-[#D4B25F]" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaBoxes className="text-[#D4B25F]" /> Products
              </Link>
            </li>
            <li>
              <Link
                to="/certificates"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaCertificate className="text-[#D4B25F]" /> Certificates
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaPhoneAlt className="text-[#D4B25F]" /> Contact
              </Link>
            </li>

            {/* Additional Links */}
            <li>
              <Link
                to="/cookie-policy"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaCookieBite className="text-[#D4B25F]" /> Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-policy"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaTruckMoving className="text-[#D4B25F]" /> Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                to="/refund-return"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaUndoAlt className="text-[#D4B25F]" /> Refund & Return Policy
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaUserShield className="text-[#D4B25F]" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="flex items-center gap-2 hover:underline hover:text-[#8F5A3C] transition"
              >
                <FaFileContract className="text-[#D4B25F]" /> Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Available Pack Sizes */}
        <div className="p-6 bg-white/60 backdrop-blur-sm shadow rounded-lg">
          <h3 className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow text-[#6B3E26] font-serif">
            Available Pack Sizes
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {packSizes.map(({ label, size }) => (
              <li key={size}>
                {/* Button to navigate to /products with selected size */}
                <button
                  type="button"
                  onClick={() => handleSizeClick(size)}
                  className="
                    w-full text-left
                    hover:underline hover:text-[#8F5A3C]
                    transition
                  "
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="p-6 flex flex-col bg-white/60 backdrop-blur-sm shadow rounded-lg">
          <h3 className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow text-[#6B3E26] font-serif">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li>
              <a
                href="mailto:Info@bhagwatitrader.co.in"
                className="hover:underline hover:text-[#8F5A3C] transition"
              >
                Info@bhagwatitrader.co.in
              </a>
            </li>
            <li>
              <a
                href="mailto:Bhagwatitradersdelhi1@gmail.com"
                className="hover:underline hover:text-[#8F5A3C] transition"
              >
                Bhagwatitradersdelhi1@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+917303672909"
                className="hover:underline hover:text-[#8F5A3C] transition"
              >
                +91 7303672909
              </a>
            </li>
          </ul>

          <address className="text-sm leading-relaxed not-italic text-gray-800 mb-6">
            <h4 className="font-semibold text-base text-[#6B3E26] mb-1">
              Address:
            </h4>
            GROUND FLOOR, PLOT NO. 119-120, BLK-D-DDA, SLUM COLONY, Rohini
            Sector 24, New Delhi, North West Delhi, Delhi, 110085
          </address>

          {/* GST & UDYAM */}
          <div className="text-xs text-gray-600 space-y-1">
            <p>
              <span className="font-semibold text-[#6B3E26]">GSTIN:</span>{" "}
              07GKXPS5124N1Z3
            </p>
            <p>
              <span className="font-semibold text-[#6B3E26]">UDYAM:</span>{" "}
              UDYAM-DL-06-0166578
            </p>
          </div>
        </div>
      </div>

      {/* Visitor Counter */}
      <div className="relative z-10 mt-14 text-center">
        <VisitorCounter />
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-10 border-t border-[#D4B25F]/50"></div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-6 flex flex-col justify-center items-center text-sm font-light tracking-wide text-gray-700 space-y-1">
        <span>© {year} Bhagwati Traders. All rights reserved.</span>
        <a
          href="http://webworldhub.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-[#6B3E26] transition cursor-pointer font-semibold"
        >
          Designed & Developed by Web World Hub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
