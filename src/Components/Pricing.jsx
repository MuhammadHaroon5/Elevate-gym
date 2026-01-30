import React from "react";

function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-white" id="Pricing">
      <h2 className="py-4 pb-10 text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Our <span className="text-blue-600 xl:tracking-widest">Plans</span>
      </h2>
      <div className="flex flex-wrap items-start w-full justify-evenly">
        <div className="px-2 border border-blue-600 w-full sm:w-[15rem] h-[21rem] rounded shadow-md duration-200 hover:border-green-600 flex flex-col space-y-7 text-start hover:shadow-green-600 cursor-pointer hover:scale-[1.02]">
          <h5 className="text-2xl font-bold tracking-widest">BASIC</h5>
          <h4 className="text-3xl text-blue-600 font-tin">$ 100/Month</h4>
          <ul className="font-sans list-disc ps-5">
            <li>Lorem, ipsum dolor</li>
            <li>Lorem ipsum dolor sit</li>
          </ul>
          <button className="border-b border-green-500 pricingBtn w-fit">
            Chose Plan <span className="text-green-600">→</span>
          </button>
        </div>
        <div className="px-2 border border-blue-600 w-full sm:w-[15rem] h-[21rem] mt-5 sm:mt-0 rounded shadow-md duration-200 hover:border-green-600 flex flex-col space-y-7 text-start hover:shadow-green-600 cursor-pointer hover:scale-[1.02]">
          <h5 className="text-2xl font-bold tracking-widest">PRO</h5>
          <h4 className="text-3xl text-blue-600 font-tin">$ 200/Month</h4>
          <ul className="font-sans list-disc ps-5">
            <li>Lorem, ipsum dolor</li>
            <li>Lorem ipsum dolor sit</li>
            <li>
              Amet consectetur adipisicing
            </li>
            <li>Elit. Distinctio, inventore</li>
          </ul>
          <button className="border-b border-green-500 pricingBtn w-fit">
            Chose Plan <span className="text-green-600">→</span>
          </button>
        </div>
        <div className="px-2 border border-blue-600 w-full sm:w-[15rem] h-[21rem] mt-5 md:mt-0 rounded shadow-md duration-200 hover:border-green-600 flex flex-col space-y-7 text-start hover:shadow-green-600 cursor-pointer hover:scale-[1.02]">
          <h5 className="text-2xl font-bold tracking-widest">PREMIUM</h5>
          <h4 className="text-3xl text-blue-600 font-tin">$ 500/Month</h4>
          <ul className="font-sans list-disc ps-5">
            <li>Lorem, ipsum dolor</li>
            <li>Lorem ipsum dolor sit</li>
            <li>
              Amet consectetur adipisicing
            </li>
            <li>Elit. Distinctio, inventore</li>
            <li>Lorem ipsum dolor sit</li>
          </ul>
          <button className="border-b border-green-500 pricingBtn w-fit">
            Chose Plan <span className="text-green-600">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
