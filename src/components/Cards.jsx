import React from "react";
import { GoPeople } from "react-icons/go";
const Cards = () => {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl h-[450px] py-4 hover:scale-105 duration-100  justify-center">
          <GoPeople className="text-7xl text-center ml-[38%] text-black my-3" />
          <span className="text-5xl text-black font-bold  text-center mb-[10px] p-5">
            Web Design
          </span>
          <br />
          <span className="text-3xl text-[red] font-bold  p-5 text-center ">
            Price: $99
          </span>
          <p className="text-gray font-thin text-center mt-[30px]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. amet.Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet.Lorem ipsum dolor
            sit amet. amet.Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            amet.Lorem ipsum dolor sit amet. amet.Lorem ipsum dolor sit amet
          </p>

          <button className="bg-black  text-center ml-[18%] mt-[40px] text-white p-3 cursor-pointer rounded-xl w-[200px] font-light ">
            Start Cources
          </button>
        </div>
        <div className="shadow-xl h-[450px] py-4 hover:scale-105 duration-100  justify-center">
          <GoPeople className="text-7xl text-center ml-[38%] text-black my-3" />
          <span className="text-5xl text-black font-bold  text-center mb-[10px] p-5">
            Web Design
          </span>
          <br />
          <span className="text-3xl text-[red] font-bold  p-5 text-center ">
            Price: $99
          </span>
          <p className="text-gray font-thin text-center mt-[30px]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. amet.Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet.Lorem ipsum dolor
            sit amet. amet.Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            amet.Lorem ipsum dolor sit amet. amet.Lorem ipsum dolor sit amet
          </p>

          <button className="bg-black  text-center ml-[18%] mt-[40px] text-white p-3 cursor-pointer rounded-xl w-[200px] font-light ">
            Start Cources
          </button>
        </div>
        <div className="shadow-xl h-[450px] py-4 hover:scale-105 duration-100  justify-center">
          <GoPeople className="text-7xl text-center ml-[38%] text-black my-3" />
          <span className="text-5xl text-black font-bold  text-center mb-[10px] p-5">
            Web Design
          </span>
          <br />
          <span className="text-3xl text-[red] font-bold  p-5 text-center ">
            Price: $99
          </span>
          <p className="text-gray font-thin text-center mt-[30px]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. amet.Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet.Lorem ipsum dolor
            sit amet. amet.Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            amet.Lorem ipsum dolor sit amet. amet.Lorem ipsum dolor sit amet
          </p>

          <button className="bg-black  text-center ml-[18%] mt-[40px] text-white p-3 cursor-pointer rounded-xl w-[200px] font-light ">
            Start Cources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
