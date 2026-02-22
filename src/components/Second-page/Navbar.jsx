import React from "react";
import { Logo } from "@/assets/image";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex justify-between items-center ">
          <img src={Logo.logo3} className="m-3" />
          <p className="font-medium">+2436-46-5646</p>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-bold">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Listings</li>
          <li className="cursor-pointer hover:text-blue-600">Blog</li>
          <li className="cursor-pointer hover:text-blue-600">Pages</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
          <li className="cursor-pointer hover:text-blue-600">Signin</li>
        </ul>

        <button className="border-2 border-black  text-black px-4 py-2 rounded-2xl text-sm">
          Submit Listing
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
