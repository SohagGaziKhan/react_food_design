import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center py-[100px]">
        <span className="text-xl md:text-3xl font-bold md:p-[24px]">
          Learn With Us
        </span>
        <h2 className="text-white text-3xl font-bold md:text-[60px] md:p-[24px]">
          Grow with us.
        </h2>
        <span className="text-[20px] md:text-[50px] md:p-[24px] text-white font-bold">
          Learn
          <Typed //this libarey name is react-typed {istall korbo :npm i react-typed --force}
            className="pl-3"
            strings={["Web Desiging", "Ethical Hacking", "Web Development"]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </span>
        <br />
        <button className="bg-black text-white p-3 rounded w-[200px] font-light">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
