import React from "react";

function Reviews() {
  return (
    <div className="flex flex-col items-center justify-center text-white py-52" id="Reviews">
      <h2 className="py-4 pb-10 text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Client{" "}
        <span className="text-blue-600 xl:tracking-widest">Reviews</span>
      </h2>
      <div className="flex flex-wrap items-center justify-start px-5 sm:justify-center ">
        <div className="font-sans w-full rounded-md flex flex-col justify-between items-start p-1 border border-blue-600 hover:scale-[1.02] mt-5 hover:shadow-green-600 shadow-md hover:border-green-600 sm:w-[45%] sm:mr-4 md:w-[30%] xl:max-w-[25rem] cursor-pointer duration-200">
          <div className="flex items-center justify-center">
            <img
              className="w-20 m-2 rounded-full"
              src="./images/clients (1).jpg"
              alt="Client Pic"
            />
            <h5 className="text-2xl font-bold tracking-widest text-blue-600">
              David
            </h5>
          </div>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur minima enim quis fugiat facilis cum ratione ab
            quisquam? Voluptate obcaecat.
          </p>
        </div>
        <div className="font-sans w-full rounded-md flex flex-col justify-between items-start p-1 border border-blue-600 hover:scale-[1.02] mt-5 hover:shadow-green-600 shadow-md hover:border-green-600 sm:w-[45%] md:w-[30%] xl:max-w-[25rem] cursor-pointer duration-200">
          <div className="flex items-center justify-center">
            <img
              className="w-20 m-2 rounded-full"
              src="./images/clients (2).jpg"
              alt="Client Pic"
            />
            <h5 className="text-2xl font-bold tracking-widest text-blue-600">
              John
            </h5>
          </div>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur minima enim quis fugiat facilis cum ratione ab
            quisquam? Voluptate obcaecat.
          </p>
        </div>
        <div className="font-sans w-full rounded-md flex flex-col justify-between items-start p-1 border border-blue-600 hover:scale-[1.02] mt-5 hover:shadow-green-600 shadow-md hover:border-green-600 sm:mx-[3%] lg:ml-4 md:w-[30%] xl:max-w-[25rem] cursor-pointer duration-200">
          <div className="flex items-center justify-center">
            <img
              className="w-20 m-2 rounded-full"
              src="./images/clients (3).jpg"
              alt="Client Pic"
            />
            <h5 className="text-2xl font-bold tracking-widest text-blue-600">
              Thomas
            </h5>
          </div>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur minima enim quis fugiat facilis cum ratione ab
            quisquam? Voluptate obcaecat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
