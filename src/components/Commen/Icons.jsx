import React from "react";
import { icon } from "@/assets/image";

const Icons = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
    </div>
  );
};

export default Icons;
