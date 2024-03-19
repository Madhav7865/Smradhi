import React from "react";
import { Link } from "react-router-dom";
import venice from "./images/venice.jpg";
import switzerland from "./images/switzerland.jpg";

function place() {
  
  return (
    <div>
      <div>
        <header className="singer-heading">
          <h1>ZINDAGI NA MILEGA DOOBARA IN SPAIN....NAAH</h1>
        </header>
        <div className="container singer-container">
          <div className="column">
            <h2>SMRADHI</h2>
            <div className="singer-text mt-5">GELATO IN VENICE</div>
            <img className="singer-image" src={venice}></img>
          </div>
          <div className="singer-column">
            <h2>MADDY</h2>
            <div className="mt-5 singer-text ">SKY DIVING IN SWITZERLAND</div>
            <img className="singer-image" src={switzerland}></img>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/food">
          <button className="button-back mb-3">BACK</button>
        </Link>
        <Link to="/actor">
          <button className="button-next mb-3">NEXT</button>
        </Link>
      </div>
    </div>
  );
}

export default place;
