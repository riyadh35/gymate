import { useState } from "react";
import Trainer1 from "../../assets/trainers/trainer1.png";
import Trainer2 from "../../assets/trainers/trainer2.png";
import Trainer3 from "../../assets/trainers/trainer3.png";
import TrainerBg from "../../assets/trainers/trainer-bg.png";
import shapeIcon from "../../assets/trainers/shape.png";
import { IoIosArrowUp } from "react-icons/io";
import { TfiFacebook } from "react-icons/tfi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram, FiMail } from "react-icons/fi";

const TrainerCard = () => {
  const { imageHover, setImageHover } = useState(false);

  const hoverBox = () => {
    setImageHover(true);
  };
  const hoverBoxRemove = () => {
    setImageHover(false);
  };

  const trainsers = [
    { img: Trainer1, name: "John Lewis", job: "Yoga Trainer" },
    { img: Trainer2, name: "Jonathon Doe", job: "Crossfit Trainer" },
    { img: Trainer3, name: "Ana June", job: "Personal Trainer" },
  ];
  return (
    <div>
      <div
        className="flex justify-center gap-[3rem] lps:flex-wrap"
        style={{ margin: "0 auto" }}
      >
        {trainsers.map((train, id) => (
          <div
            onMouseEnter={hoverBox}
            onMouseLeave={hoverBox}
            key={id}
            className="relative cursor-pointer w-[350px] flex flex-col select-one ml:w-full"
          >
            {/* trainer img */}
            <img
              src={train.img}
              style={{ transition: "all 0.3s" }}
              alt="trainer"
              className={`w-[220px] z-10 relative grayscale mx-auto ${
                imageHover ? "hover:grayscale-0" : ""
              }`}
            />
            {/* trainer bg */}
            <img
              src={TrainerBg}
              alt=""
              className={`absolute top-[4px] w-full scale-[1]`}
            />
            {/* trainer description  */}
            <div
              className="desc-box bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] 
            absolute -bottom-[31px]"
            >
              <img
                src={shapeIcon}
                alt="shape_icon"
                className="absolute -top-[25px] left-[120px]"
              />
              <IoIosArrowUp className="absolute -top-[16px] left-[162px] text-3xl" />

              <h3 className="font-bold text-[24px]">{train.name}</h3>
              <p className="font-medium text-[15px] text-[#646464]">
                {train.job}
              </p>
              <div className="flex gap-4 text-[#646464] w-full justify-center mt-5 text-[1rem]">
                <i>
                  <TfiFacebook />
                </i>
                <i>
                  <AiOutlineTwitter />
                </i>
                <i>
                  <FiInstagram />
                </i>
                <i>
                  <FiMail />
                </i>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerCard;
