import React, { useEffect, useState } from "react";
import { Heros, Logo } from "@/assets/image";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${Heros.hero3})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={Logo.logo3}
              alt="logo"
              className="w-30 object-contain h-10"
            />{" "}
            <h1
              className={`text-lg sm:text-2xl font-bold transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              All Cars
            </h1>
          </div>

          {/* Desktop Links */}
          <div
            className={`hidden md:flex items-center gap-6 lg:gap-8 font-medium transition ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <a href="#" className="hover:text-blue-500 transition">
              Home
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Listings
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Pages
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Contact
            </a>

            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition text-white">
              Add Listing
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fast, Simple and Easy
            </h1>

            <p className="mb-8 text-base sm:text-lg">
              Shop Online Pickup Today
            </p>

            {/* Search Box */}
            <div
              className="bg-white rounded-xl shadow-xl p-4 
                            flex flex-col md:flex-row gap-4 
                            text-black w-full"
            >
              <select className="outline-none border rounded-md px-4 py-2 w-full text-sm sm:text-base">
                <option>Any Makes</option>
              </select>

              <select className="outline-none border rounded-md px-4 py-2 w-full text-sm sm:text-base">
                <option>Any Models</option>
              </select>

              <select className="outline-none border rounded-md px-4 py-2 w-full text-sm sm:text-base">
                <option>All Prices</option>
              </select>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
                Search
              </button>
            </div>

            {/* Brands */}
            <div className="mt-6 flex flex-wrap gap-6 sm:gap-10 text-xs sm:text-sm text-gray-200">
              <span>BMW</span>
              <span>Audi</span>
              <span>Mercedes</span>
              <span>Toyota</span>
              <span>Honda</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ARROWS ================= */}
      <button
        onClick={() => navigate("/page2")}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 
                   z-20 bg-white/70 hover:bg-white 
                   p-2 sm:p-3 rounded-full shadow-lg transition"
      >
        <FaChevronLeft size={7} />
      </button>

      <button
        onClick={() => navigate("/page4")}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 
                   z-20 bg-white/70 hover:bg-white 
                   p-2 sm:p-3 rounded-full shadow-lg transition"
      >
        <FaChevronRight size={7} />
      </button>
    </section>
  );
};

export default Hero;
