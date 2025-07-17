import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// === Image Imports (replace with your actual assets) ===
import ghee1 from "../assets/images/box1p.png";
import ghee2 from "../assets/images/box3p.png";
import ghee3 from "../assets/images/box4p.png";

const images = [ghee1, ghee2, ghee3];

// Marketing copy variants that rotate with image
const slideTaglines = [
  "Freshly Churned Desi Cow Ghee",
  "Slow-Cooked, Rich Aroma, Granular Texture",
  "Farm-Sourced. Lab-Tested. 100% Pure."
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        flex flex-col-reverse md:flex-row items-center justify-between
        px-6 md:px-20 pt-8 md:pt-2
        min-h-[80vh] md:min-h-[85vh] lg:min-h-screen
        bg-gradient-to-br from-[#FFFDF8] via-[#F8F1E7] to-[#EFE3D2]
      "
    >
      {/* Text Block */}
      <div className="w-full md:w-1/2 max-w-2xl z-10 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight"
        >
          Pure Desi Ghee
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B3E26] to-[#8F5A3C]">
            For Every Home
          </span>
        </motion.h1>

        {/* Rotating slide tagline */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-gray-700 mt-4 text-lg md:text-xl"
          >
            {slideTaglines[current]}
          </motion.p>
        </AnimatePresence>

        {/* Supporting copy */}
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-xl mx-auto md:mx-0">
          Bhagwati Traders brings you traditionally prepared, nutrient-rich desi ghee
          made from select farm-fresh milk—granular, aromatic, and full of goodness.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4">
          <Link
            to="/products"
            className="
              px-8 py-3 rounded-full font-semibold text-white
              bg-[#6B3E26] hover:bg-[#8F5A3C]
              transition-all duration-300 ease-in-out
              hover:shadow-md hover:-translate-y-0.5
            "
          >
            Shop Ghee
          </Link>
          <Link
            to="/about"
            className="
              px-8 py-3 rounded-full font-semibold
              border border-[#6B3E26]/40 text-[#6B3E26]
              hover:border-[#8F5A3C] hover:text-[#8F5A3C]
              transition-all duration-300 ease-in-out
            "
          >
            Why Our Ghee?
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center md:items-start">
          <span className="text-[#6B3E26]">🧪 Lab Tested</span>
          <span className="text-[#6B3E26]">🥛 Farm Sourced</span>
          <span className="text-[#6B3E26]">🇮🇳 Made in India</span>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full md:w-1/2 max-w-md lg:max-w-xl relative h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] mb-8 md:mb-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Bhagwati Traders Ghee"
            initial={{ opacity: 0, x: 100, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.96 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-contain drop-shadow-xl"
          />
        </AnimatePresence>
      </div>

      {/* Decorative blur shapes (subtle browns) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#6B3E26]/10 blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-20 w-72 h-72 rounded-full bg-[#8F5A3C]/20 blur-3xl"
      ></div>
    </section>
  );
};

export default Hero;
