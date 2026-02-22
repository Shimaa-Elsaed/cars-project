import React from "react";
import { blog, logobrands } from "@/assets/image";

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

const Latest = () => {
  return (
    <div className="py-10">
      {/* BLOG SECTION */}
      <section className="container mx-auto px-32">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
                  {item.but}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{item.name}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{item.date}</span>
                </div>

                <h3 className="font-semibold text-lg text-gray-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLORE BRANDS */}
      <section className="container mx-auto px-32  mt-10">
        <div className="grid md:grid-cols-2 items-center gap-12 bg-gray-100 p-12 rounded-2xl py-28">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Explore Our Premium Brands
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Show All Brands
            </button>
          </div>

          {/* الصورة كانت مش ظاهرة لأنك كنتِ باعتة string مش array */}
          <div className="flex justify-center">
            <img
              src={logobrands}
              alt="brands"
              className="w-1/2 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Latest;
