import React from "react";
import styles from "./Cotrol.module.css";

export const Cotrol = (props: { isOpen: boolean, children?: React.ReactNode }) => {

  return (
    <div className={`${styles.root} ${props.isOpen ? styles.open : ""}`}>
      {props.children}
    </div>
  );
}

Cotrol.displayName = "SideBar";
export default Cotrol;
