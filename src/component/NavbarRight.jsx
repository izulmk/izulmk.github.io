import React from "react";

const NavbarRight = ({ currentSlide, handleCircleClick, navbarRightSlide }) => {
  const circleClasses = `md:w-5 md:h-5 rounded-full mt-10 ${
    currentSlide === 2 || currentSlide === 3 || currentSlide === 7
      ? "bg-slate-900 cursor-pointer"
      : currentSlide === 1
      ? "bg-slate-200 cursor-pointer transition-all duration-500  hover:scale-150"
      : currentSlide === 4 || currentSlide === 5 || currentSlide === 6
      ? "bg-slate-900 cursor-pointer"
      : "bg-slate-200 transition-all duration-500 hover:scale-150 cursor-pointer"
  }`;

  const handleClick = (slideNumber) => {
    handleCircleClick(slideNumber);
    console.log(slideNumber);
  };
  console.log(currentSlide);
  console.log(navbarRightSlide);

  return (
    <nav className="bg-transparent p-4 fixed inset-y-0 right-0 flex flex-col items-center justify-center m-4 z-10">
      <ul className="flex flex-col space-y-4">
        <li>
          <div className={`transition-opacity duration-500 ${currentSlide === 1 ? `${circleClasses} bg-slate-900 opacity-100` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(1)}></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 2 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(2)}
          ></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 3 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(3)}
          ></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 7 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(7)}
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarRight;
