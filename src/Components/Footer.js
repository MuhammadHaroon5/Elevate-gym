import React from "react";

function Footer() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center">
      <div className="d-flex logoscontainer">
        <div className="image-wrapper">
          <img src="./icons/footer (1).png" alt="" className="flogo insta" />
        </div>
        <div className="image-wrapper">
          <img src="./icons/footer (2).png" alt="" className="flogo fb" />
        </div>
        <div className="image-wrapper">
          <img src="./icons/footer (3).png" alt="" className="flogo" />
        </div>
      </div>
      <p className="hfont footerFont">
        <span className="copy">&copy;</span> Created By M.Haroon | All Rights
        Reserved
      </p>
    </div>
  );
}

export default Footer;
