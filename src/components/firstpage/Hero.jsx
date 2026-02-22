import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Heros } from "@/assets/image";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Heros.hero1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
        {/* Small Text */}
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          Find cars for sales and for rent near you
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect Car
        </h1>

        {/* Tabs */}
        <ul className="flex justify-center items-center gap-6 mb-6 text-sm sm:text-base md:text-lg">
          <li className="border-b-2 border-white pb-1 cursor-pointer">ALL</li>
          <li className="cursor-pointer hover:text-gray-300">New</li>
          <li className="cursor-pointer hover:text-gray-300">Used</li>
        </ul>

        {/* Search Box */}
        <div className="w-full flex justify-center mt-10">
          <div
            className="flex items-center 
               bg-white 
               rounded-full 
               shadow-xl 
               
                px-0
               w-full sm:w-4/5 lg:w-1/2"
          >
            {/* الكلمات */}
            <div className="flex flex-1 justify-between text-black font-medium text-sm sm:text-base px-4 ">
              <span className="cursor-pointer hover:text-blue-600 transition font-bold">
                Any Makers
              </span>
              <span className="cursor-pointer hover:text-blue-600 transition font-bold">
                Any Models
              </span>
              <span className="cursor-pointer hover:text-blue-600 transition font-bold">
                Prices
              </span>
              <span className="cursor-pointer hover:text-blue-600 transition font-bold">
                All Prices
              </span>
            </div>

            {/* الزرار */}
            <button
              className="ml-6 
                 bg-blue-700 
                 hover:bg-blue-800 
                 text-white 
                 font-semibold 
                 px-8 py-3 
                 rounded-full 
                 transition-all duration-300 
                 shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => navigate("/")}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 
                   z-20 bg-white/70 hover:bg-white 
                   p-2 sm:p-3 rounded-full shadow-lg transition"
      >
        <FaChevronLeft size={7} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => navigate("/page2")}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 
                   z-20 bg-white/70 hover:bg-white 
                   p-2 sm:p-3 rounded-full shadow-lg transition"
      >
        <FaChevronRight size={7} />
      </button>
    </section>
  );
};

export default Hero;
