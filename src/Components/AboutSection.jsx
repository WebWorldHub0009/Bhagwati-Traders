import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaAward, FaFlask, FaLeaf, FaChevronDown } from "react-icons/fa";
import { GiCow } from "react-icons/gi"; // ✅ added cow icon

import aboutImg from "../assets/images/jar5.jpg"; // TODO: update path
import aboutBg from "../assets/images/abbg.avif"; // TODO: update path
import { Link } from "react-router-dom";

const highlightItems = [
  {
    title: "Pure Desi Ghee",
    icon: <GiCow />,
    desc: "Made from select cow & buffalo milk.",
  },
  {
    title: "Traditional Bilona",
    icon: <FaLeaf />,
    desc: "Slow-churned for rich granules & aroma.",
  },
  {
    title: "Lab Tested",
    icon: <FaFlask />,
    desc: "Quality & purity checks every batch.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        relative py-20 overflow-hidden
        bg-gradient-to-br from-[#FFFDF8]/90 via-[#F8F1E7]/90 to-[#FFFDF8]/90
        bg-[length:200%_200%] animate-[gradientFlow_15s_ease_infinite]
      "
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#FFFDF8]/70"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm text-[#6B3E26]/80 mb-1">Namaste!</p>
          <h2 className="text-4xl font-extrabold text-[#6B3E26] leading-snug font-serif">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B3E26] to-[#8F5A3C]">Bhagwati Traders</span>
          </h2>

          <p className="mt-4 text-gray-700 text-lg max-w-md">
            We’re on a mission to bring **authentic, nutrient-rich Desi Ghee**
            from trusted dairy farmers to every Indian home. Prepared using
            time-honored slow-churning methods, our ghee retains its granular
            texture, rich aroma, and all the goodness your family deserves.
          </p>

          <p className="mt-4 text-gray-600 text-base max-w-md">
            Every batch is quality-checked and packed fresh so you enjoy
            purity, taste, and trust—just like homemade ghee.
          </p>

          <Link to="/about" className="inline-block mt-6">
            <button
              className="
                cursor-pointer px-8 py-3 rounded-full text-white text-sm font-medium shadow-md
                bg-[#6B3E26] hover:bg-[#8F5A3C]
                transition-colors duration-300
              "
            >
              Know Our Story
            </button>
          </Link>

          {/* Highlight Trio */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {highlightItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2"
              >
                <div
                  className="
                    text-[#8F5A3C] text-3xl
                    transition-transform duration-300
                    hover:scale-110 hover:-rotate-3
                  "
                >
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[#6B3E26]">{item.title}</h4>
                <p className="text-sm text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full flex justify-center items-center"
        >
          {/* Dotted Pattern */}
          <div className="absolute w-26 h-26 -top-6 -left-4 z-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <pattern
                id="aboutDots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  className="text-[#6B3E26]/40"
                  fill="currentColor"
                />
              </pattern>
              <rect width="100" height="100" fill="url(#aboutDots)" />
            </svg>
          </div>

          {/* Tilted Image */}
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareColor="#ffffff"
            glareMaxOpacity={0.08}
            className="w-full"
          >
            <div className="relative z-10 w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutImg}
                alt="Bhagwati Traders Ghee"
                className="object-cover w-full h-auto"
              />
            </div>
          </Tilt>

          {/* Floating Cards */}
          <div
            className="
              absolute -top-6 -left-6
              bg-white/50 backdrop-blur-md border border-white/30
              rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20
            "
          >
            <FaFlask className="text-[#8F5A3C]" />
            <div>
              <p className="font-semibold text-[#6B3E26]">Lab Tested</p>
            </div>
          </div>

          <div
            className="
              absolute top-4 right-0
              bg-white/50 backdrop-blur-md border border-white/30
              rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20
            "
          >
            <FaAward className="text-[#8F5A3C]" />
            <p className="font-semibold text-[#6B3E26]">Authentic Quality</p>
          </div>

          <div
            className="
              absolute bottom-0 left-4
              bg-white/50 backdrop-blur-md border border-white/30
              rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20
            "
          >
            <GiCow className="text-[#8F5A3C]" />
            <div>
              <p className="font-semibold text-[#6B3E26]">Farm Sourced</p>
              <p className="text-gray-600 text-xs">Trusted Dairies</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 flex justify-center relative z-10"
      >
        <FaChevronDown className="text-[#8F5A3C] text-xl" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
