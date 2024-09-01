import React from "react";
import AOS from "aos";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";
import { CustomAboutProps } from "@/utils/types";

const CustomAbout = ({ title, description }: CustomAboutProps) => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="bg-invofest_secondary w-full h-fit relative">
        <img src={WhiteWaveTop} alt="wave" className="w-full relative top-0" />

        <div className="max-w-screen-xl mx-auto py-20">
          <div className="w-full h-fit p-4 px-8">
            <h1
              data-aos="zoom-in-up"
              data-aos-delay="300"
              className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5"
            >
              {title}
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-delay="450"
              className="text-center text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
            >
              {description}
            </p>
          </div>
        </div>
        <img
          src={WhiteWaveBot}
          alt="wave"
          className="w-full relative bottom-0"
        />
      </div>
    </React.Fragment>
  );
};

export default CustomAbout;
