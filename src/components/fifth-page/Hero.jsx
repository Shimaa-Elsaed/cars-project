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
        style={{ backgroundImage: `url(${Heros.hero9})` }}
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
              <div>
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
          </div>
        </nav>
        <button
          onClick={() => navigate("/page4")}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft size={10} />
        </button>

        <button
          onClick={() => navigate("/page6")}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg"
        >
          <FaChevronRight size={10} />
        </button>
        <div className="relative z-10 h-full flex items-center ">
          <div className="container mx-auto px-24 text-white">
            <div className="max-w-2xl">
              <p className=" text-5xl">$124,67</p>
              <h1 className="text-3xl md:text-6xl font-bold mb-6">
                Marcedes-Benz,C- Class{" "}
              </h1>
              <Button className="text-black bg-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
