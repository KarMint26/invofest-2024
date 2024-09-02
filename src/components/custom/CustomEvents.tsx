import React from "react";
import AOS from "aos";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";
import { CustomEventsProps } from "@/utils/types";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import CardEvents from "./CardEvents";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";

const CustomEvents = ({ title, place, time, date }: CustomEventsProps) => {
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
              Pelaksanaan {title}
            </h1>
          </div>
          <div className="w-full max-w-6xl m-auto justify-center items-center flex flex-wrap gap-5">
            <CardEvents
              delay={500}
              place={date}
              icon={<FaCalendarAlt className="inline text-3xl text-white" />}
            />
            <CardEvents
              delay={1000}
              place={time}
              icon={<IoMdClock className="inline text-3xl text-white" />}
            />

            <CardEvents
              delay={1500}
              place={place}
              icon={<FaLocationDot className="inline text-3xl text-white" />}
            />

            <CardEvents
              delay={2000}
              place={"Politeknik Harapan Bersama"}
              icon={<FaBuilding className="inline text-3xl text-white" />}
            />
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

export default CustomEvents;
