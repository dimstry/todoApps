import React from "react";
import { Ui } from "../components/Ui";
const profile = require("../assets/user_img.png");
const add = require("../assets/add_todos.png");

export const Home = () => {
  // fake json
  const json = [
    {
      checked: "check",
      time: "10:00",
      todos: "Go to the gym",
    },
    {
      checked: "uncheck",
      time: "13:00",
      todos: "Coding Time",
    },
    {
      checked: "uncheck",
      time: "14:00",
      todos: "UI / UX Time",
    },
    {
      checked: "uncheck",
      time: "15:00",
      todos: "Netflix time",
    },
  ];

  return (
    <div className="perent flex items-center justify-center w-screen h-screen bg-gray-700">
      <div className="mockup child md:rounded-lg bg-slate-50">
        <Ui />
        <div className="w-full h-full  flex flex-col justify-center items-center">
          <div className="bubble_top">
            <div className="user_profile z-10 bg-slate-400">
              <img
                src={profile}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="bubble_bottom">
            <h2 className="user_name">Dimas Triana</h2>
          </div>
          <div className="card_list">
            <h1 className="list_date">5 Agustust 2022</h1>
            <div className="list list_scroll container">
              {json.map((item, i) => {
                return (
                  <div className="list_item" key={i}>
                    <div className={item.checked}></div>
                    <div className="list_content">
                      <div className="list_text">
                        <p className="time">{item.time}</p>
                        <p className="todo">{item.todos}</p>
                      </div>
                      <div className="list_img">
                        <img
                          src={profile}
                          alt=""
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* footer fix bottom */}
          <div className="footer">
            <div className="container footer_content">
              {/* <div className="footer_completed">
                <span>
                  Complated
                  <p>1</p>
                </span>
              </div> */}

              <span className="footer_add">
                <img src={add} alt="" className="w-10 h-10" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
