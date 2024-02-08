import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import MainButton from "../Shared/MainButton/MainButton";

const ClassesCards = ({ bgImg, title, trainer, date }) => {
  return (
    <div
      className={`${bgImg} rounded-3xl shadow-2xl flex flex-col relative h-[30rem] p-[40px]`}
    >
      <span className="bg-[#0000004a] rounded-3xl w-full h-full absolute top-0 left-0"></span>
      <div className="flex flex-col align-text-bottom h-full w-full z-[2] justify-end">
        <p className="text-white font-bold text-[27px] mb-2">{title}</p>
        <span className="w-[51px] h-[4px] bg-[#ff0336] "></span>
        <div className="flex gap-3 mb-14 mt-6 text-[#ffffffe1] text-[1rem] font-medium">
          <p className="flex gap-1 items-center">
            <FaRegUser /> {trainer}
          </p>
          <p className="flex gap-1 items-center">
            <MdOutlineWatchLater /> {date}
          </p>
        </div>
        <MainButton
          color={`!text-black`}
          bg={`bg-white`}
          text="join now"
          goTo="/contact"
        />
      </div>
    </div>
  );
};

export default ClassesCards;
