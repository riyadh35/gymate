import { Container } from "postcss";
import titlebg from "../assets/gallery/titlebg.svg";
import MainButton from "../pages/Shared/MainButton/MainButton";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section className="hero-section max-w[111.6rem] h-[100vh] ">
        <div className="hero-container">
          <div className="flex flex-col text-white absolute hero-text ">
            <p className="uppercase text-black text-base font-medium pl-16 mb-8 relative z-10">
              find your energy
            </p>
            <img
              src={titlebg}
              alt="title_bg"
              className="w-[245px] h-[40px] title-bg absolute -top-3 left-7"
            />
            <h1 className="font-bold text-[48px] uppercase mb-[4rem] ">
              Make Your body <br />{" "}
              <span className="font-thin">fit & perfect</span>
            </h1>
            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text={`our classes`}
              goTo="/classes"
            />
          </div>
          <div className="flex flex-row-reverse -rotate-90 text-white absolute top-2/4 right-0 items-center ">
            <p className="uppercase text-xl font-bold tracking-widest">share</p>
            <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
            <div className="text-white gap-7 flex mr-7">
              <i className="rotate-90 hover:text-[#FF0336] text-xl cursor-pointer ease-in duration-200">
                <FaLinkedinIn />
              </i>
              <i className="rotate-90 hover:text-[#FF0336] text-xl cursor-pointer ease-in duration-200">
                <FaTwitter />
              </i>
              <i className="rotate-90 hover:text-[#FF0336] text-xl cursor-pointer ease-in duration-200">
                <BsFacebook />
              </i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
