import { Route, Routes } from "react-router-dom";
import { Principal } from "./assets/Principal/Principal";
import { Nuevo } from "./assets/Nuevo/Nuevo";
import styles from "./App.module.css";
import { Deseo } from "./assets/Deseo/Deseo";
import { Productos } from "./assets/Productos/Productos";

function App() {
  return (
    <>
      <div>
        <div className={styles.Menu}>
          <h2>Mis Compras </h2>
        </div>

        <Routes>
          <Route path="/" element={<Principal />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
