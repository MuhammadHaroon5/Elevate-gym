import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixnav" id="navbar">
      <div className="container bg-transparent navBar">
        <span className="navbar-brand text-white">
          <img className="logo" src="./icons/myLogo.png" alt="" />
          <span className="brandText">Elevate</span>
        </span>
        <button
          className="navbar-toggler togglerIcon mainBg"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-white"
                onClick={(event) => event.preventDefault}
                href="#Home"
              >
                <span className="navHover scroll1">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                onClick={(event) => event.preventDefault}
                href="#Services"
              >
                <span className="navHover scroll2">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                onClick={(event) => event.preventDefault}
                href="#About"
              >
                <span className="navHover scroll3">About Us</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                onClick={(event) => event.preventDefault}
                href="#Pricing"
              >
                <span className="navHover scroll4">Pricing</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                onClick={(event) => event.preventDefault}
                href="#Reviews"
              >
                <span className="navHover scroll5">Review</span>
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <span
              className="myBtn"
              onClick={(event) => event.preventDefault}
            >
              Join Us
            </span>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
