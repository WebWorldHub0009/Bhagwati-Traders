import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import about1 from "../assets/images/box1.jpg"; // Replace with ghee-related image
import about2 from "../assets/images/box3p.png"; // Replace with another ghee product image

const WhyChoose = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="w-full py-16 bg-[#FFF8ED] relative overflow-hidden"
    >
      {/* Soft Background Accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#EEDFC9] to-transparent opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div
        ref={ref}
        className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 relative z-10"
      >
        {/* Left Side - Images */}
        <div className="relative flex justify-center items-center w-full md:w-1/2">
          <motion.img
            src={about1}
            alt="Pure Desi Ghee"
            className="rounded-xl shadow-2xl w-72 h-48 md:w-96 md:h-64 object-cover"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.img
            src={about2}
            alt="Bhagwati Ghee Product"
            className="rounded-xl shadow-xl w-24 h-24 md:w-40 md:h-40 object-cover absolute bottom-[-30px] right-[10px]"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={
              inView
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0.5, rotate: -15 }
            }
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          />

          <motion.div
            className="absolute top-[-20px] left-[30px] bg-[#D4B25F] text-white p-4 md:p-6 rounded-full shadow-lg text-center text-xs md:text-sm font-semibold"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            100% Pure <br /> Desi Ghee
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#B3843E] font-bold uppercase tracking-wider mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B25F] to-[#8F5A3C]">
              BHAGWATI TRADERS
            </span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Bhagwati Traders, we deliver traditionally prepared, farm-fresh
            desi ghee packed with natural aroma and authentic flavor. Our
            process ensures purity, nutrition, and rich granular texture you can
            trust for your family.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4">
              <FaLeaf className="text-[#D4B25F] text-2xl" />
              <span className="text-gray-700 font-semibold">
                Made from Farm-Fresh Cow Milk
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-[#D4B25F] text-2xl" />
              <span className="text-gray-700 font-semibold">
                100% Pure, No Additives, Lab Tested
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-[#D4B25F] hover:bg-[#B8933B] text-white rounded-lg transition font-semibold"
            >
              More About Us
            </Link>
            <Link
              to="/products"
              className="px-6 py-3 border-2 border-[#D4B25F] hover:bg-[#D4B25F] hover:text-white text-[#D4B25F] rounded-lg transition font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
