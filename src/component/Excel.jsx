import React, { useRef, useEffect, useState } from "react";
import SubMenu from "./subcomponent/SubMenu";
import { motion, useInView } from "framer-motion";
import Services from "./subcomponent/Services";

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

const items = [
  { p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.", img: "img/Rectangle 7.png" },
  { p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.", img: "img/Rectangle 7-2.png" },
  { p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.", img: "img/Rectangle 7-3.png" },
];
const Excel = ({ currentSlide, slideNumber, handleCircleClick }) => {
  const [ref, ref1, ref2, ref3] = [useRef(), useRef(), useRef(), useRef()];
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const isInview = useInView(ref, { threshold: 0.5 });
  const isInview1 = useInView(ref1, { threshold: 0.5 });
  const isInview2 = useInView(ref2, { threshold: 0.5 });
  const isInview3 = useInView(ref3, { threshold: 0.5 });

  useEffect(() => {
    const inViewRefs = [isInview, isInview1, isInview2, isInview3];

    inViewRefs.forEach((view) => {
      if (view && !shouldAnimate) {
        setTimeout(() => {
          setShouldAnimate(true);
        }, 1000);
      }
    });
  }, [isInview, isInview1, isInview2, isInview3, shouldAnimate]);

  const refs = [ref1, ref2, ref3];
  const isInviews = [isInview1, isInview2, isInview3];

  return (
    <div className="bg-black flex flex-col justify-center items-center">
      <SubMenu currentSlide={currentSlide} slideNumber={slideNumber} handleCircleClick={handleCircleClick} />
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
      <Services items={items} variants={variants} refs={refs} isInviews={isInviews} />
    </div>
  );
};

export default Excel;
