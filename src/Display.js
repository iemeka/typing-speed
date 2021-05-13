import React, { useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./Display.css";

export default function Display() {
  const texts = "The noise is too much in the hall";
  const { currentPosition, bagsOfKeys } = useContext(utilityContext);
  console.log(currentPosition);
  return (
    <div className="text-wrapper">
      {Array.from(texts).map((letter, position) => (
        <span
          className={
            position + 1 === currentPosition
              ? "display-text current-letter"
              : "display-text"
          }
          data-keycode={`key${letter}`}
          key={`${position + 1}${letter}`}
          style={{
            'color':
              position + 1 < currentPosition
                ? bagsOfKeys[`${position + 1}${letter.toLowerCase()}`] ===
                  letter.toLowerCase()
                  ? "green"
                  : "red"
                : "white",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
