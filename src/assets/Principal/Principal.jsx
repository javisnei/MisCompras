import { Link } from "react-router-dom";
import styles from "./Principal.module.css";
import { useState } from "react";
import { Nuevo } from "../Nuevo/Nuevo";
import { Productos } from "../Productos/Productos";

export const Principal = () => {
  const [producto, setProductos] = useState([]);

  const [deseo, setDeseo] = useState([]);

  const AgregarProducto = (nombre, precio, local, garantia) => {
    const NuevoProducto = {
      id: Date.now(),
      nombre,
      precio,
      local,
      garantia,
    };
    setProductos([...producto, NuevoProducto]);
  };

    const agregarDeseo = (nombre, precio, local, garantia) => {
    const nuevoDeseo = {
      id: Date.now(),
      nombre,
      precio,
      local,
      garantia,
    };
    setDeseo([...deseo, nuevoDeseo]);
  };



  const eliminarProducto = (id) => {
    const eliminado = producto.filter((p) => p.id !== id);
    setProductos(eliminado);
  };

  return (
    <>
      <div className={styles.conteiner}>
        <Nuevo agregarProducto={AgregarProducto} agregarDeseo={agregarDeseo} />

        <div className={styles.cajon}>
          {producto.map((p) => (
            <Productos
              key={p.id}
              producto={p}
              EliminarProducto={eliminarProducto}
            />
          ))}
        </div>
      </div>
    </>
  );
};
