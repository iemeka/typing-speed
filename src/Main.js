import React from "react";
import Keyboard from "./Keyboard";
import Indicators from "./Indicators";
import Display from "./Display"
import "./Main.css";

export default function Main() {
  return (
    <div className="main-content">
      <div className="left">
        <Indicators />
      </div>
      <div className="center">
        <div className="top">
          <Display />
        </div>
        <div className="bottom">
          <Keyboard />
        </div>
      </div>
      <div className="right">are you right</div>
    </div>
  );
}
