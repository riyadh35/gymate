import AboutCards from "./AboutCards";
import girlrunning from "../../assets/who-we-are/girl-run.png";
import bgred from "../../assets/who-we-are/girl-redbg.svg";
import bgtext from "../../assets/who-we-are/girl-side-text.png";
import wind from "../../assets/who-we-are/wind.png";
import titlebg from "../../assets/who-we-are/title-bg.svg";
import IconweightLigter from "../../assets/who-we-are/weightlifter.png";
import Iconequipment from "../../assets/who-we-are/equpments.png";
import Icongym from "../../assets/who-we-are/gym.png";
import MainButton from "../Shared/MainButton/MainButton";

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col gap-2 justify-between about-section pb-[10rem]">
        <div className="container page-padding">
          <AboutCards />
          <div id="about" className="grid grid-cols-[50fr,50fr] gap-[2rem] ">
            <div className="mt-[10.5rem] relative">
              <p
                className="text-white font-semibold text-[15px]
               relative uppercase z-10 pl-16 mb-10"
              >
                who we are
              </p>
              <img
                src={titlebg}
                alt="title_bg"
                className="w-[28%] absolute -top-[9px]"
              />
              <h2 className="text-[35px] font-bold leading-tight capitalize mb-3 w-[]">
                Take Your Health And Body to Next Level
              </h2>
              <p className="text-[16px] text-[#646464] font-medium">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <div className="flex mt-9 mb-[rem] gap-[2px]">
                <div className="flex flex-col items-center text-center py-10 px-14 pl-7">
                  <img
                    src={IconweightLigter}
                    alt="icon_img"
                    className="w-[5.4rem] mb-6 h-auto"
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-x py-10 px-14">
                  <img
                    src={Iconequipment}
                    alt="icon_equpments"
                    className="w-[5.4rem] mb-6 h-auto"
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    Modern <br /> equipments
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center py-10 px-14 pl-7">
                  <img
                    src={Icongym}
                    alt="icon_img"
                    className="w-[5.4rem] mb-6 h-auto"
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>
              </div>
              {/* button  */}
              <MainButton
                color={`!text-white`}
                bg={`bg-[#3f3f3f]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              />
            </div>

            {/* girl side div */}
            <div className="relative">
              <img src={girlrunning} alt="" className="girl-running" />
              <img src={bgred} alt="" className="girl-bg" />
              <img src={bgtext} alt="" className="girl-bg-text" />
              <img src={wind} alt="" className="girl-wind-icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
