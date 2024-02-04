import titlebg from "../../assets/features/title-bg.svg";
import TrainerCard from "./TrainerCard";

const GymTrainers = () => {
  return (
    <>
      <section className="trainer-section">
        <div className="container page-padding py-[5rem]">
          <div className="flex flex-col justify-center items-center relative text-center gap-5">
            <p className="relative text-white font-bold text-base uppercase  z-10">
              gym trainers
            </p>
            <img
              src={titlebg}
              alt=""
              className="absolute w-[15rem] -top-[6px]  "
            />
            <h3 className="font-bold text-black text-[34px] capitalize">
              Team of expert coaches
            </h3>
            <p className="text-[#646464] font-medium text-[15px] max-w-xl">
              Expert team of coaches helps you succeed in any goal, personalized
              guidance and motivation provided!
            </p>
          </div>

          {/* trainer section  */}
          <div className="flex mt-20">
            <TrainerCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default GymTrainers;
