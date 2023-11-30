import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div id="hero">
      <motion.div
        className="snap-start h-screen w-screen flex flex-col gap-14 items-center justify-center text-5xl p-10 border-none"
        style={{ backgroundImage: "url('/img/Hero.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        data-slide="1"
        id="slide-1"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="uppercase text-3xl md:text-5xl font-bold xl:text-6xl" variants={textVariants}>
          We make digital assets
        </motion.h1>
        <motion.p className="text-xl md:text-2xl xl:text-4xl" variants={textVariants}>
          Trust your digital company needs with us
        </motion.p>
        <motion.button className="bg-gray-800 text-white rounded-3xl py-2 px-6 w-52 font-bold text-base xl:text-2xl xl:w-72 xl:py-3 " variants={textVariants}>
          Make Appointment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
