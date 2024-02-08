import React from "react";
import { Link } from "react-router-dom";

const WeekDays = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule/monday"
        className="text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#ff0336] ease-in duration-200 text-white hover:shadow-xl"
      >
        Monday
      </Link>
    </div>
  );
};

export default WeekDays;
