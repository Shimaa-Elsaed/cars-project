import React from "react";

const NumberSection = () => {
  return (
    <div>
      <section class="py-6 container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 class="text-2xl font-bold">836M</h3>
            <p class="text-gray-500">Cars For Sale</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold">738M</h3>
            <p class="text-gray-500">Dealer Reviews</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold">100M</h3>
            <p class="text-gray-500">Happy Customers</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold">238M</h3>
            <p class="text-gray-500">Verified Dealers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NumberSection;
