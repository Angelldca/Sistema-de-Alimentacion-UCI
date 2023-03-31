import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
function CardPlatos({ plato, reservar, getChekbox,actualizar}) {
  const checkboxRef = useRef(null);
  useEffect(()=>{
    if( checkboxRef.current !== null)
    checkboxRef.current.checked = false
  },[actualizar])

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
        <input type="checkbox" name="check" ref={checkboxRef} onChange={handleCheckboxChange}/>
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
