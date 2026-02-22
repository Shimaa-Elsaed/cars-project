import React from "react";
const brands = [
  "Ford",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dacia",
  "DS",
  "Fiat",
  "Land Rover",
  "Lexus",
  "Mercedes-Benz",
  "Mazda",
  "MG",
  "Kia",
  "Abarth",
  "Alfa Romeo",
  "Audi",
  "Bentley",
  "BMW",
  "Chevrolet",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Peugeot",
  "Porsche",
  "Renault",
];
const Tables = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* ================= SHOP BY BRAND ================= */}
      <section className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shop BoxCar Your Way</h2>
          <button className="text-sm text-blue-600 hover:underline">
            View More →
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm font-semibold text-gray-700">
          <span className="border-b-2 border-blue-600 pb-1 cursor-pointer">
            New Cars For Sale
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Used Cars For Sale
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Browse By Type
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Browse By Brand
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm"
            >
              {brand} Cars
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tables;
