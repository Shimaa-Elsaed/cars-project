import React from "react";
import { photofifth } from "@/assets/image";
import { Button } from "../ui/button";
import Icons from "../Commen/Icons";

const Photofifth = () => {
  return (
    <>
      <section
        className="relative w-full h-[400px] bg-cover bg-center mb-6"
        style={{ backgroundImage: `url(${photofifth[1]})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-xl ml-10 lg:ml-20 text-white space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              Shop used cars, whether you're on the lot or on the go
            </h1>

            <p className="text-lg">
              Download our app to save cars and create alerts, scan window
              stickers on our lot for more details, and even call dibs on a car
              by holding it for up to 7 days.
            </p>

            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-gray-200">
                Apple Store
              </Button>

              <Button className="bg-black text-white border border-white hover:bg-gray-800">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Icons />
      <section
        className="relative w-full h-[500px] bg-cover bg-center "
        style={{ backgroundImage: `url(${photofifth[0]})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-1/3 left-20">
          <h1 className="text-5xl text-white">
            We make finding the
            <br /> right car simple
          </h1>
          <Button className="m-6">Find Out More</Button>
        </div>
      </section>
    </>
  );
};

export default Photofifth;
