import React from "react";
import { motion } from "framer-motion";
import contactBg from "../assets/images/contact-hero.avif"; // ✅ Replace with your actual image

const shimmerText = {
  background: "linear-gradient(90deg, #D4B25F, #f7eec8, #D4B25F)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s linear infinite",
};

const ContactHero = () => {
  // ✅ Open WhatsApp on button click
  const openWhatsApp = () => {
    const phoneNumber = "917303672909"; // ✅ Without +
    const message = encodeURIComponent("Hello! I would like to know more about your products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#D4B25F]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#D4B25F]/30 rounded-full blur-[100px] animate-float"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center text-white"
      >
        {/* Updated Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={shimmerText}
        >
          “Your Trust, Our Tradition”
        </h1>

        {/* Longer Subheading */}
        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Have a query or planning a bulk order? Let's connect and bring
          authentic taste to your home. Our team is just a message away to help
          you with the best quality products and quick service.
        </motion.p>

        {/* Contact Button -> Opens WhatsApp */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            onClick={openWhatsApp}
            className="cursor-pointer inline-block px-8 py-3 bg-black text-white font-semibold border border-[#D4B25F] hover:bg-[#D4B25F] hover:text-black transition-all duration-300 rounded-full shadow-lg"
          >
            Contact Us on WhatsApp
          </button>
        </motion.div>
      </motion.div>

      {/* Custom Animations */}
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

export default ContactHero;
