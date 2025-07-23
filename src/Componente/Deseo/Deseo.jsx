import React, { useState } from "react";
import styles from "./Deseo.module.css";
import { ActualizarDeseo } from "./ActualizarDeseo";

export const Deseo = ({
  listaDeseos,
  eliminarDeseo,
  actualizarDeseo,
  agregarProducto,
}) => {
  const [editar, setEditar] = useState(false);
  const [deseo, setDeseo] = useState({
    id: null,
    nombre: "",
    precio: 0,
    local: "",
  });

  const pasar = (d) => {
    eliminarDeseo(d.id);
    agregarProducto(d.nombre, d.precio, d.local);
    
  };

  return (
    <>
     {listaDeseos.length === 0 ? (
        <p>No hay deseos aún</p>
      ) : (
        <p>LISTA DE DESEO </p>
      )}
    <div className={styles.contenedor}>    

      {editar ? (
        <ActualizarDeseo
          deseo={deseo}
          setEditar={setEditar}
          setDeseo={setDeseo}
          actualizarDeseo={actualizarDeseo}
        />
      ) : (
        listaDeseos.map((d) => (
          <div key={d.id} className={styles.carta}>
            <div className={styles.linea}>
              <strong>Nombre</strong>
              <span>{d.nombre}</span>
            </div>
            <div className={styles.linea}>
              <strong>Precio</strong>
              <span>{d.precio}</span>
            </div>
            <div className={styles.linea}>
              <strong>Local</strong>
              <span>{d.local}</span>
            </div>

            <button
              onClick={() => eliminarDeseo(d.id)}
              className={styles.boton}
            >
              Eliminar
            </button>

            <button
              onClick={() => {
                setEditar(true);
                setDeseo(d);
              }}
              className={styles.boton}
            >
              Actualizar
            </button>

            <button
              onClick={() => pasar(d)}
              className={styles.boton}
            >
              Pasar a Compra
            </button>
          </div>
        ))
      )}
    </div>
    </>
  );
};
