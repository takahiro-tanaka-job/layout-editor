/** @jsxImportSource @emotion/react */
import React from "react";
import styles from "./Layout.module.css";

export type LayoutHandle = {
  setScale: (scale: number) => void;
  resetScale: () => void;
  toggleFullScreen: () => void;
}

export const Layout = React.forwardRef<LayoutHandle, { children?: React.ReactNode }>(
  (props, ref) => {
    React.useImperativeHandle(ref, () => ({
      setScale,
      resetScale,
      toggleFullScreen,
    }));

    React.useImperativeHandle(ref, () => ({
      setScale,
      resetScale,
      toggleFullScreen,
    }));

    const [_scale, _setScale] = React.useState(1);
    const [origin, setOrigin] = React.useState("50% 50%");
    const [_isFullScreen, setIsFullScreen] = React.useState(false);

    const clampScale = (s: number) => Math.min(Math.max(s, 0.2), 3);

    const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
      // Altキーを使用する
      if (!e.altKey) return;
      e.preventDefault();

      const delta = e.deltaY;
      const scaleFactor = delta > 0 ? 0.9 : 1.1;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      setOrigin(`${percentX}% ${percentY}%`);
      _setScale((prev) => clampScale(prev * scaleFactor));
    };

    const setScale = (scale: number) => {
      _setScale(scale);
    };

    const resetScale = () => {
      _setScale(1);
      setOrigin("50% 50%");
    };

    const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    };

    React.useEffect(() => {
      const handleFullScreenChange = () => setIsFullScreen(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", handleFullScreenChange);

      return () => {
        document.removeEventListener("fullscreenchange", handleFullScreenChange);
      };
    }, []);

    return (
      <>
        <div
          className={styles.container}
          // style={{
          //   transform: `scale(${_scale})`,
          //   transformOrigin: origin,
          // }}
          onWheel={handleWheel}
          tabIndex={0}
        >
          {/* props.children をラップしてスタイルを適用 */}
          {React.Children.map(props.children, (child) => {
            if (React.isValidElement(child)) {
              // child の型を明示的に指定
              const element = child as React.ReactElement<any>;
              return React.cloneElement(element, {
                style: {
                  ...element.props.style,
                  transform: `scale(${_scale})`,
                  transformOrigin: origin,
                },
              });
            }
            // 非 JSX 要素（文字列や数値など）はそのまま返す
            return child;
          })}
        </div>
      </>
    );
  });

export default Layout;
