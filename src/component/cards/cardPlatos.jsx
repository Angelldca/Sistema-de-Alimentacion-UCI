import React from "react";
import Card from "react-bootstrap/Card";
function CardPlatos({ plato }) {
  return (
    <>
        <span className="me-2">{plato.nombre_plato}</span>
      
      <span className="me-2">{`${plato.gramaje}`} </span>
     
      <span className="me-2">{`$ ${plato.precio_plato}`}</span>
      <br/>
    </>
  );
}

export default CardPlatos;

/*
      <p>{plato.nombre_plato}</p>
      <br />
      <p>{plato.gramaje} </p>
      <p>{plato.precio}</p>

     

*/
