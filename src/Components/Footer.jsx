import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-900">
      <div className="flex items-center justify-center pt-10">
        <div className="w-10 h-10 mx-5 overflow-hidden rounded-full flex justify-center items-center bg-slate-400 hover:scale-[1.02] cursor-pointer hover:shadow-green-600 shadow-md hover:-translate-y-2 duration-200 lg:w-14 lg:h-14">
          <img  src="./icons/footer (1).png" alt="" className="relative w-full bottom-1"/>
        </div>
        <div className="w-10 h-10 mx-5 overflow-hidden rounded-full flex justify-center items-center bg-slate-400 hover:scale-[1.02] cursor-pointer hover:shadow-green-600 shadow-md hover:-translate-y-2 duration-200 lg:w-14 lg:h-14">
          <img  src="./icons/footer (2).png" alt="" className="w-[70%]"/>
        </div>
        <div className="w-10 h-10 mx-5 overflow-hidden rounded-full flex justify-center items-center bg-slate-400 hover:scale-[1.02] cursor-pointer hover:shadow-green-600 shadow-md hover:-translate-y-2 duration-200 lg:w-14 lg:h-14">
          <img  src="./icons/footer (3).png" alt="" className="w-full"/>
        </div>
      </div>
      <div className="flex justify-center w-full font-sans text-white flex-col tracking-wide md:text-xl sm:flex-row sm:space-x-12 md:space-x-[30vw] pt-20 pb-5">
        <h3>Designed By ❤ with ☕</h3>
        <h3>Developer <a className="text-[#e4b9b9] underline underline-offset-2 cursor-pointer" href="https://haroon-webdev.vercel.app" target="_blank" rel="noreferrer">M.Haroon</a></h3>
      </div>
    </div>
  );
}

export default Footer;
