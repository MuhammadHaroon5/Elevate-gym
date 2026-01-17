import React from "react";

function About() {
  return (
    <div className="container d-flex justify-content-center align-items-center py-4 marginT aboutC">
      <div className="aboutItem1">
        <img className="aboutImage" src="./images/AboutUs.jpg" alt="" />
      </div>
      <div className="aboutItem">
        <h2 className="hfont text-white my-3 my-xl-4 smallFont">
          Why <span className="mainColor">Choose</span> Us?
        </h2>
        <p className="tfont text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          adipisci non neque unde iste, quisquam, reprehenderit distinctio
          labore perferendis porro molestias pariatur.
          <span className="d-block my-2 my-xl-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            quis.
          </span>
          <span className="d-block my-2 my-xl-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eaque pariatur ut eos modi aliquid nulla qui possimus consectetur.
            Repellat!
          </span>
        </p>
        <button className="myBtn Btn my-3 my-xl-4">Join Us</button>
      </div>
    </div>
  );
}

export default About;
