import React from "react";
import AOS from "aos";
import { CardSpeakerProps } from "@/utils/types";

function CardSpeaker({ delay, name, position, image }: CardSpeakerProps) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <div
      className="p-10 w-full h-56 sm:h-60 max-w-md mx-auto rounded-xl text-center bg-white hover:bg-invofest_secondary transition-all border-invofest border-4 relative group shadow-lg shadow-invofest_dark"
      data-aos="fade-down"
      data-aos-delay={delay}
    >
      <div className="flex flex-col absolute -top-[7rem] left-0.5 right-0.5 items-center w-full rounded-lg">
        <img
          src={image}
          alt="foto speaker"
          className="w-52 h-52 rounded-full object-cover border-y-invofest border-x-invofest_dark group-hover:border-x-invofest group-hover:border-y-invofest_dark border-8 group-hover:scale-110 transition-all duration-500"
        />
        <h3 className="text-invofest font-semibold mt-5 mb-2 text-xl sm:text-2xl">
          {name}
        </h3>
        <p className="sm:text-lg text-slate-500">{position}</p>
      </div>
    </div>
  );
}

export default CardSpeaker;
