import React from "react";
import { motion } from "framer-motion";
import certificateBg from "../assets/images/certificate-hero.avif"; // Replace with actual image

const shimmerText = {
  background: "linear-gradient(90deg, #D4B25F, #f7eec8, #D4B25F)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s linear infinite",
};

const CertificateHero = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${certificateBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>

      {/* Floating Highlights */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#D4B25F]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#D4B25F]/30 rounded-full blur-[100px] animate-float"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        {/* Quotable Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={shimmerText}>
          “Certifications That Speak For Our Integrity”
        </h1>

        {/* Longer Subheading */}
        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Every document we hold reflects our unwavering commitment to quality,
          purity, and trust. From government approvals to food safety standards,
          these certifications validate the authenticity that we proudly deliver.
        </motion.p>
      </motion.div>

      {/* Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CertificateHero;
