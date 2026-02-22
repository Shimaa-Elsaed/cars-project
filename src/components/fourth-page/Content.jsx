import React from "react";
import Choose from "../Commen/Choose";
import ExploreVicles from "../Commen/ExploreVicles";
import Tables from "../Commen/Tables";
import Footer from "../Commen/Footer";
import OurTeam from "../Commen/OurTeam";
import LatestBlog from "../Commen/LatestBlog";
import Icons from "../Commen/Icons";
import BrouseByType from "./BrouseByType";
import Backgrounds from "../Commen/Backgrounds";

const Content = () => {
  return (
    <div>
      <ExploreVicles />
      <Choose />
      <Tables />
      <Backgrounds />
      <OurTeam />
      <LatestBlog />
      <BrouseByType />
      <Icons />
      <Footer />
    </div>
  );
};

export default Content;
