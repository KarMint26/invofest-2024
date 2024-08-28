import React from "react";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";

const About = () => {
  return (
    <React.Fragment>
      <div className="bg-invofest_secondary w-full h-[700px] relative">
        <img src={WhiteWaveTop} alt="wave" className="w-full relative top-0" />

        <div className="max-w-screen-xl mx-auto py-20">
          <div className="w-full">
            <h1 className="font-semibold text-invofest text-2xl sm:text-3xl lg:text-4xl">
              Tentang INVOFEST
            </h1>
          </div>
        </div>

        <img
          src={WhiteWaveBot}
          alt="wave"
          className="w-full absolute bottom-0"
        />
      </div>
    </React.Fragment>
  );
};

export default About;
