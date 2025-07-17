import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWeightHanging,
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaChevronRight,
} from "react-icons/fa";

import gheeImg from "../assets/images/box1p.png"; // Replace with actual images per SKU if available
import bgImage from "../assets/images/product-bg.avif"; // Background
import ProductsHero from "../Components/ProductsHero";

const ProductsPage = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Mini Delight – 200 gm", size: "200 gm", desc: "Perfect for quick use, gifting, or adding authentic flavor to special dishes.", img: gheeImg },
    { name: "Smart Choice – 250 gm", size: "250 gm", desc: "Compact jar for small families. Ideal for cooking, spreading, and everyday meals.", img: gheeImg },
    { name: "Daily Essential – 500 gm", size: "500 gm", desc: "Balanced size for daily cooking—use in curries, sweets, and breakfast dishes.", img: gheeImg },
    { name: "Family Pack – 1 kg", size: "1 kg", desc: "A must-have for every Indian kitchen. Perfect for tadkas and festive treats.", img: gheeImg },
    { name: "Grand Family Pack – 2 kg", size: "2 kg", desc: "Great for joint families or frequent cooking. Use in biryanis, parathas, and sweets.", img: gheeImg },
    { name: "Event Special – 5 kg", size: "5 kg", desc: "Ideal for house parties, pujas, and family gatherings. High-quality ghee in bulk.", img: gheeImg },
    { name: "Restaurant Pack – 10 kg", size: "10 kg", desc: "Designed for restaurants and caterers. Ensure authentic taste in every dish.", img: gheeImg },
    { name: "Mega Saver – 15 kg", size: "15 kg", desc: "Bulk size for catering, temple kitchens, or wholesale buyers at the best value.", img: gheeImg },
    { name: "Combo Delight Pack", size: "Combo Pack", desc: "A mix of sizes to suit every need—perfect for families and gifting occasions.", img: gheeImg },
  ];

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
    <ProductsHero />
    <div className="relative bg-gradient-to-b from-[#FFFDF8] to-[#F8F1E7] min-h-screen py-10 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#6B3E26] font-serif mb-3">
            Our Premium Ghee Collection
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Pure, authentic Desi Ghee in packs for every home, kitchen, and celebration. Choose a size and enquire—bulk & distribution welcome!
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              onClick={goToContact}
              className="
                group bg-white rounded-xl shadow hover:shadow-lg overflow-hidden
                cursor-pointer flex flex-col transition-transform duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div
                className="
                  w-full flex items-center justify-center
                  bg-white p-6 sm:p-8
                  overflow-hidden
                "
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="
                    max-h-32 sm:max-h-36 md:max-h-40 w-auto object-contain
                    transition-transform duration-300 group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow bg-[#fdfaf1]">
                <h2 className="text-lg sm:text-xl font-bold text-[#6B3E26] mb-1.5">
                  {product.name}
                </h2>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
                  {product.desc}
                </p>

                <div className="mb-3 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#8F5A3C]">
                  <FaWeightHanging className="text-[#D4B25F] text-sm" />
                  <span>{product.size}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToContact();
                  }}
                  className="
                    w-full inline-flex items-center justify-center gap-1.5 sm:gap-2
                    bg-[#6B3E26] hover:bg-[#8F5A3C]
                    text-white py-2 rounded-md sm:rounded-lg font-semibold shadow
                    text-xs sm:text-sm
                    transition
                  "
                >
                  <FaEnvelopeOpenText className="text-sm" />
                  Get Enquiry
                  <FaChevronRight className="opacity-75 text-[10px]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto text-center mt-14">
          <button
            onClick={goToContact}
            className="
              inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full
              bg-[#D4B25F] hover:bg-[#B8933B] text-white font-semibold shadow
              text-sm sm:text-base
              transition
            "
          >
            <FaInfoCircle />
            Need help choosing a pack? Contact us
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductsPage;
