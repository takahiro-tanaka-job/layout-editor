/** @jsxImportSource @emotion/react */
import React from "react";
import styles from "./Layout.module.css";

export type LayoutHandle = {
  setScale: (scale: number) => void;
  resetScale: () => void;
};

export const Layout = React.forwardRef<
  LayoutHandle,
  {
    children?: React.ReactNode;
    onScaleChange?: (scale: number) => void; // 親にスケール変更を通知するコールバック
  }
>((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    setScale,
    resetScale,
  }));

  const [_scale, _setScale] = React.useState(1);
  const [origin, setOrigin] = React.useState("50% 50%");

  const clampScale = (s: number) => Math.min(Math.max(s, 0.2), 3);

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (e.shiftKey) {
      // Shiftキーが押されている場合は横スクロール
      e.preventDefault();
      e.currentTarget.scrollLeft += e.deltaY; // 横スクロールを実現
    } else if (e.altKey) {
      // Altキーが押されている場合はズーム
      e.preventDefault();

      const delta = e.deltaY;
      const scaleFactor = delta > 0 ? 0.9 : 1.1;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      setOrigin(`${percentX}% ${percentY}%`);
      updateScale((prev) => clampScale(prev * scaleFactor));
    }
  };

  const updateScale = (newScale: number | ((prev: number) => number)) => {
    _setScale((prev) => {
      const nextScale = typeof newScale === "function" ? newScale(prev) : newScale;
      if (props.onScaleChange) {
        props.onScaleChange(nextScale); // 親にスケール変更を通知
      }
      return nextScale;
    });
  };

  const setScale = (scale: number) => {
    updateScale(scale);
  };

  const resetScale = () => {
    updateScale(1);
    setOrigin("50% 50%");
  };

  return (
    <>
      <div
        className={styles.container}
        onWheel={handleWheel}
        tabIndex={0}
        style={{
          overflow: "auto", // 横スクロールを有効にする
        }}
      >
        {/* props.children をラップしてスタイルを適用 */}
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            const element = child as React.ReactElement<any>;
            return React.cloneElement(element, {
              style: {
                ...element.props.style,
                transform: `scale(${_scale})`,
                transformOrigin: origin,
              },
            });
          }
          return child;
        })}
      </div>
    </>
  );
});

export default Layout;
