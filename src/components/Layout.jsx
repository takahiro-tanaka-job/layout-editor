import React, { useState } from "react";

export function Layout() {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState("50% 50%");

  const clampScale = (s) => Math.min(Math.max(s, 0.2), 3);

  const handleWheel = (e) => {
    if (!e.ctrlKey) return; // Ctrlキーが押されていない場合は何もしない
    e.preventDefault();

    const delta = e.deltaY;
    const scaleFactor = delta > 0 ? 0.9 : 1.1;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setOrigin(`${percentX}% ${percentY}%`);
    setScale((prev) => clampScale(prev * scaleFactor));
  };

  const resetScale = () => {
    setScale(1); // 拡大縮小を等倍にリセット
    setOrigin("50% 50%"); // 原点を中央にリセット
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    transform: `scale(${scale})`,
    transformOrigin: origin,
    transition: "transform 0.2s ease, transform-origin 0.2s ease",
    backgroundColor: "white",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    width: "500px",
    height: "600px",
  };

  const resetButtonStyle = {
    position: "fixed", // 画面全体に対して固定
    top: "10px",
    right: "10px",
    backgroundColor: "#28a745",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    // zIndex: 1000, // 他の要素より前面に表示
  };

  return (
    <>
      <div
        style={containerStyle}
        onWheel={handleWheel}
        tabIndex={0} // フォーカス可能にする
      >
        <button style={buttonStyle}>ボタン</button>
      </div>
      <button style={resetButtonStyle} onClick={resetScale}>
        リセット
      </button>
    </>
  );
}

export default Layout;
