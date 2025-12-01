import { motion } from "framer-motion";
import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";

import React from "react";
import { pm } from "../assets";
import Tech from "./Tech";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Prabin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer <br className="sm:block hidden" />
            Serving 2 year+ professionally.
          </p>
        </div>
        <div className="hidden lg:block mx-auto">
          <img
            src={pm}
            className=" h-60 rounded-full border-4 border-indigo-600"
          />
        </div>
      </div>
      <Tech />
    </section>
  );
};

export default Hero;
