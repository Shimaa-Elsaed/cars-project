import { cas } from "@/assets/image";
import React from "react";
import { Button } from "../ui/button";

const OnlineCar = () => {
  return (
    <section className="container mx-auto px-28 lg:px-28 py-16 bg-gray-100 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Online, in-person, <br /> everywhere
          </h1>

          <p className="text-gray-600 text-lg">
            Choose from thousands of vehicles from multiple brands and buy
            online with Click & Drive, or visit us at one of our dealerships
            today.
          </p>

          <Button className="px-6 py-3 text-lg">Get Started</Button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={cas[1]}
            alt="car"
            className="w-4/5 rounded-2xl shadow-xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default OnlineCar;
