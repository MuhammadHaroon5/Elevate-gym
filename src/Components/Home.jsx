import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Transform your body, transform your life",
      "Revitalize your mind, revive your spirit.",
      "Strengthen your body, empower your soul.",
      "Elevate your habits, elevate your life.",
      "Nourish your body, nourish your dreams.",
      "Commit to change, embrace your potential.",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="relative flex flex-col w-full px-1 pb-10 mt-32 lg:pt-40 2xl:px-20 md:flex-row" id="Home">
      <div className="z-10 flex flex-col items-start justify-center w-full md:w-1/2">
        <h1 className="font-sans text-4xl font-bold text-blue-300 lg:text-7xl sm:text-5xl md:text-6xl text-start">
          Build Your <span className="block">Dream Physique</span>
        </h1>
        <h4 className="mt-5 text-blue-300/70 md:text-xl xl:text-2xl xl:pt-10 2xl:text-3xl">
          {text}
          <span className="mainColor">
            <Cursor />
          </span>
        </h4>
        <p className="pr-2 my-2 font-sans tracking-wide text-justify text-white md:text-xl lg:text-2xl xl:text-3xl md:pt-5 xl:pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab
          illum laborum voluptatem nemo! Ipsum placeat a nam repellendus iure.
        </p>
        <button
          className="px-3 hover:tracking-[0.4rem] py-1 my-3 font-thin tracking-widest text-blue-100 duration-200 bg-blue-600 rounded shadow hover:bg-blue-500 2xl:text-2xl 2xl:px-4 2xl:py-2 md:mt-5 hover:shadow-green-400 lg:text-xl"
        >
          Join Us
        </button>
      </div>
      <div className="z-10 w-full md:w-1/2">
        <img className="w-full max-w-[20rem] mx-auto md:max-w-[40rem] 2xl:h-[40rem]" src="./images/home.png" alt="" />
      </div>
        <span className="absolute top-0 bottom-0 hidden w-full h-full font-bold tracking-widest text-center lg:content-center text-blue-600/30 md:inline-block text-9xl -z-10 lg:text-[10rem]">FITNESS</span>
    </div>
  );
}

export default Home;
