import { Container } from "postcss";
import titlebg from "../assets/gallery/titlebg.svg";

const Hero = () => {
  return (
    <>
      <section className="hero-section max-w[111.6rem] h-[110vh]">
        <div className="hero-container">
          <div className="flex flex-col text-white absolute hero-text ">
            <p className="uppercase text-black text-base font-medium pl-16 mb-8 relative z-10">
              find your energy
            </p>
            <img
              src={titlebg}
              alt="title_bg"
              className="w-[245px] h-[40px] title-bg absolute -top-3 left-7"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
