import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const MainButton = ({ color, bg, cN, arrowColor, hover, text, goTo }) => {
  const gotop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={gotop}
      to={goTo}
      className={`text-[15px] ${color} ${bg} ${cN} text-center flex items-center justify-center undefined  font-semibold w-[200px] h-[55px] uppercase hero-cta relative ml-2 ${hover}`}
    >
      {text} &nbsp;
      <FaArrowRight className={`${arrowColor} text-[#FF0336]`} />
    </Link>
  );
};

export default MainButton;
