import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="login-section">
      <div className="login-banner relative flex justify-center">
        <h2 className="text-white text-[48px] font-bold absolute bottom-[25px]">
          Sign Up
        </h2>
      </div>
      <div className="py-[10rem] flex justify-center page-padding">
        <form
          action=""
          className="flex flex-col py-40 px-20 bg-black w-[45rem] mlsm:w-full shadow-xl"
        >
          <label
            htmlFor="email"
            className="text-[20px] text-white mb-3 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
            placeholder="gymate@gmail.com"
          />
          <label
            htmlFor="email"
            className="text-[20px] text-white mb-3 font-medium"
          >
            Password
          </label>
          <input
            type="password"
            className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-[#FF0336] font-medium w-full mt-10 text-[1.5rem] text-white py-4 "
          >
            Login
          </button>
          <div className="flex gap-4 items-center mt-16 mlsm:flex-col">
            <p className="text-white text-[16px]">New to Gymate ?</p>
            <Link to="/login" className="text-[#ff0336] font-bold text-[16px]">
              Sign In
            </Link>
          </div>
          <p className="text-[#ffffffbc] text-[14px] mt-5">
            (make <span className="text-[#ff0336]">new Account</span>or go to{" "}
            <span className="text-[#ff0336]">Sign Up</span> Page for Test
            Account)
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
