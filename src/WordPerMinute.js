import React, { useContext, useState } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./WordPerMinute.css";

export default function WordPerMinute() {
  const { curNumOfTypedWords, startTime,currentPosition ,lengthOfText,timeSpent, setTimeSpent} =
    useContext(utilityContext);
  const time = new Date();
  const currentTime = time.getMinutes() + time.getSeconds() / 60;

  if (currentPosition < lengthOfText + 2){ // stop calculating wpm and tp
    setTimeSpent(currentTime - (startTime != null ? startTime : currentTime))
  }
  const wpm = curNumOfTypedWords / timeSpent || 0;
  return (
    <div className="wordpermin-wrapper">
      <p>typed words : {curNumOfTypedWords}</p>
      <p>time spent : {timeSpent.toFixed(2)}</p>
      <p>words per minutes : {wpm.toFixed(0)}</p>
    </div>
  );
}
