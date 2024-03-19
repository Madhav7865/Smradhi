import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
    <div className="home-page">
      <div className="content">
        <div className="hi">HIII SMRADHI</div>
        <Link to="/third">
          <button className="button">Lessssss Go</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
