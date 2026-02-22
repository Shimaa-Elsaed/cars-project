import React from "react";
import Electric from "./Electric";
import OurCustomer from "../Commen/OurCustomer";
import AutoLeanCalc from "../Commen/AutoLeanCalc";
import MoreQuestion from "./MoreQuestion";
import OnlinePerson from "../Commen/OnlinePerson";
import Selectcars from "./Selectcars";
import Firstfourcar from "../Commen/FirstfourCar";
import Secondfourcar from "../Commen/SecondfourCar";
import Footer from "../Second-page/Footer";

const Content = () => {
  return (
    <div>
      <Selectcars />
      <OurCustomer />
      <Electric />
      <Firstfourcar />
      <MoreQuestion />
      <AutoLeanCalc />
      <Secondfourcar />
      <OnlinePerson />
      <Footer />
    </div>
  );
};

export default Content;
