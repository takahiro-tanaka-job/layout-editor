import React, { useState, useEffect } from "react";
import styles from "./Layout.module.css";

export function Layout() {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState("50% 50%");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const clampScale = (s) => Math.min(Math.max(s, 0.2), 3);

  const handleWheel = (e) => {
    if (!e.ctrlKey) return;
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
    setScale(1);
    setOrigin("50% 50%");
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <>
      <div
        className={styles.header}
        style={{ display: isFullScreen ? "none" : "flex" }}
      >
        <button className={styles.resetButton} onClick={resetScale}>
          リセット
        </button>
        <button className={styles.fullScreenButton} onClick={toggleFullScreen}>
          全画面表示
        </button>
      </div>
      <div
        className={styles.leftPanel}
        style={{ display: isFullScreen ? "none" : "flex" }}
      >
        <p>左パネル</p>
      </div>
      <div
        className={styles.rightPanel}
        style={{ display: isFullScreen ? "none" : "flex" }}
      >
        <p>右パネル</p>
      </div>
      <div
        className={styles.container}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: origin,
        }}
        onWheel={handleWheel}
        tabIndex={0}
      >
        <button className={styles.button}>ボタン</button>
      </div>
      <div
        className={styles.footer}
        style={{ display: isFullScreen ? "none" : "flex" }}
      >
        <p>フッターコンテンツ</p>
      </div>
    </>
  );
}

export default Layout;
