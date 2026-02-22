import React from "react";
import { FaBolt, FaLeaf, FaChargingStation, FaCarSide } from "react-icons/fa";

const Electric = () => {
  const features = [
    {
      icon: <FaBolt />,
      title: "Instant Acceleration",
      desc: "Electric motors deliver immediate torque for smooth and powerful driving.",
    },
    {
      icon: <FaLeaf />,
      title: "Eco Friendly",
      desc: "Zero emissions help reduce your carbon footprint and protect the environment.",
    },
    {
      icon: <FaChargingStation />,
      title: "Fast Charging",
      desc: "Advanced charging systems allow you to power up quickly and efficiently.",
    },
    {
      icon: <FaCarSide />,
      title: "Smart Technology",
      desc: "Equipped with modern driving assistance and intelligent control systems.",
    },
  ];

  return (
    <section className="container mx-auto py-20 px-28 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            We're BIG on what
            <br /> matters to you ?
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Electric vehicles are the future of transportation. They provide
            cleaner energy, lower maintenance costs, and a smarter driving
            experience designed for modern lifestyles.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div key={index}>
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl text-xl mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Electric;
