import React from "react";
import { Link } from "react-router-dom";
import { Ui } from "../components/Ui";
const img = require("../assets/sign_up.png");

export const Register = () => {
  return (
    <div className="perent flex items-center justify-center w-screen h-screen bg-gray-700">
      <div className="mockup child md:rounded-lg bg-slate-50">
        <Ui />
        <div className="top">
          <div className="ellipse_top1"></div>
          <div className="ellipse_top2"></div>
        </div>
        <div className="container w-full h-full  flex flex-col justify-center items-center">
          <div className="w-80">
            <img src={img} alt="" className="z-10 relative -top-10" />
            <h1 className="text-2xl font-semibold text-center relative -top-28">
              Welcome To My App{" "}
            </h1>
          </div>
          <div className="h-60 w-80">
            <form className="relative -top-24">
              <div className="flex flex-col justify-center items-center gap-1">
                <input
                  type="text"
                  className="form-control w-72 h-14 rounded-full mb-3 text-sky-500"
                  placeholder="Name"
                  name="name"
                />
                <input
                  type="text"
                  className="form-control w-72 h-14 rounded-full mb-3 text-sky-500"
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
                  <p>have an account?</p>
                  <Link to="/register" className="text-blue-500">
                    Sign In here!
                  </Link>
                </div>
                <button type="submit" className="w-72 h-14 my_button">
                  <span className="my_button_text">Sign Up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom">
          <div className="ellipse_bottom1"></div>
          <div className="ellipse_bottom2"></div>
        </div>
      </div>
    </div>
  );
};
