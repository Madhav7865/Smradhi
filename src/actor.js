import React from "react";
import { Link } from "react-router-dom";
import ayush from "./images/ayush.jpg";
import shraddha from "./images/shraddha.jpg";

function actor() {
  return (
    <div>
      {" "}
      <div>
        <header className="singer-heading">
          <h1>Favourite Personality</h1>
        </header>
        <div className="container singer-container">
          <div className="column">
            <h2>SMRADHI</h2>
            <div className="singer-text mt-5">Ayushmann Khurrana</div>
            <img className="singer-image" src={ayush}></img>
          </div>
          <div className="singer-column">
            <h2>MADDY</h2>
            <div className="mt-5 singer-text ">Shraddha Kapoor</div>
            <img className="singer-image" src={shraddha}></img>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/place">
          <button className="button-back mb-3">BACK</button>
        </Link>
        <Link to="/final">
          <button className="button-next mb-3">NEXT</button>
        </Link>
      </div>
    </div>
  );
}

export default actor;
