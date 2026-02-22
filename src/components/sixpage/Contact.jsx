import React from "react";
import Icons from "../Commen/Icons";
import Choose from "../Commen/Choose";
import OurTeam from "../Commen/OurTeam";
import Map from "../Commen/Map";
import CustomerSayes from "../Commen/CustomerSayes";
import PageBlack from "./PageBlack";
import Video from "./Video";
import Firstfourcar from "../Commen/FirstfourCar";

const Contact = () => {
  return (
    <div>
      <Icons />

      <Video />
      <PageBlack />
      <Firstfourcar />

      <Choose />
      <CustomerSayes />

      <OurTeam />

      <Map />
    </div>
  );
};

export default Contact;
