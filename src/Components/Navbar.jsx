import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="fixed z-[999] top-0 w-full flex items-center h-[5rem] justify-between bg-black text-white">
      <a href="#Home" className="flex items-center justify-center px-10 overflow-hidden cursor-pointer w-fit lg:w-1/4">
        <img className="w-16" src="./icons/myLogo.png" alt="🤸‍♀️" />
        <span className="font-sans text-2xl font-thin tracking-wider ps-2 md:text-3xl xl:text-4xl">
          Ele
          <span className="text-blue-600 underline underline-offset-2">v</span>
          ate
        </span>
      </a>
      <div
        className={`${showNav ? "translate-y-14 md:translate-y-0" : "-translate-y-[100vw] md:translate-y-0"} ps-2 justify-start bg-black text-white md:bg-none w-full duration-200 transition-transform absolute md:relative md:flex-row top-0 flex flex-col md:space-x-3 lg:space-x-8 md:ms-5 `}
      >
        <a
          href="#Home"
          className="mt-1 tracking-wider duration-200 border-b-2 border-white/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:border-transparent md:text-lg lg:text-xl xl:text-2xl md:hover:underline"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Home
        </a>
        <a
          href="#Services"
          className="mt-1 tracking-wider duration-200 border-b-2 border-white/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:border-transparent md:text-lg lg:text-xl xl:text-2xl md:hover:underline"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Services
        </a>
        <a
          href="#AboutUs"
          className="mt-1 tracking-wider duration-200 border-b-2 border-white/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:border-transparent md:text-lg lg:text-xl xl:text-2xl md:hover:underline"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          About Us
        </a>
        <a
          href="#Pricing"
          className="mt-1 tracking-wider duration-200 border-b-2 border-white/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:border-transparent md:text-lg lg:text-xl xl:text-2xl md:hover:underline"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Pricing
        </a>
        <a
          href="#Reviews"
          className="mt-1 tracking-wider duration-200 border-b-2 border-white/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:border-transparent md:text-lg lg:text-xl xl:text-2xl md:hover:underline"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Reviews
        </a>
      </div>
      <div className="flex items-center justify-end px-3 space-x-3">
      <button
        href="#JoinUs"
        className="px-1 py-1 font-thin tracking-widest bg-blue-600 rounded w-[5rem] md:w-[6rem] lg:w-[8rem] lg:text-xl"
        onClick={(e) => {
          setShowNav(false);
        }}
      >
        Join Us
      </button>
      <div
        onClick={() => setShowNav((prev) => !prev)}
        className="h-8 p-1 m-1 border rounded cursor-pointer md:hidden border-white/10 hover:border-white bg-slate-600/30"
      >
        <div className="w-5 h-1 bg-white rounded"></div>
        <div className="w-5 h-1 mt-1 bg-white rounded"></div>
        <div className="w-5 h-1 mt-1 bg-white rounded"></div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
