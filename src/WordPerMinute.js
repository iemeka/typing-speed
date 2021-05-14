import React, { useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./WordPerMinute.css";

export default function WordPerMinute() {
  const { curNumOfTypedWords, startTime } =
    useContext(utilityContext);
  const time = new Date();
  const currentTime = time.getMinutes() + time.getSeconds() / 60;

  const timeSpent = currentTime - (startTime != null ? startTime : currentTime);
  const wpm = curNumOfTypedWords / timeSpent || 0;
  return (
    <div className="wordpermin-wrapper">
      <p>typed words : {curNumOfTypedWords}</p>
      <p>time spent : {timeSpent.toFixed(2)}</p>
      <p>words per minutes : {wpm.toFixed(0)} </p>
    </div>
  );
}
