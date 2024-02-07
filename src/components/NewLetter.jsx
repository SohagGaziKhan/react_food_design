import React from "react";

const NewLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4 ">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className=" m-2">
          <span className="text-[20px] md:text-[40px] font-bold text-white">
            Want to learn latest I.T skills ?
          </span>
          <br />
          <span className="text-white">
            Sign up to newsletter and stay up to date
          </span>
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter Enail"
            className="  sm:w-full mb-2 mr-2 p-3  text-slate-600 rounded"
          />
          <button className="bg-black text-white p-3 rounded w-[200px] font-light">
            Submit
          </button>
          <br />
          <p className="text-white p-2 ">
            We care bout the protection of your data . Read our <br />
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
