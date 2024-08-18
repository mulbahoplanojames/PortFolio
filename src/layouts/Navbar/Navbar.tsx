import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import Navlinks from "../../constant/Constant";

import logo from "/src/assets/logo.png";

const Navbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={` flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0 bg-gradient-to-r from-primary via-background to-background text-white`}
      >
        {/* Link to the home page */}
        <Link
          to="/"
          className={`text-2xl font-bold flex justify-center items-center gap-2 `}
        >
          <img
            src={logo}
            alt="logo"
            className="md:w-16 md:h-16 w-10 h-10 rounded-md"
          />
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <ul className="max-lg:hidden">
          {Navlinks.map((navlink) => (
            <li key={navlink.label} className={`inline-block px-8`}>
              <Link
                to={navlink.path}
                className={`font-montserrat text-base leading-normal `}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        {/*//! Contact Us button */}
        <div className="lg:gap-x-6 gap-x-4 flex justify-center items-center">
          <Link
            to="Download_Resume.pdf"
            className="py-2 lg:px-4 px-3 border-none  shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-sm lg:text-base rounded-3xl hover:opacity-50 bg-primary text-white"
          >
            Download Resume
          </Link>
          {/*//! Menu toggle button for smaller devices */}
          <TbMenu2
            className={`max-lg:block hidden text-3xl cursor-pointer `}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-primary fixed top-16 bottom-0 left-0 right-0 z-50">
            {/* Close button for the menu */}
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdOutlineCancelPresentation className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden bg-1 gap-y-7 z-40 flex flex-col items-center justify-center h-full">
              {/* Menu items for smaller devices */}
              {Navlinks.map((navlink) => (
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <a
                    href={navlink.path}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </a>
                </li>
              ))}
              <Link
                to="Download_Resume.pdf"
                className="py-2 lg:px-4 px-3 border-none  shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-sm lg:text-base rounded-3xl hover:opacity-50 bg-white text-primary"
              >
                Download Resume
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
