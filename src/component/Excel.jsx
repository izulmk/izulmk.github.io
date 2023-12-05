import React from "react";
import Services from "./subcomponent/Services";
import useFetch from "../hooks/useFetch";
import HomeServices from "./subcomponent/HomeServices";

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
const Excel = () => {
  const { data, loading, error } = useFetch(`url`);

  return (
    <div className="bg-black flex flex-col justify-center items-center">
      <HomeServices variants={variants} />
      <Services items={items} variants={variants} />
    </div>
  );
};

export default Excel;
