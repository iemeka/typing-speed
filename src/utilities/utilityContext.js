import React from "react";

export const utilityContext = React.createContext({
  activeKey: new Set(),
  setActiveKey: () => {},
  pressedKeys: [],
  setPressedKeys: () => { },
  toggleSound: true,
  setToggleSound: () => {}
  
});

