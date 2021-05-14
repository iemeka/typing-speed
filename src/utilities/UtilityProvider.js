import React, { useState } from "react";
import { utilityContext } from "./utilityContext";

function UtilityProvider({ children }) {
  const [activeKey, setActiveKey] = useState(new Set());
  const [currentPosition, setCurrentPosition] = useState(1);
  const [bagsOfKeys, setbagsOfKeys] = useState({});
  const [numLetterFailed, setNumLetterFailed] = useState(0);
  const [numLetterPassed, setNumLetterPassed] = useState(0);
  const [lengthOfText, setLengthOfText] = useState(0);
  const value = {
    activeKey,
    setActiveKey,
    currentPosition,
    setCurrentPosition,
    bagsOfKeys,
    setbagsOfKeys,
    numLetterFailed,
    setNumLetterFailed,
    numLetterPassed,
    setNumLetterPassed,
    lengthOfText,
    setLengthOfText,
  };
  return (
    <utilityContext.Provider value={value}>{children}</utilityContext.Provider>
  );
}

export default UtilityProvider;
