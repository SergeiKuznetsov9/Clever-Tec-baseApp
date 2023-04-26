import React from "react";
import { FirstChild } from "./firstChild/FirstChild";
import { SecondChild } from "./secondChild/SecondChild";
import { ThirdChild } from "./thirdChild/ThirdChild";
import styles from "./GlobalCounter.module.scss";

export const GlobalCounter = () => (
  <div className={styles.root}>
    <h2>Global Counter With useReducer and useContext</h2>
    <FirstChild />
    <SecondChild />
    <ThirdChild />
  </div>
);
