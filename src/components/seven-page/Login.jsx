import React from "react";
import { logins } from "@/assets/image";

const Login = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-center bg-cover flex items-center justify-end px-6 md:px-6"
      style={{ backgroundImage: `url(${logins})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full md:w-1/2 text-white">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Create Your Account
        </h1>

        {/* Paragraph */}
        <p className="mb-8 text-gray-200">
          Join us today and explore the best vehicle deals tailored for you.
        </p>

        {/* Form Box */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Type */}
            <input
              type="text"
              placeholder="Car Type"
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Category */}
            <input
              type="text"
              placeholder="Category"
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
