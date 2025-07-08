import { Link } from "react-router-dom";
import styles from "./Principal.module.css";
import { useState } from "react";
import { Nuevo } from "../Nuevo/Nuevo";
import { Productos } from "../Productos/Productos";

export const Principal = () => {
  const [producto, setProductos] = useState([]);

  //const [deseo, setDeseo] = useState([]);

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

  const eliminarProducto = (id) => {
    const eliminado = producto.filter((p) => p.id !== id );
    setProductos(eliminado);
  };

  const [agregar, setAgregar] = useState(false);
  const handleNuevo = () => {
    //poder mostrar el formulario para agregar nuevo producto
    setAgregar(true);
  };

  return (
    <>
      <nav>
        {agregar ? (
          <Link onClick={handleNuevo} className={styles.linkBoton} to="/Nuevo">
            Nuevo
          </Link>
        ) : (
          <Link onClick={handleNuevo} className={styles.linkBoton} to="/">
            Nuevo
          </Link>
        )}
          
        <Link className={styles.linkBoton} to="/Deseos">
          Deseos
        </Link>
      </nav>

       <Nuevo  AgregarProducto = {AgregarProducto}/> 


       <hr></hr>

       {
        producto.map((p) => (
          <Productos
            key = {p.id}
            prod = {p}
            EliminarProducto = {eliminarProducto}

          />
        ))
       }
      
    </>
  );
};
