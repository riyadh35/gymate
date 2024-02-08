import cycling from "../../assets/classes/cycling.jpg";
import bodybuilding from "../../assets/classes/bodybuilding.jpg";
import box from "../../assets/classes/box.jpg";
import cross from "../../assets/classes/cross.jpg";
import fitness from "../../assets/classes/fitness.jpg";
import karate from "../../assets/classes/karate.jpg";
import meditation from "../../assets/classes/meditation.jpg";
import mma from "../../assets/classes/mma.jpg";
import powerlifting from "../../assets/classes/powerlifting.jpg";
import running from "../../assets/classes/running.jpg";
import workout from "../../assets/classes/workout.jpg";
import yoga from "../../assets/classes/yoga.jpg";
import { useState } from "react";
import ClassesCards from "./ClassesCards";

const Classes = () => {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  return (
    <section id="classes">
      <div className="login-banner relative flex justify-center">
        <h2 className="text-white text-[30px] lps:text-[22px] font-bold absolute bottom-[25px]">
          Classes
        </h2>
      </div>
      <div className="about-section text-center">
        <div
          className={`container page-padding py-[10rem] gap-10 grid grid-cols-3 grid-rows-3 lps:grid-cols-2 mlsm:grid-cols-1 text-left ${
            load ? "grid" : "hidden"
          }`}
        >
          <ClassesCards
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesCards
            bgImg="meditation-bg"
            title="Meditation"
            trainer="Maria Mich"
            date="Fri: 1:00 am"
          />
          <ClassesCards
            bgImg="boxing-bg"
            title="Boxing"
            trainer="John Flex"
            date="Tue: 4:00 am"
          />
          <ClassesCards
            bgImg="karate-bg"
            title="Karate"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesCards
            bgImg="powerlifting-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 am"
          />
          <ClassesCards
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesCards
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wed: 9:00 am"
          />
          <ClassesCards
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Fri: 6:00 am"
          />
        </div>
        <div
          className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
            load ? "hidden" : "grid"
          }`}
        >
          <ClassesCards
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesCards
            bgImg="meditation-bg"
            title="Meditation"
            trainer="Maria Mich"
            date="Fri: 1:00 am"
          />
          <ClassesCards
            bgImg="boxing-bg"
            title="Boxing"
            trainer="John Flex"
            date="Tue: 4:00 am"
          />
          <ClassesCards
            bgImg="karate-bg"
            title="Karate"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesCards
            bgImg="powerlifting-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 am"
          />
          <ClassesCards
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesCards
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wed: 9:00 am"
          />
          <ClassesCards
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Fri: 6:00 am"
          />
          <ClassesCards
            bgImg="bodybuilding-bg"
            title="Body Building"
            trainer="Jake Paul"
            date="Mon: 8:00 am"
          />
          <ClassesCards
            bgImg="mma-bg"
            title="Mma"
            trainer="Becky Lynch"
            date="Fri: 6:00 am"
          />
          <ClassesCards
            bgImg="yoga-bg"
            title="Yoga"
            trainer="Marta Mich"
            date="Wed: 8:00 am"
          />
          <ClassesCards
            bgImg="fitness-bg"
            title="Fitness"
            trainer="Mia Maisha"
            date="Sun: 5:00 am"
          />
        </div>

        <button
          className="text-[15px] text-white bg-slate-600  px-10 py-4 font-medium uppercase mb-14 rounded-md shadow-xl hover:bg-[#ff0336]"
          onClick={() => {
            window.scrollTo(0, 0);
            loadMore();
          }}
        >
          {load ? "show more" : "show less"}
        </button>
      </div>
    </section>
  );
};

export default Classes;
