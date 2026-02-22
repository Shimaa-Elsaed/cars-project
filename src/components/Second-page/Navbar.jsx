import React, { useState } from "react";
import { Logo } from "@/assets/image";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="">
            <img src={Logo.logo3} alt="logo" className="w-30" />
          </div>{" "}
          <p className="hidden sm:block text-sm font-medium">+2436-46-5646</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-bold">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Listings</li>
          <li className="cursor-pointer hover:text-blue-600">Blog</li>
          <li className="cursor-pointer hover:text-blue-600">Pages</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
          <li className="cursor-pointer hover:text-blue-600">Signin</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block border-2 border-black text-black px-4 py-2 rounded-2xl text-sm hover:bg-black hover:text-white transition">
          Submit Listing
        </button>

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

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md space-y-4 text-sm font-medium">
          <p className="text-gray-600">+2436-46-5646</p>
          <ul className="space-y-3">
            <li>Home</li>
            <li>Listings</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>About</li>
            <li>Contact</li>
            <li>Signin</li>
          </ul>
          <button className="w-full border-2 border-black py-2 rounded-xl">
            Submit Listing
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
