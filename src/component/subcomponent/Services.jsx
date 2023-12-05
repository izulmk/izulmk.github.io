import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Services = ({ items, variants }) => {
  const [ref1, ref2, ref3] = [useRef(), useRef(), useRef(), useRef()];
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const isInview1 = useInView(ref1, { threshold: 0.5 });
  const isInview2 = useInView(ref2, { threshold: 0.5 });
  const isInview3 = useInView(ref3, { threshold: 0.5 });

  useEffect(() => {
    const inViewRefs = [isInview1, isInview2, isInview3];

    inViewRefs.forEach((view) => {
      if (view && !shouldAnimate) {
        setTimeout(() => {
          setShouldAnimate(true);
        }, 1000);
      }
    });
  }, [isInview1, isInview2, isInview3, shouldAnimate]);

  const refs = [ref1, ref2, ref3];
  const isInviews = [isInview1, isInview2, isInview3];

  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          className="snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0"
          data-slide={4 + index}
          id={`slide-${4 + index}`}
          variants={variants}
          initial={`initial`}
          ref={refs[index]}
          animate={isInviews[index] ? `animate` : `initial`}
          key={index}
        >
          {/* text */}
          <motion.div className="h-1/3 md:w-1/2 md:h-full flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] ">
            <motion.div>
              <motion.p className="text-center text-xl md:text-2xl md:text-justify">{item.p}</motion.p>
            </motion.div>
          </motion.div>
          {/* image */}
          <img src={item.img} alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
