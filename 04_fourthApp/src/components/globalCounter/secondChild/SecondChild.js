import React, { useContext } from "react";
import { CounterContext } from "../../../App";
import styles from "./SecondChild.module.scss";

export const SecondChild = () => {
  const { count } = useContext(CounterContext);
  
  return (
    <div className={styles.root}>
      <h3>Second component</h3>
      <p>
        <i>This component can display global counter</i>
      </p>
      <p className={styles.counterValue}>
        Counter value is <strong>{count}</strong>
      </p>
    </div>
  );
};
