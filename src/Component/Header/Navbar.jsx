import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handelChange = () => {
    setShow(!show);
  };

  const nav = (
    <div className="md:flex hidden gap-4 text-xl ">
      <ul className="text-[#131313] hover:border-2 hover:text-[#23BE0A] p-2 hover:rounded-lg ">
        Home
      </ul>
      <ul className="text-[#131313] hover:border-2 hover:text-[#23BE0A] p-2 hover:rounded-lg ">
        Listed Books
      </ul>
      <ul className="text-[#131313] hover:border-2 hover:text-[#23BE0A] p-2 hover:rounded-lg ">
        Pages to Read
      </ul>
    </div>
  );
  return (
    <div className="bg-white relative h-24 p-6">
      <nav className="flex justify-between w-11/12 mx-auto">
        <VscThreeBars />
        {/* logo */}
        <h3 className="text-[#131313] font-bold text-2xl">Book Vibe</h3>
        {nav}

        <div className="md:hidden   bg-teal-200 p-3 w-46 gap-4 text-xl ">
          <ul className="text-[#131313] hover:border-2 hover:text-[#23BE0A] p-2 hover:rounded-lg ">
            Home
          </ul>
          <ul className="text-[#131313] hover:border-2 hover:text-[#23BE0A] p-2 hover:rounded-lg ">
            Listed Books
          </ul>
          <ul className="text-[#131313] hover:border-2 hover:text-[#23BE0A] p-2 hover:rounded-lg ">
            Pages to Read
          </ul>
        </div>
        <div className="flex">
          <button className="bg-[#23BE0A] p-2.5 font-semibold rounded-lg mr-2 cursor-pointer">
            sign in
          </button>
          <button className="bg-[#59C6D2] hidden md:block p-2.5 font-semibold rounded-lg mr-2 cursor-pointer">
            sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
