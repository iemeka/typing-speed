import React, { useContext, useEffect } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./Display.css";

export default function Display() {
  const text =
    "My sister, Paula, and her husband, Chris, had just finished tucking their young ones into bed one evening when they heard crying coming from the childrens room. Rushing in, they found Tommy crying hysterically. He had accidentally swallowed a coin and was sure he was going to die. No amount of talking could change his mind. Trying to calm him, Chris palmed a coin that he happened to have in his pocket and pretended to remove it from Tommys ear.  Tommy, naturally, was delighted. In a flash, he snatched it from his fathers hand, swallowed it and demanded cheerfully - Do it again, Dad";
  const {
    currentPosition,
    bagsOfKeys,
    numLetterPassed,
    setNumLetterPassed,
    numLetterFailed,
    setNumLetterFailed,
    setLengthOfText,
    curNumOfTypedWords,
    setCurNumOfTypedWords,
    setStartTime,
  } = useContext(utilityContext);

  useEffect(() => {
    if (currentPosition > 1 && currentPosition < text.length + 2) {
      // word per minutes
      if (text[currentPosition - 2].trim().length < 1 || currentPosition === text.length+1) {
        setCurNumOfTypedWords(curNumOfTypedWords + 1);
      }
      if (currentPosition === 2) { // start position
        setLengthOfText(text.length);
        const time = new Date();
        setStartTime(time.getMinutes() + time.getSeconds() / 60);
      }

      // accuracy
      if (
        text[currentPosition - 2].toLowerCase() ===
        bagsOfKeys[currentPosition - 1]
      ) {
        setNumLetterPassed(numLetterPassed + 1);
      } else {
        setNumLetterFailed(numLetterFailed + 1);
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
