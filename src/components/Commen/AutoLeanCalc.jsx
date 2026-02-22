import React from "react";
import { cas } from "@/assets/image";
import { Button } from "../ui/button";

const AutoLeanCalc = () => {
  return (
    <section className="relative h-[500px] flex items-center container mx-auto px-8 py-6">
      {/* Background Image */}
      <img
        src={cas[8]}
        alt="Car"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Loan Card - shifted left */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-[380px] ml-10">
          <h3 className="text-2xl font-bold mb-6">Auto Loan Calculator</h3>

          <div className="space-y-4">
            <input
              type="number"
              placeholder="Vehicle Price"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Down Payment"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Loan Term (months)"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full">
              Calculate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoLeanCalc;
