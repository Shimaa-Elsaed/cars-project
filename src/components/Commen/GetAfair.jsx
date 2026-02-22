/*import React from "react";
import { fairs } from "@/assets/image";
const GetAfair = () => {
  return (
    <div>
      <section n class="py-20 px-4 bg-gray-50">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div class="grid grid-cols-2 gap-4">
            <img class="rounded-xl h-40 object-cover w-full" src={fairs[0]} />
            <img class="rounded-xl h-52 object-cover w-full" src={fairs[1]} />
            <img
              class="rounded-xl col-span-2 h-44 object-cover w-full"
              src={fairs[2]}
            />
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">
              Get A Fair Price For Your Car Sell To Us Today
            </h2>
            <p class="text-gray-600 mb-4">
              We are committed to providing our customers with exceptional
              service and competitive pricing.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>✔ We are the largest auto dealer in more places</li>
              <li>✔ You get 24/7 roadside assistance</li>
              <li>✔ We fix 4.8/5 of cars in our network</li>
            </ul>

            <button class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetAfair;
*/
import React from "react";
import { fairs } from "@/assets/image";

const GetAfair = () => {
  return (
    <section className="py-6 container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Images Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={fairs[0]}
              className="w-full h-full object-cover aspect-[4/3] hover:scale-110 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={fairs[1]}
              className="w-full h-full object-cover aspect-[4/3] hover:scale-110 transition duration-500"
            />
          </div>

          <div className="col-span-2 overflow-hidden rounded-2xl">
            <img
              src={fairs[2]}
              className="w-full h-full object-cover aspect-[8/3] hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Get A Fair Price For Your Car Sell To Us Today
          </h2>

          <p className="text-gray-600 mb-6">
            We are committed to providing our customers with exceptional service
            and competitive pricing.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li>✔ We are the largest auto dealer in more places</li>
            <li>✔ You get 24/7 roadside assistance</li>
            <li>✔ We fix 4.8/5 of cars in our network</li>
          </ul>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetAfair;
