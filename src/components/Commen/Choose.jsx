import React from "react";

import { FaFonticonsFi } from "react-icons/fa6";
import { TbIcons } from "react-icons/tb";
import { SiConstruct3, SiIcons8 } from "react-icons/si";
const Choose = () => {
  const choose = [
    {
      icon: <FaFonticonsFi />,
      text: "Special Financing Offers",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <TbIcons />,
      text: "Trusted Car Dealership",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <SiConstruct3 />,
      text: "Transparent Pricing",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <SiIcons8 />,
      text: "Expert Car Services",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ];
  return (
    <div>
      <section className="bg-gray-50 py-6 container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {choose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.text}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
