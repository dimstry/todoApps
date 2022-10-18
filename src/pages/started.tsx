import React from "react";
import { Link } from "react-router-dom";
import { Ui } from "../components/Ui";
const img = require("../assets/started_img.png");

export const Started = () => {
  return (
    <div className="perent flex items-center justify-center w-screen h-screen bg-gray-700">
      <div className="mockup child md:rounded-lg bg-slate-50">
        <Ui />
        <div className="top">
          <div className="ellipse_top1"></div>
          <div className="ellipse_top2"></div>
        </div>
        <div className="container flex justify-center items-center w-full h-full">
          {/* img */}
          <img src={img} className="img" alt="" />

          <Link to="/login" className="started_btn">
            <span className="started_text">get started</span>
          </Link>
        </div>
        <div className="bottom">
          <div className="ellipse_bottom1"></div>
          <div className="ellipse_bottom2"></div>
        </div>
      </div>
    </div>
  );
};
