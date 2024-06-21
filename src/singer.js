import React from "react";
import atif from "./images/atif aslam.jpg";
import smradhi from "./images/smradhi.jpg";
import { Link } from "react-router-dom";

function singer() {
  return (
    <div>
      <div>
        <header className="singer-heading">
          <h1>Favourite Singer</h1>
        </header>
        <div className="container">
          <div className="col">
            <h2>SMRADHI</h2>
            <div className="singer-text">Atif Aslam</div>
            <img className="singer-image" src={atif}></img>
          </div>
          <div className="col">
            <h2>MADDY</h2>
            <div className="singer-text ">Smradhi</div>
            <img className="singer-image" src={smradhi}></img>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/third">
          <button className="button-back">BACK</button>
        </Link>
        <Link to="/best_look">
          <button className="button-next">NEXT</button>
        </Link>
      </div>
    </div>
  );
}

export default singer;
