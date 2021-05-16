import React, { useCallback, useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import text from "./resources/content";
import "./Accuracy.css";

export default function Accuracy() {
  const { pressedKeys } = useContext(utilityContext);

  const calculateAccuracy = useCallback(() => {
    let lettersPassed = 0;
    pressedKeys.forEach((key, index) => {
      if (index < text.length && key === text[index]) {
        lettersPassed += 1;
      }
    });
    return Math.round((lettersPassed / pressedKeys.length) * 100);
  }, [pressedKeys]);

  return (
    <div className="accuracy-wrapper">
      <span id="number">
        {pressedKeys.length > 0 ? calculateAccuracy() : 0}
        <span>%</span>
      </span>
      <span id="text">Accuracy</span>
    </div>
  );
}
