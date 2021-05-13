import "./App.css";
import Main from "./Main.js";
import UtilityProvider from './utilities/UtilityProvider'

function App() {
  return (
    <div className="container">
      <UtilityProvider>
        <Main />
      </UtilityProvider>
    </div>
  );
}

export default App;
