import DescComp from "@/components/competition/DescComp";
import HeroComp from "@/components/competition/HeroComp";
import ListComp from "@/components/competition/ListComp";
import { MediaPartner } from "@/components/competition/MediaPartner";
import { TitlePage } from "@/utils/TitlePage";
import React from "react";

const Competition = () => {
  TitlePage("Competition");

  return (
    <React.Fragment>
      {/* Hero Section */}
      <HeroComp />

      {/* Description */}
      <DescComp />

      {/* List Competition */}
      <ListComp />

      {/* Media Partner */}
      <MediaPartner />
    </React.Fragment>
  );
};

export default Competition;
