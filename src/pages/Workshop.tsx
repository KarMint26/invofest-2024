import { TitlePage } from "@/utils/TitlePage";
import React from "react";
import heroInvofest1 from "/assets/Maskot-Hero.png";

const Workshop = () => {
  TitlePage("Workshop");

  return (
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-fit p-4 px-8">
          <div className="flex justify-center items-center gap-4 flex-col lg:flex-row">
            <img
              src={heroInvofest1}
              alt="hero-landing-page"
              className="w-[320px] sm:w-[400px]"
            />
            <h1 className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5">
              SEGERA HADIR
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Workshop;
