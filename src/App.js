import "./assets/css/App.css";
import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import freeCodeCampLogo from "./assets/img/freecodecamp-logo.png";

function App() {

  const [clickNumber, setClickNumber] = useState(0);

  const handleClick = () => {
    setClickNumber(clickNumber + 1);
  };

  const resetClick = () => {
    setClickNumber(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img 
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp" />
      </div>
      <div className="counter-container">
        <Counter clickNumber={clickNumber} />
        <div className="buttons-container">
          <Button text="Click" isClickButton={true} handleClick={handleClick} />
          <Button text="Reset" isClickButton={false} handleClick={resetClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
