import titlebg from "../../../src/assets/features/title-bg.svg";
import MainButton from "../Shared/MainButton/MainButton";

const Features = () => {
  return (
    <>
      <section className="page-padding py-[8rem] bg-white">
        <div className="container">
          <div className="flex flex-col items-center relative text-center">
            <p
              className="text-white font-semibold text-[15px]
               relative uppercase z-10 pl-2 mb-10"
            >
              Our Featured class
            </p>
            <img
              src={titlebg}
              alt="title_bg"
              className="w-[23%] absolute -top-[9px]"
            />
            <h2 className="text-[40px] text-black font-bold my-3 capitalize">
              we are offering best flexible classes
            </h2>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-full mt-7 ">
            <div className="item-0-div relative">
              <div className="item-0 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-6 left-5">
                <p className="text-white text-[30px] font-bold">Cycling</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Wednesday: 9:00am-10:00am
                </p>
              </div>
            </div>
            <div className="item-1-div relative">
              <div className="item-1 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-6 left-5">
                <p className="text-white text-[30px] font-bold">Karate</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Friday: 10:00-11:00am
                </p>
              </div>
            </div>
            <div className="item-2-div relative">
              <div className="item-2 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-6 left-5">
                <p className="text-white text-[30px] font-bold">Power</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Saturday: 9:00-10:00am
                </p>
              </div>
            </div>
            <div className="item-3-div relative">
              <div className="item-3 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-6 left-5">
                <p className="text-white text-[30px] font-bold">Meditation</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Friday: 1:00pm-2:00pm
                </p>
              </div>
            </div>
            <div className="item-4-div relative">
              <div className="item-4 ease-in duration-[.4s] p-6"></div>
              <div className="absolute z-10 bottom-6 left-5">
                <p className="text-white text-[30px] font-bold">Martial Arts</p>
                <p className="text-white bg-[#FF0336] text-base mt-3 py-1 px-5">
                  Sunday: 6:00pm-7:00pm
                </p>
              </div>
            </div>
            <div className="item-5-div relative">
              <div className="item-5 ease-in duration-[.4s] p-6"></div>
              <div className="absolute z-10 bottom-6 left-5">
                <p className="text-white text-[30px] font-bold">Workout</p>
                <p className="text-white bg-[#FF0336] text-base mt-3 py-1 px-5">
                  Monday: 4:00pm-5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="featured-bottom flex justify-center text-left items-center">
        <div className="container page-padding">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-bold text-[48px] px-2 max-w-4xl leading[1.2] capitalize">
              We are always providing best fitness service for you
            </h2>
            <MainButton
              text={`join with us`}
              bg={`bg-white`}
              color={`text-black`}
              goTo="/classes"
              arrowColor={`text-black`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
