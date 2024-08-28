import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import AOS from "aos";

type cardAbout = {
  dataAos: string;
  delayAos: string;
  title: string;
  desc: string;
  btnText: string;
  href: string;
};

const CardAbout = ({
  title,
  desc,
  btnText,
  href,
  dataAos,
  delayAos,
}: cardAbout) => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div
        data-aos={dataAos}
        data-aos-delay={delayAos}
        className="max-w-sm h-fit p-6 bg-white rounded-lg overflow-hidden relative before:absolute before:w-[0.4rem] before:h-full before:bg-invofest before:right-0 before:top-0"
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-invofest">
            {title}
          </h5>
        </a>
        <p className="mb-5 font-normal text-slate-600">{desc}</p>
        <ButtonPrimary
          text={btnText}
          dataAos={""}
          delayAos={""}
          isOutline={false}
          isLink={true}
          href={href}
        />
      </div>
    </React.Fragment>
  );
};

export default CardAbout;
