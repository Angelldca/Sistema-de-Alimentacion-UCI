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
     <span className="me-2 " >{plato.nombre_plato  }</span>
     
      <span className="me-2 " >{`${plato.gramaje}`  } </span>
     
      <span className="me-2 " >{`$ ${plato.precio_plato}`  }</span>
     
      <br/>
  
    </>
  );
}

export default CardPlatos;