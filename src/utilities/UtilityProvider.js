import React, { useState } from "react";
import { utilityContext } from "./utilityContext";

function UtilityProvider({ children }) {
  const [activeKey, setActiveKey] = useState(new Set());
  const [pressedKeys, setPressedKeys] = useState([]);
  const [toggleSound, setToggleSound] = useState(true);

  const addPressedKey = (key) => {
    pressedKeys.push(key);
    setPressedKeys([...pressedKeys]);
  };

  const value = {
    activeKey,
    setActiveKey,
    pressedKeys,
    addPressedKey,
    setPressedKeys,
    toggleSound,
    setToggleSound
  };
  return (
    <utilityContext.Provider value={value}>{children}</utilityContext.Provider>
  );
}

export default UtilityProvider;
