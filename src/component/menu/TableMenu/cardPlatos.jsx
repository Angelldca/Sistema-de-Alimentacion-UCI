import React, { useState } from "react";


function CardPlatos({ plato, editar, idPlatos, setIdPlatos }) {
  const [isUnderlined, setIsUnderlined] = useState(false);



  const handleCheckboxChange = (event)=>{
    const { checked } = event.target;
   
    if(!checked){
     // const nuevaLista = lista.filter(persona => persona.id !== id);
      
    }else{
     
    }

  }
  return (
    <>
      <div className="cardContenedorPlatos">
        <p className="pPlatos">{`${plato.nombre_plato}(${plato.gramaje})`}</p>
        <div className="precioChek">
        <p className="pPlatos">{`$ ${plato.precio_plato}`}</p>
       
        </div>
        

      </div>
  
    </>
  );
}

export default CardPlatos;