import React, { useState } from "react";
import { cars } from "@/assets/image";
import { LuFuel } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const SpecialCars = () => {
  const [showAll, setShowAll] = useState(false);

  // يعرض 4 بس
  const visibleCars = showAll ? cars : cars.slice(0, 4);

  return (
    <section className="container mx-auto px-6 lg:px-16 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Special Cars</h1>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-semibold hover:underline transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleCars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-48 object-cover"
              />

              {car.badge && (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  {car.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{car.title}</h3>

              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {car.desc}
              </p>

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <LuFuel />
                  {car.mileage}
                </span>

                <span className="flex items-center gap-1">
                  <FaGauge />
                  {car.fuel}
                </span>

                <span className="flex items-center gap-1">
                  <IoMdSettings />
                  {car.type}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{car.price}</span>

                <button className="text-blue-600 text-sm font-semibold hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialCars;
