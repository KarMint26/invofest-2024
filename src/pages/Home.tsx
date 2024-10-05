import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import HeroHome from "@/components/home/HeroHome";
import ITCompetitionSec from "@/components/home/ITCompetitionSec";
import ITSeminarSec from "@/components/home/ITSeminarSec";
import ITTalkshowSec from "@/components/home/ITTalkshowSec";
import ITWorkshopSec from "@/components/home/ITWorkshopSec";
import { Sponsorship } from "@/components/home/Sponsorship";
import { TitlePage } from "@/utils/TitlePage";
import React from "react";

const Home = () => {
  TitlePage();

  return (
    <React.Fragment>
        {/* Hero Section */}
        <HeroHome />

        {/* About Section */}
        <About />

        {/* IT Seminar Section */}
        <ITSeminarSec />

        {/* IT Talkshow Section */}
        <ITTalkshowSec />

        {/* IT Workshop Section */}
        <ITWorkshopSec />

        {/* IT Competition Section */}
        <ITCompetitionSec />

        {/* FAQ Section */}
        <FAQ />

        {/* Sponsorship */}
        <Sponsorship />
    </React.Fragment>
  );
};

export default Home;
