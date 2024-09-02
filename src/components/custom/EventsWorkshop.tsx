import React from "react";
import AOS from "aos";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";
import { EventWorkshopProps } from "@/utils/types";
import CardWorkshop from "./CardWorkshop";
import { FaCode } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

const EventWorkshop = ({ data }: { data: EventWorkshopProps[] }) => {
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
              Pelaksanaan IT Workshop
            </h1>
          </div>
          <div className="w-full max-w-6xl m-auto justify-center items-center flex flex-wrap gap-5">
            {data.map((item) => (
              <CardWorkshop
                key={item.id}
                icon={
                  item.id === 1 ? (
                    <FaCode className="inline text-3xl text-white" />
                  ) : item.id === 2 ? (
                    <MdPhoneAndroid className="inline text-3xl text-white" />
                  ) : item.id === 3 ? (
                    <SiTensorflow className="inline text-3xl text-white" />
                  ) : (
                    <FaShieldAlt className="inline text-3xl text-white" />
                  )
                }
                id={item.id}
                title={item.title}
                place={item.place}
                date={item.date}
                time={item.time}
              />
            ))}
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

export default EventWorkshop;
