import React from "react";

const SubMenu = ({ currentSlide, handleCircleClick, navbarRightSlide }) => {
  const circleClasses = `${currentSlide <= 2 || currentSlide === 7 ? "hidden" : "text-gray-600 font-bold text-6xl md:text-7xl xl:text-8xl hover:underline cursor-pointer"}`;

  const handleClick = (slideNumber) => {
    handleCircleClick(slideNumber);
    console.log(slideNumber);
  };
  console.log(currentSlide);
  console.log(navbarRightSlide);

  return (
    <nav className="bg-transparent p-3 fixed top-0  md:top-80 md:bottom-0 md:left-[70px] xl:p-[60px] m-44 md:m-auto z-[5]">
      <ul className="flex flex-row justify-center gap-4 items-center md:block  md:items-start md:flex-col ">
        <li>
          <div className={`${currentSlide === 4 ? `${circleClasses} text-white transition-all duration-500` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(4)}>
            Web
          </div>
        </li>
        <li>
          <div className={`${currentSlide === 5 ? `${circleClasses} text-white transition-all duration-500` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(5)}>
            Mobile
          </div>
        </li>
        <li>
          <div className={`${currentSlide === 6 ? `${circleClasses} text-white transition-all duration-500` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(6)}>
            AI
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SubMenu;
