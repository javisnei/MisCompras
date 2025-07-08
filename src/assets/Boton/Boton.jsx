import React from 'react'
import styles from './Boton.module.css'

export const Boton = ({nombre, estilo}) => {
  return (
    <button className={styles[estilo]}> 
        {nombre}
    </button>
  )
}
