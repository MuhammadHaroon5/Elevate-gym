import React from "react";

function Reviews() {
  return (
    <div className="container py-4 text-center text-white marginT marginBsmall">
      <h2 className="hfont text-white my-4 smallFont">
        Client <span className="mainColor">Reviews</span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-4 item">
          <img className="clientPic" src="./images/clients (1).jpg" alt="" />
          <h5 className="hfont">David</h5>
          <p className="tfont clientText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur minima enim quis fugiat facilis cum ratione ab
            quisquam? Voluptate obcaecat.
          </p>
        </div>
        <div className="col-12 col-lg-4 item">
          <img className="clientPic" src="./images/clients (2).jpg" alt="" />
          <h5 className="hfont">John</h5>
          <p className="tfont clientText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur minima enim quis fugiat facilis cum ratione ab
            quisquam? Voluptate obcaecat.
          </p>
        </div>
        <div className="col-12 col-lg-4 item">
          <img className="clientPic" src="./images/clients (3).jpg" alt="" />
          <h5 className="hfont">Thomas</h5>
          <p className="tfont clientText">
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
