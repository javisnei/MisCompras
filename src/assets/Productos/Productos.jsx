export const Productos = ({ prod, EliminarProducto }) => {
  return (
    <>
      <div>
        <label>Nombre</label>
        <label>Precio</label>
        <label>Local</label>
        <label>Garantia</label>
      </div><div>
        <p>{prod.nombre}</p>
        <p>{prod.precio}</p>
        <p>{prod.local}</p>
        <p>{prod.garantia}</p>
      </div>
      

       <button onClick={() => EliminarProducto(prod.id)}>
            Eliminar Tarea
          </button>
    </>
  );
};
