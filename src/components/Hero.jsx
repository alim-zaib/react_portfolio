import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/memoji.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-35">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <h1 className="text-6xl font-thin tracking-normal lg:text-8xl">
            Alim Zaib
          </h1>
          <p className="mt-4 max-w-xl py-5 font-light tracking-normal">
            {HERO_CONTENT}
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:ml-8 lg:-mt-8">
          <img src={profilePic} alt="Alim Zaib" className="w-80 lg:w-96" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
