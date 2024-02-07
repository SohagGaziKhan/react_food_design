import React from "react";

const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto  my-10  md:grid grid-cols-3">
      <div className=" col-span-1 md:w-[80%] text-center">
        <img
          className="inline"
          src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXRlZC0xMDIyMi5wbmc.png"
          alt=""
        />
      </div>
      <div className=" col-span-2 flex flex-col justify-center pl-4">
        <span className="text-[#00df9a] font-bold my-2">
          LEARN FORM EXPERTS
        </span>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quaerat
          non illo, officiis natus adipisci accusantium commodi beatae dicta
          voluptatem impedit ipsum fuga ipsa consectetur et nobis, quos modi
          praesentium laborum quae magnam! Totam dolores eum, a ab corrupti
          eius, exercitationem laudantium possimus quidem numquam pariatur
          voluptas alias aliquid dicta?
        </p>
        <button className="bg-black mt-3 text-white p-3 rounded w-[200px] font-light ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
