import { Link } from "react-router-dom";

const BlogCards = ({ date, title, description }) => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <div className="w-[21.9rem] shadow-xl flex flex-col px-[2rem] py-[3rem]">
        <p className="text-[15px] font-bold text-[#323232] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
          {date}
        </p>
        <h3 className="text-[22px] font-bold py-5">{title}</h3>
        <p className="text-[15px] font-medium text-[#646464]">{description}</p>

        <Link
          to="/blog"
          onClick={goTop}
          className="text-[15px] upercase font-bold mt-10 w-[10rem] h-[3rem] bg-[#ff0336] text-white text-center pt-[14px] "
        >
          Read more
        </Link>
      </div>
    </>
  );
};

export default BlogCards;
