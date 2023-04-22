// Два независимых счетчика
// Второй имеет функциональность в виде установки произвольного значения
import React, { useReducer, useState } from "react";
import styles from "./DoubleCounter.module.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, counter1: state.counter1 + 1 };

    case "decrement1":
      return { ...state, counter1: state.counter1 - 1 };

    case "increment2":
      return { ...state, counter2: state.counter2 + 1 };

    case "decrement2":
      return { ...state, counter2: state.counter2 - 1 };

    case "setIncrement2Value":
      return { ...state, counter2: action.payload };

    default:
      return state;
  }
};

const initialState = {
  counter1: 0,
  counter2: 0,
};

export const DoubleCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [valueForCounter, setValueForCounterm] = useState(0);

  const setInputValue = (value) => {
    if (!isNaN(value)) {
      setValueForCounterm(value);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Double Counter With useReducer</h2>

      <div className={styles.firstCounter}>
        <p className={styles.counterDisplay}>
          First Counter value is <strong>{count.counter1}</strong>
        </p>
        <div className={styles.buttonSection}>
          <button onClick={() => dispatch({ type: "increment1" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement1" })}>
            Decrement
          </button>
        </div>
      </div>

      <div className={styles.secondCounter}>
        <p className={styles.counterDisplay}>
          Second Counter value is <strong>{count.counter2}</strong>
        </p>
        <div className={styles.buttonSection}>
          <button onClick={() => dispatch({ type: "increment2" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement2" })}>
            Decrement
          </button>
        </div>

        <p className={styles.counterInput}>
          Set counter value
          <input
            type="text"
            value={valueForCounter}
            onInput={(event) => setInputValue(+event.target.value)}
          />
          <button
            onClick={() =>
              dispatch({ type: "setIncrement2Value", payload: valueForCounter })
            }
          >
            Set value
          </button>
        </p>
      </div>
    </div>
  );
};
