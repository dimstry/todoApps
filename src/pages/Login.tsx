import React from "react";
import { Link } from "react-router-dom";
import { Ui } from "../components/Ui";
const img = require("../assets/welcome.png");

export const Login = () => {
  return (
    <div className="perent flex items-center justify-center w-screen h-screen bg-gray-700">
      <div className="mockup child md:rounded-lg bg-slate-50">
        <Ui />
        <div className="top top_login">
          <div className="ellipse_top1"></div>
          <div className="ellipse_top2"></div>
        </div>
        <div className="container flex flex-col justify-center items-center w-full h-full">
          <img src={img} alt="" className="z-10 w-80 relative -top-6" />
          <div className="h-60 w-80">
            <form className="relative -top-10">
              <div className="flex flex-col justify-center items-center gap-1">
                <input
                  type="text"
                  className="form-control w-72 h-14 rounded-full mb-5 text-sky-500"
                  placeholder="username"
                  name="username"
                />
                <input
                  type="password"
                  className="form-control w-72 h-14 rounded-full text-sky-500"
                  placeholder="password"
                  name="password"
                />
                <div className="w-80 flex flex-col text-center mb-3">
                  <p>Don't have an account?</p>
                  <Link to="/register" className="text-blue-500">
                    Sign Up here!
                  </Link>
                </div>
                <button type="submit" className="w-72 h-14 my_button">
                  <span className="my_button_text">Sign In</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom bottom_login">
          <div className="ellipse_bottom1"></div>
          <div className="ellipse_bottom2"></div>
        </div>
      </div>
    </div>
  );
};
