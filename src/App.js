import "./assets/css/App.css";
import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import FreeCodeCampLogo from "./components/FreeCodeCampLogo";

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
      <FreeCodeCampLogo />
      <div className="container-counter">
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
