import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Heros } from "@/assets/image";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Heros.hero2})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
        {/* Subtitle */}
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          Find cars for sales and for rent near you
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Find Your Perfect Car
        </h1>
        {/* Search Box */}
        <div
          className="
    bg-white text-black font-semibold
    rounded-3xl
    w-full sm:w-4/5 lg:w-1/2
    p-4
    shadow-xl
    flex flex-col items-center
    gap-3
  "
        >
          {/* Mobile View */}
          <div className="w-full sm:hidden">
            {/* Text Row */}
            <div className="flex flex-col justify-between w-full text-center">
              <span className="cursor-pointer p-2 ">Any Makers</span>
              <span className="cursor-pointer p-2 ">Any Models</span>
            </div>

            {/* Search Icon Centered */}
            <div className="flex justify-center mt-2">
              <span
                className="
          bg-blue-700 hover:bg-blue-800
          text-white
          p-2
          rounded-full
          shadow-md
          transition
          cursor-pointer
        "
              >
                <CiSearch size={20} />
              </span>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:flex w-full justify-between text-sm sm:text-base items-center">
            <span className="cursor-pointer">Any Makers</span>
            <span className="cursor-pointer">Any Models</span>
            <span className="cursor-pointer">Prices</span>
            <span className="cursor-pointer">All Prices</span>
            <span
              className="
        bg-blue-700 hover:bg-blue-800
        text-white
        p-3
        rounded-full
        shadow-md
        transition
        cursor-pointer
      "
            >
              <CiSearch size={18} />
            </span>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => navigate("/")}
        className="
        absolute left-2 sm:left-6
        top-1/2 -translate-y-1/2
        z-20 bg-white/70 hover:bg-white
        p-1 sm:p-2
        rounded-full shadow-lg
        transition
      "
      >
        <FaChevronLeft size={7} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => navigate("/page3")}
        className="
        absolute right-2 sm:right-6
        top-1/2 -translate-y-1/2
        z-20 bg-white/70 hover:bg-white
        p-2 sm:p-3
        rounded-full shadow-lg
        transition
      "
      >
        <FaChevronRight size={7} />
      </button>
    </section>
  );
};

export default Hero;
