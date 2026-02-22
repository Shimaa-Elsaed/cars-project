import React from "react";
import { team } from "@/assets/image";

const OurTeam = () => {
  const teams = [
    { title: "Courtney Henry", desc: "Development Manager", img: team[0] },
    { title: "Robert Fox", desc: "UI Designer", img: team[1] },
    { title: "Leslie Alexander", desc: "Marketing Lead", img: team[2] },
    { title: "Jenny Wilson", desc: "Product Manager", img: team[3] },
    { title: "Maycel Jacson", desc: "Devolpment Manager", img: team[4] },
  ];

  return (
    <section className="container   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
      <h2 className="text-3xl font-bold text-center mb-14">Our Team</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {teams.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
