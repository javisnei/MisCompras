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
          <label>Informacion de la Compra</label>
              <div className={styles.cont}>
                <div className={styles.etiqueta}>
                  <span>Nombre</span>
                  <span>Precio</span>
                  <span>Local de compra</span>
                </div>
    
                <div >
                  <input
                    type="text"
                    placeholder="Nombre del Producto"
                    name="NombreProducto"
                    value={compra.nombre}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    placeholder="Precio del Producto"
                    name="PrecioProducto"
                    value={compra.precio}
              onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Local de Compra"
                    name="LocalCompra"
                   value={compra.local}
              onChange={handleChange}
                  />
                </div>
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
