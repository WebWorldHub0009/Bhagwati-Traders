import React from "react";
import { FaUserCircle, FaQuoteLeft, FaStar } from "react-icons/fa";
import bgImage from "../assets/images/abbg.avif"; // replace w/ a cream texture if available
import { Link } from "react-router-dom";

// === Testimonials Data (edit freely) ===
const testimonials = [
  {
    name: "Priya Mehta",
    role: "Home Cook, Mumbai",
    feedback:
      "I switched to Bhagwati Traders Desi Ghee and the aroma in my dal and rotis is unbelievable. Feels like homemade!",
    rating: 5,
  },
  {
    name: "Ravi Sharma",
    role: "Fitness Enthusiast",
    feedback:
      "I use it for morning bullet chai and meal prep. Pure, clean taste—no greasy after-feel.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    role: "Mom of 2",
    feedback:
      "My kids love parathas again! The texture and flavor tell you it's real ghee, not a mix.",
    rating: 4,
  },
  {
    name: "Harpreet Singh",
    role: "Restaurant Owner",
    feedback:
      "We use it in our signature dal makhani. Guests ask what we changed—the secret is your ghee!",
    rating: 5,
  },
  {
    name: "Neha Verma",
    role: "Nutrition Coach",
    feedback:
      "Granular, yellow, and clean-melting—exactly what I recommend to clients looking for healthy fats.",
    rating: 5,
  },
  {
    name: "Dev Patel",
    role: "Festival Caterer",
    feedback:
      "Used it for Diwali sweets. The richness stayed even after reheating. Top quality.",
    rating: 5,
  },
];

const showStars = true; // flip to false if you don’t want rating stars

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-10 lg:px-20 text-gray-800"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Cream overlay for readability */}
      <div className="absolute inset-0 bg-[#FFFDF8]/90 backdrop-blur-[1px] z-0"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-[#6B3E26] mb-2 font-serif">
          What Our Customers Say
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Families, chefs, and nutrition experts trust Bhagwati Traders for pure Desi Ghee.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="
              group relative bg-[#FFFDF8] shadow-md rounded-xl p-6 text-center
              border border-[#6B3E26]/10
              transition-all duration-300 ease-out
              hover:shadow-xl hover:-translate-y-1 hover:border-[#8F5A3C]/30
            "
          >
            {/* Avatar */}
            <div
              className="
                w-20 h-20 mx-auto -mt-16 mb-4 rounded-full bg-white
                ring-4 ring-[#6B3E26]/10 shadow-lg
                flex items-center justify-center text-[#8F5A3C] text-5xl
                transition-transform duration-300 group-hover:scale-105
              "
            >
              <FaUserCircle />
            </div>

            {/* Quote */}
            <FaQuoteLeft className="text-[#D4B25F] text-xl mb-3 mx-auto opacity-80" />

            {/* Feedback */}
            <p className="text-gray-700 text-sm italic mb-5 leading-relaxed">
              “{t.feedback}”
            </p>

            {/* Rating Stars */}
            {showStars && (
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < t.rating ? "text-[#D4B25F]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Name & Role */}
            <h4 className="font-bold text-[#6B3E26] text-lg">{t.name}</h4>
            <span className="text-gray-500 text-xs">{t.role}</span>
          </div>
        ))}
      </div>

      {/* Optional CTA Below Testimonials */}
      <div className="relative z-10 text-center mt-16">
        <Link
          to="/products"
          className="
            inline-block px-8 py-3 rounded-full font-semibold
            bg-[#6B3E26] text-white hover:bg-[#8F5A3C]
            transition-colors duration-300
          "
        >
          Try Our Ghee
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
