import React from "react";
import Card from "react-bootstrap/Card";
function CardPlatos({ plato, reservar, getChekbox }) {

  const handleCheckboxChange =  (event) => {
    const { checked } = event.target;
    getChekbox(plato.id_plato)
   
}
  if(reservar === true){
    return (
      <>
        <span className="me-2">{plato.nombre_plato}</span>
        
        <span className="me-2">{`${plato.gramaje}`} </span>
       
        <span className="me-2">{`$ ${plato.precio_plato}`}</span>
        <input type="checkbox" onChange={handleCheckboxChange}/>
        <br/>
      </>
    );
  }
 else{
   return (
     <>
       <span className="me-2">{plato.nombre_plato}</span>
       
       <span className="me-2">{`${plato.gramaje}`} </span>
      
       <span className="me-2">{`$ ${plato.precio_plato}`}</span>
       <br/>
     </>
   );

 }
}

export default CardPlatos;

/*
      <p>{plato.nombre_plato}</p>
      <br />
      <p>{plato.gramaje} </p>
      <p>{plato.precio}</p>

     

*/
