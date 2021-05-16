import React, { useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./SoundSwitch.css";

export default function SoundSwitch() {
  const { toggleSound, setToggleSound } = useContext(utilityContext);
  const onClick = (e) => {
    let content = e.target.textContent;
    if (content.length > 0) {
      if (content === "ON") {
        content = true;
      } else if (content === "OFF") {
        content = false;
      }
      setToggleSound(content);
    }
  };
  const getClass = (toggle) => {
    if (toggle) {
      return " active-btn sound-btn";
    } else {
      return "sound-btn";
    }
  };

  return (
    <div className="sound-switch" onClick={onClick}>
      <label className="btn-label">Sound : </label>
      <button htmlFor="on" className={getClass(toggleSound)}>
        ON
      </button>
      <button htmlFor="off" className={getClass(!toggleSound)}>
        OFF
      </button>
    </div>
  );
}
