import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";


function Home() {

  const [text] = useTypewriter({
    words:[
      "Transform your body, transform your life",
      "Revitalize your mind, revive your spirit.",
      "Strengthen your body, empower your soul.",
      "Elevate your habits, elevate your life.",
      "Nourish your body, nourish your dreams.",
      "Commit to change, embrace your potential."
    ],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40,
  })


  return (
    <div className="container d-flex justify-content-center align-items-center homeSec marginTsmall">
      <div className="d-flex flex-column py-4 zindex-2">
        <h1 className="hfont text-white my-2 bigFont">
          Build Your <span className="d-block">Dream Physique</span>
        </h1>
        <h4 className="writer-txt my-3">{text}<span className="mainColor"><Cursor /></span></h4>
        <p className="sub-txt my-2 tfont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab
          illum laborum voluptatem nemo! Ipsum placeat a nam repellendus iure.
        </p>
        <button className="myBtn Btn my-4">Join Us</button>
        <span className="backText d-none d-lg-block">FITNESS</span>
      </div>
      <div className="text-center zindex-2">
        <img className="homeLogo" src="./images/home.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
