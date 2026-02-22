import React, { useState } from "react";
import { cars } from "@/assets/image";
import { LuFuel } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
const Allvicles = () => {
  const [activeTab, setActiveTab] = useState("All");

  // فلترة العربيات
  const filteredCars =
    activeTab === "All" ? cars : cars.filter((car) => car.name === activeTab);

  return (
    <div className="container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Explore All Vehicles</h2>

        <button
          onClick={() => setActiveTab("All")}
          className="text-blue-600 font-semibold"
        >
          Show All
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 mb-10">
        {["Recent-cars", "Featured-cars", "Popular-cars"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 transition ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCars.map((car, index) => (
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

export default Allvicles;
