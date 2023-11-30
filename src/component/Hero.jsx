import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <div
        className="snap-start h-screen w-screen flex flex-col gap-14 items-center justify-center text-5xl p-10"
        style={{ backgroundImage: "url('/img/Hero.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        data-slide="1"
        id="slide-1"
      >
        <h1 className="uppercase text-3xl md:text-5xl font-bold xl:text-6xl">We make digital assets</h1>
        <p className="text-xl md:text-2xl xl:text-4xl">Trust your digital company needs with us</p>
        <button className="bg-gray-800 text-white rounded-3xl py-2 px-6 w-52 font-bold text-base xl:text-2xl xl:w-72 xl:py-3 ">Make Appointment</button>
      </div>
    </div>
  );
};

export default Hero;
