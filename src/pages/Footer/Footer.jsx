import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa6";
import footerLogo from "../../assets/logo/logo-footer.svg";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer-section bg-white py-[5rem]">
      <div className="container page-padding">
        <div className="flex  justify-between !text-left gap-[3rem]">
          <div className="flex flex-col w-1/3 gap-8">
            <img src={footerLogo} alt="" className="w-[12rem]" />
            <p className="font-medium text-[15px] text-[#646464]">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="flex gap-7 text-[37px] text-[#646464] ">
              <FaFacebookF
                className="bg-[#efefef] p-[10px] rounded-full px-[4px] hover:bg-[#ff0336] hover:text-white "
                style={{ transition: "all 0.3s ease 0s" }}
              />
              <IoLogoTwitter
                className="bg-[#efefef] p-[10px] rounded-full px-[4px] hover:bg-[#ff0336] hover:text-white "
                style={{ transition: "all 0.3s ease 0s" }}
              />

              <FaPinterestP
                className="bg-[#efefef] p-[10px] rounded-full px-[4px] hover:bg-[#ff0336] hover:text-white "
                style={{ transition: "all 0.3s ease 0s" }}
              />
              <FaYoutube
                className="bg-[#efefef] p-[10px] rounded-full px-[4px] hover:bg-[#ff0336] hover:text-white "
                style={{ transition: "all 0.3s ease 0s" }}
              />
            </div>
            <p className="text-[16px] font-medium text-[#646464]">
              Privacy policy | ©️ {new Date().getFullYear()} Gymate <br />{" "}
              Design by
              <a href="https://www.radiustheme.com/" target="_blank">
                {" "}
                Radius Theme
              </a>
            </p>
          </div>
          <div className="flex flex-col relative gap-8">
            <p className="text-[22px] font-bold footer-main">Our Classes</p>
            <span className="absolute w-[4.5rem] h-1 bg-[#ff0336] top-[32px]"></span>
            <p className="text-base hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Fitness Classes
            </p>
            <p className="text-base hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Aerobics Classes
            </p>
            <p className="text-base hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Power Yoga
            </p>
            <p className="text-base hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Learn Machines
            </p>
            <p className="text-base hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-bold overflow-hidden">
              Full-body Strength
            </p>
          </div>
          <div className="flex flex-col relative gap-8">
            <p className="text-[22px] font-bold footer-main">Working Hours</p>
            <span className="absolute w-[4.5rem] h-1 bg-[#ff0336] top-[32px]"></span>
            <p className="text-[16px] text-[#646464] font-bold">
              Monday - Friday:
            </p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 21:00pm:
            </p>
            <p className="text-[16px] text-[#646464] font-bold">
              Monday - Friday:
            </p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 19:00pm:
            </p>
            <p className="text-[16px] text-[#646464] font-bold">
              Sunday - Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
