import { Link, Route, Routes } from "react-router-dom";
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
          <Link to="/"> Mis Compras </Link>

          <Link to="/Deseos"> Mis Deseos </Link>
        </div>

        <Routes>
          <Route path="/" element={<Principal />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
