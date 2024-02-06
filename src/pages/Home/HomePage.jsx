import Hero from "../../components/Hero";
import AboutUs from "../About/AboutUs";
import Features from "../Features/Features";
import ChooseUs from "../../components/ChooseUs";
import GymTrainers from "../GymTrainers/GymTrainers";
import Testmonial from "../Testimonial/Testmonial";
import Gallery from "../../components/Gallery";
import BmiCalc from "../BMI/BmiCalc";
import PricingChart from "../Pricing/PricingChart";
import BlogSection from "../Blog/BlogSection";
import CallBanner from "../CallSection/CallBanner";

const HomePage = () => {
  return (
    <div className="text-center">
      <Hero />
      <AboutUs />
      <Features />
      <ChooseUs />
      <GymTrainers />
      <Testmonial />
      <Gallery />
      <BmiCalc />
      <PricingChart />
      <BlogSection />
      <CallBanner />
    </div>
  );
};

export default HomePage;
