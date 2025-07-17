import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import bgContact from "../assets/images/abbg.avif"; // ✅ Replace with actual image
import ContactHero from "../Components/ContactHero";

const ContactPage = () => {
  return (
    <div>
      {/* ✅ Hero Section */}
      <ContactHero />

      {/* ✅ Contact Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row text-black font-sans mt-16">
        {/* ✅ Left Side: Contact Details */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 bg-[#FFFDF8] px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between shadow-md rounded-tr-[50px]"
        >
          <div className="flex flex-col justify-between h-full">
            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#6B3E26] font-serif leading-tight mb-6 border-b-4 border-[#D4B25F] inline-block pb-2">
                Get in Touch
              </h1>
              <p className="text-lg font-medium text-gray-700 mb-10">
                We’re here to assist you with bulk orders, trade inquiries, or any questions.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 text-sm sm:text-base text-gray-800">
                <div>
                  <h4 className="font-bold text-[#6B3E26]">Phone</h4>
                  <p>+91 7303672909</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#6B3E26]">Email</h4>
                  <p>Info@bhagwatitrader.co.in</p>
                  <p>Bhagwatitradersdelhi1@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#6B3E26]">Address</h4>
                  <p>
                    GROUND FLOOR, PLOT NO. 119-120, <br />BLK-D-DDA, SLUM COLONY, Rohini Sector 24, <br /> New Delhi, North West Delhi, Delhi, 110085
                  </p>
                </div>
              </div>
            </div>

            {/* ✅ Social Icons */}
            <div className="mt-10 flex gap-4 text-lg text-gray-600">
              <a
                href="https://www.linkedin.com/company/bhagwatitraders"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4B25F] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/bhagwatitraders"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4B25F] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/bhagwatitraders"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4B25F] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4B25F] transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:info@bhagwatitraders.com"
                className="hover:text-[#D4B25F] transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ✅ Right Side: Contact Form */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-md"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Form */}
          <form
            action="https://formsubmit.co/info@bhagwatitrader.co.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#D4B25F] pb-1 inline-block">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-gray-400 p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-gray-400 p-2 focus:outline-none resize-none h-24 text-white placeholder-gray-300"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-[#D4B25F] hover:bg-[#B8933B] text-black font-semibold py-3 mt-4 transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Hidden fields for formsubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you"
            />
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
