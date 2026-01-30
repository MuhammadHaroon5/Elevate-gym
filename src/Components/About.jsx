import React from "react";

function About() {
  return (
    <div className="flex flex-col items-start justify-center px-5 py-32 lg:flex-row 2xl:px-20" id="AboutUs">
      <div className="w-full overflow-hidden border border-white rounded-md lg:w-1/2">
        <img
          className="sm:w-[80vw] mx-auto md:w-full"
          src="./images/AboutUs.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-between w-full text-white lg:w-1/2 md:ps-6 sm:px-11">
        <h2 className="py-4 pb-10 text-4xl font-bold md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Why <span className="text-blue-600 xl:tracking-widest">Choose</span>{" "}
          Us?
        </h2>
        <p className="space-y-3 text-justify sm:text-xl lg:text-base xl:text-xl 2xl:text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          adipisci non neque unde iste, quisquam, reprehenderit distinctio
          labore perferendis porro molestias pariatur.
          <span className="block pt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            quis.
          </span>
          <span className="block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eaque pariatur ut eos modi aliquid nulla qui possimus consectetur.
            Repellat!
          </span>
        </p>{" "}
        <button
          className="px-3 hover:tracking-[0.4rem] py-1 my-3 font-thin tracking-widest text-blue-100 duration-200 bg-blue-600 rounded shadow hover:bg-blue-500 2xl:text-2xl 2xl:px-4 2xl:py-2 md:mt-5 hover:shadow-green-400 lg:text-xl"
        >
          Join Us
        </button>
      </div>
    </div>
  );
}

export default About;
