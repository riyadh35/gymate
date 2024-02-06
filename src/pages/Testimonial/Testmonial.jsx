import titleBg from "../../assets/choose-us/title-bg.svg";
import testimonialImg1 from "../../assets/testimonials/testimonial-new.jpg";
import quotes from "../../assets/testimonials/quotes.png";
import shapIcon from "../../assets/testimonials/testimonial-shape.svg";
import logo from "../../assets/testimonials/logo1.png";
import logo1 from "../../assets/testimonials/logo2.png";
import logo2 from "../../assets/testimonials/logo3.png";
import logo3 from "../../assets/testimonials/logo4.png";
import logo4 from "../../assets/testimonials/logo5.png";

const Testmonial = () => {
  return (
    <section className="py-[5rem] mx-auto testimonial-section bg-white">
      <div className="container page-padding">
        <div className="text-center flex items-center flex-col w-full relative">
          <p className="font-bold text-base relative text-white z-10">
            Testimonials
          </p>
          <img src={titleBg} alt="" className="absolute w-[15rem] -top-[6px]" />
        </div>
        <div className="bg-white mt-[7rem] border-solid border-[9px] border-[#efefef] p-[30px] h-[407px] lps:mt-[3rem] mlsm:h-[437px] ml:h-[300px]">
          <div className="relative bg-black overflow-x-clip w-full h-[20.7rem] ">
            <img
              src={testimonialImg1}
              alt=""
              className="absolute bottom-0 -left-10 z-20 h-[395px] rounded-tr-[200px] "
            />
            <div className="flex">
              <div className="absolute flex flex-col bg-black top-0 right-0 w-[60%] h-full py-[47px] ">
                <img src={quotes} alt="" className="w-[3.7rem]" />
                <p className="text-base italic text-[#dedede] my-6 z-10">
                  “I've been a member of Gymate for the past 6 months and it has
                  been an amazing experience. The trainers are knowledgeable and
                  supportive, the equipment is top-notch, and the community of
                  members is friendly and encouraging.”
                </p>
                <h3 className="text-white text-[21px] mb-1 font-bold">
                  Harry Potter
                </h3>
                <p className="text-[14px] font-medium text-[#dedede]">
                  CEO of Hogwarts
                </p>
                <img
                  src={shapIcon}
                  alt="shap_icon"
                  className="w-[11rem] absolute bottom-0 right-[7rem] invert opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 ">
        <img
          src={logo}
          alt=""
          className="scale-[.8] hover:invert"
          style={{ transition: "all 0.3s ease 0s" }}
        />
        <img
          src={logo1}
          alt=""
          className="scale-[.8] hover:invert"
          style={{ transition: "all 0.3s ease 0s" }}
        />
        <img
          src={logo2}
          alt=""
          className="scale-[.8] hover:invert"
          style={{ transition: "all 0.3s ease 0s" }}
        />
        <img
          src={logo3}
          alt=""
          className="scale-[.8] hover:invert"
          style={{ transition: "all 0.3s ease 0s" }}
        />
        <img
          src={logo4}
          alt=""
          className="scale-[.8] hover:invert"
          style={{ transition: "all 0.3s ease 0s" }}
        />
      </div>
    </section>
  );
};

export default Testmonial;
