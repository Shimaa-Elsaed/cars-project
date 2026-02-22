import React from "react";
import { Logo } from "@/assets/image";
import { Button } from "../ui/button";
import { Heros } from "@/assets/image";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white h-[70px] text-black px-6 md:px-10 flex items-center z-50 shadow-sm">
        <div className="flex justify-between items-center w-full">
          {/* Left */}
          <div className="flex items-center gap-4 text-sm md:text-base">
            <h1 className="cursor-pointer">Menu</h1>
            <h1 className="hidden sm:block">+564-7456-5797</h1>
          </div>

          {/* Center Logo */}
          <div>
            <img src={Logo.logo3} className="h-10 object-contain" />
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-sm md:text-base">
            <p className="cursor-pointer hidden sm:block">Sign In</p>
            <Button className="text-xs md:text-sm">Submit Listing</Button>
          </div>
        </div>
      </nav>

      {/* ================= HERO IMAGE ================= */}
      <div className="pt-[90px] px-4 md:px-10">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Image */}
          <img
            src={Heros.hero7}
            className="w-full h-[400px] md:h-[600px] object-cover"
          />

          {/* Overlay (علشان النص يبقي واضح) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <p className="text-sm md:text-lg mb-4">
              Find cars for sale and for rent near you
            </p>

            <h1 className="text-2xl md:text-5xl font-bold leading-snug">
              A Vehicle For Every Lifestyle
            </h1>

            <span className="text-2xl md:text-5xl font-bold leading-snug">
              Today
            </span>
          </div>
          {/* Left Arrow */}
          <button
            onClick={() => navigate("/page6")}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-4 rounded-full shadow-lg"
          >
            <FaChevronLeft size={7} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => navigate("/page8")}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-4 rounded-full shadow-lg"
          >
            <FaChevronRight size={7} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
