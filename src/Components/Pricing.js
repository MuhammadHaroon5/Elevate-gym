import React from "react";

function Pricing() {
  return (
    <div className="container py-4 text-center text-white marginT marginBsmall">
      <h2 className="hfont text-white my-4 smallFont">
        Our <span className="mainColor">Plans</span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-4 item text-start">
          <h5 className="pricingH hfont">BASIC</h5>
          <h4 className="mainColor pricingSubH hfont">$ 100/Month</h4>
          <ul className="text-start">
            <li className="tFont pricingSubTxt">Lorem, ipsum dolor</li>
            <li className="tFont pricingSubTxt">Lorem ipsum dolor sit</li>
          </ul>
          <button className="pricingBtn">
            Chose Plan <span className="mainColor">→</span>
          </button>
        </div>
        <div className="col-12 col-lg-4 item text-start">
          <h5 className="pricingH hfont">PRO</h5>
          <h4 className="mainColor pricingSubH hfont">$ 200/Month</h4>
          <ul className="text-start">
            <li className="tFont pricingSubTxt">Lorem, ipsum dolor</li>
            <li className="tFont pricingSubTxt">Lorem ipsum dolor sit</li>
            <li className="tFont pricingSubTxt">
              Amet consectetur adipisicing
            </li>
            <li className="tFont pricingSubTxt">Elit. Distinctio, inventore</li>
          </ul>
          <button className="pricingBtn">
            Chose Plan <span className="mainColor">→</span>
          </button>
        </div>
        <div className="col-12 col-lg-4 item text-start">
          <h5 className="pricingH hfont">PREMIUM</h5>
          <h4 className="mainColor pricingSubH hfont">$ 500/Month</h4>
          <ul className="text-start">
            <li className="tFont pricingSubTxt">Lorem, ipsum dolor</li>
            <li className="tFont pricingSubTxt">Lorem ipsum dolor sit</li>
            <li className="tFont pricingSubTxt">
              Amet consectetur adipisicing
            </li>
            <li className="tFont pricingSubTxt">Elit. Distinctio, inventore</li>
            <li className="tFont pricingSubTxt">
              Elanditiis corrupti quis iure
            </li>
            <li className="tFont pricingSubTxt">Lorem ipsum dolor sit</li>
          </ul>
          <button className="pricingBtn">
            Chose Plan <span className="mainColor">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
