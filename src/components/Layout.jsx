import React, { useState } from "react";

export function Layout() {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState("50% 50%");

  const clampScale = (s) => Math.min(Math.max(s, 0.2), 3);

  const handleWheel = (e) => {
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

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    transform: `scale(${scale})`,
    transformOrigin: origin,
    transition: "transform 0.2s ease, transform-origin 0.2s ease",
    backgroundColor: 'white',
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

  return (
    <div style={containerStyle} onWheel={handleWheel}>
      <button style={buttonStyle}>ボタン</button>
    </div>
  );
}

export default Layout;