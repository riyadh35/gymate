import MainButton from "../Shared/MainButton/MainButton";

const CallBanner = () => {
  return (
    <section className="call-banner py-[5rem]">
      <div className="container page-padding text-white">
        <h2 className="text-[36px] font-bold">Need a Fitness Trainer</h2>
        <h3 className="text-[28px] font-bold mb-10">
          <span className="text-[#FF0336]">Call:</span> +123-456789
        </h3>

        <MainButton
          color={`!text-white`}
          bg={`bg-[#ff0336]`}
          text="purchase now"
          arrowColor={`!text-white`}
          cN="pricing-button cta-banner-btn"
          goTo="/classes"
        />
      </div>
    </section>
  );
};

export default CallBanner;
