import React from "react";
import AOS from "aos";
import { EventWorkshopProps } from "@/utils/types";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function CardWorkshop({
  icon,
  id,
  title,
  place,
  date,
  time,
}: EventWorkshopProps) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <div
      className="p-8 bg-white border-b-4 sm:border-b-0 box-content sm:box-border sm:border-r-4 w-full max-w-lg border-invofest rounded-xl flex flex-col sm:flex-row gap-5  mx-5"
      data-aos="fade-up"
      data-aos-delay={id * 500}
    >
      <div className="w-full sm:w-auto py-5 sm:py-5 sm:px-10 bg-invofest rounded-2xl text-8xl flex items-center justify-center">
        {icon}
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">{title}</h2>
        <div className="flex items-center gap-5 text-lg`">
          <FaCalendarAlt className="inline text-xl text-slate-500" />
          <p className="text-slate-500">{date}</p>
        </div>
        <div className="flex items-center gap-5 text-lg`">
          <IoMdClock className="inline text-xl text-slate-500" />
          <p className="text-slate-500">{time}</p>
        </div>
        <div className="flex items-center gap-5 text-lg`">
          <FaLocationDot className="inline text-xl text-slate-500" />
          <p className="text-slate-500">{place}</p>
        </div>
      </div>
    </div>
  );
}

export default CardWorkshop;
