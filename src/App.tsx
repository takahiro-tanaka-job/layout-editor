/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import * as components from "./components/index";
import { type LayoutHandle } from "./components/Layout/Cotrol";
import styles from "./App.module.css";

function App() {

  const layoutRef = React.useRef<LayoutHandle | null>(null);

  const [width, setWidth] = React.useState(1028);
  const [scale, setScale] = React.useState(1028);
  const [preview, setpPeview] = React.useState(false);

  const [isOpenDialog1, setIsOpenDialog1] = React.useState(false);
  const [isOpenDialog2, setIsOpenDialog2] = React.useState(false);
  const [isOpenModeless1, setIsOpenModeless1] = React.useState(false);
  const [isOpenModeless2, setIsOpenModeless2] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [isExpanded1, setIsExpanded1] = React.useState(false);

  const onFullScreenChange = React.useCallback((isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
  }, []);

  const handleScaleChange = (_scale: number) => {
    setScale(_scale);
  };

  return (
    <div className={styles.root}>
      <components.GridPanel.Cotrol>
        <components.FullScreen.Cotrol
          isFullScreen={fullScreen}
          onFullScreenChange={onFullScreenChange}
        >
          <components.Layout.Cotrol ref={layoutRef}
            onScaleChange={handleScaleChange}>
            <div
              css={css`
            height: 100vh;
            width: ${width}px;
            overflow: auto;
            border: 1px dotted #000;
            background-color: white;
          `}
            >
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <button>ボタン</button>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </components.Layout.Cotrol>
        </components.FullScreen.Cotrol>
      </components.GridPanel.Cotrol>
      {(!preview && !fullScreen) && <components.SideBar.Cotrol isOpen={isOpen}>
        <h1>サイドバー</h1>
      </components.SideBar.Cotrol>}
      <components.FloatingPanel.Cotrol>
        <div css={css`margin: 0 75px 0 0;`}>
          {preview && <>
            <button onClick={() => setpPeview(false)}>戻る</button>
          </>}
          {fullScreen && <>
            <button onClick={() => setFullScreen(false)}>戻る</button>
          </>}
          {(!preview && !fullScreen) && <>
            <button onClick={() => setIsOpenDialog1(bef => !bef)} children="ダイアログ" />
            <button onClick={() => setIsOpenModeless1(bef => !bef)} children="モーダルレス" />
            <button onClick={() => setIsOpen(!isOpen)} children="サイドバー" />
            <button onClick={() => layoutRef.current?.resetScale()} children="リセット" />
            <button onClick={() => layoutRef.current?.setScale(0.5)} children="50%" />
            <span>{(scale * 100).toFixed(0)}%</span>
            <button onClick={() => setWidth(1280)} children="1280" />
            <button onClick={() => setWidth(768)} children="768" />
            <button onClick={() => setWidth(480)} children="480" />
            <button onClick={() => setpPeview(true)} children="プレビュー" />
            <button onClick={() => setFullScreen(true)} children="全画面表示" />
          </>}
        </div>
        <components.Expander.Cotrol
          header={<components.ExpanderButton isExpanded={isExpanded1} setIsExpanded={setIsExpanded1}>
            {'タイトル'}
          </components.ExpanderButton>}>
          {isExpanded1 && <p>これはセクション 1 の内容です。</p>}
        </components.Expander.Cotrol>
      </components.FloatingPanel.Cotrol>

      {isOpenDialog1 && <components.Dialog.Cotrol isOpenDialog={isOpenDialog1} setIsOpenDialog={setIsOpenDialog1}>
        <div css={css`
          display:flex;
          flex-direction: column;
        `}>
          <h1>ダイアログ 1</h1>
          <button onClick={() => setIsOpenDialog1(false)}>閉じる</button>
          <button onClick={() => setIsOpenDialog2(bef => !bef)} children="ダイアログ" />
          <button onClick={() => setIsOpenModeless2(bef => !bef)} children="モーダルレス" />
        </div>
      </components.Dialog.Cotrol>}

      {isOpenModeless1 && <components.Dialog.Cotrol isOpenDialog={isOpenModeless1} setIsOpenDialog={setIsOpenModeless1} isModeless>
        <div css={css`
          display:flex;
          flex-direction: column;
        `}>
          <h1>モーダルレス 1</h1>
          <button onClick={() => setIsOpenModeless1(false)}>閉じる</button>
          <button onClick={() => setIsOpenDialog2(bef => !bef)} children="ダイアログ" />
          <button onClick={() => setIsOpenModeless2(bef => !bef)} children="モーダルレス" />
        </div>
      </components.Dialog.Cotrol>}

      {isOpenDialog2 && <components.Dialog.Cotrol isOpenDialog={isOpenDialog2} setIsOpenDialog={setIsOpenDialog2}>
        <div css={css`
          display:flex;
          flex-direction: column;
        `}>
          <h1>ダイアログ 2</h1>
          <button onClick={() => setIsOpenDialog2(false)}>閉じる</button>
        </div>
      </components.Dialog.Cotrol>}

      {isOpenModeless2 && <components.Dialog.Cotrol isOpenDialog={isOpenModeless2} setIsOpenDialog={setIsOpenModeless2} isModeless>
        <div css={css`
          display:flex;
          flex-direction: column;
        `}>
          <h1>モーダルレス 2</h1>
          <button onClick={() => setIsOpenModeless2(false)}>閉じる</button>
        </div>
      </components.Dialog.Cotrol>}
    </div>
  );
}

export default App;
