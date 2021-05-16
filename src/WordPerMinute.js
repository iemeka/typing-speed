import React, { useCallback, useContext, useRef } from "react";
import { utilityContext } from "./utilities/utilityContext";
import text from "./resources/content";
import "./WordPerMinute.css";

export default function WordPerMinute() {
  const { pressedKeys } = useContext(utilityContext);
  const startTime = useRef(null);

  if (pressedKeys.length > 0 && startTime.current === null) {
    startTime.current = Date.now();
  }

  const getWordCount = useCallback(() => {
    let words = 0;
    pressedKeys.forEach((key, index) => {
      if (text[index] === " " && key === " ") {
        words += 1;
      }
    });
    if (pressedKeys.length === text.length) {
      words += 1;
    }
    return words;
  }, [pressedKeys]);

  const computeWordPerMins = useCallback(() => {
    const now = Date.now();
    const wordCount = getWordCount();
    const timeDiff = now - startTime.current;
    const seconds = Math.round(timeDiff / 1000);
    const minutes = seconds >= 60 ? Math.round(seconds / 60) : 1;
    const wpm = wordCount / minutes;
    return Math.ceil(wpm);
  }, [getWordCount]);

  return (
    <div className="wordpermin-wrapper">
      <span id="number">{computeWordPerMins()}</span>
      <span id="text">Average Words Per Minutes</span>
    </div>
  );
}
