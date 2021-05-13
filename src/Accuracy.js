import React, { useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import "./Accuracy.css";

export default function Accuracy() {
  const { numLetterPassed, numLetterFailed,lengthOfText } = useContext(utilityContext);
  return (
    <div className="accuracy-wrapper">
      <p>Pass : {numLetterPassed}</p>
      <p>Fail : {numLetterFailed}</p>
      <p>Accuracy: {(numLetterPassed / lengthOfText) * 100}%</p>
    </div>
  );
}
