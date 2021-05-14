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
  setNumLetterPassed: () => { },
  lengthOfText: 0,
  setLengthOfText: () => {}
});
