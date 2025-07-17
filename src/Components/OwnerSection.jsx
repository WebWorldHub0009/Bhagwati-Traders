import React from "react";
import { FaPhoneAlt, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const OwnerSection = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-gradient-to-br from-[#FFFDF8] via-[#F8F1E7] to-[#FFFDF8]
        py-20 sm:py-24 px-4 sm:px-8
      "
    >
      {/* Subtle Watermark Heading (hidden on very small screens to avoid clutter) */}
      <h1
        className="
          hidden xs:block
          absolute top-5 left-1/2 -translate-x-1/2
          text-[18vw] sm:text-[15vw] md:text-[10vw]
          text-[#D4B25F]/10 font-bold tracking-widest whitespace-nowrap
          pointer-events-none select-none z-0 leading-none font-serif
        "
      >
        Bhagwati Traders
      </h1>

      {/* Decorative soft wave SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 400"
      >
        <path
          fill="#D4B25F"
          d="M0,160 C480,320 1440,0 1920,160 L1920,400 L0,400 Z"
        ></path>
      </svg>

      {/* Pill Heading */}
      <div className="flex justify-center relative z-10 mb-6 sm:mb-8">
        <div
          className="
            flex items-center gap-2
            bg-[#6B3E26] px-3 py-1.5 sm:px-4 sm:py-2
            rounded-full shadow text-white
            font-semibold text-xs sm:text-sm md:text-base
          "
        >
          Meet Our Founder
        </div>
      </div>

      {/* Wrapper: Owner Card + Contact CTA */}
      <motion.div
        className="
          max-w-5xl mx-auto
          bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg
          px-4 sm:px-6 md:px-12 py-10 sm:py-12
          flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10
          relative z-10
        "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Owner Card */}
        <motion.div
          className="
            bg-[#FFFDF8] flex-1 w-full
            rounded-2xl p-6 sm:p-8
            shadow-md text-center
            hover:shadow-xl transition-shadow duration-300
          "
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        >
          {/* User Icon */}
          <div className="flex justify-center mb-4 sm:mb-5">
            <FaUserCircle className="text-[#D4B25F] text-7xl sm:text-8xl drop-shadow-md" />
          </div>
          <h2
            className="
              text-lg sm:text-xl md:text-2xl
              font-semibold text-[#6B3E26] mb-3
            "
          >
            A Word from Our Founder
          </h2>
          <p
            className="
              text-gray-700
              text-sm sm:text-base md:text-lg
              mb-5 leading-relaxed tracking-wide italic
              max-w-md mx-auto
            "
          >
            "We make ghee the way our grandparents did—slow, pure, and with
            complete honesty. If it’s not good enough for our family, it’s not
            leaving our factory."
          </p>
          <p className="text-[#6B3E26] font-bold uppercase text-xs sm:text-sm tracking-wide">
            — TOKHRAM SINGH (FOUNDER)
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl
              font-bold text-[#6B3E26] mb-3 sm:mb-4 font-serif
            "
          >
            Let’s Connect
          </h2>
          <p
            className="
              text-gray-700
              text-sm sm:text-base md:text-lg
              mb-5 sm:mb-6
              max-w-md md:max-w-none mx-auto md:mx-0
            "
          >
            Want to stock our ghee, become a distribution partner, or know how
            we make it? Get in touch—we’re happy to help.
          </p>

          {/* Contact Buttons */}
          <div
            className="
              flex flex-col xs:flex-row justify-center md:justify-start items-center
              gap-3 sm:gap-4
            "
          >
            {/* Phone */}
            <a
              href="tel:+917303672909"
              className="
                inline-flex items-center justify-center gap-2
                px-4 sm:px-6 py-2 sm:py-3
                rounded-full font-semibold
                bg-[#D4B25F] text-white hover:bg-[#B8933B]
                transition
                text-xs sm:text-sm md:text-base
                whitespace-nowrap
              "
            >
              <FaPhoneAlt className="shrink-0" />
              <span className="whitespace-nowrap">+91 7303672909</span>
            </a>

            {/* Email */}
            <a
              href="mailto:Info@bhagwatitrader.co.in"
              className="
                inline-flex items-center justify-center gap-2
                px-4 sm:px-6 py-2 sm:py-3
                rounded-full font-semibold
                bg-[#6B3E26] text-white hover:bg-[#8F5A3C]
                transition
                text-xs sm:text-sm md:text-base
                whitespace-nowrap
              "
            >
              <FaEnvelope className="shrink-0" />
              <span className="whitespace-nowrap">Info@bhagwatitrader.co.in</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative blobs */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#D4B25F]/20 blur-3xl z-0"></div>
      <div className="absolute top-0 -right-10 w-40 h-40 rounded-full bg-[#8F5A3C]/10 blur-2xl z-0"></div>
    </section>
  );
};

export default OwnerSection;
