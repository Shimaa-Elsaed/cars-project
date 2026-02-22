import React from "react";
import { blutoths } from "@/assets/image";
import { Button } from "../ui/button";

const Blutoth = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={blutoths}
            alt="Subscribe"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe To Our Mailing List And Stay Up To Date
          </h2>

          <p className="mb-6 text-blue-100">
            We’ll keep you updated with the best new offers and latest cars.
          </p>

          {/* Input + Button */}
          <div className="flex bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 outline-none text-gray-700"
            />
            <Button className="rounded-full m-2 bg-blue-700 hover:bg-blue-800">
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blutoth;
