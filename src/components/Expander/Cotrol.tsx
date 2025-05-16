import React from "react";
import styles from "./Cotrol.module.css";

export const ExpanderButton = (props: {
  isExpanded: boolean,
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>,
  children?: React.ReactNode
}) => {

  return (
    <button className={styles.button} onClick={() => props.setIsExpanded((prev) => !prev)}>
      {props.isExpanded ? "▲" : "▼"}{props.children}
    </button>
  );
};

export const Cotrol = (props: {
  children: React.ReactNode;
  header: React.ReactNode; // 外部から渡される header
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>{props.header}</div>
      {props.children}
    </div>
  );
};

Cotrol.displayName = "Expander";
export default Cotrol;