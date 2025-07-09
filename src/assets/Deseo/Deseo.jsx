import React from 'react'
import styles from './Deseo.module.css'

export const Deseo = ({ listaDeseos,eliminarDeseo }) => {
  return (
    <div className={styles.contenedor}>
      {listaDeseos.length === 0 ? (
        <p>No hay deseos aún</p>
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
            <div className={styles.linea}>
              <strong>Garantía</strong>
              <span>{d.garantia}</span>
            </div>
            <button onClick={() => eliminarDeseo(d.id)} className={styles.boton}>Eliminar</button>
            
             <button onClick={() => eliminarDeseo(d.id)} className={styles.boton}>Actualizar</button>
          </div>
        ))
      )}
    </div>
  )
}
