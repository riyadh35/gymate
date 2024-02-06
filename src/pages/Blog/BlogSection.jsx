import titlebg from "../../assets/pricing/titlebg.svg";
import BlogCards from "./BlogCards";

const BlogSection = () => {
  return (
    <section className="bg-white py-[10rem]">
      <div className="container page-padding">
        <div className="flex flex-col gap-4 relative items-center text-center ">
          <p className="font-bold text-[15px] uppercase relative text-white z-10 mb-8">
            Pricing Chart
          </p>
          <img
            src={titlebg}
            alt=""
            className="w-[18rem] absolute -top-[10px]"
          />
          <h3 className="text-black font-blod text-[2.15rem]">
            Our Recent News
          </h3>
          <p className="text-[#646464] font-medium text-[15px] text-center ">
            Gymat an unknown printer took a galley of type and scrambled <br />{" "}
            make a type specimen book.
          </p>
        </div>
        {/* blog cards */}
        <div className="flex gap-6 w-full mt-[5rem] flex-wrap">
          <BlogCards
            bgClass="box1Bg"
            date="02.02.2024"
            title="Yoga For Everyone is 2024"
            description="This is program designed to make the practice of yoga beneficial for people of all ages. abilities, and backgrounds."
          />
          <BlogCards
            bgClass="box2Bg"
            date="01.02.2024"
            title="Getting Back Into CrossFit After Vacation"
            description="Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success."
          />
          <BlogCards
            bgClass="box3Bg"
            date="31.01.2024"
            title="Meet Fitness Ambassador Grace"
            description="Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
