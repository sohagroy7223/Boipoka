import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handelChange = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex  justify-between p-5 items-center border-b-2 border-[#d8d8d8c2]">
      {/* logo */}
      <span onClick={handelChange} className="flex relative items-center gap-3">
        {" "}
        <span className="md:hidden">
          {open ? <VscChromeClose size={25} /> : <GiHamburgerMenu size={25} />}
        </span>
        <h2 className="text-2xl hidden md:flex  font-bold">Book Vibe</h2>
        <ul
          className={`md:hidden absolute w-44 h-36 rounded-2xl  bg-emerald-600 ml-8 duration-800 p-2.5  ${open ? "top-2" : "-top-44"}`}
        >
          <Link to="/">
            <li className="mr-7 text-lg hover:bg-amber-500 p-1 hover:w-full font-semibold ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="mr-7 text-lg hover:bg-amber-500 p-1 hover:w-full font-semibold">
              About
            </li>
          </Link>
          <Link to="/Pages-to-Read">
            {" "}
            <li className="mr-7 text-lg hover:bg-amber-500 p-1 hover:w-full font-semibold">
              Pages to Read
            </li>
          </Link>
        </ul>
      </span>

      <ul className="hidden md:flex">
        <Link to="/">
          <li className="mr-7 text-lg font-semibold ">Home</li>
        </Link>
        <Link to="/about">
          <li className="mr-7 text-lg font-semibold">About</li>
        </Link>
        <Link to="/Pages-to-Read">
          <li className="mr-7 text-lg font-semibold">Pages to Read</li>
        </Link>
      </ul>
      <div className="flex md:block md:p-3">
        <button className="btn mr-3">sign in</button>
        <button className="btn mr-3">sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
