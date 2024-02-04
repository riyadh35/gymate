import React from "react";
import Hero from "../../components/Hero";
import AboutUs from "../About/AboutUs";
import Features from "../Features/Features";
import ChooseUs from "../../components/ChooseUs";
import GymTrainers from "../GymTrainers/GymTrainers";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <ChooseUs />
      <GymTrainers />
    </div>
  );
};

export default HomePage;
