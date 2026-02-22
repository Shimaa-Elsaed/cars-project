import React from "react";
import { video } from "@/assets/image";
import { CiCircleCheck } from "react-icons/ci";

const Video = () => {
  return (
    <div>
      {/* ================= SELL CAR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="bg-blue-50 rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={video.video2}
            alt="Sell your car"
            className="w-full h-[360px] object-cover rounded-2xl"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get A Fair Price For Your Car <br /> Sell To Us Today
            </h2>

            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service, competitive pricing, and a wide range of vehicles.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-blue-600 text-xl" />
                UK’s largest provider with more petrol stations
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-blue-600 text-xl" />
                35 roadside assistance locations
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-blue-600 text-xl" />
                Fixed 4 out of 5 cars at the roadside
              </li>
            </ul>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "678M", text: "Cars For Sale" },
            { num: "576M", text: "Dealer Reviews" },
            { num: "758M", text: "Visitors Per Day" },
            { num: "899M", text: "Verified Dealers" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {item.num}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Video;
