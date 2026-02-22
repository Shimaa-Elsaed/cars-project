import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Button } from "../ui/button";

const PageBlack = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-16 bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        {/* Left Content */}
        <div className="flex items-start gap-6 max-w-xl">
          {/* Icon */}
          <FaSearchLocation className="text-5xl text-blue-600 mt-2" />

          {/* Text */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              Search over 150,000 vehicles
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Choose from thousands of trusted used cars and vans across the UK,
              from our national network of vetted dealers.
            </p>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Search Cars
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3">
            Search Vans
          </Button>
        </div>
      </div>

      {/* Browse Section */}
      <div className="mt-16">
        <h4 className="text-lg font-semibold mb-6">Or browse by type:</h4>

        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            className="border-white text-black hover:bg-black hover:text-white"
          >
            Automatic Cars
          </Button>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-black hover:text-white"
          >
            SUVs
          </Button>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-black hover:text-white"
          >
            Electric Cars
          </Button>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-black hover:text-white"
          >
            New in Stock
          </Button>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-black hover:text-white"
          >
            Petrol
          </Button>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-black hover:text-white"
          >
            Diesel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageBlack;
