import styles from "./Cotrol.module.css";

export const Cotrol = (props: { children?: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  );
}

Cotrol.displayName = "GridPanel";
export default Cotrol;
