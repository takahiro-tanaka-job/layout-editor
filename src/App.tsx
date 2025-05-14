import Layout from "./components/Layout";
import SideBar from "./components/SideBar";
import FloatingPanel from "./components/FloatingPanel";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.root}>
      {/* <Layout /> */}
      {/* <SideBar /> */}
      <FloatingPanel><button>1</button><button>2</button></FloatingPanel>
    </div>
  );
}

export default App;
