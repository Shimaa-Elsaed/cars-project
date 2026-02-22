import React from "react";
import Choose from "../Commen/Choose";
import Allvicles from "../Commen/Allvicles";
import ExploreVicles from "../Commen/ExploreVicles";
import Footer from "../Commen/Footer";
import LatestBlog from "../Commen/LatestBlog";
import Icons from "../Commen/Icons";
import CustomerSayes from "../Commen/CustomerSayes";
import BrowseCar from "../Commen/BrowseCar";
import GetAfair from "../Commen/GetAfair";
import NumberSection from "../Commen/NumberSection";
import Login from "./Login";

const Content = () => {
  return (
    <div>
      <BrowseCar />
      <Choose />
      <CustomerSayes />
      <Allvicles />
      <GetAfair />
      <NumberSection />

      <ExploreVicles />
      <Icons />
      <Login />
      <LatestBlog />
      <Footer />
    </div>
  );
};

export default Content;
