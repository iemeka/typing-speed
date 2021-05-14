import React, { useContext } from "react";
import { utilityContext } from "./utilities/utilityContext";
import './Accuracy.css'

export default function Accuracy() {
  const { numLetterPassed, numLetterFailed } = useContext(utilityContext);
  return (
    <div className="accuracy-wrapper">
      <p>Pass : {numLetterPassed}</p>
      <p>Fail : {numLetterFailed}</p>
    </div>
  )
}
