import React, { useState } from "react";
import styles from "./Nuevo.module.css";
import sty from "../Principal/Principal.module.css";

export const Nuevo = ({AgregarProducto}) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [local, setLocal] = useState("");
  const [garantia, setGarantia] = useState("");
  
  const handleProducto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" ) return;
      AgregarProducto(nombre, precio, local, garantia);
      setNombre("");
      setPrecio(0);
      setLocal("");
      setGarantia("");
  };

  return (
    <>
      <div className={styles.cuerpo}>
        <div className={styles.carta}>
          <div className={styles.info}>Información de Compra</div>
          <div className={styles}>





            <form className={styles.formulario} onSubmit={handleProducto}>
              <h1>Compra</h1>

              <div className={styles.Rellenar}>
                <label>Nombre</label>
                <input
                  className={styles.Inp}
                  type="text"
                  placeholder="Nombre del Producto"
                  name="NombreProducto"
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
                />
              </div>

              <button className={sty.linkBoton}  type="submit">
                Agregar Compra
              </button>
               <button className={sty.linkBoton}  type="submit">
                Agregar Deseo
              </button>
            </form>






          </div>
        </div>
      </div>
    </>
  );
};
