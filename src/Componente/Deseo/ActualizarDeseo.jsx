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
                     value={deseo.nombre}
                      onChange={(e) => setDeseo({...deseo, nombre:e.target.value})}
                  />
                  <input
                    type="number"
                    placeholder="Precio del Producto"
                    name="PrecioProducto"
                    value={deseo.precio}
                      onChange={(e) => setDeseo({...deseo, precio:e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Local de Compra"
                    name="LocalCompra"
                   value={deseo.local}
                      onChange={(e) => setDeseo({...deseo, local:e.target.value})}
                  />
                </div>
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
