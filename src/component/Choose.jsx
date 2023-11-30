import React from "react";

const Choose = () => {
  return (
    <div>
      <div className="snap-start bg-black text-white h-screen w-screen gap-8 flex flex-col justify-center p-10 md:p-[100px] xl:p-[150px]" data-slide="2" id="slide-2">
        <h1 className="text-3xl md:text-5xl font-bold xl:text-6xl">Why choose us?</h1>
        <p className="text-xl md:text-2xl xl:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores laboriosam harum placeat nesciunt explicabo error neque facilis quas quidem sunt unde animi, fugiat quaerat cumque inventore tempora consectetur sit. Illo
          ad ducimus necessitatibus.
        </p>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-5xl font-bold xl:text-6xl">70+</h1>
            <p className="text-xs md:text-sm xl:text-lg">Project solved</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-5xl font-bold xl:text-6xl">8</h1>
            <p className="text-xs md:text-sm xl:text-lg">Project solved</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-5xl font-bold xl:text-6xl">9</h1>
            <p className="text-xs md:text-sm xl:text-lg">Project solved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
