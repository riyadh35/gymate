import React from "react";
import { Outlet } from "react-router-dom";
import WeekDays from "./WeekDays";

const SchedulePages = () => {
  return (
    <section id="schedul">
      <div className="login-banner relative flex justify-center">
        <h2 className="text-white text-[30px] lps:text-[22px] font-bold absolute bottom-[25px]">
          Schedule by Day
        </h2>
      </div>
      <div className="container page-padding py-[5rem]">
        <WeekDays />
        <Outlet />
      </div>
    </section>
  );
};

export default SchedulePages;
