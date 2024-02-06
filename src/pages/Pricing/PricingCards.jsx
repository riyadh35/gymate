import React from "react";
import MainButton from "../Shared/MainButton/MainButton";

const PricingCards = ({ img, price }) => {
  return (
    <>
      <div className="flex flex-col w-1/3 bg-white shadow-xl relative ">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[20px] font-bold w-[10rem] text-center py-4 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto">
            Begineers
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px]">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-3 -left-[2rem]">
              {" "}
              $
            </span>{" "}
            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[20px] -right-[3rem]">
              p/m
            </span>
          </p>
          {/* text */}
          <div className="flex flex-col text-base font-medium text-center gap-8 text-[#646464]">
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div>
          <MainButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-button"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
};

export default PricingCards;
