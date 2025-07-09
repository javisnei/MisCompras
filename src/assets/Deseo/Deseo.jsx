import React from 'react'

export const Deseo = ({listaDeseos}) => {
  return (
    <div>

      <p>wiedsghfvioweovhwsg</p>
      <h2>Lista de Deseos</h2>
      {listaDeseos.length === 0 ? (
        <p>No hay deseos aún</p>
      ) : (
        listaDeseos.map((d) => (
          <div key={d.id}>
            <p>Nombre: {d.nombre}</p>
            <p>Precio: {d.precio}</p>
            <p>Garantía: {d.garantia}</p>
            <p>Local: {d.local}</p>
          </div>
        ))
      )}
    </div>
  )
}
