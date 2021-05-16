import React from "react";
import Keyboard from "./Keyboard";
import Accuracy from "./Accuracy";
import Display from "./Display";
import WordPerMinute from "./WordPerMinute";
import SoundSwitch from "./SoundSwitch";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-content">
      <div className="left">
        <Accuracy />
        <WordPerMinute />
      </div>
      <div className="center">
        <div className="top">
          <Display />
        </div>
        <div className="bottom">
          <Keyboard />
        </div>
      </div>
      <div className="right">
        <SoundSwitch />
      </div>
    </div>
  );
}
