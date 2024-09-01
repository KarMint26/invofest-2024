export type CustomHeroProps = {
  title: string;
  subtitle: string;
  description: string;
  linkRegister: string;
  image: string;
};

export type CustomAboutProps = {
  title: string;
  description: string;
};

export type GeneralLayoutProps = {
  heroTitle: string;
  subtitle: string;
  heroDescription: string;
  linkRegister: string;
  image: string;
  aboutTitle: string;
  aboutDescription: string;
  children: React.ReactNode;
};

export type CardSpeakerProps = {
  delay: number;
  name: string;
  position: string;
  image: string;
};

export type CustomEventsProps = {
  title: string;
  place: string;
  time: string;
  date: string;
};
