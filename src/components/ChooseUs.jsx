import mainImg from "../assets/choose-us/main-img.png";
import playImg from "../assets/choose-us/play.png";
import titlebg from "../assets/choose-us/title-bg.svg";
import trainingIcon from "../assets/choose-us/training.png";
import benchIcon from "../assets/choose-us/bench-press.png";
import gymbagIcon from "../assets/choose-us/gym-bag.png";
import bootleIcon from "../assets/choose-us/bottle-of-water.png";
import MainButton from "../pages/Shared/MainButton/MainButton";

const ChooseUs = () => {
  return (
    <>
      <section className="choose-us py-[10rem]">
        <div className="container  flex flex-row gap-[3rem]">
          <div className="video relative w-[50%] ">
            <img src={mainImg} alt="" className="relative w-[94%] h-auto" />
            <img
              src={playImg}
              alt=""
              className="absolute w-[2.4rem] top-[42%] left-[44%] z-10 cursor-pointer"
            />
            <span className="bg-white cursor-pointer p-14 absolute rounded-full top-[36.7%] left-[36.95%]"></span>
          </div>
          <div className="w-[50%] relative ">
            <p className="text-white relative z-10 text-base uppercase font-bold mb-10">
              why choose us
            </p>
            <img
              src={titlebg}
              alt=""
              className="w-[17rem] absolute -top-[11px] -left-16"
            />
            <h2 className="text-[36px] text-white font-bold leading-[1.2] max-w-3xl ">
              we can give a shape of your body here!
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl ">
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 ">
              <div className="flex items-center gap-6">
                <img
                  src={trainingIcon}
                  alt=""
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[65px] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px] capitalize">
                  free fitness training
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img
                  src={benchIcon}
                  alt=""
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[65px] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px] capitalize">
                  modern gym equipments
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img
                  src={gymbagIcon}
                  alt=""
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[65px] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px] capitalize">
                  gym bag equipments
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img
                  src={bootleIcon}
                  alt=""
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[65px] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px] capitalize">
                  fresh bottle water
                </p>
              </div>
            </div>
            <MainButton
              text={`our classes`}
              bg={`bg-[#595959]`}
              color={`!text-white`}
              arrowColor={`text-white`}
              hover={`hover:bg-[#FF0336]`}
              goTo="/classes"
              cN="choice-cta"
            />
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
