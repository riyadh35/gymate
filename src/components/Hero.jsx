import { Container } from "postcss";
import titlebg from "../assets/gallery/titlebg.svg";
import MainButton from "../pages/Shared/MainButton/MainButton";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen  tablet:flex tablet:justify-center tablet:text-center "
      >
        <div className="hero-container">
          <div className="flex flex-col text-white mx-auto absolute hero-text  tablet:items-center tablet:-right-[22rem] tablet:w-[80%] mlsm:-right-[17rem] ml:-right-[14rem] ms:right-[-8rem] mlsm:w-full ">
            <p className="uppercase text-black text-base font-medium pl-16  mb-8 relative z-10 tablet:pl-0">
              find your energy
            </p>
            <img
              src={titlebg}
              alt="title_bg"
              className="w-[245px] ml:w-[212px] h-[40px] title-bg absolute -top-3 left-[140px]"
            />
            <h1 className="font-bold text-[48px] uppercase mb-[4rem] mlsm:text-[28px] ml:pl-24 tablet:text-[30px]  mlsm:mr-14">
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
          <div className="flex flex-row-reverse -rotate-90 text-white absolute top-2/4 right-0 items-center lps:hidden">
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
