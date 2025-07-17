import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="bg-gradient-to-br from-[#FFFDF8] via-[#F8F1E7] to-[#FFFDF8] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B25F] to-[#8F5A3C]">
              Vision & Mission
            </span>
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          At Bhagwati Traders, we are dedicated to delivering premium quality
          Desi Ghee, rooted in tradition, backed by trust, and guided by a
          promise of purity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
        >
          {/* Icon */}
          <div className="absolute -top-10 left-6 w-20 h-20 bg-[#D4B25F]/10 rounded-full blur-2xl"></div>
          <div className="text-[#D4B25F] text-4xl mb-4">
            <FaLightbulb />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become the most trusted name in the Desi Ghee industry by
            preserving the essence of traditional methods and bringing
            health-focused, natural products to every household in India.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
        >
          {/* Icon */}
          <div className="absolute -top-10 right-6 w-20 h-20 bg-[#8F5A3C]/10 rounded-full blur-2xl"></div>
          <div className="text-[#8F5A3C] text-4xl mb-4">
            <FaBullseye />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To deliver pure, nutritious, and chemical-free ghee through ethical
            sourcing, advanced hygiene, and sustainable practices, ensuring
            health and trust in every spoon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
