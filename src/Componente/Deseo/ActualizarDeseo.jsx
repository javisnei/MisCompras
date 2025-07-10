import React from 'react'

import styles from "../Nuevo/Nuevo.module.css";
import sty from "../Principal/Principal.module.css";

export const ActualizarDeseo = ( {deseo , setEditar,setDeseo,actualizarDeseo} ) => {

    const handleSave = () => {
    if (deseo.nombre.trim() === "") return;

    actualizarDeseo( deseo.id, deseo.nombre, deseo.precio, deseo.local);

    setEditar(false);
  };

  const cambio = () =>{
    setEditar(false);
  }


  return (
    <>
        <div className={styles.carta}>
                <form
                  className={styles.formulario}
                  onSubmit={handleSave}
                >
                  <h1>Informacion de la Compra</h1>
        
                  <div className={styles.Rellenar}>
                    <label>Nombre</label>
                    <input
                      className={styles.Inp}
                      type="text"
                      placeholder="Nombre del Producto"
                      name="NombreProducto"
                      value={deseo.nombre}
                      onChange={(e) => setDeseo({...deseo, nombre:e.target.value})}

                    />
                  </div>
        
                  <div className={styles.Rellenar}>
                    <label>Precio</label>
                    <input
                      className={styles.Inp}
                      type="number"
                      placeholder="Precio del Producto"
                      name="PrecioProducto"
                      value={deseo.precio}
                      onChange={(e) => setDeseo({...deseo, precio:e.target.value})}
                    />
                  </div>
        
                  <div className={styles.Rellenar}>
                    <label>Local de compra</label>
                    <input
                      className={styles.Inp}
                      type="text"
                      placeholder="Local de Compra"
                      name="LocalCompra"
                      value={deseo.local}
                      onChange={(e) => setDeseo({...deseo, local:e.target.value})}
                    />
                  </div>
        
                  <button type="submit" name="compra" className={sty.linkBoton}>
                    Actualizar
                  </button>
        
                  <button type="submit" name="deseo" onClick={cambio} className={sty.linkBoton}>
                    Cancelar
                  </button>
                </form>
              </div>
              
    </>
  )
}
