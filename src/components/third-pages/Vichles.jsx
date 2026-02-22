import React from "react";
import { cars, video } from "@/assets/image";
import { LuFuel } from "react-icons/lu";
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { TbCarSuv } from "react-icons/tb";
import { blog } from "@/assets/image";
import { useState } from "react";
import Electric from "../eightpage/Electric";
import Login from "./Login";

const blogs = [
  {
    title: "2024 BMW ALPINA XB7",
    img: blog.blog1,
    but: "Sound",
    name: "Admin",
    date: "November 22, 2030",
  },
  {
    title: "BMW X6 M50i Review",
    img: blog.blog2,
    but: "Accessories",
    name: "Admin",
    date: "Jan 22, 2030",
  },
  {
    title: "BMW X5 Gold 2024",
    img: blog.blog3,
    but: "Exterior",
    name: "Admin",
    date: "May 22, 2030",
  },
];
const tabs = ["BMW", "Audi", "SUV", "Chevrolet"];
const Vichles = () => {
  const [activeTab, setActiveTab] = useState("BMW");
  const filteredCars = cars.filter((car) => car.category === activeTab);
  return (
    <div>
      {/* ================= VEHICLES ================= */}
      <section className="bg-gray-50 container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10 py-3">
            <h2 className="text-3xl font-bold ">Explore All Vehicles</h2>
            <p className="text-sm text-gray-500 cursor-pointer hover:underline">
              View All →
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  py-5">
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
      <Login />
      {/* ================= CTA ================= */}
      <section className="grid md:grid-cols-2 gap-6 container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-blue-50 p-8 rounded-2xl flex justify-between items-center p-10">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Are You Looking For a Car?
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              We are committed to providing our customers with exceptional
              service.
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
              Get Started →
            </button>
          </div>
          <FaCarSide className="text-7xl text-pink-300" />
        </div>

        <div className="bg-pink-50 p-8 rounded-2xl flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Do You Want to Sell a Car?
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              We are committed to providing our customers with exceptional
              service.
            </p>
            <button className="bg-black text-white px-5 py-2 rounded-md">
              Get Started →
            </button>
          </div>
          <TbCarSuv className="text-7xl text-blue-500" />
        </div>
      </section>
      <section className="py-16 container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
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
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 py-5  ">
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
      <Electric />
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
              Flexible finance for added shine{" "}
            </h2>

            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service, competitive pricing, and a wide range of vehicles.
            </p>

            <p>
              AA Car Finance allows you to get a quote without affecting your
              credit rating. Find a car from any dealer, and we’ll do the rest.
              With a large panel of 30+ lenders we can help most drivers.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition m-6">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
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
      <section className="container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 py-5">
        <h2 className="text-xl font-semibold mb-8 ">Latest Blog Posts</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition relative"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              {/* Tag */}
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {item.but}
              </span>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span>{item.name}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{item.date}</span>
                </div>

                <h3 className="font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vichles;
