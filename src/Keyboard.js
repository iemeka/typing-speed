import React, { useEffect, useCallback, useContext } from "react";
import "./Keyboard.css";
import { utilityContext } from "./utilities/utilityContext";

export default function Keyboard() {
  const lettersArray = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const { activeKey, setActiveKey } = useContext(utilityContext);

  const handleKeyDown = useCallback(
    ({ code }) => {
      activeKey.add(code.toLowerCase());
      setActiveKey(new Set([...activeKey]));
    },
    [activeKey, setActiveKey]
  );

  const handleKeyUp = useCallback(
    ({ code }) => {
      activeKey.delete(code.toLowerCase());
      setActiveKey(new Set([...activeKey]));
    },
    [activeKey, setActiveKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className="keyboard-wrapper">
      {lettersArray.map((row, index) => (
        <div key={`row-${index + 1}`} className="row">
          {Array.from(row).map((letter) => (
            <div
              className={
                activeKey.has(`key${letter}`)
                  ? "letter active-letter"
                  : "letter"
              }
              key={letter}
            >
              <span>{letter}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="row">
        <div
          className={
            activeKey.has("space")
              ? "letter active-letter space-bar"
              : "letter space-bar"
          }
        >
          <span>space</span>
        </div>
      </div>
    </div>
  );
}
