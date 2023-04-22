// Обычный счетчик
import React, { useReducer } from "react";
import styles from "./SingleCounter.module.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

const initialState = 0;

export const SingleCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      <h2>Single Counter With useReducer</h2>
      <p>
        Counter value is <strong>{count}</strong>
      </p>
      <div className={styles.buttonSection}>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};
