import Hero from "@/components/Second-page/Hero";
import Navbar from "@/components/Second-page/Navbar";
import React from "react";
import Browse from "@/components/Second-page/Browse";
import MostSearched from "@/components/Second-page/MostSearched";
import Team from "@/components/Second-page/Team";
import Latest from "@/components/Second-page/Latest";
import Footer from "@/components/Second-page/Footer";
const Page2 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Browse />
      <MostSearched />
      <Team />
      <Latest />
      <Footer />
    </div>
  );
};

export default Page2;
