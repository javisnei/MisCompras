import styles from "./Producto.module.css";
import { Nuevo } from "../Nuevo/Nuevo";
import { useState } from "react";
import { ActualizarProducto } from "./ActualizarProducto";

export const Productos = ({
  producto,
  EliminarProducto,
  actualizarProducto,
}) => {
  const [editar, setEditar] = useState(false);

  

  return (
    <>
      {editar ? (
        <ActualizarProducto
          producto={producto}
          actualizarProducto={actualizarProducto}
          setEditar={setEditar}
        />
      ) : (
        <div className={styles.carta}>
          <div className={styles.dato}>
            <div className={styles.titulo}>Nombre</div>
            <div>{producto.nombre}</div>
          </div>

          <div className={styles.dato}>
            <div className={styles.titulo}>Precio</div>
            <div>{producto.precio}</div>
          </div>

          <div className={styles.dato}>
            <div className={styles.titulo}>Local</div>
            <div>{producto.local}</div>
          </div>

          <div className={styles.botones}>
            <button onClick={() => EliminarProducto(producto.id)}>
              Eliminar
            </button>

            <button
              onClick={() => {
                setEditar(true);
              }}
            >
              Actualizar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
