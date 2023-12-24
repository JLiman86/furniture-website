import { hero } from "../data";
import StatsBar from "./StatsBar";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  return (
    <section id="home" className="relative flex items-center justify-center bg-hero h-[800px] bg-no-repeat bg-right lg:bg-center bg-cover">
      <div className="max-w-[900px] text-white text-center px-5">
        <h1 className="font-semibold md:text-6xl text-4xl  md:leading-[70px]">
          {title}
        </h1>
        <h2 className="max-w-[500px] mx-auto  mt-6 mb-14 lg:text-lg text-base">
          {subtitle}
        </h2>
        <button className="bg-white/30 px-10 py-2 hover:bg-white/50 rounded-lg">
          {buttonText}
        </button>
      </div>

      <StatsBar />
    </section>
  );
};

export default Hero;
