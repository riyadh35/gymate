import titlebg from "../assets/who-we-are/title-bg.svg";
import MainButton from "../pages/Shared/MainButton/MainButton";
import girlRunning from "../assets/who-we-are/girl-run.png";
import bgred from "../assets/who-we-are/girl-redbg.svg";
import bgtext from "../assets/who-we-are/girl-side-text.png";
import wind from "../assets/who-we-are/wind.png";
import target from "../assets/AboutPage/target.png";
import img1 from "../assets/AboutPage/3.jpg";
import img2 from "../assets/AboutPage/4.jpg";
import mountain from "../assets/AboutPage/mountain.png";

const About = () => {
  return (
    <section className="about-top banner">
      <div className="about-banner relative flex justify-center mlsm:h-[29vh]">
        <h3 className="absolute bottom-[25px] text-white font-bold text-[30px] mlsm:text-[23px]">
          About Us
        </h3>
      </div>
      <div className="about-section">
        <div className="py-[12rem] mlsm:py-[2rem] container page-padding">
          <div className="h-[40rem] lps:h-auto tablet:px-3">
            <div className="grid grid-cols-[50fr,50fr] lps:grid-cols-1 ">
              <div className="flex flex-col !text-left relative items-right justify-center lps:items-center lps:!text-center">
                <p className="relative uppercase text-base font-bold text-white z-10 mb-8 ml-20 lps:ml-3">
                  Who we are
                </p>
                <img
                  src={titlebg}
                  alt=""
                  className="w-[16rem] absolute top-[-4px] lps:top-[-7px]"
                />
                <h2 className="font-bold text-[36px] text-black max-w-[40rem] mb-4 mlsm:text-[28px]">
                  We will give you strength and health
                </h2>
                <p className="text-[#646464] font-medium text-[15px] max-w-[40rem]  mb-10">
                  At Gymate, we are dedicated to helping you achieve the body of
                  your dreams. Our expert trainers and nutritionists will work
                  with you to create a personalized fitness and nutrition plan
                  that helps you reach your specific goals.
                </p>
                <MainButton
                  text="contact us"
                  color={`text-white`}
                  arrowColor={`text-white`}
                  bg={`bg-[#FF0336]`}
                  hover={`hover:bg-[#ff0336]`}
                  goTo="/contact"
                  cN="about-cta-page"
                ></MainButton>
              </div>
              <div className="relative lps:hidden w-[80%] -top-[90px] left-[40px]">
                <img
                  src={girlRunning}
                  alt=""
                  className="girl-running top-[70%]"
                />
                <img
                  src={bgred}
                  alt=""
                  className=" absolute w-[58%] h-auto top-[8%] left-[35%] "
                />
                <img
                  src={bgtext}
                  alt=""
                  className="absolute w-[19%] h-auto top-[-2%]"
                />
                <img
                  src={wind}
                  alt=""
                  className="w-[13%] h-auto top-[70%] absolute right-[30%]"
                  style={{ transform: "translate(50%,-50%)" }}
                />
              </div>
            </div>
          </div>
          <div className=" lps:mt-[8rem] container page-padding auto tablet:px-3">
            <div className="grid grid-cols-2 grid-rows-2 w-full mlsm:grid-cols-1">
              <div className="w-full bg-white h-[26.9rem] flex flex-col justify-center items-center text-clip px-[100px] lps:px-[10px] tablet:text-center">
                <img src={target} alt="" className="w-[5.63rem]" />
                <h3 className="text-[36px] font-bold mt-3 tablet:text-center lps:text-[22px]">
                  Our History
                </h3>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
              <div className="w-full bg-white h-[26.9rem]">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              <div className="w-full bg-white h-[26.9rem]">
                <img
                  src={img2}
                  alt=""
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              <div className="w-full bg-white h-[26.9rem] flex flex-col justify-center items-center  text-clip px-[100px] lps:px-[10px] tablet:text-center">
                <img src={mountain} alt="" className="w-[5.63rem]" />
                <h3 className="text-[36px] font-bold mt-3 tablet:text-center lps:text-[22px]">
                  Our History
                </h3>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
