import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

// 🍯 Replace with your actual ghee/product/lifestyle images
import img1 from "../assets/images/jar1.avif";
import img2 from "../assets/images/jar2.jpg";
import img3 from "../assets/images/jar3.jpg";
import img4 from "../assets/images/jar4.jpg";

const defaultFaqs = [
  {
    question: "What makes Bhagwati Traders Desi Ghee pure?",
    answer:
      "We source farm-fresh cow & buffalo milk, follow traditional slow-churn methods, and clarify at controlled temperatures. Every batch is lab tested for purity—no additives, no blending oils.",
  },
  {
    question: "Is your ghee made from cow milk, buffalo milk, or a mix?",
    answer:
      "We produce both cow ghee and buffalo ghee (and selected blends). Each SKU is clearly labeled. Cow ghee has a lighter color & aroma; buffalo ghee is richer and creamier.",
  },
  {
    question: "Does your ghee contain preservatives or artificial flavors?",
    answer:
      "No. Our ghee is 100% natural. No preservatives, colors, artificial flavors, or hydrogenated fats are added.",
  },
  {
    question: "How should I store Bhagwati Ghee?",
    answer:
      "Store in a cool, dry place away from direct sunlight. Use a clean, dry spoon—no refrigeration needed unless your climate is extremely hot and humid.",
  },
  {
    question: "What is the shelf life?",
    answer:
      "Unopened: up to 9–12 months depending on batch. Once opened, consume within 6 months for best flavor and nutrition. Always reseal the jar tightly.",
  },
];

const WhoWeAre = ({
  images = [img1, img2, img3, img4],
  faqs = defaultFaqs,
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-gradient-to-r from-[#FFFDF8] via-[#F8F1E7] to-[#FFFDF8] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-stretch">
        {/* Left: Animated 2x2 Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 flex-1">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: idx % 2 === 0 ? -2 : 2,
                boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
              }}
              className="rounded-xl overflow-hidden shadow-md aspect-square bg-white cursor-pointer"
            >
              <img
                src={src}
                alt={`ghee-grid-${idx}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Right: Who We Are + FAQ */}
        <div className="w-full md:w-1/2 flex-1 space-y-6">
          <span className="bg-[#D4B25F]/20 text-[#8F5A3C] text-sm font-semibold px-3 py-1 rounded-full inline-block">
            Who We Are
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug font-serif">
            Pure Desi Ghee with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B25F] to-[#8F5A3C]">
              Tradition & Trust
            </span>
          </h2>

          <p className="text-gray-700 max-w-lg">
            Bhagwati Traders brings authentic Desi Ghee from trusted dairy
            partners to your kitchen. Slow-churned, lab tested, and packed fresh
            so you enjoy the same purity our own families do.
          </p>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#6B3E26]/10 rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-4 text-left text-gray-800 font-medium hover:bg-[#F8F1E7]"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={open}
                  >
                    {item.question}
                    {open ? (
                      <FaMinus className="text-[#D4B25F]" />
                    ) : (
                      <FaPlus className="text-[#D4B25F]" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="px-4 pb-4 text-gray-600 text-sm sm:text-base overflow-hidden leading-relaxed"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
