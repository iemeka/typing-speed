import React, { useEffect, useCallback, useContext } from "react";
import "./Keyboard.css";
import text from "./resources/content";
import { utilityContext } from "./utilities/utilityContext";
import kickSoundUrl from "./resources/kick.wav";

export default function Keyboard() {
  const lettersArray = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const { activeKey, addPressedKey, setActiveKey, pressedKeys } =
    useContext(utilityContext);
  const playSound = () => {
    const audio = new Audio(kickSoundUrl);
    audio.volume = 0.2;
    try {
      audio.play();
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = useCallback(
    ({ code, key }) => {
      playSound();
      if (pressedKeys.length < text.length) {
        addPressedKey(key.toLowerCase());
      }
      activeKey.add(code.toLowerCase());
      setActiveKey(new Set([...activeKey]));
    },
    [activeKey, setActiveKey, addPressedKey, pressedKeys]
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
