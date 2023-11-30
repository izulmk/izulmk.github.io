import React from "react";
import Menu from "./Menu";

const Navbar = ({ isNavbarBlack, currentSlide }) => {
  console.log(currentSlide);

  const handleHomeClick = () => {
    // Lakukan scroll ke bagian dengan ID 'hero'
    const heroSection = document.getElementById("Home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    // Lakukan scroll ke bagian dengan ID 'hero'
    const contactSection = document.getElementById("Projects");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    // Lakukan scroll ke bagian dengan ID 'hero'
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`h-12 ${isNavbarBlack ? "text-white" : "bg-transparent"} md:p-8 flex items-center justify-between md:h-24 lg:px-20 xl:px-40 z-10 fixed w-full`}>
      <div className="hidden md:flex gap-4 flex-1 md:justify-end text-xl">
        <a className="cursor-pointer" onClick={handleHomeClick}>
          Home
        </a>
        <a className="cursor-pointer" onClick={handleProjectClick}>
          Projects
        </a>

        <a className="cursor-pointer" onClick={handleContactClick}>
          Contact
        </a>
      </div>
      {/* MOBILE MENU */}
      <div className=" px-4 pt-4 md:hidden flex items-center justify-center">
        <Menu currentSlide={currentSlide} />
      </div>
    </div>
  );
};

export default Navbar;
