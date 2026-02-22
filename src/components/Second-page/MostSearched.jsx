import React, { useState } from "react";
import { cars } from "@/assets/image";
import { FaFonticonsFi } from "react-icons/fa6";
import { TbIcons } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { SiConstruct3, SiIcons8 } from "react-icons/si";
import { gas } from "@/assets/image";
const tabs = ["BMW", "Audi", "SUV", "Chevrolet"];

const MostSearched = () => {
  const categories = [
    "Adventure Cars",
    "SUVs",
    "Electric Cars",
    "Hybrid",
    "Petrol",
    "Diesel",
  ];
  const [activeTab, setActiveTab] = useState("BMW");
  const filteredCars = cars.filter((car) => car.category === activeTab);
  const choose = [
    {
      icon: <FaFonticonsFi />,
      text: "Special Financing Offers",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <TbIcons />,
      text: "Trusted Car Dealership",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <SiConstruct3 />,
      text: "Transparent Pricing",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <SiIcons8 />,
      text: "Expert Car Services",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ];
  return (
    <>
      <section className="   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          The Most Searched Cars
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
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
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{car.title}</h3>

                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{car.mileage}</span>
                  <span>{car.fuel}</span>
                  <span>{car.type}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{car.price}</span>

                  <button className="text-sm text-gray-500 hover:text-blue-600">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {choose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.text}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-6 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">Latest Cars</h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.slice(4, 8).map((car, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl overflow-hidden border
                                 hover:shadow-xl transition"
              >
                <div className="relative">
                  <img
                    src={car.img}
                    alt={car.title}
                    className="h-48 w-full object-cover"
                  />
                  {car.badge && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                      {car.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-semibold mb-1 text-white">{car.title}</h3>
                  <p className="text-sm text-white mb-4">
                    4.0 D5 PowerPulse Momentum 5dr AWD
                  </p>

                  <div className="flex justify-between text-sm text-gray-200 mb-4">
                    <span className="flex items-center gap-1">
                      <FaGauge /> {car.mileage}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuFuel /> {car.fuel}
                    </span>
                    <span className="flex items-center gap-1">
                      <IoMdSettings /> {car.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      {car.price}
                    </span>
                    <button className="text-blue-600 text-sm hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Need Some Inspiration?</h2>

        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {categories.map((cat, index) => (
            <button key={index} className="hover:text-blue-600 transition">
              {cat}
            </button>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-6 mx-20 rounded-2xl text-center">
        <div className="container mx-auto px-28 py-20 grid md:grid-cols-4 gap-8 items-center text-white">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who is BoxCar</h2>
            <p className="text-sm text-blue-100">
              BoxCar is a trusted digital automotive marketplace that connects
              buyers and sellers easily.
            </p>
          </div>

          {/* Reviews Images */}
          {gas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg flex justify-center items-center"
            >
              <img src={item} alt="review" className="h-28 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MostSearched;
