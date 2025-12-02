import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import {
  FaExternalLinkAlt,
  FaUserCircle,
  FaLocationArrow,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// template_9jho76g
// service_jm75y59
// RgK-SYr2S3vw67Ybh

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div>
          <label className="flex flex-row">
            <span>
              <FaUserCircle className="mr-2 flex justify-center items-center" />
            </span>
            <span className="text-white font-medium mb-4">Prabin Bhusal</span>
          </label>
          <label className="flex flex-row">
            <span>
              <FaExternalLinkAlt className="mr-2 flex justify-center items-center" />
            </span>
            <span className="text-white font-medium mb-4">
              bhusalprabin.com.np
            </span>
          </label>
          <label className="flex flex-row">
            <span>
              <FaLocationArrow className="mr-2 flex justify-center items-center" />
            </span>
            <span className="text-white font-medium mb-4">
              Kathmandu, Nepal
            </span>
          </label>
          <label className="flex flex-row">
            <span>
              <MdEmail className="mr-2 flex justify-center items-center" />
            </span>
            <span className="text-white font-medium mb-4">
              prabinbhusal.np@gmail.com
            </span>
          </label>

          <label className="flex flex-col">
            <span className="mt-1 text-secondary text-[12px]">
              "Contact through email given above and I assure to reply within
              24-48 hours of mail received."
            </span>
          </label>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
