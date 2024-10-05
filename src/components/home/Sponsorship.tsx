import React, { useEffect } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import AOS from "aos";

export function Sponsorship() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="h-[40rem] mt-16 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-8 mb-2 text-3xl font-bold text-slate-600 sm:text-[40px]/[48px]"
        >
          Sponsor <span className="text-invofest">INVOFEST 2024</span>
        </h1>
        <InfiniteMovingCards
          items={sponsorLogo}
          direction="right"
          speed="slow"
        />
      </div>
    </React.Fragment>
  );
}

const sponsorLogo = [
  {
    id: 1,
    img_path: "/assets/sponsor/big_berry.png",
  },
  {
    id: 2,
    img_path: "/assets/sponsor/indo_print.jpg",
  },
  {
    id: 3,
    img_path: "/assets/sponsor/bahari_inn.jpg",
  },
  {
    id: 4,
    img_path: "/assets/sponsor/dicoding_official.png",
  },
  {
    id: 5,
    img_path: "/assets/sponsor/plaza_hotel_tegal.jpg",
  },
  {
    id: 6,
    img_path: "/assets/sponsor/gilang.jpg",
  },
];
