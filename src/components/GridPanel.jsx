import React, { useState } from "react";
import styles from "./GridPanel.module.css";

export function GridPanel() {
  return (
    <div className={styles.root}>
      パネル
    </div>
  );
}

GridPanel.displayName = "Panel";
export default GridPanel;
