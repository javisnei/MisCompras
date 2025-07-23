import React from "react";
import styles from "./Historial.module.css";
export const Historial = ({ historial }) => {
  const grupos = new Map();

  historial.forEach((item) => {
    const fecha = new Date(item.id);
    const mes = fecha.toLocaleString("es-ES", {
      month: "long",
      year: "numeric",
    });

    if (!grupos.has(mes)) {
      grupos.set(mes, []);
    }
    grupos.get(mes).push(item);
  });

  return (
    <div className={styles.historial}>


      {historial.length === 0 ? (
        <p>No hay Historial en el Momento </p>
      ) : (
        <p>Historial</p>
      )}

      
      {[...grupos.entries()].map(([mes, items]) => (
        <div key={mes} className={styles.grupoMes}>
          <h2 className={styles.tituloMes}>{mes}</h2>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <span className={styles.fecha}> <span> Dia </span>
                {new Date(item.id).toLocaleDateString("es-CO", {
                  day: "2-digit"
                })}
              </span>
              <span className={styles.nombre}>{item.nombre}</span>
              <span className={styles.nombre}>{item.precio}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
