import prograssionImg from "../../assets/who-we-are/progresion.png";
import workoutImg from "../../assets/who-we-are/workout.png";
import nutritionsImg from "../../assets/who-we-are/nutritions.png";
const AboutCards = () => {
  return (
    <>
      <div className="about-cards flex lps:flex-col gap-10 -mt-[8.5rem] flex-row items-center ">
        <div
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center
             items-center mt-12 rounded-tl-[35px] rounded-br-[35px]
              shadow-2xl min-h-[340px] w-[400px] card-item-div lps:min-h-[260px]"
        >
          <img src={prograssionImg} alt="" className="w-[75px] mb-4" />
          <p className="text-[24px] font-bold uppercase mb-7">Progression</p>
          <p className="text-[15px] font-medium leading-5 w-full">
            Our team of experts will work with you to create a customized plan
            that helps you achieve success one step at a time.
          </p>
        </div>
        <div
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center
             items-center mt-12 rounded-tl-[35px] rounded-br-[35px]
              shadow-2xl min-h-[340px] w-[400px] card-item-div "
        >
          <img src={workoutImg} alt="" className="w-[75px] mb-4" />
          <p className="text-[24px] font-bold uppercase mb-7">workout</p>
          <p className="text-[15px] font-medium leading-5 w-full">
            With a variety of workouts to choose from, you'll have everything
            you need to get into the best shape of your life.
          </p>
        </div>
        <div
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center
             items-center mt-12 rounded-tl-[35px] rounded-br-[35px]
              shadow-2xl min-h-[340px] w-[400px]  card-item-div "
        >
          <img src={nutritionsImg} alt="" className="w-[75px] mb-4" />
          <p className="text-[24px] font-bold uppercase mb-7">nutritions</p>
          <p className="text-[15px] font-medium leading-5 w-full">
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCards;
