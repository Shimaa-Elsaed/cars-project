import React from "react";
import { svgs } from "@/assets/image";
import { FaCarSide } from "react-icons/fa";
import { TbCarSuv } from "react-icons/tb";
const Browse = () => {
  const data = [
    { img: svgs[0], title: "Sedan" },
    { img: svgs[1], title: "SUV" },
    { img: svgs[2], title: "Electric" },
    { img: svgs[3], title: "Hybrid" },
    { img: svgs[4], title: "Coupe" },
    { img: svgs[5], title: "Convertible" },
    { img: svgs[6], title: "Truck" },
    { img: svgs[7], title: "Van" },
  ];

  return (
    <>
      <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-2xl font-bold mb-10 text-center pt-6">
          Browse By Type
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-4 flex flex-col items-center justify-center
                       shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 object-contain mb-3"
              />
              <p className="text-sm font-medium text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="grid md:grid-cols-2 gap-6  max-w-7xl mx-auto px-4 py-16 ">
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
    </>
  );
};

export default Browse;
