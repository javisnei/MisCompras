import React from "react";
import { Boton } from "../Boton/Boton";

export const Opciones = () => {
  const NuevaCompra = [
    {
      nombre: "Nueva",
      estilo: "estilo",
    },
  ];

  const ComprasPasadas = [
    {
      nombre: "Pasado",
      estilo: "estilo",
    },
  ];

  const Objetivos = [
    {
      nombre: "Objetivos",
      estilo: "estilo",
    },
  ];
  return (
    <>
      <div>
        {NuevaCompra.map((i, index) => {
          return <Boton key={index} nombre={i.nombre} estilo={i.estilo} />;
        })}
        {ComprasPasadas.map((i, index) => {
          return <Boton key={index} nombre={i.nombre} estilo={i.estilo} />;
        })}
        {Objetivos.map((i, index) => {
          return <Boton key={index} nombre={i.nombre} estilo={i.estilo} />;
        })}
      </div>
    </>
  );
};
