// Обычный счетчик
import React, { useReducer } from "react";
import styles from "./SingleCounter.module.scss";
import {
  singleCounterInitialState,
  singleCounterReducer,
} from "../../store/singleCounterReducer/singleCounterReducer";
import {
  decrement,
  increment,
} from "../../store/singleCounterReducer/actionCreator";

export const SingleCounter = () => {
  const [count, dispatch] = useReducer(
    singleCounterReducer,
    singleCounterInitialState
  );

  return (
    <div className={styles.container}>
      <h2>Single Counter With useReducer</h2>
      <p>
        Counter value is <strong>{count}</strong>
      </p>
      <div className={styles.buttonSection}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};
