import React, { useContext, useEffect } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./Display.css";

export default function Display() {
  const text = "This land is not for sale";
  const {
    currentPosition,
    bagsOfKeys,
    numLetterPassed,
    setNumLetterPassed,
    numLetterFailed,
    setNumLetterFailed,
    setLengthOfText
  } = useContext(utilityContext);

  useEffect(() => {
    setLengthOfText(text.length)
    if (currentPosition > 1 && currentPosition < text.length + 2) {
      if (text[currentPosition - 2].toLowerCase() === bagsOfKeys[currentPosition - 1]){
         setNumLetterPassed(numLetterPassed + 1)
      } else {
        setNumLetterFailed(numLetterFailed+1)
       }
    }
  }, [currentPosition]); // eslint-disable-line

  return (
    <div className="text-wrapper">
      {Array.from(text).map((letter, position) => (
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
            borderBottom:
              letter.trim().length < 1 &&
              position + 1 in bagsOfKeys &&
              bagsOfKeys[position + 1] !== letter
                ? "2px solid #d02d2a"
                : null,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
