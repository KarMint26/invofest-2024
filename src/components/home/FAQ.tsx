import React from "react";
import AOS from "aos";

const FAQ = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-fit p-4 px-8">FAQ</div>
      </div>
    </React.Fragment>
  );
};

export default FAQ;
