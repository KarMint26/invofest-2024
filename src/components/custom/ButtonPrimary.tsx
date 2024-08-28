import React from "react";
import AOS from "aos";

type BtnPrimary = {
  dataAos: string;
  delayAos: string;
  text: string;
  isOutline: boolean;
  handleClick: () => void;
};

const ButtonPrimary = ({
  dataAos,
  delayAos,
  text,
  isOutline,
  handleClick = () => {},
}: BtnPrimary) => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      {/* <div
        data-aos={dataAos}
        data-aos-delay={delayAos}
        onClick={handleClick}
        className={`${
          isOutline
            ? "bg-white border-invofest text-invofest hover:text-white hover:bg-invofest"
            : "bg-invofest border-invofest text-white hover:bg-invofest_dark"
        } border px-3 py-2 sm:px-4 sm:py-3 font-semibold rounded-md cursor-pointer text-[0.75rem] sm:text-base transition-all duration-300 ease-in-out`}
      >
        {text}
      </div> */}
      {isOutline ? (
        <button
          data-aos={dataAos}
          data-aos-delay={delayAos}
          onClick={handleClick}
          className="before:ease relative px-3 py-2 sm:px-4 sm:py-3 overflow-hidden border border-invofest text-invofest transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-16 before:rotate-45 before:bg-invofest before:duration-700 hover:text-white hover:before:h-64 hover:before:-translate-y-32 text-[0.75rem] sm:text-base"
        >
          <span className="relative z-10">{text}</span>
        </button>
      ) : (
        <button
          data-aos={dataAos}
          data-aos-delay={delayAos}
          onClick={handleClick}
          className="before:ease relative px-3 py-2 sm:px-4 sm:py-3 overflow-hidden border border-invofest bg-invofest text-white transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-12 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-56 text-[0.75rem] sm:text-base"
        >
          <span className="relative z-10">{text}</span>
        </button>
      )}
    </React.Fragment>
  );
};

export default ButtonPrimary;
