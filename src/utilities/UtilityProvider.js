import React, { useState } from "react";
import { utilityContext } from "./utilityContext";

function UtilityProvider({ children }) {
  const [activeKey, setActiveKey] = useState(new Set());
  const [currentPosition, setCurrentPosition] = useState(1);
  const [bagsOfKeys, setbagsOfKeys ] = useState({})
  const value = {
    activeKey,
    setActiveKey,
    currentPosition,
    setCurrentPosition,
    bagsOfKeys,
    setbagsOfKeys
  };
  return (
    <utilityContext.Provider value={value}>{children}</utilityContext.Provider>
  );
}

export default UtilityProvider;
