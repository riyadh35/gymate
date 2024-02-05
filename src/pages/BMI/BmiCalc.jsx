import React, { useState } from "react";

const BmiCalc = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid height and weilght");
    } else {
      const bmi = weight / ((height * height) / 1000);
      setBmi(bmi.toFixed(1));

      //   logic for  message

      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return (
    <section className="bmi-section py-[5rem] relative">
      <div className="container page-padding">
        <span className="w-full h-full absolute bg-transparent top-0 left-0"></span>
        <div className="text-white w-[33rem] relative">
          <h2 className="text-[40px] font-bold leading-[1.1] mb-8">
            Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
          </h2>
          <p className="text-base text-[#a1a1a1]">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>

          <div className="flex flex-col">
            <form action="" className="flex w-full gap-6 h-[50px] mt-10">
              <input
                onChange={(e) => setWeight(e.target.value)}
                type="text"
                placeholder="Weight / kg"
                className="w-[50%] text-[14px] bg-transparent border-2 border-[#ffffff7d] pl-6 "
              />
              <input
                onChange={(e) => setHeight(e.target.value)}
                type="text"
                placeholder="Height / cm"
                className="w-[50%] text-[14px] bg-transparent border-2 border-[#ffffff7d] pl-6 "
              />
            </form>
            {/* outpur  */}
            <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full">
              <span className="w-1/2">
                Your BMI is: <span className="text-[#ff0336]">{bmi}</span>
              </span>
              <span className="w-1/2">
                Your Weight is:{" "}
                <span className="text-[#ff0336]">{message}</span>
              </span>
            </p>
            <button
              onClick={calcBmi}
              type="submit"
              className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-[9.3rem] h-[3.2rem] hover:bg-[#ff0336]"
              style={{ transition: "all 0.3s ease 0s" }}
            >
              calculate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalc;
