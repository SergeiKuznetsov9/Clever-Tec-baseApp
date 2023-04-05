import { useState } from "react";
import { operationTypes } from "./operationTypes";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = (counter) => {
    if (counter < 10) setCounter((counter) => counter + 1);
  };

  const decrement = (counter) => {
    if (counter > -10) setCounter((counter) => counter - 1);
  };

  const handleClick = (operationType) => {
    switch (operationType) {
      case operationTypes.increment:
        increment(counter);
        break;

      case operationTypes.decrement:
        decrement(counter);
        break;

      case operationTypes.random:
        setCounter(+(Math.random() * (10 - -10) + -10).toFixed(0));
        break;

      case operationTypes.reset:
        setCounter(0);
        break;

      default:
        return;
    }
  };

  return (
    <div className="app">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={() => handleClick(operationTypes.increment)}>
          INC
        </button>
        <button onClick={() => handleClick(operationTypes.decrement)}>
          DEC
        </button>
        <button onClick={() => handleClick(operationTypes.random)}>RND</button>
        <button onClick={() => handleClick(operationTypes.reset)}>RESET</button>
      </div>
    </div>
  );
};
export default App;
