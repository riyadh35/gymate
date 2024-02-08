import { Link } from "react-router-dom";

const Thursday = () => {
  return (
    <section className="mt-[5rem]">
      <div className="flex flex-col gap-3">
        <ul className="flex justify-between w-full tablet:flex-col tablet:text-center">
          <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">Fitness</p>
          </li>
          <li className="py-[25px]  bg-[#f2f2f2] w-full text-center">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">
              9:00am-10:00
            </p>
          </li>
          <li className="py-[25px] bg-[#f2f2f2] w-full text-center">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">
              David Vila
            </p>
          </li>
          <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full tablet:justify-center items-center flex justify-end">
            <Link
              to="/contact"
              className="text-white bg-[#555] text-[15px] font-medium py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
            >
              Join Now
            </Link>
          </li>
        </ul>
        <ul className="flex justify-between w-full tablet:flex-col tablet:text-center">
          <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">
              Body Building
            </p>
          </li>
          <li className="py-[25px]  bg-[#f2f2f2] w-full text-center">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">
              10:00am-11:00
            </p>
          </li>
          <li className="py-[25px] bg-[#f2f2f2] w-full text-center">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">
              John Weights
            </p>
          </li>
          <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full tablet:justify-center items-center flex justify-end">
            <Link
              to="/contact"
              className="text-white bg-[#555] text-[15px] font-medium py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
            >
              Join Now
            </Link>
          </li>
        </ul>
        <ul className="flex justify-between w-full tablet:flex-col tablet:text-center">
          <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">Running</p>
          </li>
          <li className="py-[25px]  bg-[#f2f2f2] w-full text-center">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">
              4:00am-5:00
            </p>
          </li>
          <li className="py-[25px] bg-[#f2f2f2] w-full text-center">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
            <p className="text-[18px] font-bold text-[#000000] mt-3">
              Junifor Jonas
            </p>
          </li>
          <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full tablet:justify-center items-center flex justify-end">
            <Link
              to="/contact"
              className="text-white bg-[#555] text-[15px] font-medium py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
            >
              Join Now
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Thursday;
