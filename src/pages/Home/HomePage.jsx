import React from "react";
import Hero from "../../components/Hero";
import AboutUs from "../About/AboutUs";
import Features from "../Features/Features";
import ChooseUs from "../../components/ChooseUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <ChooseUs />
    </div>
  );
};

export default HomePage;
