import About from "@/components/home/About";
import HeroHome from "@/components/home/HeroHome";
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
    </React.Fragment>
  );
};

export default Home;
