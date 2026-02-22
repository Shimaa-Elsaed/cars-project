import React from "react";
import { cas } from "@/assets/image";

const OnlinePerson = () => {
  return (
    <section className="bg-black py-6 container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Car Image */}
        <div>
          <img
            src={cas[2]}
            alt="Luxury Car"
            className="w-full h-[450px] object-cover rounded-3xl"
          />
        </div>

        {/* Right Content */}
        <div className="text-white max-w-lg">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Discover The Future Of Driving
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Experience unmatched performance, cutting-edge technology, and
            refined luxury. Our vehicles are designed to elevate every journey
            you take.
          </p>

          <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default OnlinePerson;
