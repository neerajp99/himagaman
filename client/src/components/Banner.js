import React from "react";
import {ReactComponent as RightArrow} from "../assets/arrow-right.svg"

const Banner = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span> Find more beauty and peace every time you return</span>
            </div>
            <div className="line">
              <span> back to the hills </span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/"> Contact us <RightArrow /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
