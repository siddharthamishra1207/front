import React from "react";
import img2 from "./wave.svg";
import "animate.css";

import imp5 from "./Svg/Frame2.svg";

const FirstPart = () => {
  return (
    <>
      <section class="text-gray-600 body-font bg-mycolor">
        <center>
          <h1 class="font-raleway font-semibold text-80 leading-105 text-black p-4">
            Transforming 21st Gen Creator Economy
          </h1>

          <h1 class="font-raleway font-semibold text-32 leading-37 text-black p-4">
            
            One Stop For Creators,Investors & MSME
          </h1>

          <img src={imp5} />
        </center>
      </section>
      <img src={img2} />
    </>
  );
};

export default FirstPart;
