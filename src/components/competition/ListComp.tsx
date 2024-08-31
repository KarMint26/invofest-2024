import React from "react";
import AOS from "aos";
import SoftwareDevImg from "/assets/competition-card/software_dev.png";
import WebDesignImg from "/assets/competition-card/web_design.png";
import UiUxImg from "/assets/competition-card/ui_ux.png";
import CompetitionCard from "../custom/CompetitionCard";

const ListComp = () => {
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
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-3"
          >
            DAFTAR KOMPETISI
          </h1>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="450"
            className="text-sm md:text-base lg:text-[1.15rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600 text-center mb-7"
          >
            Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
          </p>

          {/* List Card Competition */}
          <div className="flex justify-center items-center flex-wrap gap-5">
            <CompetitionCard
              dataAos="fade-up"
              delayAos="200"
              TitleCard="Software Dev Competition"
              DescCard="Software Development Competition ini adalah kompetisi untuk
            menciptakan suatu produk berbentuk perangkat lunak (software) yang
            bermanfaat untuk memberikan solusi bagi permasalahan yang ada
            sekarang ini."
              ImageCard={SoftwareDevImg}
              linkGuideBook="https://drive.google.com/drive/folders/1LDpU9sUieKJuapFYqY0TUBkwV0VBFfWG?usp=drive_link"
              linkReg="https://forms.gle/dr9rZytG9fcBPLbr8"
              linkTools="https://drive.google.com/drive/folders/1AlvZL59g5w34d34zHEiIhzHj1QI5mOjd?usp=drive_link"
            />
            <CompetitionCard
              dataAos="fade-up"
              delayAos="400"
              TitleCard="UI/UX Design Competition"
              DescCard="UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna."
              ImageCard={UiUxImg}
              linkGuideBook="https://drive.google.com/drive/folders/10UWXXBV-XUts1rv0ww7FBE1lQ1l8EH5u?usp=drive_link"
              linkReg="https://forms.gle/ZCpEAKWis7nYrQeN6"
              linkTools="https://drive.google.com/drive/folders/1z16njbrYAUp6UCaP7737hdbk5JHDy-dD?usp=drive_link"
            />
            <CompetitionCard
              dataAos="fade-up"
              delayAos="600"
              TitleCard="Web Design Competition"
              DescCard="Web Design Competition ini adalah kompetisi untuk
              menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi."
              ImageCard={WebDesignImg}
              linkGuideBook="https://drive.google.com/drive/folders/1YjXlJWCw9lMBjT26EK8xmDsDdeCwHnWh?usp=drive_link"
              linkReg="https://forms.gle/abYz7k5QY8g7V6Bu9"
              linkTools="https://drive.google.com/drive/folders/1OooBgYOTDBYtFAMJw_3yNAFJL4NHmnE2?usp=drive_link"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListComp;
