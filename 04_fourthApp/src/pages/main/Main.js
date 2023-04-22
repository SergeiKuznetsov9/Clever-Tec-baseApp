import React from "react";
import { SingleCounter } from "../../components/singleCounter/SingleCounter";
import { DoubleCounter } from "../../components/doubleCounter/DoubleCounter";
import { GlobalCounter } from "../../components/globalCounter/GlobalCounter";
import styles from "./Main.module.scss";

export const Main = () => (
  <div className={styles.root}>
    <SingleCounter />
    <DoubleCounter />
    <GlobalCounter />
  </div>
);
