import React, { useState } from "react";
import { smallscar } from "@/assets/image";

const Smallcar = () => {
  const [showAll, setShowAll] = useState(false);

  // لو showAll = true يعرض كل الصور
  // لو false يعرض أول 6 بس
  const visibleCars = showAll ? smallscar : smallscar.slice(0, 6);

  return (
    <div className="container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between container mx-auto p-10">
        <p className="text-2xl font-bold">Browse By Type</p>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-500 font-semibold"
        >
          {showAll ? "Less show" : "Show all"}
        </button>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 px-10">
        {visibleCars.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden ">
            <img
              src={item}
              alt={`car-${index}`}
              className=" object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smallcar;
