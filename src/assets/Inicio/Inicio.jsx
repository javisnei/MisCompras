import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Principal } from "../Principal/Principal";
import { Deseo } from "../Deseo/Deseo";

import styles from "./Inicio.module.css";

export const Inicio = () => {
  //cargar local
  const [producto, setProductos] = useState(() => {
    const guardados = localStorage.getItem("productos");
    return guardados ? JSON.parse(guardados) : [];
  });
  //cargar local
  const [deseo, setDeseo] = useState(() => {
    const guardados = localStorage.getItem("deseos");
    return guardados ? JSON.parse(guardados) : [];
  });
/// Guardadar en local
 useEffect(() => {      //clave 
    localStorage.setItem("productos", JSON.stringify(producto));
  }, [producto]);

  useEffect(() => {
    localStorage.setItem("deseos", JSON.stringify(deseo));
  }, [deseo]);


  const agregarProducto = (nombre, precio, local, garantia) => {
    const nuevo = { 
      id: Date.now(),
       nombre, 
       precio, 
       local,
        garantia };
    setProductos([...producto, nuevo]);
  };

  const agregarDeseo = (nombre, precio, local, garantia) => {
    const nuevo = { id: Date.now(),
       nombre, 
       precio, 
       local, 
       garantia };
    setDeseo([...deseo, nuevo]);
  };

  const eliminarProducto = (id) => {
    setProductos(producto.filter((p) => p.id !== id));
  };

  
  const eliminarDeseo = (id) => {
    setDeseo(deseo.filter((d) => d.id !== id));
  };

   const actualizarDeseo = (id, nombre,precio, local, garantia) => {
    const actualizadas = deseo.map((t) =>
      t.id === id ? { ...t, nombre: nombre, precio:precio, local:local, garantia:garantia } : t
    );
    setDeseo(actualizadas);
  };


  return (
    <div className={styles.bloque}>
      <div className={styles.Menu}>
        <Link className={styles.enlace} to="/">Mis Compras</Link>

        <div className={styles.imagen}><img src="https://res.cloudinary.com/dbfpjsjym/image/upload/v1750986023/samples/coffee.jpg"/></div>        

        <Link className={styles.enlace}  to="/Deseos">Mis Deseos</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Principal
              producto={producto}
              agregarProducto={agregarProducto}
              agregarDeseo={agregarDeseo}
              eliminarProducto={eliminarProducto}
              
            />
          }
        />
        <Route path="/Deseos" element={<Deseo
         listaDeseos={deseo} 
        eliminarDeseo={eliminarDeseo} 
        actualizarDeseo={actualizarDeseo}/>} />
      </Routes>
    </div>
  );
};
