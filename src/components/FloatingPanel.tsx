import React, { useState } from "react";
import styles from "./FloatingPanel.module.css";

export const FloatingPanel = (props: { children: React.ReactNode }) => {
  const [isBottom, setIsBottom] = useState(false);

  // const _style = {
  //   position: "fixed",
  //   right: "50px",
  //   transition: "all 0.8s ease",
  //   ...(isBottom ? { bottom: "0px" } : { top: "0px" }),
  // };

  const top = 20;
  const _style: React.CSSProperties = {
    position: "fixed",
    top: `${top}px`,
    right: "50px",
    transition: "transform 0.5s ease", // transform にアニメーションを適用
    transform: isBottom ? `translateY(calc(100vh - 100% - ${top * 2}px))` : "translateY(0)", // 上下の移動をスムーズに
  };

  const handleButtonClick = () => {
    setIsBottom((prev) => !prev);
  };

  return (
    <div className={styles.root} style={_style}>
      <button onClick={handleButtonClick}>
        {isBottom ? "上に移動" : "下に移動"}
      </button>
      {props.children}
    </div>
  );
};

FloatingPanel.displayName = "FloatingPanel";
export default FloatingPanel;
