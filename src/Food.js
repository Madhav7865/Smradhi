import React from "react";
import { Link } from "react-router-dom";
import sukhi from "./images/sukhipoori.jpg";
import pav from "./images/pavbhaji.jpg";
function Food() {
  return (
    <div>
      <div>
        <header className="singer-heading">
          <h1>Favourite Snack</h1>
        </header>
        <div className="container singer-container">
          <div className="column">
            <h2>SMRADHI</h2>
            <div className="singer-text mt-5">Sukhi Poori</div>
            <img className="singer-image" src={sukhi}></img>
          </div>
          <div className="singer-column">
            <h2>MADDY</h2>
            <div className="mt-5 singer-text ">Pav Bhaji</div>
            <img className="singer-image" src={pav}></img>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/best_look">
          <button className="button-back mb-3">BACK</button>
        </Link>
        <Link to="/place">
          <button className="button-next mb-3">NEXT</button>
        </Link>
      </div>
    </div>
  );
}

export default Food;
