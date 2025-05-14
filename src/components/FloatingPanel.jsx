import React, { useState } from "react";
import styles from "./FloatingPanel.module.css";

export function FloatingPanel({ children }) {
  const [isBottom, setIsBottom] = useState(false);

  // const _style = {
  //   position: "fixed",
  //   left: "50px",
  //   transition: "all 0.8s ease",
  //   ...(isBottom ? { bottom: "50px" } : { top: "50px" }),
  // };

  const _style = {
    position: "fixed",
    right: "50px",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    transform: isBottom ? "translateY(calc(100vh - 100px))" : "translateY(0)",
    opacity: isBottom ? 0.8 : 1, // 動きに合わせて透明度を変化
  };

  const handleButtonClick = () => {
    setIsBottom((prev) => !prev);
  };

  return (
    <div className={styles.root} style={_style}>
      <button onClick={handleButtonClick}>
        {isBottom ? "上に移動" : "下に移動"}
      </button>
      {children}
    </div>
  );
}

FloatingPanel.displayName = "FloatingPanel";
export default FloatingPanel;
