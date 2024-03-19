import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import madhav_best from "./images/madhavbest.jpg"; // Importing the atif image file
import smradhi_best from "./images/smradhi(best).jpg"; // Importing the smradhi image file

function Look() {
  return (
    <div>
      <div>
        <header className="look-heading">
          <h1>Best Look</h1>
        </header>
        <div className="container look-container">
          <div className="column">
            <h2>SMRADHI</h2>
            <div className="look-text mt-5">So beautiful so elegant</div>
            <img className="look-image" src={smradhi_best} />
          </div>
          <div className="look-column">
            <h2>MADDY</h2>
            <div className="look-text mt-5">Just looking like a wow</div>
            <img className="look-image" src={madhav_best} />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/singer">
          <button className="button-back mb-3">BACK</button>
        </Link>
        <Link to="/food">
          <button className="button-next mb-3">NEXT</button>
        </Link>
      </div>
    </div>
  );
}

export default Look;
