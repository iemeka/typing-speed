import React from "react";

export const utilityContext = React.createContext({
  activeKey: new Set(),
  setActiveKey: () => {},
  currentPosition: 1,
  setCurrentPosition: () => {},
  bagsOfKeys : {},
  setbagsOfKeys: () => {}
});
