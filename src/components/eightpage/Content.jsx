import React from "react";
import BrowseCar from "../Commen/BrowseCar";
import Footer from "../Commen/Footer";
import LatestBlog from "../Commen/LatestBlog";
import Icons from "../Commen/Icons";
import Allvicles from "../Commen/Allvicles";
import CustomerSayes from "../Commen/CustomerSayes";
import OurTeam from "../Commen/OurTeam";
import Choose from "../Commen/Choose";
import GetAfair from "../Commen/GetAfair";
import Twocars from "./Twocars";
import Electric from "./Electric";
import Blutoth from "./Blutoth";

const Content = () => {
  return (
    <div>
      <Twocars />
      <BrowseCar />
      <Electric />
      <LatestBlog />
      <Blutoth />
      <Allvicles />
      <CustomerSayes />
      <Icons />
      <Twocars />
      <OurTeam />
      <Choose />
      <GetAfair />
      <Footer />
    </div>
  );
};

export default Content;
