import React from "react";
import Keyboard from "./Keyboard";
import Indicators from "./Indicators";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-content">
      <div className="left">
        <Indicators />
      </div>
      <div className="center">
        <div className="top">are you there</div>
        <div className="bottom"><Keyboard /></div>
      </div>
      <div className="right">are you right</div>
    </div>
  );
}
