import React, { useState } from "react";
import styles from "./Nuevo.module.css";
import sty from "../Principal/Principal.module.css";

export const Nuevo = ({ agregarProducto, agregarDeseo }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [local, setLocal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      alert("Falta rellenar Nombre ");
      return;
    }
    if (precio < 0) {
      alert("⚠️ El precio debe ser un número positivo.");
      return;
    }

    const botonPresionado = e.nativeEvent.submitter.name;

    if (botonPresionado === "compra") {
      agregarProducto(nombre, precio, local);
      alert("AÑADIDO CORRECTAMENTE A PRODUCTOS");
    } else if (botonPresionado === "deseo") {
      agregarDeseo(nombre, precio, local);
      alert("AÑADIDO CORRECTAMENTE A DESEOS");
    }

    // Reiniciar campos
    setNombre("");
    setPrecio(0);
    setLocal("");
  };

  return (
    <>
      <div className={styles.carta}>
       
        <form className={styles.formulario} onSubmit={handleSubmit}>
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
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                type="number"
                placeholder="Precio del Producto"
                name="PrecioProducto"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
              <input
                type="text"
                placeholder="Local de Compra"
                name="LocalCompra"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" name="compra" className={sty.linkBoton}>
            Agregar Compra
          </button>

          <button type="submit" name="deseo" className={sty.linkBoton}>
            Agregar Deseo
          </button>
        </form>
      </div>
    </>
  );
};
