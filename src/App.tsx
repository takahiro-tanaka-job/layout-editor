/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Layout, { type LayoutHandle } from "./components/Layout";
import SideBar from "./components/SideBar";
import FloatingPanel from "./components/FloatingPanel";
import GridPanel from "./components/GridPanel";

import styles from "./App.module.css";

function App() {

  const layoutRef = React.useRef<LayoutHandle | null>(null);

  const [width, setWidth] = React.useState(1028);
  const [preview, setpPeview] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={styles.root}>
      <GridPanel>
        <Layout ref={layoutRef}  >
          <div
            css={css`
            height: 100vh;
            width: ${width}px;
            border: 1px dotted #000;
            background-color: white;
          `}
          >
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <button>ボタン</button>
          </div>
        </Layout>
      </GridPanel>
      <SideBar isOpen={isOpen}>
        <h1>サイドバー</h1>
      </SideBar>
      <FloatingPanel>
        {preview
          ? <>
            <button className={styles.previewCancel} onClick={() => setpPeview(false)}>戻る</button>
          </>
          : <>
            <button className={styles.resetButton} onClick={() => setIsOpen(!isOpen)} children="サイドバー" />
            <button className={styles.resetButton} onClick={() => layoutRef.current?.resetScale()} children="リセット" />
            <button className={styles.resetButton} onClick={() => layoutRef.current?.setScale(0.5)} children="50%" />
            <button className={styles.resetButton} onClick={() => setWidth(1280)} children="1280" />
            <button className={styles.resetButton} onClick={() => setWidth(768)} children="768" />
            <button className={styles.resetButton} onClick={() => setWidth(480)} children="480" />
            <button className={styles.resetButton} onClick={() => setpPeview(true)} children="プレビュー" />
            <button className={styles.fullScreenButton} onClick={() => layoutRef.current?.toggleFullScreen()} children="全画面表示" />
          </>}
      </FloatingPanel>
    </div>
  );
}

export default App;
