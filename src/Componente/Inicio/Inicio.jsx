import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Principal } from "../Principal/Principal";
import { Deseo } from "../Deseo/Deseo";

//import { createTask, deleteTask, updateTask } from "./api/purchase"; //usar el backend  


import styles from "./Inicio.module.css";
import { Historial } from "../Historial/Historial";

export const Inicio = () => {
  const [historial, SetHistorial] = useState([]);
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
  useEffect(() => {
    //clave
    localStorage.setItem("productos", JSON.stringify(producto));
  }, [producto]);

  useEffect(() => {
    localStorage.setItem("deseos", JSON.stringify(deseo));
  }, [deseo]);

  const agregarProducto = (nombre, precio, local) => {
    const nuevo = {
      id: Date.now(),
      nombre,
      precio,
      local,
    };
    setProductos([...producto, nuevo]);
    SetHistorial([...historial, nuevo]);
/**
    const response = await createPurchase(nuevo);
    console.log("Respuesta de crear tarea:", response.data);
    if (response.data) {
      getTareas(); // Actualiza la lista de tareas
    } else {
      console.error("Error al crear la tarea:", response.error);
    }  */
  };
 

  const actualizarProducto = (id, nombre, precio, local) => {
    const actualizadas = producto.map((t) =>
      t.id === id ? { ...t, nombre: nombre, precio: precio, local: local } : t
    );
    const actualizadasHist = historial.map((t) =>
      t.id === id ? { ...t, nombre: nombre, precio: precio, local: local } : t
    );
    SetHistorial(actualizadasHist);
    setProductos(actualizadas);
  };

  const eliminarProducto = (id) => {
    setProductos(producto.filter((p) => p.id !== id));
  };

  const agregarDeseo = (nombre, precio, local) => {
    const nuevo = { id: Date.now(), nombre, precio, local };
    setDeseo([...deseo, nuevo]);
  };

  const eliminarDeseo = (id) => {
    setDeseo(deseo.filter((d) => d.id !== id));
  };

  const actualizarDeseo = (id, nombre, precio, local) => {
    const actualizadas = deseo.map((t) =>
      t.id === id ? { ...t, nombre: nombre, precio: precio, local: local } : t
    );
    setDeseo(actualizadas);
  };

  return (
    <div className={styles.bloque}>
      <div className={styles.Menu}>
        <>
          <div className={styles.imagen}>
            <img src="https://res.cloudinary.com/dbfpjsjym/image/upload/v1753299895/deseo_un_logo_para_un_sitio_de_registro_de_compras_notas_agradable_para_todo_publico_gracioas_yd2qdq.jpg" />
          </div>
          <Link className={styles.enlace} to="/">
            Mis Compras
          </Link>
          <Link className={styles.enlace} to="/Historial">
            Historial
          </Link>
          <Link className={styles.enlace} to="/Deseos">
            Mis Deseos
          </Link>
          <div className={styles.imagen}>
            <img src="https://res.cloudinary.com/dbfpjsjym/image/upload/v1753299895/deseo_un_logo_para_un_sitio_de_registro_de_compras_notas_agradable_para_todo_publico_gracioas_yd2qdq.jpg" />
          </div>
        </>
      </div>

      <div className={styles.contenido}>
        <Routes>
          <Route
            path="/"
            element={
              <Principal
                producto={producto}
                agregarProducto={agregarProducto}
                agregarDeseo={agregarDeseo}
                eliminarProducto={eliminarProducto}
                actualizarProducto={actualizarProducto}
              />
            }
          />
          <Route
            path="/Deseos"
            element={
              <Deseo
                listaDeseos={deseo}
                eliminarDeseo={eliminarDeseo}
                actualizarDeseo={actualizarDeseo}
                agregarProducto={agregarProducto}
              />
            }
          />

          <Route
            path="/Historial"
            element={<Historial historial={historial} />}
          />
        </Routes>
      </div>
    </div>
  );
};
