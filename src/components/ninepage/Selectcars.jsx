import React from "react";
import { selects } from "@/assets/image";

const Selectcars = () => {
  const select = [
    { img: selects[0], name: "Sedan" },
    { img: selects[1], name: "Coupe" },
    { img: selects[2], name: "SUV" },
    { img: selects[3], name: "Honda" },
    { img: selects[4], name: "Mercedes" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {select.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 py-3 flex justify-center items-center">
                <h3 className="text-white font-semibold text-lg">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Selectcars;
