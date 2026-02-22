import React, { useEffect, useState } from "react";
import { Heros } from "@/assets/image";
import { Logo } from "@/assets/image";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";
const Hero = () => {
  const [scrol, setScrol] = useState(false);
  const navigate = useNavigate();
  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrol(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <section
        className="relative bg-center bg-cover h-screen "
        style={{ backgroundImage: `url(${Heros.hero11})` }}
      >
        <div className=" absolute inset-0 bg-black/40"></div>
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrol ? "bg-white shadow-lg py-3" : "bg-transparent py-6"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="">
              <img src={Logo.logo3} alt="logo" className="w-30" />
            </div>

            {/* Links */}
            <div
              className={`flex items-center gap-8 font-medium transition ${
                scrol ? "text-black" : "text-white"
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
              </a>{" "}
              <div className="hidden md:block">
                <button
                  className={`px-5 py-2 rounded-lg transition duration-300 border-2
    ${
      scrol
        ? "bg-black text-white border-black hover:bg-gray-900"
        : "bg-transparent text-white border-white hover:bg-white hover:text-black"
    }
  `}
                >
                  Add Listing
                </button>
              </div>
            </div>
          </div>
        </nav>
        <button
          onClick={() => navigate("/page7")}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft size={7} />
        </button>

        <button
          onClick={() => navigate("/page9")}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg"
        >
          <FaChevronRight size={7} />
        </button>
        <div>
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content Box */}
          <div className="absolute inset-0 flex items-center justify-start px-20">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]">
              <h1 className="text-3xl font-bold mb-6">
                Let’s Find Your Perfect Car
              </h1>

              <input
                type="text"
                placeholder="Select Type"
                className="w-full p-3 mb-4 border rounded-lg"
              />

              <input
                type="text"
                placeholder="Select Brand"
                className="w-full p-3 mb-4 border rounded-lg"
              />

              <input
                type="text"
                placeholder="Price"
                className="w-full p-3 mb-4 border rounded-lg"
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
