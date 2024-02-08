import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { RxInstagramLogo } from "react-icons/rx";
import { FaPinterestP } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section id="contact">
      <div className="login-banner relative flex justify-center">
        <h2 className="text-white text-[30px] lps:text-[22px] font-bold absolute bottom-[25px]">
          Contact
        </h2>
      </div>
      <div className="container page-padding py-[10rem] bg-white grid grid-cols-2 items-center gap-10 lps:grid-cols-1">
        <div className="lps:w-[60%] lps:flex lps:flex-col lps:mx-auto tablet:w-[90%]  mlsm:w-full">
          <h3 className="text-black text-[36px] font-bold">
            We are here for help you! To Shape Your Body.
          </h3>
          <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[30px] ">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-10 mlsm:grid-cols-1 mlsm:mx-auto">
            <div className="flex flex-col relative">
              <h3 className="text-[20px] font-bold mb-8">New York City, USA</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[30px]"></span>
              <p className="text-[15px] font-medium text-[#646464]">
                85 Briston Mini Street, <br /> London, E1 8LG,USA
              </p>
            </div>
            <div className="flex flex-col relative">
              <h3 className="text-[20px] font-bold mb-8">Opening Hours</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[30px]"></span>
              <div className="text-[15px] font-medium text-[#646464]">
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
              </div>
            </div>
            <div className="flex flex-col relative">
              <h3 className="text-[20px] font-bold mb-8">Information</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[30px]"></span>
              <div className="text-[15px] font-medium text-[#646464] flex flex-col">
                <a href="tel:+800-123-4567">+800-123-4567</a>
                <a href="mailto:mdriyadhossain356@gmail.com">gymat@gmail.com</a>
              </div>
            </div>
            <div className="flex flex-col relative">
              <h3 className="text-[20px] font-bold mb-8">Follow Us On</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[30px]"></span>
              <div className="text-[38px] font-medium text-[#000000] flex gap-5">
                <RiFacebookFill className="bg-[#f4f4f4] p-[10px] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
                <IoLogoTwitter className="bg-[#f4f4f4] p-[10px] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
                <RxInstagramLogo className="bg-[#f4f4f4] p-[10px] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
                <FaPinterestP className="bg-[#f4f4f4] p-[10px] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative lps:w-[65%] lps:flex lps:flex-col lps:mx-auto lps:mt-14 tablet:w-[90%] mlsm:w-full">
          <h3 className="text-[28px] font-bold mb-10">Leave Us Your Info</h3>
          <span className="w-[50px] h-[4px] absolute bg-[#ff0336] top-[77px]"></span>
          <form action="" className="flex flex-col justify-center">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full py-3 px-5 h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
            />
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full py-3 px-5 h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
            />
            <select
              name=""
              id=""
              type="text"
              placeholder="Full Name *"
              className="w-full py-3 px-5 h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
            >
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Boxing</option>
              <option>Running</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Workout</option>
              <option>Karate</option>
              <option>Meditation</option>
              <option>Cycling</option>
            </select>
            <textarea
              type="text"
              placeholder="Full Name *"
              className="w-full py-3 px-5 h-[151px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
            />
            <button className="mx-auto uppercase font-bold text-white bg-[#ff0336] w-fit py-3 px-7 text-[14px] self-center mt-6">
              Submit nOw
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187847941!2d90.33728774918256!3d23.78097572871146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1707422939707!5m2!1sen!2sbd"
        allowfullscreen=""
        loading="lazy"
        title="map"
        style={{ width: "100%", height: "30rem", border: "0px" }}
      ></iframe>
    </section>
  );
};

export default ContactPage;
