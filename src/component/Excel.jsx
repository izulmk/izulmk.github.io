import React from "react";
import SubMenu from "./subcomponent/SubMenu";

const Excel = ({ currentSlide, slideNumber, handleCircleClick, navbarRightSlide }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SubMenu currentSlide={currentSlide} slideNumber={slideNumber} handleCircleClick={handleCircleClick} />
      {/* 1 */}
      <div className="snap-start bg-black text-white h-screen w-screen flex flex-col gap-36 md:gap-72 px-14 text-justify py-16 md:p-[100px] xl:p-[150px]" data-slide="3" id="slide-3">
        <div className="flex flex-col gap-2 md:gap-4 m-auto md:my-0 md:mx-[-15px]">
          <h1 className="text-3xl md:text-5xl font-bold xl:text-6xl">We excel in these..</h1>
          <p className="text-xl md:text-2xl xl:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Sequi neque dicta modi, accusamus maxime tempora iste minus et velit.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0" data-slide="4" id="slide-4">
        {/* text */}
        <div className="h-1/3 md:w-1/2 md:h-full flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] ">
          <div>
            <p className="text-center text-xl md:text-2xl md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.</p>
          </div>
        </div>
        {/* image */}
        <img src="img/Rectangle 7.png" alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
      </div>
      {/* 3 */}
      <div className="snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0" data-slide="5" id="slide-5">
        {/* text */}
        <div className="h-1/3 md:w-1/2 md:h-full flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] ">
          <div>
            <p className="text-center text-xl md:text-2xl md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.</p>
          </div>
        </div>
        {/* image */}
        <img src="img/Rectangle 7-2.png" alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
      </div>
      {/* 4 */}
      <div className="snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0" data-slide="6" id="slide-6">
        {/* text */}
        <div className="h-1/3 md:w-1/2 md:h-full flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] ">
          <div>
            <p className="text-center text-xl md:text-2xl md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.</p>
          </div>
        </div>
        {/* image */}
        <img src="img/Rectangle 7-3.png" alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
      </div>
    </div>
  );
};

export default Excel;
