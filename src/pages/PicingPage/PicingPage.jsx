import PricingChart from "../Pricing/PricingChart";

const PicingPage = () => {
  return (
    <section id="schedul">
      <div className="login-banner relative flex justify-center">
        <h2 className="text-white text-[48px] lps:text-[22px] font-bold absolute bottom-[25px]">
          Pricing
        </h2>
      </div>
      <PricingChart />
    </section>
  );
};

export default PicingPage;
