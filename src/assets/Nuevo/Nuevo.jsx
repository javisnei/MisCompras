import React, { useState } from "react";
import styles from "./Nuevo.module.css";
import sty from "../Principal/Principal.module.css";

export const Nuevo = ({ agregarProducto, agregarDeseo }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [local, setLocal] = useState("");
  const [garantia, setGarantia] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" ) return  alert("Falta rellenar Nombre o Precio");

    const botonPresionado = e.nativeEvent.submitter.name;

    if (botonPresionado === "compra") {
      agregarProducto(nombre, precio, local, garantia);
      alert("AÑADIDO CORRECTAMENTE A PRODUCTOS");
    } else if (botonPresionado === "deseo") {
      agregarDeseo(nombre, precio, local, garantia);
      alert("AÑADIDO CORRECTAMENTE A DESEOS");
    }

    // Reiniciar campos
    setNombre("");
    setPrecio(0);
    setLocal("");
    setGarantia("");
  };

  return (
    <>
      <div className={styles.carta}>
        <form
          className={styles.formulario}
          onSubmit={handleSubmit}
        >
          <h1>Informacion de la Compra</h1>

          <div className={styles.Rellenar}>
            <label>Nombre</label>
            <input
              className={styles.Inp}
              type="text"
              placeholder="Nombre del Producto"
              name="NombreProducto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className={styles.Rellenar}>
            <label>Precio</label>
            <input
              className={styles.Inp}
              type="number"
              placeholder="Precio del Producto"
              name="PrecioProducto"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          <div className={styles.Rellenar}>
            <label>Local de compra</label>
            <input
              className={styles.Inp}
              type="text"
              placeholder="Local de Compra"
              name="LocalCompra"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />
          </div>

          <div className={styles.Rellenar}>
            <label>Garantía</label>
            <input
              className={styles.Inp}
              onChange={(e) => setGarantia(e.target.value)}
              type="date"
              name="Garantia"
              value={garantia}
            />
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
