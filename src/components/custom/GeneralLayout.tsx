import React from "react";
import CustomHero from "./CustomHero";
import { GeneralLayoutProps } from "@/utils/types";
import CustomAbout from "./CustomAbout";
import FAQ from "../home/FAQ";
import CustomEvents from "./CustomEvents";

function GeneralLayout({
  heroTitle,
  subtitle,
  heroDescription,
  linkRegister,
  image,
  aboutTitle,
  aboutDescription,
  children,
}: GeneralLayoutProps) {
  return (
    <React.Fragment>
      <CustomHero
        title={heroTitle}
        subtitle={subtitle}
        description={heroDescription}
        linkRegister={linkRegister}
        image={image}
      />
      <CustomAbout title={aboutTitle} description={aboutDescription} />
      {children}
      <FAQ />
    </React.Fragment>
  );
}

export default GeneralLayout;
// workshop 1
// seminar 1/2
// talkshow 3
