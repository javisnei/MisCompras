import styles from "./Producto.module.css";
import { Nuevo } from "../Nuevo/Nuevo";

export const Productos = ({ producto, EliminarProducto }) => {
  return (
    <>
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

        <div className={styles.dato}>
          <div className={styles.titulo}>Garantía</div>
          <div>{producto.garantia}</div>
        </div>

        <div className={styles.botones}>
          <button onClick={() => EliminarProducto(producto.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
