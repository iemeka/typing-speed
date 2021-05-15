import React, { useCallback, useContext, useEffect, useState } from "react";
import { utilityContext } from "./utilities/utilityContext";
import text from "./resources/content";
import "./Accuracy.css";

export default function Accuracy() {
  const { pressedKeys } = useContext(utilityContext);
  const [numLetterFailed, setNumLetterFailed] = useState(0);
  const [numLetterPassed, setNumLetterPassed] = useState(0);

  const currentIndex = useCallback(
    () => pressedKeys.length - 1,
    [pressedKeys]
  )();

  useEffect(() => {
    if (currentIndex > -1 && currentIndex < text.length) {
      if (pressedKeys[currentIndex] === text[currentIndex]) {
        setNumLetterPassed((passed) => passed + 1);
      } else if (pressedKeys[currentIndex] !== text[currentIndex]) {
        setNumLetterFailed((failed) => failed + 1);
      }
    }
  }, [pressedKeys, currentIndex]);

  return (
    <div className="accuracy-wrapper">
      <p>Pass : {numLetterPassed} </p>
      <p>Fail : {numLetterFailed}</p>
      <p>
        Accuracy: {pressedKeys.length > 0 ? (((numLetterPassed / pressedKeys.length) * 100)).toFixed(2) : 0}%
      </p>
    </div>
  );
}
