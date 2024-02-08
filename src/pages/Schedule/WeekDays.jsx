import React from "react";
import { Link, useLocation } from "react-router-dom";

const WeekDays = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule"
        className={`text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
          pathname === "/schedule" ? "bg-[#ff0336] , text-white" : "bg-white"
        } ease-in duration-200 text-black hover:shadow-xl`}
      >
        Monday
      </Link>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule/tuesday"
        className={`text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
          pathname === "/schedule/tuesday"
            ? "bg-[#ff0336] , text-white"
            : "bg-white"
        } ease-in duration-200 text-black hover:shadow-xl`}
      >
        Tuesday
      </Link>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule/wednesday"
        className={`text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
          pathname === "/schedule/wednesday"
            ? "bg-[#ff0336] , text-white"
            : "bg-white"
        } ease-in duration-200 text-black hover:shadow-xl`}
      >
        Wednesday
      </Link>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule/thursday"
        className={`text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
          pathname === "/schedule/thursday"
            ? "bg-[#ff0336] , text-white"
            : "bg-white"
        } ease-in duration-200 text-black hover:shadow-xl`}
      >
        Thursday
      </Link>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule/friday"
        className={`text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
          pathname === "/schedule/friday"
            ? "bg-[#ff0336] , text-white"
            : "bg-white"
        } ease-in duration-200 text-black hover:shadow-xl`}
      >
        Friday
      </Link>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule/saturday"
        className={`text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
          pathname === "/schedule/saturday"
            ? "bg-[#ff0336] , text-white"
            : "bg-white"
        } ease-in duration-200 text-black hover:shadow-xl`}
      >
        Saturday
      </Link>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/schedule/sunday"
        className={`text-[15px] font-bold border border-solid border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
          pathname === "/schedule/sunday"
            ? "bg-[#ff0336] , text-white"
            : "bg-white"
        } ease-in duration-200 text-black hover:shadow-xl`}
      >
        Sunday
      </Link>
    </div>
  );
};

export default WeekDays;
