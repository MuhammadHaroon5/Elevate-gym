import React from "react";

function Services() {
  return (
    <div className="flex flex-col items-center justify-center py-36" id="Services">
      <h2 className="py-4 pb-10 text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Our <span className="text-blue-600 xl:tracking-widest">Services</span>
      </h2>
      <div className="flex flex-wrap items-center w-full px-2 justify-evenly">
        <div className="flex flex-col items-center justify-center m-3 border border-blue-600 rounded shadow-md lg:w-1/4 hover:shadow-green-600 duration-200 hover:scale-[1.02] cursor-pointer max-w-[20rem] lg:max-w-none hover:border-green-600">
          <img
            className="w-[70vw] lg:w-full h-[15rem]"
            src="./images/services (1).jpg"
            alt=""
          />
          <h5 className="py-1 font-thin tracking-widest text-center text-white">Physical Fitness</h5>
        </div>
        <div className="flex flex-col items-center justify-center m-3 border border-blue-600 rounded shadow-md lg:w-1/4 hover:shadow-green-600 duration-200 hover:scale-[1.02] cursor-pointer max-w-[20rem] lg:max-w-none hover:border-green-600">
          <img
            className="w-[70vw] lg:w-full h-[15rem]"
            src="./images/services (2).jpg"
            alt=""
          />
          <h5 className="py-1 font-thin tracking-widest text-center text-white">Weightlifting</h5>
        </div>
        <div className="flex flex-col items-center justify-center m-3 border border-blue-600 rounded shadow-md lg:w-1/4 hover:shadow-green-600 duration-200 hover:scale-[1.02] cursor-pointer max-w-[20rem] lg:max-w-none hover:border-green-600">
          <img
            className="w-[70vw] lg:w-full h-[15rem]"
            src="./images/services (3).jpg"
            alt=""
          />
          <h5 className="py-1 font-thin tracking-widest text-center text-white">Running</h5>
        </div>
        <div className="flex flex-col items-center justify-center m-3 border border-blue-600 rounded shadow-md lg:w-1/4 hover:shadow-green-600 duration-200 hover:scale-[1.02] cursor-pointer max-w-[20rem] lg:max-w-none hover:border-green-600">
          <img
            className="w-[70vw] lg:w-full h-[15rem]"
            src="./images/services (4).jpg"
            alt=""
          />
          <h5 className="py-1 font-thin tracking-widest text-center text-white">Fat Lose</h5>
        </div>
        <div className="flex flex-col items-center justify-center m-3 border border-blue-600 rounded shadow-md lg:w-1/4 hover:shadow-green-600 duration-200 hover:scale-[1.02] cursor-pointer max-w-[20rem] lg:max-w-none hover:border-green-600">
          <img
            className="w-[70vw] lg:w-full h-[15rem]"
            src="./images/services (5).jpg"
            alt=""
          />
          <h5 className="py-1 font-thin tracking-widest text-center text-white">Strength Training</h5>
        </div>
        <div className="flex flex-col items-center justify-center m-3 border border-blue-600 rounded shadow-md lg:w-1/4 hover:shadow-green-600 duration-200 hover:scale-[1.02] cursor-pointer max-w-[20rem] lg:max-w-none hover:border-green-600">
          <img
            className="w-[70vw] lg:w-full h-[15rem]"
            src="./images/services (6).jpg"
            alt=""
          />
          <h5 className="py-1 font-thin tracking-widest text-center text-white">Weight Gain</h5>
        </div>
      </div>
    </div>
  );
}

export default Services;
