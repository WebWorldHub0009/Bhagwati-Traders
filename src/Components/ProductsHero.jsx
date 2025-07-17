import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productsBg from "../assets/images/product-hero.avif"; // Replace with actual image

const shimmerText = {
  background: "linear-gradient(90deg, #D4B25F, #f7eec8, #D4B25F)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s linear infinite",
};

const ProductsHero = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${productsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>

      {/* Animated Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#D4B25F]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#D4B25F]/30 rounded-full blur-[100px] animate-float"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        {/* Quotable Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={shimmerText}>
          “Products That Define Purity & Taste”
        </h1>

        {/* Longer Subheading */}
        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
        >
          Discover our premium Desi Ghee collection—crafted with care to bring
          the authentic taste of tradition into your kitchen. From everyday
          essentials to special occasions, we have a pack for every need.
        </motion.p>

        {/* Call to Action */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-black text-white font-semibold border border-[#D4B25F] hover:bg-[#D4B25F] hover:text-black transition-all duration-300 rounded-full shadow-lg"
          >
            Enquire Now
          </Link>
        </motion.div>
      </motion.div>

      {/* Animations */}
      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-slow { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ProductsHero;
