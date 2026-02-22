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
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Heros.hero12})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={Logo.logo3} alt="logo" className="w-16 md:w-20" />
            <h5
              className={`text-lg md:text-2xl font-bold transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              +47548847738
            </h5>
          </div>

          {/* Links (تختفي في الموبايل) */}
          <div
            className={`hidden md:flex items-center gap-6 font-medium transition ${
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
            <a href="#" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Signup
            </a>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button
              className={`px-5 py-2 rounded-lg transition duration-300 border-2
              ${
                scrolled
                  ? "bg-black text-white border-black hover:bg-gray-900"
                  : "bg-transparent text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              Add Listing
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white text-2xl">☰</div>
        </div>
      </nav>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The World's Largest Used Car Dealership
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200">
            Find Your Perfect Vehicle Online
          </h2>
        </div>
      </div>

      {/* ================= ARROWS ================= */}
      <button
        onClick={() => navigate("/page8")}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                   bg-white/70 hover:bg-white 
                   p-2 md:p-4 
                   rounded-full shadow-lg transition"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={() => navigate("/page1")}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
                   bg-white/70 hover:bg-white 
                   p-2 md:p-4 
                   rounded-full shadow-lg transition"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
};

export default Hero;
