import React from "react";

export const utilityContext = React.createContext({
  activeKey: new Set(),
  setActiveKey: () => {},
  currentPosition: 1,
  setCurrentPosition: () => {},
  bagsOfKeys: {},
  setbagsOfKeys: () => {},
  numLetterFailed: 0,
  setNumLetterFailed: () => {},
  numLetterPassed: 0,
  setNumLetterPassed: () => {},
  lengthOfText: 1,
  setLengthOfText: () => {},
  curNumOfTypedWords: 0,
  setCurNumOfTypedWords: () => {},
  startTime: null,
  setStartTime: () => {},
});
