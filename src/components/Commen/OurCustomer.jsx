import React from "react";
import { FaStar } from "react-icons/fa";

const OurCustomer = () => {
  return (
    <section className="bg-gray-100 py-6 container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          {/* Stars */}
          <div className="flex justify-center gap-1 text-yellow-400 mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          {/* Review Text */}
          <p className="text-gray-600 mb-6">
            I had a fantastic experience purchasing my car. The team was
            professional, helpful, and made the entire process smooth and
            enjoyable.
          </p>

          {/* Customer Info */}
          <div>
            <h4 className="font-semibold">John Smith</h4>
            <p className="text-sm text-gray-500">Verified Buyer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomer;
