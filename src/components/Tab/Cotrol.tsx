import React, { useState } from "react";
import styles from "./Cotrol.module.css";

export const Cotrol = (props: {
  tabs: { label: React.ReactNode; content: React.ReactNode }[]; // タブのラベルとコンテンツ
}) => {
  const [activeTab, setActiveTab] = useState(0); // 現在のアクティブなタブのインデックス

  return (
    <div className={styles.root}>
      {/* タブのヘッダー */}
      <div className={styles.tabHeader}>
        {props.tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.active : ""
              }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* タブのコンテンツ */}
      <div className={styles.tabContent}>
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tabPane} ${activeTab === index ? styles.active : styles.hidden
              }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Cotrol.displayName = "Tab";
export default Cotrol;