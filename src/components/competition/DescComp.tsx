import React from "react";
import AOS from "aos";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";

const DescComp = () => {
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
              DESKRIPSI KOMPETISI
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-delay="450"
              className="text-center text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
            >
              Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST
              (Infomatics Vocational Festival) 2024 adalah diantaranya National
              UI UX Design Competition, Software Development Competition, dan
              juga UI/UX Design Competition. Kompetisi dalam INVOFEST ini
              mengusung tema "AI Challenge: Gen Z's Quest for Digital
              Sustainability" Tema ini bertujuan mengajak generasi muda untuk
              mengembangkan inovasi dan kreativitas guna membentuk kelompok yang
              memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang
              berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini
              akan berperan dalam menciptakan solusi-solusi baru untuk tantangan
              masa kini dan mendatang, baik dalam hal teknologi, lingkungan,
              pendidikan, maupun tanggung jawab sosial.
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

export default DescComp;
