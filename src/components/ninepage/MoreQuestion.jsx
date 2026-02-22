import React from "react";
import { cas } from "@/assets/image";
import { Button } from "../ui/button";

const MoreQuestion = () => {
  return (
    <section className="container mx-auto py-24 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div>
          <img
            src={cas[0]}
            alt="Customer Support"
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Have More Questions? Don’t Hesitate To Reach Us
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our team is ready to help you find the perfect vehicle. Contact us
            today and get personalized assistance tailored to your needs.
          </p>

          {/* White Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="px-6 py-3 bg-white border border-black rounded-full hover:bg-black hover:text-white transition">
              +1 (234) 567 890
            </button>

            <button className="px-6 py-3 bg-white border border-black rounded-full hover:bg-black hover:text-white transition">
              support@email.com
            </button>
          </div>

          {/* Black Button */}
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoreQuestion;
