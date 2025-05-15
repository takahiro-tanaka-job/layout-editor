/** @jsxImportSource @emotion/react */
import React from "react";

export const Cotrol = ({ children, isFullScreen, onFullScreenChange }: {
  children?: React.ReactNode,
  isFullScreen: boolean,
  onFullScreenChange?: (isFullScreen: boolean) => void,
}) => {

  const toggleFullScreen = () => {
    // if (!document.fullscreenElement) {
    //   document.documentElement.requestFullscreen();
    // } else if (document.exitFullscreen) {
    //   document.exitFullscreen();
    // }
    if (isFullScreen) {
      document.documentElement.requestFullscreen();
    } else if (!isFullScreen) {
      document.exitFullscreen();
    }
  };

  React.useEffect(() => {
    toggleFullScreen();
  }, [isFullScreen]);

  React.useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreen = !!document.fullscreenElement;

      if (onFullScreenChange) {
        onFullScreenChange(isFullScreen);
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    toggleFullScreen();

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [onFullScreenChange]);

  return (
    <>
      {children}
    </>
  );
}

// メモ化しないとチラつく
export const _Cotrol = React.memo(Cotrol);
_Cotrol.displayName = "FullScreen";
export default _Cotrol;
