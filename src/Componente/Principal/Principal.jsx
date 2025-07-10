
import styles from "./Principal.module.css";
import { Nuevo } from "../Nuevo/Nuevo";
import { Productos } from "../Productos/Productos";


export const Principal = ( {producto,
  agregarProducto,
  agregarDeseo,
  eliminarProducto,
  actualizarProducto
}) => {
 

  return (

    
    <>
      <div className={styles.conteiner}>
        <Nuevo agregarProducto={agregarProducto} agregarDeseo={agregarDeseo} />

        <div className={styles.cajon}>
          {producto.map((p) => (
      

            
            <Productos
              key={p.id}
              producto={p}
              EliminarProducto={eliminarProducto}
              actualizarProducto={actualizarProducto}
            />
            
            
          ))}

        </div>
      </div>
    </>
  );
};
