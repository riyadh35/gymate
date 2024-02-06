import pricingTop from "../../assets/pricing/bg-text.png";
import pricingBottm from "../../assets/pricing/bg-dumbell.png";
import titlebg from "../../assets/pricing/titlebg.svg";
import PricingCards from "./PricingCards";
import img1 from "../../assets/pricing/img1.jpg";
import img2 from "../../assets/pricing/img2.jpg";
import img3 from "../../assets/pricing/img3.jpg";

const PricingChart = () => {
  return (
    <section id="pricing" className="pricing-section relative py-[10rem]">
      <div className="container page-padding ">
        <img
          src={pricingTop}
          alt="pricing_top_bg"
          className="absolute left-0 "
        />

        <div className="flex flex-col gap-6 relative items-center text-center ">
          <p className="font-bold text-[15px] uppercase relative text-white z-10 mb-8">
            Pricing Chart
          </p>
          <img
            src={titlebg}
            alt=""
            className="w-[18rem] absolute -top-[10px]"
          />
          <h3 className="text-black font-blod text-[2.15rem]">
            Exclusive Pricing Plan
          </h3>
          <p className="text-[#646464] font-medium text-[15px] text-center ">
            Gymat an unknown printer took a galley of type and scrambled <br />{" "}
            make a type specimen book.
          </p>
        </div>
        <div className="flex gap-10 mt-32 relative z-[2] ">
          <PricingCards img={img1} price="39" />
          <PricingCards img={img2} price="65" />
          <PricingCards img={img3} price="100" />
        </div>
        <img
          src={pricingBottm}
          alt="pricing_top_bg"
          className="absolute right-0 bottom-0 z-[1]"
        />
      </div>
    </section>
  );
};

export default PricingChart;
