import React, { useEffect, useState } from "react";
import { Heros } from "@/assets/image";
import { Logo } from "@/assets/image";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { HiMenu, HiX } from "react-icons/hi";

const Hero = () => {
  const [scrol, setScrol] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrol(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${Heros.hero10})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-10 lg:px-28 ${
          scrol ? "bg-white shadow-lg py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <img src={Logo.logo3} alt="logo" className="w-28" />

            {/* Links */}
            <ul
              className={`hidden md:flex items-center gap-6 font-medium transition ${
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
              </a>
            </ul>
          </div>

          {/* Right Side */}
          <div
            className={`flex items-center gap-6 font-medium transition ${
              scrol ? "text-black" : "text-white"
            }`}
          >
            <a
              href="#"
              className="hover:text-blue-500 transition hidden sm:block"
            >
              Signup
            </a>

            <button
              className={`border-2 px-5 py-2 rounded-lg transition duration-300 hidden sm:block ${
                scrol
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-blue-700"
              }`}
            >
              Add Listing
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {open ? (
              <HiX
                size={26}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <HiMenu
                size={26}
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white px-6 py-4 shadow-md space-y-4 text-sm font-medium">
            <ul className="space-y-3">
              <li>Home</li>
              <li>Listings</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>About</li>
              <li>Contact</li>
              <li>Signin</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Left Arrow */}
      <button
        onClick={() => navigate("/page5")}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-4 rounded-full shadow-lg"
      >
        <FaChevronLeft size={7} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => navigate("/page7")}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-4 rounded-full shadow-lg"
      >
        <FaChevronRight size={7} />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-10 lg:px-24 text-white">
          <div className="max-w-2xl space-y-4">
            <p className="text-xl md:text-2xl">
              Find cars for sale and for rent near you
            </p>

            <h1 className="text-3xl md:text-5xl font-bold">
              4,675 Vehicles Available
            </h1>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
                View Inventory
              </Button>

              <Button className="bg-white text-black border px-6 py-3 hover:bg-gray-200">
                Contact Us
              </Button>
            </div>

            <p className="text-lg pt-6">Or Browse Featured Model</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
