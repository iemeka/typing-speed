import React, { useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./Display.css";

export default function Display() {
  const texts = "The noise is too much in the hall";
  const { currentPosition, bagsOfKeys } = useContext(utilityContext);
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
            color:
              position + 1 < currentPosition
                ? bagsOfKeys[position + 1] === letter.toLowerCase()
                  ? "#a0a0a7"
                  : "#d02d2a"
                : "#ffffff",
            borderBottom: letter.trim().length < 1 && (position+1 in bagsOfKeys && bagsOfKeys[position + 1] !== letter) ? "2px solid #d02d2a" : null
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
