import Aos from "aos";
import React from "react";

function CardEvents({
  place,
  delay,
  icon,
}: {
  place: string;
  delay: number;
  icon: JSX.Element;
}) {
  React.useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <div
      className="text-xl w-full sm:mb-5 sm:max-w-lg m-auto flex p-3 sm:p-5 bg-white items-center rounded-xl border-r-8 border-invofest"
      data-aos-delay={delay}
      data-aos="fade-up"
    >
      <div className="p-5 bg-invofest rounded-xl mr-5">{icon}</div>
      <p className="text-slate-600">{place}</p>
    </div>
  );
}

export default CardEvents;
