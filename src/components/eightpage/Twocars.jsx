import React from "react";
import { cas } from "@/assets/image";

const Twocars = () => {
  const cars = [
    {
      img: cas[0],
      title: "Luxury Performance",
      desc: "Discover premium comfort and unmatched performance with our latest luxury collection.",
      btn: "Explore Now",
    },
    {
      img: cas[7],
      title: "Smart & Electric",
      desc: "Drive into the future with eco-friendly technology and intelligent driving systems.",
      btn: "View Details",
    },
  ];

  return (
    <section className="container mx-auto py-16 px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Image */}
            <img
              src={car.img}
              alt={car.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-2xl font-bold mb-4">{car.title}</h2>
              <p className="mb-6 max-w-sm">{car.desc}</p>
              <button className="bg-white text-black hover:bg-blue-700 px-6 py-2 rounded-full transition">
                {car.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Twocars;
