import React from "react";
import "./Keyboard.css";

export default function Keyboard() {
  return (
    <div className="keyboard-wrapper">
      <div className="display-words"></div>
      <div className="letters">
        <div className="row-1">
          <div className="letter"><span>q</span></div>
          <div className="letter"><span>w</span></div>
          <div className="letter"><span>e</span></div>
          <div className="letter"><span>r</span></div>
          <div className="letter"><span>t</span></div>
          <div className="letter"><span>y</span></div>
          <div className="letter"><span>u</span></div>
          <div className="letter"><span>i</span></div>
          <div className="letter"><span>o</span></div>
          <div className="letter"><span>p</span></div>
        </div>
        <div className="row-2">
          <div className="letter"><span>a</span></div>
          <div className="letter"><span>s</span></div>
          <div className="letter"><span>d</span></div>
          <div className="letter"><span>f</span></div>
          <div className="letter"><span>g</span></div>
          <div className="letter"><span>h</span></div>
          <div className="letter"><span>j</span></div>
          <div className="letter"><span>k</span></div>
          <div className="letter"><span>l</span></div>
        </div>
        <div className="row-3">
          <div className="letter"><span>z</span></div>
          <div className="letter"><span>x</span></div>
          <div className="letter"><span>c</span></div>
          <div className="letter"><span>v</span></div>
          <div className="letter"><span>b</span></div>
          <div className="letter"><span>n</span></div>
          <div className="letter"><span>m</span></div>
        </div>
        
      </div>
    </div>
  );
}
