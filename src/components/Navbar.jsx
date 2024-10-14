import React, { useState } from 'react';
import pp from "../../public/PP.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-scroll";  // Import the Link component from react-scroll

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
      to: "Home",  // The target section ID
    },
    {
      id: 2,
      text: "About",
      to: "About", // The target section ID
    },
    {
      id: 3,
      text: "Portfolio",
      to: "Portfolio", // The target section ID
    },
    {
      id: 4,
      text: "Experience",
      to: "Experience", // The target section ID
    },
    {
      id: 5,
      text: "Contact",
      to: "Contact", // The target section ID
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-30 h-16 shadow-md fixed top-0 left-0 right-0">
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-1 relative' style={{ top: "-10px", left: "-10px" }}>
            <img src={pp} className="h-12 w-12 rounded-full" alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>
              Jayesh Mehra
              <p className='text-sm'>Full Stack Developer</p>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div>
            <ul className='hidden md:flex space-x-8'>
              {navItems.map(({ id, text, to }) => (
                <li key={id}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    className='hover:scale-105 duration-200 cursor-pointer'
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <GiHamburgerMenu size={24} /> : <IoCloseCircleOutline size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div>
            <ul className='md:hidden flex flex-col items-center justify-center space-y-3 text-xl'>
              {navItems.map(({ id, text, to }) => (
                <li key={id}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                    onClick={() => setMenu(false)}  // Close the menu after clicking
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
