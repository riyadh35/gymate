import bgIcon from "../assets/gallery/bg-icon.png";
import titlebg from "../assets/gallery/titlebg.svg";
const Gallery = () => {
  return (
    <section className="gallery-section relative bg-white">
      <img src={bgIcon} alt="" className="absolute top-[30px] right-0" />
      <div className="container page-padding py-[4rem]">
        <div className="relative flex flex-col items-center gap-3 text-center">
          <p className="font-bold uppercase relative text-base text-white z-10">
            Gymat gallery
          </p>
          <img
            src={titlebg}
            alt="title_bg"
            className="w-[16rem] absolute -top-[8px]"
          />
          <h2 className="text-[2.13rem] font-bold text-black mb-4">
            Our Workplace Gallery
          </h2>
          <p className="text-[#646464] font-medium text-[15px] max-w-3xl">
            Our Workplace Gallery features modern office, team collaboration,
            and fun culture. Attracts talents and showcases company's work
            atmosphere.
          </p>
        </div>
        <div className="gallery-grid relative w-full h-auto py-24">
          <div id="item-0"></div>
          <div id="item-1"></div>
          <div id="item-2"></div>
          <div id="item-3"></div>
          <div id="item-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
