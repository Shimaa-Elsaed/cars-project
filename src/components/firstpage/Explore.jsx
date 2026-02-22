import React from "react";
import { icon, cars, video } from "@/assets/image";
import { LuFuel } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { FaFonticonsFi } from "react-icons/fa6";
import { TbIcons } from "react-icons/tb";
import { SiConstruct3, SiIcons8 } from "react-icons/si";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const popularMakes = {
  Audi: cars.filter(
    (car) => car.title.includes("Audi") || car.title.includes("Ford"),
  ),
  Ford: cars.filter((car) => car.title.includes("Ford")),
  Mercedes: cars.filter(
    (car) => car.title.includes("C-CLass") || car.title.includes("GLC"),
  ),
};
const Explore = () => {
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
  const tabs = ["Audi", "Ford", "Mercedes"];
  const [activeTab, setActiveTab] = useState("Audi");
  const [startIndex, setStartIndex] = useState(0);

  const data = popularMakes[activeTab];
  const visibleCars = data.slice(startIndex, startIndex + 2);

  const next = () => {
    if (startIndex + 2 < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="w-full">
      {/* ================= BRANDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">
            Explore Our Premium Brands
          </h1>
          <p className="text-sm text-gray-500 cursor-pointer hover:underline">
            Show All Brands
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {icon.map((img, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 flex items-center justify-center
                         hover:shadow-lg transition"
            >
              <img src={img} alt="brand" className="max-h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= VEHICLES ================= */}
      <section className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Explore All Vehicles</h2>
            <p className="text-sm text-gray-500 cursor-pointer hover:underline">
              View All →
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border
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
                  <h3 className="font-semibold mb-1">{car.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    4.0 D5 PowerPulse Momentum 5dr AWD
                  </p>

                  <div className="flex justify-between text-sm text-gray-500 mb-4">
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
                    <span className="text-lg font-bold">{car.price}</span>
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

      {/* ================= SELL CAR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-blue-50 rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={video.video1}
            alt="Sell your car"
            className="w-full h-[360px] object-cover rounded-2xl"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get A Fair Price For Your Car <br /> Sell To Us Today
            </h2>

            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service, competitive pricing, and a wide range of vehicles.
            </p>

            <ul className="space-y-3 mb-3">
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-blue-600 text-xl" />
                UK’s largest provider with more petrol stations
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-blue-600 text-xl" />
                35 roadside assistance locations
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-blue-600 text-xl" />
                Fixed 4 out of 5 cars at the roadside
              </li>
            </ul>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "678M", text: "Cars For Sale" },
            { num: "576M", text: "Dealer Reviews" },
            { num: "758M", text: "Visitors Per Day" },
            { num: "899M", text: "Verified Dealers" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {item.num}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
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
      </section>

      <section className="bg-gradient-to-b from-[#050b1d] to-[#020617] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Popular Makes</h2>
            <span className="text-sm opacity-70 cursor-pointer hover:underline">
              View All →
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-white/10 mb-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setStartIndex(0);
                }}
                className={`pb-3 text-sm ${
                  activeTab === tab
                    ? "border-b-2 border-white"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {visibleCars.map((car, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-4 flex gap-4">
                <img
                  src={car.img}
                  alt={car.title}
                  className="w-48 h-32 object-cover rounded-xl"
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-full mb-2">
                      Sale
                    </span>

                    <h3 className="font-semibold">{car.title}</h3>
                    <p className="text-sm opacity-70 mb-3">{car.desc}</p>

                    <div className="flex gap-4 text-sm opacity-70">
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
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">{car.price}</span>
                    <button className="text-sm hover:underline">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/30
                       flex items-center justify-center hover:bg-white/10"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/30
                       flex items-center justify-center hover:bg-white/10"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
