import React from "react";
import { cars } from "@/assets/image";
import { LuFuel } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
const Secondfourcar = () => {
  // فلترة العربيات

  return (
    <div className="container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cars.slice(4, 9).map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
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
              <p className="text-gray-500 text-sm mb-3">{car.desc}</p>

              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>
                  <LuFuel />

                  {car.mileage}
                </span>
                <span>
                  <FaGauge />
                  {car.fuel}
                </span>
                <span>
                  <IoMdSettings />
                  {car.type}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{car.price}</span>
                <button className="text-blue-600 text-sm font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Secondfourcar;
