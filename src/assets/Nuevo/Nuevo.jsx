import React, { useState } from "react";
import styles from "./Nuevo.module.css";
import sty from "../Principal/Principal.module.css";
import { Productos } from "../Productos/Productos";
import { Principal } from "../Principal/Principal";

export const Nuevo = ({ agregarProducto, agregarDeseo }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [local, setLocal] = useState("");
  const [garantia, setGarantia] = useState("");

  const [p,setP] = useState(false);
  const [d,setD] = useState(false);

  const handleP = () => {
    setP(!p)
  }
   const handleD = () => {
    setD(!d)
  }

  const handleProducto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") return;
    agregarProducto(nombre, precio, local, garantia);
    setNombre("");
    setPrecio(0);
    setLocal("");
    setGarantia("");
  };

  const handleDeseo = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") return;
    agregarDeseo(nombre, precio, local, garantia);
    setNombre("");
    setPrecio(0);
    setLocal("");
    setGarantia("");
  };

  return (
    <>
        
          <div className={styles.carta}>
          
              <form className={styles.formulario}  onSubmit= {p && !d ? handleProducto : handleDeseo}>
                <h1>Informacion de la Compra</h1>

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
                <button onClick= {handleP} type="submit" className={sty.linkBoton}>
                  Agregar Compra
                </button>
                
                <button  onClick= {handleD}  type="submit"className={sty.linkBoton}>
                  Agregar Deseo
                </button>
              </form>
         
          </div>
    </>
  );
};
