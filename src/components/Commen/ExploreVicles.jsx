import React, { useState, useEffect } from "react";
import { cars } from "@/assets/image";
import { LuFuel } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
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

const ExploreVicles = () => {
  const tabs = ["Audi", "Ford", "Mercedes"];
  const [activeTab, setActiveTab] = useState("Audi");
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  const data = popularMakes[activeTab];

  // ✅ عدد الكروت حسب الشاشة
  useEffect(() => {
    const handle = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(2);
      }
    };

    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const visibleCars = data.slice(startIndex, startIndex + visibleCount);

  const next = () => {
    if (startIndex + visibleCount < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#050b1d] to-[#020617] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Makes</h2>

          <span className="text-sm opacity-70 cursor-pointer hover:underline">
            View All
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 mb-10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setStartIndex(0);
              }}
              className={`pb-3 text-sm whitespace-nowrap ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleCars.map((car, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl overflow-hidden 
                         flex flex-col md:flex-row 
                         items-stretch"
            >
              {/* الصورة */}
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={car.img}
                  alt={car.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* المحتوى */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-full mb-3">
                    Sale
                  </span>

                  <h3 className="font-semibold text-lg mb-2">{car.title}</h3>

                  <p className="text-sm opacity-70 mb-4">{car.desc}</p>

                  <div className="flex flex-wrap gap-4 text-sm opacity-70">
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

                <div className="flex justify-between items-center mt-6">
                  <span className="text-xl font-bold">{car.price}</span>

                  <button className="text-sm hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-12">
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
  );
};

export default ExploreVicles;
