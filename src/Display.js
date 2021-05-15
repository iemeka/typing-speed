import React, { useCallback, useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import text from "./resources/content";
import "./Display.css";

export default function Display() {
  const { pressedKeys } = useContext(utilityContext);

  const getClass = useCallback(
    (index, letter) => {
      const isVisited = index < pressedKeys.length;
      const isTypo = pressedKeys[index] !== letter.toLowerCase(); 
      if (isVisited && isTypo)
        return letter === " " ? "character typo-space" : "character typo";

      if (isVisited) return "character visited";
      return "character";
    },
    [pressedKeys]
  );

  return (
    <div className="text-wrapper">
      {Array.from(text).map((letter, index) => (
        <span className={getClass(index, letter)} key={`${index}${letter}`}>
          {letter}
        </span>
      ))}
    </div>
  );
}
