import React, { useEffect, useRef } from "react";




function CardPlatosActualizar({ plato, getChekbox, chekboxs}) {
  const checkboxRef = useRef(null);
  

  useEffect(()=>{
    if( checkboxRef.current !== null && chekboxs.indexOf(plato.id_plato) !== -1)
    checkboxRef.current.checked = true
  },[chekboxs])
  const handleCheckboxChange =  (event) => {
    //const { checked } = event.target;
    getChekbox(plato.id_plato)
   
}
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

export default CardPlatosActualizar;

/*
      <p>{plato.nombre_plato}</p>
      <br />
      <p>{plato.gramaje} </p>
      <p>{plato.precio}</p>

     

*/
