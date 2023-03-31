import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card";
import CardPlatos from './cardPlatos';
import { Button } from 'react-bootstrap';


function CardBody({menu}) {
  const [editar, setEditar] = useState(false);
  const [idPlatos,setIdPlatos] = useState([])
  
  
  useEffect(()=>{
    menu.platos.forEach((plato)=>{
     
      const nuevaLista = [...idPlatos];
      nuevaLista.push(plato.id_plato);
      setIdPlatos(nuevaLista)
    })
  },[])

    return (
        <>
             <Card.Body>
            <Card.Title style={{display:"flex",justifyContent:"space-around"}}>
              {`${menu.evento}`}
             
            </Card.Title>
           
                
             {
               
               menu.platos.map((plato,index)=>(
                   <CardPlatos 
                   plato={plato}
                    key={index} 
                    editar={editar}
                     idPlatos={idPlatos}
                     setIdPlatos={setIdPlatos}
                     />
               ))
               
               
               }
            
           
          </Card.Body>
          <hr />
        </>
    )
}

export default CardBody