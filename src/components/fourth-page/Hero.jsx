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
      style={{ backgroundImage: `url(${Heros.hero5})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo + Phone */}
          <div className="flex items-center gap-3">
            <img
              src={Logo.logo3}
              alt="logo"
              className="w-30 object-contain h-10"
            />
            <h5
              className={`text-sm sm:text-lg md:text-xl font-bold transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              +47548847738
            </h5>
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
            <a href="#" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Signup
            </a>
          </div>

          {/* Button Desktop */}
          <div className="hidden md:block">
            <button
              className={`px-5 py-2 rounded-lg transition duration-300 border-2
    ${
      scrolled
        ? "bg-black text-white border-black hover:bg-gray-900"
        : "bg-transparent text-white border-white hover:bg-white hover:text-black"
    }
  `}
            >
              Add Listing
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 min-h-[100dvh] flex items-center pt-20 px-20">
        <div className="container mx-auto px-4 sm:px-6 text-white">
          <div className="max-w-xl">
            <p className="text-3xl  sm:text-base text-2xl  mb-2">$124,67</p>

            <h1 className="text-3xl w-full sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Ranger-Black
            </h1>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold">
              2020
            </h2>
          </div>
        </div>
      </div>

      {/* ================= ARROWS ================= */}
      <button
        onClick={() => navigate("/page3")}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 
                   z-20 bg-white/70 hover:bg-white 
                   p-2 sm:p-3 rounded-full shadow-lg transition"
      >
        <FaChevronLeft size={7} />
      </button>

      <button
        onClick={() => navigate("/page5")}
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
