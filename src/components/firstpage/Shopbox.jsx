import React from "react";
import { FaCarSide } from "react-icons/fa";
import { TbCarSuv } from "react-icons/tb";
import { blog, test } from "@/assets/image";

// ================= DATA =================
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

const brands = [
  "Ford",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dacia",
  "DS",
  "Fiat",
  "Land Rover",
  "Lexus",
  "Mercedes-Benz",
  "Mazda",
  "MG",
  "Kia",
  "Abarth",
  "Alfa Romeo",
  "Audi",
  "Bentley",
  "BMW",
  "Chevrolet",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Peugeot",
  "Porsche",
  "Renault",
];

// ================= COMPONENT =================
const Shopbox = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* ================= SHOP BY BRAND ================= */}
      <section className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shop BoxCar Your Way</h2>
          <button className="text-sm text-blue-600 hover:underline">
            View More →
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm font-semibold text-gray-700">
          <span className="border-b-2 border-blue-600 pb-1 cursor-pointer">
            New Cars For Sale
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Used Cars For Sale
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Browse By Type
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Browse By Brand
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm"
            >
              {brand} Cars
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-gray-100 rounded-2xl p-10">
        <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
          <h2 className="font-bold text-2xl">What Our Customers Say</h2>
          <p className="text-gray-600 text-sm">
            Rated 4.7 / 5 based on 28,370 reviews. Showing our 4 & 5 star
            reviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center w-4/5">
          <img
            src={test}
            alt="testimonial"
            className="rounded-2xl w-4/5  object-cover"
          />

          <div>
            <p className="text-yellow-500 mb-3 text-2xl py-2.5">★★★★★ 5.0</p>
            <h3 className="font-semibold text-3xl py-2">Ali TUFAN</h3>
            <p className="text-lg text-gray-500 mb-4 ">Designer</p>

            <p className="text-gray-700 leading-relaxed max-w-md">
              I'd suggest Macklin Motors Nissan Glasgow South to a friend
              because I had great service from my salesman Patrick and all of
              the team.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BLOGS ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Latest Blog Posts</h2>

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

      {/* ================= CTA ================= */}
      <section className="grid md:grid-cols-2 gap-6 m-3 p-5">
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
    </div>
  );
};

export default Shopbox;
