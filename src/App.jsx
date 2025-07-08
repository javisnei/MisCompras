import { Route, Routes } from "react-router-dom";
import { Principal } from "./assets/Principal/Principal";
import { Nuevo } from "./assets/Nuevo/Nuevo";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.Menu}>
        <h2>Mis Compras </h2>
        <Principal />
      </div>

      <Routes>
        <Route path="/Nuevo" element={<Nuevo />} />
      </Routes>
    </>
  );
}

export default App;
