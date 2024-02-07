import React, { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [left, setLeft] = useState(false);

  return (
    <>
      <div className="bg-[#2699fb] p-4 ">
        <div className="max-w-[1240px]   flex justify-between items-center - mx-auto">
          <span className="text-3xl font-bold cursor-pointer">SGK </span>
          {left ? (
            <IoMenu
              onClick={() => setLeft(!left)}
              className="text-white text-2xl sm:hidden block"
            />
          ) : (
            <IoCloseSharp
              onClick={() => setLeft(!left)}
              className="text-white text-2xl sm:hidden block"
            />
          )}
          <div className="search rounded-[5px] ml-3   justify-center items-center bg-[#c8dff3] w-80 hidden sm:flex">
            <input
              type="text "
              placeholder="Search You Love One"
              className="rounded-[5px]  w-[455px] outline-none text-center text-xl"
            />
            <button className="cursor-pointer rounded-[5px]  text-xl">
              Search
            </button>
          </div>
          <div className="navbarRight  hidden md:flex">
            <ul className="flex text-white gap-8">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Company</li>
              <li className="cursor-pointer">Resoureces</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          {/* Responsive menu */}
          <div
            className={`navbarRight duration-300 sm:hidden w-full h-screen text-white fixed bg-black  top-[68px] 
          ${left ? "left-0" : "left-[-100%]"}`}
          >
            <ul className="">
              <li className="cursor-pointer p-3">Home</li>
              <li className="cursor-pointer  p-3">About</li>
              <li className="cursor-pointer  p-3">Company</li>
              <li className="cursor-pointer  p-3">Resoureces</li>
              <li className="cursor-pointer  p-3">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
