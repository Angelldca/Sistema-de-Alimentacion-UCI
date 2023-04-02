import React, { useEffect, useRef } from "react";

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
      <div className="cardContenedorPlatos">
        <p className="pPlatos">{`${plato.nombre_plato}(${plato.gramaje})`}</p>
        <div className="precioChek">
        <p className="pPlatos">{`$ ${plato.precio_plato}`}</p>
        <input type="checkbox" name="check" ref={checkboxRef} onChange={handleCheckboxChange}/>
        </div>
        

      </div>
        <br/>
      </>
    );
  }
 else{
   return (
     <>
    <div className="cardContenedorPlatos">
        <p className="pPlatos">{`${plato.nombre_plato}(${plato.gramaje})`}</p>
        <div className="precioChek">
        <p className="pPlatos">{`$ ${plato.precio_plato}`}</p>
        </div>
    </div> 
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
