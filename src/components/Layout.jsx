import React, { useState, useEffect } from "react";

export function Layout() {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState("50% 50%");
  const [isFullScreen, setIsFullScreen] = useState(false); // 全画面表示状態

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

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // 全画面表示の状態を監視
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const headerHeight = "50px";
  const footerHeight = "50px";
  const panelWidth = "200px";

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: `calc(100vh - ${headerHeight} - ${footerHeight})`, // ヘッダーとフッターの間の高さ
    width: `calc(100vw - ${panelWidth} * 2)`, // 左右パネルの間の幅
    marginTop: headerHeight, // ヘッダーの高さ分下げる
    marginLeft: panelWidth, // 左パネルの幅分右にずらす
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

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: headerHeight,
    backgroundColor: "#f8f9fa",
    display: isFullScreen ? "none" : "flex", // 全画面表示時に非表示
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  const resetButtonStyle = {
    backgroundColor: "#28a745",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    marginRight: "10px", // ボタン間の余白
  };

  const fullScreenButtonStyle = {
    backgroundColor: "#17a2b8",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
  };

  const footerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: footerHeight,
    backgroundColor: "#f8f9fa",
    display: isFullScreen ? "none" : "flex", // 全画面表示時に非表示
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  const leftPanelStyle = {
    position: "fixed",
    top: headerHeight, // ヘッダーの下に配置
    left: 0,
    height: `calc(100vh - ${headerHeight} - ${footerHeight})`, // ヘッダーとフッターの間の高さ
    width: panelWidth,
    backgroundColor: "#e9ecef",
    display: isFullScreen ? "none" : "flex", // 全画面表示時に非表示
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  const rightPanelStyle = {
    position: "fixed",
    top: headerHeight, // ヘッダーの下に配置
    right: 0,
    height: `calc(100vh - ${headerHeight} - ${footerHeight})`, // ヘッダーとフッターの間の高さ
    width: panelWidth,
    backgroundColor: "#e9ecef",
    display: isFullScreen ? "none" : "flex", // 全画面表示時に非表示
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "-2px 0 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  return (
    <>
      <div style={headerStyle}>
        <button style={resetButtonStyle} onClick={resetScale}>
          リセット
        </button>
        <button style={fullScreenButtonStyle} onClick={toggleFullScreen}>
          全画面表示
        </button>
      </div>
      <div style={leftPanelStyle}>
        <p>左パネル</p>
      </div>
      <div style={rightPanelStyle}>
        <p>右パネル</p>
      </div>
      <div
        style={containerStyle}
        onWheel={handleWheel}
        tabIndex={0} // フォーカス可能にする
      >
        <button style={buttonStyle}>ボタン</button>
      </div>
      <div style={footerStyle}>
        <p>フッターコンテンツ</p>
      </div>
    </>
  );
}

export default Layout;
