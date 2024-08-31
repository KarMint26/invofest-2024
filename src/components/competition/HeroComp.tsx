import React from "react";
import AOS from "aos";
import heroITCompetition from "/assets/Maskot-Lomba.png";
import ButtonPrimary from "../custom/ButtonPrimary";

const HeroComp = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-fit p-4 px-8">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-3">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1
                data-aos="fade-right"
                data-aos-delay="300"
                className="font-semibold text-invofest text-3xl sm:text-4xl lg:text-5xl"
              >
                IT Competition
              </h1>
              <h1
                data-aos="fade-right"
                data-aos-delay="450"
                className="font-semibold text-invofest text-xl sm:text-2xl lg:text-3xl"
              >
                "AI Challenge: Gen Z's Quest for Digital Sustainability"
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="550"
                className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
              >
                Kompetisi dalam INVOFEST ini mengusung tema "AI Challenge: Gen
                Z's Quest for Digital Sustainability", Tema ini bertujuan
                mengajak generasi muda untuk mengembangkan inovasi dan
                kreativitas guna membentuk kelompok yang memiliki potensi luar
                biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-3">
                <ButtonPrimary
                  text={"INFO SELENGKAPNYA"}
                  dataAos={"zoom-in"}
                  delayAos={"400"}
                  isOutline={false}
                  handleClick={() =>
                    window.scrollTo({
                      top: 850,
                    })
                  }
                />
                <ButtonPrimary
                  text={"HUBUNGI PANITIA"}
                  dataAos={"zoom-in"}
                  delayAos={"550"}
                  isOutline={true}
                  handleClick={() =>
                    window.open(
                      `https://wa.me/6285972736905?text=${encodeURIComponent(
                        "Halo Kak, Saya Ingin Bertanya..."
                      )}`
                    )
                  }
                />
              </div>
            </div>
            <img
              src={heroITCompetition}
              alt="hero-landing-page"
              className="w-[320px] sm:w-[400px]"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroComp;
