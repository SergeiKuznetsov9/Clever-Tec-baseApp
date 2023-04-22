import React, { useContext } from "react";
import styles from "./FirstChild.module.scss";
import { CounterContext } from "../../../App";

export const FirstChild = () => {
  const { count } = useContext(CounterContext);
  return (
    <div className={styles.root}>
      <h3>First component</h3>
      <p>
        <i>This component can display global counter</i>
      </p>
      <p className={styles.counterValue}>
        Counter value is <strong>{count}</strong>
      </p>
    </div>
  );
};
