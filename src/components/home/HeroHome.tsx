import React from "react";
import heroInvofest1 from "/assets/Maskot-Hero.png";
import textImage from "/assets/text-image.png";
import AOS from "aos";
import ButtonPrimary from "../custom/ButtonPrimary";

const HeroHome = () => {
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
              <img
                data-aos="fade-right"
                data-aos-delay="100"
                src={textImage}
                className="w-[280px] sm:w-[300px]"
                alt="text-image"
              />
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
              >
                Invofest (Informatics Vocational Festival) adalah festival
                tahunan yang bertujuan untuk menginspirasi dan memberdayakan
                generasi muda Indonesia dalam menghadapi era digital. Dengan
                mengusung tema “AI for a Sustainable Future: The Role of
                Generation Z in the Digital Era”.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-3">
                <ButtonPrimary
                  text={"INFO SELENGKAPNYA"}
                  dataAos={"zoom-in"}
                  delayAos={"300"}
                  isOutline={false}
                  handleClick={() =>
                    window.scrollTo({
                      top: 500,
                    })
                  }
                />
                <ButtonPrimary
                  text={"HUBUNGI PANITIA"}
                  dataAos={"zoom-in"}
                  delayAos={"550"}
                  isOutline={true}
                  handleClick={() => window.open("https://wa.me/6285972736905")}
                />
              </div>
            </div>
            <img
              src={heroInvofest1}
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

export default HeroHome;
