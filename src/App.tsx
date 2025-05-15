import React from "react";
import Layout, { type LayoutHandle } from "./components/Layout";
// import SideBar from "./components/SideBar";
import FloatingPanel from "./components/FloatingPanel";
// import GridPanel from "./components/GridPanel";

import styles from "./App.module.css";

function App() {

  const layoutRef = React.useRef<LayoutHandle | null>(null);

  const handleSetScale = () => layoutRef.current?.setScale(0.5);
  const handleResetScale = () => layoutRef.current?.resetScale();
  const handleToggleFullScreen = () => layoutRef.current?.toggleFullScreen();

  return (
    <div className={styles.root}>
      <Layout ref={layoutRef} />
      {/* <SideBar /> */}
      {/* <GridPanel /> */}
      <FloatingPanel>
        <button className={styles.resetButton} onClick={handleResetScale} children="リセット" />
        <button className={styles.resetButton} onClick={handleSetScale} children="50%" />
        <button className={styles.fullScreenButton} onClick={handleToggleFullScreen} children="全画面表示" />
      </FloatingPanel>
    </div>
  );
}

export default App;
