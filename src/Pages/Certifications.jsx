import React from "react";
import { FaEye, FaDownload, FaCertificate } from "react-icons/fa";

// ⬇️ Update these imports to your actual certificate PDF paths
import gst from "../assets/certificate/rc.pdf";
import udyam from "../assets/certificate/udyam.pdf";
import CertificateHero from "../Components/CertificateHero";
// If you want to add more later, just import and push to the array below.

const certificates = [
  {
    title: "GST Registration Certificate",
    provider: "Government of India",
    file: gst,
    highlight: "GSTIN: 07GKXPS5124N1Z3",
  },
  {
    title: "Udyam MSME Certificate",
    provider: "Ministry of Micro, Small & Medium Enterprises",
    file: udyam,
    highlight: "UDYAM-DL-06-0166578",
  },
];

const Certifications = () => {
  return (
    <>
    <CertificateHero/>
    <section
      className="
        relative overflow-hidden
        py-20 px-6 lg:px-20
        bg-gradient-to-br from-[#FFFDF8] via-[#F8F1E7] to-[#FFFDF8]
        text-gray-800
      "
    >
      {/* Decorative Background Shape */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="400" cy="300" r="280" fill="#D4B25F" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6 text-[#6B3E26] font-serif">
          Our Certifications
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-14">
          Proof of purity, compliance, and trust. Bhagwati Traders is registered
          and recognized under the Government of India’s GST and MSME (Udyam)
          frameworks.
        </p>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
                bg-white/90 backdrop-blur-sm
                border-l-4 border-[#D4B25F]
                shadow-md rounded-lg
                p-6 flex flex-col justify-between
                hover:shadow-xl transition duration-300
              "
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FaCertificate className="text-[#D4B25F] text-xl" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Issued by {cert.provider}
                </p>
                {cert.highlight && (
                  <p className="text-sm font-semibold text-[#8F5A3C] mb-4">
                    {cert.highlight}
                  </p>
                )}
              </div>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2
                    bg-[#D4B25F] hover:bg-[#B8933B]
                    text-white rounded
                    transition
                  "
                >
                  <FaEye /> View
                </a>
                <a
                  href={cert.file}
                  download
                  className="
                    flex items-center gap-2 px-4 py-2
                    border border-[#D4B25F] text-[#D4B25F]
                    hover:bg-[#FFF8ED]
                    rounded transition
                  "
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Footer Copy */}
        <div className="mt-16 text-center max-w-3xl mx-auto text-md text-gray-700 leading-relaxed">
          <p>
            These certificates affirm our legal compliance and operational
            credibility as a food producer. For trade partnerships, bulk
            procurement, institutional supply, or regulatory verification, feel
            free to{" "}
            <a
              href="/contact"
              className="text-[#8F5A3C] font-semibold underline hover:text-[#6B3E26] transition"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Certifications;
