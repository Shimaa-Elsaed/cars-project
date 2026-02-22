import React, { useState } from "react";
import { cas } from "@/assets/image"; // عدلي المسار لو مختلف

const BrouseByType = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedCars = showAll ? cas : cas.slice(0, 6);

  return (
    <section className=" container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Browse All Cars</h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-semibold hover:underline transition"
        >
          {showAll ? "Show Less" : "All"}
        </button>
      </div>

      {/* Cars Layout */}
      {!showAll ? (
        <div className="flex flex-col gap-6">
          {/* Row 1 - 2 cars */}

          {/* Row 2 - 3 cars */}
          <div className="grid grid-cols-3 gap-6">
            {displayedCars.slice(0, 6).map((car, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img src={car} alt="" className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {displayedCars.map((car, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img src={car} alt="" className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BrouseByType;
