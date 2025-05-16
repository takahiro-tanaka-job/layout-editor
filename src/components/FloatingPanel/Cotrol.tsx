import React, { useState } from "react";
import styles from "./Cotrol.module.css";

export const Cotrol = (props: { children: React.ReactNode }) => {
  const [isBottom, setIsBottom] = useState(false);

  const top = 20;
  const _style: React.CSSProperties = {
    position: "fixed",
    top: `${top}px`,
    right: "20px",
    transition: "transform 0.5s ease", // transform にアニメーションを適用
    transform: isBottom ? `translateY(calc(100vh - 100% - ${top * 2}px))` : "translateY(0)", // 上下の移動をスムーズに
  };

  const handleButtonClick = () => {
    setIsBottom((prev) => !prev);
  };

  return (
    <div className={styles.root} style={_style}>
      <button className={styles.button} onClick={handleButtonClick}>
        {isBottom ? "上に移動" : "下に移動"}
      </button>
      {props.children}
    </div>
  );
};

Cotrol.displayName = "FloatingPanel";
export default Cotrol;
