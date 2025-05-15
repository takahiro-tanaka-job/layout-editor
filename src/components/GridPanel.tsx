import styles from "./GridPanel.module.css";

export const GridPanel = (props: { children?: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  );
}

GridPanel.displayName = "GridPanel";
export default GridPanel;
