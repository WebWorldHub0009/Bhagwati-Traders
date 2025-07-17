import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHideTopBar(true); // scrolling down
      } else {
        setHideTopBar(false); // scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full z-50">
      {/* ✅ Top Info Bar (NOT sticky) */}
      <div
        className={`bg-[#775949] text-white text-xs sm:text-sm px-4 py-2 flex flex-wrap justify-center gap-x-6 transition-all duration-300 ${
          hideTopBar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <span>
          Email:{" "}
          <a
            href="mailto:Info@bhagwatitrader.co.in"
            className="text-white hover:underline"
          >
            Info@bhagwatitrader.co.in
          </a>
        </span>
        <span>
          Call:{" "}
          <a href="tel:+917303672909" className="text-white hover:underline">
            7303672909
          </a>
        </span>
        <span>GSTIN: 07GKXPS5124N1Z3</span>
        <span>UDYAM: UDYAM-DL-06-0166578</span>
      </div>

      {/* ✅ Main Navbar (Sticky) */}
      <header className="sticky top-0 bg-[#fffcf1] shadow-md z-50">
        <div className="py-4 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0"
              style={{ height: "48px" }}
            >
              <img
                src={logo}
                alt="Bhagwati Traders Logo"
                className="
                  object-contain w-auto
                  h-14 sm:h-16 md:h-20 lg:h-24
                  -my-2 sm:-my-3 md:-my-4
                  transition-transform duration-300
                "
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 font-medium text-[#6B3E26]">
              {["Home", "About", "Products", "Certificates", "Contact"].map(
                (item, index) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={index}
                      to={path}
                      className={`relative transition-all duration-300 ${
                        isActive(path)
                          ? "text-[#8F5A3C]"
                          : "hover:text-[#8F5A3C]"
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#8F5A3C] transition-transform duration-300 origin-left ${
                          isActive(path) ? "scale-x-100" : "scale-x-0"
                        } hover:scale-x-100`}
                      ></span>
                    </Link>
                  );
                }
              )}
            </nav>

            {/* CTA Button */}
            <Link
              to="/products"
              className="hidden md:inline-block ml-6 px-6 py-2 rounded-full bg-[#6B3E26] text-white font-semibold hover:bg-[#8F5A3C] transition-all duration-300"
            >
              Order Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl text-[#6B3E26]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {menuOpen && (
            <div className="md:hidden mt-3 bg-[#FFFDF8] rounded-lg shadow-lg py-4 px-6 space-y-4 animate-slideDown">
              {["Home", "About", "Products", "Certificates", "Contact"].map(
                (item, index) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={index}
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-lg font-medium ${
                        isActive(path)
                          ? "text-[#8F5A3C]"
                          : "hover:text-[#6B3E26]"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                }
              )}
              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="inline-block w-full text-center mt-2 px-6 py-2 rounded-full bg-[#6B3E26] text-white font-semibold hover:bg-[#8F5A3C] transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
