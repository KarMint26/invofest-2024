import HeroHome from "@/components/home/HeroHome";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="max-w-screen-xl">
        {/* Hero Page */}
        <HeroHome />
      </div>
    </React.Fragment>
  );
};

export default Home;
