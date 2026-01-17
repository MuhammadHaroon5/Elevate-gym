import React from "react";

function Services() {
  return (
    <div className="container py-4 text-center text-white marginT marginBsmall">
      <h2 className="hfont text-white my-4 smallFont">
        Our <span className="mainColor">Services</span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-4 item">
          <img className="servicesPic" src="./images/services (1).jpg" alt="" />
          <h5>Physical Fitness</h5>
        </div>
        <div className="col-12 col-lg-4 item">
          <img className="servicesPic" src="./images/services (2).jpg" alt="" />
          <h5>Weightlifting</h5>
        </div>
        <div className="col-12 col-lg-4 item">
          <img className="servicesPic" src="./images/services (3).jpg" alt="" />
          <h5>Running</h5>
        </div>
        <div className="col-12 col-lg-4 item">
          <img className="servicesPic" src="./images/services (4).jpg" alt="" />
          <h5>Fat Lose</h5>
        </div>
        <div className="col-12 col-lg-4 item">
          <img className="servicesPic" src="./images/services (5).jpg" alt="" />
          <h5>Strength Training</h5>
        </div>
        <div className="col-12 col-lg-4 item">
          <img className="servicesPic" src="./images/services (6).jpg" alt="" />
          <h5>Weight Gain</h5>
        </div>
      </div>
    </div>
  );
}

export default Services;
