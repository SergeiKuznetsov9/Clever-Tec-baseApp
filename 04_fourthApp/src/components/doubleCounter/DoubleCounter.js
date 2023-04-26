// Два независимых счетчика
// Второй имеет функциональность в виде установки произвольного значения
import React, { useReducer, useState } from "react";
import styles from "./DoubleCounter.module.scss";
import {
  doubleCounterInitialState,
  doubleCounterReducer,
} from "../../store/doubleCounterReducer/doubleCounterReducer";
import {
  decrement1,
  decrement2,
  increment1,
  increment2,
  setValue,
} from "../../store/doubleCounterReducer/actionCreator";

export const DoubleCounter = () => {
  const [count, dispatch] = useReducer(
    doubleCounterReducer,
    doubleCounterInitialState
  );
  const [valueForCounter, setValueForCounter] = useState(0);

  const setInputValue = (value) => {
    if (!isNaN(value)) {
      setValueForCounter(value);
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
          <button onClick={() => dispatch(increment1())}>Increment</button>
          <button onClick={() => dispatch(decrement1())}>Decrement</button>
        </div>
      </div>

      <div className={styles.secondCounter}>
        <p className={styles.counterDisplay}>
          Second Counter value is <strong>{count.counter2}</strong>
        </p>
        <div className={styles.buttonSection}>
          <button onClick={() => dispatch(increment2())}>Increment</button>
          <button onClick={() => dispatch(decrement2())}>Decrement</button>
        </div>

        <p className={styles.counterInput}>
          Set counter value
          <input
            type="text"
            value={valueForCounter}
            onInput={(event) => setInputValue(+event.target.value)}
          />
          <button onClick={() => dispatch(setValue(valueForCounter))}>
            Set value
          </button>
        </p>
      </div>
    </div>
  );
};
