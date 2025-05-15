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
  const [fullScreen, setFullScreen] = React.useState(false);

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
      {(!preview && !fullScreen) && <SideBar isOpen={isOpen}>
        <h1>サイドバー</h1>
      </SideBar>}
      <FloatingPanel>
        {preview && <>
          <button onClick={() => setpPeview(false)}>戻る</button>
        </>}
        {fullScreen && <>
          <button onClick={() => setFullScreen(false)}>戻る</button>
        </>}
        {(!preview && !fullScreen) && <>
          <button onClick={() => setIsOpen(!isOpen)} children="サイドバー" />
          <button onClick={() => layoutRef.current?.resetScale()} children="リセット" />
          <button onClick={() => layoutRef.current?.setScale(0.5)} children="50%" />
          <button onClick={() => setWidth(1280)} children="1280" />
          <button onClick={() => setWidth(768)} children="768" />
          <button onClick={() => setWidth(480)} children="480" />
          <button onClick={() => setpPeview(true)} children="プレビュー" />
          <button onClick={() => setFullScreen(true)} children="全画面表示" />
        </>}
      </FloatingPanel>
    </div>
  );
}

export default App;
