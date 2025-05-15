import React from "react";
import styles from "./SideBar.module.css";

export const SideBar = (props: { isOpen: boolean, children?: React.ReactNode }) => {

  return (
    <div className={`${styles.root} ${props.isOpen ? styles.open : ""}`}>
      {props.children}
    </div>
  );
}

export default SideBar;
