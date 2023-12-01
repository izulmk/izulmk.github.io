import React, { useRef, useEffect, useState } from "react";
import SubMenu from "./subcomponent/SubMenu";
import { motion, useInView } from "framer-motion";

const variants = {
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
const variants1 = {
  initial1: {
    x: -500,
    opacity: 0,
  },
  animate1: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const variants2 = {
  initial2: {
    x: -500,
    opacity: 0,
  },
  animate2: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const variants3 = {
  initial3: {
    x: -500,
    opacity: 0,
  },
  animate3: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Excel = ({ currentSlide, slideNumber, handleCircleClick, navbarRightSlide }) => {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldAnimate1, setShouldAnimate1] = useState(false);
  const [shouldAnimate2, setShouldAnimate2] = useState(false);
  const [shouldAnimate3, setShouldAnimate3] = useState(false);

  const isInview = useInView(ref, { threshold: 0.5 });
  const isInview1 = useInView(ref1, { threshold: 0.5 });
  const isInview2 = useInView(ref2, { threshold: 0.5 });
  const isInview3 = useInView(ref3, { threshold: 0.5 });

  useEffect(() => {
    if (isInview && !shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate1(true);
      }, 1000); // Delay time in milliseconds after the main animation completes
    }
    if (isInview1 && !shouldAnimate1) {
      setTimeout(() => {
        setShouldAnimate1(true);
      }, 1000); // Delay time in milliseconds after the main animation completes
    }
    if (isInview2 && !shouldAnimate2) {
      setTimeout(() => {
        setShouldAnimate1(true);
      }, 1000); // Delay time in milliseconds after the main animation completes
    }
    if (isInview3 && !shouldAnimate3) {
      setTimeout(() => {
        setShouldAnimate1(true);
      }, 1000); // Delay time in milliseconds after the main animation completes
    }
  }, [isInview, isInview1, isInview2, isInview3, shouldAnimate, shouldAnimate1, shouldAnimate2, shouldAnimate3]);

  return (
    <div className="bg-black flex flex-col justify-center items-center">
      <SubMenu currentSlide={currentSlide} slideNumber={slideNumber} handleCircleClick={handleCircleClick} />
      {/* 1 */}
      <motion.div
        className="snap-start bg-black text-white h-screen w-screen flex flex-col gap-36 md:gap-72 px-14 text-justify py-16 md:p-[100px] xl:p-[150px]"
        data-slide="3"
        id="slide-3"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInview ? "animate" : "initial"}
      >
        <motion.div className="flex flex-col gap-2 md:gap-4 m-auto md:my-0 md:mx-[-15px]">
          <motion.h1 className="text-3xl md:text-5xl font-bold xl:text-6xl">We excel in these..</motion.h1>
          <motion.p className="text-xl md:text-2xl xl:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Sequi neque dicta modi, accusamus maxime tempora iste minus et velit.
          </motion.p>
        </motion.div>
      </motion.div>
      {/* 2 */}
      <motion.div
        className="snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0"
        data-slide="4"
        id="slide-4"
        variants={variants1}
        initial="initial1"
        ref={ref1}
        animate={isInview1 ? "animate1" : "initial1"}
      >
        {/* text */}
        <motion.div className="h-1/3 md:w-1/2 md:h-full flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] ">
          <motion.div>
            <motion.p className="text-center text-xl md:text-2xl md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.</motion.p>
          </motion.div>
        </motion.div>
        {/* image */}
        <img src="img/Rectangle 7.png" alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
      </motion.div>
      {/* 3 */}
      <motion.div
        className="snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0"
        data-slide="5"
        id="slide-5"
        variants={variants2}
        initial="initial2"
        ref={ref2}
        animate={isInview2 ? "animate2" : "initial2"}
      >
        {/* text */}
        <motion.div className="h-1/3 md:w-1/2 md:h-full flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] ">
          <motion.div>
            <motion.p className="text-center text-xl md:text-2xl md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.</motion.p>
          </motion.div>
        </motion.div>
        {/* image */}
        <img src="img/Rectangle 7-2.png" alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
      </motion.div>
      {/* 4 */}
      <motion.div
        className="snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0"
        data-slide="6"
        id="slide-6"
        variants={variants3}
        initial="initial3"
        ref={ref3}
        animate={isInview3 ? "animate3" : "initial3"}
      >
        {/* text */}
        <motion.div className="h-1/3 md:w-1/2 md:h-full flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] ">
          <motion.div>
            <motion.p className="text-center text-xl md:text-2xl md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.</motion.p>
          </motion.div>
        </motion.div>
        {/* image */}
        <img src="img/Rectangle 7-3.png" alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
      </motion.div>
    </div>
  );
};

export default Excel;
