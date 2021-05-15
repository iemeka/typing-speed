import React, { useContext, useEffect, useState } from "react";
import { utilityContext } from "./utilities/utilityContext";
import text from "./resources/content";
import "./WordPerMinute.css";

export default function WordPerMinute() {
  const { pressedKeys } = useContext(utilityContext);
  const [startTime, setStartTime] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [numOfTypedWords, setNumOfTypedWords] = useState(0);
  const currentIndex = pressedKeys.length - 1;

  useEffect(() => {
    if (currentIndex > -1 && currentIndex < text.length) {
      const time = new Date();
      const currentTime = time.getMinutes() + time.getSeconds() / 60;
      if (currentIndex === 0) {
        setStartTime((time.getMinutes() + time.getSeconds() / 60) - 0.2);
      }

      if (currentIndex === text.length - 1 || text[currentIndex + 1] === " ") {
        setNumOfTypedWords((typedWords) => typedWords + 1);
      }

      setTimeSpent(currentTime - (startTime != null ? startTime : currentTime));
    }
  }, [currentIndex, setTimeSpent, startTime, pressedKeys]);

  return (
    <div className="wordpermin-wrapper">
      <p>typed words : {numOfTypedWords}</p>
      <p>time spent : {timeSpent.toFixed(2)}</p>
      <p>words per minutes : {(numOfTypedWords / timeSpent || 0).toFixed(0)}</p>
    </div>
  );
}
