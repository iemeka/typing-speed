import React from "react";
import "./App.css";
import Main from "./Main.js";
import UtilityProvider from "./utilities/UtilityProvider";

function App() {
  return (
    <div className="container">
      <UtilityProvider>
        <Main />
      </UtilityProvider>
      <div className="created-by">
        <a href="https://iemeka.github.io">created by Emeka</a>
      </div>
    </div>
  );
}

export default App;
