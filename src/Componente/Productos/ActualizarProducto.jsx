import React, { useState } from "react";

import styles from "../Nuevo/Nuevo.module.css";
import sty from "../Principal/Principal.module.css";

export const ActualizarProducto = ({
  producto,
  setEditar,
  actualizarProducto,
}) => {

  const [compra, setCompra] = useState({
    nombre: producto.nombre,
    precio: producto.precio,
    local: producto.local
  });
  const handleChange = (nuevo) => {
    setCompra({
      ...compra,
      [nuevo.target.name]: nuevo.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (compra.nombre.trim() === "") return;

    actualizarProducto(
      producto.id,
      compra.nombre,
      compra.precio,
      compra.local
    );

    setEditar(false);
  };

  const cambio = () => {
    setEditar(false);
  };

  return (
    <>
      <div className={styles.carta}>
        <form className={styles.formulario} onSubmit={handleSave}>
          <h1>Informacion de la Compra</h1>

          <div className={styles.Rellenar}>
            <label>Nombre</label>
            <input
              className={styles.Inp}
              type="text"
              placeholder="Nombre del Producto"
              name="nombre"
              value={compra.nombre}
              onChange={handleChange}
            />
          </div>

          <div className={styles.Rellenar}>
            <label>Precio</label>
            <input
              className={styles.Inp}
              type="number"
              placeholder="Precio del Producto"
              name="precio"
              value={compra.precio}
              onChange={handleChange}
            />
          </div>

          <div className={styles.Rellenar}>
            <label>Local de compra</label>
            <input
              className={styles.Inp}
              type="text"
              placeholder="Local de Compra"
              name="local"
              value={compra.local}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={sty.linkBoton}>
            Actualizar
          </button>

          <button
            type="submit"
            name="deseo"
            onClick={cambio}
            className={sty.linkBoton}
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
};
