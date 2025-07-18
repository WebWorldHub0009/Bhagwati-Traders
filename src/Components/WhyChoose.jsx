import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import about1 from "../assets/images/box1.jpg";     // main ghee image
import about2 from "../assets/images/box3p.png";   // secondary ghee image

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
        {/* LEFT: Image Cluster */}
        <div className="relative flex justify-center items-center w-full md:w-1/2">
          {/* Main Image */}
          <motion.img
            src={about1}
            alt="Pure Desi Ghee"
            /* keep wrapper footprint generous, just limit image height */
            className="
              rounded-xl shadow-2xl
              max-w-[16rem] sm:max-w-[20rem] md:max-w-[24rem]
              max-h-[10rem] sm:max-h-[14rem] md:max-h-[16rem]
              w-auto h-auto object-contain
            "
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Overlay / Accent Image */}
          <motion.img
            src={about2}
            alt="Bhagwati Ghee Product"
            className="
              rounded-xl shadow-xl
              absolute
              bottom-[-20px] right-[10px]
              max-w-[5rem] sm:max-w-[6.5rem] md:max-w-[8rem]
              max-h-[5rem] sm:max-h-[6.5rem] md:max-h-[8rem]
              w-auto h-auto object-contain
              shrink-0
            "
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={
              inView
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0.5, rotate: -15 }
            }
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          />

          {/* Bubble Badge */}
          <motion.div
            className="
              absolute -top-4 left-4
              bg-[#D4B25F] text-white
              px-3 py-2 md:px-4 md:py-3
              rounded-full shadow-lg
              text-center
              text-[10px] sm:text-xs md:text-sm font-semibold
            "
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            100% Pure <br /> Desi Ghee
          </motion.div>
        </div>

        {/* RIGHT: Text Content */}
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
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B25F] to-[#8F5A3C]">
              BHAGWATI TRADERS
            </span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Bhagwati Traders, we deliver traditionally prepared, farm-fresh
            desi ghee packed with natural aroma and authentic flavor. Our
            process ensures purity, nutrition, and the rich granular texture
            you can trust for your family.
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
          <div className="flex gap-4 flex-wrap">
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
