import React from "react";
import styles from "./Cotrol.module.css";

export const Cotrol = (props: {
  isModeless?: boolean;
  isOpenDialog: boolean;
  setIsOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {

  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [maximized, SetMaximized] = React.useState(false);

  React.useEffect(() => {
    enableDrag(dialogRef.current!);
  }, []);

  React.useEffect(() => {
    if (props.isOpenDialog && props.isModeless) {
      dialogRef.current?.show(); // モーダルレスでダイアログを表示
    } else if (props.isOpenDialog) {
      dialogRef.current?.showModal(); //  モーダルでダイアログを表示
    } else {
      dialogRef.current?.close(); // ダイアログを閉じる
    }
  }, [props.isOpenDialog, props.isModeless]);

  const enableDrag = (dialog: HTMLDialogElement) => {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "BUTTON") return;
      isDragging = true;

      const rect = dialog.getBoundingClientRect();

      // 現在の位置を計算して固定
      dialog.style.left = `${rect.left}px`;
      dialog.style.top = `${rect.top}px`;
      dialog.style.transform = "none"; // transform をリセット

      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      dialog.style.left = `${e.clientX - offsetX}px`;
      dialog.style.top = `${e.clientY - offsetY}px`;
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    dialog.addEventListener("mousedown", handleMouseDown);
  };

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.root} ${maximized ? styles.maximized : ""}`}
      onClose={() => props.setIsOpenDialog(false)}
    >
      <button className={styles.maximized} onClick={() => SetMaximized(bef => !bef)}>
        {maximized ? '🗗' : '⛶'}
      </button>
      {props.children}
    </dialog>
  );
};

Cotrol.displayName = "Dialog";
export default Cotrol;