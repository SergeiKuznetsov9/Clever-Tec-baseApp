import React, { useContext } from "react";
import { CounterContext } from "../../../App";
import styles from "./ThirdChild.module.scss";

export const ThirdChild = () => {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div className={styles.root}>
      <h3>Third component</h3>
      <p>
        <i>
          This component can affect the counter created in the root component
        </i>
      </p>
      <p className={styles.counterValue}>
        Counter value is <strong>{count}</strong>
      </p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};
