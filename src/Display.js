import React, { useContext } from "react";
import {utilityContext} from './utilities/utilityContext'
import './Display.css'

export default function Display() {
  const texts = "The noise is too much in the hall";
  const {currentPosition} = useContext(utilityContext)

  return (
    <div className="text-wrapper">
      {Array.from(texts).map((letter, position) => (
        <span className={position+1 === currentPosition ? "display-text current" :"display-text"} data-keycode={`key${letter}`} key={`${position+1}${letter}`}>{letter}</span>
      ))}
    </div>
  );
}
