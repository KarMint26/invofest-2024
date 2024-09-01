import React from "react";
import AOS from "aos";
import CardSpeaker from "./CardSpeaker";

const delays = [500, 1000, 1500];
const arrayKu = [
  {
    name: "Pricilla",
    position: "Pricilla",
    image: "/assets/khusus/1.jpg",
  },
];
type CustomSpeakerProps = {
  data: Array<any>;
};
const CustomSpeaker = ({ data }: CustomSpeakerProps) => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-screen-xl w-full h-fit relative mx-auto py-20 mb-20">
        <div className="w-full h-fit p-4 px-8">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5 sm:mb-44"
          >
            Temui Pembicara Khusus Kami
          </h1>
          <div className="flex flex-col sm:flex-row gap-36 mt-36 sm:gap-10">
            {data.map((item, index) => {
              return (
                <CardSpeaker
                  delay={delays[index]}
                  name={item.name}
                  position={item.position}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomSpeaker;
