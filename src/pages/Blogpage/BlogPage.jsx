import Img1 from "../../assets/blogpage/1.jpg";
import Img2 from "../../assets/blogpage/2.jpg";
import Img3 from "../../assets/blogpage/3.jpg";
import Img4 from "../../assets/blogpage/4.jpg";
import Img5 from "../../assets/blogpage/5.jpg";
import Img6 from "../../assets/blogpage/6.jpg";
import Img7 from "../../assets/blogpage/7.jpg";
import Recent1 from "../../assets/blogpage/recent1.jpg";
import Recent2 from "../../assets/blogpage/recent2.jpg";
import Recent3 from "../../assets/blogpage/recent3.jpg";
import Recent4 from "../../assets/blogpage/recent4.jpg";
import Recent5 from "../../assets/blogpage/recent5.jpg";
import Recent6 from "../../assets/blogpage/recent6.jpg";
import Sidebar from "../../assets/blogpage/sidebar1.png";
import BlogPageCards from "./BlogPageCards";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const BlogPage = () => {
  return (
    <section id="blogpage">
      <div className="login-banner relative flex justify-center">
        <h2 className="text-white text-[30px] lps:text-[22px] font-bold absolute bottom-[25px]">
          Blog
        </h2>
      </div>
      <div className="py-[10rem] container page-padding gap-10 grid grid-cols-[64fr_35fr] lps:grid-cols-1 lps:gap-12">
        <div className="flex flex-col gap-14">
          <BlogPageCards img={Img1} title="Yoga For Everyone in 2024" />
          <BlogPageCards
            img={Img2}
            title="Getting Back Into Crossfit After Vacation"
          />
          <BlogPageCards img={Img3} title="Meet Fitness Ambassador Grace " />
          <BlogPageCards
            img={Img4}
            title="The Best are European Materls Direct "
          />
          <BlogPageCards
            img={Img5}
            title="Give your Fitness a Boost with our Gym"
          />
          <BlogPageCards
            img={Img6}
            title="How to get Fit your Kids Moving Throughout The Summer"
          />
          <BlogPageCards
            img={Img7}
            title="Give your Fitness a boost with our new gym challenge"
          />
        </div>
        <div>
          <form action="" className="flex ">
            <input
              className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
              type="search"
              placeholder="Search..."
            ></input>
            <button type="submit">
              <IoSearch className=" bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl p-[10px]" />
            </button>
          </form>
          <div className="flex flex-col bg-[#f8f8f8]  my-[35px] p-[30px]">
            <p className="font-bold text-black text-[18px] mb-[9px]">
              Categories
            </p>
            <span className="w-[51px] h-[4px] bg-[#ff0336]"></span>
            <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
              <li className="flex justify-between items-center border-b border-[#dcd9d9] pb-3 mb-5 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <p className="flex items-center gap-2">
                  {" "}
                  <IoIosArrowForward />
                  Body Buiding
                </p>
                <span>(4)</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#dcd9d9] pb-3 mb-5 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <p className="flex items-center gap-2">
                  {" "}
                  <IoIosArrowForward />
                  Body Buiding
                </p>
                <span>(4)</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#dcd9d9] pb-3 mb-5 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <p className="flex items-center gap-2">
                  {" "}
                  <IoIosArrowForward />
                  Boxing
                </p>
                <span>(4)</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#dcd9d9] pb-3 mb-5 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <p className="flex items-center gap-2">
                  {" "}
                  <IoIosArrowForward />
                  Crossfit
                </p>
                <span>(4)</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#dcd9d9] pb-3 mb-5 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <p className="flex items-center gap-2">
                  {" "}
                  <IoIosArrowForward />
                  Fitness
                </p>
                <span>(4)</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#dcd9d9] pb-3 mb-5 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <p className="flex items-center gap-2">
                  {" "}
                  <IoIosArrowForward />
                  Meditation
                </p>
                <span>(4)</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#dcd9d9] pb-3 mb-5 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <p className="flex items-center gap-2">
                  {" "}
                  <IoIosArrowForward />
                  Yoga
                </p>
                <span>(4)</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-[#f8f8f8]  my-[35px] p-[30px]">
            <p className="font-bold text-black text-[18px] mb-[9px]">
              Recent Posts
            </p>
            <span className="w-[51px] h-[4px] bg-[#ff0336]"></span>
            <div className="flex flex-col gap-7">
              <div className="flex gap-8">
                <img src={Recent1} alt="recent_img" className="w-[100px]" />
                <div className="flex flex-col gap-4 justify-center">
                  <p className="text-[14px] text-[#646464] font-medium">
                    March 22, 2024
                  </p>
                  <p className="text-[16px] text-[#000000] font-bold hover:text-[#ff0336] ease-in duration-200 cursor-pointer ">
                    Meet Fitness Abassador Grace
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <img src={Recent2} alt="recent_img" className="w-[100px]" />
                <div className="flex flex-col gap-4 justify-center">
                  <p className="text-[14px] text-[#646464] font-medium">
                    March 22, 2024
                  </p>
                  <p className="text-[16px] text-[#000000] font-bold hover:text-[#ff0336] ease-in duration-200 cursor-pointer ">
                    Getting Back Into Crossfit
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <img src={Recent3} alt="recent_img" className="w-[100px]" />
                <div className="flex flex-col gap-4 justify-center">
                  <p className="text-[14px] text-[#646464] font-medium">
                    March 22, 2022
                  </p>
                  <p className="text-[16px] text-[#000000] font-bold hover:text-[#ff0336] ease-in duration-200 cursor-pointer ">
                    Meet Fitness Abassador Grace
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <img src={Recent4} alt="recent_img" className="w-[100px]" />
                <div className="flex flex-col gap-4 justify-center">
                  <p className="text-[14px] text-[#646464] font-medium">
                    March 22, 2022
                  </p>
                  <p className="text-[16px] text-[#000000] font-bold hover:text-[#ff0336] ease-in duration-200 cursor-pointer ">
                    The best are European Meditation Practitioner
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <img src={Recent5} alt="recent_img" className="w-[100px]" />
                <div className="flex flex-col gap-4 justify-center">
                  <p className="text-[14px] text-[#646464] font-medium">
                    March 22, 2022
                  </p>
                  <p className="text-[16px] text-[#000000] font-bold hover:text-[#ff0336] ease-in duration-200 cursor-pointer ">
                    Learn Boxing With Our Trainer John
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <img src={Recent6} alt="recent_img" className="w-[100px]" />
                <div className="flex flex-col gap-4 justify-center">
                  <p className="text-[14px] text-[#646464] font-medium">
                    March 22, 2022
                  </p>
                  <p className="text-[16px] text-[#000000] font-bold hover:text-[#ff0336] ease-in duration-200 cursor-pointer ">
                    How To Get Lean For The Summer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
            <p className="text-[18px] text-black font-bold mb-5">
              Popular Tags
            </p>
            <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
            <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Crossfit
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Fitness
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Gym
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Meditation
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Running
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Workout
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Yoga
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Boxing
              </p>
            </div>
          </div>
          <div className="blog-banner w-full h-[40rem] relative">
            <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
              gymat
            </p>
            <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[14rem] h-[60px]"></span>
            <div className="text-white flex flex-col absolute top-[10rem] left-7">
              <p className="text-[64px] font-bold">34%</p>
              <p className="text-[20px] font-bold -mt-[10px]">Flat Discount</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
