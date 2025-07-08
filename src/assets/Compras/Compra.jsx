import React from 'react'

export const Compra = () => {
  return (
    <>
    <div>Informacion de Compra </div>

    <form>
        <h1>Compra</h1>
        <h6>Nombre </h6>
        <input
        type='text'
        placeholder='Nombre del Producto'
        name = "NombreProducto"
        />

        <h6> Precio </h6>
          <input
        type='number'
        placeholder='Precio del Producto'
        name = "PrecioProducto"
        />

        
        <h6> Local De compra </h6>
          <input
        type='text'
        placeholder='Local de Compra'
        name = "LocalCompra"
        />


        
        <h6> Garantia  </h6>
          <input
        type='date'
        placeholder='Tiempo de Garantia'
        name = "Garantia"
        />

        
        <h6> Foto </h6>
          <input
        type='image'
        placeholder='Foto del Producto'
        name = "FotoProducto"
        />





    </form>



    </>
  )
}
