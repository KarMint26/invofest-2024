import React, { useEffect } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import AOS from "aos";

export function MediaPartner() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-8 mb-6 text-3xl font-bold text-slate-600 sm:text-[40px]/[48px]"
        >
          Media Partner <span className="text-invofest">INVOFEST 2024</span>
        </h1>
        <InfiniteMovingCards
          items={mediaPartner}
          direction="right"
          speed="slow"
        />
      </div>
    </React.Fragment>
  );
}

const mediaPartner = [
  {
    id: 1,
    img_path: "/assets/media_partner/info_lombait.png",
  },
  {
    id: 2,
    img_path: "/assets/media_partner/csrelatedcomp.jpg",
  },
  {
    id: 3,
    img_path: "/assets/media_partner/kompetisi_mahasiswa.png",
  },
  {
    id: 4,
    img_path: "/assets/media_partner/lomba_sma.png",
  },
  {
    id: 5,
    img_path: "/assets/media_partner/mitra_lomba.jpg",
  },
  {
    id: 6,
    img_path: "/assets/media_partner/lomba_nasional.jpg",
  },
  {
    id: 7,
    img_path: "/assets/media_partner/permikomnas.png",
  },
];
