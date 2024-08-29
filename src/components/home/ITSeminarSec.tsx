import React from "react";
import AOS from "aos";
import ButtonPrimary from "../custom/ButtonPrimary";
import heroITSeminar from "/assets/Maskot-Seminar.png";

const ITSeminarSec = () => {
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
                IT Seminar
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
              >
                seminar berskala nasional yang membahas seputar teknologi
                informasi dan bertujuan untuk mengembangkan potensi diri serta
                meningkatkan pengetahuan di bidang teknologi informasi yang
                mengangkat tema "The Synergy of AI and Gen Z: Shaping a
                Sustainable Digital Future".
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-3">
                <ButtonPrimary
                  text={"DAFTAR IT SEMINAR"}
                  dataAos={"zoom-in"}
                  delayAos={"300"}
                  isOutline={false}
                  isLink={true}
                  href="/seminar"
                  handleClick={() =>
                    window.scrollTo({
                      top: 700,
                    })
                  }
                />
              </div>
            </div>
            <img
              src={heroITSeminar}
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

export default ITSeminarSec;
