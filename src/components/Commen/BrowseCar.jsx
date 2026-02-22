import React, { useState } from "react";
import { smcars } from "@/assets/image";

const BrowseCar = () => {
  const [showAll, setShowAll] = useState(false);

  const smallcars = [
    { img: smcars[0], name: "2 Cars", desc: "SUV" },
    { img: smcars[1], name: "5 Cars", desc: "Sedan" },
    { img: smcars[2], name: "7 Cars", desc: "Hatchback" },
    { img: smcars[3], name: "9 Cars", desc: "Hybrid" },
    { img: smcars[4], name: "3 Cars", desc: "Coupe" },
    { img: smcars[3], name: "1 Car", desc: "Convertible" },
  ];

  // لو showAll = false يعرض أول 4 بس
  const visibleCars = showAll ? smallcars : smallcars.slice(0, 4);

  return (
    <div className="container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Browse By Type</h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium hover:underline transition"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500">
        {visibleCars.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <img
              src={item.img}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

            {/* Text */}
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="text-xl font-bold">{item.desc}</h1>
              <p className="text-sm">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCar;
