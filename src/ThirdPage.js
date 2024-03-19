import React from "react";
import { Link } from "react-router-dom";

function ThirdPage() {
  return (
    <div>
      <div className="diaries">~DIARIES~</div>
      <div className="grid-container">
        <div className="grid-item item1">
          <span class="tooltiptext"> AMAZING Smardhi</span>
        </div>
        <div className="grid-item item2">
          {" "}
          <span class="tooltiptext"> CUTE Smardhi</span>
        </div>
        <div className="grid-item item3">
          {" "}
          <span class="tooltiptext"> SELF INDEPENDENT Smardhi</span>
        </div>
        <div className="grid-item item4">
          {" "}
          <span class="tooltiptext"> DRAMEBAAZ Smardhi</span>
        </div>
        <div className="grid-item item5">
          {" "}
          <span class="tooltiptext"> PURE Smardhi</span>
        </div>
        <div className="grid-item item6">
          {" "}
          <span class="tooltiptext">EXPRESSION QUEEN Smardhi</span>
        </div>
        <div className="grid-item item7">
          {" "}
          <span class="tooltiptext">STRONG Smardhi</span>
        </div>
        <div className="grid-item item8">
          {" "}
          <span class="tooltiptext">LAUGHING MACHINE Smardhi</span>
        </div>
        <div className="grid-item item9">
          {" "}
          <span class="tooltiptext">SINGER Smardhi</span>
        </div>
        <div className="grid-item item10">
          {" "}
          <span class="tooltiptext">Smardhi with the Cutest Smile </span>
        </div>
        <div className="grid-item item11">
          {" "}
          <span class="tooltiptext">Smardhi with DO NAIN SITAARE</span>
        </div>
        <div className="grid-item item12">
          {" "}
          <span class="tooltiptext">PRETTY Smardhi</span>
        </div>
        <div className="grid-item item13">
          {" "}
          <span class="tooltiptext">PATOLA Smardhi</span>
        </div>
        <div className="grid-item item14">
          {" "}
          <span class="tooltiptext">SWEET Smardhi</span>
        </div>
        {/* Add more grid items as needed */}
      </div>
      <div>
        <Link to="/">
          <button className="button-back mb-3">BACK</button>
        </Link>
        <Link to="/singer">
          <button className="button-next mb-3">NEXT</button>
        </Link>
      </div>
    </div>
  );
}

export default ThirdPage;
